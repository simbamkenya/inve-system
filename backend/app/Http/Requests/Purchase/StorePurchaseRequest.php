<?php

namespace App\Http\Requests;

use App\Enums\PurchaseStatus;
use Illuminate\Foundation\Http\FormRequest;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class StorePurchaseRequest extends FormRequest
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
            'supplier_id' => 'required',
            'date' => 'required|string',
            'purchase_no' => '',
            'status' => 'required',
            'total_amount' => 'required|numeric',
            'created_by' => '',
            'updated_by' => ''
        ];
    }

    public function prepareForValidation()
    {
        $this->merge([
            'purchase_no' => IdGenerator::generate([
                'table' => 'purchases',
                'field' => 'purchase_no',
                'length' => 10,
                'prefix' => 'PRS-'
            ]),
            'status' => PurchaseStatus::PENDING->value,
            'created_by' => auth()->user()->id
        ]);
    }
    
    public function messages()
    {
     return [
        'supplier_id.required' => 'Supplier is required'
     ]; 
    }
}
