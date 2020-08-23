import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters' 
import moment from 'moment'

test("start date",()=>{
const action=setStartDate(moment(0));
expect(action).toEqual({
    type:'SET_START_DATE',
    startDate:moment(0)
})
})


test("End date",()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
})
})

test("Text Filter",()=>{
    const action=setTextFilter('abcd');
    expect(action).toEqual({
     type: 'SET_TEXT_FILTER',
     text:'abcd'
    })
})

test("Text Filter Default",()=>{
    const action=setTextFilter('');
    expect(action).toEqual({
     type: 'SET_TEXT_FILTER',
     text:''
    })
})

test("testing sort by date",()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})

test("testing sort by Amount",()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})
