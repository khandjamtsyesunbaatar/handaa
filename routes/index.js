var express = require('express');
const connection = require('../connection/connection');
var router = express.Router();
router.get('/', function(request, response) {
		connection.query('SELECT * FROM blogPost', function(error, blogs, fields) {
			connection.query('SELECT * FROM accounts', function(error, results, fields) {
			response.render("index", {users:blogs,accounts:results});
		});
	})
});
module.exports = router;
