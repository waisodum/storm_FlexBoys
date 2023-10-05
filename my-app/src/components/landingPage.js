import React from 'react';
import '../style.css';
import Plancart from './Plancart';
function LandingPage() {
  return (
    <div>
      <div class="desc">
        <div class="title">BirthDay Party</div>
        <p>
          "Let's make your birth party unforgettable. Join us for one epic
          celebration!"
        </p>
        <br />
        <p>
          <b>Date:</b> July 29, 2023
        </p>
        <p>
          <b>Time:</b> 12:30 PM - 1:45 PM ET
        </p>
      </div>

      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hoverbox hover">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />

        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Now
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>

     <div className="planDiv">
        <Plancart imgSrc={"/imgs/baB.jpeg"} rupee={"₹₹₹"} heading={"BirthDay Event Basic Plan"}/>
        <Plancart imgSrc={"/imgs/prB.jpeg"} rupee={"₹₹₹₹"} heading={"BirthDay Event Premium Plan"}/>
        <Plancart imgSrc={"/imgs/laB.jpeg"} rupee={"₹₹₹₹₹"} heading={"BirthDay Event lavish Plan"}/> 
     </div>
    </div>
  );
}

export default LandingPage;
