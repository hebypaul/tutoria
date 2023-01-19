// @desc Get Courses
// @route GET /api/courses
// @access Public

const getCourses = (req, res)=>{
    res.status(200).json({"message": "Get Courses"})
}

// @desc Set Course
// @route POST /api/Courses
// @access Private

const setCourse = (req, res)=>{
    res.status(200).json({"message": "Set Course"})
}

// @desc Update course
// @route PUT /api/courses/:id
// @access Private

const updateCourse = (req, res)=>{
    res.status(200).json({"message":`Update coures ${req.params.id}`})
}
// @desc Delete course
// @route DELETE /api/goals/:id
// @access Private

const deleteCourse = (req, res)=>{
    res.status(200).json({"message":`Delete Course ${req.params.id}`})
}



module.exports ={
    getCourses,
    setCourse,
    updateCourse,
    deleteCourse
}