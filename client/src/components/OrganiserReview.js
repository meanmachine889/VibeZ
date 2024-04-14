import React, { Fragment, useState } from "react";

export default function OrganiserReview() {
    const [userid, setUserid] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inserted = await fetch("http://localhost:5000/reviewsAdd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userid,
                review,
                rating,
            }),
        });
        console.log(inserted);
        if (inserted.ok) {
            alert("Thank you for your review!");
            window.location = "/organise";
        }
    }
return(
    <Fragment>
    <div className="flex flex-col justify-center items-center gap-4 mt-9">
      <h1 className="text-7xl font-bold mt-9 pt-9 text-white">Did Our Service <span className="gradient-texts animate-gradient">Sizzle</span> or <span className="gradient-textf animate-gradient">Fizzle</span>?</h1>
      <p className="mt-4 text-xl">Leave Your Review!</p>
      <form
        className="card-body bg-black mt-5 w-[50vw] mb-[8rem]"
        onSubmit={handleSubmit}
        style={{ border: "2px solid white" }}
      >
        <div className="form-control">
          <input
            type="text"
            placeholder="Name"
            className="p-[1rem] input-bordered bg-base-300"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Review"
            className="p-[1rem] input-bordered bg-base-300"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-5 justify-left">
        <div className="form-control">
          <input
            type="text"
            placeholder="Rating/5"
            className="p-[1rem] input-bordered bg-base-300"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>        
        <div className=" flex gap-[2rem] items-center justify-center">
          <button
            className="p-3"
            style={{ border: "2px solid white" }}
            type="submit"
          >
            Add
          </button>
        </div>
        </div>
      </form>
    </div>
  </Fragment>
)
  ;
}
