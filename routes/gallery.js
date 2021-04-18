var express = require('express');
var router = express.Router();
const connection = require('../connection/connection');
router.get('/gallery', function(request, response) {
	connection.query('SELECT * FROM blogPost', function(error, resulst, fields) {
		response.render("gallery", {gallery:resulst});
	;
})
});
module.exports = router;