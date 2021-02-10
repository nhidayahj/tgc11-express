const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
const mongoClient = require('mongodb').MongoClient

// go to mongodb atlas - go to "connect" - change to connect to application - make sure driver is set to "Node.js" and copy the link 
const mongoUrl = "mongodb+srv://root:rotiprata123@cluster0.ioosm.mongodb.net/?retryWrites=true&w=majority";

let app = express();

async function connect() {
    // create a client 
    let client = await mongoClient.connect(mongoUrl, {
        useUnifiedTopology: true
    })
    // use a database
    let db = client.db('tgc11_movie_app')
    console.log("db is running")
}

connect()


app.listen(3000, () => {
    console.log("Server has started")
})