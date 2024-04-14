import React, { useState, useEffect } from "react";
import { Hero } from "./Hero";
import RestHero from "./restHero";

function Homepage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="fixed left-0 w-full h-full bg-black flex justify-center items-center">
        <div className="loading loading-bars loading-lg"></div>
        </div>
      ) : (
        <>
          <Hero />
          <RestHero />
        </>
      )}
    </div>
  );
}

export default Homepage;
