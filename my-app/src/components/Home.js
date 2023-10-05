import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import Category from './Category';
import Popular from './Popular';
import Cursor from './Cursor';
import Search from './search';
import Info from './About/Info';
import Footer from '../components/Footer.jsx';
import Review from './Review';

function Home() {
  const windows = window.innerWidth > 786;

  return (
     <div>
    {/* //   <Chat />
    //   <ChatBot /> */}
      <Cursor/>
        <Search/>
        <Carousel/>

 <Popular/>

<Info/>



<Review/>


    </div>
  );
}

export default Home

