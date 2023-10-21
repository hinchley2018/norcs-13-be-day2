//Entry point for the entire api
console.log("load index.js")

//grab the package
const express = require("express")

//initialize app, constructors - function that is a constructor
//Creates instance of an app
const app = express()

//Load config
const PORT = 3000
//Connect to db

//Dependencies (chat-gpt, middleware, etc)

//Start the api

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


//Listen for requests to the api
app.listen(PORT, () => {
    console.log("app listening on port", PORT)
})
