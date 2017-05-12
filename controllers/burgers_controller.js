var express = require("express");
//these may be redundant, will test if I have more time tomorrow
var db = require("../models");
var Burger = require("../models/burger.js")
////////////////////////////////////////////
var router = express.Router();

//findAll burgers and post them to their appropriate place in the window
router.get("/", function(req, res) {
  db.Burger.findAll({
  }).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

//add a burger
router.post("/burger/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function() {
    res.redirect("/");
  });
});

//devour a burger
router.post("/burger/eat/:id", function(req, res) {
  db.Burger.update({
    devoured: true
  }, {
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;