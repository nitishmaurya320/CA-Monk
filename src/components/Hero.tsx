import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
   return (
    <section className="w-full flex  justify-center px-8 py-20">
      <div className="max-w-3xl flex justify-center items-center ">
        <div className='flex-col items-center flex'>
            <h1 className="text-4xl font-semibold leading-tight text-gray-900">
          CA Monk Blog
          Get interview-ready faster.
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Stay updated with the latest trends in finance, accounting, and career
            growth
        </p>
        </div>
        

        
      </div>
      <Link to="/create-blog">
      <button>Create Blog</button>
      </Link>
      
    </section>
  );
}

export default Hero