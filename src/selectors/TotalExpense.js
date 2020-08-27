import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from './expenses';
import numeral from 'numeral';

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
    <div>
      <h2>Viewing {count} {wordSelector} totalling {amt}</h2>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
  };
  
  export default connect(mapStateToProps)(TotalExpense);
  