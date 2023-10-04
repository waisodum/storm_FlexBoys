import React from 'react'

const About = () => {
    const backgroundImageStyle = {
        backgroundImage: `url('dark.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    
      };
  return (
    <>
     <div className="bg-gray-100   min-h-screen flex flex-col justify-center ">
      <div
        className="bg-gray-300 p-4 "
        style={{ ...backgroundImageStyle, height: '650px',opacity:75 }} // Adjust the height as needed
      >
        <div className="max-w-4xl mx-auto text-white">
            <h2 className='text-6xl font-extrabold mt-40 justify-center'>ABOUT US</h2>
          <h4 className="font-bold mt-24 text-3xl">
          At <span>PLAN-iT</span>, Our event management website offers a one-stop solution for all your event planning needs.We connect you with Event organizers to make your events a resounding success.
          </h4>
        </div>
      </div>
      <div className="bg-gray-300 flex p-8 flex-row items-center max-w-max p-4 mx-auto">
        <img
          src="/schedule.jpeg"
          alt="schedule"
          className="mb-4 w-80 h-60 rounded-full mr-4"
        />
        <p className="font-semibold text-2xl">
        The scheduling of events will be handled in an organized and systematic manner by the event organizers. This meticulous approach aims to minimize conflicts and potential overlaps by carefully analyzing various factors, including event dates, venue availability, and the availability of participants. This proactive and strategic scheduling process ensures that events run smoothly and efficiently, enhancing the overall experience for both organizers and attendees.
        </p>
      </div>
      <div className="bg-gray-300 flex p-8 flex-row items-center max-w-max p-4 mx-auto">
      <p className="font-semibold text-2xl">
      The budgeting process will involve a comprehensive and cost analysis, ensuring a thorough understanding of the event's financial requirements. This data-driven approach empowers event organizers with the tools to strategically optimize spending, identify potential cost-saving opportunities, and ultimately guarantee the event's financial success. By closely examining every financial aspect, from operations to item costs, organizers can make well-informed decisions that contribute to the overall prosperity of the event.
        </p>
        <img
        src="budget.jpeg"
          
          alt="Kashmir Artisan"
          className="mb-4 w-60 h-60 rounded-full mr-4"
        />
       
      </div>
      <div className="bg-gray-300 flex p-8 flex-row items-center max-w-max p-4 mx-auto">
        <img
          src="/vendors.jpeg"
          alt="schedule"
          className="mb-4 w-80 h-60 rounded-full mr-4"
        />
        <p className="font-semibold text-2xl">
        Once a user signs in as an event organizer on our platform, they gain access to a comprehensive network that seamlessly connects them with a wide array of vendors and service providers. These vendors offer a diverse range of facilities and services to meet the unique needs of every event. This robust and user-friendly platform serves as a valuable hub, fostering collaboration and simplifying the process of finding and engaging vendors, ensuring that event organizers have access to the resources they need for a successful event planning experience.
        </p>
      </div>

      </div>
      
    </>
  );
};

export default About
