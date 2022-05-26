<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" width="300" height="100"></a></p>

<h2>Reikalingos Programos</h2>

<ul>
  <li>PHP 8.0</li>
  <li>Laravel 8</li>
  <li>React 17</li>
  <li>Composer</li>
  <li>MySql xx</li>
</ul> 

<h2 align="center">PROJEKTO PALEIDIMAS</h2>

1. Terminale klonuokite projektą:
```
git clone https://github.com/HHvis/VTMCphp.git
```
2. Eikite į projekto katalogą - 'cd VTMCphp' ir įrašykite papildymus:
```
npm install
composer install
```
3. Terminale susikurkite duombazę, pavadinimu 'laravel':
```
php artisan db
create database laravel
```
4. Reikalingos migracijos vartotojui:
```
php artisan migrate:fresh --seed
```
6. Projekto administravimo skiltis, kurios metu susikursite Admin paskyrą: 
```
php artisan db:seed --class=VoyagerDatabaseSeeder
php artisan voyager:admin admin@admin.lt --create
```
7. Projekto paleidimas:
```
php artisan serve
```
8. Admin paskyros url:
```
{url}/admin/login
```
