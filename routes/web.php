<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Admin Routes Here
Route::group(['namespace' => 'Admin'], function () {
    Route::get('/admin/{anypath}', 'AdminController@index')->where('anypath', '[\/\w\.-]*');
    Route::get('/admin', 'AdminController@index');
});


Route::group(['namespace' => 'Frontend'], function () {

    Route::get('/{anypath}', 'WebsiteController@index')->where('path', '*');
    Route::get('/', 'WebsiteController@index');
});