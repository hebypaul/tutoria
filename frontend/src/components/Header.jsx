import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <header className= "text-gray-600 body-font">
    <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Tutoria</span>
      </Link>
      <nav className="md:m-auto flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-gray-900" to="/courses">Explore Courses</Link>
        <Link className="mr-5 hover:text-gray-900">Course Creation</Link>
        <Link className="mr-5 hover:text-gray-900" to="/about">About</Link>
        <Link className="mr-5 hover:text-gray-900" to="/contact">Contact Us</Link>
      </nav>
      <Link to='register'><button className="inline-flex items-center text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">Sign Up</button></Link>
      <Link to={`login`}><button className="ml-4 inline-flex items-center bg-gray-100 border-0  py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login</button></Link>
    </div>
  </header>
  )
}

export default Header