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

    // for blog posts

    Route::get('site_depsubcategories_for_see/{id}', 'BlogsController@depsubcategories');
    Route::post('site_post_for_create', 'BlogsController@store');
    Route::get('site_posts_for_see', 'BlogsController@index');
    Route::get('site_posts_status_for_see/{id}', 'BlogsController@status');
    Route::get('site_posts_approved_for_see/{id}', 'BlogsController@approvedstatus');
    Route::get('site_posts_featured_for_see/{id}', 'BlogsController@featuredstatus');
    Route::delete('site_post_for_delete/{id}', 'BlogsController@destroy');
    Route::get('site_post_edit_for_see/{id}', 'BlogsController@edit');
    Route::post('site_post_for_edit', 'BlogsController@update');
});

Route::group([
    'middleware' => 'api'
], function ($router) {
    // for Subscribers
    Route::get('site_subscribers_for_see', 'SubscribersController@index');
    Route::post('site_subscribers_for_create', 'SubscribersController@store');
    Route::delete('site_subscribers_for_delete/{id}', 'SubscribersController@destroy');
    Route::get('site_subscribers_for_edit/{id}', 'SubscribersController@edit');

    // for contacts
    Route::get('site_contacts_for_see', 'ContactsController@index');
    Route::post('site_contacts_for_create', 'ContactsController@store');
    Route::delete('site_contacts_for_delete/{id}', 'ContactsController@destroy');
});
