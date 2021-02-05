const express = require('express')
const hbs = require('hbs')
const wax = require('wax-on')


let app = express()


app.get('/', (req,res) => {
    res.send("Booking for Japanese Sakura Restaurant")

})

//one route to display the form
app.get('/bookings/add', (req,res)=>{
    res.render('add_booking.hbs')
})

// one route to process the form 
app.post('/bookings/add', (req,res) => {
    //display what is submitted
    console.log(req.body);
    res.send("data received")
})




// START SERVER
app.listen(3000, () => {
    console.log("Server has started")
})