var models = require('../models');
const express = require( 'express' );
const bodyParser = require('body-parser'); 
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');


// ...
router.use('/wiki', wikiRouter);
router.use('/user', userRouter);
module.exports = router;


