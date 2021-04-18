var express = require('express');
const connection = require('../connection/connection');
var router = express.Router();
router.get('/about', function(request, response) {
	connection.query('SELECT * FROM accounts', function(err,results,field){
		if(!err){
			response.render("about", { users: results});
		}else{
			console.log(err);
		}
	});
});
module.exports = router;