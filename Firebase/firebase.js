import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAe7p8vUMtIIo51KMaalaVTGful76wWwXQ",
    authDomain: "expensify-a17c9.firebaseapp.com",
    databaseURL: "https://expensify-a17c9.firebaseio.com",
    projectId: "expensify-a17c9",
    storageBucket: "expensify-a17c9.appspot.com",
    messagingSenderId: "9842404852",
    appId: "1:9842404852:web:0242f7af3ab8a58c6f5da1"
  };

firebase.initializeApp(firebaseConfig);

const database=firebase.database()


export {firebase,database as default};
//child_removed(Event under on function)
/* database.ref('expenses').on('child_removed',(snapshot)=>{
    console.log(snapshot.key, snapshot.val());
})

//child_changed
database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.key, snapshot.val());
})

//child_added
database.ref('expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key, snapshot.val())
}) */

/* database.ref('expenses')
  .on('value',(snapshot)=>{
     const expenses=[];
     snapshot.forEach((childSnapshot)=>{
        expenses.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
        })
     })
     console.log(expenses);
    })


database.ref('expenses/-MG3pYu2vfYSk6pGqq0K').update({
    amount:"300$"
}) */


 /*  database.ref('expenses')
  .once('value')
  .then((snapshot)=>{
     const expenses=[];
     snapshot.forEach((childSnapshot)=>{
        expenses.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
        })
     })
     console.log(expenses);
  })
  .catch((e)=>{}) */

/* database.ref('expenses').push({
    description:'Flour',
    note:'',
    amount:'200$',
    createdAt:'12/06/2020'
    })

database.ref('expenses').push({
    description:'Maggi',
    note:'',
    amount:'5$',
    createdAt:'12/06/2020'
})
database.ref('expenses').push({
    description:'Cold Drink',
    note:'',
    amount:'8$',
    createdAt:'12/06/2020'
}) */

/* database.ref('notes/-MG3kXZhCCBxQxXH2Vi5').remove()
 */
/* database.ref('notes').push({
    title:'To do',
    body:'Go for a run!'
}) */

/*    
database.ref('notes').set(notes)

 */
  // Initialize Firebase
   /* database.ref().set({
      name:'Sharoon Austin',
      age:24,
      stressLevel:8,
      job:{
          title:'Software Engineer',
          company:'Google'
      },
      isSingle:false,
      location:{
          city:'Kota',
          country:'India'
      }
  })
 */
 /*  //Remove 
  database.ref('isSingle')
    .remove()
    .then(()=>{
        console.log("Data is deleted now!")
    }).catch((e)=>{
        console.log("Data cannot be deleted");
    }) */

/* //Update the data
database.ref().update({
  stressLevel:10,
  'job/company':'Amazon'  
}) */

//Read the data
/* database.ref().once('value')
    .then((snapshot)=>{
        console.log(snapshot.val());
    })
    .catch((e)=>console.log('Error fetching data',e))
 */
//Read the data multiple time
/* database.ref().on('value',(snapshot)=>{
    console.log(snapshot.val());
})

setTimeout(()=>{
    database.ref('age').set(18)
},3000)

setTimeout(()=>{
    database.ref('age').off()
},5000)

setTimeout(()=>{
    database.ref('age').set(68)
},8000)

 */