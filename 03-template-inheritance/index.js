const express = require('express')
const hbs = require('hbs')
const wax = require('wax-on')

// setup express
let app = express()

// setup view engine
app.set('view engine', 'hbs')

//setup static folder
app.use(express.static('public'))

//setup wax-on (for template inheritance)
wax.on(hbs.handlebars);
//this tells express where to locate all the basic layout template that is used in ALL our .hbs file 
// to manage code duplication
wax.setLayoutPath('./views/layouts')

// setup routes 
app.get('/', (req,res) => {
    res.render("index.hbs")
})

app.get('/contact-us', (req,res) => {
    res.render('contact-us.hbs')
})

app.get('/about-us', (req,res) => {
    res.render('about-us.hbs')
})

app.listen(3000, ()=>{
    console.log('server has started')
})