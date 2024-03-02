import React from 'react'
import Accordion from '../components/Accordion'
import { getCoursesById } from '../features/getCourses';
import { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';



function CourseDetail() {
  const {id}= useParams()
  const [course, setCourse] = useState([])

  useEffect(()=>{
    getCoursesById(id).then((res) =>{
      setCourse(res);
    })
  },[])


  return (
    <>
    <div className="bg-gray-900  text-gray-200 ">
    <div className="container px-5 py-16 mx-auto flex flex-wrap items-center ">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-100">{course.course_name}</h1>
                <p className="leading-relaxed mt-4">{course.course_details } </p>
            </div>
            <div className="lg:w-3/12 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-fit mt-10 md:mt-0">
                <button className="flex-shrink-0 text-white  bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg ">Enroll Now</button>
            </div>
    </div>    
    </div>
    <div className="container px-5 py-16 mx-auto flex flex-wrap items-center ">
    <h1 className="title-font font-medium text-3xl pb-16">Syllabus</h1>
        {course.sections ? <Accordion items={course.sections}  />  :  <p> No content </p> }
    </div>
    </>
  )
}

export default CourseDetail