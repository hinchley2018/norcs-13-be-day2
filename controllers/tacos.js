//Can't just call app.get must use router.get
const express = require('express')
const router = express.Router()

//query params more used for filtering or data that is not parent child
// /tacos?protein=beef&hasClianto=false
//another route called taco to handle get requests
router.get("/", (req, res) => {
    //route params
    console.log("GET /tacos route params", req.params)
    //logging the request i got
    console.log("GET /tacos query params", req.query)
    //will be empty on GET, but useful for POST requests
    console.log("GET /tacos body", req.body)
    let tacos =  [
        {
        "name": "Classic Beef Taco",
        "ingredients": {
            "shell": "corn tortilla",
            "filling": "seasoned ground beef",
            "toppings": ["lettuce", "cheese", "salsa", "sour cream"],
            "extras": ["guacamole", "jalapeños"]
        },
        "price": 2.99,
        "calories": 350
        },
        {
        "name": "Grilled Chicken Taco",
        "ingredients": {
            "shell": "flour tortilla",
            "filling": "grilled chicken",
            "toppings": ["lettuce", "tomato", "onions", "cilantro"],
            "extras": ["salsa verde", "sour cream"]
        },
        "price": 3.49,
        "calories": 300
        },
        {
        "name": "Vegetarian Taco",
        "ingredients": {
            "shell": "whole wheat tortilla",
            "filling": "spiced black beans",
            "toppings": ["avocado", "lettuce", "tomato", "cheese"],
            "extras": ["salsa", "lime wedges"]
        },
        "price": 2.79,
        "calories": 280
        },
        {
        "name": "Fish Taco",
        "ingredients": {
            "shell": "corn tortilla",
            "filling": "fried cod fish",
            "toppings": ["cabbage slaw", "pico de gallo", "chipotle mayo"],
            "extras": ["lime wedges"]
        },
        "price": 4.29,
        "calories": 400
        },
        {
        "name": "Shrimp Taco",
        "ingredients": {
            "shell": "flour tortilla",
            "filling": "grilled shrimp",
            "toppings": ["cabbage slaw", "avocado", "cilantro", "sour cream"],
            "extras": ["chipotle mayo", "lime wedges"]
        },
        "price": 4.99,
        "calories": 320
        }
    ]
      
    res.send(tacos)
})

//export to other files
module.exports = router