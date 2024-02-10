const express = require("express");
const logins = express.Router();


logins.get("/", (req, res) => {
    res.render("index");
})

logins.post("/", (req, res) => {
    console.log(req.body.username);
})




module.exports = logins;



