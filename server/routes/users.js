var express = require('express');
var router = express.Router();

//Require our controllers.
var user_controllor = require('../controllers/userController');

/* GET users listing. */
router.get('/', user_controllor.getAllUsers);

router.get('/cool/', function(req, res, next) {
  res.send('The ass2 is so hard!');
});


module.exports = router;
