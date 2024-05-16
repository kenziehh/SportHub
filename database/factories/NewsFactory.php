<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => fake()->sentence(),
            "content" => fake()->realText(),
            "author" => fake()->name(),
            "image_url" => fake()->imageUrl(),
            'category' => fake()->randomElement(['Basketball', 'Football', 'Badminton', 'Futsal', 'Volley', 'Baseball']),
            "release_date" => fake()->date(),
        ];
    }
}
