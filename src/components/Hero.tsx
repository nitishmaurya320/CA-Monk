import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button';

const Hero = () => {
   return (
    <section className="w-full flex  justify-center px-8 py-20">
      <div className="max-w-3xl flex justify-center items-center ">
        <div className='flex-col items-center flex'>
            <h1 className="text-4xl font-semibold leading-tight text-gray-900">
          CA Monk Blog
          
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Stay updated with the latest trends in finance, accounting, and career
            growth
        </p>
        <Link to="/create-blog">
      <Button className='mt-4 cursor-pointer'>Create New Blog</Button>
      </Link>
        </div>
        

        
      </div>
      
      
    </section>
  );
}

export default Hero