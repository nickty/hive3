import mongoose from 'mongoose'

const postMessage =  mongoose.Schema({
    litle: String,
    message: String,
    creator: String,
    createdAt: {
        type: Date, 
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postMessage)

export default PostMessage
