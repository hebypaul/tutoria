const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please add a course Name"]
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('course', courseSchema)