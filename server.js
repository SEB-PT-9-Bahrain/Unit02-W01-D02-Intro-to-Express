const express = require('express')
const app = express() // creates a instance of server

// routes
// app.get() has 2 arguments
// 1. the route: like /ali, /about, /hi
// 2. the function that will run when we get the request
app.get('/ali',(request, response)=>{
    console.log('Request sent to Ali Route')
    response.send('<h1>First route success</h1>')
})



app.listen(3000)