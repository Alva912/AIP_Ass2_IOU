var mongoose = require('mongoose');
const { DateTime } = require("luxon");

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    publisher_user: {type: Schema.Types.ObjectId, ref: 'User', require: true},
    quest_type: {type: String, require: true, enum: ['Cleaning', 'Snacking'], default: 'Cleaning'},
    quest_description: {type: String, required: true, maxlength: 300, minlength: 2},
    reward: {type: Schema.Types.ObjectId, ref: 'Reward', require: true},
    post_date: {type: Date, default: Date.now},
    due_date: {type: Date, default: Date.now},
    acceptant_user: {type: Schema.Types.ObjectId, ref: 'User'},
    post_state: {type: String, require: true, enum: ['Initial', 'Accepted', 'Completed', 'Finished', 'Expired'], default: 'Initial'},
  }
);

// Virtual for post's URL.
PostSchema
.virtual('url')
.get(function () {
  return '/post/' + this._id;
});

// Virtual for post's post_date.
PostSchema
.virtual('post_date_formatted')
.get(function () {
return DateTime.fromJSDate(this.post_date).toLocaleString(DateTime.DATE_MED);
});

// Virtual for post's due_date.
PostSchema
.virtual('due_date_formatted')
.get(function () {
return DateTime.fromJSDate(this.due_date).toLocaleString(DateTime.DATE_MED);
});

//Export model
module.exports = mongoose.model('Post', PostSchema);