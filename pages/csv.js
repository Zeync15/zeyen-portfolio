import React from "react";
import Image from "next/image";
import Link from "next/link";
import csvImg from "../public/assets/projects/csv-importer.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const Csv = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="absolute z-1" layout="fill" objectFit="cover" src={csvImg} alt="csv" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">CSV Importer</h2>
          <h3>Nextjs / Papa Parse / React Table</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p>
            This CSV Importer app (mock) is built using Nextjs, Papa Parse and React Table. It was
            one of the apps I built during my front-end software developer job at OmniGeo Solutions.
            Users can upload their CSV files to the app with different values. The app used a CSV
            parser called - Papa Parse to get all the CSV values, and render them to a table with
            React Table. The users can edit their CSV files before submitting them to our server. I
            also integrated NextAuth, a Nextjs authentication solution to make sure users log in
            before uploading their CSV files. This app is deployed to vercel after finishing
            building.
          </p>

          <a
            href="https://next-csv-importer-zeync15.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/Zeync15/next-csv-importer"
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
                Papa Parse
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Table
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Stepper
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next Auth
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

export default Csv;
