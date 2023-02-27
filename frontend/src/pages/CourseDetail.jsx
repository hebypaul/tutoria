import React from 'react'
import Accordion from '../components/Accordion'
const items = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "What is Tailwind CSS?",
      content: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    },
    {
      title: "How do I use this Accordion component?",
      content: "Pass an array of items as a prop to the Accordion component.",
    },
  ];

function CourseDetail() {
  return (
    <>
    <div className="bg-gray-900  text-gray-200 ">
    <div className="container px-5 py-16 mx-auto flex flex-wrap items-center ">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-100">Next JS : Beginner Course</h1>
                <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin. </p>
            </div>
            <div class="lg:w-3/12 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-fit mt-10 md:mt-0">
                <button class="flex-shrink-0 text-white  bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg ">Enroll Now</button>
            </div>
    </div>    
    </div>
    <div className="container px-5 py-16 mx-auto flex flex-wrap items-center ">
    <h1 className="title-font font-medium text-3xl pb-16">Syllabus</h1>
        <Accordion items={items} />
    </div>
    </>
  )
}

export default CourseDetail