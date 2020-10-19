var Post = require('../models/post');
var User = require('../models/user');
var Reward = require('../models/reward');
var async = require('async');

const { body, validationResult } = require("express-validator");

// Display record counts.
exports.recordCounts = function (req, res) {

    async.parallel({
        reward_count: function (callback) {
            Reward.countDocuments({}, callback);
        },
        post_count: function (callback) {
            Post.countDocuments({}, callback);
        },
        post_available_count: function (callback) {
            Post.countDocuments({ post_state: 'Initial' }, callback);
        },
        user_count: function (callback) {
            User.countDocuments({}, callback);
        },
    }, function (err, results) {
        res.status(201).json({
            success: true,
            results
        });
    });
};

// Display list of all Posts.
exports.getAllPosts = function (req, res, next) {

    Post.find({ post_state: 'Initial' })
        .populate('reward')
        .sort([['post_date', 'ascending']])
        .exec(function (err, allPosts) {
            if (err) { return next(err); }
            // Successful, so response.
            res.status(201).json({
                success: true,
                allPosts
            });
        })
};

// Display detail page for a specific post.
exports.getPostById = function (req, res, next) {
    Post.findById(req.params.id)
        .populate('publisher_user')
        .populate('reward')
        .populate('acceptant_user')
        .exec(function (err, post) {
            if (err) { return next(err); }
            if (post == null) { // No results.
                var err = new Error('Post not found');
                err.status = 404;
                return next(err);
            }
            // Successful, so render.
            res.status(201).json({
                success: true,
                post
            });
        })
};

// Display Post create form on GET.
exports.createPost_g = function (req, res) {
    res.send('NOT IMPLEMENTED: post create GET');
};

// Handle Post create on POST.
exports.createPost_p = function (req, res, next) {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create User object with escaped and trimmed data
    var post = new Post(
        {
            publisher_user: req.body.publisher_user,
            quest_type: req.body.quest_type,
            quest_discription: req.body.quest_discription,
            reward: req.body.reward,
            post_date: req.body.post_date,
            due_date: req.body.due_date,
            acceptant_user: req.body.acceptant_user,
            post_state: req.body.post_state,
        }
    );

    if (!errors.isEmpty()) {
        // There are errors. Render form again with sanitized values/errors messages.
    }
    else {
        // Data from form is valid.
        // Save Post.
        user.save(function (err) {
            if (err) { return next(err); }
            // Successful - redirect to new user record.          
            res.status(201).json({
                success: true,
                post
            });
        });
    }
};

// Display Post delete form on GET.
exports.deletePost_g = function (req, res) {
    res.send('NOT IMPLEMENTED: Post delete GET');
};

// Handle Post delete on POST.
exports.deletePost_p = function (req, res) {
    res.send('NOT IMPLEMENTED: Post delete POST');
};

// Display Post update form on GET.
exports.updatePost_g = function (req, res) {
    res.send('NOT IMPLEMENTED: Post update GET');
};

// Handle Post update on POST.
exports.updatePost_p = function (req, res) {
    res.send('NOT IMPLEMENTED: Post update POST');
};


// Display list of all Posts about a specific Post.
exports.getAllMyPosts = function (req, res, next) {

    Post.find({ publisher_user: req.body.publisher_user })
        .sort([['post_date', 'ascending']])
        .exec(function (err, allPosts) {
            if (err) { return next(err); }
            // Successful, so response.
            res.status(201).json({
                success: true,
                allPosts
            });
        })
};



