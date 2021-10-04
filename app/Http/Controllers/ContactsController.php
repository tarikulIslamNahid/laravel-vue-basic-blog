<?php

namespace App\Http\Controllers;

use App\contacts;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiBaseController;
use Illuminate\Support\Facades\Validator;

class ContactsController extends ApiBaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $contacts = contacts::get();
            return $this->success($contacts, 'All contacts List', 200);

            // return response()->json([
            //     'contacts' => $contacts,
            //     // 'contacts' => json_encode($contacts),
            // ]);
        } catch (\Exception $ex) {
            return $ex->getMessage();
        }
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
                'name' => 'required|max:255',
                'email' => 'required|max:255',
                'msg' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors(), 422]);
            } else {
                $contacts = contacts::create($request->all());
                $contacts->save();
                // $contacts = new contacts;
                // $contacts->email = $request->email;
                // $contacts->save();
                // return response()->json(['success' => "Subscribe Successfully !", 200]);
            }
        } catch (\Exception $e) {
            // return response()->json(['error' => "Oops, Something Went Wrong"]);
            return $e->getMessage();
        }
        return $this->success($contacts, 'Message Sent Successfully !', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\contacts  $contacts
     * @return \Illuminate\Http\Response
     */
    public function show(contacts $contacts)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\contacts  $contacts
     * @return \Illuminate\Http\Response
     */
    public function edit(contacts $contacts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\contacts  $contacts
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, contacts $contacts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\contacts  $contacts
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contacts = contacts::Find($id);

        if ($contacts) {

            $contacts->delete();
            return response()->json(['success' => 'Deleted Successfully !', 200]);
        } else {
            return response()->json('failed', 404);
        }
    }
}
