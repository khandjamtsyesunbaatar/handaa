var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
router.get('/post', function(request, response) {
	
	if (request.session.loggedin) {
	response.render('blog/post');
	} else {
		response.render("login",{error:"please login"});
	}
});
router.post('/post', function(request, response) {
	var title = request.body.blogTitle;
	var desTitle = request.body.blogDesciption;
	var description = request.body.desc;
	var Photo = request.files.postPhoto;
	var photoName = Photo.name;
	var date = Date();
	var category = request.body.category;
	var user = request.session.username;
	
		connection.query('Insert into blogPost (title,desTitle,blogPhoto,description,date,user,category) values(?, ?, ?, ?, ?,? ,?)', [title,desTitle,photoName,description,date,user, category], function(error, results, fields) {
			if(error){
				console.log(error)
			}else
				Photo.mv('./public/photos/' + photoName);
				response.redirect('/'); 
				response.end();
			}	
		);
})

module.exports = router;