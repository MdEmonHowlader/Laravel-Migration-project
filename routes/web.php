<?php

use App\Http\Controllers\FrontendController;
use App\Http\Controllers\HomeController;
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

Route::get('/',[HomeController::class, 'Page']);
Route::get('/service', [FrontendController::class, 'Service'] );
Route::get('/about', [FrontendController::class, 'About'] );
Route::get('/vet', [FrontendController::class, 'Veterinary'] );
Route::get('/gallery', [FrontendController::class, 'Gallery'] );
Route::get('/pricing', [FrontendController::class, 'Pricing'] );
Route::get('/blog', [FrontendController::class, 'Blog'] );
Route::get('/contact', [FrontendController::class, 'Contact'] );
Route::get('/login', [FrontendController::class, 'Login'] );
Route::get('/registration', [FrontendController::class, 'Registration'] );
