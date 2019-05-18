<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'user_id', 'name', 'description', 'file_url', 'file_name',
    ];

    protected $dates = [
        'created_at', 'updated_at', 'deleted_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
