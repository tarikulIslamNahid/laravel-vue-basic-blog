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
        $posts = blogs::with("category", 'subcategory')->get();
        $user = Auth::user();
        return response()->json([
            'posts' => $posts,
            'user' => $user,
        ]);
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
        // return response()->json(Auth::user()->id);

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
            // @dd($request->all());
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
            $blogs->user_id = Auth::user()->id;
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
                $blogs->status = 1;
            } else {
                $blogs->approved = 0;
            }
            $blogs->save();
            return response()->json(['success' => "Post Created Successfully !"]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\blogs  $blogs
     * @return \Illuminate\Http\Response
     */

    public function status($id)
    {
        $posts = blogs::find($id);
        if ($posts->status == 1) {
            $posts->status = 0;
            $success = 'Post Deactived Successfully';
        } elseif ($posts->status == 0) {
            $posts->status = 1;
            $success = 'Post Activeted Successfully';
        }
        $posts->update();
        return response()->json(['success' => $success]);
    }
    public function approvedstatus($id)
    {
        $posts = blogs::find($id);
        if ($posts->approved == 1) {
            $posts->approved = 0;
            $success = 'Post Un-Approved Successfully';
        } elseif ($posts->approved == 0) {
            $posts->approved = 1;
            $success = 'Post Approved Successfully';
        }
        $posts->update();
        return response()->json(['success' => $success]);
    }
    public function featuredstatus($id)
    {
        $posts = blogs::find($id);
        if ($posts->featured == 1) {
            $posts->featured = 0;
            $success = 'Remove Featured Successfully';
        } elseif ($posts->featured == 0) {
            $posts->featured = 1;
            $success = 'Featured Successfully';
        }
        $posts->update();
        return response()->json(['success' => $success]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\blogs  $blogs
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = blogs::where('slug', '=', $id)->first();
        return response()->json(['post' => $post]);
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
    public function update(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                // 'title' => 'required|unique:blogs|max:255',
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
                // @dd($request->all());
                $blogs = blogs::find($request->id);

                $blogs->title = $request->title;
                $blogs->slug = Str::slug($request->title);
                $blogs->category_id = $request->category_id;
                $blogs->subcategory_id = $request->subcategory_id;
                $blogs->tags = json_encode($request->tags);
                $blogs->disc = $request->disc;
                $blogs->meta_title = $request->meta_title;
                $blogs->meta_desc = $request->meta_desc;
                $blogs->meta_keyword = $request->meta_keyword;

                $blogs->added_by = Auth::user()->name;
                if (Auth::user()->user_type = 1) {
                    $blogs->approved = 1;
                } else {
                    $blogs->approved = 0;
                }

                $dbImg = $blogs->photo;
                if ($request->photo != $dbImg) {
                    $position = strpos($request->photo, ';');
                    $sub = substr($request->photo, 0, $position);
                    $ext = explode('/', $sub)[1];
                    $name = time() . '.' . $ext;
                    $img = Image::make($request->photo)->resize(250, 250);
                    $upload_path = 'images/posts/';
                    $image_url = $upload_path . $name;

                    $success =  $img->save($image_url);

                    if ($success) {

                        $Blogimg = substr($blogs->photo, 1);
                        $imgpath = public_path($Blogimg);
                        if ($Blogimg && file_exists($imgpath)) {
                            unlink($Blogimg);
                        }

                        $blogs->photo = '/' . $image_url;
                        $blogs->meta_img = '/' . $image_url;

                        $blogs->update();
                    }
                } else {
                    $blogs->photo = $request->photo;
                    $blogs->meta_img = $request->photo;
                    $blogs->update();
                }
                return response()->json(['success' => "Post Updated Successfully !"]);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => "Oops, Something Went Wrong"]);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\blogs  $blogs
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $blog = blogs::Find($id);

        if ($blog) {

            $Blogimg = substr($blog->photo, 1);
            $imgpath = public_path($Blogimg);
            if ($Blogimg && file_exists($imgpath)) {
                unlink($Blogimg);
            }

            $blog->delete();
            return response()->json(['success' => 'Category Deleted Successfully !']);
        } else {
            return response()->json('failed', 404);
        }
    }
}
