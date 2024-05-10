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
        Schema::create('sport_matches', function (Blueprint $table) {
            $table->id();
            $table->string("category");
            $table->string("home_team");
            $table->integer("home_score");
            $table->string("away_team");
            $table->integer("away_score");
            $table->string("place");
            $table->string("home_image");
            $table->string("away_image");
            $table->dateTime('match_datetime');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sport_matches');
    }
};
