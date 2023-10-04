import React, { useEffect ,useState} from 'react'
import Carousel from './Carousel'
import Category from './Category'
import Popular from './Popular'
import Cursor from './Cursor'
import Search from './search'

function Home() {
  

    const windows=window.innerWidth>786;

  return (
    <div>
        <Cursor/>
        <Search/>
        <Carousel/>

       

<Popular/>





<Category/>
    </div>
  )
}

export default Home