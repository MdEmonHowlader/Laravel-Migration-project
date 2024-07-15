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
    public function Veterinary(){
        return view('page.veterinary');
    }
    public function Gallery(){
        return view('page.gallery');
    }

    public function Pricing(){
        return view('page.pricing');
    }
    public function Contact(){
        return view('page.contact');
    }
    public function Blog(){
        return view('page.blog');
    }
    public function Login(){
        return view('auth.login');
    }

    public function Registration(){
        return view('auth.registration');
    }

}
