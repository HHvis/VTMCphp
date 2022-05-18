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
            <div >
            <button type="button" 
                style={{width: "4rem" , marginRight:"2px"}}
                className="btn btn-warning btn-sm btn-secondary" 
                data-bs-toggle="modal" 
                data-bs-target={"#UpdateExpenseModal"+this.props.eachRowId}
                onClick={() => {this.getExpenseDetails(this.props.eachRowId)} }
                >
            Pakeisti</button>
            <UpdateExpenseModal modalExpenseId={this.props.eachRowId} expenseData={this.state}/>

            <button type="button" 
                style={{width: "4rem"}}
                className="btn btn-danger btn-sm btn-secondary" 
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