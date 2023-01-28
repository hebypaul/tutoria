const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    section_name: { type: String, required: true },
    section_text: { type: String, required: true },
    video_ids: [{ type: Schema.Types.ObjectId, ref: "Video" }],
    quiz_ids: [{ type: Schema.Types.ObjectId, ref: "Quiz" }],
});


const courseSchema = mongoose.Schema({
    course_name:{
        type: String,
        required:[true,"Please add a course Name"]
    },
    course_details: { type: String, required: true },
    author: { type: String, required: true },
    level: { type: String, required: true },
    sections: [sectionSchema],
    category: { type: String, required: true },
    course_img: { type: String, default: "" },
    author_img: { type: String, default: "" },
},{
    timestamps:true,
})

module.exports = mongoose.model('course', courseSchema)