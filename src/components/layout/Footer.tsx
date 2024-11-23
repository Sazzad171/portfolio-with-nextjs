import React from 'react';
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-700">
      <div className="container max-w-7xl mx-auto">
        <p className="text-center dark:text-slate-400 py-6 flex justify-center items-center gap-1">
          Made with <FaHeart className="text-red-600" /> by Sazzad &copy; {currentYear}
        </p>
      </div>
    </footer>
  )
}

export default Footer;