const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    section_name: { type: String, required: true },
    section_text: { type: String, required: true },
    video_ids: [{ type: Schema.Types.ObjectId, ref: "Video" }],
    quiz_ids: [{ type: Schema.Types.ObjectId, ref: "Quiz" }],
});

module.exports = mongoose.model('Section', sectionSchema)