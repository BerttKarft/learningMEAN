var mongoose = require('mongoose'); // Brings Mongoose onto Application
var Schema = mongoose.Schema; // grabs Schema so we can Make Schemas


// Creates a Schema (Outline of an Object) that is ready to be instantiated.
var userSchema = new Schema({
	name: String,
	race: String,
	eyeColor: String,
	meta: {
		age: Number,
		mentalAge: Number,
	},
	created_at: Date,
	updated_at: Date
});



//how to create a custom method
userSchema.methods.name = function() {
	//logic
}


//create a model to use the Schema
var User = mongoose.model('User', userSchema);

//exports User for Node application
module.exports = User;












var mongoose.connect('mongodb://localhost/test'); // connects to TEST database which is a default database
//Put entire Document into a "models" folder then make this a .js file and call it for functions



//In either "app.js" 
//Import User Model
var User = require('./app/models/user.js'); 


// create a new user
var chris = new User({
	name: 'Chris',
	race: 'Caucasian',
	eyeColor: 'Brown'
});

//Call a method here
chris.name(function(err, dependentVariables)) {
	if (err) {
		console.log(err);
	};
	console.log(dependentVariables);
};


//call a save function for 'User'/'Schema Object'
chris.save(fucntion(err){
	if (err) console.log(err);
	console.log('User saved');
})