const express = require('express')
const router = express.Router()

//handles rendering page
router.get("/login", (req, res) => {
    res.send(`
    <body>
    <form action="/auth/login" method="POST" >
        <input placeholder='username'/>
        <input type='submit'/>
    </form>
    </body>`)
})

//handles data being sent / submitted
router.post("/login", (req, res) => {
    //route params
    console.log("post /login route params", req.params)
    //logging the request i got
    console.log("post /login query params", req.query)
    //will be empty on GET, but useful for POST requests
    console.log("post /login body", req.body)
    res.send("you are logged in")
})

//make other files be able to see me
module.exports = router;