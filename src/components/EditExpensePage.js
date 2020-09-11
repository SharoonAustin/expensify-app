import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
     <ExpenseForm
     expense={props.expenses}
     onSubmit={(expenses)=>{
      props.dispatch(startEditExpense(props.expenses.id, expenses));
      props.history.push('/');
     }}
     />
       <button onClick={() => {
        props.dispatch(startRemoveExpense({ id: props.expenses.id }));
        props.history.push('/');
      }}>Remove</button>
 
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

