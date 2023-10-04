import React, { useState } from 'react';
import ChatPalet from "../chatPalet/chatPalet.jsx";
import axios from 'axios';

const ChatBot = () => {
  const [info, setInfo] = useState('');


  const getRes = ()=>{
  
  }
  const [chatInput,setChatInput]= useState('');

  const getdata = () => {
    axios.get(`http://localhost:4000/?question=data:{Key features of an event management company typically include:

    Event Planning and Coordination: The company should have skilled event planners who can assist clients in creating and executing their event visions.
    
    Venue Selection: Helping clients choose the right venue based on their event type, budget, and preferences.
    
    Budget Management: Assisting clients in setting and sticking to their event budgets, while optimizing spending for maximum impact.
    
    Vendor Management: Negotiating and liaising with vendors such as caterers, decorators, photographers, and entertainers on behalf of the client.
    
    Logistics and Coordination: Ensuring all event logistics run smoothly, including transportation, setup, and teardown.
    
    Creative Event Design: Offering creative concepts and designs for event themes, decorations, and layouts.
    
    Timeline and Schedule Management: Creating detailed event timelines and schedules to keep everything on track.
    
    Guest Services: Providing services such as RSVP management, guest registration, and accommodations if necessary.
    
    Entertainment and Activities: Arranging entertainment options, activities, and interactive elements to engage attendees.
    
    Technical Support: Handling audiovisual equipment, lighting, and other technical requirements.
    
    Emergency Plans: Developing contingency plans for unexpected issues or emergencies during the event.
    
    Marketing and Promotion: Assisting with event marketing, promotion, and social media management.
    
    Post-Event Evaluation: Conducting post-event evaluations to gather feedback and measure the event's success.
    
    Experience and Expertise: Having a team with experience in different types of events, from weddings and corporate conferences to trade shows and festivals.
    
    Networking: Establishing strong connections with local vendors and venues to secure the best deals and options for clients.
    
    Client-Centric Approach: Focusing on understanding the client's unique needs and tailoring services accordingly.
    
    Technology Integration: Utilizing event management software and technology to streamline processes and enhance the attendee experience.
    
    Sustainability Initiatives: Incorporating sustainable practices into event planning, such as eco-friendly decor and waste reduction.
    
    Legal and Permit Compliance: Ensuring that all necessary permits and licenses are obtained and that the event complies with local regulations.
    
    Quality Assurance: Maintaining a commitment to delivering high-quality events that exceed client expectations.
    
    A successful event management company combines these features to offer comprehensive services that make event planning and execution stress-free and memorable for their clients.} ${chatInput} ?`).then((res) => {
      setInfo(res.data);
      console.log(res.data);
    });
  };

  return (
    <>
      <div className="chatBotdiv">
        <div className="chatHead"></div>
        <div className="chatContent">
          <ChatPalet imageGiven="/chatProfile.jpg" infoGiven=
"Hey there! I'm your website chatbot, here to help you explore our site. Whether you need event info, want to purchase tickets, or have questions, just ask. Let's make your online experience a breeze!" />
          <ChatPalet imageGiven="/profile.png" infoGiven={info} /> 
        </div>

        <div className="chatRes">
        <input type="text" className='chatInput' onClick={(e)=>setChatInput(e.target.value)}/>
        <button style={{backgroundColor:"blue"}} onClick={getRes}>Chat</button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
