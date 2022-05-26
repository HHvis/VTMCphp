import React, {useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import filterFactory, { dateFilter, textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

import { Type } from 'react-bootstrap-table2-editor';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



function ExpenseDataList(){
    const [userList, setUserList] = useState([]);
    const [totalSum, setTotalSum] = useState(0);


    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        bgColor: '#00BFFF'
      };


    const columns = [
        {dataField: 'created_at', text: 'Data', sort: true, filter: dateFilter(), 
        formatter: (cell) => {
            let dateObj = cell;
            if (typeof cell !== 'object') {
              dateObj = new Date(cell);
            }
            return `${('0' + dateObj.getUTCDate()).slice(-2)}/${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${dateObj.getUTCFullYear()}`;
          },
          editor: {
            type: Type.DATE
          },   headerTitle: { hidden: true},   headerAlign: 'center', footer: ''},
        {dataField: 'title', text: 'Pavadinimas', filter: textFilter({
            delay: 500, // cia default
            className: 'test-classname',
            placeholder: 'Ieškoti pagal pavadinimą...',
          }), headerAlign: 'center', footer: ''},
        {dataField: 'category', text: 'Kategorija', filter: textFilter({
            delay: 500, 
            className: 'test-classname',
            placeholder: 'Ieškoti pagal kategoriją...',
          }), headerAlign: 'center', footer: 'Galutinė visų išlaidų suma:'},
        {dataField: 'amount', text: 'Suma', sort:true, headerAlign: 'center', footer: columnData => userList.reduce((sum, row) => sum + parseFloat(row.amount), 0), 
        footerStyle: {
            backgroundColor: '#ffcccb'
          }}
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        lastPageText: 'Paskutinis',
        firstPageText: 'Pirmas',
        nextPageText: '>',
        prePageText: '<',
        showTotal: false,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage){
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage){
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    });

    //Api sukuriau per Laravel/API
    useEffect(() => {
        fetch('/get/expenses')
        .then(response => response.json())
        .then(result => setUserList(result))
        .catch(error => console.log(error))
    }, [])

    //GalutineSumaSuPrototype
    useEffect(() => {
        const total = userList.reduce((sum, row) => sum + parseFloat(row.amount), 0);
        return setTotalSum(total)
        }, [userList]);



    return(
    <div className='row'>
                <BootstrapTable
                    bootstrap4
                    keyField ='id' 
                    columns={columns} 
                    data={userList}
                    pagination={pagination} 
                    filter={filterFactory()}
                    // selectRow={ selectRow }
                    filterPosition="top"
                    />
    </div>
    )
}

export default ExpenseDataList;
