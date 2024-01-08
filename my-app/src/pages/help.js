import React, { useEffect } from 'react'
import Orgnavbar from '../components/Orgnavbar'

const Help = ({n}) => {
    useEffect(()=>{

        n(false);
        
        return ()=>{
            n(true);
        }
            },[])
    const API = [
        {
          "name": "community hall",
          "budget_range": "Low",
          "img": "localhall.webp",
          "description": "Affordable options for small to medium-sized events like local festivals and community gatherings.",
          "contact": "9891231212"
        },
        {
          "name": "Municipal Halls",
          "budget_range": "Low",
          "img": "muncipal.wbep",
          "description": "Budget-friendly event spaces in parks and community centers for public events and cultural functions.",
          "contact": "9891231212"
        },
        {
          "name": "st domnic school ground",
          "budget_range": "Low",
          "img": "schoolground.avif",
          "description": "Cost-effective venues suitable for seminars, workshops, and cultural events.",
          "contact": "9891231212"
        },
        {
          "name": "juhu Beachside",
          "budget_range": "Low",
          "img": "beach.jpeg",
          "description": "Ideal for low-budget beach parties and small gatherings at places like Juhu Beach.",
          "contact": "9891231212"
        },
        {
          "name": "HR resort",
          "budget_range": "Mid",
          "img": "resort.jpeg",
          "description": "A range of hotels and resorts with varying price points, suitable for medium-sized events.",
          "contact": "9891231212"
        },
     
      
    {
        "name": "Clubhouses and Sports Clubs",
        "budget_range": "Mid",
        "img": "localhall.webp",
        "description": "Moderately priced venues for weddings, parties, and corporate events.",
        "contact": "9891231212"
    },
    {
        "name": "Function Halls",
        "budget_range": "Mid",
        "img": "localhall.webp",
        "description": "Standalone function halls and event venues that accommodate medium to large gatherings.",
        "contact": "9891231212"
    },
    {
        "name": "Luxury Hotels",
        "budget_range": "High",
        "img": "localhall.webp",
        "description": "Upscale event spaces in prime areas of Mumbai for weddings, conferences, and more.",
        "contact": "9891231212"
    },
    {
        "name": "Convention Centers",
        "budget_range": "High",
        "img": "localhall.webp",
        "description": "High-end venues like the Bombay Exhibition Centre and Nesco Center in Goregaon.",
        "contact": "9891231212"
    },
    {
        "name": "Heritage Properties",
        "budget_range": "High",
        "img": "localhall.webp",
        "description": "Grand settings for extravagant weddings and high-end corporate events.",
        "contact": "9891231212"
    },
    {
        "name": "Exclusive Beach Resorts",
        "budget_range": "High",
        "img": "localhall.webp",
        "description": "Beachfront resorts in Alibaug and nearby coastal areas for exclusive upscale events.",
        "contact": "9891231212"

    }
];

  return (
    <>
    <Orgnavbar/>
    <div className="flex flex-wrap">
      {API.map((item, index) => (
        <div key={index} className="w-1/4 p-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-500">{item.budget_range} Budget</p>

              <p className="text-sm mt-2">{item.description}</p>
              <p className="text-sm mt-2">{item.contact}</p>
              
            </div>
          </div>
        </div>
      ))}
    </div>

      
    </>
  )
}

export default Help
