import React, { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@mui/material";

const MainMenu = () => {
  const [infoPodcast, setInfoPodcast] = useState([
    { title: "Podcast 1", description: "Description 1" },
    { title: "Podcast 2", description: "Description 2" },
    { title: "Podcast 3", description: "Description 3" },
    { title: "Podcast 4", description: "Description 4" },
  ]);
  const [instructions, setInstructions] = useState(false);
  var [paso, setPaso] = useState(1);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (paso < 4) {
  //       setPaso(paso + 1);
  //     } else {
  //       setPaso(1);
  //     }
  //   }, 5000);
  //   console.log("paso", paso);
  // }, [paso]);


  const handleNext = () => {
    if (paso < infoPodcast.length) {
      setPaso(paso + 1);
    } else {
      setPaso(1);
    }
  };

  const handlePrev = () => {
    if (paso > 1) {
      setPaso(paso - 1);
    } else {
      setPaso(infoPodcast.length);
    }
  };

  return (
    <div>
      <div className="absolute z-50">
        <InformationCircleIcon
          className="h-10 w-10 m-7"
          onClick={() => setInstructions(true)}
        />
      </div>
      <div className="absolute z-20 w-full h-screen">
        <div className="flex mx-8 justify-between h-screen items-center">
          <button
            className="flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => handlePrev()}
          >
            <ChevronLeftIcon className="w-7 h-7 text-gray-500" />
          </button>
          <button
            className="flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => handleNext()}
          >
            <ChevronRightIcon className="w-7 h-7 text-gray-500" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center h-screen">
        {paso === 1 && (
          <div className="h-screen flex flex-col justify-end mb-10">
            <div className="flex justify-center">
              <PlayCircleIcon className="h-32 w-32" />
              <div className="flex-col pl-20 ml-16 border-l-4 border-black">
                <h1 className="text-8xl font-black text-start">
                  {infoPodcast[0]?.title}
                </h1>
                <p className="text-2xl font-semibold text-start">
                  {infoPodcast[0]?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {instructions && (
        <Dialog open={instructions} onClose={() => setInstructions(false)}>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="flex items-center justify-between w-full">
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handlePrev()}
              >
                <ChevronLeftIcon className="w-5 h-5 text-gray-500" />
              </button>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-700">
                  {infoPodcast[paso - 1].title}
                </h1>
                <p className="text-sm text-gray-500">
                  {infoPodcast[paso - 1].description}
                </p>
              </div>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handleNext()}
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default MainMenu;
