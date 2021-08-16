<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WebsiteController extends Controller
{
   public function index(){
    try {


        return view('frontend.website.layout.master');
    } catch (\Exception $e) {
        return response()->json(['error' => trans("lang.Oops, Something Went Wrong")]);

    }
   }
}
