<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\UnitsController;

use App\Http\Controllers\ProductsController;
use App\Http\Controllers\Product\ProductExportController;
use App\Http\Controllers\CustomersController;
use App\Http\Controllers\Order\OrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('/products', ProductsController::class);
Route::get('/products/export', [ProductExportController::class, 'store']); 

Route::apiResource('/customers', CustomersController::class);
Route::apiResource('/units', UnitsController::class);
Route::apiResource('/categories', CategoriesController::class);

//orders 
Route::apiResource('/orders', OrderController::class);