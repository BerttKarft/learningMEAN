var express = require('express') //Gets express for application
var app = express() //instance of express



//Routing
app.method(PATH, HANDLER)

/*Routing Methods supported
app.get 	app.post 	app.put 	app.head 	app.delete
app.options 	app.race 	app.copy 	app.lock 	app.mkcol
app.move 	app.purge 	app.propfind 	app.proppatch 	app.unlock
app.report 	app.mkactivity 	app.checkout 	app.merge 	app.m-search
app.notify 	app.subscribe 	app.unsubscribe 	app.patch 	app.seach
app.connect
*/

//Paths

//Matches to base root
app.get('/', function (req, res){
	res.send('HAHHAAHAHAHAHAH')
})

//Matches with user, then goes to next handler
//Next() tells it to go to the next part of the program
app.get('user', function(req, res, next){
	res.send('user')
	next()
})


//Using static files
app.use(express.static('public'))

//Creating a Router
var express = require('express')
var router = express.Router() //instantiates Router

//Route home page
router.get('/', function(req, res) {
	res.send('Welcome Home')
})

//Export the Router
module.exports = router



