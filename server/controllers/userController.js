var User = require('../models/user');

const { body, validationResult } = require("express-validator");

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















// Handle User create on POST.
exports.user_create_post = [

    // Validate and sanitize fields.

    body('user_name').trim().isLength({ min: 1 }).escape().withMessage('User name must be specified.')
        .isAlphanumeric().withMessage('User name has non-alphanumeric characters.'),
    body('email').trim().isLength({ min: 1 }).escape().withMessage('Email must be specified.'),
    body('password').trim().isLength({ min: 1 }).escape().withMessage('Email must be specified.'),

    // Process request after validation and sanitization.
    (req, res, next) => {

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
                res.redirect(user.url);
            });
        }
    }
];


