<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:manage users'])
             ->except(['login', 'getAuth', 'store']);
    }

    public function getAuth(Request $request)
    {
        $token = explode(' ', $request->header('Authorization'))[1];

        return User::where('api_token', $token)
            ->exclude(['api_token', 'remember_token', 'email_verified_at'])
            ->with('roles')
            ->firstOrFail();
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();
        if ($user !== null && Hash::check($request->password, $user->password))
            return $user->only(['api_token']);
        else
            return response()->json([
                'message' => 'Unauthorized.',
                'errors' => [
                    'user' => ['Data user tidak ditemukan.'],
                ],
            ], 401);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::withTrashed()->with('roles')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ((auth()->user()->hasRole('school', 'api') && $request->role === 'visitor') || (auth()->user()->hasRole('admin', 'api'))) {
            $request->validate([
                'name' => 'required|string',
                'email' => 'required|email|unique:users',
                'password' => 'required|confirmed',
            ]);

            // check if role exists in guard api
            $role = Role::findByName($request->role, 'api');

            $new = [
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'api_token' => Str::random(60),
            ];

            if (auth()->user()->hasRole('school', 'api')) {
                $user = auth()->user()->visitor()->create($new);
            } else {
                $user = User::create($new);
            }

            $user->assignRole($role);

            return $user;
        }

        return abort(403);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::withTrashed()->with('roles')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string',
        ]);

        $user = User::findOrFail($id);

        if (Auth::id() !== $user->id)
            return response()->json([
                'message' => 'Unauthorized.',
                'errors' => [
                    'user' => ['Anda tidak memiliki hak untuk melakukan tindakan ini.'],
                ],
            ], 401);

        $user->name = $request->name;
        $user->save();

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
