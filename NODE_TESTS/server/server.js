const express= require('express')

var app= express()

app.get('/',(req,res)=>{
res.status(404).send({
    error:'Page not found',
    name: 'Todo App v1.0'
})
})


app.get('/users',(req,res)=>{

    res.status(200).send([{
        name:'Rohan',
        age:25
    },{
        name:'jen',
        age:20
    }])

})

app.listen(3000,()=>{
    console.log('server is online')
})

module.exports.app=app