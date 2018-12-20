module.exports = function(app) {
    const Post = require('../models/Post');
    
    app.get('/', (req,res) => {
        Post.find().then((posts) => {
            res.render('home',{posts:posts});
        }).catch((err) => {
            console.log(err);
        })
    })
    
    app.get('/posts', (req,res) => {
        res.redirect('/');
    })
    
    app.get('/posts/new', (req,res) => {
        res.render('posts-new');
    })
}