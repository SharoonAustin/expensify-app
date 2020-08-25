const express=require('express');
const path=require('path')
const app=express();
const publicPath=path.join(__dirname,'..','public')

app.use(express.static(publicPath));

app.get('*',(request,response)=>{
    response.sendFile(path.join(publicPath,'index.html'))
})

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Server is up and running")
})