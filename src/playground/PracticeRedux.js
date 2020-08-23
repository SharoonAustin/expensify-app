import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addStudent=({name="Anonymous",age=0,gender="unknown"})=>({
    type:'ADD_STUDENT',
    details:{
        id:uuid(),
        name:name,
        age:age,
        gender:gender
    }
})

const removeStudent=({id})=>({
    type:'REMOVE_STUDENT',
    id:id
});

const studentManagerDefault=[];

const studentManager=(state=studentManagerDefault,action)=>{
    switch(action.type){
        case 'ADD_STUDENT':
            return [
            ...state,
            action.details
        ];
        case 'REMOVE_STUDENT':
            return state.filter(({ id }) => id != action.id);   
        // return state.filter(({id})=>{id != action.id})
            
    }
}

const store=createStore(studentManager);

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});

const firstStudent=store.dispatch(addStudent({name:'Sharoon',age:24,gender:'male'}));
store.dispatch(addStudent({name:'Rahul',age:33,gender:'male'}));
store.dispatch(removeStudent({id:firstStudent.details.id}))

//console.log(firstStudent)
