'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from '@/contexts/ThemeProvider';

const Header = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <header className="px-2 py-2 fixed top-0 left-0 right-0 z-10">
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-1/4 px-1">
            <Link href={'/'}>
              <Image
                src="/images/logo.png"
                width={"172"}
                height={"56"}
                alt='logo'
                className="object-contain"
              />
            </Link>
          </div>
          <div className="w-full md:w-1/2 px-1">
            <ul className="flex flex-row gap-x-6 items-center justify-center">
              <li>
                <Link
                  href={"/"}
                  className="dark:text-white hover:text-theme-orange"
                >Home</Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="dark:text-white hover:text-theme-orange"
                >About</Link>
              </li>
              <li>
                <Link
                  href={"/portfolio"}
                  className="dark:text-white hover:text-theme-orange"
                >Portfolio</Link>
              </li>
              <li>
                <Link
                  href={"/servies"}
                  className="dark:text-white hover:text-theme-orange"
                >Servies</Link>
              </li>
              <li>
                <Link
                  href={"/blogs"}
                  className="dark:text-white hover:text-theme-orange"
                >Blogs</Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="dark:text-white hover:text-theme-orange"
                >Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-1">
            <ul className="flex flex-row gap-x-6 items-center justify-end">
              <li>
                <button className="" onClick={toggleTheme}>
                  {
                    theme === 'light'? (
                      <MdOutlineLightMode className="w-5 h-5" />
                    ) : (
                      <IoMoonOutline className="w-5 h-5" />
                    )
                  }
                </button>
              </li>
              <li>
                <button className="dark:text-white">My Resume</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;