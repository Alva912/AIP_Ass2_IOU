var Post = require('../models/post');

const { body, validationResult } = require("express-validator");

// Display list of all Posts.
exports.getAllPosts = function (req, res, next) {

    Post.find({ post_state: 'Initial' })
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


// Go to page for publish an event.
exports.post_create_g = function (req, res, next) {

};

// Handle Post create on POST.
exports.post_create_p = function (req, res, next) {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create User object with escaped and trimmed data
    var post = new Post(
        {
            publisher_user: req.body.publisher_user,
            quest_type: req.body.quest_type,
            quest_discription: req.body.quest_discription,
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






