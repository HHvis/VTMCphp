<?php

namespace App\Http\Controllers;
use App\Models\ExpenseCategories;


class ExpenseCategoryController extends Controller
{

    public function getExpenseCategoryList()
    {
            $expenseCategories = ExpenseCategories::orderBy('id', 'DESC')->get();
            return response()->json($expenseCategories);
    }
}