import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

const expenses=[{
    id:'1',
    description:'Gum',
    createdAt:0,
    note:'',
    amount:195,
},{
id:'2',
description:'coffee',
createdAt:moment(0).subtract(4, 'days').valueOf(),
note:'',
amount:1095
},{
    id:'3',
    description:'credit card',
    createdAt:moment(0).add(4, 'days').valueOf(),
    note:'',
    amount: 4500   
}]
test('Should filter by text value',()=>{
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2], expenses[1]])
})

test("Should filter by start date",()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2], expenses[0]])
})


test("Should filter by end date",()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(2,'days')
    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0], expenses[1]])
})


test("Should sort by date",()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0], expenses[1]])
})

test("Should sort by amount",()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1], expenses[0]])
})