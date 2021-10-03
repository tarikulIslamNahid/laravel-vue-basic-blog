<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class blogs extends Model
{
    protected $fillable = [
        'title', 'slug', 'user_id', 'category_id', 'subcategory_id', 'photo', 'tags', 'disc', 'featured', 'added_by', 'approved', 'status', 'meta_title', 'meta_desc', 'meta_img', 'meta_keyword'
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
