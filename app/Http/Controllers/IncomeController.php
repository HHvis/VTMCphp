<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Income;


class IncomeController extends Controller
{

    public function getIncomeList()
    {
            $incomes = Income::orderBy('id', 'DESC')->take(3)->get();
            return response()->json($incomes);
    }

    public function getIncomeDetails(Request $request){
            $incomesData = Income::findOrFail($request->get('id'));
            return response()->json($incomesData);
    }

    public function updateIncomeData(Request $request)
    {
             $Id = $request->get('id');
             $incomeTitle = $request->get('title');
             $incomeAmount = $request->get('amount');
             $incomeCategory = $request->get('category');

             Income::where('id', $Id)->update([
                'title'   =>  $incomeTitle,
                'amount'     =>  $incomeAmount,
                'category'     =>  $incomeCategory
            ]);


            return response()->json([
                'title'   =>  $incomeTitle,
                'amount'     =>  $incomeAmount,
                'category'     =>  $incomeCategory
            ]);

    }



    public function destroy(Income $income)
    {
            $income->delete(); 
    }



    public function store(Request $request)
    {
        $incomeTitle = $request->get('title');
        $incomeAmount = $request->get('amount');
        $incomeCategory = $request->get('category');

        Income::create([
           'title'   =>  $incomeTitle,
           'amount'     =>  $incomeAmount,
           'category'     =>  $incomeCategory
        ]);

            return response()->json([
              'title'   =>  $incomeTitle,
              'amount'     =>  $incomeAmount,
              'category'     =>  $incomeCategory
            ]);       
    }
}