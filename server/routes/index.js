var express = require('express');
var router = express.Router();

//Require all controllers.
var post_controller = require('../controllers/postController');
var reward_controller = require('../controllers/rewardController');
var user_controller = require('../controllers/userController');

// Front page - Site Home Page
router.get('/', post_controller.index);


// GET request for creating User. Note this must come before route for id (i.e. display user).
router.get('/signup', user_controller.user_create_g);

// POST request for creating User.
router.post('/signup', user_controller.user_create_p);

// Go to page for publish an event.
router.get('/post/publish', post_controller.post_create_g);

//POST request for creating Post.
router.post('/post/create', post_controller.post_create_p);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
