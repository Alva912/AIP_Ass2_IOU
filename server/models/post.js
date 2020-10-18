var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    publisher_user: {type: Schema.Types.ObjectId, ref: 'User', require: true},
    quest_type: {type: String, require: true, enum: ['Cleaning', 'Snacking'], default: 'Cleaning'},
    quest_discription: {type: String, required: true, maxlength: 300, minlength: 2},
    post_date: {type: Date, default: Date.now},
    due_date: {type: Date, default: Date.now},
    acceptant_user: {type: Schema.Types.ObjectId, ref: 'User'},
    post_state: {type: String, require: true, enum: ['Initial', 'Accepted', 'Completed', 'Finished', 'Expired'], default: 'Initial'},
  }
);

// Virtual for post's URL
PostSchema
.virtual('url')
.get(function () {
  return '/post/' + this._id;
});

//Export model
module.exports = mongoose.model('Post', PostSchema);