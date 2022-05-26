import axios from 'axios';
import React, { Component } from 'react'



class ExpenseLimit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ExpenseLimitSum:20,
            ExpenseLimitProgress:null,
            expenses:[],
            
        }
    }
    componentDidMount(){
        this.getExpenseList();
    }


    getExpenseList = () =>{
        axios.get('/get/expenses').then((response) => {
            this.setState({expenses: response.data});
        });
    }

    ExpenseLimitProgress=()=>{
        
        
        let expenses =this.state.expenses;
        let ExpenseLimitSum =expenses.filter(({category})=>category===this.props.data.expnese_id).reduce((limitExpense, expense) =>  Number(limitExpense) + Number(expense.amount), 0);
                return ((ExpenseLimitSum*100/this.props.data.amount));
    }



    render(){
         return (
            <div>
                <h4 className="small font-weight-bold">{this.props.data.expnese_id}: <span
                className="float-right">{this.props.data.amount} €</span></h4>
                <div className="progress">
                    <div className="progress-bar bg-success w-20"
                     role="progressbar" style={{width: this.ExpenseLimitProgress()+"%"}}
                    aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        )
    }
}
export default ExpenseLimit;
