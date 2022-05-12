import axios from 'axios';
import React, { Component } from 'react'
import ExpenseTableFilter from './ExpenseTableFilter';

class TableExpense extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses:[],
            rows: [],
        }
    }

    componentDidUpdate(prevProps, prevState) {
       if(prevState.expenses !== this.state.expenses) {
          const updatedExpenses = [...this.state.expenses].map(expense => ({...expense, type: 'expense'}))
          const sortedRows = [...updatedExpenses].sort((a,b) => new Date(b.created_at) - new Date(a.created_at)) 
          this.setState({ rows: sortedRows })
       }
    }

    componentDidMount(){
        this.getExpenseList();
    }

    getExpenseList = () =>{
        axios.get('/get/expenses',{
            params:{_limit: 10}
        }).then((response) => {
            this.setState({
                expenses: response.data
            });
        });
    }
    

    render(){
        const sum = [].reduce((partialSum, a) => partialSum + a, 0);
        return(
            <div>
                <table className="table"> 
                <thead>
                    <tr>
                        <th scope="col col-4">Data</th>
                        <th scope="col col-4">Pavadinimas</th>
                        <th scope="col col-4">Kategorija</th>
                        <th scope="col col-4">Suma</th>
                    </tr>
                </thead>
      <tbody>
            {this.state.rows.slice(0, 7).map((row) => row.type === 'expense' ? <ExpenseTableFilter data={row} key={row.title}/> : <ExpenseTableFilter data={row} key={row.title}/>)}
            <tr className="table-secondary">
                <td></td>
                <td></td>
                <td><b>Visa išlaidų suma</b></td>
                <td><b className="number-xl">{sum} Eur</b></td>
            </tr>
      </tbody>
    </table>
    </div>
    );
    }
  }


export default TableExpense;