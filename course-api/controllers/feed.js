const { validationResult } = require('express-validator');


const Post = require('../models/post');

exports.getPosts = (req,res,next) => {
    res.status(200).json({
        posts: [
            {
                _id: '1',
                title: 'First Post',
                content: 'This is the first post!',
                imageUrl: 'images/sdasd.jpg',
                creator: {
                    namge: 'Nektarios'
                }
        }]
    });
}

exports.createPost = (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(422).json({message: 'Validation failed, entered data is incorrect.'});
    }

    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const content = req.body.content;
    const post = new Post(
        title,
        imageUrl,
        content,
        1,
    )

    console.log(post);

    post.save()
        .then(([result]) => {
            console.log(result);

            res.status(201).json({
                message: 'Post created successfully',
                post
            })
        })


}