var User = require('../models/user');
var Post = require('../models/post');
var Reward = require('../models/reward');

var async = require('async');
const { body, validationResult } = require("express-validator");

// Display list of all rewards
exports.getAllRewards = function (req, res) {
    Reward.find({}, 'reward_type reward_quantity post_id')
        .populate('post_id')
        .exec(function (err, allRewards) {
            if (err) { return next(err); }
            //Successful, so render
            res.status(201).json({
                success: true,
                allRewards
            });
        });
}

// Display detail info for a specific reward.
exports.getRewardById = function (req, res) {
    async.parallel({
        reward: function (callback) {
            Reward.findById(req.params.id)
                .populate('provider_user')
                .populate('acceptant_user')
                .exec(callback);
        },
        post: function (callback) {
            Post.find({ 'reward': req.params.id })
                .exec(callback);
        },
    }, function (err, results) {
        if (err) { return next(err); }
        if (results.reward == null) { // No results.
            var err = new Error('reward not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.status(201).json({
            success: true,
            results
        });
    });
};

// Display reward create form on GET.
exports.createReward_g = function (req, res) {
    res.send('NOT IMPLEMENTED: Reward create GET');
};

// Handle reward create on POST.
exports.createReward_p = function (req, res, next) {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a reward object with escaped and trimmed data.
    var reward = new reward(
        {
            provider_user: req.body.provider_user,
            reward_type: req.body.reward_type,
            reward_quantity: req.body.reward_quantity,
            post_id: req.body.post_id,
            post_state: req.body.post_state,
            acceptant_user: req.body.acceptant_user,
            add_date: req.body.add_date
        });

    if (!errors.isEmpty()) {
        // There are errors. Render form again with sanitized values/error messages.
    }
    else {
        // Data from form is valid. Save reward.
        reward.save(function (err) {
            if (err) { return next(err); }
            // Successful - redirect to new reward record.
            res.status(201).json({
                success: true,
                reward
            });
        });
    }
};

// Display reward delete form on GET.
exports.deleteReward_g = function (req, res) {
    res.send('NOT IMPLEMENTED: Reward delete GET');
};

// Handle reward delete on POST.
exports.deleteReward_p = function (req, res) {
    res.send('NOT IMPLEMENTED: reward delete POST');
};

// Display reward update form on GET.
exports.updateReward_g = function (req, res) {
    res.send('NOT IMPLEMENTED: reward update GET');
};

// Handle reward update on POST.
exports.updateReward_p = function (req, res) {
    res.send('NOT IMPLEMENTED: reward update POST');
};


// Display User owe other
exports.userOweOther = function (req, res, next) {

    Reward.find({ 'provider_user': req.params.id }, 'reward_type reward_quantity post_id')
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

    Reward.find({ 'acceptant_user': req.params.id }, 'reward_type reward_quantity post_id')
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