import React, { Fragment, useState, useEffect } from "react";

export default function OrganiseReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-7xl font-bold mt-[5rem] text-white">Organizer Spotlight</h1>
        <p className="mt-5">Scroll And See What Organisers Using Our Service Have To Say</p>
        <div className="w-[53%] h-fit carousel mt-5">
          {reviews.map((review, index) => (
            <div key={index} className="carousel-item w-full">
              <div className=" bg-gradient-to-b from-base-300 to-black w-[100%]">
                <div className="card-body">
                  <h2 className="card-title">{review.userid}</h2>
                  <p>{review.review}</p>
                  <p>{'⭐'.repeat(review.rating)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
