import axios from 'axios';
import React, { Component } from 'react'

class UpdateIncomeModal extends Component {

    constructor(props) {
        super(props);
        this.state ={
          title:null,
          amount:null,
          category:null,
          errors: {}
        }
    }

    inputIncomeTitle = (event) =>{
      this.setState({
        title:event.target.value,
      });
    }
    inputIncomeAmount = (event) =>{
      this.setState({
        amount:event.target.value,
      });
    }
    inputIncomeCategory = (event) =>{
      this.setState({
        category:event.target.value,
      });
    }

    static getDerivedStateFromProps(props, current_state){
      let incomeUpdate = {
          title:null,
          amount:null,
          category:null
      }

      if(current_state.title && (current_state.title !== props.incomeData.currentTitle)){
        return null;
      }
      if(current_state.amount && (current_state.amount !== props.incomeData.currentAmount)){
        return null;
      }
      if(current_state.category && (current_state.category !== props.incomeData.currentCategory)){
        return null;
      }


      if(current_state.title !== props.incomeData.currentTitle || 
        current_state.title === props.incomeData.currentTitle){
        incomeUpdate.title = props.incomeData.currentTitle;
      }
      if(current_state.amount !== props.incomeData.currentAmount ||
        current_state.amount === props.incomeData.currentAmount){
        incomeUpdate.amount = props.incomeData.currentAmount;
      }
      if(current_state.category !== props.incomeData.currentCategory ||
        current_state.category === props.incomeData.currentCategory){
        incomeUpdate.category = props.incomeData.currentCategory;
      }
      return incomeUpdate;
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
        errors.amountTooLong = "Sumažinkite sumą. Suma negali viršyti keturženklės sumos ir dviejų skaičių po kalbelio";
        isValid = false;
        }else {
          isValid = true;
        }   
      }
      else if (!amount.includes('.')) {
        if(amount.trim().length>6 ){
         errors.amountTooLong = "Sumažinkite sumą. Suma negali viršyti keturženklės sumos ir dviejų skaičių po kalbelio";
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
        axios.post('update/income/data',{
          id:this.props.modalIncomeId,
          title: this.state.title,
          amount: this.state.amount,
          category: this.state.category,
        }).then(()=> {
           location.reload();
         
        })
      }
    }





    render(){
      const {title, amount, category, errors} = this.state;
        return (
            <div className="modal fade" id={"UpdateIncomeModal"+this.props.modalIncomeId} aria-labelledby="updateIncomeModal" tabIndex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Atnaujinti įrašą</h5>
                  </div>
                  <div className="modal-body">
                    <form className="form" onSubmit={this.onSubmit}>
                    <div className='form-group col-md-6'>
                             <input className="form-control " type="text"
                          id="title" value={title ?? ""}
                          onChange={this.inputIncomeTitle}/>
                          
                      </div>  
                      <div className='form-group col-md-6'>
                             <input className="form-control " type="number" step="0.01" 
                          id="amount" value={amount}
                          onChange={this.inputIncomeAmount}/>
                      </div>
                      <div className='form-group col-md-6'>
                                <select className="form-control col-md-5" id="category" value={category} onChange={this.inputIncomeCategory} required>
                                  <option disabled selected>Kategorija</option>
                                  <option value="Atlyginimas">Atlyginimas</option>
                                  <option value="Palukanos">Palukanos</option>
                                  <option value="Dovanos">Dovanos</option>
                                </select>
                          </div>
                          {Object.keys(errors).map((key)=>{
                          return <div className='text-danger' key={key}> {errors[key]} </div>
                          })}
                  <div className="modal-footer">
                    <input type="submit" className='btn btn-secondary btn-sm'
                           value="Pakeisti" />
                    <button type="button" className="btn btn-light btn-sm" data-bs-dismiss="modal">Uždaryti</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>  
        )
    }
}
export default UpdateIncomeModal;
