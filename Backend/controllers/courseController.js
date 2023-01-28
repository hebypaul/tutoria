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
    if(!req.body.course_name ){
        res.status(400)
        throw new Error('Please add a course name field')
    }
    const course = await Course.create({
        course_name: req.body.course_name
    })
    res.status(200).json(course)
})

// @desc Update course
// @route PUT /api/courses/:id
// @access Private

const updateCourse = asyncHandler( async (req, res)=>{
    const course = await Course.findById(req.params.id)

    if(!course){
        res.status(400)
        throw new Error('course not found')
    }
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body,{ new:true,})

    res.status(200).json(updatedCourse)

})
// @desc Delete course
// @route DELETE /api/goals/:id
// @access Private

const deleteCourse = asyncHandler( async (req, res)=>{
   const course = await Course.findById(req.params.id)

   if(!course){
    res.status(400)
    throw new Error("Course not found")
   }

   await course.remove()

   res.status(200).json({id:req.params.id})
})



module.exports ={
    getCourses,
    setCourse,
    updateCourse,
    deleteCourse
}