"use client";

import img1 from "../assets/WhatsApp Image 2025-01-03 at 22.30.23_690ddd2a.jpg"
import img2 from "../assets/ven2.jpg"
import img3 from "../assets/ven3.jpg"
import img4 from "../assets/ven4.jpg"
import img5 from "../assets/ven5.jpg"
import img6 from "../assets/ven6.jpg"
import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

const useScrollAnimation = (threshold = 0.5) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold });
  return { ref, inView };
};
const HeroSection = () => {
  const { ref, inView } = useScrollAnimation();
  const [isClient, setIsClient] = useState(false);

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
          {/* Multiple scattered and larger balloons */}
          {Array.from({ length: 30 }).map((_, index) => (
            <motion.div
              key={index}
              className={`absolute rounded-full bg-${['red-500', 'yellow-400', 'blue-500', 'green-500', 'purple-700'][index % 5]}`}
              style={{
                width: `${Math.random() * 30 + 20}px`, // Random width between 20px to 50px
                height: `${Math.random() * 30 + 20}px`, // Random height between 20px to 50px
                left: `${Math.random() * 100}%`, // Random position horizontally
                top: `${Math.random() * 50}%`, // Random start position vertically
              }}
              animate={{
                y: ['-100%', '100%'],
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`], // Random horizontal path
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 5 + 5, // Random duration for different speeds
                ease: 'linear',
              }}
            ></motion.div>
          ))}
        </motion.div>
      )}

      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-20">
      <div className="text-white text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-yellow-100"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            Happy Birthday, Venerita! 🎉
          </motion.h1>
          <motion.p
            className="text-lg mt-5 text-yellow-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Here's to celebrating the amazing person you are. You light up the world with your kindness and joy!
          </motion.p>
          <motion.button
            className="mt-8 bg-yellow-500 text-white py-2 px-5 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Celebrate With Us!
          </motion.button>
        </div>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={imageVariants}
        >
          <Image
            src={img1}
            alt="Venerita"
            className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl rounded-full" // Added rounded-full class
          />
        </motion.div>

        
      </div>
    </motion.section>
  );
};

const AboutSection = () => (
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

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-01-05T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

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
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Countdown to Next Birthday
        </motion.h2>
        <div className="mt-10 flex justify-center gap-5">
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
      </div>
    </section>
  );
};

const venImg = [img1, img2, img3, img4, img5, img6]
const GallerySection = () => {
  const compliments = [
    "Your smile is the sunshine that brightens even the darkest of days. 🌞😊",
    "You're not just beautiful on the outside, your heart is the most precious thing anyone could ever know. 💫",
    "You are truly one of a kind—there's no one like you, and that’s what makes you so remarkable. 💖",
    "Such beauty and grace, inside and out! 💫",
    "You radiate positivity everywhere you go! ✨",
    "A true inspiration to everyone around you! 🌸",
  ];

  return (
    <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-5">
      <motion.h2
        className="text-3xl font-bold text-center text-pink-500"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Photo Gallery
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {/* Replace with actual images */}
        {venImg.map((imgSrc, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={imgSrc}
              alt={`Venerita ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center px-4 py-8 opacity-0"
              initial={{ opacity: 0, y: 500 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 25 }}
            >
              <p className="text-center text-lg font-semibold">{compliments[index % compliments.length]}</p>
            </motion.div>
          </div>
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
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const user_id = process.env.NEXT_PUBLIC_USER_ID;
    const service_id = process.env.NEXT_PUBLIC_SERVICE_ID;

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
        A Long Heartfelt Birthday Wish 💖
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
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CountdownSection />
      <GallerySection />
      <LongWishSection />
      <WishForm />
      <Footer />
    </div>
  );
}
