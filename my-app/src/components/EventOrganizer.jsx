import React from 'react'
import Card from './Card1';

const EventOrganizer = () => {

    var eventOrg = [
        {
          name: "Elegant Events",
          eventsHandled: ["Weddings", "Corporate Conferences", "Galas"],
          address: "123 Main Street, Cityville, USA",
          date: "October 6, 2023",
          email: "info@elegantevents.com",
          phoneNumber: "+1 (123) 456-7890",
          rating: 4.8,
          image: "/imgs/elegant-events.jpg"
        },
        {
          name: "Dreamy Weddings",
          eventsHandled: ["Weddings", "Engagement Parties"],
          address: "456 Elm Avenue, Townsville, USA",
          date: "October 7, 2023",
          email: "info@dreamyweddings.com",
          phoneNumber: "+1 (987) 654-3210",
          rating: 4.7,
          image: "dreamy-weddings.jpg"
        },
        {
          name: "Corporate Connect",
          eventsHandled: ["Corporate Seminars", "Product Launches"],
          address: "789 Oak Road, Business City, USA",
          date: "October 8, 2023",
          email: "info@corporateconnect.com",
          phoneNumber: "+1 (555) 123-4567",
          rating: 4.9,
          image: "/imgs/elegant-events.jpg"
        },
        {
          name: "Gala Galaxy",
          eventsHandled: ["Charity Galas", "Fundraising Events"],
          address: "101 Pine Lane, Fundraiser Town, USA",
          date: "October 9, 2023",
          email: "info@galagalaxy.com",
          phoneNumber: "+1 (888) 765-4321",
          rating: 4.6,
          image: "/imgs/elegant-events.jpg"
        },
        {
          name: "Chic Celebrations",
          eventsHandled: ["Birthday Parties", "Anniversaries"],
          address: "567 Birch Street, Celebrationville, USA",
          date: "October 10, 2023",
          email: "info@chiccelebrations.com",
          phoneNumber: "+1 (777) 234-5678",
          rating: 4.9,
          image: "/imgs/elegant-events.jpg"
        },
        {
          name: "Majestic Moments",
          eventsHandled: ["Weddings", "Destination Events"],
          address: "890 Cedar Avenue, Magic City, USA",
          date: "October 11, 2023",
          email: "info@majesticmoments.com",
          phoneNumber: "+1 (333) 789-1234",
          rating: 4.7,
          image: "/imgs/elegant-events.jpg"
        },
        {
          name: "Creative Concepts",
          eventsHandled: ["Corporate Retreats", "Exhibitions"],
          address: "246 Willow Lane, Innovation City, USA",
          date: "October 12, 2023",
          email: "info@creativeconcepts.com",
          phoneNumber: "+1 (999) 111-2222",
          rating: 4.8,
          image: "/imgs/elegant-events.jpg"
        },
        {
          name: "Enchanted Events",
          eventsHandled: ["Weddings", "Quinceañeras"],
          address: "321 Oakwood Road, Enchanted Town, USA",
          date: "October 13, 2023",
          email: "info@enchantedevents.com",
          phoneNumber: "+1 (555) 987-6543",
          rating: 4.6,
          image: "/imgs/elegant-events.jpg"
        },
        {
          name: "Celebration Creations",
          eventsHandled: ["Birthday Parties", "Theme Events"],
          address: "432 Maple Street, Celebration City, USA",
          date: "October 14, 2023",
          email: "info@celebrationcreations.com",
          phoneNumber: "+1 (123) 789-4567",
          rating: 4.9,
          image: "/imgs/elegant-events.jpg"
        },
        {
          name: "Exquisite Affairs",
          eventsHandled: ["Weddings", "Luxury Events"],
          address: "654 Magnolia Avenue, Exquisite Town, USA",
          date: "October 15, 2023",
          email: "info@exquisiteaffairs.com",
          phoneNumber: "+1 (888) 654-7890",
          rating: 4.7,
          image: "/imgs/elegant-events.jpg"
        },
        {
          name: "Corporate Dynamics",
          eventsHandled: ["Corporate Seminars", "Team Building"],
          address: "765 Pine Street, Businessville, USA",
          date: "August 5, 2024",
          email: "info@corporatedynamics.com",
          phoneNumber: "+1 (777) 234-5678",
          rating: 4.8,
          image: "/imgs/elegant-events.jpg"
        },
        {
          name: "Glamorous Gatherings",
          eventsHandled: ["Red Carpet Events", "Fashion Shows"],
          address: "987 Diamond Lane, Glam City, USA",
          date: "September 10, 2024",
          email: "info@glamorousgatherings.com",
          phoneNumber: "+1 (999) 111-2222",
          rating: 4.6,
          image: "/imgs/elegant-events.jpg"
        },
      ];
      
  return (
    <>
    <div className="flex flex-wrap" 
    // style={{height:"max-content"}}
    >
    {eventOrg.map((element)=>{return(<Card name={element.name} a={element.eventsHandled} image={element.image} key={element.phoneNumber}/>)})}
    </div>
    </>
  )
}

export default EventOrganizer