import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    // domain: {
    //     type: String,
    //     required:true  
    // },
    author: {
        type: String,
        required: true
    },
    thumbnail: {
        data: Buffer,
        contentType: String,
        required: false
    },
    likes: {
        type: Number
    },
    body: {
        type: String
    }
}, { timestamps: true })

export default mongoose.model("Blog", blogSchema)