<?php

namespace App\Http\Controllers;

use App\blogs;
use App\subCategory;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlogsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        try {
            // $validateData = $request->validate();
            $validator = Validator::make($request->all(), [
                'title' => 'required|unique:blogs|max:255',
                'category_id' => 'required',
                'subcategory_id' => 'required',
                'photo' => 'required',
                'tags' => 'required',
                'disc' => 'required',
                'meta_title' => 'required',
                'meta_desc' => 'required',
                'meta_keyword' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors(), 422]);
            } else {
                $blogs = new blogs;
                $position = strpos($request->photo, ';');
                $sub = substr($request->photo, 0, $position);
                $ext = explode('/', $sub)[1];
                $name = time() . '.' . $ext;
                $img = Image::make($request->photo)->resize(250, 250);

                $upload_path = 'images/posts/';
                $image_url = $upload_path . $name;
                $img->save($image_url);

                $blogs->title = $request->title;
                $blogs->slug = Str::slug($request->title);
                $blogs->category_id = $request->category_id;
                $blogs->subcategory_id = $request->subcategory_id;
                $blogs->tags = json_encode($request->tags);
                $blogs->disc = $request->disc;
                $blogs->meta_title = $request->meta_title;
                $blogs->meta_desc = $request->meta_desc;
                $blogs->meta_keyword = $request->meta_keyword;
                $blogs->photo = '/' . $image_url;
                $blogs->meta_img = '/' . $image_url;

                $blogs->added_by = Auth::user()->name;
                if (Auth::user()->user_type = 1) {
                    $blogs->approved = 1;
                } else {
                    $blogs->approved = 0;
                }
                $blogs->save();
                return response()->json(['success' => "Category Created Successfully !"]);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => "Oops, Something Went Wrong"]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\blogs  $blogs
     * @return \Illuminate\Http\Response
     */
    public function show(blogs $blogs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\blogs  $blogs
     * @return \Illuminate\Http\Response
     */
    public function edit(blogs $blogs)
    {
        //
    }

    public function depsubcategories($id)
    {
        $subcategory = subCategory::where('category_id', $id)->get();
        return response()->json(['subcategory' => $subcategory]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\blogs  $blogs
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, blogs $blogs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\blogs  $blogs
     * @return \Illuminate\Http\Response
     */
    public function destroy(blogs $blogs)
    {
        //
    }
}