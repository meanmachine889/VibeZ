import React, { Fragment, useState } from "react";

export default function OrganisingForm({ userID }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [event_date, setEventDate] = useState("");
  const [organiserid, setOrganiser] = useState(userID); // Set organiserid initially with userID
  const [totalTickets, setTotalTickets] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inserted = await fetch("http://localhost:5000/host", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        location,
        city,
        price,
        event_date,
        organiserid, // Use organiserid here
        totalTickets
      }),
    });
    console.log(inserted);
    if (inserted.ok) {
      alert(
        "Your Event Has Been Hosted. Please Check Events Page For More Details"
      );
      window.location = "/events";
    }
  };

  return (
    <Fragment>
      <div className="flex flex items-top justify-evenly mt-[5rem] mx-[4rem] gap-[4rem]">
        <div className="flex flex-col">
          <h1 className="text-7xl font-bold text-white">Let's</h1>
          <h1 className="text-7xl font-bold text-white">Get Started</h1>
          <p className="mt-8 text-2xl">Add Your Ingredients,</p>
          <p className="mt-1 text-2xl">Sit Back,</p>
          <p className="mt-1 text-2xl gradient-text animate-gradient">
            and Let Us Whip Up Something Spectacular!
          </p>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <form
            className="card-body bg-black mt-5 flex flex-col gap-4 mb-9"
            onSubmit={handleSubmit}
            style={{ border: "2px solid white" }}
          >
            <div className="form-control">
              <input
                type="text"
                placeholder="Event Name"
                className="p-[1rem] input-bordered bg-base-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center items-center gap-4 w-[100%]">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Location"
                  className="p-[1rem] input-bordered bg-base-300 w-[21rem]"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="City"
                  className="p-[1rem] input-bordered bg-base-300 w-[21rem]"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 w-[100%]">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Date"
                  className="p-[1rem] input-bordered bg-base-300 w-[21rem]"
                  value={event_date}
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Ticket Price"
                  className="p-[1rem] input-bordered bg-base-300 w-[21rem]"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex justify-start items-center gap-4 w-[100%]">
              <div className="form-control">
                <input
                  type="number"
                  placeholder="Total Tickets"
                  className="p-[1rem] input-bordered bg-base-300 w-[10rem]"
                  value={totalTickets}
                  onChange={(e) =>
                    setTotalTickets(Math.max(0, parseInt(e.target.value)))
                  }
                  required
                />
              </div>
              <div className=" flex gap-[2rem] items-center justify-center">
                <button
                  className="p-4"
                  style={{ border: "2px solid white" }}
                  type="submit"
                >
                  Host
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
