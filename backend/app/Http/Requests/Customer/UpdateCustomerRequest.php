<?php

namespace App\Http\Requests\Customer;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCustomerRequest extends FormRequest
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
                'max:25',
            ],
            'email' => [
                'required',
                'email',
                'max:50',
                Rule::unique('customers', 'email')->ignore($this->customer)
            ],
            'phone' => [
                'required',
                'string',
                'max:25',
                Rule::unique('customers', 'phone')->ignore($this->customer)
            ],
            'address' => [
                'required',
                'max:100',
                'string',
            ],
            'photo' => [
                'image',
                'file',
                'max:1024'
            ],
            'account_holder' => [
                'max:50'
            ],
            'account_number' => [
                'max:25'
            ],
            'bank_name' => [
                'max:25'
            ],

        ];
    }
}
