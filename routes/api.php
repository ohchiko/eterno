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
Route::post('/users/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|string',
    ]);

    $user = App\User::where('email', $request->email)->first();
    if ($user !== null && Hash::check($request->password, $user->password))
        return $user->only(['api_token']);
    else
        return response()->json([
            'message' => 'Unauthorized.',
            'errors' => [
                'user' => ['Data user tidak ditemukan.'],
            ],
        ], 401);
})->name('users.login');

Route::middleware('auth:api')->group(function () {
    Route::get('/users/auth', 'UserController@getAuth')->name('users.getAuth');
    Route::apiResources([
        'books' => 'BookController',
        'users' => 'UserController',
    ]);

    Route::get('/visitors', function () {
        return Spatie\Permission\Models\Role::findByName('visitor')->users()->where('created_by', auth()->id())->get();
    });
});
