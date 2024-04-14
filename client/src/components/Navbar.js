import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar({userID}) {
  const location = useLocation();

  const [paymentCount, setPaymentCount] = useState(0);

  useEffect(() => {
    fetchPaymentCount();
  }, []);

  const fetchPaymentCount = async () => {
    try {
      const response = await fetch(`http://localhost:5000/history/${userID}`);
      const data = await response.json();
      setPaymentCount(data.count);
    } catch (error) {
      console.error("Error fetching payment count:", error);
    }
  };

  const handlesignOut = () => {
    localStorage.removeItem("loggedInUser");
    window.location = "/";
  };

  return (
    <Fragment>
      <div className="navbar py-0 bg-base-100">
        <div className="flex-1">
          <Link
            to="/"
            className={`btn btn-ghost text-[1rem] ${
              location.pathname === "/" ? "text-pink-400" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/events"
            className={`btn btn-ghost text-[1rem] ${
              location.pathname === "/events" ? "text-pink-400" : ""
            }`}
          >
            Events
          </Link>
          <Link
            to="/organise"
            className={`btn btn-ghost text-[1rem] ${
              location.pathname === "/organise" ? "text-pink-400" : ""
            }`}
          >
            Organise
          </Link>
        </div>
        <Link to="/cart" tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">{paymentCount}</span>
          </div>
        </Link>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/account" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={handlesignOut}>Sign Out</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
