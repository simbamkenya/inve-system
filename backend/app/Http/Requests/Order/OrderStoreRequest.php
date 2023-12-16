<?php

namespace App\Http\Requests\Order;

use App\Enums\OrderStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Carbon;
use Gloudemans\Shoppingcart\Facades\Cart;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class OrderStoreRequest extends FormRequest
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
            'customer_id' => 'required',
            'payment_type' => 'required',
            'pay' => 'required|numeric'
        ];
    }

    public function prepareValidation()
    {
        $this->merge([
            'order_status' => OrderStatus::PENDING->value,
            'order_date' => Carbon::now()->format('Y-m-d'),
            'total_products' => Cart::count(),
            'sub_total' => Cart::subtotal(),
            'total' => Cart::total(),
            'invoice_no' => IdGenerator::generate([
                'table' => 'orders',
                'field' => 'invoice_no',
                'length' => 10,
                'prefix' => 'INV-'
            ]),
            'due' => (Cart::total() - $this->pay)
        ]);
    }
}
