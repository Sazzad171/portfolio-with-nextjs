import Image from 'next/image';
import React from 'react';
import Logo from '@/public/images/logo.png'
import Link from 'next/link';

const Header = () => {
  return (
    <header className="px-2 py-2 bg-white dark:bg-theme-dark fixed top-0 left-0 right-0 z-10">
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-1/4 px-1">
            <Link href={'/'}>
              <Image
                src={Logo}
                width={"172"}
                height={"56"}
                objectFit='contain'
                alt='logo'
              />
            </Link>
          </div>
          <div className="w-full md:w-1/2 px-1">

          </div>
          <div className="w-full md:w-1/4 px-1">

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;