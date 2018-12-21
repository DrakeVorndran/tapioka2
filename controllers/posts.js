module.exports = function(app) {
    const Post = require('../models/Post');
    //index
    app.get('/', (req, res) => {
        Post.find().then((posts) => {
            res.render('home',{posts: posts});
        }).catch((err) => {
            console.log(err);
        })
    })

    app.get('/posts', (req, res) => {
        res.redirect('/');
    })



    //new
    app.get('/posts/new', (req, res) => {
        res.render('posts-new');
    })

    //show
    app.get('/posts/:id', (req, res) => {
        Post.findById(req.params.id).then((post) => {
            res.render('posts-view', {post: post})
        }).catch((err) => {
            console.log(err);
        })
    })

    //edit
    app.get('/posts/:id/edit', (req, res) => {
        Post.findById(req.params.id).then((post) => {
            res.render('posts-edit', {post: post})
        }).catch((err) => {
            console.log(err);
        })
    })

    //post
    app.post('/posts', (req, res) => {
        Post.create(req.body).then((post) => {
            console.log(post)
            res.redirect('/')
        }).catch((err) => {
            console.log(err)
        })
    })

    //put
    app.put('/posts/:id', (req, res) => {
        Post.findByIdAndUpdate(req.params.id, req.body).then((post) => {
            console.log(post);
            res.redirect(`/posts/${post._id}`)
        }).catch((err) => {
            console.log(err);
        })
    })

    //destroy
    app.delete('/posts/:id', (req, res) => {
        Post.findByIdAndRemove(req.params.id).then((post) => {
            res.redirect('/')

        });
    })
}