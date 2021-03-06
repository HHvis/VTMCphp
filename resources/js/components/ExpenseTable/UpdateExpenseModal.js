import axios from 'axios';
import { Toast } from 'bootstrap';
import React, { Component } from 'react'

class UpdateExpenseModal extends Component {

    constructor(props) {
        super(props);
        this.state ={
          title:null,
          amount:null,
          category:null,
          errors: {},
          expenseCategories:[]

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


    formValidation = () =>{
        
      const {title,amount,category} = this.state;
      let isValid = true;
      const errors = {};
      if(title.trim().length < 1){
        errors.titleLength = "Pavadinimas privalo tur??ti 1-20 simboli??";
        isValid = false;
      }
      else if(title.trim().length > 20){
        errors.titleTooLong = "Pavadinimas negali b??ti ilgesnis nei 20 simboli??";
        isValid = false;
      }
      else if(amount.valueOf()<0.01){

        errors.amountMinus = "Negalima ??vesti neigiamo skai??iaus.";
        isValid = false;
      }
      else if(amount.trim().length < 1){
        errors.amountLength = "??veskite sum??, skai??i??.";
        isValid = false;
      }
      else if(category.trim().length < 2){
        errors.categorySelect = "Pamir??ote pasirinkti kategorij??.";
        isValid = false;
      }
      else if (amount.includes('.')) {
       if(amount.split('.')[0].length>4 ||
        amount.split('.')[1].length>2){
        errors.amountTooLong = "Suma??inkite sum??. Suma negali vir??yti ketur??enkl??s sumos ir dviej?? skai??i?? po kalbelio";
        isValid = false;
        }else {
          isValid = true;
        }   
      }
      else if (!amount.includes('.')) {
        if(amount.trim().length>6){
         errors.amountTooLong = "Suma??inkite sum??. Suma negali vir??yti ketur??enkl??s sumos ir dviej?? skai??i?? po kalbelio";
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
        axios.post('update/expense/data',{
          id:this.props.modalExpenseId,
          title: this.state.title,
          amount: this.state.amount,
          category: this.state.category,
        }).then(()=> {
           location.reload();
         
        })
      }
    }

    componentDidMount(){
      this.getExpenseCategoryList();
  }
    getExpenseCategoryList = () =>{
      axios.get('/get/expense_categories/list').then((response) => {
          this.setState({expenseCategories: response.data});
      });
  }


    render(){
      const {title, amount, category, errors} = this.state;
        return (
            <div className="modal fade" id={"UpdateExpenseModal"+this.props.modalExpenseId} aria-labelledby="updateExpenseModal" tabIndex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Atnaujinti ??ra????</h5>
                  </div>
                  <div className="modal-body">
                    <form className="form" onSubmit={this.onSubmit}>
                    <div className='form-group col-md-6'>
                             <input className="form-control "  type="text"
                          id="title" value={title}
                          onChange={this.inputExpenseTitle}/>
                          
                      </div>  
                      <div className='form-group col-md-6'>
                             <input className="form-control"  type="number"
                          id="amount" value={amount} step="0.01"
                          onChange={this.inputExpenseAmount}/>
                      </div>
                      <div className='form-group col-md-6'>
                                <select className="form-control col-md-5" id="category" value={category} onChange={this.inputExpenseCategory} required>
                                  <option disabled selected>Kategorija</option>
                                    {this.state.expenseCategories.map((expenseCategory) => (<option value={expenseCategory.pavadinimas}>{expenseCategory.pavadinimas}</option>) )}
                                </select>
                          </div>
                          {Object.keys(errors).map((key)=>{
                          return <div className='text-danger' key={key}> {errors[key]} </div>
                          })}
                          <div className="modal-footer">
                    <input type="submit" className='btn btn-secondary btn-sm'
                           value="Pakeisti" />
                    <button type="button" className="btn btn-light btn-sm" data-bs-dismiss="modal">U??daryti</button>
                  </div>
                    </form>
                </div>
              </div>
            </div>
          </div>  
        )
    }
}
export default UpdateExpenseModal;
