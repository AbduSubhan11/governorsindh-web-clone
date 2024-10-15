import Image from "next/image";
import React from "react";
import ProgrmFundamentl from "../../../Images/programFundamental.jpg";
import Web2Nextjs from "../../../Images/web2NextJs.jpg";
import EarnAsLearn from "../../../Images/EarnAsLearn.jpg";
import AIImg from "../../../Images/AIImg.jpg";
import Web3 from "../../../Images/Web3.jpg";
import Cloud from "../../../Images/CLoudNative.jpg";
import Ambient from "../../../Images/Ambient.jpg";
import Genomics from "../../../Images/Genomics.jpg";
import Automation from "../../../Images/Automation.jpg";

function CourseSequence() {
  return (
    <div className="md:m-20 m-5 space-y-20">
      <h1 className="text-[#044E83] md:text-3xl text-2xl font-bold md:text-left text-center">
        Core Courses Sequence
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 place-items-center">
        <div className="h-60 md:w-72 w-full shadow-2xl hover:scale-105">
          <div className="h-[80%] rounded-2xl">
            <Image
              src={ProgrmFundamentl}
              alt="progrmFundamental"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-center font-bold">Programming Fundamentals</h1>
        </div>
        <div className="h-60 md:w-72 w-full shadow-2xl hover:scale-105">
          <div className="h-[80%]">
            <Image
              src={Web2Nextjs}
              alt="Web2Nextjs"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-center font-bold">Programming Fundamentals</h1>
        </div>
        <div className="h-60 md:w-72 w-full shadow-2xl hover:scale-105">
          <div className="h-[80%]">
            <Image
              src={EarnAsLearn}
              alt="EarnAsLearn"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-center font-bold">Programming Fundamentals</h1>
        </div>
      </div>

      <div className="space-y-8">
        <h1 className="text-[#044E83] md:text-3xl text-2xl font-bold md:text-left text-center">
          Advanced Courses
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 md:px-10">
          <div className="h-60 md:w-72 w-full shadow-2xl hover:scale-105">
            <div className="h-[80%]">
              <Image
                src={AIImg}
                alt="AIImg"
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-center font-bold">Artificial Intelligence</h1>
          </div>
          <div className="h-60 md:w-72 w-full shadow-2xl hover:scale-105">
            <div className="h-[80%]">
              <Image
                src={Web3}
                alt="Web3"
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-center font-bold">Web 3 and Metaverse</h1>
          </div>
          <div className="h-60 md:w-72 w-full shadow-2xl hover:scale-105">
            <div className="h-[80%]">
              <Image
                src={Cloud}
                alt="CLoud"
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-center font-bold">Cloud-Native Computing</h1>
          </div>
          <div className="h-60 md:w-72 w-full shadow-2xl hover:scale-105">
            <div className="h-[80%]">
              <Image
                src={Ambient}
                alt="Ambient"
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-center font-bold">Ambient Computing and IoT</h1>
          </div>
          <div className="h-60 md:w-72 w-full shadow-2xl hover:scale-105">
            <div className="h-[80%]">
              <Image
                src={Genomics}
                alt="Genomics"
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-center font-bold">
              Genomics and Bioinformatic
            </h1>
          </div>
          <div className="h-60 md:w-72 w-full shadow-2xl hover:scale-105">
            <div className="h-[80%]">
              <Image
                src={Automation}
                alt="Automation"
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-center font-bold">
              Network Programmability and Automation
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSequence;
