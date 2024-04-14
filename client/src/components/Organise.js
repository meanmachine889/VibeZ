import React, { Fragment, useEffect, useState } from "react";
import OrganiseHeroMains from "./OrganiseHeroMains";
import OrganiseElemnet from "./OrganiseElement";
import HowOrganise from "./HowOrganise";
import OrganisingForm from "./OrganisingForm";
import { OrganiserHero2 } from "./OrganiserHero2";
import { Footer } from "./Footer";
import OrganiseReviews from "./OrganiseReviews";
import OrganiserReview from "./OrganiserReview";

export function Organise({ userID }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Delay display of content for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <div className="fixed left-0 w-full h-full bg-black flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="bg-black">
          <OrganiseHeroMains />
          <OrganiseElemnet />
          <HowOrganise />
          <OrganiseReviews />
          <OrganisingForm userID={userID} />
          <OrganiserHero2 />
          <OrganiserReview />
          <Footer />
        </div>
      )}
    </Fragment>
  );
}
