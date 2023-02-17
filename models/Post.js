const express = require('express');
const mongoose = require('mongoose');

//Create a schema for the post model
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    created_At: {
        type: Date,
        default: Date.now().toString()
    },
    updated_At: {
        type: Date,
        default: Date.now().toString()
    }

})
//Create and export the Post model
module.exports = mongoose.model('Post', postSchema);

