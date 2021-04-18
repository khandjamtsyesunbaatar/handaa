var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');

router.get('/blog', function(request, response) {
	if (request.session.loggedin) {
		connection.query('SELECT * FROM blogPost', function(error, results, fields) {
			response.render("blog/blog", {users: results}); 		
		});
	} else {
		response.render("login",{error:"please login"});
	}
});
module.exports = router;