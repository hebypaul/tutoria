const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quizSchema = new Schema({
    quiz_title: { type: String, required: true },
    quiz_question: [{ type: String, required: true }],
    quiz_options: [{ type: String, required: true }],
    quiz_answer: { type: String, required: true },
});

module.exports= mongoose.model('Quiz', quizSchema);