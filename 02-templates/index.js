const express = require('express')
const hbs = require('hbs')

// setup Express
let app = express()

//setup view engine 
//this tells Express that we are using hbs (handlebars) as our template engine that will contain
// all our template/static files
app.set('view engine', 'hbs');

// tells Express where to look for the files
app.use(express.static('public'))

// Add the Routes 
app.get('/', function(req,res) {
    // extension .hbs is the template file that Express will look for 
    res.render('index.hbs')
})

// create another hbs file 
app.get('/about-us', (req,res)=>{
    res.render("welcome.hbs");
})

app.listen(3000, () => {
    console.log("Server has started")
})