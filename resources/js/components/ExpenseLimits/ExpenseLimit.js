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
        
        if (this.props.data.expnese_id==1)
        {
        let expenses =this.state.expenses;
        let ExpenseLimitSum =expenses.filter(({category})=>category==='Maistui').reduce((limitExpense, expense) =>  limitExpense + expense.amount, 0);
                return ((ExpenseLimitSum*100/this.props.data.amount))
        }else if (this.props.data.expnese_id==2) {
            let expenses =this.state.expenses;
        let ExpenseLimitSum =expenses.filter(({category})=>category==='Drabužiams').reduce((limitExpense, expense) =>  limitExpense + expense.amount, 0);
                return ((ExpenseLimitSum*100/this.props.data.amount)) 
        }else if (this.props.data.expnese_id==3) {
            let expenses =this.state.expenses;
        let ExpenseLimitSum =expenses.filter(({category})=>category==='Vaistams').reduce((limitExpense, expense) =>  limitExpense + expense.amount, 0);
                return ((ExpenseLimitSum*100/this.props.data.amount))
            
        }else if (this.props.data.expnese_id==4) {
            let expenses =this.state.expenses;
        let ExpenseLimitSum =expenses.filter(({category})=>category==='Kurui').reduce((limitExpense, expense) =>  limitExpense + expense.amount, 0);
                return ((ExpenseLimitSum*100/this.props.data.amount))
            
        }
        else if (this.props.data.expnese_id==5) {
            let expenses =this.state.expenses;
        let ExpenseLimitSum =expenses.filter(({category})=>category==='Auto taisymui').reduce((limitExpense, expense) =>  limitExpense + expense.amount, 0);
                return ((ExpenseLimitSum*100/this.props.data.amount))  
        }  
        };



    render(){
         return (
            <div>
                <h4 className="small font-weight-bold">{(()=>{
                        switch(this.props.data.expnese_id){
                            case 1:
                                return 'Maistui';
                                case 2:
                                return 'Drabužiams';
                                case 3:
                                return 'Vaistams';
                                case 4:
                                return 'Kurui';
                                case 5:
                                return 'Auto taisymui';
                }})()}: <span
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


