import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from './expenses';
import numeral from 'numeral';
import { Link } from 'react-router-dom'

const TotalExpense=(props)=>{
    let wordSelector=props.expenses.length > 1 ? 'Expenses' : 'Expense';
    let count=0;
    let amt=0;
    {props.expenses.map((expense) => { 
      amt=amt+expense.amount;
      count++;
    })}
    amt=numeral(amt).format('$0,0.00');
    return (
    <div className="page-header">
    <div>
    <div className="content-container">
      <h1 className="page-header__title">Viewing <span>{count}</span> {wordSelector} totalling <span>{amt}</span></h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
      </div>
      </div>
    </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
  };
  
  export default connect(mapStateToProps)(TotalExpense);
  