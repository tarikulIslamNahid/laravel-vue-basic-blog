<?php


namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;
use App\categories;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class CategoriesController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $categories = categories::all();

        return response()->json([
            'categories' => $categories,
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


        try {
            // $validateData = $request->validate();
            $validator = Validator::make($request->all(), [
                'name' => 'required|unique:categories|max:255',
                'photo' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors(), 422]);
            } else {
                $position = strpos($request->photo, ';');
                $sub = substr($request->photo, 0, $position);
                $ext = explode('/', $sub)[1];
                $name = time() . '.' . $ext;
                $img = Image::make($request->photo)->resize(250, 250);

                $upload_path = 'images/categories/';
                $image_url = $upload_path . $name;
                $img->save($image_url);

                $categories = new categories;
                $categories->name = $request->name;
                $categories->slug = Str::slug($request->name);
                $categories->photo = $image_url;
                $categories->save();
                return response()->json(['success' => "Category Created Successfully !"]);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => "Oops, Something Went Wrong"]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function show(categories $categories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $categories = categories::find($id);
        return response()->json(['category' => $categories]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $categories = categories::find($request->id);
        $categories->name = $request->name;
        $categories->slug = Str::slug($request->name);

        $dbImg = $categories->photo;

        if ($request->photo != $dbImg) {
            $position = strpos($request->photo, ';');
            $sub = substr($request->photo, 0, $position);
            $ext = explode('/', $sub)[1];
            $name = time() . '.' . $ext;
            $img = Image::make($request->photo)->resize(250, 250);

            $upload_path = 'images/categories/';
            $image_url = $upload_path . $name;
            $success =  $img->save($image_url);


            if ($success) {
                $imgpath = public_path($dbImg);
                if ($dbImg && file_exists($imgpath)) {
                    unlink($categories->photo);
                }
                $categories->photo = $image_url;

                $categories->update();
            }
        } else {
            $categories->photo = $request->photo;
            $categories->update();
        }
        // $categories->save();
        return response()->json(['success' => "Category Updated Successfully !"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $categories = categories::Find($id);

        if ($categories) {

            $catimg = $categories->photo;
            $imgpath = public_path($catimg);
            if ($catimg && file_exists($imgpath)) {
                unlink($categories->photo);
            }

            $categories->delete();
            return response()->json(['success' => 'Category Deleted Successfully !']);
        } else {
            return response()->json('failed', 404);
        }
    }
}
