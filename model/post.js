const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    autor: String,
    title: String,
    body: String
})

const postModel = mongoose.model('Post', postSchema)