import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
    <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Edit Expense</h1>
    </div>
    </div>
    <div className="content-container">
     <ExpenseForm
     expense={props.expenses}
     onSubmit={(expenses)=>{
      props.dispatch(startEditExpense(props.expenses.id, expenses));
      props.history.push('/dashboard');
     }}
     />
       <button className="button button--secondary" onClick={() => {
        props.dispatch(startRemoveExpense({ id: props.expenses.id }));
        props.history.push('/dashboard');
      }}>Remove Expense</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);










/* import React from 'react';
import connect from 'connect';



 const mapStateToProps=(state,props)=>{
  return{
    expense:state.expenses.find((expense)=> expense.id === props.match.params.id)
  }
}
export default connect(mapStateToProps)(EditExpensePage); 
 */

