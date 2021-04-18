var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var dotenv = require('dotenv');
var ejs = require('ejs');
var fileUpload = require('express-fileupload');
var app = express();
// local routes
app.use(fileUpload());
dotenv.config();

app.use(express.static(__dirname + '/public'));
var admin = require('./routes/admin');
var post = require('./routes/post');
var blog = require('./routes/blog');
var login = require('./routes/login');
var about = require('./routes/about');
var register = require('./routes/register');
var edit = require('./routes/edit');
var deleteUser = require('./routes/delete-user');
var deleteBlog = require('./routes/delete-blog');
var userDetail = require('./routes/user-detail');
var singlePost = require('./routes/single-post');
var gallery = require('./routes/gallery');
var index = require('./routes/index');
app.set('view engine', 'ejs')

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, "view"));
app.use('/', index);   
app.use('/', login);   
app.use('/', about);   
app.use('/', register); 
app.use('/', gallery); 
app.use('/',singlePost);
app.use('/',admin);
app.use('/',post);
app.use('/',blog);
app.use('/',userDetail);
app.use('/',edit);
app.use('/',deleteUser);
app.use('/',deleteBlog);
app.listen(process.env.SERVER_PORT);