import React, { Component } from 'react'

class IncomeRow extends Component {
    render(){
        return (
            <tr className='alert alert-success'>
                <th>{this.props.data.created_at.substring(0, 10)}</th>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.amount}</td>
                <td>{this.props.data.category}</td>
            </tr>
        )
    }
}
export default IncomeRow;