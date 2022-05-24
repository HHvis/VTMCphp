import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

export default function Table() {
    let urlList = {
        link: '#',
        home: '/home'
      }

      const [data, setData] = useState([]);
      const [total, setTotal] = useState([]);

      useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/expense').then(response=>{
          setData(response.data)
        });
      }, [])

      
  return (
    <div>
    <div className="container-fluid">
    <h2><a href={urlList.home}><BsFillArrowLeftSquareFill color="#adb5bd"/></a></h2>
    <h3 className='text-center display-6'>Išlaidų sąrašas</h3>
    <form className="row g-3">
      <div className="col-md p-2">
      <p className="text-xs font-weight-bold text-secondary text-uppercase mb-1 d-md-flex justify-content-md-start" >Filtruoti pagal</p>
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
<table className="table">
  <thead>
    <tr>
      <th scope="col">Data</th>
      <th scope="col">Pavadinimas</th>
      <th scope="col">Kategorija</th>
      <th scope="col">Suma</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map(row=>{
        return(
          <tr key={row.id}>
          <th scope="row">{row.created_at.substring(0, 10)}</th>
          <td>{row.title.toUpperCase()}</td>
          <td>{row.category}</td>
          <td>{row.amount}</td>
        </tr>
        );
      })
    }
        <tr className="table-secondary">
            <td></td>
            <td></td>
            <td><b>Visa išlaidų suma</b></td>
            <td><b className="number"> Eur</b></td>
        </tr>
  </tbody>
</table>
</div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-secondary gray-500 me-md-2" type="button">Siustis
</button>
</div>
</div>

  )
}
