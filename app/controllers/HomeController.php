<?php

class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function store( $date )
	{
		
		return Applicant::create([
			'name' => Input::get('name'),
			'position' => Input::get('position'),
			'country' => Input::get('country'),
			'salary' => Input::get('salary'),
			'location' => $date
		]);
	}

	public function getAll()
	{
		return Applicant::all();
	}

	public function getAllApplicants()
	{
		return View::make('applicants.index')->with(['applicants' => Applicant::all()]);
	}

	/**
	 * Create time in closure
	 */
	public function createTime()
	{
		return date('o-m-d-H-i-s');
	}

	public function postForm()
	{
		$date = date('o-m-d-H-i-s');
		$files = [
			Input::file('attachment1'),
			Input::file('attachment2'),
			Input::file('attachment3'),
			Input::file('attachment4')
		];
		
		foreach ($files as $key => $value)
		{
			$files[$key]->move( public_path() . '/attachments/' . $date, 'attachment_' . $key . '.' . $files[$key]->getClientOriginalExtension() );
		}
		if( $files )
		{
			
			return Response::make([
				'success' => [
					'status' => 200,
					'message' => 'Nice one!',
					'data' => $this->store( $date )
				]
			], 200);
		}
		
		return Response::make([
			'error' => [
				'message' => 'Files went wrong. Please try again later'
			]
		], 500);
	}

}
