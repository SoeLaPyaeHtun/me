import { React, useEffect, useRef, useState } from "react";

import { TypeAnimation } from "react-type-animation";
import SyntaxHighlighter from "react-syntax-highlighter";
import { xcode as stxhl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { api, baseurl } from "../api/api";
import { Link } from "react-router-dom";
import "../pg-trans.css";
import axios from "axios";
import { isMobile, isTablet } from "react-device-detect";
import Bowser from "bowser";
import { Dialog, DialogBody, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import resume from '../assets/resume/Soe_La_Pyae_Htun_Resume.pdf'


const First = () => {
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const boxElement = boxRef.current;
    const boxElement2 = boxRef2.current;

    if (!boxElement) {
      return;
    }
    if (!boxElement2) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 1) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    const updateAnimation2 = () => {
      const angle =
        (parseFloat(boxElement2.style.getPropertyValue("--angle")) + 0.3) % 360;
      boxElement2.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation2);
    };

    requestAnimationFrame(updateAnimation);
    requestAnimationFrame(updateAnimation2);
  }, []);

  const codeString = `import React from 'react'

  const SoeLaPyaeHtun = () => {
    const Skills = {
        "C#": ["ASP.NET Core", "ASP.NET Framework", "ASP.NET API"],
        "Java": ["SPRING BOOT API", "SPRING BOOT FLUX" , "API Development"],
        "Linux": ["Linus System Administration", "Ansible Automation"],
        "JavaScript": ["Pure JavaScript","NodeJS","ReactJS" , "NextJS"],
        "CSS": ["BootStrap", "TailwindCSS", "MUI"]
  }
    return (
      <div>
        {Object.keys(Skills).map((skill, index) => (
            <div key={index}> 
              <h1>{skill}</h1>
              <ul className="list-disc list-inside">{
                  Skills[skill].map((j, index) => (
                      <li key={index} className='m-2'>{j}</li>
                  ))
              }</ul>
            </div>
         ))}
      </div>
    )}
  export default SoeLaPyaeHtun
`;

  const fetchResume = () => {
  //  try{ const aTag = document.createElement("a");
  //   aTag.href =
  //     baseurl + "HireMe/getresume?filename=Soe_La_Pyae_Htun_Resume.pdf";
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();}catch(e){
  //     setOpen(false)
  //   }

  setOpen(true)

    axios
        .get("https://ipapi.co/json/")
        .then(async (res) => {
          const Os = navigator.platform;
          const Browser = Bowser.getParser(
            window.navigator.userAgent
          ).getBrowserName();
          const user_data = {
            ip: res.data.ip,
            ipVersion: res.data.version,
            device: isMobile ? "Mobile" : isTablet ? "Tablet" : "Laptop/Destop",
            os: Os,
            browser: Browser + " Resume Downloaded",
            country: res.data.country,
          };
          console.log(user_data);
          return await api.post("VistiMe", user_data);
        })
        .catch((err) => {
          console.log(err);
        });

  };

  return (
    <>
      <div className="w-full md:h-[calc(100vh-148px)] h-[calc(100vh-178px)] flex md:flex-row flex-col md:justify-center pt-10">
        <div
          ref={boxRef2}
          style={{
            "--angle": "90deg",
            "--border-color":
              "linear-gradient(var(--angle), #ddd6f3, #ffffff ,#faaca8)",
            "--bg-color": "linear-gradient(#fafafa , #eaf1df)",
          }}
          className="w-full md:w-1/3 h-2/5 md:h-4/5 flex flex-col justify-center items-center border-2 border-[#0000] p-3 [background:padding-box_var(--bg-color),border-box_var(--border-color)] shadow-2xl shadow-red-100 -rotate-12"
        >
          <div className="w-full h-full flex flex-col justify-center items-center rotate-12">
            <div>
              <h1 className="text-3xl md:text-6xl">
                I'm <br /> <span className="font-bold">Soe La Pyae Htun</span> ,
                a
              </h1>
            </div>
            <div className="">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  750,

                  "FullStack Developer",
                  750,

                  "FrontEnd Developer",
                  750,

                  "BackEnd Developer",
                  750,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-4xl md:text-5xl"
              />
            </div>

            <div className="pt-10"></div>

            <div className="flex w-full justify-center">
              {/* hire me button */}
              <Link to={"/me/hire"}>
                <span className="px-4 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#6345f7] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#b06ab3] group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-green-400 animate-ping"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z"
                        fill="#030D45"
                      />
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-green-400 animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z"
                        fill="#030D45"
                      />
                    </svg>
                  </span>
                  <span className="relative font-gg1 w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Hire Me !
                  </span>
                </span>
              </Link>

              <div className="px-5"></div>

              {/* Resume button */}
              <a href={resume} download="Soe_La_Pyae_Htun_Resume" target='_blank'>
              {/* <button onClick={() => fetchResume()}> */}
              <button>
                <span className="px-4 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#faaca8] group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="animate-ping w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-green-400 animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Get Resume
                  </span>
                </span>
              </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 h-3/6 pt-10 md:h-5/6 flex justify-center items-center">
          <div
            ref={boxRef}
            style={{
              "--angle": "0deg",
              "--border-color":
                "linear-gradient(var(--angle), #ffffff, #a1bf6e)",
              "--bg-color": "linear-gradient(#ddd6f3 , #ffaca8)",
            }}
            className="md:w-full w-4/5 h-full bg-blue-100 justify-center border-2 border-[#0000] p-3 [background:padding-box_var(--bg-color),border-box_var(--border-color)] shadow-2xl shadow-green-100 items-center bg-opacity-50 rotate-12"
          >
            <div className="w-full h-full -rotate-12 rounded-md">
              <div className="w-full h-8 bg-[#ecf7db] rounded-t-lg flex flex-row justify-start border border-white items-center px-3">
                <div className="w-3 h-3 rounded-full border-2 border-red-300 hover:bg-red-300"></div>
                <div className="px-1"></div>
                <div className="w-3 h-3 rounded-full border-2 border-gray-500 hover:bg-gray-500"></div>
                <div className="px-1"></div>
                <div className="w-3 h-3 rounded-full border-2 border-green-300 hover:bg-green-300"></div>
              </div>
              <SyntaxHighlighter
                language="javascript"
                style={stxhl}
                className="h-full font-gg1 opacity-80 rounded-b-lg"
                showLineNumbers={true}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>





      <Dialog open={open}>
        <DialogBody className="grid place-items-center gap-4">
        
          <Typography color="black" variant="h2" className="font-gg1">
          "I'm really Sorry  -_-"
          </Typography>
          <Typography
            color="black"
            variant="h4"
            className="text-center font-gg1"
          >
           
              "Backend Operation is under maintenance"
            <br />
              "So , I will send my updated Resume File to you shortly !"

            <br />
         
              <>
                If you are urgent ,contact me directly via <br />{" "}
                <a href="tel:+6586470728">+65 86470728</a>
              </>
            
          </Typography>
          <div className="py-10">
           
              <button onClick={(() => setOpen(false))}>
                <span className="relative px-6 py-3 font-bold text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                  <span className="relative font-gg1">Close -_-</span>
                </span>
              </button>
            
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default First;
