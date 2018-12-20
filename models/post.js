const mongoose = require('mongoose');

const Post = mongoose.model('post',{
    title: String,
    body: String
});

module.exports = Post;