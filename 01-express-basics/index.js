const express = require("express");

let app = express();

//add routes here
//Routes are mappings of a URL to a function
// maps a URL to a JavaScript function
// such that when the URL is accessed
// on the server, the function will execute

// this is the root route
app.get("/", function (request, response) {
  // we use the response object to send
  // the data back to the client (e.g. browser)
  response.send("<h1>Hello from Express</h1>");
});

// edit the end of the url with "/about-us" and the page will change
app.get("/about-us", (req, res) => {
  res.send("<h2>About Us Page</h2>");
});

// make another page "contact us"
app.get("/contact-us", (req, res) => {
  res.send("<h2>Contact Us Page</h2>");
});

// include a parameter to our URL
// at the end of the contact-us URL, include a fullname value
app.get("/contact-us/:fullname", (req, res) => {
  let name = req.params.fullname;
  res.send("Your full name is " + name);
});

// include multiple parameters
//app.get('/sum/:num1,:num2)', (req,res)
// app.get('/sum/:num1/:num2', (req,res) => {
//     let num1 = parseInt(req.params.num1);
//     let num2 = parseInt(req.params.num2);
//     let sum = num1 + num2
//     res.send("The sum of 2 numbers are: " + sum);
// })

app.get("/sum/:num1,:num2", (req, res) => {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  let sum = num1 + num2;
  //res.send MUST be a string
  res.send(sum.toString());
});

// ALL ROUTES must be added BEFORE the app.listen

app.listen(3000, () => {
  console.log("Server has started");
});
