//Entry point for the entire api

//grab the package
const express = require("express")

//initialize app, constructors - function that is a constructor
//Creates instance of an app
const app = express()

//Load config
require('dotenv').config()
//read my port from an env variable
const PORT = process.env.PORT
//Connect to db
const DB = process.env.DB
console.log("connecting to db", DB)

//Dependencies (chat-gpt, middleware, etc)

//Middleware - handles stuff for your requests

//The slides don't have this, but basically tells node how to handle different data formats in requests
const bodyParser = require('body-parser');
// parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(bodyParser.urlencoded({ extended: true }));

//Here are the endpoints that clients (devices) can make requests to
//registering an endpoint to handle request and response
//registered only called when a client makes a http request
//the path/route is /
app.get("/", (req, res) => {

    //the response is going to send a mesage with this text
    res.send("hello from /")
})

//registered an endpoint /jokes to handle GET requests from clients
app.get("/jokes", (req, res) => {

    //the response is going to send a mesage with this text
    res.send("Why don't skeletons like to fight? They have no guts!")
})

//handle get requests with a route param
//Often used when you have the idea of parent-child relationships in data
//eg /places/:id/reviews or /research/:animal /reservations/:storeId /menu/:timeOfDay
app.get("/animals/:animal", (req, res) => {
     //route params
     console.log("GET /animals route params", req.params)
     //logging the request i got
     console.log("GET /animals query params", req.query)
     //will be empty on GET, but useful for POST requests
     console.log("GET /animals body", req.body)
    res.send(req.params.animal)
})

//this function prefixes routes with the first arg
app.use("/tacos", require('./controllers/tacos'))

//GET request to monsters => return a list of monsters
app.get('/monsters', (req, res) => {
    let monsters = [
        {
          "name": "Vampire",
          "description": "A blood-sucking immortal creature with fangs and a fear of sunlight.",
          "powers": ["Immortality", "Superhuman strength", "Hypnotic charm"],
          "weaknesses": ["Sunlight", "Wooden stakes", "Garlic"]
        },
        {
          "name": "Werewolf",
          "description": "A human who transforms into a wolf-like creature during a full moon.",
          "powers": ["Enhanced strength", "Heightened senses", "Regeneration"],
          "weaknesses": ["Full moon", "Silver bullets", "Wolfsbane"]
        },
        {
          "name": "Zombie",
          "description": "A reanimated corpse with a hunger for human flesh.",
          "powers": ["Undead resilience", "Infectious bite"],
          "weaknesses": ["Headshot", "Decay"]
        },
        {
          "name": "Witch",
          "description": "A spellcasting practitioner of dark magic with a pointy hat and broomstick.",
          "powers": ["Spellcasting", "Potion brewing", "Flight"],
          "weaknesses": ["Water", "Salt circles", "Silver"]
        },
        {
          "name": "Mummy",
          "description": "A preserved corpse wrapped in bandages, cursed to guard ancient tombs.",
          "powers": ["Immortality", "Bandage manipulation"],
          "weaknesses": ["Unwrapping", "Fire", "Holy artifacts"]
        }
    ]

    //how to get query that has power in it?
    console.log("GET /monster query params", req.query)

    //filter monsters by their power if that param exists
    if(req.query.power){
        let p = capitalizeFirstLetter(req.query.power) 
        console.log(p)
        let filteredMonsters = monsters.filter(m => m.powers.includes( p))
        res.send(filteredMonsters)
    }
    else{
        
        res.send(monsters)
    }

    
})

//sending html as response
app.get('/colors/:color', (req, res) => {
    res.send(`
    <body>
        <h1>Hello</h1>
    </body
    `)
})

//for the /auth route use this controller
//prefix these routes with /auth
app.use("/auth", require("./controllers/auth"))

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//handle any pages not found
//if you don't ,app will crash for users that spell a page wrong
app.get("*", (req, res) => {
    console.log(req.params)
    res.send("Page not found")
})

//Start the api
//Listen for requests to the api
app.listen(PORT, () => {
    console.log("app listening on port", PORT)
})
