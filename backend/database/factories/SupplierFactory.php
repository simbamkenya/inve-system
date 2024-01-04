<?php

namespace Database\Factories;

use App\Enums\SupplierType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Supplier>
 */
class SupplierFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'name' => fake()->word(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->unique()->phoneNumber(),
            'address' => fake()->address(),
            'type' => fake()->randomElement(SupplierType::cases()),
            'shopname' => fake()->company(),
            'account_holder' => fake()->name(),
            'account_number' => fake()->randomNumber(8, true),
            'bank_name'  => fake()->randomElement(['Equity', 'KCB', 'NCBA', 'Family'])

        ];
    }
}
