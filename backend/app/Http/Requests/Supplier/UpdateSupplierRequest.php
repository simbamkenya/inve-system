<?php

namespace App\Http\Requests\Supplier;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateSupplierRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'name' => [
                'required',
                'string',
                'max:50'
            ],
            'email' => [
                'required',
                'email',
                'max:50',
                Rule::unique('suppliers','email')->ignore($this->email)
            ],
            'phone' => [
                'required',
                'string',
                'max:25',
                Rule::unique('suppliers','phone')->ignore($this->phone)
            ],
            'photo' => [
                'image',
                'file',
                'max:1024',
            ],
            'address' => [
                'required',
                'string',
                'max:100'
            ],
            'type' => [
                'required',
                'string',
                'max:25',
            ],
            'shopname' => [
                'required',
                'string',
                'max:50'
            ],
        ];
    }
}
