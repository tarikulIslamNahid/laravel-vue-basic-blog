<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class blogs extends Model
{
    protected $fillable = [
        'title', 'slug', 'category_id', 'subcategory_id', 'photo', 'tags', 'disc', 'added_by', 'approved', 'status', 'meta_title', 'meta_desc', 'meta_img', 'meta_keyword'
    ];
    public function category()
    {
        return $this->belongsTo('App\categories', 'category_id');
    }
    public function subcategory()
    {
        return $this->belongsTo('App\subCategory', 'subcategory_id');
    }
}
