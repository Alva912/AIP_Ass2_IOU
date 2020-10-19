var User = require('../models/user');
var Post = require('../models/post');
var Reward = require('../models/reward');

var async = require('async');
const { body, validationResult } = require("express-validator");

// Ranking as activities that all participate in
exports.userRankingAsActivity = function (req, res, next) {

    Post.find()
};







