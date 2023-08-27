import { React, useEffect, useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";
import { FaSquareWhatsapp, FaSquareTwitter } from "react-icons/fa6";
import axios from "axios";
import { api } from "../api/api";
import { isMobile, isTablet } from "react-device-detect";
import Bowser from "bowser";
import MovingText from "react-moving-text";

const NavBarL = () => {
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    if (!firstRender) {
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
            browser: Browser,
            country: res.data.country,
          };
          console.log(user_data);
          return await api.post("VistiMe", user_data);
        })
        .catch((err) => {
          console.log(err);
        });

      setFirstRender(true);
    }
  }, [firstRender]);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-gg1 text-lg"
      >
        <Link
          to="https://linkedin.com/in/soelapyaehtun"
          className="flex items-center text-[#0A66C2]"
          target="_blank"
        >
          LinkedIn
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-gg1 text-lg"
      >
        <Link
          to="https://github.com/SoeLaPyaeHtun"
          className="flex items-center text-[#171515]"
          target="_blank"
        >
          Github
        </Link>
      </Typography>
    </ul>
  );

  const footer = (
    <ul className="mb-4 mt-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-gg1 text-lg"
      >
        <Link
          to="https://wa.me/+6586470728"
          className="flex items-center"
          target="_blank"
        >
          <FaSquareWhatsapp className="text-[#25D366] text-2xl" />
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-gg1 text-lg"
      >
        <Link
          to="https://twitter.com/SoeLaPyaeHtun"
          className="flex items-center"
          target="_blank"
        >
          <FaSquareTwitter className="text-[#00acee] text-2xl" />
        </Link>
      </Typography>
    </ul>
  );
  return (
    <>
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <MovingText
            type="shakeHorizontal"
            duration="500ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="infinite"
            fillMode="none"
            className="font-extrabold"
          >
            <div className="w-8 h-8 bg-[#9bb1ff] shadow-3xl border border-spacing-7 border-red-800 border-1 rounded-full outline-dotted animate-ping flex flex-col justify-end items-center">
              <div className="w-1/2 h-1/2 bg-red-400 border border-spacing-7 outline-dotted border-blue-200 animate-ping flex flex-col justify-end items-center shadow-3xl rounded-full ">
                <div className="w-1/2 h-1/2 bg-brown-900 border border-spacing-7 rounded-full border-black outline-double shadow-3xl animate-bounce flex flex-col justify-end items-center">
                  <div className="w-1/2 h-1/2 bg-cyan-900 border border-spacing-7 rounded-full border-yellow-400 outline-double shadow-3xl animate-bounce flex flex-col justify-end items-center"></div>
                </div>
              </div>
            </div>
          </MovingText>

          <div>{navList}</div>
        </div>
      </Navbar>
      <Outlet />
      <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <div className="flex justify-center items-center">copyright@2023</div>

          <div>{footer}</div>
        </div>
      </div>
    </>
  );
};

export default NavBarL;
