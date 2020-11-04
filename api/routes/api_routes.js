const express = require("express")
const router = express.Router()
const db = require("../models")
const userController = require("../controllers/UserController")

//get all todos
router.get("/all", (req, res) => {
    db.userDetails.findAll()
    .then(user => res.send(user))
    .catch(err => {
        console.log(err)
        throw err
    })
})

//testing routes
//Create user route
router.post("/user/create", userController.create);

//ALl users route
router.get("/user/all", userController.findAll)

//find all users with filter route
router.get("/user/findall", userController.findAll_wfilter)

module.exports = router