<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class comments extends Model
{
    protected $fillable = [
        'parent_id', 'post_id', 'user_id', 'email', 'name', 'comment', 'status'
    ];
}
