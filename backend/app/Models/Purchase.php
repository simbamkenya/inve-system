<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    protected $fillable = [
        'supplier_id',
        'date',
        'purchase_no',
        'status',
        'total_amount',
        'created_by',
        'updated_by'
    ];

    protected $casts = [
        'created_by' => 'datetime',
        'updated_by' => 'datetime',
        'date' => 'date'
    ];

    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_id', 'id');
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }

    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by', 'id');
    }

    public function details()
    {
        return $this->hasMany(PurchaseDetails::class);
    }
}
