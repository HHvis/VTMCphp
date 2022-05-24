<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>VTMCphp</title>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

    </head>
    <body class="d-flex flex-column min-vh-100">
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="/images/logo.png" alt="logo" width="180" height="50">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->

                        @if (Route::has('login'))
                <div class="hidden fixed top-0 right-0 px-2 py-1 sm:block">
                    @auth
                    <li class="nav-item">
                        <a href="{{ url('/home') }}" class="nav-link">Grįžti į paskyrą</a>
                        </li>
                    @else
                        <a href="{{ route('login') }}" class="btn btn-secondary" role="button">Prisijungti</a>
                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="btn btn-success" role="button">Registruotis</a>
                        @endif
                    @endauth
                </div>
            @endif
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
        <h1 class="m-3"><span class="text-success">Paprastas</span> būdas stebėti savo pajamas ir išlaidas</h1>
<!-- Carousel -->
<div id="demo" class="carousel slide" data-bs-ride="carousel">

  <!-- Indicators/dots -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  <!-- The slideshow/carousel -->
  <div class="carousel-inner">
    <div class="carousel-item active">
    <h3 class="text-center">Biudžeto kontrolės programa</h3>
      <img src="/images/plainlogo.png" style="height: 400px;" class="img-fluid d-block m-auto w-70" alt="image">
    </div>
    <div class="carousel-item">
    <h3 class="text-sm text-center">Sąskaitų archyvas</h3>
      <img src="/images/suvestine.png" style="height: 400px;" class="img-fluid d-block m-auto w-70" alt="image">
    </div>
    <div class="carousel-item">
    <h3 class="text-center text-dark">Išlaidų pokyčių suvestinė</h3>
      <img src="/images/sarasas.png" style="height: 400px;" class="img-fluid d-block m-auto w-70" alt="image">
    </div>
  </div>
  
  <!-- Left and right controls/icons -->
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span> 
  </button>
</div> 

    <footer class="mt-auto bg-white p-4">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>&copy; VTMCphp 2022</span>
                </div>
           </div>
    </footer>
</body>
</html>
