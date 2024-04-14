
import React,{Fragment} from "react";


export function Hero() {
  return (
    <Fragment>
        <div className="hero h-[90vh] heroContainer">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-9xl font-bold gradient-text animate-gradient">VibeZ</h1>
            <p className="mb-5  text-l" style={{color : "white"}}>Making finding nearby events and favorite performers a breeze, just vibe in and explore with ease. Experience the pulse of your locality with a few clicks on our website.</p>
            <button className="btn btn-white" style={{ border: "2px solid white" }}>
              <a href="#recentEvents" className="gradient-text animate-gradient">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
