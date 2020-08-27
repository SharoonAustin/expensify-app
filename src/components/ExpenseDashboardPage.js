import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import TotalExpense from '../selectors/TotalExpense'

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <TotalExpense />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
