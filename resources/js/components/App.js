import React, { useState } from 'react'
import './App.css';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import CreateIncomeModal from './IncomeTable/CreateIncomeModal';
import CreateExpenseModal from './ExpenseTable/CreateExpenseModal';
import IncomeExpenseSummary from './IncomeExpenseSummary'
import ExpenseLimits from './ExpenseLimits/ExpenseLimits';

function App() {
  let urlList = {
    table: '/table'
  }

  return (
    <div>
      <div className="container-fluid">
      <div className="row">
      <div className="col mb-4">
        <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Galutinis likutis</div>
                <div className="row no-gutters align-items-center">
            <div className="col-auto">
               <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">659 Eur</div>
                </div>
            <div className="col">
        <div className="progress progress-sm mr-2">
                    <div className="progress-bar bg-success" role="progressbar"
                      style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                      aria-valuemax="100"></div>
                   </div>
                 </div>
                </div>
              </div>
             </div>
          </div>
        </div>
    </div>
    </div>

    <div className="row">
    <div className="col-xl-6 col-lg-12 col-sm-12 mb-2">
        <div className="card shadow mb-2">
        <div className="card-header py-1">
            <div className="row g-3">
            <div className="col-md p-2">
                <label className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Pajamos</label>
                </div>
                <div className="col text-right"><CreateIncomeModal/></div>
            </div>
        </div>    
            <div className="card-body" id="income"></div>
    </div>
    </div>
    <div className="col-xl-6 col-lg-12 col-sm-12 mb-2">
        <div className="card shadow mb-2">
        <div className="card-header py-1">
            <div className="row g-3">
            <div className="col-md p-2">
                <label className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Išlaidos</label>
                </div>
                <div className="col text-right"><CreateExpenseModal/></div>
            </div>
        </div>    
            <div className="card-body" id="expense"></div>
    </div>
    </div>
    </div>

    <div className="row">
    <div className="col-xl-6 col-lg-7">
        <div className="card border-left-success shadow mb-4">
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Pajamų ir išlaidų suvestinė</h6>
                <div className="dropdown no-arrow">
                   <h2><a href={urlList.table}><BsFillArrowRightSquareFill color="#adb5bd"/></a></h2>
                </div>
            </div>
            <div className="card-body">
                <div className="chart-area"></div>
                <IncomeExpenseSummary />
            </div>
            </div>
        </div>
              
    <div className="col-xl-6 col-lg-6">
        <div className="card border-left-success shadow mb-4">
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Grafikas</h6>
            </div>
            <div className="card-body">
                <div className="chart-pie pt-4 pb-2">
                </div>
            </div>
        </div>
    </div>
</div>
<div className="row">
        <div className="col mb-4">
            <div className="card shadow mb-4">           
                <ExpenseLimits/>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default App;