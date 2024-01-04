<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;

class UsersController extends Controller
{
    //
    public function index()
    {
        $users = User::all();

        return response()->json([
            'status' => 'success',
            'users' => $users
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        $request->validated();

        $user = User::create($request->all());

        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $fileName = hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();

            $file->storeAs('profile/', $fileName, 'public');

            $user->update([
                'photo' => $fileName
            ]);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'user was created successfully',
            'user' => $user
        ], 200);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $request->validated();

        $user->update($request->except('photo'));

        if($request->hasFile('photo')){
            if($user->photo){
                unlink(public_path('storage/profile/') . $user->photo);
            }

            $file = $request->file('photo');
            $fileName = hexdec(uniqid()).'.'.$file->getClientOriginalExtension();

            $file->storeAs('profile/', $fileName, 'public');

            $user->update([
                'photo' => $fileName
            ]);
        }
    }

    public function destroy(User $user){
        if($user->photo){
            unlink(public_path('storage/profile/') . $user->photo);
        }

        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'user was deleted successfully!'
        ], 200);
    }
}
