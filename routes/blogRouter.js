const { Router } = require('express');
const { getPosts, addPost, getPost, updatePost, deletePost } = require('../controllers/PostController');

const router = Router();


//Get ALL Posts
router.get('/posts', getPosts);

//Get One Post
router.get('/posts/:id', getPost)

//Add One Post
router.post('/posts', addPost);

//Update One Post
router.patch('/posts/:id', updatePost);

//Delete One Post
router.delete('/posts/:id', deletePost)

//Export the router
module.exports = router;