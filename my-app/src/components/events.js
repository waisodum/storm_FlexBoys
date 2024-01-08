import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function Events({ n }) {
  const navigate = useNavigate();

  const { eventName } = useParams();

  const newData = n.filter((x) => x.category === eventName);

  console.log(newData);

  return (
    <>
      <div className="bg-black h-16 mt-9"></div>
      <div className="flex flex-wrap  ">
        {newData.map((y) => (
          <div class="w-1/4 p-4 hover:cursor-pointer">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                class="w-full"
                src={`/imgs/${y.path}`}
                alt="Sunset in the mountains"
                className="w-full h-40 object-cover"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2"></div>
                <p class="text-gray-700 text-base">{y.eventName}</p>
                {/* <p>{y.desc}</p> */}
                <Link
                  to={`/land/${encodeURIComponent(y._id)}`}
                  className="block p-4 hover:bg-gray-200"
                >
                  Click to View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Events;
