<?php

namespace App\Http\Controllers;

use App\subscribers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\ApiBaseController;

class SubscribersController extends ApiBaseController
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
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
        try {
            $subscribers = subscribers::get();
            return $this->success($subscribers, 'All Subscribers List', 200);

            // return response()->json([
            //     'subscribers' => $subscribers,
            //     // 'subscribers' => json_encode($subscribers),
            // ]);
        } catch (\Exception $ex) {
            return $ex->getMessage();
        }
    }
    public function edit($id)
    {
        try {
            $subscribers = subscribers::find($id);
            return $this->success($subscribers, ' ', 200);

            // return response()->json([
            //     'subscribers' => $subscribers,
            //     // 'subscribers' => json_encode($subscribers),
            // ]);
        } catch (\Exception $ex) {
            return $ex->getMessage();
        }
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
                'email' => 'required|unique:subscribers|max:255',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors(), 422]);
            } else {

                $subscribers = new subscribers;
                $subscribers->email = $request->email;
                $subscribers->save();
                // return response()->json(['success' => "Subscribe Successfully !", 200]);
            }
        } catch (\Exception $e) {
            // return response()->json(['error' => "Oops, Something Went Wrong"]);
            return $e->getMessage();
        }
        return $this->success($subscribers, 'Subscribe Successfully !', 200);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\subscribers  $subscribers
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $subscribers = subscribers::Find($id);

        if ($subscribers) {

            $subscribers->delete();
            return response()->json(['success' => 'UnSubscribed Successfully !', 200]);
        } else {
            return response()->json('failed', 404);
        }
    }
}
