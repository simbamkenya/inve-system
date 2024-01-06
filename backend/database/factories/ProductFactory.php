<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
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
            'slug' => fake()->word(),
            'quantity' => fake()->randomNumber(2),
            'quantity_alert' => fake()->randomNumber([5,10,15]),
            'selling_price' => fake()->randomNumber(2),
            'buying_price' => fake()->randomNumber(2),
            'category_id' => fake()->randomElement([1, 2, 3, 4, 5]),
            'unit_id' => fake()->randomElement([1, 2, 3]),
        ];
    }
}
