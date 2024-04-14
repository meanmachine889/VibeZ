
import React,{Fragment} from "react";
import { Link } from "react-router-dom";


export function OrganiseHome() {
  return (
    <Fragment>
        <div className="bg-black flex justify-center items-center">
        <div className="hero h-[50vh] w-[80vw] organiseHero mt-5 mb-8 rounded-box bg-black">
        <div className="hero-overlay bg-opacity-60 rounded-box"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-white">Shout Out Your Event to the World!</h1>
            <p className="mb-5" style={{color : "white"}}>Elevate your event hosting experience with seamless setup and powerful promotional tools on our platform!</p>
            <Link to="/organise" className="btn btn-white" style={{ border: "2px solid white" }}><span className="text-white">Host Now</span></Link>
          </div>
        </div>
      </div>
        </div>
    </Fragment>
  );
}
