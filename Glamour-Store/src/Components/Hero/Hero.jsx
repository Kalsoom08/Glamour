import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import One from "../../assets/Home/Image.png";
import Second from "../../assets/Home/Image6.png";
import Third from "../../assets/Home/Image4.png";
import Fifth from "../../assets/Home/Image5.png";
const Hero = () => {
  const slides = [One,  Third, Fifth];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[80vh] md:min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-12 bg-gradient-to-br from-amber-50 to-[#FFE597] overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        className="text-center lg:text-left max-w-2xl z-10 py-8 lg:py-0"
      >
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 md:mb-6">
          Welcome to Glamour
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-0 md:mb-8 text-gray-700">
          Experience the best visuals and immersive transitions. Explore the beauty we create just for you.
        </p>
      </motion.div>

      
      <div className="relative mt-[-30px]  w-full lg:w-[60%] h-[60vh] md:h-[60vh] lg:h-[70vh]">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentIndex && (
              <motion.img
                key={index}
                src={slide}
                className="absolute inset-0 w-full h-full object-contain border-none"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.22, 1, 0.36, 1],
                  scale: { type: "spring", damping: 12, stiffness: 100 }
                }}
              />
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;