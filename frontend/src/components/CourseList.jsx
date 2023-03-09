import React from 'react'
import {Link } from 'react-router-dom';

const CourseList = ({data}) => {
  return (
    <Link to={`/courses/${data._id}`}>
        <div className="px-2 py-4 border-b-2 border-gray-300 flex flex-wrap md:flex-nowrap ">
            <div className="md:w-64 md:mb-0  pr-6 flex-shrink-0 flex flex-col">
            <img class="h-40 rounded w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="content" />
            </div>
            <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{data.course_name}</h2>
            <p className="leading-relaxed">{data.course_details}</p>
            <div className="my-2">
                <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">{data.author}</h3>
                <h3 class="tracking-widest text-gray-500 text-xs font-medium title-font">
                    <span class="inline-block p-1  mr-1 my-1 rounded-md bg-gray-100 font-medium tracking-widest">{data.level}</span>
                    <span class="inline-block p-1  mr-1 my-1 rounded-md bg-gray-100 font-medium tracking-widest">{data.category}</span>
                </h3>
            </div>
            </div>
        </div>
    </Link>
  )
}

export default CourseList