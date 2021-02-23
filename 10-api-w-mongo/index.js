// SETUP BEGINS
const express = require("express");
const cors = require("cors")
const MongoUtil = require('./mongoUtil');
const ObjectId = require("mongodb").ObjectId

// this is to link the .env as a operating system variable 
require("dotenv").config()
const mongoUrl=process.env.MONGO_URL;

let app = express();


// !! Enable forms processing
app.use(
  express.urlencoded({
    extended: false
  })
);


// enable processing JSON data
// IMPT LINE
app.use(express.json());

// ! Enable CORS 
app.use(cors())

// SETUP END

async function main() {
    let db = await MongoUtil.connect(mongoUrl, 'tgc11_food_sighting');

    //after this point, the database is available 

    app.get('/free_food_sighting', (req,res) => {
        
    })


    // to post a new entry to a new database using express,
    // use app.post
    app.post('/free_food_sighting', async (req,res) => {
        let description = req.body.description;
        let food = req.body.food
        let datetime = req.body.datetime || new Date()
    })
}


main();



// START SERVER
app.listen(3000, () => {
  console.log("Server has started");
});