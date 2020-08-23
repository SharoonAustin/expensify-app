import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('testing remove expense',()=>{
  const action=removeExpense({ id:'123abc' })
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id:'123abc'
  })
})

test("testing edit expense",()=>{
  const editExpenses=editExpense('123abc',{amount:500})
  expect(editExpenses).toEqual({
    type:'EDIT_EXPENSE',
    id:'123abc',
    updates:{
      amount:500
    }
  })
})

test("testing add expense",()=>{
  const expenseData={
    description:'Rent',
    amount:1095,
    createdAt:1000,
    note:'This was last month rent'
  }
  const action=addExpense(expenseData)
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      ...expenseData,
      id:expect.any(String)
    }
  })
})


test("testing add expense with default paramters",()=>{
  const expenseData={
    description:'',
    amount:0,
    createdAt:0,
    note:''
  }
  const action=addExpense(expenseData)
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      ...expenseData,
      id:expect.any(String)
    }
  })
})