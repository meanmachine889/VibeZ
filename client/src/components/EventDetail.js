import React, { Fragment, useState } from "react";

export default function EventDetail({ event, user }) {
  const [quant, setQuant] = useState(0);

  const handlePurchase = async () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const date = `${year}-${month}-${day}`;

    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    const time = `${hours}:${minutes}:${seconds}`;

    const amount = event.price * quant;

    try {
      const purchase = await fetch("http://localhost:5000/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, id: event.id, quant, amount, date, time }),
      });
      console.log(purchase.rows);
      console.log("inserted");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInputChange = (e) => {
    setQuant(e.target.value);
  };

  return (
    <Fragment>
      {event && <div>
        <h2>Event Name: {event.name}</h2>
        <p>Location: {event.location}</p>
        <p>Event Date: {event.event_date}</p>
        <p>Price: ₹{event.price}</p>
        <p>Tickets Sold: {event.tickets_sold}</p>
        <input
          type="number"
          placeholder="Quantity"
          value={quant}
          onChange={handleInputChange}
        />
        <button onClick={handlePurchase}>Purchase</button>
      </div>}
    </Fragment>
  );
}
