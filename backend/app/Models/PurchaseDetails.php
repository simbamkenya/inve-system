<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseDetails extends Model
{
    use HasFactory;

    protected $fillable = [
        'purchase_id',
        'product_id',
        'quantity',
        'unitcost',
        'total'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // protected $with = ['product'];

    public function product(){
       return $this->belongsTo(Product::class);
    }

    public function purchase(){
        return $this->belongsTo(Purchase::class);
    }
}

