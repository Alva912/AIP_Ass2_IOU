var User = require('../models/user');
var Post = require('../models/post');
var Reward = require('../models/reward');

var async = require('async');
const { body, validationResult } = require("express-validator");

// Display User owe other
exports.userOweOther = function (req, res, next) {

    Reward.find({'provider_user':req.params.id }, 'reward_type reward_quantity post_id')
        .sort([['add_date', 'ascending']])
        .exec(function (err, allRewards) {
            if (err) { return next(err); }
            // Successful, so response.
            res.status(201).json({
                success: true,
                allRewards
            });
        })
};

// Display Other owe User
exports.otherOweUser = function (req, res, next) {

    Reward.find({'acceptant_user':req.params.id }, 'reward_type reward_quantity post_id')
        .sort([['add_date', 'ascending']])
        .exec(function (err, allRewards) {
            if (err) { return next(err); }
            // Successful, so response.
            res.status(201).json({
                success: true,
                allRewards
            });
        })
};