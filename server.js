const express = require('express')
const app = express() // creates a instance of server

app.use(express.static('public'))

// routes
// app.get() has 2 arguments
// 1. the route: like /ali, /about, /hi
// 2. the function that will run when we get the request
console.log(__dirname)
app.get('/',(request, response)=>{
    console.log('Request sent to Ali Route')
    response.sendFile(__dirname + '/views/student.html')
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/views/about-me.html')
})

// Exercise 1:
// 1. Create a about-me.html file in your views folder
// 2. add the technologies you learned in this class inside of the file
// 3. make new app.get() route on /about
// 4. if a get request is sent to /about it should send back the about-me.html file



app.listen(3000,() => {
    console.log('Application running')
})