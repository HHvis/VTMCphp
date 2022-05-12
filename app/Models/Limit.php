<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Limit extends Model
{   public $timestamps = false; 
    protected $table = 'expense_limits';
    use HasFactory;
    protected $fillable = [
        'expnese_id',
        'vartotojo_id',
        'amount'
    ];
}



