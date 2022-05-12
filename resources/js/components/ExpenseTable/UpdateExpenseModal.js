import axios from 'axios';
import { Toast } from 'bootstrap';
import React, { Component } from 'react'

class UpdateExpenseModal extends Component {

    constructor(props) {
        super(props);
        this.state ={
          title:null,
          amount:null,
          category:null
        }
    }

    inputExpenseTitle = (event) =>{
      this.setState({
        title:event.target.value,
      });
    }
    inputExpenseAmount = (event) =>{
      this.setState({
        amount:event.target.value,
      });
    }
    inputExpenseCategory = (event) =>{
      this.setState({
        category:event.target.value,
      });
    }

    static getDerivedStateFromProps(props, current_state){
      let expenseUpdate = {
          title:null,
          amount:null,
          category:null
      }

      if(current_state.title && (current_state.title !== props.expenseData.currentTitle)){
        return null;
      }
      if(current_state.amount && (current_state.amount !== props.expenseData.currentAmount)){
        return null;
      }
      if(current_state.category && (current_state.category !== props.expenseData.currentCategory)){
        return null;
      }


      if(current_state.title !== props.expenseData.currentTitle || 
        current_state.title === props.expenseData.currentTitle){
        expenseUpdate.title = props.expenseData.currentTitle;
      }
      if(current_state.amount !== props.expenseData.currentAmount ||
        current_state.amount === props.expenseData.currentAmount){
        expenseUpdate.amount = props.expenseData.currentAmount;
      }
      if(current_state.category !== props.expenseData.currentCategory ||
        current_state.category === props.expenseData.currentCategory){
        expenseUpdate.category = props.expenseData.currentCategory;
      }
      return expenseUpdate;
    }

    updateExpenseData =() => { 
      axios.post('update/expense/data',{
        id:this.props.modalExpenseId,
        title: this.state.title,
        amount: this.state.amount,
        category: this.state.category,
      }).then(()=> {
        setTimeout(() => {
          location.reload();
        }, 40)
      })
    }



    render(){
        return (
            <div className="modal fade" id={"UpdateExpenseModal"+this.props.modalExpenseId} aria-labelledby="updateExpenseModal" tabIndex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Atnaujinti įrašą</h5>
                  </div>
                  <div className="modal-body">
                    <form className="form">
                    <div className='form-group col-md-6'>
                             <input className="form-control "  type="text"
                          id="title" value={this.state.title ?? ""}
                          onChange={this.inputExpenseTitle}/>
                          
                      </div>  
                      <div className='form-group col-md-6'>
                             <input className="form-control"  min="1"
                          id="amount" value={this.state.amount ?? ""}
                          onChange={this.inputExpenseAmount}/>
                      </div>

                      <div className='form-group col-md-6'>
                                <select className="form-control col-md-5" id="category" onChange={this.inputExpenseCategory} required>
                                  <option selected>Kategorija</option>
                                  <option value="Maistui">Maistui</option>
                                  <option value="Drabužiams">Drabužiams</option>
                                  <option value="Vaistams">Vaistams</option>
                                  <option value="Kurui">Kurui</option>
                                  <option value="Auto taisymui">Auto taisymui</option>
                                </select>
                          </div>
                    </form>
                  
                  <div className="modal-footer">
                    <input type="submit" className='btn btn-secondary btn-sm'
                           value="Pakeisti" onClick={this.updateExpenseData}/>
                    <button type="button" className="btn btn-light btn-sm" data-bs-dismiss="modal">Uždaryti</button>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        )
    }
}
export default UpdateExpenseModal;
