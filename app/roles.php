<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class roles extends Model
{
    protected $fillable = [
        'name', 'permissions'
    ];
}