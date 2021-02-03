const express = require('express')

let app = express()

//add routes here
//Routes are mappings of a URL to a function 
// maps a URL to a JavaScript function
// such that when the URL is accessed
// on the server, the function will execute
app.get('/', function(request,response) {
    // we use the response object to send 
    // the data back to the client (e.g. browser)
    response.send("<h1>Hello from Express</h1>")
})


app.listen(3000, ()=>{
    console.log("Server has started")
})