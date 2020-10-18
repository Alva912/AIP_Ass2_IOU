#! /usr/bin/env node

console.log('This script populates some test users to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')

var User = require('./models/user');
var Post = require('./models/post');
var Reward = require('./models/reward');



var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = [];
var posts = [];
var rewards = [];

function userCreate(user_name, email, password, cb) {
  userdetail = { user_name: user_name, email: email, password: password }

  var user = new User(userdetail);
  user.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New User: ' + user);
    users.push(user);
    cb(null, user)
  });
}

function createUsers(cb) {
  async.parallel([
    function (callback) {
      userCreate('Lucy', 'Lucy@gmail.com', 'Lucy123',callback);
    },
    function (callback) {
      userCreate('Dylan', 'dylan@gmail.com', 'dylan123',callback);
    },
    function (callback) {
      userCreate('Damon', 'damon@gmail.com', 'damonl123',callback);
    },
  ], cb);
}

async.series([
  createUsers
],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log('FINAL ERR: ' + err);
    }
    else {
      console.log('Users: ' + users);

    }
    // All done, disconnect from database
    mongoose.connection.close();
  });



