<?php

namespace App\Http\Requests;

use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class StoreProductRequest extends FormRequest
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
            'name' => 'required|string',
            'quantity' => 'required|integer',
            'slug' => 'required|unique:products',
            'description' => 'nullable|max:1000',
            'quantity' => 'required|integer',
            'quantity_alert' => 'required|integer',
            'selling_price' => 'required|integer',
            'buying_price' => 'required|integer',
            'product_image' => 'image|file|max:2048',
            'category_id' => 'required|integer',
            'unit_id' => 'required|integer',
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'slug' => Str::slug($this->name, '-'),
            'code' => IdGenerator::generate([
                'table' => 'products',
                'field' => 'code',
                'length' => 4,
                'prefix' => 'PC'
            ])
        ]);
    }
}
