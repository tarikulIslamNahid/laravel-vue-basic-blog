<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class VerifyJWTToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $newToken = null;

        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return ResponseBuilder::asError(101)
                    ->withMessage("Session expired, please relogin.")
                    ->withHttpCode(Response::HTTP_UNAUTHORIZED)
                    ->build();
            }
        } catch (TokenExpiredException $e) {
            // If the token is expired, then it will be refreshed and added to the headers
            try {
                $newToken = JWTAuth::refresh(JWTAuth::getToken());

                $user = JWTAuth::setToken($newToken)->toUser();
            } catch (JWTException $e) {
                return ResponseBuilder::asError(103)
                    ->withMessage("Session expired, please relogin.")
                    ->withHttpCode(Response::HTTP_UNAUTHORIZED)
                    ->build();
            }
        } catch (JWTException $e) {
            return ResponseBuilder::asError(102)
                ->withMessage("Session expired, please relogin.")
                ->withHttpCode(Response::HTTP_UNAUTHORIZED)
                ->build();
        }

        // Login the user instance for global usage
        Auth::login($user, false);

        $response = $next($request);

        if ($newToken) {
            $response->headers->set('x-new-token', $newToken);
        }

        return $response;
    }
}