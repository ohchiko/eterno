<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class BookController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:manage pdfs')
             ->except(['index', 'show']);
        $this->middleware('permission:view pdfs')
            ->only(['index', 'show']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (auth()->user()->hasRole('visitor')) {
            return auth()->user()->creator->books;
        }
        return Auth::user()->books;
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
        if (auth()->user()->hasRole('visitor')) {
            $book = auth()->user()->creator->books()->with('user')->findOrFail($id);
            $book->file = base64_encode(Storage::get($book->file_url));

            return $book;
        }

        $book = Auth::user()->books()->with('user')->findOrFail($id);
        $book->file = base64_encode(Storage::get($book->file_url));

        return $book;
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
