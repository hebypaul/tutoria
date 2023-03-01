const asyncHandler = require('express-async-handler')

const Course = require('../models/courseModel')
const Section = require('../models/sectionModel');
const Video = require('../models/videoModel');
const Quiz = require('../models/quizModel');


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
    const course = await Course.findById(id).populate("sections")
    res.status(200).json( course );
})
// @desc Set Course
// @route POST /api/Courses/addcourse
// @access Private


const setCourse =asyncHandler( async (req, res)=>{
    // if(!req.body.course_name ){
    //     res.status(400)
    //     throw new Error('Please add a course name field')
    // }
    // const course = await Course.create(req.body)
    // res.status(200).json({data : course})
    // Create a new course
    const course = new Course({
        course_name: req.body.course_name,
        course_details: req.body.course_details,
        author: req.body.author,
        level: req.body.level,
        category: req.body.category,
        course_img: req.body.course_img,
        author_img: req.body.author_img
      });
      
      // Save the course
      const savedCourse = await course.save();
      
      // Add sections to the course
      if (req.body.sections) {
        for (let i = 0; i < req.body.sections.length; i++) {
          const section = req.body.sections[i];
          const newSection = new Section({
            section_name: section.section_name,
            section_text: section.section_text
          });
          
          // Save the section
          const savedSection = await newSection.save();
          
          // Add videos to the section
          if (section.videos) {
            for (let j = 0; j < section.videos.length; j++) {
              const video = section.videos[j];
              const newVideo = new Video({
                video_url: video.video_url,
                video_title: video.video_title
              });
              
              // Save the video
              const savedVideo = await newVideo.save();
              
              // Add the video to the section
              savedSection.video_ids.push(savedVideo._id);
            }
          }
          
          // Add quizzes to the section
          if (section.quizzes) {
            for (let k = 0; k < section.quizzes.length; k++) {
              const quiz = section.quizzes[k];
              const newQuiz = new Quiz({
                quiz_title: quiz.quiz_title,
                quiz_question: quiz.quiz_question,
                quiz_options: quiz.quiz_options,
                quiz_answer: quiz.quiz_answer
              });
              
              // Save the quiz
              const savedQuiz = await newQuiz.save();
              
              // Add the quiz to the section
              savedSection.quiz_ids.push(savedQuiz._id);
            }
          }
          
          // Add the section to the course
          savedCourse.sections.push(savedSection._id);
        }
      }
      
      // Save the course with the added sections, videos, and quizzes
      const updatedCourse = await savedCourse.save();
      
      res.status(201).json(updatedCourse);
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