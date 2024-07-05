import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className="p-4 bg-[#21252B] sticky top-0 z-50 left-0 right-0">
      <div className="container flex justify-between h-16 mx-auto">
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
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
