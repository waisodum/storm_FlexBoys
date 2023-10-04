import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"

const Popular = () => {
  const [scroll, setscroll] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 50) {
            setscroll(1); // Change the background color to black
          } else {
            setscroll(0); // Change it back to transparent
          }
        };
  
  
       window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, [])
  const cardData = [
    {
      image:
      '/imgs/happybday.jpeg',
      description: '',
      productName: 'Birthday',
    },
    {
      image:
          '/imgs/indian.png',
          description: '',
        productName: 'Wedding',
      },
      {
        image:
          '/imgs/private-party-(1).png',
        description: '',
        productName: 'Private Parties',
      },
      {
      image: 
        '/imgs/music.jpeg',
      description: '',
      productName: 'Music Fest',
    },
    {
      image:
        '/imgs/art.png',
      description: '',
      productName: 'Art Exhibition',
    },
    {
        image:"/imgs/corp.jpeg",
        description: '',
        productName: 'Corporate Event',
      },
      {
        image:
          '/imgs/baby.jpeg',
        description: '',
        productName: 'Baby Shower',
      },
      {
        image:
          '/imgs/sports.jpg',
        description: '',
        productName: 'Sports',
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4); // Initially set to 4 for full screen

  useEffect(() => {
    const handleResize = () => {
      // Determine the number of visible cards based on screen width
      if (window.innerWidth < 768) {
        setVisibleCards(1); // Show 1 card when screen width is less than 468px
      } else {
        setVisibleCards(4); // Show 4 cards on larger screens
      }
    };

    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Initialize the number of visible cards
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleCards) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? cardData.length - visibleCards
        : prevIndex - visibleCards
    );
  };

  return (
    <div className="popular flex justify-center items-center space-x-4 my-10 text-center w-full">
      <button
        onClick={handlePrev}
        className="carousel-button shadow-2xl shadow-black drop-shadow-2xl rounded-full px-5 py-3 font-extrabold z-50 mb-10 ml-[30px]"
      >
        &lt;
      </button>
      <div className="flex  space-x-4">
        {cardData.slice(currentIndex, currentIndex + visibleCards).map((card, index) => (
           <motion.div
           animate={{ y:scroll?index%2?scroll:scroll+2*index:null,
            opacity:scroll?1:0
           }}
       
           initial={{y:"-100vh",
          opacity:0 }}
           transition={{ duration: 1+0.5*index }}
         >
          <div
            key={index}
            className=" w- h-[300px] shadow-xl shadow-black hover:scale-110  rounded-xl mb-10 overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.productName}
              className="rounded-xl   h-full w-60 object-cover cursor-pointer"
            />
            <h1 className="text-white absolute z-30 -mt-[220px] ml-4 text-center justify-center font-bold text-3xl border-sm border-black overflow-hidden w-44" style={{ textShadow: '2px 2px #000' }}>{card.productName}</h1>
            <p className="text-white absolute z-30 -mt-[130px] text-center font-medium text-md border-sm border-black overflow-hidden w-52" style={{ textShadow: '2px 2px #000' }}>{card.description}</p>
          </div>
          </motion.div>

        ))}
      </div>
      <button
        onClick={handleNext}
        className="carousel-button shadow-2xl shadow-black drop-shadow-2xl rounded-full px-5 py-3 font-extrabold mb-10 mr-12"
      >
        &gt;
      </button>
    </div>
    
  );
};

export default Popular;
