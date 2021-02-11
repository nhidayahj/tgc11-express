// add the required dependencies
const express = require("express")
const hbs = require("hbs")
const wax = require("wax-on")

const MongoUtil = require('./mongoUtil');
const ObjectId = require("mongodb").ObjectId

// this is to link the .env as a operating system variable 
require("dotenv").config()
const mongoUrl=process.env.MONGO_URL;

// create an instance of express application
let app = express()


// setup the view engine 
app.set('view engine', 'hbs')

//create the static folder - which holds all static files 
app.use(express.static('public'))

// setup the wax
wax.on(hbs.handlebars)
wax.setLayoutPath('./views/layouts')

// enable forms 
app.use(express.urlencoded({
    extended:false
}));


async function main() {
    let db = await MongoUtil.connect(mongoUrl,"tgc11_recipe_app");

    // mongodb is connected and live

    // -- set up the route ---

    //show the form
    app.get('/ingredients/create', (req,res) => {
        res.render("ingredients/create")
    })


    // processes the form to create/add the ingredient
    app.post('/ingredients/create', async (req,res) => {
        await db.collection('ingredients').insertOne({
            'name':req.body.ingredientItem
        }) 

        // display all the ingredient added back to us
        res.redirect("/ingredients")
    }) 

    // url to display all the added ingredients from the db to us 
    app.get('/ingredients', async (req,res) => {
        let all_ingredients = await db.collection('ingredients')
        .find({})  // find all the ingredient w/o any criteria
        .toArray() // convert to Array

        res.render('ingredients/all', {
            'ingredientList': all_ingredients
        })
    })


    // delete ingredient from the system 
    app.get('/ingredients/:ingredient_id/delete', async (req,res) => {
        let id = req.params.ingredient_id
        let all_ingredients = await db.collection('ingredients').findOne({
            '_id':ObjectId(id)
        })
        res.render('ingredients/delete', {
            // the key 'ingredient' is the key to be identfied in the delete.hbs file
            // the value 'all_ingredients' is the variable initailize above 
            'ingredient':all_ingredients

        });
    })

    // process what is sent via the form
    app.post('/ingredients/:ingredient_id/delete', async (req,res)=>{
        await db.collection('ingredients').remove({
            '_id':ObjectId(req.params.ingredient_id)
        })
        res.redirect('/ingredients')
    })

    // update 
    app.get('/ingredients/:ingredient_id/update', async (req,res) => {
        // we retrieved the ingredient information
        let id = req.params.ingredient_id;
        let all_ingredients = await db.collection('ingredients').findOne({
            '_id':ObjectId(id)
        }) 
        res.render('ingredients/update', {
            'ingredient':all_ingredients
        })
    })

    // process the update form 
    app.post('/ingredients/:ingredient_id/update', async (req,res)=>{
        let new_ingredient_name = req.body.ingredientName;
        let id=req.params.ingredient_id;
        await db.collection('ingredients').updateOne({
            '_id':ObjectId(id)
        }, {
            '$set':{
                'name':new_ingredient_name
            }
        })
        res.redirect('/ingredients')
    })


}


// call the main() function
main()



// start the server 
app.listen(3000, ()=>{
    console.log("server has started")
})