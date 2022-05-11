import React, { Component } from 'react'

class ExpenseTableFilter extends Component {
    render(){
        return (
            <tr className='alert'>
                <th>{this.props.data.created_at.substring(0, 10)}</th>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.category}</td>
                <td>{this.props.data.amount}</td>
            </tr>
        )
    }
}
export default ExpenseTableFilter;