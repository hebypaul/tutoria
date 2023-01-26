const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    course_name:{
        type: String,
        required:[true,"Please add a course Name"]
    },
    course_details: String,
    author: String,
    category: String,
    sub_category: String,
    course_img: { type: String, default:""},
    author_img: {type: String, default: ""},
},{
    timestamps:true,
})

module.exports = mongoose.model('course', courseSchema)