var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
router.get('/register', function(request, response) {
	response.render('user/register');
});
router.post('/register', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	var email = request.body.email;
	var photo = request.files.profilePhoto;
	var fileName = photo.name;
	photo.mv('./public/avatars/' + fileName);
	if (username && password && email) {
		connection.query('Insert into accounts (username,password,email,profilePicture) values(?, ?, ?, ?)', [username, password,email,fileName], function(error, results, fields) {
			if(error){
				console.log('bolohgu bnaa sda')
			}else
				request.session.loggedin = true;
				response.redirect('/admin'); 
				response.end();
			}	
		);}
})

module.exports = router;