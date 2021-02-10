const mongoClient = require('mongodb').MongoClient;

async function connect(mongoUrl, dbName) {
    // create a client 
    let client = await mongoClient.connect(mongoUrl, {
        useUnifiedTopology: true
    })
    // use a database
    let db = client.db(dbName)
    console.log("db is running")
    return db;
}

// we are exporting the connect function 
module.exports = {
    connect
}