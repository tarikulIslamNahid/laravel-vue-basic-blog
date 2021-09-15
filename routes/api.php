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

    // for categories
    Route::get('site_categories_for_see', 'Admin\CategoriesController@index');
    Route::post('site_categories_for_create', 'Admin\CategoriesController@store');
    Route::post('site_categories_for_update', 'Admin\CategoriesController@update');
    Route::delete('site_categories_for_delete/{id}', 'Admin\CategoriesController@destroy');
    Route::get('site_categories_for_edit/{id}', 'Admin\CategoriesController@edit');


    // for Sub categories
    Route::get('site_subcategories_for_see', 'SubCategoryController@index');
    Route::post('site_subcategories_for_create', 'SubCategoryController@store');
    Route::post('site_subcategories_for_update', 'SubCategoryController@update');
    Route::delete('site_Subcategories_for_delete/{id}', 'SubCategoryController@destroy');
    Route::get('site_subcategories_for_edit/{id}', 'SubCategoryController@edit');

    // for role
    Route::get('site_role_for_see', 'RolesController@index');
    Route::post('site_role_for_create', 'RolesController@store');
    Route::delete('site_role_for_delete/{id}', 'RolesController@destroy');
    Route::get('site_role_for_edit/{id}', 'RolesController@edit');
    Route::post('site_role_for_update', 'RolesController@update');
});