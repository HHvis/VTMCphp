<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Income;
use App\Models\Expense;

class IncomeExpenseController extends Controller
{
    public function getIncomeList()
    {
            $incomes = Income::orderBy('id', 'DESC')->get();
            return response()->json($incomes);
    }

    public function getExpenseList()
    {
            $expenses = Expense::orderBy('id', 'DESC')->get();
            return response()->json($expenses);
    }
}
