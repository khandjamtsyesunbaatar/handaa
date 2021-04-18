var express = require('express');
const connection = require('../connection/connection');
var router = express.Router();
router.get('/user-detail/:id', function(request, response) {
    var id = request.params.id
    connection.query('SELECT * FROM accounts WHERE id = ?', [id], function(error,results,fields){
        if(!error){
            response.render("user-detail",{user:results[0]})
        }else{
            console.log(error)
        }
    })});
module.exports = router;