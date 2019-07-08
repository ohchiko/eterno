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
Route::post('/users', 'UserController@store')->name('users.store');
Route::post('/users/login', 'UserController@login')->name('users.login');

Route::middleware('auth:api')->group(function () {
    Route::get('/users/auth', 'UserController@getAuth')->name('users.getAuth');
    Route::apiResources([
        'books' => 'BookController',
        'users' => 'UserController',
    ]);
});
