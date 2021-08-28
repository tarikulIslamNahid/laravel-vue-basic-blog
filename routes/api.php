<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('checkToken', 'AuthController@checkToken');
    // Route::get('user', 'AuthController@user');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('register', 'AuthController@register');
    Route::post('me', 'AuthController@me');

    Route::get('site_categories_for_see', 'Admin\CategoriesController@index');
    Route::post('site_categories_for_create', 'Admin\CategoriesController@store');
});
