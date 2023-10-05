import React, { useEffect, useState } from 'react'
import '../style.css'
import { Link, useParams } from 'react-router-dom';
function LandingPage() {

    const {id} = useParams();
    // useEffect( async () => {
 
    //   fetch('http://localhost:80/').then((y)=>{
    //       return y.json()
    //     })
    //     .then((x)=>{
    //   setdata(x);
    //   })
        
    //   }, []);
         
var data = [{category
    : 
    "Wedding",
    desc
    : 
    "These organizers are not just coordinators; they are dream weavers and problem solvers. They possess an uncanny ability to anticipate challenges before they arise, ensuring that the day unfolds smoothly. They are experts in managing a multitude of moving parts - from selecting the perfect venue to curating a sumptuous menu, from coordinating floral arrangements to choreographing the first dance. Their role goes beyond logistics; they are emotional support for the couple, calming nerves and offering a reassuring presence amidst the whirlwind of emotions.\r\n\r\nCreativity is their canvas, and every wedding is a unique masterpiece. They have an innate sense of style, curating aesthetics that align with the couple's vision, be it a grand and opulent affair or an intimate, rustic celebration. They weave in personal touches that make the event truly one-of-a-kind, ensuring that guests are left with lasting memories.",
    eventName
    : 
    "Wedding",
    path
    : 
    "1696467828244-music.jpeg",
    __v
    :0,
    _id:"651e0b74d618eaa41f78eac7"}]

            var newData=data.filter((x)=>x._id==id);
    return (
    <div >

<div class="desc">
        <div class="title">{newData[0].eventName}</div>
        <p>In this masterclass, students will learn the basics of interviewing and how to present themselves confidently. </p>
        <p><b>Date:</b> July 29, 2023</p>
        <p><b>Time:</b> 12:30 PM - 1:45 PM ET

        </p>
    </div>
        <div class="hoverbox hover">
            <img src={`/imgs/${newData[0].path}`} alt="hello"/>




<Link to="/salman">

<div class="enroll">Book Now</div>
</Link>            


        </div>
        <div class="c h">

<h1> Event Overview </h1>
<p>{newData[0].desc}</p>

        </div>

    </div>
  )
}

export default LandingPage