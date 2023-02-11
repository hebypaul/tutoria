import React from 'react'

const Card = ({data}) => {
  return (
        <div class="p-2">
            <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{data.courseName}</h2>
                <p class="leading-relaxed text-base ">{data.description}</p>
            </div>
        </div>
  )
}

export default Card