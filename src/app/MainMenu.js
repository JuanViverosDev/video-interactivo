import React, { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@mui/material";
import titulo from "../assets/titulo.png";
import { motion } from "framer-motion";
import bg from "../assets/bg.mp4";

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
    <div className="max-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute object-cover w-full h-full"
      >
        <source src={bg} type="video/mp4" />
      </video>
      <button
        className="bg-gray-200 rounded-full p-2 m-10 absolute"
        onClick={() => setInstructions(true)}
      >
        <InformationCircleIcon className="h-6 w-6" />
      </button>
      <div className="grid grid-cols-3 h-screen">
        <div className="flex flex-col justify-center items-center mx-32 col-span-2">
          <motion.img
            initial={{ y: -5 }}
            animate={{ y: 5 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src={titulo}
            alt="titulo"
          >
            {/* <img src={titulo} alt="titulo" className="" /> */}
          </motion.img>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <button
              className="bg-gray-200 rounded-full p-2 m-2"
              onClick={handlePrev}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              className="bg-gray-200 rounded-full p-2 m-2"
              onClick={handleNext}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">
              {infoPodcast[paso - 1].title}
            </h1>
            <p className="text-center">{infoPodcast[paso - 1].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
