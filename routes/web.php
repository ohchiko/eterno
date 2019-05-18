<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
<<<<<<< HEAD
});

Auth::routes();
=======
})->middleware('guest');

//Auth::routes();
Route::post('login', 'Auth\LoginController@authenticate')->name('login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::post('register', 'Auth\RegisterController@register')->name('register');
>>>>>>> d569e246a4c0a5bc4a366f9675b33b2435fde6c2

Route::get('/home', 'HomeController@index')->name('home');
