import React from 'react'
import CardCarousel from './CardCarousel'


const Cards = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All courses</h1>
                <div className="h-1 w-20 bg-green-500 rounded"></div>
            </div>
            </div>
            <div className="flex flex-wrap -m-4">
              <CardCarousel />
            </div>
        </div>
    </section>
  )
}

export default Cards