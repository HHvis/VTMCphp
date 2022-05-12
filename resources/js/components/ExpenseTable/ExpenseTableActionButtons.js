import React, { Component } from 'react'
import UpdateExpenseModal from './UpdateExpenseModal';
import DeleteExpenseModal from './DeleteExpenseModal';
import axios from 'axios';


class ExpenseTableActionButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTitle:null,
            currentAmount:null,
            currentCategory:null
        }
    }

    getExpenseDetails = (id) => {
        axios.post('/get/each/expense/details',{
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
            <div className="btn-group btn-group-sm" role="group">

                <button type="button" 
                    className="btn btn-warning btn-sm" 
                    data-bs-toggle="modal" 
                    data-bs-target={"#UpdateExpenseModal"+this.props.eachRowId}
                    onClick={() => {this.getExpenseDetails(this.props.eachRowId)} }
                    >
                Pakeisti</button>
                <UpdateExpenseModal modalExpenseId={this.props.eachRowId} expenseData={this.state}/>

                <button type="button" 
                    className="btn btn-danger btn-sm" 
                    data-bs-toggle="modal" 
                    data-bs-target={"#DeleteExpenseModal"+this.props.eachRowId}
                    onClick={() => {this.getExpenseDetails(this.props.eachRowId)} }
                    >Ištrinti</button>
                <DeleteExpenseModal modalExpenseId={this.props.eachRowId} expenseData={this.state}/>    
            </div>
        )
    }
}
export default ExpenseTableActionButtons;