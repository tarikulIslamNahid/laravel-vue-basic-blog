<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Str;


class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT', ['except' => ['login','register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = request(['username', 'password']);

        if(auth()->attempt($credentials)) {

            if (! $token = auth()->attempt(['username' => $request->username, 'password' => $request->password, 'email_verify' => 1])) {

                return response()->json([
                    'error' => 'Email verification needed please Check you Email'
                ]);
            }
        }else{

            return response()->json(['error' => 'Credentials do not match our database']);

        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    public function register(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'username' => 'required|unique:users,username',
            'password' => 'min:6|confirmed',
        ]);
        try{
            $success = 'Account was Created successfully, please Check you Email';

            $user = new User;
            $user->name = $request->name ;
            $user->email = $request->email;
            $user->username = $request->username;
            $user->email_verify = 1;
            // $user->email_verify = Str::random(6);
            $user->password = bcrypt($request->password);


            $user->save();


            $data = [

                'name' => $user->name,
                'email' => $user->email,
                'token' => $user->email_verify,
            ];


return $this->login($request);
        }
         catch(\Exception $e){
             return response()->json(['error' => $e->getMessage()]);
             return response()->json(['error' => "Operation Failed"]);
         }

    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'success' => 'Login Successfully',
            'expires_in' => auth()->factory()->getTTL() * 60,
            // 'user_id' => Auth()->user()->id,
            'user_id' => Crypt::encrypt(Auth()->user()->id),
            'username' => Auth()->user()->username,
            'name' => Auth()->user()->name,
            'user_type' => Auth()->user()->user_type,
            'email' => Auth()->user()->email,
            'phone' => Auth()->user()->phone,
            'email_verify' => Auth()->user()->email_verify,
            // 'user' => encrypt(Auth()->user()),

        ]);
    }
}
