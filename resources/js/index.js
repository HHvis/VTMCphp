
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import  "react-icons/fa";
import Table from './components/Table';
import Income from './components/IncomeTable/Income';
import Expense from './components/ExpenseTable/Expense';
import Table2 from './components/Table2';




if (document.getElementById('exampleApp')) {
    ReactDOM.render(<App />, document.getElementById('exampleApp'));
}

if (document.getElementById('exampleTable')) {
    ReactDOM.render(<Table />, document.getElementById('exampleTable'));
}

if (document.getElementById('income')) {
    ReactDOM.render(<Income />, document.getElementById('income'));
}

if (document.getElementById('expense')) {
    ReactDOM.render(<Expense />, document.getElementById('expense'));
}

if (document.getElementById('table2')) {
    ReactDOM.render(<Table2 />, document.getElementById('table2'));
}