<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    //for loading the initial page
    public function render(){
        return Inertia::render('users/UserManagement');
    }

    public function index(){
        return User::all();
    }
}
