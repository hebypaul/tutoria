const asyncHandler = require('express-async-handler')

const Course = require('../models/courseModel')
// @desc Get Courses
// @route GET /api/courses
// @access Public

const getCourses = asyncHandler(async (req, res)=>{
    const courses = await Course.find()
    res.status(200).json(courses)
})

// @desc Set Course
// @route POST /api/Courses
// @access Private


const setCourse =asyncHandler( async (req, res)=>{
    if(!req.body.name){
        res.status(400)
        throw new Error('Please add a name field')
    }
    const course = await Course.create({
        name: req.body.name
    })
    res.status(200).json(course)
})

// @desc Update course
// @route PUT /api/courses/:id
// @access Private

const updateCourse = asyncHandler( async (req, res)=>{
    res.status(200).json({"message":`Update coures ${req.params.id}`})
})
// @desc Delete course
// @route DELETE /api/goals/:id
// @access Private

const deleteCourse = asyncHandler( async (req, res)=>{
    res.status(200).json({"message":`Delete Course ${req.params.id}`})
})



module.exports ={
    getCourses,
    setCourse,
    updateCourse,
    deleteCourse
}