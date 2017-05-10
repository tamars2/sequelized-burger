//dependencies
var express = require('express');
var router = express.Router();
var models = require('../models');
var burger = require('../models/burger.js');

var sequelizeConnection = models.sequelize;

sequelizeConnection.sync();

router.get('/', function(req,res) {
  res.redirect('/index');
});

router.get('/index', function (req,res) {
  console.log(JSON.req);
  models.burgers.findAll({}).then(function(data){
    var cheeseBurgers = {burger: data};
    res.render('/index', cheeseBurgers);
  });
});

router.post('/burger/create', function(req,res) {
  models.burgers.create({
    burger_name: req.body.burger_name,
    devoured: false
  }
).then(function(){
  res.redirect('/index');
  });
});

router.post('/burger/eat/:id', function(req,res) {
  models.burgers.findOne({where: {id: req.params.id}}).then(function(eaten){
    eaten.update({
      devoured: true,
    }).then(function() {
      res.redirect('/index');
    });
  });
});

module.exports = router;





// // index page
// router.get('/', function (req, res) {
//   burger.selectAll(function(data) {
//     var cheeseBurgers = { burgers: data };
//     res.render('index', cheeseBurgers);
//   });
// });
// // create a new burger
// router.post('/burger/create', function (req, res) {
//   burger.insertOne(req.body.burger_name, function() {
//     res.redirect('/');
//   });
// });
// // devour a burger
// router.post('/burger/eat/:id', function (req, res) {
//   burger.updateOne(req.params.id, function() {
//     res.redirect('/');
//   });
// });
// module.exports = router;