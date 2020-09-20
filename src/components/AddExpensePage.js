import React from 'react';
import {connect} from 'react-redux';
import { startAddExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => (
  <div>
    <div className="page-header">
    <div className="content-container">
    <h1 className="page-header__title">Add Expense</h1>
    </div>
    </div>
    <div className="content-container">
    <ExpenseForm 
    onSubmit={(expense)=>{
      props.dispatch(startAddExpense(expense));
      props.history.push('/dashboard');
    }}
    />
    </div>
  </div>
);

export default connect()(AddExpensePage);
