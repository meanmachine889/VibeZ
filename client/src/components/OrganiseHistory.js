// Frontend OrganiseHistory component

import React, { Fragment, useState, useEffect } from "react";

export default function OrganiseHistory({ userID }) {
  const [organisingHistory, setOrganisingHistory] = useState([]);

  useEffect(() => {
    fetchOrganisingHistory();
  }, []);

  const fetchOrganisingHistory = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/organisehistory/${userID}`
      );
      const data = await response.json();
      setOrganisingHistory(data);
    } catch (error) {
      console.error("Error fetching organizing history:", error);
    }
  };

  const formatDate = (timestamp) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-IN", options);
  };

  return (
    <Fragment>
      <div className="bg-black flex flex-col items-center justidy-center gap-[3rem]  bg-gradient-to-b from-base-100 to-black pb-[3rem]">
        <h1 className="text-7xl font-bold mt-7"><span className="gradient-text animate-gradient">Organising</span> History</h1>
          {organisingHistory.map((event) => (
            <div
              className="rounded-box shadow-xl bg-gradient-to-b from-base-300 to-black w-[50%]"
              style={{ border: "1px solid white" }}
            >
              <div className="card-body" key={event.id}>
                <h2 className="card-title">{event.name}</h2>
                <p>Location: {event.location}</p>
                <p>City: {event.city}</p>
                <p>Date: {formatDate(event.event_date)}</p>
                <p>Tickets Sold: {event.tickets_sold}</p>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
}
