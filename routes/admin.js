var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');

router.get('/admin', function(request, response) {
	if (request.session.loggedin) {
		connection.query('SELECT * FROM accounts', function(error, results, fields) {
			response.render("admin", {users: results}); 		
		});
	} else {
		response.render("login",{error:"please login"});
	}
});
module.exports = router;