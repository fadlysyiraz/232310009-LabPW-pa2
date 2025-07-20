<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegisterController extends Controller
{
   
    public function showForm()
    {
        return view('register');
    }

   
    public function handleForm(Request $request)
    {
       
        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ]);

    
        return back()->with('success', 'Registrasi berhasil!');
    }
}

