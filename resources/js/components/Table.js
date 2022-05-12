import React from 'react'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import TableExpense from './TableExpense';

function Table() {
    let urlList = {
        link: '#',
        home: '/home'
      }
  return (
    <div>
    <div className="container-fluid">
    <h2><a href={urlList.home}><BsFillArrowLeftSquareFill color="#adb5bd"/></a></h2>
    <form className="row g-3">
  <div className="col-md p-2">
    <label className="text-xs font-weight-bold text-secondary text-uppercase mb-1 d-md-flex justify-content-md-end" >Filtruoti pagal</label>
  </div>
  <div className="col-md">
    <label htmlFor="exampleDataList" className="visually-hidden">Kategorija</label>
    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Kategorija"/>
    <datalist id="datalistOptions">
    <option value="Maistui"/>
    <option value="Drabužiams"/>
    <option value="Vaistams"/>
    <option value="Kurui"/>
    <option value="Auto taisymui"/>
    </datalist>
  </div>
  <div className="col-md p-2">
  <label className="text-xs font-weight-bold text-secondary text-uppercase mb-1 d-md-flex justify-content-md-end" >nuo</label>
  </div>
  <div className="col">
    <input type="date" className="form-control" id="inputdate"/>
  </div>
  <div className="col-md p-2">
  <label className="text-xs font-weight-bold text-secondary text-uppercase mb-1 d-md-flex justify-content-md-end" >iki</label>
  </div>
  <div className="col">
    <input type="date" className="form-control" id="inputdate"/>
  </div>
  <div className="col-md ">
    <button type="submit" className="btn btn-outline-secondary">Filtruoti</button>
  </div>
</form>
<TableExpense />
</div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-secondary gray-500 me-md-2" type="button">Atsisiųsti CSV dokumentą</button>
</div>
    </div>

  )
}

export default Table;