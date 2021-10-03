<?php

namespace App\Http\Controllers;

use App\subscribers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubscribersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subscribers = subscribers::get();

        return response()->json([
            'subscribers' => $subscribers,
            // 'subscribers' => json_encode($subscribers),
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
                'email' => 'required|unique:subscribers|max:255',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors(), 422]);
            } else {

                $subscribers = new subscribers;
                $subscribers->email = $request->email;
                $subscribers->save();
                return response()->json(['success' => "Subscribe Successfully !", 200]);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => "Oops, Something Went Wrong"]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\subscribers  $subscribers
     * @return \Illuminate\Http\Response
     */
    public function show(subscribers $subscribers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\subscribers  $subscribers
     * @return \Illuminate\Http\Response
     */
    public function edit(subscribers $subscribers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\subscribers  $subscribers
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, subscribers $subscribers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\subscribers  $subscribers
     * @return \Illuminate\Http\Response
     */
    public function destroy(subscribers $subscribers)
    {
        //
    }
}
