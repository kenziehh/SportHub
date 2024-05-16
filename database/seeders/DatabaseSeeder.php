<?php

namespace Database\Seeders;

use App\Models\Athlete;
use App\Models\Highlight;
use App\Models\News;
use App\Models\SportMatch;
use App\Models\Team;
use App\Models\User;
use Database\Factories\HighlightFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        News::factory()->count(50)->create();
        Team::factory()->count(10)->create();
        Athlete::factory()->count(50)->create();
        SportMatch::factory()->count(50)->create();
        Highlight::factory()->count(50)->create();
    }
}
