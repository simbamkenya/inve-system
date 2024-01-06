<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            //
            $table->id();
            $table->string('name')->nullable();
            $table->string('slug')->nullable();
            $table->integer('quantity')->nullable();
            $table->integer('quantity_alert')->nullable();
            $table->integer('selling_price')->nullable();
            $table->integer('buying_price')->nullable();
            $table->string('code')->unique()->nullable();
            $table->text('note')->nullable()->nullable();
            $table->string('product_image')->nullable();

            // $table->foreignId('category_id')->references('id')->constrained()->cascadeOnDelete();
            $table->foreignId('category_id')->nullable()->constrained('categories')->cascadeOnDelete();
            $table->foreignId('unit_id')->nullable()->constrained('units')->cascadeOnDelete();
           // $table->foreignId('unit_id')->constrained()->cascadeOnDelete();
            

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            //
        });
    }
};
