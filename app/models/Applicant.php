<?php

class Applicant extends Eloquent {

    protected $table = 'applicants';

    protected $fillable = ['name', 'position', 'country', 'salary', 'location'];

    protected $hidden = ['updated_at', 'created_at', 'id'];
}
