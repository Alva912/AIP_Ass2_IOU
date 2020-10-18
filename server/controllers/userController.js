var User = require('../models/user');

const { body,validationResult } = require("express-validator");

// Display detail page for a specific Author.
exports.author_detail = function (req, res, next) {

    async.parallel({
        author: function (callback) {
            Author.findById(req.params.id)
                .exec(callback)
        },
        authors_books: function (callback) {
            Book.find({ 'author': req.params.id }, 'title summary')
                .exec(callback)
        },
    }, function (err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.author == null) { // No results.
            var err = new Error('Author not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('author_detail', { title: 'Author Detail', author: results.author, author_books: results.authors_books });
    });

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


