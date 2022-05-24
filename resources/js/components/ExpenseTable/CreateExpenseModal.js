import axios from 'axios';
import React, { Component } from 'react'

class CreateExpenseModal extends Component {

    constructor(props) {
        super(props);
        this.state ={
            title:'',
            amount:'',
            category:'',
            errors: {}
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
      
      formValidation = () =>{
        
        const {title,amount,category} = this.state;
        let isValid = true;
        const errors = {};
        if(title.trim().length < 1){
          errors.titleLength = "Pavadinimas privalo turėti 1-20 simbolių";
          isValid = false;
        }
        else if(title.trim().length > 20){
          errors.titleTooLong = "Pavadinimas negali būti ilgesnis nei 20 simbolių";
          isValid = false;
        }
        else if(amount.valueOf()<0.01){

          errors.amountMinus = "Negalima įvesti neigiamo skaičiaus.";
          isValid = false;
        }
        else if(amount.trim().length < 1){
          errors.amountLength = "Įveskite sumą, skaičių.";
          isValid = false;
        }
        else if(category.trim().length < 2){
          errors.categorySelect = "Pamiršote pasirinkti kategoriją.";
          isValid = false;
        }
        else if (amount.includes('.')) {
         if(amount.split('.')[0].length>4 ||
          amount.split('.')[1].length>2){
          errors.amountTooLong = "Sumažinkite sumą. Suma negali viršyti keturženklės sumos ir dviejų skaičių po kablelio.";
          isValid = false;
          }else {
            isValid = true;
          }   
        }
        else if (!amount.includes('.')) {
          if(amount.trim().length>6){
           errors.amountTooLong = "Sumažinkite sumą. Suma negali viršyti keturženklės sumos ir dviejų skaičių po kablelio.";
           isValid = false;
          }else {
            isValid = true;
          }
         }
         else
        window.location.reload();
        this.setState({errors});
        return isValid;
      }

      onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.formValidation();
        if(isValid){
          this.setState({title : "", amount : "", category : ""});
          axios.post('store/expense/data', {
            title:this.state.title,
            amount:this.state.amount,
            category:this.state.category,
        }).then(()=>{
            location.reload();
        })
      }
     }
      
     render(){
      const {title, amount, errors} = this.state;
        return (
<>
<button className='btn btn-success style={width: "4rem"} offset-md-6 '
  data-toggle="modal" data-target="#CreateExpenseModal"> Pridėti įrašą  
</button>
<div className="modal fade" id="CreateExpenseModal" aria-labelledby="exampleModalCenterTitle" tabIndex="-1" role="dialog" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Pridėti naują įrašą </h5>
      </div>
        <div className="modal-body">
          <form className="form" onSubmit={this.onSubmit}>
            <div className='form-group col-md-6'>
              <input className="form-control " type="text" value={title}
              id="title" placeholder='Pavadinimas' onChange={this.inputExpenseTitle}/>
            </div>  
              <div className='form-group col-md-6'>
                <input className="form-control" 
                value={amount} type="number"
                placeholder='Suma'
                onChange={this.inputExpenseAmount}/>
            </div>
            <div className='form-group col-md-6'>
              <select className="form-control col-md-5" id="category" onChange={this.inputExpenseCategory} required>
                  <option disabled selected>Kategorija</option>
                  <option value="Maistui">Maistui</option>
                  <option value="Drabužiams">Drabužiams</option>
                  <option value="Vaistams">Vaistams</option>
                  <option value="Kurui">Kurui</option>
                  <option value="Auto taisymui">Auto taisymui</option>
              </select>
            </div>
            {Object.keys(errors).map((key)=>{
                return <div className='text-danger' key={key}> {errors[key]} </div>
                })}
      <div className="modal-footer">
        <button type="submit" className="btn btn-secondary btn-sm"
          >Išsaugoti
        </button>
        <button type="button" className="btn btn-light close btn-sm"  
          data-dismiss="modal">Uždaryti
        </button>
      </div>
      </form>
        </div>
    </div>
  </div>
</div>
</>
        )
    }
}


export default CreateExpenseModal;
