import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pic1 from "./static/pic1.jpeg";
import pic2 from "./static/pic2.jpg";
import pic3 from "./static/pic3.jpg";
import pic4 from "./static/pic4.jpg";
import pic5 from "./static/pic5.jpg";
import pic6 from "./static/pic6.jpg";
import pic7 from "./static/pic7.jpg";
import pic8 from "./static/pic8.jpg";

const images = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8
]

export function EventsHome({user}) {
  const [events, setEvents] = useState([]);

  const [quant, setquant] = useState(0);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/TrendingEvents");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  async function handlePurchase(id, price) {
    // Fetch current date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");
    const date = `${year}-${month}-${day}`;

    // Fetch current time
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    const time = `${hours}:${minutes}:${seconds}`;

    const amount = price * quant;

    try {
      const purchase = await fetch("http://localhost:5000/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, id, quant, amount, date, time }),
      });
      console.log(purchase.rows);
      console.log("inserted");
      window.location = "/events";
    } catch (error) {
      console.log(error.message);
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dayOfWeek = dayNames[date.getDay()];
    const month = monthNames[date.getMonth()];
    const dayOfMonth = date.getDate();
    return `${dayOfWeek}, ${month} ${dayOfMonth}`;
  };

  return (
    <div className="flex flex-col gap-2 bg-black justify-center items-center">
      <h1 className="text-6xl text-white font-bold mt-[8rem]">
        Find Your <span className="gradient-text animate-gradient">Vibe</span>
      </h1>
      <p className="text-2xl mt-4">Hottest Events In The Town</p>
      <div className="bg-black flex gap-8 flex-wrap justify-center items-center mt-5">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="rounded-box w-[20%] h-[22rem] bg-gradient-to-b from-base-300 to-black shadow-xl flex flex-col"
          >
            <img
              src={images[index % images.length]} 
              alt={event.name}
              className="h-[50%] rounded-box m-2"
            />
            <div className="h-[40%] flex flex-col justify-center bg-gradient-to-b from-black to-base-300 rounded-box">
              <div className="flex gap-4 items-center">
                <h2 className="card-title text-white pl-[0.6rem]">
                    {event.name}
                </h2>
                <div className="badge badge-secondary">Trending</div>
              </div>
              <div className="flex gap-3 mt-2">
                <div className="flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-[2rem] h-[1.5rem]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                        stroke="#f82a98"
                        stroke-width="0.768"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                        stroke="#f82a98"
                        stroke-width="0.768"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>{event.location}</p>
                </div>
                <div className="flex items-center justfy-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-[2rem] h-[1.5rem]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                        stroke="#fd087e"
                        stroke-width="0.624"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p className="">{formatDate(event.event_date)}</p>
                </div>
              </div>
              <p className="pl-[0.7rem] mt-2">₹ {event.price} each</p>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/events"
        className="btn btn-white px-4 text-l mt-8"
        style={{ border: "1px solid white" }}
      >
        <span className="text-xl">All Events</span>
      </Link>
    </div>
  );
}
