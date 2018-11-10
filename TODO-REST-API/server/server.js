var express=require('express')
var bodyParser=require('body-parser')

var {mongoose}=require('./db/mongoose')
var {Todo}=require('./models/todo')
var {User}=require('./models/user')


var app=express()
app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
var todo= new Todo({
	text:req.body.text
})
todo.save().then((doc)=>{
	res.send(doc)
},(e)=>{
	res.status(400).send(e)
})

})






app.listen(3000,()=>{
	console.log('Started on port 3000')
})
module.exports={
	app
}








// var newTodo= new Todo({
// 	text:' Take the dog out ',
// 	completed:true,
// 	completedAt:123
// })
// newTodo.save().then((doc)=>{
// console.log('Saved todo',doc)
// },(e)=>{
// 	console.log('Unable to save', (e))
// })



// var newUser = new User({
// 	email:'me@example.com'
// })
// newUser.save().then((data)=>{
// 	console.log('Saved user',data)
// },(e)=>{
// 	console.log('Unabe to create user',e)
// })