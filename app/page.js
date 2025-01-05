
// "use client"
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import starImg from "../assets/star.png";

// const WelcomeScreen = () => {
//   const [stars, setStars] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     // Generate random positions for the stars only on the client side to avoid hydration errors
//     const generatedStars = Array.from({ length: 50 }).map(() => ({
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       duration: Math.random() * 5 + 3, // Random duration for animation
//     }));
//     setStars(generatedStars);
//   }, []);

//   return (
//     <div className="relative w-full h-screen bg-black overflow-hidden flex justify-center items-center">
//       {/* Falling Stars */}
//       {stars.map((star, index) => (
//         <motion.div
//           key={index}
//           className="absolute"
//           style={{
//             left: star.left,
//             top: star.top,
//           }}
//           animate={{
//             y: ['-100%', '100%'],
//             opacity: [0, 1, 0],
//           }}
//           transition={{
//             duration: star.duration,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//         >
//           <Image src={starImg} alt="star" width={24} height={24} />
//         </motion.div>
//       ))}

//       {/* Start Button */}
//       <button
//         onClick={() => router.push('/birthday')} // Navigate to the main birthday page
//         className="bg-yellow-500 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition-transform duration-300 text-xl sm:text-2xl md:text-3xl"
//       >
//         Start
//       </button>
//     </div>
//   );
// };

// export default WelcomeScreen;



