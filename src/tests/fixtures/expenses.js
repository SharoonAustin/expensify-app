import moment from 'moment'
export default [{
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