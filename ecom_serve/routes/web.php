<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('cliente/index',"EscuelaController@index");
Route::get('cliente/show/{id}',"EscuelaController@show");

Route::get('facultad/index',"EscuelaController@index");
Route::get('facultad/show/{id}',"EscuelaController@show");

Route::get('escuela/index',"EscuelaController@index");
Route::get('escuela/show/{id}',"EscuelaController@show");

Route::get('salon/index',"SalonController@index");
Route::get('salon/show/{id}',"SalonController@show");