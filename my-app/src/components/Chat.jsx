import React, { useState } from 'react'
import ChatPalet from './ChatPalet'

import axios from "axios"
const Chat = () => {
    const [userData,setUserData] = useState("");
    const [resData,setResData] = useState("");
    const [t,sett] = useState(false);


    const getdata = () => {
        axios
          .get(
            `http://localhost:4000/?question=Hello%40data:[
                {
                  name: "Elegant Events",
                  eventsHandled: ["Weddings", "Corporate Conferences", "Galas"],
                  address: "123 Main Street, Cityville, USA",
                  dateBusy: "October 6, 2023",
                  email: "info@elegantevents.com",
                  phoneNumber: "+1 (123) 456-7890",
                  rating: 4.8,
                  image: "/imgs/elegant-events.jpg"
                },
                {
                  name: "Dreamy Weddings",
                  eventsHandled: ["Weddings", "Engagement Parties"],
                  address: "456 Elm Avenue, Townsville, USA",
                  dateBusy: "October 7, 2023",
                  email: "info@dreamyweddings.com",
                  phoneNumber: "+1 (987) 654-3210",
                  rating: 4.7,
                  image: "dreamy-weddings.jpg"
                },
                {
                  name: "Corporate Connect",
                  eventsHandled: ["Corporate Seminars", "Product Launches"],
                  address: "789 Oak Road, Business City, USA",
                  dateBusy: "October 8, 2023",
                  email: "info@corporateconnect.com",
                  phoneNumber: "+1 (555) 123-4567",
                  rating: 4.9,
                  image: "/imgs/elegant-events.jpg"
                },
                {
                  name: "Gala Galaxy",
                  eventsHandled: ["Charity Galas", "Fundraising Events"],
                  address: "101 Pine Lane, Fundraiser Town, USA",
                  dateBusy: "October 9, 2023",
                  email: "info@galagalaxy.com",
                  phoneNumber: "+1 (888) 765-4321",
                  rating: 4.6,
                  image: "/imgs/elegant-events.jpg"
                },
                {
                  name: "Chic Celebrations",
                  eventsHandled: ["Birthday Parties", "Anniversaries"],
                  address: "567 Birch Street, Celebrationville, USA",
                  dateBusy: "October 10, 2023",
                  email: "info@chiccelebrations.com",
                  phoneNumber: "+1 (777) 234-5678",
                  rating: 4.9,
                  image: "/imgs/elegant-events.jpg"
                },
                {
                  name: "Majestic Moments",
                  eventsHandled: ["Weddings", "Destination Events"],
                  address: "890 Cedar Avenue, Magic City, USA",
                  dateBusy: "October 11, 2023",
                  email: "info@majesticmoments.com",
                  phoneNumber: "+1 (333) 789-1234",
                  rating: 4.7,
                  image: "/imgs/elegant-events.jpg"
                },
                {
                  name: "Creative Concepts",
                  eventsHandled: ["Corporate Retreats", "Exhibitions"],
                  address: "246 Willow Lane, Innovation City, USA",
                  dateBusy: ["October 12, 2023","October 13, 2023","October 14, 2023"],
                  email: "info@creativeconcepts.com",
                  phoneNumber: "+1 (999) 111-2222",
                  rating: 4.8,
                  image: "/imgs/elegant-events.jpg"
                },
                {
                  name: "Enchanted Events",
                  eventsHandled: ["Weddings", "Quinceañeras"],
                  address: "321 Oakwood Road, Enchanted Town, USA",
                  dateBusy: "October 13, 2023",
                  email: "info@enchantedevents.com",
                  phoneNumber: "+1 (555) 987-6543",
                  rating: 4.6,
                  image: "/imgs/elegant-events.jpg"
                },
                {
                  name: "Celebration Creations",
                  eventsHandled: ["Birthday Parties", "Theme Events"],
                  address: "432 Maple Street, Celebration City, USA",
                  dateBusy: "October 14, 2023",
                  email: "info@celebrationcreations.com",
                  phoneNumber: "+1 (123) 789-4567",
                  rating: 4.9,
                  image: "/imgs/elegant-events.jpg"
                },
                {
                  name: "Exquisite Affairs",
                  eventsHandled: ["Weddings", "Luxury Events"],
                  address: "654 Magnolia Avenue, Exquisite Town, USA",
                  dateBusy: "October 15, 2023",
                  email: "info@exquisiteaffairs.com",
                  phoneNumber: "+1 (888) 654-7890",
                  rating: 4.7,
                  image: "/imgs/elegant-events.jpg"
                },
                {
                  name: "Corporate Dynamics",
                  eventsHandled: ["Corporate Seminars", "Team Building"],
                  address: "765 Pine Street, Businessville, USA",
                  dateBusy: "August 5, 2024",
                  email: "info@corporatedynamics.com",
                  phoneNumber: "+1 (777) 234-5678",
                  rating: 4.8,
                  image: "/imgs/elegant-events.jpg"
                },
                {
                  name: "Glamorous Gatherings",
                  eventsHandled: ["Red Carpet Events", "Fashion Shows"],
                  address: "987 Diamond Lane, Glam City, USA",
                  dateBusy: "September 10, 2024",
                  email: "info@glamorousgatherings.com",
                  phoneNumber: "+1 (999) 111-2222",
                  rating: 4.6,
                  image: "/imgs/elegant-events.jpg"
                },
              ]
              
              ${userData}`
          )
          .then((res) => {
            setResData(res.data);
            console.log(res.data);
          }).catch((e)=>{setResData("sorry the server is down")}) ;
      };

      const chatArray = ["I'm your AI-powered smart chatbot here to assist you."]
  return (
    <>
    <div className="" style={{backgroundColor:"#000",color:"#fff",fontSize:"2rem",fontWeight:"800",padding:"2rem"}}>
        <div className="chatNav"></div>
        <div className="chatData">
            {/* {chatArray.map((element)=>(
   <ChatPalet chatData={element}/> 
            ))
            
             
            }
            {chatArray.push(userData)} */}
            <ChatPalet chatData={`I'm your AI-powered smart chatbot here to assist you.`}/>
            <ChatPalet chatData={userData}/>
            <ChatPalet chatData={resData}/>
           
        </div>
        <div className="chatRequest" style={{backgroundColor:"#000"}}>
            <input type="text" style={{color:"#000",borderRadius:"1rem"}} onChange={(e)=> setUserData(e.target.value)}/>
            <button onClick={getdata} style={{width:"10rem",height:"3rem",color:"#000",backgroundColor:"#fff",margin:"0.5rem",borderRadius:"1rem"}}>Chat</button>
        </div>
    </div>
    
    </>
  )
}

export default Chat