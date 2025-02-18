import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import One from '../../assets/Image.png';
import Second from '../../assets/Image2.png';
import Third from '../../assets/Image3.png';
import Fourth from '../../assets/Image.png';
import Fifth from '../../assets/Image.png';

const Hero = () => {
  const slides = [One, Second, Third, Fourth, Fifth];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[300px] bg-amber-300 flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex} 
          src={slides[currentIndex]}
          className="w-full h-full object-cover absolute"
          initial={{ x: "100%", opacity: 0.8 }} 
          animate={{ x: "0%", opacity: 1 }} 
          exit={{ x: "-100%", opacity: 0.8 }} 
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Hero;
