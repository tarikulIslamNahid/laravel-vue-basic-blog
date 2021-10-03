<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class email_template extends Model
{
    protected $fillable = [
        'title', 'slug', 'subject', 'body',
    ];
}
