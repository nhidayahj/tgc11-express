const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");

require('dotenv').config();
const mongoUrl = process.env.MONGO_URL;
const MongoUtil = require('./mongoUtil')

// go to mongodb atlas - go to "connect" - change to connect to application - make sure driver is set to "Node.js" and copy the link 
// put the url in the .env file 

let app = express();

async function main() {
    let db = await MongoUtil.connect(mongoUrl, 'tgc11_movie_app')

    // mongoDB is connected and live

    
}

main()

app.listen(3000, () => {
    console.log("Server has started")
})