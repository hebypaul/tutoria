const asyncHandler = require('express-async-handler')

const Course = require('../models/courseModel')
// @desc Get Courses
// @route GET /api/courses
// @access Public

const getCourses = asyncHandler(async (req, res)=>{
    const courses = await Course.find()
    res.status(200).json(courses)
})

// @desc Get Courses
// @route GET /api/courses/all
// @access Public

const getAllCourses = asyncHandler(async (req, res)=>{
    const courses = await Course.find()
    res.status(200).json(courses)
})

const getCoursesById = asyncHandler(async (req, res)=>{
    id = req.params.id;
    const course = await Course.findById(id)
    res.status(200).json({ data: course });
})
// @desc Set Course
// @route POST /api/Courses/addcourse
// @access Private


const setCourse =asyncHandler( async (req, res)=>{
    if(!req.body.course_name ){
        res.status(400)
        throw new Error('Please add a course name field')
    }
    const course = await Course.create(req.body)
    res.status(200).json({data : course})
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
    getAllCourses,
    getCoursesById,
    setCourse,
    updateCourse,
    deleteCourse
}