import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Card from './Card';
function Events({u}) {
    const { eventName } = useParams();
// useEffect(() => {
//   fetch('http://localhost:80/Api')

//   return () => {
//     second
//   }
// }, [third])

    const data={
        "categories": [
          {
            "id": 1,
            "name": "Birthday Party",
            "event": "Birthday Party",
            "organizerName": "John Doe",
            

          },
          {
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },{
            "id": 2,
            "name": "Wedding",
            "event": "Wedding",
            "image":"/imgs/indian.png",
            "organizerName": "Jane Smith"
          },
          {
            "id": 3,
            "name": "Anniversary Celebration",
            "event": "Anniversary Celebration",
            "organizerName": "Alice Johnson"
          },
          {
            "id": 4,
            "name": "Corporate Event",
            "event": "Corporate Event",
            "organizerName": "John Doe"
          },
          {
            "id": 5,
            "name": "Holiday Celebration",
            "event": "Holiday Celebration",
            "organizerName": "Jane Smith"
          },
          {
            "id": 6,
            "name": "Charity Fundraiser",
            "event": "Charity Fundraiser",
            "organizerName": "Alice Johnson"
          },
          {
            "id": 7,
            "name": "Concert or Music Event",
            "event": "Concert or Music Event",
            "organizerName": "John Doe"
          },
          {
            "id": 8,
            "name": "Sports Event",
            "event": "Sports Event",
            "organizerName": "Jane Smith"
          },
          {
            "id": 9,
            "name": "Exhibition or Trade Show",
            "event": "Exhibition or Trade Show",
            "organizerName": "Alice Johnson"
          },
          {
            "id": 10,
            "name": "Cultural Festival",
            "event": "Cultural Festival",
            "organizerName": "John Doe"
          },
          {
            "id": 11,
            "name": "Graduation Ceremony",
            "event": "Graduation Ceremony",
            "organizerName": "Jane Smith"
          },
          {
            "id": 12,
            "name": "Religious Ceremony or Event",
            "event": "Religious Ceremony or Event",
            "organizerName": "Alice Johnson"
          },
          {
            "id": 13,
            "name": "Conference",
            "event": "Conference",
            "organizerName": "John Doe"
          },
          {
            "id": 14,
            "name": "Art Exhibition",
            "event": "Art Exhibition",
            "organizerName": "Jane Smith"
          },
          {
            "id": 15,
            "name": "Book Launch",
            "event": "Book Launch",
            "organizerName": "Alice Johnson"
          },
          {
            "id": 16,
            "name": "Film Premiere",
            "event": "Film Premiere",
            "organizerName": "John Doe"
          },
          {
            "id": 17,
            "name": "Baby Shower",
            "event": "Baby Shower",
            "organizerName": "Jane Smith"
          },
          {
            "id": 18,
            "name": "Retirement Party",
            "event": "Retirement Party",
            "organizerName": "Alice Johnson"
          },
          {
            "id": 19,
            "name": "Product Launch",
            "event": "Product Launch",
            "organizerName": "John Doe"
          },
          {
            "id": 20,
            "name": "Awards Ceremony",
            "event": "Awards Ceremony",
            "organizerName": "Jane Smith"
          }
        ]
      }
      
      const newData=data.categories.filter((x)=>x.name===eventName);
      
console.log(newData);

  return (
    <>
    <div className='bg-black h-16'></div>
    <div className='flex flex-wrap  '>
        
        {newData.map((y)=>
            <Card image={y.image} key={y.id}/>
        )}
        
       
    </div>
    </>
   
  )
}

export default Events