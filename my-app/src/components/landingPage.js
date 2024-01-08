import React, { useEffect, useState } from "react";
import "../style.css";
import { Link, useParams } from "react-router-dom";

function LandingPage({ n }) {
  const { id } = useParams();
  const [newData, setNewData] = useState(null);

  useEffect(() => {
    setNewData(n.find((e) => e._id === id));
  }, [id, n]);

  if (!newData) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <div class="desc">
        <div class="title">{newData.eventName}</div>
        <p>
          In this masterclass, students will learn the basics of interviewing
          and how to present themselves confidently.
        </p>
        <p>
          <b>Date:</b> July 29, 2023
        </p>
        <p>
          <b>Time:</b> 12:30 PM - 1:45 PM ET
        </p>
      </div>
      <div class="hoverbox hover">
        <img src={`/imgs/${newData.path}`} alt="hello" />
        <Link to="/salman">
          <div class="enroll">Book Now</div>
        </Link>
      </div>
      <div class="c h">
        <h1>Event Overview</h1>
        <p>{newData.desc}</p>
      </div>
    </div>
  );
}

export default LandingPage;
