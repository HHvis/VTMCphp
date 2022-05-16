import React, { Component } from 'react'
import UpdateIncomeModal from './UpdateIncomeModal';
import DeleteIncomeModal from './DeleteIncomeModal';
import axios from 'axios';


class IncomeTableActionButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTitle:null,
            currentAmount:null,
            currentCategory:null
        }
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
            <div className="btn-group btn-group-sm" role="group">

                <button type="button" 
                    className="btn btn-warning btn-sm" 
                    data-bs-toggle="modal" 
                    data-bs-target={"#UpdateIncomeModal"+this.props.eachRowId}
                    onClick={() => {this.getIncomeDetails(this.props.eachRowId)} }
                    >
                Keisti</button>
                <UpdateIncomeModal modalIncomeId={this.props.eachRowId} incomeData={this.state}/>

                <button type="button" 
                    className="btn btn-danger btn-sm" 
                    data-bs-toggle="modal" 
                    data-bs-target={"#DeleteIncomeModal"+this.props.eachRowId}
                    onClick={() => {this.getIncomeDetails(this.props.eachRowId)} }
                    >Trinti</button>
                <DeleteIncomeModal modalIncomeId={this.props.eachRowId} incomeData={this.state}/>    
            </div>
        )
    }
}
export default IncomeTableActionButtons;