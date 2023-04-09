<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chezzle</title>
    @vite(['resources/css/app.css', 'resources/css/chessboard-1.0.0.min.css'])
    @livewireStyles
</head>

<body>
    {{ $slot }}
    @livewireScripts
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha384-ZvpUoO/+PpLXR1lu4jmpXWu80pZlYUAfxl5NsBMWOEPSjUn/6Z/hRTt8+pR6L4N2" crossorigin="anonymous">
    </script>
    @vite(['resources/js/chessboard-1.0.0.min.js', 'resources/js/app.js'])
</body>

</html>
