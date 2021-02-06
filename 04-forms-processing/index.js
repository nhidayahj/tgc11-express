const express = require('express')
const hbs = require('hbs')
const wax = require('wax-on')


let app = express()

app.set('view engine', 'hbs');
app.use(express.static('public'))
wax.on(hbs.handlebars)
wax.setLayoutPath('./views/layouts')

//to use form processing in Express
// must include this block of code!!! to enable forms
app.use(express.urlencoded({
    extended:false
}))

//setup the route
app.get('/add-food', (req,res) => {
   res.render('add_food.hbs')
})

//since the form method = "POST"
app.post('/add-food', (req,res) => {
   //this displays the data that was entered in the textbox
   //req.body returns an OBJECT
   console.log(req.body)
   


   res.send("Data received")
})

app.listen(3000, ()=>{
    console.log("Server has started")
})