<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Sanctum;

/*
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
*/

Route::middleware(['auth:Sanctum','admin'])->gruop(function (){
    Route::get('/user',[App\Http\Controllers\AuthController::class,'getUser']);
    Route::post('/logout',[App\Http\Controllers\AuthController::class,'logout']);
});

Route::post('/login',[App\Http\Controllers\AuthController::class,'login']);