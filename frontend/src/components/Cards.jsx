import React from 'react'
import CardCarousel from './CardCarousel'


const Cards = () => {
  return (
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All courses</h1>
                <div class="h-1 w-20 bg-green-500 rounded"></div>
            </div>
            </div>
            <div class="flex flex-wrap -m-4">
              <CardCarousel />
            </div>
        </div>
    </section>
  )
}

export default Cards