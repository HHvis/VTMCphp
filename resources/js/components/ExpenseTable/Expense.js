import axios from 'axios';
import React, { Component } from 'react'
import ExpenseTableRow from './ExpenseTableRow';

class Expense extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses:[],
        }
    }

    componentDidMount(){
        this.getExpenseList();
    }

    getExpenseList =() =>{
        let self=this;
        axios.get('/get/expense/list',{
            params:{_limit: 3}
        }).then(function(response)
            {self.setState({
                expenses:response.data
            });
        });
    }


        render(){
            return(
                <div>
                    <table className="table"> 
                    {/* <toast/> */}
                        <thead>
                           <tr>
              <th scope="col" width="10%" >Data</th>
              <th scope="col" width="25%">Pavadinimas</th>
              <th scope="col" width="5%">Suma</th>
              <th scope="col" width="22%">Kategorija</th>
              <th scope="col" width="28%">Veiksmai</th>
            </tr>
          </thead>
          <tbody>
                {this.state.expenses.map(function(x, i){
                  return <ExpenseTableRow key={i} data={x} />
                })}  
          </tbody>
                </table>
                </div>
        );
    }             
}

    export default Expense;
