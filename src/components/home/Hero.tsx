import Image from 'next/image';
import React from 'react';

const Hero = () => {

  return (
    <div
      className={`py-6 md:py-24 bg-[url('/images/home/hero-bg-light.jpg')] dark:bg-[url('/images/home/hero-bg-dark.jpg')] bg-cover bg-no-repeat bg-center`}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-1/2 px-2">
            <h4 className='font-medium text-xl text-theme-orange mb-2'>Hello, I'm</h4>
            <h2 className="font-bold text-5xl dark:text-white mb-3">Sazzad Bin Jafor</h2>
            <h4 className="font-medium text-xl dark:text-white mb-4">A Software Engineer from Dhaka</h4>
            <p className="text-theme-dark dark:text-white mb-6">
              I'm creative designer based in New York, and I'm very passionate and dedicated to my work.
            </p>
            <button className="dark:text-white">About Me</button>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <Image
              src={"/images/home/my-photo.png"}
              alt="owner"
              width="356"
              height="376"
              className="mx-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;