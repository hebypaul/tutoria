import React from 'react'

const Header = () => {
  return (
  <header class= "text-gray-600 body-font">
    <div class=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Tutoria</span>
      </a>
      <nav class="md:m-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900" href="/courses">Explore Courses</a>
        <a class="mr-5 hover:text-gray-900">Course Creation</a>
        <a class="mr-5 hover:text-gray-900" href="/about">About</a>
        <a class="mr-5 hover:text-gray-900" href="/contact">Contact Us</a>
      </nav>
      <a href="register"><button class="inline-flex items-center text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">Sign Up</button></a>
      <a href="login"><button class="ml-4 inline-flex items-center bg-gray-100 border-0  py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login</button></a>
    </div>
  </header>
  )
}

export default Header