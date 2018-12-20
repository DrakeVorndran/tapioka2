//declerations 

const express = require('express')
const app = express()
const exphbs = require("express-handlebars");

//middleware

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');




//routes

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})