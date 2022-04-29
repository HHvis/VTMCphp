<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Expense;


class ExpenseController extends Controller
{

    public function getExpenseList()
    {
            $expenses = Expense::orderBy('id', 'DESC')->take(3)->get();
            return response()->json($expenses);
    }

    public function getExpenseDetails(Request $request){
            $expensesData = Expense::findOrFail($request->get('id'));
            return response()->json($expensesData);
    }

    public function updateExpenseData(Request $request)
    {
             $Id = $request->get('id');
             $expenseTitle = $request->get('title');
             $expenseAmount = $request->get('amount');
             $expenseCategory = $request->get('category');

             Expense::where('id', $Id)->update([
                'title'   =>  $expenseTitle,
                'amount'     =>  $expenseAmount,
                'category'     =>  $expenseCategory
            ]);


            return response()->json([
                'title'   =>  $expenseTitle,
                'amount'     =>  $expenseAmount,
                'category'     =>  $expenseCategory
            ]);

    }



    public function destroy(Expense $expense)
    {
            $expense->delete(); 
    }



    public function store(Request $request)
    {
        $expenseTitle = $request->get('title');
        $expenseAmount = $request->get('amount');
        $expenseCategory = $request->get('category');

        Expense::create([
           'title'   =>  $expenseTitle,
           'amount'     =>  $expenseAmount,
           'category'     =>  $expenseCategory
        ]);

            return response()->json([
              'title'   =>  $expenseTitle,
              'amount'     =>  $expenseAmount,
              'category'     =>  $expenseCategory
            ]);       
    }
}