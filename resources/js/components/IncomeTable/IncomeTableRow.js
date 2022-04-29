import React, { Component } from 'react'
import IncomeTableActionButtons from './IncomeTableActionButtons';

class IncomeTableRow extends Component {

    constructor(props) {
        super(props);
    }

 
    render(){
        return (
            <tr>
                <th>{this.props.data.created_at.substring(0,10)}</th>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.amount}</td>
                <td>{this.props.data.category}</td>
                <td>
                    <IncomeTableActionButtons eachRowId={this.props.data.id}/>
                </td>
            </tr>
        )
    }
}
export default IncomeTableRow;