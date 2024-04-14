import React, { Fragment, useState, useEffect } from "react";

export function Account({ userID }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userID }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUser(data[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user:", error);
      setError("Error fetching user data. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="w-[100%] h-[90.8vh] bg-gradient-to-b from-base-100 to-black flex items-start justify-center">
          {user && 
          <div className="w-[75%] justify-center items-center justify-end flex">
          <div className="mt-7 rounded-box shadow-xl w-[90%] bg-black h-[60%] flex flex-col items-center justify-start">
            <p className="text-7xl mt-5 font-bold">Welcome <span className="gradient-text animate-gradient">{user.name}</span></p>
            <p className="text-3xl mt-5">Account Details</p>
            <div className="flex items-center justify-center w-[100%] p-8 gap-4 mt-8">
                <span className="text-2xl">Email :</span>
                <div className=" w-[20rem] bg-gradient-to-b from-base-300 to-black rounded flex items-center justify-center p-3">
                <span className="text-xl">{user.email}</span>
                </div>
            </div>
            <div className="flex items-center justify-center w-[100%] pt-2 p-8 gap-4 pl-0 pr-[3rem]">
                <span className="text-2xl">Username :</span>
                <div className=" w-[20rem] bg-gradient-to-b from-base-300 to-black rounded flex items-center justify-center p-3">
                <span className="text-xl">{user.username}</span>
                </div>
            </div>
            <div className="flex items-center justify-center w-[100%] pt-2 p-8 gap-4 pl-9 pr-[3rem]">
                <span className="text-2xl">Phone :</span>
                <div className=" w-[20rem] bg-gradient-to-b from-base-300 to-black rounded flex items-center justify-center p-3">
                <span className="text-xl">+91 {user.phoneno}</span>
                </div>
            </div>
          </div>
          </div>
          }
      </div>
    </Fragment>
  );
}
