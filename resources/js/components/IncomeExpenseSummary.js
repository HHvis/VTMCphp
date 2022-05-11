import axios from 'axios';
import React, { Component } from 'react'
import ExpenseRow from './ExpenseRow';
import IncomeRow from './IncomeRow';

class IncomeExpenseSummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses:[],
            incomes:[],
            rows: []
        }
    }


    componentDidUpdate(prevProps, prevState) {
       if(prevState.incomes !== this.state.incomes || prevState.expenses !== this.state.expenses) {
          const updatedIncomes = [...this.state.incomes].map(income => ({...income, type: 'income'})) 
          const updatedExpenses = [...this.state.expenses].map(expense => ({...expense, type: 'expense'})) 
          const sortedRows = [...updatedExpenses, ...updatedIncomes].sort((a,b) => new Date(b.created_at) - new Date(a.created_at)) 
          this.setState({ rows: sortedRows })
       }
    }

    componentDidMount(){
        this.getExpenseList();
        this.getIncomeList();
    }

    getExpenseList = () =>{
        axios.get('/get/expenses',{
            params:{_limit: 3}
        }).then((response) => {
            this.setState({
                expenses: response.data
            });
        });
    }

    getIncomeList =() =>{
        axios.get('/get/incomes',{
            params:{_limit: 3}
        }).then((response) => {
            this.setState({
                incomes: response.data
            });
        });
    }

    render(){
        return(
            <div>
                <table className="table"> 
                <thead>
                    <tr>
                        <th scope="col">Data</th>
                        <th scope="col">Pavadinimas</th>
                        <th scope="col">Suma</th>
                        <th scope="col">Kategorija</th>
                    </tr>
                </thead>
      <tbody>
            {this.state.rows.slice(0, 7).map((row) => row.type === 'expense' ? <ExpenseRow data={row} key={row.title}/> : <IncomeRow data={row} key={row.title}/>)}
      </tbody>
            </table>
            <div className="row">
                    <div className="col-12 text-left">
                        <div className="text-success">Žaliai pažymėtos pajamos*</div>
                        <div className="text-danger">Raudonai pažymėtos išlaidos*</div>
                    </div>
                </div>
            </div>
    );
    }
  }


export default IncomeExpenseSummary;