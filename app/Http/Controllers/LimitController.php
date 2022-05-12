<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Limit;


class LimitController extends Controller
{

    public function getLimits()
    {
        $limits = Limit::orderBy('id', 'DESC')->get();
        return response()->json($limits);
            
    }

    public function storeLimits(Request $request)
    {   $vartotojoId=1;
        $limitCategory = $request->get('expnese_id');
        $limitAmount = $request->get('amount');

        Limit::updateOrCreate(
          ['expnese_id'     =>  $limitCategory],
          ['amount'     =>  $limitAmount,
           'vartotojo_id'     =>  $vartotojoId
        ]);

            return response()->json([
              'amount'     =>  $limitAmount,
              'expnese_id'     =>  $limitCategory,
              'vartotojo_id'     =>  $vartotojoId
            ]);     
    }
    


}