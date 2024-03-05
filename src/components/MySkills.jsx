import React from "react";
import { FaDocker, FaReact } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import {
  SiAbletonlive,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiChakraui } from "react-icons/si";

const MySkills = () => {
  return (
    <div className="container mx-auto w-full  px-4 pl-4">
      <div className="m-4 rounded ">
        <div className="w-full  ">
          <h2 className="py-2 text-center text-3xl font-semibold text-black">
            My Skills
          </h2>
          <div className="container mx-auto w-[480px] text-center mb-6">
            <p className="text-zinc-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quo
              sapiente odit amet blanditiis recusandae optio ea vel quidem
              reiciendis dignissimos excepturi earum deserunt, dolores at ab
              tenetur consequuntur eaque!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 py-2 ">
          <div className="rounded bg-white mx-6 ">
            <p className="text-md py-4 text-center font-semibold text-black">
              Programming Languages
            </p>
            <div className="mx-auto mb-3 flex w-3/4 justify-around p-2 text-orange-400 ">
              <IoLogoJavascript size="40px" />
              <SiTypescript size="40px" />
              <TiHtml5 size="40px" />
              <IoLogoCss3 size="40px" />
              <SiTailwindcss size="40px" />
              <FaReact size="40px" />
              <SiNextdotjs size="40px"/>
              <SiChakraui size="40px" />
              <FaDocker size="40px" />
              <SiExpress size="40px"/>


            </div>
          </div>
          <div className="flex flex-col rounded bg-white py-2 text-center mx-6 ">
            <div>
              <p className="text-md mt-2 text-center font-semibold text-black">
                Other Skills
              </p>
              <div className="mx-auto mt-2 flex w-1/2 justify-around p-2 text-orange-400">
                <SiAbletonlive size="40px" />
                <SiAdobelightroom size="40px" />
                <SiAdobepremierepro size="40px" />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default MySkills;
