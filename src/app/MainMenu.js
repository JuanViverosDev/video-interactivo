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
import fondo from "../assets/fondo.mp4";

const MainMenu = () => {
  const [vista, setVista] = useState(1);
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
    <>
      {vista === 1 && (
        <div className="h-screen">
          <video
            autoPlay
            muted
            loop
            className="absolute object-cover w-full h-full -z-40"
          >
            <source src={fondo} type="video/mp4"></source>
            Your browser does not support HTML video.
          </video>
          <motion.div
            className=" rounded-full p-2 m-10 absolute z-30 bg-yellow-800 border-b-4 border-b-yellow-900 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setInstructions(true)}
          >
            <InformationCircleIcon className="h-6 w-6 text-white" />
          </motion.div>
          <div className="h-screen absolute z-10">
            <div className="flex flex-col justify-center items-center px-52 mt-5">
              <motion.img
                initial={{ y: -5 }}
                animate={{ y: 5 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                src={titulo}
                alt="titulo"
              />
            </div>
          </div>
          <div className="flex justify-center items-end pb-20 absolute z-20 h-screen w-full">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => setVista(2)}
              className="items-center flex bg-yellow-800 px-6 py-3 rounded-xl border-b-8 border-b-yellow-900 cursor-pointer"
            >
              <PlayCircleIcon className="h-7 w-7 text-white" />
              <p className="font-bold text-3xl ml-2 text-white">Sigamos</p>
            </motion.div>
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
      )}
      {vista === 2 && <div>2</div>}
    </>
  );
};

export default MainMenu;
