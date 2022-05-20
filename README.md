<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" width="300" height="100"></a></p>

<h2>Privalomos Programos</h2>

<ul>
  <li>PHP 8.0</li>
  <li>Laravel 8</li>
  <li>React 17</li>
  <li>MySql xx</li>
</ul> 

<h2 align="center">PROJEKTO PALEIDIMAS</h2>

1. Copy/Paste terminale
```
git clone https://github.com/HHvis/VTMCphp.git
```
2. Terminale - cd VTMCphp
```
npm install
```
3. Terminal kataloge parasykite kas apacioje. Jei naudojat lokalu XAMPP, tai eikite i phpMyAdmin puslapi ir sukurkite nauja duombaze 'laravel', palikite ja tuscia.
```
php artisan db
create database laravel
```
4. Reikalingos migracijos duomenims, siulau is karto nunulinti visa duombaze, pries pabaiga padarysiu daug Fake duomenu, todel ranka nereikes rasyti.
```
php artisan migrate:fresh --seed
```
6. Projekto paleidimas
```
php artisan serve
```