"use client"
import React, { useEffect, useState } from 'react';
import balon from "../assets/rb_27086.png"
import Image from 'next/image';
// import balloonImg from '../../assets/Balloon-border.png';
import cakeImg from '../assets/cake.gif';
import birthdaySong from '../public/birthday-song.mp3';
import star from "../assets/star.png"
import img1 from "../assets/WhatsApp Image 2025-01-03 at 22.30.23_690ddd2a.jpg"
import img2 from "../assets/ven2.jpg"
import img3 from "../assets/ven3.jpg"
import img4 from "../assets/ven4.jpg"
import img5 from "../assets/ven5.jpg"
import img6 from "../assets/ven6.jpg"
import starImg from "../assets/star.png";
// import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import Image from "next/image";
import emailjs from "emailjs-com";
// import birthdaySong from "../../public/birthday-song.mp3"
import Howl from 'react-howler';
const useScrollAnimation = (threshold = 0.5) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold });
  return { ref, inView };
};
const HeroSection = () => {
  const { ref, inView } = useScrollAnimation();
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setIsClient(true); // Ensures the code below runs only on the client
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  // Balloon animation variants with continuous falling effect
  const balloonVariants = {
    floating: {
      y: ['-100%', '100%'], // Balloons will move from top to bottom
      opacity: [0, 1, 0],
      transition: {
        y: { repeat: Infinity, duration: 5, ease: 'linear' },
        opacity: { repeat: Infinity, duration: 3, ease: 'ease-in-out' },
        delay: [0, 1, 2, 3, 4], // Delay for different start times
        repeatDelay: 1, // Delay before restarting
      },
    },
  };
  const [balloons, setBalloons] = useState([]);
  
    useEffect(() => {
        // Generate random positions for the stars only on the client side to avoid hydration errors
        const generatedBallons = Array.from({ length: 50 }).map(() => ({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          duration: Math.random() * 5 + 3, // Random duration for animation
        }));
        setBalloons(generatedBallons);
      }, []);
  
    
    const typewriterText = [
        'Happy Birthday Venerita! 🎉',
        'Wish You a Wonderful Day',
        'Filled with joy and happiness.',
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
      const [displayedText, setDisplayedText] = useState('');
      const [typing, setTyping] = useState(true);
    // const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        // Typing effect logic
        let timeout;
        if (typing) {
          if (displayedText.length < typewriterText[currentIndex].length) {
            timeout = setTimeout(() => {
              setDisplayedText(
                typewriterText[currentIndex].slice(0, displayedText.length + 1)
              );
            }, 100); // Adjust typing speed here
          } else {
            setTyping(false);
            timeout = setTimeout(() => setTyping(true), 1000); // Pause before wiping
          }
        } else {
          if (displayedText.length > 0) {
            timeout = setTimeout(() => {
              setDisplayedText(
                displayedText.slice(0, displayedText.length - 1)
              );
            }, 50); // Adjust wiping speed here
          } else {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % typewriterText.length);
            setTyping(true);
          }
        }
        return () => clearTimeout(timeout);
      }, [displayedText, typing, typewriterText, currentIndex]);

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden"
      ref={ref}
    >
    

      {/* Only render the balloons on the client */}
      {isClient && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          variants={balloonVariants}
          animate="floating"
        >
            {balloons.map((star, index) => (
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
                      <Image src={balon} alt="star" width={100} height={100} />
                    </motion.div>
                  ))}
          
        
        </motion.div>
      )}

      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
      <div className="text-white text-center md:text-left flex flex-col items-center">

         {/* Background audio */}
         <Howl src={birthdaySong} playing={isPlaying} loop />
         {/* Falling Balloons */}
            {balloons.map((balloon, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: balloon.left,
              top: balloon.top,
            }}
            animate={{
              y: ['-100%', '110%'],
            }}
            transition={{
              duration: balloon.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Image
              src={star}
              alt="balloon"
              width={20} // Size of the balloon image
              height={20} // Size of the balloon image
              style={{opacity:0.5}}
            />
          </motion.div>
        ))}
  
        {/* Cake Image */}
        <motion.div
          className="w-40 h-auto mb-10 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
            <motion.h1
            className="text-4xl mb-5 mt-4 animate-bounce font-bold text-pink-100 uppercase text-shadow-[0px_0px_5px_#fff,_0px_0px_7px_#fff]"
            animate={{
                rotate: [-10, 10], // Simulate the text rotating like a seesaw
                scale: [1, 1.2, 1], // Scale effect (left goes lower, right goes higher)
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Venerita
          </motion.h1>
          <Image
            src={cakeImg}
            alt="cake"
            width={200} // Set width of the cake image
            height={200} // Set height of the cake image
          />
        </motion.div>
  
        {/* Typewriter Effect */}
        <div className="text-center text-white text-3xl font-bold sm:text-4xl md:text-5xl mb-10">
          {/* Typewriter Effect */}
            <motion.div
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
            {displayedText}
            </motion.div>
        
        
        </div>
          
        </div>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={imageVariants}
        >
          <Image
            src={img1}
            alt="Venerita"
            className="w-full mb-3 h-auto max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl rounded-full" // Added rounded-full class
          />
        </motion.div>

        
      </div>
    </motion.section>
  );
};


const AboutSection = () => {
    
    return(

  <section className="py-20 bg-white">
    
    <div className="container mx-auto px-5">
      <motion.h2
    className="text-3xl font-bold text-center text-indigo-600"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Fun Facts About Venerita
      </motion.h2>
      <motion.ul
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <li className="bg-gray-100 p-5 rounded-lg shadow-md text-black">
          A talented dancer who lights up the floor. 💃
        </li>
        <li className="bg-gray-100 p-5 rounded-lg shadow-md text-black">
          Always there to support her friends with a kind heart. 💖
        </li>
        <li className="bg-gray-100 p-5 rounded-lg shadow-md text-black">
          A fashionista who slays every look. 👗
        </li>
        <li className="bg-gray-100 p-5 rounded-lg shadow-md text-black">
          Has a contagious laugh that fills every room. 😂
        </li>
        <li className="bg-gray-100 p-5 rounded-lg shadow-md text-black">
          Loves creating unforgettable memories with loved ones. 🌟
        </li>
      </motion.ul>
    </div>
  </section>
);
}

