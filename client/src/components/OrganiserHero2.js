import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export function OrganiserHero2() {
  return (
    <Fragment>
      <div className="flex items-center justify-center bg-black mb-9">
        <div className="hero h-[45vh] w-[80vw] heroContainer2 rounded-box mt-[5rem]">
          <div className="hero-overlay bg-opacity-60 rounded-box"></div>
          <div className="hero-content text-center text-neutral-content flex flex-col items-center justify-center">
            <h1 className="mb-5 text-8xl font-bold text-white">
                And That's It
            </h1>
            <div className="max-w-md">
              <p className="text-xl" style={{ color: "white" }}>
              Now sit back and witness the seamless organization unfold before your eyes, entrusting your event to us.
              </p>
            </div>
            <Link to="/ohistory" className="btn btn-white" style={{ border: "2px solid white" }}>
                <p className="text-white">Check Out</p>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
