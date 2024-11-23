import Image from 'next/image';
import React from 'react';
import Logo from '@/public/images/logo.png'
import Link from 'next/link';
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="px-2 py-2 bg-white dark:bg-theme-dark fixed top-0 left-0 right-0 z-10 shadow">
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
            <ul className="flex flex-row gap-x-6 items-center justify-center">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/portfolio"}>Portfolio</Link>
              </li>
              <li>
                <Link href={"/servies"}>Servies</Link>
              </li>
              <li>
                <Link href={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-1">
            <ul className="flex flex-row gap-x-6 items-center justify-end">
              <li>
                <button className=""><MdOutlineLightMode /> <IoMoonOutline /></button>
              </li>
              <li>
                <button className="">My Resume</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;