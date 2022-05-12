<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use App\Models\Expense;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('expense_category')->insert([
            'id' => 1,
            'pavadinimas' => 'Maistui']);
        DB::table('expense_category')->insert([           
            'id' => 2,
            'pavadinimas' => 'Drabužiams']);
        DB::table('expense_category')->insert([   
            'id' => 3,
            'pavadinimas' => 'Vaistams']);
        DB::table('expense_category')->insert([   
            'id' => 4,
            'pavadinimas' => 'Kurui']);
        DB::table('expense_category')->insert([   
            'id' => 5,
            'pavadinimas' => 'Auto taisymui']);
    }
}
