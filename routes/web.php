<?php

use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SportMatchController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});
Route::get('/news', [NewsController::class, '__invoke']);
Route::get('/match', [SportMatchController::class, '__invoke']);

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::resource("admin/news", NewsController::class);
    // Route::post('admin/news/create', [NewsController::class, 'store'])->name('news.store');
    // Route::resource("admin/match", SportMatchController::class);
});

Route::middleware('auth')->group(function () {
    Route::resource("admin/match", SportMatchController::class);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__ . '/auth.php';
