import { useState } from "react";
import { PiListBold } from "react-icons/pi";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [show, setShow] = useState(false);

  const toggleHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <header className="p-4 bg-[#21252B] sticky top-0 z-50 left-0 right-0 hidden lg:block ">
        <div className="container mx-auto ">
          <div className="flex justify-between ">
            <div className="text-4xl text-white font-extrabold flex items-center">
              Ralph
            </div>
            <ul className="items-stretch hidden space-x-8 md:flex text-white">
              <li className="flex">
                <Link
                  activeClass="dark:text-violet-600 dark:border-violet-600"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  duration={500}
                  className="flex items-center px-4 -mb-1 border-b-2"
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  activeClass="dark:text-violet-600 dark:border-violet-600"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  duration={500}
                  className="flex items-center px-4 -mb-1 border-b-2"
                >
                  Skills
                </Link>
              </li>
              <li className="flex">
                <Link
                  activeClass="dark:text-violet-600 dark:border-violet-600"
                  to="dotes"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  duration={500}
                  className="flex items-center px-4 -mb-1 border-b-2"
                >
                  Timeline
                </Link>
              </li>
            </ul>
            <PiListBold className="self-center" size={38} color="white" />
          </div>
        </div>
      </header>

      <header className="sticky top-0 w-full bg-[#21252B] z-50 sm:block lg:hidden">
        <div className="flex justify-between p-4">
          <div className="text-4xl text-white font-extrabold flex items-center">
            Ralph
          </div>
          <PiListBold
            className="self-center"
            size={38}
            color="white"
            onClick={toggleHandler}
          />
        </div>
        {show && (
          <div className="text-white p-4 absolute text-center text-2xl space-y-4  bg-[#21252B] w-full ">
            <Link
              activeClass="text-purple-400"
              to="home"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
              className="block"
              onClick={toggleHandler}
            >
              Home
            </Link>
            <Link
              activeClass="dark:text-violet-600 dark:border-violet-600"
              to="skills"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
              className="block"
              onClick={toggleHandler}
            >
              Skills
            </Link>
            <Link
              activeClass="dark:text-violet-600 dark:border-violet-600"
              to="dotes"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
              className="block"
              onClick={toggleHandler}
            >
              Timeline
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
