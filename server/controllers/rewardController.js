var User = require('../models/user');
var Post = require('../models/post');
var Reward = require('../models/reward');

var async = require('async');
const { body, validationResult } = require("express-validator");

// Display list of all rewards
exports.getAllRewards = function(req, res) {
    res.send('NOT IMPLEMENTED: reward list');
}

// Display detail info for a specific reward.
exports.getRewardById = function(req, res) {
    res.send('NOT IMPLEMENTED: Reward detail: ' + req.params.id);
};

// Display reward create form on GET.
exports.createReward_g = function(req, res) {
    res.send('NOT IMPLEMENTED: Reward create GET');
};

// Handle reward create on POST.
exports.createReward_p = function(req, res) {
    res.send('NOT IMPLEMENTED: Reward create POST');
};

// Display reward delete form on GET.
exports.deleteReward_g = function(req, res) {
    res.send('NOT IMPLEMENTED: Reward delete GET');
};

// Handle reward delete on POST.
exports.deleteReward_p = function(req, res) {
    res.send('NOT IMPLEMENTED: reward delete POST');
};

// Display reward update form on GET.
exports.updateReward_g = function(req, res) {
    res.send('NOT IMPLEMENTED: reward update GET');
};

// Handle reward update on POST.
exports.updateReward_p = function(req, res) {
    res.send('NOT IMPLEMENTED: reward update POST');
};


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