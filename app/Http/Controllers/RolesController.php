<?php

namespace App\Http\Controllers;

use App\roles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $roles = roles::all();

        return response()->json([
            'roles' => $roles,
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
                'name' => 'required|unique:roles|max:255',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors(), 422]);
            } else {

                $roles = new roles;
                $roles->name = $request->name;
                $roles->save();
                return response()->json(['success' => "Role Created Successfully !"]);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => "Oops, Something Went Wrong"]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\roles  $roles
     * @return \Illuminate\Http\Response
     */
    public function show(roles $roles)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\roles  $roles
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $roles = roles::find($id);
        return response()->json(['role' => $roles]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\roles  $roles
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $roles = roles::find($request->id);
        $roles->name = $request->name;
        $roles->update();
        return response()->json(['success' => "Role Updated Successfully !"]);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\roles  $roles
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $roles = roles::Find($id);

        if ($roles) {

            $roles->delete();
            return response()->json(['success' => 'Role Deleted Successfully !']);
        } else {
            return response()->json('failed', 404);
        }
    }
}
