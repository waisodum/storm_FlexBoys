import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Cursor = () => {
  useEffect(() => {
    const options = {
      strings: ['Birthday', 'Aniversary', 'Wedding', 'Festival'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed('.auto-type', options);

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="content">
    <h1 className='text-white mt-10 absolute z-40 ml-44 mt-52 text-[70px] font-bold' style={{ textShadow: '2px 2px #000' }}>
     We will help you organise <br/> <span className="auto-type"></span>
     </h1>
  </div>
  
  );
};

export default Cursor;
