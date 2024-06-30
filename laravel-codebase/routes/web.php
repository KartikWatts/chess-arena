<?php

use App\Http\Livewire\Main;
// use App\Http\Livewire\Puzzle\Puzzle;
use App\Http\Livewire\Puzzle\QuickSolve;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', Main::class);
// Route::get('/puzzle', Puzzle::class);
Route::get('/puzzle/quick-solve', QuickSolve::class)->name('test');