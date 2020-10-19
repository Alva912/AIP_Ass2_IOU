var User = require('../models/user');
var Post = require('../models/post');
var Reward = require('../models/reward');

var async = require('async');
const { body, validationResult } = require("express-validator");

// Display list of all Users.
exports.getAllUsers = function (req, res, next) {

    User.find()
        .sort([['user_name', 'ascending']])
        .exec(function (err, allUsers) {
            if (err) { return next(err); }
            // Successful, so render.
            res.status(201).json({
                success: true,
                allUsers
            });
        })
};

// Display information about a specific User.
exports.getUserById = function (req, res, next) {

    async.parallel({
        user: function (callback) {
            User.findById(req.params.id)
                .exec(callback)
        },
        user_owe_other: function(callback) {
            Reward.find({'provider_user':req.params.id }, 'reward_type reward_quantity post_id')
                .exec(callback)
        },
        other_owe_user: function(callback) {
            Reward.find({'acceptant_user':req.params.id}, 'reward_type reward_quantity post_id')
                .exec(callback)
        },
    }, function (err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.user == null) { // No results.
            var err = new Error('User not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.status(201).json({
            success: true,
            user: results.user,
            user_owe_other: results.user_owe_other,
            other_owe_user: results.other_owe_user
        });
    });
};

// Display User create form on GET.
exports.createUser_g = function (req, res, next) {
    res.send('NOT IMPLEMENTED: user create GET');
};

// Handle User create on POST.
exports.createUser_p = function (req, res, next) {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create User object with escaped and trimmed data
    var user = new User(
        {
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password,
        }
    );

    if (!errors.isEmpty()) {
        // There are errors. Render form again with sanitized values/errors messages.
    }
    else {
        // Data from form is valid.
        // Save User.
        user.save(function (err) {
            if (err) { return next(err); }
            // Successful - redirect to new user record.          
            res.status(201).json({
                success: true,
                user
            });
        });
    }
};

// Display User delete form on GET.
exports.deleteUser_g = function(req, res) {
    res.send('NOT IMPLEMENTED: user delete GET');
};

// Handle user delete on POST.
exports.deleteUser_p = function(req, res) {
    res.send('NOT IMPLEMENTED: user delete POST');
};


// Display User update form on GET.
exports.updateUser_g = function (req, res, next) {

    User.findById(req.params.id, function (err, user) {
        if (err) { return next(err); }
        if (user == null) { // No results.
            var err = new Error('User not found');
            err.status = 404;
            return next(err);
        }
        // Success. redirect to information form updatea page

        res.send(" should redirect to a information update form ");
    });
};

// Handle User update on POST.
exports.updateUser_p = function (req, res, next) {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create User object data (and the old id!)
    var user = new User(
        {
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password,
            _id: req.params.id
        }
    );

    if (!errors.isEmpty()) {
        // There are errors. Render the form again with sanitized values and error messages.
        return;
    }
    else {
        // Data from form is valid. Update the record.
        User.findByIdAndUpdate(req.params.id, user, {}, function (err, theUser) {
            if (err) { return next(err); }
            // Successful - redirect to genre detail page.
            res.status(201).json({
                success: true,
                user
            });
        });
    }
}

  


