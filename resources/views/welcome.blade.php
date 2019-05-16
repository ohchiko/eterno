<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Style -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <main class="py-4 bg-gray-200">
            <div class="w-full max-w-xs mx-auto">
                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <p class="text-center text-2xl text-gray-700 mb-4">Welcome</p>
                    <p class="text-center text-md text-gray-700 mb-8">Let your yearbook go online!</p>
                    <div class="flex items-center justify-around">
                        <a href="/#/login" class="font-bold text-gray-600 hover:text-blue-500">Log In</a>
                        <a href="/#/register" class="font-bold text-gray-600 hover:text-blue-500">Register</a>
                    </div>
                </div>
                <p class="text-center text-gray-500 text-xs">&copy;2019 Eterno. All rights reserved.</p>
            </div>
        </main>

        <!-- Scripts -->
        <script src="{{ asset('js/guest.js') }}" defer></script>
    </body>
</html>
