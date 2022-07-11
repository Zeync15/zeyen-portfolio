import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  const handleEmail = () =>
    window.open("mailto:zeyenchai@gmail.com?subject=Enquiry&body=Hi Ze Yen,");

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>

          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Chai Ze Yen</span>
          </h1>

          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer using Nextjs and Reactjs to design and build user
            interfaces. Currently, I'm focusing on building CSV Importer and admin system for the
            company I'm working with.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              onClick={handleEmail}
            >
              <AiOutlineMail />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/chai-ze-yen-0bb4bb1a6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://github.com/Zeync15" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="  https://www.instagram.com/zeyen99/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
