import React, { Component } from 'react'
import ExpenseTableActionButtons from './ExpenseTableActionButtons'



class ExpenseTableRow extends Component {

    constructor(props) {
        super(props);
    }

    getIncomeDetails = (id) => {
        axios.post('/get/each/income/details',{
            id: id
        }).then((response)=>{
            this.setState({
                currentTitle: response.data.title,
                currentAmount: response.data.amount,
                currentCategory: response.data.category,
            })
            console.log(response.data)
        })
    }

    

    render(){
        return (
            

            <tr>
                <th>{this.props.data.created_at.substring(0,10)}</th>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.amount}</td>
                <td>{this.props.data.category}</td>
                <td>
                    <ExpenseTableActionButtons eachRowId={this.props.data.id}/>
                </td>
            </tr>
        )
    }
}
export default ExpenseTableRow;