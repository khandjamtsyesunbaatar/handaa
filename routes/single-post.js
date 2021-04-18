var express = require('express');
const connection = require('../connection/connection');
var router = express.Router();
router.get('/single-post/:id', function(request, response) {
    var id = request.params.id
    connection.query('SELECT * FROM blogPost WHERE id = ?', [id], function(error,results,fields){
        if(!error){
            response.render("single-post",{blog:results[0]})
        }else{
            console.log(error)
        }
    })});
module.exports = router;