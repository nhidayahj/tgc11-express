const express = require('express');
const hbs = require('hbs')
const wax = require('wax-on')
const axios = require('axios')

let app = express();
app.set('view engine', 'hbs'); // tell express to use hbs as the view engine
app.use(express.static('public')) // tell express where to find static files (css, json,  geojson, image files, js)

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts')

// !! Enable forms processing
app.use(express.urlencoded({
    extended: false
}))

// API Movie URL
const baseURL = "https://ckx-movies-api.herokuapp.com";

// SETUP ENDS HERE


// SETUP of Routes begin below
//1. beginning of root route

// Movie API to display all movies 
app.get('/movies', async (req,res) => {
    let response = await axios.get(baseURL + "/movies");
    //display the output
    //console.log(response.data)
    //res.send(response.data)
    res.render('show_movies.hbs', {
        all_movies:response.data
    })
})

app.get('/movies/create', (req,res) => {
    res.render('add_movies.hbs');    
})


app.post('/movies/create', async (req,res)=>{
    // console.log(req.body);
    // res.send("New Movie added")
    let title = req.body.title;
    let plot = req.body.plot;
    let response = await axios.post(baseURL + '/movie/create', {
        'title': title,
        'plot': plot
    })
    res.redirect('/movies')
})


app.listen(3000, ()=>{
    console.log("Server has started")
})