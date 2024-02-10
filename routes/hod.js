const express = require("express");
const hod = express.Router();

hod.get("/", (req, res) => {
    res.render("hodHome");
})

hod.get("/new", (req, res) => {
    res.render("hodReq");
})



module.exports = hod;



