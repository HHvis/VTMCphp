@extends('voyager::master')

@section('content')
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>VTMCphp</title>
    </head>
<body>
<div class="container">
  <section>
    <div class="row">
      <div class="col-12 mt-3 mb-1">
        <h5 class="text-uppercase">Biudžeto svetainės administravimas</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3 col-sm-4 col-12 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div class="align-self-center">
              <img src="/images/Icon-admin-1.png" width="60" height="60" alt="">
              </div>
              <div class="text-end">
                <h3>Koreguoti</h3>
                <a href="admin/expense_category"><p class="mb-0 font-weight-bold">Kategorijas →</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-sm-4 col-12 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div class="align-self-center">
              <img src="/images/Icon-admin-2.png" width="60" height="60" alt="">
              </div>
              <div class="text-end">
                <h3>Koreguoti</h3>
                
                <a href="admin/users"><p class="mb-0 font-weight-bold">Vartotojus →</p></a>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="col-xl-3 col-sm-4 col-12 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div class="align-self-center">
              <img src="/images/Icon-admin-3.png" width="60" height="60" alt="">
              </div>
              <div class="text-end">
                <h3>Peržiūrėti</h3>
                <a href="home"><p class="mb-0 font-weight-bold">Asmeninio biudžeto puslapį →</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </section>
</div>
</body>
@stop
