<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('index');
});
Route::get('form', function()
{
    return View::make('form');
});
Route::get('done', function()
{
    return View::make('done');
});

Route::post('form', ['as' => 'form.post', 'uses' => 'HomeController@postForm']);
Route::get('applicants/json', ['as' => 'json.applicants', 'uses' => 'HomeController@getAll']);
Route::get('applicants', ['uses' => 'HomeController@getAllApplicants']);