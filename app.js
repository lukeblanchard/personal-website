//author: Lucas Blanchard 
//email: blanchlu@oregonstate.edu

var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public')); 

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/', function(req, res){
    var context = {}; 
    res.render('home', context); 
}); 

app.get('/about', function(req, res){
    var context = {}; 
    res.render('about'); 
}); 

app.get('/projects', function(req, res){
    var context = {}; 
    res.render('projects', {layout: 'projectsLayout.handlebars'}); 
}); 

app.get('/contact', function(req, res){
    var context = {}; 
    res.render('contact', {layout: 'contactLayout.handlebars'}); 
}); 

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
