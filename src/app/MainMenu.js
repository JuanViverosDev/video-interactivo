import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Dialog } from "@mui/material";
import titulo from "../assets/titulo.png";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import fondo from "../assets/BgMain.mp4";
import bg2 from "../assets/bg2.mp4";
import podcast1 from "../assets/podcasts/Podcast_Viveross_Escobar.mp4";
import podcast2 from "../assets/podcasts/Podcast_Fernandez_Nicolas.mp4";
import podcast3 from "../assets/podcasts/PODCASTLAURA.mp4";
import podcast4 from "../assets/podcasts/Podcast_Fernandez_Nicolas.mp4";

const MainMenu = () => {
  const [vista, setVista] = useState(1);
  const infoPodcast1 = useRef();
  console.log(infoPodcast1);
  const [infoPodcast, setInfoPodcast] = useState([
    { title: "De una jaula a la selva a la libertad reparadora", description: "Description 1", cover: "podcast1" },
    { title: "Podcast 2", description: "Description 2", cover: "podcast2" },
    { title: "Podcast 3", description: "Description 3", cover: "podcast3" },
    { title: "Podcast 4", description: "Description 4", cover: "podcast4" },
  ]);
  const [instructions, setInstructions] = useState(false);
  var [podcast, setPodcast] = useState(1);
  const [backgroundPodcats, setBackgroundPodcats] = useState(bg2);

  const gestionVideo = (e) => {
    if (e.target.currentTime >= e.target.duration - 10) {
    }
    if(e.target.currentTime == e.target.duration){
      cambiarVideo();
    }
  };

  const cambiarVideo = () => {
    if (vista == 7) {
      setVista(2);
    }
    else{
      setVista(vista + 1);
    }
  };


  return (
    <>
      <AnimatePresence>
        {vista === 1 && (
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 1 }}
            className="h-screen"
          >
            <video
              autoPlay
              muted
              loop
              className="absolute object-cover w-full h-full -z-40"
            >
              <source src={fondo} type="video/mp4"></source>
              Your browser does not support HTML video.
            </video>
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
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="flex justify-center items-end pb-20 absolute z-20 h-screen w-full"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setVista(2)}
                className="items-center flex bg-gray-800 border-b-gray-300 px-6 py-3 rounded-xl border-b-8 cursor-pointer"
              >
                <PlayCircleIcon className="h-7 w-7 text-white" />
                <p className="font-bold text-3xl ml-2 text-white">Sigamos</p>
              </motion.div>
              <motion.div
                className="ml-4 items-center flex bg-gray-800 border-b-gray-300 px-6 py-3 rounded-xl border-b-8 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setInstructions(true)}
              >
                <InformationCircleIcon className="h-7 w-7 text-white" />
                <p className="font-bold text-3xl ml-2 text-white">
                  Instrucciones
                </p>
              </motion.div>
            </motion.div>
            {instructions && (
              <Dialog
                open={instructions}
                onClose={() => setInstructions(false)}
              >
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="flex items-center justify-between w-full">
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <ChevronLeftIcon className="w-5 h-5 text-gray-500" />
                    </button>
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="text-2xl font-bold text-gray-700">
                        {infoPodcast[podcast - 1].title}
                      </h1>
                      <p className="text-sm text-gray-500">
                        {infoPodcast[podcast - 1].description}
                      </p>
                    </div>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </Dialog>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false} mode="wait">
        {vista === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 1, delay: 1 }}
            className="h-screen"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute z-10 mt-10 ml-10"
              onClick={() => setVista(1)}
            >
              <ArrowLeftIcon className="h-10 w-10 text-white cursor-pointer" />
            </motion.div>
            <motion.div>
              <div className="h-screen grid grid-cols-4">
                {/* <motion.div>
                    <h1 className="text-5xl font-black text-white mt-10">
                      Selecciona un podcast
                    </h1>
                  </motion.div>
                  <motion.div>
                    <p className="text-white">
                      ¡El que mas te llame la atención!
                    </p>
                  </motion.div> */}
                {infoPodcast.map((podcast, i) => (
                  <div onMouseOver={() => console.log(podcast)}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setVista(i + 3)}
                      className={`flex items-center h-screen justify-center cursor-pointer bg-${podcast.cover}`}
                    >
                      <PlayCircleIcon className="h-14 w-14 text-white mr-2" />
                      <div>
                        <p className="font-bold text-3xl ml-2 text-white">
                          {podcast.title}
                        </p>

                        <p className="text-xl ml-2 text-white">
                          {podcast.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {vista === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col justify-center items-center h-screen p-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute z-10 mt-10 ml-10 top-0 left-0"
              onClick={() => setVista(2)}
            >
              <ArrowLeftIcon className="h-10 w-10 p-2 bg-white rounded-full cursor-pointer" />
            </motion.div>
            <video
              autoPlay
              controls
              className="w-full h-full"
              ref={infoPodcast1}
              onTimeUpdate={(e) => gestionVideo(e)}
            >
              <source src={podcast1} type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainMenu;
