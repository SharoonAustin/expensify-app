import expenseReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state',()=>{
    const state=expenseReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
})

test('Should test remove expense by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ])
})


test('Should test remove expense where id does not exist',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:-1
    }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual([
        expenses[0],
        expenses[1],
        expenses[2]
    ])
})


test("Should add an expense",()=>{
    const action={
        type:'ADD_EXPENSES',
        expenses:{
            id:'5',
            description:'Petrol',
            createdAt:0,
            note:'',
            amount:200,
        }
    }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual(expenses);
})


test("Should edit an expense",()=>{
    const amount=12000;
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{amount}
        }
    const state=expenseReducer(expenses,action)
    expect(state[1].amount).toEqual(amount);
})


test("Should not edit an expense",()=>{
    const amount=12000;
    const action={
        type:'EDIT_EXPENSE',
        id:-1,
        updates:{amount}
        }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual(expenses);
})