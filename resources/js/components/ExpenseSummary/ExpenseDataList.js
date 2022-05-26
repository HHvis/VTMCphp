import React, {useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import { Type } from 'react-bootstrap-table2-editor';


function ExpenseDataList(){
    const [userList, setUserList] = useState([]);
    const [totalSum, setTotalSum] = useState(0);

    
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
          }},
        {dataField: 'title', text: 'Pavadinimas', sort: true},
        {dataField: 'category', text: 'Kategorija'},
        {dataField: 'amount', text: 'Suma'},
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 6,
        lastPageText: 'Last Page',
        firstPageText: 'First Page',
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
                            <p>Visa išlaidų suma yra: {totalSum}</p>

                <BootstrapTable 
                    keyField ='id' 
                    columns={columns} 
                    data={userList}
                    pagination={pagination} 
                    filter={filterFactory()}
                    />

        <table className='table'>
            {/* <tr>
                <th>Data</th>
                <th>Pavadinimas</th>
                <th>Suma</th>
            </tr>
            {
                userList ?
                userList.map(list => 
                <tr>
                    <td>{list.created_at.substring(0, 10)}</td>
                    <td>{list.title}</td>
                    <d>{list.category}</d>
                    <td>{list.amount}</td>
                </tr>
                )
                : 'Kraunama...'
            } */}
                <tr>
                    <td></td>
                    <td></td>
                    <td><b>Visa išlaidų suma:</b></td>
                    <td><b>{totalSum}</b></td>
                </tr>
        </table>
    </div>
    )
}

export default ExpenseDataList;
