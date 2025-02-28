"use client";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useState } from "react";
import Loader from "./Loader"; // Import the Loader component

const ShoeModel = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ x: "50vw", y: "-50vh", opacity: 0 }} // Start from top-left (including background)
      animate={isLoading ? {} : { x: 0, y: 0, opacity: 1 }} // Animate only after model loads
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex items-center justify-center bg-[#0A0F1D] h-screen w-screen"
    >
      {/* Loader appears first, then fades out smoothly */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={isLoading ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute"
      >
        <Loader />
      </motion.div>

      {/* Spline Canvas Wrapper (only appears after loading) */}
      <div
        className="w-[600px] h-[600px]"
        style={{ display: isLoading ? "none" : "block" }}
      >
        <Spline
          scene="https://prod.spline.design/1klwRKXrk-PUr506/scene.splinecode"
          onLoad={() => setIsLoading(false)} // Hide loader when model is ready
        />
      </div>
    </motion.div>
  );
};

export default ShoeModel;
