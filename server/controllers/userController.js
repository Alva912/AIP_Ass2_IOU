var User = require('../models/user');
var Post = require('../models/post');
var Reward = require('../models/reward');

var async = require('async');
const { body, validationResult } = require("express-validator");
const reward = require('../models/reward');
const user = require('../models/user');

// Display User create form on GET.
exports.user_create_g = function (req, res, next) {

};

// Handle User create on POST.
exports.user_create_p = function (req, res, next) {
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
        userOweOther: function(callback) {
            Reward.find({'provider_user':req.params.id },'user owe other')
                .exec(callback)
        },
        otherOweUser: function(callback) {
            Reward.find({'acceptant_user':req.params.id}, 'other owe user')
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
            userOweOther: results.userOweOther,
            otherOweUser: results.otherOweUser
        });
    });
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

  


