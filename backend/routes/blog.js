const router = require('express').Router();
let Blog = require('../models/blog.model');

router.route('/').get((req, res) =>{
    Blog.find()
        .then(blogposts => res.json(blogposts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
const title = req.body.title;
const body = req.body.body;
const category = req.body.category;
const date = Date.parse(req.body.date);

const newBlogpost = new Blog({
    title,
    body,
    category,
    date,
});

newBlogpost.save()
.then(() => res.json('New post added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;