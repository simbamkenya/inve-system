<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use Illuminate\Database\Seeder;
use App\Models\Customer;
use App\Models\Product;
use App\Models\Supplier;
use App\Models\User;
use App\Models\Unit;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // $this->call([
        //     UserSeeder::c,
        //     CategorySeeder::class,
        //     UnitSeeder::class,
        //     ProductSeeder::class
        // ]);
        // $names = ['apple', 'bike', 'chair'];
        // foreach ($names as $name) {
        //     Unit::factory()->create([
        //         'name' => $name,
        //     ]);
        // }


        User::factory(3)->create();
        Unit::factory(10)->create();
        Category::factory(10)->create();
        Product::factory(15)->create();

        Customer::factory(5)->create();
        Supplier::factory(5)->create();
    }
}
