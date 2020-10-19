var express = require('express');
var router = express.Router();

//Require all controllers.
var post_controller = require('../controllers/postController');
var reward_controller = require('../controllers/rewardController');
var user_controller = require('../controllers/userController');

//GET front page - Site Home Page
router.get('/', post_controller.recordCounts);

// REWARD ROUTES //
// GET request for creating a reward. NOTE This must come before routes that display reward (uses id).
router.get('/reward/create', reward_controller.createReward_g);

// POST request for creating reward.
router.post('/reward/create', reward_controller.createReward_p);

// GET request to delete reward.
router.get('/reward/:id/delete', reward_controller.deleteReward_g);

// POST request to delete reward.
router.post('/reward/:id/delete', reward_controller.deleteReward_p);

// GET request to update reward.
router.get('/reward/:id/update', reward_controller.updateReward_g);

// POST request to update reward.
router.post('/reward/:id/update', reward_controller.updateReward_p);

// GET request for one reward.
router.get('/reward/:id', reward_controller.getRewardById);

// GET request for list of all reward.
router.get('/rewards', reward_controller.getAllRewards);

// USER ROUTES //
// GET request for creating user. NOTE This must come before route for id (i.e. display user).
router.get('/user/create', user_controller.createUser_g);

// POST request for creating user.
router.post('/user/create', user_controller.createUser_p);

// GET request to delete user.
router.get('/user/:id/delete', user_controller.deleteUser_g);

// POST request to delete user
router.post('/user/:id/delete', user_controller.deleteUser_p);

// GET request to update user.
router.get('/user/:id/update', user_controller.updateUser_g);

// POST request to update user.
router.post('/user/:id/update', user_controller.updateUser_p);

// GET request for one user.
router.get('/user/:id', user_controller.getUserById);

// GET request for list of all users.
router.get('/users', user_controller.getAllUsers);


// POST ROUTES //
// GET request for creating a post. NOTE This must come before route that displays post (uses id).
router.get('/post/create', post_controller.createPost_g);

// POST request for creating post.
router.post('/post/create', post_controller.createPost_p);

// GET request to delete post.
router.get('/post/:id/delete', post_controller.deletePost_g);

// POST request to delete post.
router.post('/post/:id/delete', post_controller.deletePost_p);

// GET request to update post.
router.get('/post/:id/update', post_controller.updatePost_g);

// POST request to update post.
router.post('/post/:id/update', post_controller.updatePost_p);

// GET request for one post.
router.get('/post/:id', post_controller.getPostById);

// GET request for list of all post.
router.get('/posts', post_controller.getAllPosts);



module.exports = router;
