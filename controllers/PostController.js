const Post = require('../models/Post');


//Get All posts
module.exports.getPosts = async (req, res) => {
    try {
        //Find posts
        const posts = await Post.find();
        //return posts to client
        res.status(200).json(posts);
    } catch (error) {
        //return error to client
        console.log({ message: error.message });
    }
};

//Create One post
module.exports.addPost = async (req, res) => {
    try {
        // Create the post
        newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            category: req.body.category
        });
        //retur posts to client
        res.status(201).json(newPost);
    } catch (error) {
        //return error to client
        res.status(500).json({ message: error.message });
    }

};

//Get One post
module.exports.getPost = async (req, res) => {
    try {
        // find the post
        const post = await Post.findById(req.params.id);
        if (post == null) {
            // Return message to client
            return res.status(404).json({ message: "Cannot find post" });
        }
        // Return the post to client
        res.status(200).json(post);
    } catch (error) {
        // Return error to client
        res.status(500).json({ message: error.message });
    }
}

//Update One post
module.exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    title: req.body.title,
                    content: req.body.content,
                    category: req.body.category
                }
            });
        if (updatedPost == null) {
            return res.status(404).json({ message: "Post not founded" });
        }
        res.status(201).json({ data: updatedPost, message: 'Post updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete One post
module.exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne({ _id: req.params.id });
        if (deletedPost == null) {
            return res.status(404).json({ message: "Post not founded" });
        }
        res.status(201).json({ data: deletedPost, message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}