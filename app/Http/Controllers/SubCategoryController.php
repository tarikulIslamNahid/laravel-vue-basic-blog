<?php

namespace App\Http\Controllers;

use App\subCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subcategories = subCategory::with("category")->get();

        return response()->json([
            'subcategories' => $subcategories,
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
                'name' => 'required|unique:sub_categories|max:255',
                'category_id' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors(), 422]);
            } else {

                $subCategory = new subCategory;
                $subCategory->name = $request->name;
                $subCategory->category_id = $request->category_id['id'];
                $subCategory->slug = Str::slug($request->name);
                $subCategory->save();
                return response()->json(['success' => "Sub Category Created Successfully !"]);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => "Oops, Something Went Wrong"]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\subCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function show(subCategory $subCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\subCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(subCategory $subCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\subCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, subCategory $subCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\subCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(subCategory $subCategory)
    {
        //
    }
}