const CountdownSection = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [showMessage, setShowMessage] = useState(false);
  
    useEffect(() => {
      // Define the target date for this year's birthday in Ohio time
      const targetDate = new Date();
      targetDate.setUTCFullYear(new Date().getUTCFullYear()); // Use current year
      targetDate.setUTCMonth(0); // January (0-indexed)
      targetDate.setUTCDate(5); // 5th day
      targetDate.setUTCHours(5); // 5 AM UTC corresponds to midnight Ohio (EST/EDT)
      targetDate.setUTCMinutes(0);
      targetDate.setUTCSeconds(0);
      targetDate.setUTCMilliseconds(0);
  
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;
  
        if (difference < 0) {
          clearInterval(timer);
          setShowMessage(true); // Show message when countdown ends
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          return;
        }
  
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
        setTimeLeft({ days, hours, minutes, seconds });
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <section className="py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="container mx-auto px-5 text-center">
        {!showMessage ? (
          <>
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Countdown to the Birthday Girl Venerita 🎉
            </motion.h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  className="bg-white text-indigo-600 p-5 rounded-lg shadow-md text-xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="font-bold text-4xl">{value}</p>
                  <p>{unit}</p>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            className="bg-white text-indigo-600 p-10 rounded-lg shadow-md text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <h2 className="text-3xl font-bold text-pink-500 mb-5">A Special Message for You 💖</h2>
            <p className="text-lg leading-relaxed">
              Dear Venerita,  
              Today isn't just another day—it's a celebration of <span className="font-semibold">you</span>, the incredible person who lights up the world with your kindness, your strength, and your beauty.  
              From miles away here in Cameroon, I want you to know that you are deeply loved, cherished, and irreplaceable. You inspire me every single day with your resilience and the way you embrace life with such grace and courage.  
              I am truly blessed to have you in my life, and I hope today showers you with the happiness and love you deserve. Remember, no matter the distance, you’ll always have a friend who holds you close in their heart.  
              Here’s to <span className="font-semibold">you</span> and all the wonderful things you’ll achieve this year.  
              <span className="font-semibold">Happy New Year’s 5th, Venerita. 🌟❤️</span>  
              Always with love, your best friend❤️.
            </p>
          </motion.div>
        )}
        </div>
      </section>
    );
  };

  const venImg = [img1, img2, img3, img4, img5, img6];

  const GallerySection = () => {
    const compliments = [
      "Your smile is the sunshine that brightens even the darkest of days. 🌞😊",
      "You're not just beautiful on the outside, your heart is the most precious thing anyone could ever know. 💫",
      "You are truly one of a kind—there's no one like you, and that’s what makes you so remarkable. 💖",
      "Such beauty and grace, inside and out! 💫",
      "You radiate positivity everywhere you go! ✨",
      "A true inspiration to everyone around you! 🌸",
    ];
  
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleToggleOverlay = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-5">
          <motion.h2
            className="text-3xl font-bold text-center text-pink-500"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Photo Gallery
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {venImg.map((imgSrc, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md group"
                onClick={() => handleToggleOverlay(index)}
                onKeyDown={(e) => e.key === "Enter" && handleToggleOverlay(index)}
                role="button"
                tabIndex={0} // Ensures accessibility for keyboard focus
                initial={{
                  x: index % 2 === 0 ? "-100%" : "100%",
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <Image
                  src={imgSrc}
                  alt={`Venerita ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <motion.div
                  className={`absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center px-4 py-8 transition-opacity duration-300 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 50,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}
                >
                  <p className="text-center text-lg font-semibold">
                    {compliments[index % compliments.length]}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
const WishForm = () => {
  // State to manage form inputs, status, and errors
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // Success or error message
  const [error, setError] = useState({ userName: false, message: false }); // Error state for validation

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are filled
    if (!userName || !message) {
      setError({
        userName: !userName,
        message: !message,
      });
      return; // Prevent form submission if fields are empty
    }
    const template_id = "template_jcgh0wl";
    const user_id = "dL-wkUpufNFvy7dl3";
    const service_id = "service_p20o6io";

    console.log('Service ID:', service_id);
    console.log('User ID:', user_id);
    console.log('Template ID:', template_id);

    const templateParams = {
      user_name: userName,
      to_name: "Venerita",
      message: message,
    };

    // Send email using Email.js
    emailjs
      .send(service_id, template_id, templateParams, user_id)
      .then(
        (response) => {
          setStatus('Your wish has been sent successfully! 💌'); // Success message
          setError({ userName: false, message: false }); // Clear errors if successful
          // Hide the success message after 5 seconds
          setTimeout(() => setStatus(null), 5000);
          setUserName("")
          setMessage("")
        },
        (error) => {
          setStatus('Oops, something went wrong! 😞', error); // Error message
          setError({ userName: false, message: false }); // Clear previous errors
          console.log("error", error)
          // Hide the error message after 5 seconds
          setTimeout(() => setStatus(null), 5000);
          setUserName("")
          setMessage("")
        }
      );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <motion.h2
          className="text-3xl font-bold text-center text-purple-500"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          Send Your Wishes
        </motion.h2>
        <form className="mt-10 bg-gray-100 p-5 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5">
            <input
              type="text"
              name='user_name'
              placeholder="Your Name"
              className={`p-3 rounded border ${error.userName ? 'border-red-500' : 'border-gray-300'} text-black`}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <textarea
              placeholder="Write your wishes here..."
              className={`p-3 rounded border ${error.message ? 'border-red-500' : 'border-gray-300'} text-black`}
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="bg-indigo-500 text-white p-3 rounded shadow-md hover:bg-indigo-600">
              Submit
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status && (
          <motion.div
            className={`mt-5 text-center p-3 rounded ${status.includes('successfully') ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {status}
          </motion.div>
        )}
      </div>
    </section>
  );
};

const LongWishSection = () => {
  const { ref, inView } = useScrollAnimation();
  const hVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.7 } },
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
    <div className="container mx-auto px-5">
      <motion.h2
        className="text-4xl font-extrabold text-center text-gray-100"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={hVariants}
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        A Heartfelt Birthday Wish 💖
      </motion.h2>
      <motion.p
        className="mt-10 text-xl leading-relaxed max-w-3xl mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
        style={{ fontFamily: "Quicksand, sans-serif" }}
      >
        Dearest Venerita, on this special day, I want to express just how much
        you mean to all of us. Your unwavering kindness, vibrant energy, and
        beautiful soul brighten the lives of everyone lucky enough to know you. 
        You are a true gem in this world, and I hope this birthday is as 
        wonderful and special as you are. 💕 May your days ahead be filled with 
        laughter, love, and countless unforgettable moments. 💖 Here's to you, 
        today and always. Happy Birthday, Venerita! 🎂✨💫
      </motion.p>
    </div>
  </section>
);
}
const Footer = () => (
  <footer className="py-10 bg-indigo-600 text-white text-center">
    <p>&copy; 2025 - Created with ❤️ for Venerita</p>
  </footer>
);

export default function Home() {
    const [showWelcome, setShowWelcome] = useState(true); // State to toggle WelcomeScreen visibility
    const [stars, setStars] = useState([]);
  
    useEffect(() => {
      // Generate random positions for the stars
      const generatedStars = Array.from({ length: 50 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 5 + 3, // Random duration for animation
      }));
      setStars(generatedStars);
    }, []);
  
    const handleStart = () => {
      setShowWelcome(false); // Hide WelcomeScreen and show the homepage sections
    };
  
    if (showWelcome) {
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
                y: ["-100%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Image src={starImg} alt="star" width={24} height={24} />
            </motion.div>
          ))}
  
          {/* Start Button */}
          <button
            onClick={handleStart} // Call handleStart to reveal the homepage
            className="bg-yellow-500 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition-transform duration-300 text-xl sm:text-2xl md:text-3xl"
          >
            Start
          </button>
        </div>
      );
    }
  
   // Homepage sections
return (
  <div className="overflow-x-hidden w-full">
    <div className="w-full ">
      <HeroSection />
      <AboutSection />
      <CountdownSection />
      <GallerySection />
      <LongWishSection />
      <WishForm />
      <Footer />
    </div>
  </div>
);
  }