import React from "react";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";


const Podcasts = () => {
    const isPresent = useIsPresent();
    const navigate = useNavigate();
  return (
    <AnimatePresence >
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ backgroundColor: "#F9F9F9", opacity: 1 }}
        // exit={{ opacity: 0 }}
        className="h-screen"
      >
        aa
        <button onClick={() => navigate("/")}>volver</button>
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{
            scaleX: 1,
            transition: { duration: 0.5, ease: "circIn" },
          }}
          style={{ originX: isPresent ? 1: 0 }}
          className="bg-yellow-500 fixed top-0 left-0 right-0 bottom-0"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Podcasts;
