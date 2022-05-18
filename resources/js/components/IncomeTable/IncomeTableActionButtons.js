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
            <div >
            <button type="button" 
                style={{width: "4rem" , marginRight:"2px"}}
                className="btn btn-warning btn-sm btn-secondary" 
                data-bs-toggle="modal" 
                data-bs-target={"#UpdateIncomeModal"+this.props.eachRowId}
                onClick={() => {this.getIncomeDetails(this.props.eachRowId)} }
                >
            Pakeisti</button>
            <UpdateIncomeModal modalIncomeId={this.props.eachRowId} incomeData={this.state}/>

            <button type="button" 
                style={{width: "4rem"}}
                className="btn btn-danger btn-sm btn-secondary" 
                data-bs-toggle="modal" 
                data-bs-target={"#DeleteIncomeModal"+this.props.eachRowId}
                onClick={() => {this.getIncomeDetails(this.props.eachRowId)} }
                >Ištrinti</button>
            <DeleteIncomeModal modalIncomeId={this.props.eachRowId} incomeData={this.state}/>    
        </div>
        )
    }
}
export default IncomeTableActionButtons;