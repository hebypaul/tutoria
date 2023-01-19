
const express = require('express')
const { getCourses, setCourse, updateCourse, deleteCourse } = require('../controllers/courseController')
const router = express.Router()

router.route('/').get(getCourses).post(setCourse)

router.route('/:id').put(updateCourse).delete(deleteCourse)

module.exports =router