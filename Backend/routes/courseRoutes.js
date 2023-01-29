
const express = require('express')
const { getCourses, setCourse, updateCourse, deleteCourse, getAllCourses, getCoursesById } = require('../controllers/courseController')
const router = express.Router()

router.get('/',getCourses)

//Gettting all the courses
router.get('/all', getAllCourses)

//Get course by ID 
router.get('/:id', getCoursesById)

router.post('/addcourse',setCourse)

router.route('/:id').put(updateCourse).delete(deleteCourse)

module.exports =router