<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function Service(){
        return view('page.service');

    }

    public function About(){
        return view('page.about');

    }
}
