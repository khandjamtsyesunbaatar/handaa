var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
router.get('/delete-user/:id', function(request, response) {
    var id = request.params.id;
    connection.query('DELETE FROM accounts WHERE id = ?',[id], function(error, results,fields){
        if(!error){
            response.redirect("/admin");
        }else{
            console.log(error)
        }
    })
});
router.delete('/delete-user/:id', function(request, response) {
    var id = request.params.id;
    connection.query('DELETE FROM accounts WHERE id = ?',[id], function(error, results,fields){
        if(!error){
            response.end();
        }else{
            console.log(error)
        }
    })
});
module.exports = router;