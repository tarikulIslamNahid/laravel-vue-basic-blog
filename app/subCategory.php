<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class subCategory extends Model
{
    protected $fillable = [
        'name', 'slug', 'category_id',
    ];
    public function category()
    {
        return $this->belongsTo('App\categories', 'category_id');
    }
}
