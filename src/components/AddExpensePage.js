import React from 'react';
import {connect} from 'react-redux';
import { startAddExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
    onSubmit={(expense)=>{
      props.dispatch(startAddExpense(expense));
      props.history.push('/dashboard');
    }}
    />
  </div>
);

export default connect()(AddExpensePage);
