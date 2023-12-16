<?php

namespace App\Models;

use App\Enums\OrderStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PurchaseDetails;
use App\Models\Customer;


class Order extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    protected $fillable = [
        'customer_id',
        'order_date',
        'order_status',
        'total_products',
        'sub_total',
        'total',
        'invoice_no',
        'pay',
        'due',
        'payment_type'
    ];
    

    protected $casts = [
        'order_date'    => 'date',
        'created_at'    => 'datetime',
        'updated_at'    => 'datetime',
        'order_status'  => OrderStatus::class
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function details()
    {
        return $this->hasMany(PurchaseDetails::class);
    }
}
