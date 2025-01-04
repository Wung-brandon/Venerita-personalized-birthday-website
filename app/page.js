




"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import starImg from "../assets/star.png";

const WelcomeScreen = () => {
  const [stars, setStars] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Generate random positions for the stars only on the client side to avoid hydration errors
    const generatedStars = Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 3, // Random duration for animation
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex justify-center items-center">
      {/* Falling Stars */}
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: star.left,
            top: star.top,
          }}
          animate={{
            y: ['-100%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Image src={starImg} alt="star" width={24} height={24} />
        </motion.div>
      ))}

      {/* Start Button */}
      <button
        onClick={() => router.push('/birthday')} // Navigate to the main birthday page
        className="bg-yellow-500 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition-transform duration-300 text-xl sm:text-2xl md:text-3xl"
      >
        Start
      </button>
    </div>
  );
};

export default WelcomeScreen;
