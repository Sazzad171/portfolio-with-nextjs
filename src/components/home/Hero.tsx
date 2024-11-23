import React from 'react';

const Hero = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-1/2 px-2">
            <h4>Hello, I'm</h4>
            <h2>Sazzad Bin Jafor</h2>
            <h4>A Software Engineer from Dhaka</h4>
            <p>
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