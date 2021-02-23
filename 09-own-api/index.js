// SETUP BEGINS
const express = require("express");
const cors = require("cors")

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
app.get('/api/greetings', (req,res) => {
    // If you send back a JavaScript object, Express will automatically change
    // it into JSON for you!
    res.send({
        'message':"hello world",
        'name':"Heydi"
    })
})


app.post('/api/sayshello', (req,res) => {
    let fname = req.body.firstName;
    let lname = req.body.lastName;
    console.log("Hello" + fname + ' ' + lname)
    res.send({
        'message':"Hello There " +fname + ' ' + lname
    })
})




// START SERVER
app.listen(3000, () => {
  console.log("Server has started");
});