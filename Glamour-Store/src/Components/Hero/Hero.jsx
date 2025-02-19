import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import One from "../../assets/Home/Image.png";
import Second from "../../assets/Home/Image2.png";
import Third from "../../assets/Home/Image3.png";
import Fifth from "../../assets/Home/Image5.png";

const Hero = () => {
  const slides = [One, Second, Third, Fifth];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[70vh] md:h-[90vh] bg-amber-50 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 overflow-hidden">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-lg z-10 px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Our World</h1>
        <p className="text-md md:text-lg mb-6">
          Experience the best visuals and immersive transitions. Explore the beauty we create just for you.
        </p>
      </motion.div>

      <div className="relative w-full md:w-[45%] h-[50vh] md:h-[80vh] flex justify-center md:justify-end items-center overflow-hidden">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentIndex && (
              <motion.img
                key={index}
                src={slide}
                className="w-full h-full object-cover rounded-lg absolute"
                initial={{ x: "100%", opacity: 0, scale: 1.1 }}
                animate={{ x: "0%", opacity: 1, scale: 1 }}
                exit={{ x: "-50%", opacity: 0, scale: 0.9 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
