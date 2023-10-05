import React, { useEffect, useState } from 'react'
import {
    faGreaterThan,
    faLessThan,
    faStar,
  } from "@fortawesome/free-solid-svg-icons";

  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
  const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const slides = [
      {
        image:
          "https://media.istockphoto.com/id/1321848051/photo/portrait-of-young-brunette-girl-in-denim-shirt.jpg?s=612x612&w=0&k=20&c=OFGeG8Tk2DoEHJoyxznreU7YrhavH5VcMsGfN7-KfjU=",
        person: "Priya Sharma",
        heading: "Impressed Beyond Words",
        description: "I can't express how impressed I am with the unique products I found on your platform. It's not just about the beautiful artistry; it's also about the positive impact on the local community. Knowing that my purchase helps create jobs and supports the artisans and their families in Jammu and Kashmir makes each item even more special. I'll definitely be a repeat customer",
        icons: [faStar, faStar, faStar, faStar,faStar],
      },
      {
        image:
          "https://img.freepik.com/premium-photo/young-smart-indian-businessman-smiling-face-standing-blur-background-modern-office-building-generative-ai-aig20_31965-147758.jpg",
        person: "Rajiv Mehta",
        heading: "Fantastic Initiative",
        description: "What an amazing initiative! I received my order promptly, and the quality of the products exceeded my expectations. It's heartening to see a platform that not only offers fantastic handcrafted goods but also contributes to the betterment of the local economy and community. Keep up the excellent work, and I'll be spreading the word about your wonderful service!",
        icons: [faStar,faStar,faStar,faStar],
      },
      {
        image:
          "https://us.123rf.com/450wm/pitinan/pitinan2305/pitinan230529358/204777723-young-smart-indian-businesswoman-smiling-face-standing-in-blur-background-of-busy-office.jpg?ver=6",
        person: "Ananya Singh",
        heading: "Fantastic Initiative",
        description: "What an amazing initiative! I received my order promptly, and the quality of the products exceeded my expectations. It's heartening to see a platform that not only offers fantastic handcrafted goods but also contributes to the betterment of the local economy and community. Keep up the excellent work, and I'll be spreading the word about your wonderful service!",
        icons: [faStar, faStar,faStar,faStar],
      },
    ];
  
    const handlePrevClick = () => {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      setCurrentIndex(prevIndex);
    };
  
    const handleNextClick = () => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        handleNextClick();
      }, 7000); // Change slides every 7 seconds (adjust as needed)
      return () => {
        clearInterval(interval);
      };
    }, [currentIndex]);
  
    return (
      <div
        id="carouselExampleCrossfade"
        className="relative my-10 w-[1200px] mx-auto drop-shadow-2xl shadow-lg rounded-xl shadow-black"
        data-te-carousel-init
        data-te-ride="carousel"
      >
        {/* Previous Button */}
        <button
          onClick={handlePrevClick}
          className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white text-black font-extrabold text-3xl px-4 py-2 rounded-full z-10 drop-shadow-2xl shadow-sm shadow-black"
        >
          <FontAwesomeIcon icon={faLessThan} />
        </button>
  
        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white text-black font-extrabold text-3xl px-4 py-2 rounded-full z-10 drop-shadow-2xl shadow-sm shadow-black"
        >
          <FontAwesomeIcon icon={faGreaterThan} />
        </button>
  
        {/* Carousel items */}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] h-[450px] my-10">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`relative float-left -mr-[100%] w-full opacity-0 transition-opacity duration-[300ms] ease-in-out motion-reduce:transition-none ${
                index === currentIndex ? "opacity-100 " : ""
              }`}
              data-te-carousel-fade
              data-te-carousel-item
              data-te-carousel-active={index === currentIndex}
            >
              <img
                src={slide.image}
                className="block w-[40%] h-[400px]  float-right my-6 mx-4"
                alt={`Slide ${index + 1}`}
              />
              <h1 className="text-3xl font-semibold text-center italic my-9">
                By ~ {slide.person}
              </h1>
              <h1 className="text-center font-extrabold text-4xl mb-10">
                "{slide.heading}"
              </h1>
              <p className="text-center mt-12 mb-5 text-lg font-medium mx-10">
                {slide.description}
              </p>
              <div className="text-center">
                {slide.icons.map((icon, iconIndex) => (
                  <FontAwesomeIcon
                    key={iconIndex}
                    icon={icon}
                    className="text-3xl text-yellow-500"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Review;
