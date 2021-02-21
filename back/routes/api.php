<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DateController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/** DateController */
Route::get('dates',[DateController::class, 'index']);

Route::get('dates/{id}',[DateController::class, 'show']);

Route::post('date',[DateController::class, 'create']);

Route::put('dates/{id}',[DateController::class, 'update']);

Route::delete('dates/{id}',[DateController::class, 'destroy']);

Route::get('holiday/{id}', [DateController::class, 'findHoliday']);
