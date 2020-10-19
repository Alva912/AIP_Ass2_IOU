var mongoose = require('mongoose');
const { schema } = require('./user');

var Schema = mongoose.Schema;

var RewardSchema = new Schema(
  {
    provider_user: {type: Schema.Types.ObjectId, ref: 'User', require: true},
    reward_type: {type: String, require: true, enum: ['Coffees', 'Chocolates', 'Mints', 'Pizzas', 'Cupcakes'], default: 'Coffees'},
    reward_quantity: {type: Number, min: 1, max: 100, require: true},
    post_id: {type: Schema.Types.ObjectId, ref: 'Post', require: true},
    post_state: {type: String, require: true, enum: ['Initial', 'Accepted', 'Completed', 'Finished', 'Expired'], default: 'Initial'},
    acceptant_user: {type: Schema.Types.ObjectId, ref: 'User'},
    add_date: {type: Date, default: Date.now},
  }
);

// Virtual for reward's URL
RewardSchema
.virtual('url')
.get(function () {
  return '/reward/' + this._id;
});

//Export model
module.exports = mongoose.model('Reward', RewardSchema);