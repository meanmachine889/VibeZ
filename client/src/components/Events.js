import React, { Fragment, useEffect, useState } from "react";
import pic1 from "./static/pic1.jpeg";
import pic2 from "./static/pic2.jpg";
import pic3 from "./static/pic3.jpg";
import pic4 from "./static/pic4.jpg";
import pic5 from "./static/pic5.jpg";
import pic6 from "./static/pic6.jpg";
import pic7 from "./static/pic7.jpg";
import pic8 from "./static/pic8.jpg";
import pic9 from "./static/pic9.jpg";
import pic10 from "./static/pic10.jpg";
import pic11 from "./static/pic11.jpg";
import pic12 from "./static/pic12.jpg";
import pic13 from "./static/pic13.jpg";
import pic14 from "./static/pic14.jpg";

const images = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
];

export function Events({ user }) {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [events, setEvents] = useState([]);
  const [quant, setquant] = useState(0);

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/events");
        const data = await response.json();
        data.sort((a, b) => a.id - b.id);
        setEvents(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000); 
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false); 
      }
    };

    fetchData();

  }, []);

  const handleFilter = async () => {
    try {
      const response = await fetch("http://localhost:5000/filter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city, date }),
      });

      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  async function handlePurchase(id, price) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); 
    const day = String(currentDate.getDate()).padStart(2, "0");
    const date = `${year}-${month}-${day}`;

    
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
      window.location = "/cart"
    } catch (error) {
      console.log(error.message);
    }
  }

  const timeZone = (dateString) => {
    const options = {
      timeZone: "Asia/Kolkata",
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleString("en-IN", options);
  };

  const formatDate = (dateString) => {
    const date = new Date(timeZone(dateString));
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
    <Fragment>
    {loading && (
        <div className="fixed left-0 w-full h-full bg-black flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
    {!loading && <div className="flex flex-col gap-2 bg-black justify-center items-center">
      <h1 className="text-6xl text-white font-bold mt-[5rem]">
        Events Galore:{" "}
        <span className="gradient-text animate-gradient">Book Now!</span>
      </h1>
      <p className="text-2xl mt-4">
        Filter Your Adventure: Discover Events by Date and City
      </p>
      <div className="flex gap-5">
        <input
          type="text"
          placeholder="city"
          className="input w-full max-w-xs"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="yyyy-mm-dd"
          className="input  w-full max-w-xs"
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className="btn  bg-base-100 w-fit h-fit p-2"
          style={{ border: "2px solid pink" }}
          onClick={handleFilter}
        >
          <span className="">Search</span>
        </button>
      </div>
      <div className="bg-opacity-0 flex gap-8 flex-wrap justify-center items-center mt-5 mb-9">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="rounded-box w-[20rem] h-[22rem] bg-gradient-to-b from-base-300 to-black shadow-xl flex flex-col mb-4"
          >
            <img
              src={images[index % images.length]}
              alt={event.name}
              className="h-[50%] rounded-box m-2"
            />
            <div className="h-[50%] mt-4 flex flex-col justify-center bg-gradient-to-b from-black to-base-300 rounded-box">
              <h2 className="card-title text-white pl-[0.6rem]">
                {event.name}
              </h2>
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
              <div className="flex items-center justify-start mt-2 gap-0">
                <svg
                  viewBox="0 0 20 20"
                  className="w-[2rem] h-[1.5rem] pl-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ff00bb"
                  stroke="#ff00bb"
                  stroke-width="0.0002"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect x="0" fill="none" width="20" height="20"></rect>{" "}
                    <g>
                      {" "}
                      <path d="M20 6.38L18.99 9.2v-.01c-.52-.19-1.03-.16-1.53.08s-.85.62-1.04 1.14-.16 1.03.07 1.53c.24.5.62.84 1.15 1.03v.01l-1.01 2.82-15.06-5.38.99-2.79c.52.19 1.03.16 1.53-.08.5-.23.84-.61 1.03-1.13s.16-1.03-.08-1.53c-.23-.49-.61-.83-1.13-1.02L4.93 1zm-4.97 5.69l1.37-3.76c.12-.31.1-.65-.04-.95s-.39-.53-.7-.65L8.14 3.98c-.64-.23-1.37.12-1.6.74L5.17 8.48c-.24.65.1 1.37.74 1.6l7.52 2.74c.14.05.28.08.43.08.52 0 1-.33 1.17-.83zM7.97 4.45l7.51 2.73c.19.07.34.21.43.39.08.18.09.38.02.57l-1.37 3.76c-.13.38-.58.59-.96.45L6.09 9.61c-.39-.14-.59-.57-.45-.96l1.37-3.76c.1-.29.39-.49.7-.49.09 0 .17.02.26.05zm6.82 12.14c.35.27.75.41 1.2.41H16v3H0v-2.96c.55 0 1.03-.2 1.41-.59.39-.38.59-.86.59-1.41s-.2-1.02-.59-1.41-.86-.59-1.41-.59V10h1.05l-.28.8 2.87 1.02c-.51.16-.89.62-.89 1.18v4c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-1.75l.83.3c.12.43.36.78.71 1.04zM3.25 17v-4c0-.41.34-.75.75-.75h.83l7.92 2.83V17c0 .41-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className="pl-[0.6rem] mt-2">
                  {event.total_tickets - event.tickets_sold}
                </p>
              </div>
              <p className="pl-[0.6rem] mt-2">₹ {event.price} each</p>
              <div className="flex gap-2 justify-left pl-[0.6rem] mt-2 mb-8">
                <input
                  type="number"
                  placeholder="0"
                  className="input input-bordered bg-black w-[40%]"
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    const maxAvailableTickets =
                      event.total_tickets - event.tickets_sold;
                    if (
                      !isNaN(value) &&
                      value >= 0 &&
                      value <= maxAvailableTickets
                    ) {
                      setquant(value);
                    } else if (value > maxAvailableTickets) {
                      setquant(maxAvailableTickets);
                    }
                  }}
                  max={event.total_tickets - event.tickets_sold}
                />

                <button
                  className="rounded-xl px-3 bg-gradient-to-b from-base-300 to-black"
                  onClick={() => handlePurchase(event.id, event.price)}
                >
                  <span>Purchase</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>}
  </Fragment>
  );
}
