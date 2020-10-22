var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
let SALT = 10;

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    username: {type: String, required: true, maxlength: 100},
    email: {type: String, required: true, maxlength: 100},
    password: {type: String, required: true, maxlength: 100},
  }
);

// Hashing the password
UserSchema.pre('save', function(next) {
  var user = this;
  if(user.isModified('password')){
    bcrypt.genSalt(SALT, function(err, salt){
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash){
        if(err) return next(err);
        user.password = hash;
        next();
      })
    })
  } else {
    next()
  }
});

//Comparing passwords
UserSchema.methods.comparePassword = function(candidate, check){
  bcrypt.compare(candidate, this.password, function(err, isMatch){
    if (err) return check(err)
    check(null, isMatch)
  })
};


// Virtual for user's URL
UserSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

//Export model
module.exports = mongoose.model('User', UserSchema);