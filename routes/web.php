<?php

use App\Http\Controllers\AthleteController;
use App\Http\Controllers\HighlightController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SportMatchController;
use App\Http\Controllers\TeamController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'news' => Route::has('news.invoke')
    ]);
});

Route::get('/', [NewsController::class, '__invoke'])->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::resource("admin/news", NewsController::class);
    Route::resource("admin/match", SportMatchController::class);
    Route::resource("admin/team", TeamController::class);
    Route::resource("admin/match/{match}/highlight", HighlightController::class);
    Route::get("admin/match/{match}/highlight", [SportMatchController::class,'getMatchHighlight'])->name('match.highlight');
    Route::resource("admin/team/{team}/athlete", AthleteController::class);
    Route::get('admin/team/{team}/athlete', [TeamController::class, 'getTeamAthletes'])->name('team.athletes');
    Route::get('/news', [NewsController::class, 'getAllNews'])->name('news.page');
    Route::get('/match', [SportMatchController::class, '__invoke']);

    Route::get('/highlight', [HighlightController::class, '__invoke'])->name('highlight.page'); 
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__ . '/auth.php';
