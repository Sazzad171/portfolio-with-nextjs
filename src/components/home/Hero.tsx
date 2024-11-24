import React from 'react';

const Hero = () => {

  return (
    <div
      className={`pt-20 pb-20 bg-[url('/images/home/hero-bg-light.jpg')] dark:bg-[url('/images/home/hero-bg-dark.jpg')] bg-cover bg-no-repeat bg-center`}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-1/2 px-2">
            <h4 className='font-medium text-lg text-theme-orange'>Hello, I'm</h4>
            <h2 className="font-bold text-4xl dark:text-white mb-2">Sazzad Bin Jafor</h2>
            <h4 className="font-medium text-xl dark:text-white mb-1">A Software Engineer from Dhaka</h4>
            <p className="dark:text-white">
              I'm creative designer based in New York, and I'm very passionate and dedicated to my work.
            </p>
            <button className="dark:text-white">About Me</button>
          </div>
          <div className="w-full md:w-1/2 px-2">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;