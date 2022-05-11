import axios from 'axios';
import React, { Component } from 'react'

class CreateExpenseModal extends Component {

    constructor(props) {
        super(props);

        this.state ={
            title:null,
            amount:null,
            category:null,
            errors: []
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
      
      storeExpenseData = () => {
        axios.post('store/expense/data', {
            title:this.state.title,
            amount:this.state.amount,
            category:this.state.category,
        }).then(()=>{
            location.reload();
        })

      }

      

    render(){
        return (
            <>
                <button className='btn btn-success style={{width: "4rem"} offset-md-6 '
                    data-toggle="modal" data-target="#CreateExpenseModal"
                    > Pridėti naują įrašą  
                </button>
                <div className="modal fade" id="CreateExpenseModal" aria-labelledby="exampleModalCenterTitle" tabIndex="-1" role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">Pridėti naują įrašą </h5>
                      </div>
                      <div className="modal-body">





                        <form className="form needs-validation">

                        <div className='form-group col-md-6'>
                             <input className="form-control " type="text"
                            id="title" placeholder='Pavadinimas' onChange={this.inputExpenseTitle} required/>      
                          </div>  


                          <div className='form-group col-md-6'>
                             <input className="form-control " type="number" min="1"
                             id="amount" placeholder='Suma'
                             onChange={this.inputExpenseAmount} required/>
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





                      </div>
                      <div className="modal-footer">
                        <input type="button" className="btn btn-light btn-sm"
                         value="Išsaugoti" onClick={this.storeExpenseData} />
                    <button type="button" className="btn btn-secondary close btn-sm"  data-dismiss="modal">Uždaryti</button>
                  </div>
                </div>
              </div>
            </div>
            </>
        )
    }
}


export default CreateExpenseModal;
