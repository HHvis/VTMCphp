import React, { Component } from 'react'

class ViewModal extends Component {

    constructor(props) {
        super(props);
    }



    render(){
        return (
            <div className="modal fade" id={"ViewModal"+this.props.modalId} aria-labelledby="exampleModalCenterTitle" tabIndex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                        Title:<strong>{this.props.incomeData.currentTitle}</strong>
                        <hr/>
                        Amount:<strong>{this.props.incomeData.currentAmount}</strong>
                        <hr/>
                        Cayegory:<strong>{this.props.incomeData.currentCategory}</strong>
                  
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        )
    }
}
export default ViewModal;