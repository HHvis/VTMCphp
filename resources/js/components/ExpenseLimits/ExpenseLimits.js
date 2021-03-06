import axios from 'axios';
import React, { Component } from 'react'
import ExpenseLimit from './ExpenseLimit';


class ExpenseLimits extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ExpenseLimitProgress:null,
            amount:'',
            expnese_id:'',
            limits:[],
            errors: {},
            expenseCategories:[]
            
        }
    }

      LimitExpenseAmount = (event) =>{
        this.setState({
          amount:event.target.value,
        });
      }
      LimitExpenseCategory = (event) =>{

        const expnese_id=event.target.value;
        this.setState({
            expnese_id
        });
      }
      


      componentDidMount(){
        this.getLimits();
        this.getExpenseCategoryList();
    }

      getLimits= () =>{
        axios.get('/get/limits')
        .then((response) => 
        {this.setState({ limits: response.data,
        });
        }); 
    }

  
    getExpenseCategoryList = () =>{
      axios.get('/get/expense_categories/list').then((response) => {
          this.setState({expenseCategories: response.data});
      });
  }




    formValidation = () =>{
        const {amount,expnese_id} = this.state;
        let isValid = true;
        const errors = {};
        if(amount.valueOf()<0.01){
          errors.amountMinus = "Negalima įvesti neigiamo skaičiaus.";
          isValid = false;
        }
        else if(amount.trim().length < 1){
          errors.amountLength = "Įveskite sumą, skaičių.";
          isValid = false;
        }
        else if(expnese_id.valueOf() <  1){
          errors.expnese_idSelect = "Pamiršote pasirinkti kategoriją.";
          isValid = false;
        }
        else if (amount.includes('.')) {
          if(amount.split('.')[0].length>4 ||
           amount.split('.')[1].length>2){
           errors.amountTooLong = "Sumažinkite sumą. Suma negali viršyti keturženklės sumos ir dviejų skaičių po kalbelio";
           isValid = false;
           }else {
             isValid = true;
           }   
         }
         else if (!amount.includes('.')) {
           if(amount.trim().length>6){
            errors.amountTooLong = "Sumažinkite sumą. Suma negali viršyti keturženklės sumos ir dviejų skaičių po kalbelio";
            isValid = false;
             }else {
              isValid = true;
            }  
          }
         else
        window.location.reload();
        this.setState({errors});
        return isValid;
      }


      onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.formValidation();
        if(isValid){
          this.setState({amount : "", expnese_id : ""});
          axios.post('store/limit/data', {
            amount:this.state.amount,
            expnese_id:this.state.expnese_id,    
        }).then(()=>{
            location.reload();
        })
      }
     }

     

    render(){  
        const {expnese_id, amount, errors} = this.state;  
        return (
            <>
                <div className="card-header py-3">
                    <form className="row g-3" onSubmit={this.onSubmit}>
                        <div className="col-md p-2">
                            <label className="text-xs font-weight-bold text-secondary text-uppercase mb-1" >Limitų nustatymai</label>
                        </div>
                        <div className=' col-md-6'>
                                <select className="form-control col-md-4"  value={expnese_id} id="category" onChange={this.LimitExpenseCategory} required>
                                <option disabled selected >Kategorija</option>
                                {this.state.expenseCategories.map((expenseCategory) => (<option value={expenseCategory.pavadinimas}>{expenseCategory.pavadinimas}</option>) )}
                                </select>
                        </div>
                        <div className="col">
                            <label htmlFor="LimitAmount" className="visually-hidden">Limitas</label>
                            <input className="form-control"   value={amount}   type="number" placeholder="Limito suma" onChange={this.LimitExpenseAmount}  id="LimitAmount"/>
                            {Object.keys(errors).map((key)=>{
                              return <div className='text-danger' key={key}> {errors[key]} </div>
                            })}
                        </div>
                       
                        <div className="col">
                        <button type="submit" className="btn btn-secondary btn-sm"
                            >Pridėti</button>
                        </div>
                    </form>
                </div>
                <div className="card-body">
                    {this.state.limits.map((limit) => (<ExpenseLimit data={limit} key={limit.id}/>))}
                </div>
            </>
        )
    }
}
export default ExpenseLimits;
