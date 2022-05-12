import axios from 'axios';
import React, { Component } from 'react'
import IncomeTableRow from './IncomeTableRow';

class Income extends Component {

    constructor(props) {
        super(props);
        this.state = {
            incomes:[],
        }
    }

    componentDidMount(){
        this.getIncomeList();
    }

    getIncomeList =() =>{
        let self=this;
        axios.get('/get/income/list',{
            params:{_limit: 3}
        }).then(function(response)
            {self.setState({
                incomes:response.data
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
              <th scope="col" width="25%">Kategorija</th>
              <th scope="col" width="25%">Veiksmai</th>
            </tr>
          </thead>
          <tbody>
                {this.state.incomes.map(function(x, i){
                  return <IncomeTableRow key={i} data={x} />
                })}  
          </tbody>
                </table>
                </div>
        );
    }             
}

    export default Income;
