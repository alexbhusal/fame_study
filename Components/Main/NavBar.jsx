"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const webLogo="https://imgs.search.brave.com/R2TA23Dz4jfyvvIOBvCG-shDQ0wvT3SyXW_5WALXmQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20veWxqaUdz/VXNkUE9zZkdJby05/S2VLX29leEJqNk5Y/aEYtNjdCLTVCa09T/Yy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9abUZ0Wlcx/aGFXNWxMbU52L2JT/OTNjQzFqYjI1MFpX/NTAvTDNWd2JHOWha/SE12TWpBeS9NeTh3/TkM5R1FVMUZYMHh2/L1oyOWZNakF5TTE5/U1IwSXUvY0c1bg"
  
  return (
    <nav className=" border-gray-200  sticky top-0 z-50 bg-white shadow-md h-20 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={webLogo} className="h-8" alt="Fame Logo" />
          <span className="hidden md:block self-center  text-2xl font-semibold whitespace-nowrap ">Fame Study Abroad</span>
        </Link>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-multi-level"
          aria-expanded={isNavOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isNavOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            <li>
              <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">
                Home
              </Link>
            </li>
            <li className="relative group">
              <button className="flex items-center justify-between w-full py-2 px-3  text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto  ">
                <span>Test Preparation</span>
                <svg className="w-2.5 h-2.5 ms-2.5" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div className="absolute left-0  hidden group-hover:block rounded-lg shadow-sm w-44 z-50">
                <ul className="py-2 text-sm text-gray-700 bg-gray-200">
                  <li>
                    <Link href="/test-preparation/ielts" target="_blank" className="block px-4 py-2  ">IELTS</Link>
                  </li>
                  <li><Link href="/test-preparation/pte" target="_blank" className="block px-4 py-2  ">PTE</Link></li>
                  <li><Link href="/test-preparation/dualingo" target="_blank" className="block px-4 py-2  ">DUOLINGO</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Services</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Pricing</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
