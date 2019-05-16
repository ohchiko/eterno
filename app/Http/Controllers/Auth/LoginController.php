<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/#/home';
    protected $client;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->client = DB::table('oauth_clients')->where('name', 'eterno')->first();
    }

    public function authenticate(Request $request)
    {
        if (Auth::attempt($request->only('email', 'password'))) {
            $http = new \GuzzleHttp\Client([
                'base_uri' => url('/')
            ]);

            $response = $http->post('oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => $this->client->id,
                    'client_secret' => $this->client->secret,
                    'username' => $email,
                    'password' => $password,
                    'scope' => ''
                ]
            ]);
            session(['cred' => (string)$response->getBody()]);
        }
        return redirect('/home');
    }
}
