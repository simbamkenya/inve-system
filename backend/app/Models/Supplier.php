<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    protected $guarded = [
        'id',
    ];

    protected $fillable = [
        'name',
        'email',
        'photo',
        'phone',
        'address',
        'type',
        'shopname',
        'account_holder',
        'account_number',
        'bank_name',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function purchases(){
        return $this->hasMany(Purchase::class);
    }

}

