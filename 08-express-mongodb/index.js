const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");

require('dotenv').config();
const mongoUrl = process.env.MONGO_URL;
const MongoUtil = require('./mongoUtil')

// go to mongodb atlas - go to "connect" - change to connect to application - make sure driver is set to "Node.js" and copy the link 
// put the url in the .env file 

// create an instance of an Express app
let app = express();

// set the view engine
app.set('view engine', 'hbs')

// static folder
app.use(express.static('public'))

// setup wax-on 
wax.on(hbs.handlebars)
wax.setLayoutPath('./views/layouts')


//enable forms
app.use(express.urlencoded({
    'extended':false
}))

async function main() {
    let db = await MongoUtil.connect(mongoUrl, 'tgc11_movie_app')

    // mongoDB is connected and live
    app.get('/')

}

main()

app.listen(3000, () => {
    console.log("Server has started")
})