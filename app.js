//declerations 

const express = require('express')
const app = express()
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//middleware

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');
app.use(express.static(__dirname + '/public'));
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/contractor-project');




//routes

posts = require('./controllers/posts.js')(app)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});