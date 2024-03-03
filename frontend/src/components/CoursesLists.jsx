import React, { useEffect, useState } from 'react'
import CourseList from './CourseList'
import { getCourses } from '../features/getCourses';


const CoursesLists = () => {
  const [courses, setCourses] =  useState([])

  useEffect(()=>{
    getCourses('all').then((res) =>{
      setCourses(res);
    })
  },[])

  return (
    <div className="container px-5 pb-24 mx-auto">
      <div className="flex flex-wrap w-full mb-24">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All Courses</h1>
          <div className="h-1 w-20 bg-green-500 rounded"></div>
        </div>
      </div>   
      <div className="-my-8 divide-y-2 divide-gray-100">
      {courses?.map((course)=>(
            <CourseList  key={course._id} data={course}/>
      ))
      }


      </div>
    </div>
  )
}

export default CoursesLists