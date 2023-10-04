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
        'https://fandbrecipes.com/wp-content/uploads/2021/08/Natural-Spice-Buying-Guide.png',
      description: 'From Rajouri',
      productName: 'Spices',
    },
    {
      image:
        'https://tiimg.tistatic.com/fp/1/006/274/kashmiri-carpets-999.jpg',
      description: 'from Baramulla',
      productName: 'Handwoven Shawls',
    },
    {
        image:
          'https://kashmirlife.net/wp-content/uploads/2021/03/wood-carver-2-2.jpg',
        description: ' from Kathua',
        productName: 'Wooden Artistry',
      },
    {
      image: 
        'https://www.rtvonline.com/english/assets/news_photos/2022/01/16/image-7865-1642344128.jpg',
      description: 'from Kupwara',
      productName: 'Walnuts',
    },
    {
      image:
        'https://www.beeculture.com/wp-content/uploads/2018/03/auto_mjalt1437484705.png',
      description: 'from Udhampur',
      productName: 'Honey',
    },
    {
        image:
          'https://4.bp.blogspot.com/-dgBI2Xt6Wrs/W32NoaEkYAI/AAAAAAAAwsU/l-YUPQsRj7UeCZCdNGQ1wyhvS1yw-LbsACLcBGAs/s640/jam.jpg',
        description: 'from Pahalgam',
        productName: 'Pickles and Jams',
      },
      {
        image:
          'https://5.imimg.com/data5/SELLER/Default/2022/3/NJ/FB/HD/148554576/plain-silk-fabric.jpg',
        description: 'from Pampore',
        productName: 'Silk Clothing',
      },
      {
        image:
          'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/06/08/Pictures/hindustan-commonly-traditional-displays-kashmiri-shopkeeper-kashmiri_2510c672-4c4d-11e7-88f6-6a3facb665a5.jpg',
        description: 'from Srinagar',
        productName: 'Designer Glassware',
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
            className=" w- h-[300px] shadow-xl shadow-black rounded-xl mb-10 overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.productName}
              className="rounded-xl h-full w-full object-cover cursor-pointer"
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
