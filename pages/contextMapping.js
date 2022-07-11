import React from "react";
import Image from "next/image";
import Link from "next/link";
import contextMappingImage from "../public/assets/projects/context-mapping.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

// https://next-context-mapping-zeync15.vercel.app/

const ContextMapping = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={contextMappingImage}
          alt="csv"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Context Mapping</h2>
          <h3>Nextjs / Xarrows / useRef</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p>
            This Context Mapping app (mock) is built using Nextjs and Xarrows. It was one of the
            apps I built during my front-end software developer job at OmniGeo Solutions. This demo
            is an oversimplified version of the context mapping app I have created. I created this
            interface with 2 columns of sample values and used Xarrows to link between them. When
            any value from column A and column B are linked, both of their value will be shown. The
            way I created this app was by manipulating multiple arrays and using the useRef react
            hooks so that I can call the Xarrows function multiple time. This app is useful when
            users upload values that are different from what we expected, and I can prompt the user
            to match their value with our server's value. Then, the back-end can add some function
            to overwrite the user's value. This app is deployed to vercel after finishing building.
          </p>

          <a
            href="https://next-context-mapping-zeync15.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/Zeync15/next-context-mapping"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Nextjs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Xarrows
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                useRef
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Array
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ContextMapping;
