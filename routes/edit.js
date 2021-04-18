var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');

router.get('/edit/user/:id', function(request, response) {
    if (request.session.loggedin) {
    var id = request.params.id;
    connection.query('SELECT * FROM accounts WHERE id = ?',[id], function(error, results,fields){
        if(!error){
            response.render("user/edit",{user:results[0]});
        }else{
            console.log(error)
        }
    })
} else {
    response.render("login",{error:"please login"});
}
});
router.post('/edit/user/:id', function(request, response){
    var username = request.body.username;
	var password = request.body.password;
	var email = request.body.email;
    var Photo = request.files.profileEdit;
	var photoName = Photo.name;
    var id = request.params.id;
    connection.query('UPDATE accounts SET username =?, password=?, email=?, profilePicture=? WHERE id = ?',[username,password,email,photoName,id], function(error, results,fields){
        if(!error){
            Photo.mv('./public/avatars/' + photoName);
            request.session.loggedin = true;
            response.redirect("/admin");
        }else{
            console.log(error)
        }
    })
});
router.get('/edit/blog/:id', function(request, response) {
    if (request.session.loggedin) {
    var id = request.params.id;
    connection.query('SELECT * FROM blogPost WHERE id = ?',[id], function(error, results,fields){
        if(!error){
            response.render("blog/edit-blog",{user:results[0]});
        }else{
            console.log(error)
        }
    })
}else {
    response.render("login",{error:"please login"});
}
});
router.post('/edit/blog/:id', function(request, response){
    var title = request.body.blogTitle;
	var desTitle = request.body.blogDes;
	var Photo = request.files.editPhoto;
    var description = request.body.desc;
	var photoName = Photo.name;
    var id = request.params.id;
    connection.query('UPDATE blogPost SET title =?, desTitle=?, blogPhoto=?,description=? WHERE id = ?',[title,desTitle,photoName,description,id], function(error, results,fields){
        if(!error){
            Photo.mv('./public/photos/' + photoName);
            request.session.loggedin = true;
            response.redirect("/blog");
        }else{
            console.log(error)
        }
    })
});
module.exports = router;