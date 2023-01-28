const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    video_url: { type: String, required: true },
    video_title: { type: String, required: true },
});

module.exports = mongoose.model('Video', videoSchema);