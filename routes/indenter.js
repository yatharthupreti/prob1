const express = require("express");
const indenter = express.Router();


indenter.get("/", (req, res) => {
    res.render("indenterHome");
})

indenter.get("/new", (req, res) => {
    res.render("indenterNew");
})


indenter.get("/view", (req, res) => {
    res.render("indentorView");
})

indenter.get("/ongoing", (req, res) => {
    res.render("indentorOngoing");
})




module.exports = indenter;



