import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Blog from "./components/Blog";
import Timeline from "./components/Timeline";
import {
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { DiCodeigniter, DiJqueryLogo, DiMysql } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAmazons3, SiSocketdotio } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import Shaki from "./assets/Ralph_Sison.jpg";

function App() {
  const [count, setCount] = useState(0);
  const skills = [
    {
      title: "HTML",
      icon: <FaHtml5 size={48} />,
    },
    {
      title: "PHP",
      icon: <FaPhp size={48} />,
    },
    {
      title: "Codeigniter",
      icon: <DiCodeigniter size={48} />,
    },
    {
      title: "CSS",
      icon: <FaCss3 size={48} />,
    },
    {
      title: "Tailwind",
      icon: <RiTailwindCssFill size={48} />,
    },
    {
      title: "React",
      icon: <FaReact size={48} />,
    },
    {
      title: "Mysql",
      icon: <DiMysql size={48} />,
    },
    {
      title: "Amazon S3",
      icon: <SiAmazons3 size={48} />,
    },
    {
      title: "JQuery",
      icon: <DiJqueryLogo size={48} />,
    },
    {
      title: "Bootstrap",
      icon: <FaBootstrap size={48} />,
    },

    {
      title: "GitHub",
      icon: <FaGithub size={48} />,
    },
    {
      title: "JavaScript",
      icon: <IoLogoJavascript size={48} />,
    },
    {
      title: "Socket.io",
      icon: <SiSocketdotio size={48} />,
    },
    {
      title: "Node Js",
      icon: <FaNodeJs size={48} />,
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-[#282C34] ">
        <div>
          <div
            className="container mx-auto p-4  lg:flex min-h-screen items-center"
            id="home"
          >
            <div className="text-center lg:text-left lg:w-1/2 text-white sm:max-md:mt-12">
              <div className="mb-4 text-4xl">
                HI, I AM Ralph Gener Almazan Sison
              </div>
              <div className="mb-4 text-2xl">Full Stack Web Developer</div>
              <div className="mb-4 text-lg flex gap-2 items-center justify-center lg:justify-start">
                <HiOutlineLocationMarker />
                Pasig City
              </div>
              <div className="mb-4 text-lg flex gap-2 items-center justify-center lg:justify-start">
                <HiOutlineMail />
                sison.ralpha@gmail.com
              </div>
            </div>

            <div className="p-4 lg:w-1/2 flex justify-center items-center">
              <img
                src={Shaki}
                alt="Profile Picture"
                className="w-[250px] h-[250px] rounded-full border-8 border-gray-300 object-cover "
              />
            </div>
          </div>
        </div>

        <div>
          <div className="" id="skills">
            <div className="container mx-auto p-4  min-h-screen text-white">
              <div className="text-center">
                <div className="mb-4 text-lg">These are the</div>
                <div className="mb-4 text-2xl md:text-3xl lg:text-5xl font-bold">
                  TECHNOLOGIES
                </div>
                <div className="mb-4 text-lg">I used in my projects</div>
              </div>
              <div className="grid grid-cols-4 gap-y-8 mt-24">
                {skills.map((skill, index) => {
                  const { title, icon } = skill;
                  return (
                    <div className="flex flex-col items-center" key={index}>
                      <div className="p-4 border">{icon}</div>
                      <div className="mt-2">{title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[600px] mt-24" id="dotes">
          <div className="container mx-auto flex justify-center">
            <Timeline />
          </div>
        </div>
      </div>

      {/* <Blog />
      <Carousel /> */}
      <Footer />
    </>
  );
}

export default App;
