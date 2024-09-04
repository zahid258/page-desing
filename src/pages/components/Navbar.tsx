import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);
  const toggleSubSubMenu = () => setIsSubSubMenuOpen(!isSubSubMenuOpen);

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const submenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const subSubmenuVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className="bg-black w-full">
      <div className="container flex items-center lg:justify-start sm:justify-between gap-4 lg:w-5/6 sm:w-full mx-auto 3xl:p-0 2xl:p-0 xl:p-0 lg:p-0 md:p-2 sm:p-2 xs:p-2 xxs:p-2">
        <div className="text-white text-xl flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
</svg>
<span>Profile</span>
</div>
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        {/* Main Menu */}
        <div className="hidden lg:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-400 p-4">
            Home
          </a>
          <div className="relative group">
            <button
              onClick={toggleSubMenu}
              className="text-white hover:text-gray-400 focus:outline-none flex items-center gap-2 p-4"
            >
              Services
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

            </button>
            <AnimatePresence>
              {isSubMenuOpen && (
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={submenuVariants}
                  className="absolute left-0 mt-0 bg-gray-700 rounded-b-lg w-[300px]"
                >
                  <li className="hover:bg-blue-800 hover:text-white p-3">
                    <a className="text-white">
                      Web Development
                    </a>
                    {/* <AnimatePresence>
                      {isSubSubMenuOpen && (
                        <motion.ul
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={subSubmenuVariants}
                          className="absolute left-full top-0 mt-0 ml-2 space-y-2 bg-gray-600 p-4 rounded-md"
                        >
                          <li>
                            <a href="#" className="text-white hover:text-gray-400">
                              Frontend Development
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-white hover:text-gray-400">
                              Backend Development
                            </a>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence> */}
                  </li>
                  <li className='hover:bg-blue-800 hover:text-white p-3'>
                    <a href="#" className="text-white">
                      Design
                    </a>
                  </li>
                  <li className='hover:bg-blue-800 hover:text-white p-3 hover:rounded-b-lg'>
                    <a href="#" className="text-white">
                      SEO
                    </a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <a href="#" className="text-white hover:text-gray-400 p-4">
            Support & FAQs
          </a>
          <a href="#" className="text-white hover:text-gray-400 p-4">
            Contact
          </a>
          
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="lg:hidden flex flex-col space-y-2 p-4"
          >
            <a href="#" className="text-white hover:text-gray-400 p-2">
              Home
            </a>
            <div className="relative">
              <button
                onClick={toggleSubMenu}
                className="text-white hover:text-gray-400 w-full text-left focus:outline-none p-2"
              >
                Services
              </button>
              <AnimatePresence>
                {isSubMenuOpen && (
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={submenuVariants}
                    className=" bg-gray-700 p-2 rounded-md"
                  >
                    <li className="relative">
                      <button
                        onClick={toggleSubSubMenu}
                        className="text-white hover:text-gray-400 w-full text-left focus:outline-none p-2"
                      >
                        Web Development
                      </button>
                      {/* <AnimatePresence>
                        {isSubSubMenuOpen && (
                          <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={subSubmenuVariants}
                            className="bg-gray-600 p-2 rounded-md ml-4"
                          >
                            <li>
                              <a href="#" className="text-white hover:text-gray-400 p-2">
                                Frontend Development
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-white hover:text-gray-400 p-2">
                                Backend Development
                              </a>
                            </li>
                          </motion.ul>
                        )}
                      </AnimatePresence> */}
                    </li>
                    <li>
                      <a href="#" className="text-white hover:text-gray-400 p-2">
                        Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white hover:text-gray-400 p-2">
                        SEO
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            <a href="#" className="text-white hover:text-gray-400 p-2">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
