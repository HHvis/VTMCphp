import axios from 'axios';
import React, { Component } from 'react'

class DeleteIncomeModal extends Component {

    constructor(props) {
        super(props);
    }

    deleteIncomeData = (income) =>{
        axios.delete('/delete/income/data/'+income).then(() =>{
                location.reload();
        })
    }

   render(){
        return (
            <div className="modal fade" id={"DeleteIncomeModal"+this.props.modalIncomeId} aria-labelledby="exampleModalCenterTitle" tabIndex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Ištrinti įrašą</h5>
                  </div>
                  <div className="modal-body text-center">
                       Ar norite ištrinti šį įrašą?   
                  <div className="modal-footer">
                    <button type="button" className="btn btn-success btn-sm" data-bs-danger="modal"
                        onClick={()=>{this.deleteIncomeData(this.props.modalIncomeId)}}
                        >Taip</button>  
                    <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Uždaryti</button>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        )
    }
}
export default DeleteIncomeModal;