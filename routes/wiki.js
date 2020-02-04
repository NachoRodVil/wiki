const express = require( 'express' );
const router = express.Router();
var db = require('../models/db.js');
var Page = require("../models/page.js"); 
var User = require("../models/users.js")


router.get('/', function(req, res, next) {
    res.redirect("/")
  });
  router.get('/add', function(req, res) {
    res.render('addpage');
    
  });
  router.post('/', function(req, res,next) {
    console.log(req.body)
      Page.create({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status,

    })
    .then(savedPage => {
      res.redirect(savedPage.route); // route virtual FTW
    })
    .catch(next);
  
  });


  router.get('/:urlTitle', function (req, res, next) {
    Page.findOne({ 
      where: { 
        urlTitle: req.params.urlTitle 
      } 
    })
    .then(function(page){
      res.render("wikipage", { page: page });
    })
    .catch(next);
  });
  module.exports=router