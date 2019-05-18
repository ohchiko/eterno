<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Auth::user()->books()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'file' => 'required|file',
            'description' => 'string',
        ]);


        $book = Auth::user()->books()->create([
            'user_id' => Auth::id(),
            'name' => $request->name,
            'file_url' => $request->file->store(Auth::id()),
            'file_name' => $request->file->getClientOriginalName(),
            'description' => $request->description,
        ]);

        return $book;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Auth::user()->books()->with('user')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'file' => 'file',
            'description' => 'string',
        ]);

        $book = Auth::user()->books()->findOrFail($id);
        $updates = [
            'name' => $request->name,
            'description' => $request->description,
        ];
        if ($request->file) {
            Arr::add($updates, 'file_url', $request->file->store(Auth::id()));
            Arr::add($updates, 'file_name', $request->file->getClientOriginalName());
        }
        $book->update($updates);

        return $book;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Auth::user()->books()->findOrFail($id)->delete();
    }
}
