import axios from 'axios';
import React, { Component } from 'react'
import ExpenseRow from './ExpenseRow';

class TableExpense extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses:[],
            rows: []
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
        return(
            <div>
                <table className="table"> 
                <thead>
                    <tr>
                        <th scope="col col-4">Data</th>
                        <th scope="col col-4">Parduotuvė</th>
                        <th scope="col col-4">Suma</th>
                        <th scope="col col-4">Kategorija</th>
                    </tr>
                </thead>
      <tbody>
            {this.state.rows.slice(0, 7).map((row) => row.type === 'expense' ? <ExpenseRow data={row} key={row.title}/> : <ExpenseRow data={row} key={row.title}/>)}
            <tr className="table-secondary">
                <td></td>
                <td></td>
                <td><b>Visa išlaidų suma</b></td>
                <td><b className="number-xl"> Eur</b></td>
            </tr>
      </tbody>
    </table>
    </div>
    );
    }
  }


export default TableExpense;