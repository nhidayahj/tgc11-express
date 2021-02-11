const mongoClient = require("mongodb").MongoClient

async function connect(mongoUrl, dbName) {
    // create a mongodb client
    let client = await mongoClient.connect(mongoUrl, {
        useUnifiedTopology: true
    });

    //use a database
    let db = client.db(dbName);
    console.log("database connected")
    return db;
}

// export the connect function 
module.exports = {
    connect
}