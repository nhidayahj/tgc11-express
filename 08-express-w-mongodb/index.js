// add the required dependencies
const express = require("express")
const hbs = require("hbs")
const wax = require("wax-on")


// create an instance of express application
let app = express()


// setup the view engine 
app.set('view engine', 'hbs')

//create the static folder - which holds all static files 
app.use(express.static('public'))

// setup the wax
wax.on(hbs.handlebars)
wax.setLayoutPath('./views/layouts')

// enable forms 
app.use(express.urlencoded({
    extended:false
}));

// start the server 
app.listen(3000, ()=>{
    console.log("server has started")
})