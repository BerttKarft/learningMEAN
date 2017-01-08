var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var food = new Schema({
	name: String,
	type: String,
	quantity: Number,
	price: Number,
	calories: Number,
	meta: {
		fats: Number,
		carbs: Number,
		protein: Number,
	},
	created_at: Date,
	updated_at: Date
});



var Food = mongoose.model('Food', food);


module.exports = Food;