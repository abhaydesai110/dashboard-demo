"use client";
import React, { useState } from "react";
import { CircleChevronLeft } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/Images/audi.svg";
import "../assets/style.css";

const page = () => {
  const [menu, setMenu] = useState<Boolean>(false);
  return (
    <main className="h-screen w-screen">
      <div className="w-full flex relative">
        <div
          className={`${
            menu ? " w-[277px]" : "w-[68px]"
          }   h-screen bg-white border border-r border-addey-gray text-addey-primary shadow-xl  absolute anim px-3`}
        >
          <CircleChevronLeft
            className="absolute right-0 top-3 translate-x-1/2"
            onClick={() => {
              setMenu(!menu);
            }}
          />
          <div className="h-1/12 p-2 border-addey-gray flex items-center justify-center  border-b bg-white">
            <Image className=" h-16" src={Logo} alt="" />
          </div>
          <div className="h-7/12  py-2">
            <ul className="text-xl space-y-2">
              <li
                className={`w-full px-4 py-2 rounded flex items-center ${
                  menu ? "" : "justify-center"
                }   space-x-3 text-white bg-addey-primary`}
              >
                <span className="flex icon-home "></span>
                <h6 className={`${menu ? "" : "hidden"}`}>Home</h6>
              </li>
              <li
                className={`w-full px-4 py-2 rounded flex items-center ${
                  menu ? "" : "justify-center"
                }   space-x-3 hover:bg-addey-primary/10 text-[#8A92A6] anim`}
              >
                <span className="flex icon-earth  "></span>
                <h6 className={`${menu ? "" : "hidden"}`}>Earth</h6>
              </li>
              <li
                className={`w-full px-4 py-2 rounded flex items-center ${
                  menu ? "" : "justify-center"
                }   space-x-3 hover:bg-addey-primary/10 text-[#8A92A6] anim`}
              >
                <span className="flex icon-apple"></span>
                <h6 className={`${menu ? "" : "hidden"}`}>Apple</h6>
              </li>
              <li
                className={`w-full px-4 py-2 rounded flex items-center ${
                  menu ? "" : "justify-center"
                }   space-x-3 hover:bg -addey-primary/10 text-[#8A92A6] anim`}
              >
                <span className="flex icon-heart  "></span>
                <h6 className={`${menu ? "" : "hidden"}`}>Heart</h6>
              </li>
              <li
                className={`w-full px-4 py-2 rounded flex items-center ${
                  menu ? "" : "justify-center"
                }   space-x-3 hover:bg-addey-primary/10 text-[#8A92A6] anim`}
              >
                <span className="flex icon-gift  "></span>
                <h6 className={`${menu ? "" : "hidden"}`}>Gift</h6>
              </li>
              <li
                className={`w-full px-4 py-2 rounded flex items-center ${
                  menu ? "" : "justify-center"
                }   space-x-3 hover:bg-addey-primary/10 text-[#8A92A6] anim`}
              >
                <span className="flex icon-flag  "></span>
                <h6 className={`${menu ? "" : "hidden"}`}>Fleg</h6>
              </li>
            </ul>
          </div>
          <div className="h-4/12 bg-lime-400"></div>
        </div>
        <div
          className={` ${
            menu
              ? "w-[calc(100%-277px)] ml-[277px]"
              : " w-[calc(100%-68px)] ml-[68px]"
          }     min-h-screen bg-addey-grayLight text-addey-primary anim`}
        >
          <div className="w-full h-screen">
            <div className="h-14 bg-white border-b border-addey-gray shadow-md"></div>
            <div className="h-[calc(100%-56px)]  overflow-auto">
              <div className="h-[1000px] overflow-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
