import React, { Fragment } from "react";
import pic from "../components/static/weeknd.jpeg"

export default function HowOrganise() {
  return (
    <Fragment>
      <div className="flex items-center justify-center bg-black">
            <div className="flex items-center justify-between rounded-box bg-[#ede4d5] h-fit mt-7 gap-9 mx-4 pr-5">
            <img src={pic} alt="Movie" className="h-[35rem] rounded-tl-xl rounded-bl-xl"/>
            <div className="flex flex-col justify-center items-left gap-2 ml-6 mr-5">
                <h2 className="card-title text-black text-3xl font-bold">Build Your Event's Personality</h2>
                <p className="text-black text-l font-semibold mb-9">Define your event's identity by filling in essential details like theme, purpose, guest list, and special features</p>
                <h2 className="card-title text-black text-3xl font-bold">Set The Stage For Magic</h2>
                <p className="text-black text-l font-semibold mb-9">Explore diverse venue options to match your event's size, vibe, and vision, creating the ideal atmosphere</p>
                <h2 className="card-title text-black text-3xl font-bold">Time To Set The Clock For Excitement</h2>
                <p className="text-black text-l font-semibold mb-9">Choose the perfect moment for your event, considering seasonality, attendee availability, and scheduling constraints</p>
                <h2 className="card-title text-black text-3xl font-bold">Shine A Spotlight On Your Brand</h2>
                <p className="text-black text-l font-semibold">Strategically promote your brand across channels to increase visibility, engagement, and excitement around your event.</p>
            </div>
            </div>
        </div>
    </Fragment>
  );
}
