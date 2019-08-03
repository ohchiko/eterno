<?php

namespace App;

//use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes, HasRoles;

    protected $guard_name = 'api';

    protected $columns = [
        'id', 'name', 'email', 'email_verified_at', 'password', 'api_token', 'admin', 'remember_token', 'created_at', 'updated_at', 'deleted_at',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'api_token',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'admin' => 'boolean',
    ];

    public function admin()
    {
        return $this->admin;
    }

    public function promoteAdmin()
    {
        $this->admin = 1;
        return $this->save();
    }

    public function books()
    {
        return $this->hasMany(Book::class);
    }

    public function scopeExclude($query, $value = [])
    {
        return $query->select(array_diff($this->columns, (array) $value));
    }

    public function visitor()
    {
        return $this->hasMany('App\User', 'created_by');
    }

    public function creator()
    {
        return $this->belongsTo('App\User', 'created_by');
    }
}
