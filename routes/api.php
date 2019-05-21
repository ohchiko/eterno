<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->group(function () {
    Route::apiResources([
        'books' => 'BookController',
        'users' => 'UserController',
    ]);
});

Route::post('/users', 'UserController@store')->name('users.store');

Route::middleware('guest:api')->post('/users/login', 'UserController@login')->name('users.login');
