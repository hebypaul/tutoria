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
    <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">

    {courses?.map((course)=>(
          <CourseList data={course}/>
    ))
    }


    </div>
  </div>
  )
}

export default CoursesLists