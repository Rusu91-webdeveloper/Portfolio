"use client";
import { useState } from "react";
import { CgMenuGridO, CgCloseO } from "react-icons/cg";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed  top-0 z-50 w-full bg-[rgb(12,12,12)]  bg-opacity-40  ">
        <div className="mdLg:flex-row max-w-screen-huge m-auto  flex flex-col items-center justify-between content-center text-center px-20 text-[rgb(229,243,252)] pt-4">
          <div className="mdLg:w-auto flex w-full justify-between ">
            <Link href="/" onClick={closeMenu}>
              <div className="bg-logo4 size-12 mb-2   border-1 md:size-20 rounded-full bg-contain  bg-center bg-no-repeat "></div>
            </Link>
            <div className="mdLg:hidden flex justify-center">
              <button onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? (
                  <CgCloseO className="text-2xl text-slate-300" />
                ) : (
                  <CgMenuGridO className="text-2xl text-white" />
                )}
              </button>
            </div>
          </div>
          <ul
            className={`mdLg:flex-row mdLg:flex flex-col ${
              isMenuOpen
                ? "mdLg:space-y-0 mdLg:space-x-6 flex space-y-4 text-slate-100"
                : "hidden"
            } mdLg:flex items-center`}
          >
            <li>
              <Link
                className="p-2 mdLg:ml-6 rounded-full hover:bg-gradient-to-r from-pink-800 to-violet-900 p-3 text-base text-slate-200 hover:from-pink-700 hover:to-violet-800 cursor-pointer"
                href={"/"}
                onClick={closeMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="p-2 rounded-full mdLg:ml-6 hover:bg-gradient-to-r from-pink-800 to-violet-900 p-3 text-base text-slate-200 hover:from-pink-700 hover:to-violet-800"
                href={"/experience"}
                onClick={closeMenu}
              >
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link
                className="p-2 mdLg:ml-6 rounded-full hover:bg-gradient-to-r from-pink-800 to-violet-900 p-3 text-base text-slate-200 hover:from-pink-700 hover:to-violet-800 cursor-pointer"
                href={"/projects"}
                onClick={closeMenu}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                className="mdLg:ml-6 cursor-pointer rounded-full bg-gradient-to-r from-pink-800 to-violet-900 p-3 text-base text-slate-200 hover:from-pink-700 hover:to-violet-800"
                href={"/contact"}
                onClick={closeMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
