import React from 'react'
import {Link } from 'react-router-dom';

const Card = ({data}) => {
  return (
        <Link to={`/courses/${data._id}`}>
          <div class="p-2">
              <div class="bg-gray-100 p-6 rounded-lg">
                  <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                  <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">{data.author}</h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{data.course_name}</h2>
                  <p class="leading-relaxed text-base ">{data.course_details}</p>
              </div>
          </div>
        </Link>
  )
}

export default Card