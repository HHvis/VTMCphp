import axios from 'axios';
import React, { Component } from 'react'

class DeleteExpenseModal extends Component {

    constructor(props) {
        super(props);
    }

    deleteExpenseData = (expense) =>{
        axios.delete('/delete/expense/data/'+expense).then(() =>{
                location.reload();
        })
    }

   render(){
        return (
            <div className="modal fade" id={"DeleteExpenseModal"+this.props.modalExpenseId} aria-labelledby="exampleModalCenterTitle" tabIndex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Ištrinti įrašą</h5>
                  </div>
                  <div className="modal-body">
                       Ar norite ištrinti šį įrašą?   
                  <div className="modal-footer">
                    <button type="button" className="btn btn-success" data-bs-danger="modal"
                        onClick={()=>{this.deleteExpenseData(this.props.modalExpenseId)}}
                        >Taip</button>  
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Uždaryti</button>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        )
    }
}
export default DeleteExpenseModal;