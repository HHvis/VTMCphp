import axios from 'axios';
import React, { Component } from 'react'
import ExpenseLimit from './ExpenseLimit';


class ExpenseLimits extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ExpenseLimitProgress:null,
            amount:null,
            expnese_id:0,
            limits:[],
            
        }
    }

      LimitExpenseAmount = (event) =>{
        this.setState({
          amount:event.target.value,
        });
      }
      LimitExpenseCategory = (event) =>{
        this.setState({
            expnese_id:event.target.value,
        });
      }
      
      storeLimitData = () => {
        if (this.state.amount>1 && this.state.amount<99999 && this.state.expnese_id>0){    
        axios.post('store/limit/data', {
            amount:this.state.amount,
            expnese_id:this.state.expnese_id,    
        })
    }}

      componentDidMount(){
        this.getLimits();
    }

      getLimits= () =>{
        axios.get('/get/limits')
        .then((response) => 
        {this.setState({ limits: response.data,
        });
        }); 
    }

    


    render(){    
        return (
            <>
                <div className="card-header py-3">
                    <form className="row g-3">
                        <div className="col-md p-2">
                            <label className="text-xs font-weight-bold text-secondary text-uppercase mb-1" >Limitų nustatymai</label>
                        </div>
                        <div className=' col-md-6'>
                                <select className="form-control col-md-4" id="category" onChange={this.LimitExpenseCategory} >
                                <option defaultValue >Kategorija</option>
                                  <option value="1">Maistui</option>
                                  <option value="2">Drabužiams</option>
                                  <option value="3">Vaistams</option>
                                  <option value="4">Kurui</option>
                                  <option value="5">Auto taisymui</option>
                                </select>
                        </div>
                        <div className="col">
                            <label htmlFor="LimitAmount" className="visually-hidden">Limitas</label>
                            <input type="number" className="form-control" id="LimitAmount" placeholder="Limito suma" onChange={this.LimitExpenseAmount}  min="1" max="99999" required={true}/>
                        </div>
                        <div className="col">
                            <input type="submit" value="Pridėti" className="btn btn-success" onClick={this.storeLimitData} />
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
