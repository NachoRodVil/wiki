const express = require( 'express' );
const router = express.Router();


router.get('/', function(req, res, next) {
    res.send('funcionó GET /wiki/');
  });
  router.post('/', function(req, res, next) {
    res.send('funcionó POST /wiki/');
  });
  router.get('/add', function(req, res, next) {
    res.send('funcionó GET /wiki/add');
  });