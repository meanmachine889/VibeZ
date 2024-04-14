import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export function Works() {
  return (
    <div className="Home_works__2U2ui bg-black flex flex-col pb-[5rem]">
      <div className="Home_text__2lcsE">
        <h1 className="text-6xl font-bold text-center pt-9">How it works</h1>
        <p className="text-xl text-center pt-3">
          We Make Your <span className="text-pink-400">Nightlife</span> Easy
        </p>
      </div>
      <div className="Home_cards__1n2Km flex justify-center gap-[7rem] items-center pt-9 mx-7">
        <div className="Home_card__YH5o_ flex flex-col items-center gap-[2rem] justify-center">
          <div className="Home_card__YH5o_">
            <div className="Home_num__UOHMg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="98"
                height="99"
                viewBox="0 0 98 99"
                fill="none"
              >
                <circle
                  cx="49"
                  cy="49.0625"
                  r="48"
                  stroke="url(#paint0_linear_1635_3126)"
                  strokeWidth="2"
                ></circle>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontSize="36"
                  fill="white"
                >
                  1
                </text>
                <defs>
                  <linearGradient
                    id="paint0_linear_1635_3126"
                    x1="31.6458"
                    y1="6.65865"
                    x2="55.9989"
                    y2="91.3348"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FA63D0"></stop>
                    <stop offset="1" stopColor="#811EFF"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="Home_box__2BVaQ flex flex-col items-center">
            <h1 className="text-4xl">
              Discover Your <span className="text-pink-400">Vibe</span>
            </h1>
            <span className="Home_subtitle__dVcGY text-center pt-3">
              Discover your perfect event, effortlessly
            </span>
          </div>
        </div>
        <div className="Home_card__YH5o_ flex flex-col items-center gap-[2rem] justify-center">
          <div className="Home_card__YH5o_">
            <div className="Home_num__UOHMg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="98"
                height="99"
                viewBox="0 0 98 99"
                fill="none"
              >
                <circle
                  cx="49"
                  cy="49.0625"
                  r="48"
                  stroke="url(#paint0_linear_1635_3126)"
                  strokeWidth="2"
                ></circle>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontSize="36"
                  fill="white"
                >
                  2
                </text>
                <defs>
                  <linearGradient
                    id="paint0_linear_1635_3126"
                    x1="31.6458"
                    y1="6.65865"
                    x2="55.9989"
                    y2="91.3348"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FA63D0"></stop>
                    <stop offset="1" stopColor="#811EFF"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="Home_box__2BVaQ flex flex-col items-center">
            <h1 className="text-4xl">
              Find Your <span className="Home_t1__1CETv text-pink-400">Venue</span>
            </h1>
            <span className="Home_subtitle__dVcGY pt-3">
              Discover your perfect event, effortlessly
            </span>
          </div>
        </div>
        <div className="Home_card__YH5o_ flex flex-col items-center gap-[2rem] justify-center">
          <div className="Home_card__YH5o_">
            <div className="Home_num__UOHMg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="98"
                height="99"
                viewBox="0 0 98 99"
                fill="none"
              >
                <circle
                  cx="49"
                  cy="49.0625"
                  r="48"
                  stroke="url(#paint0_linear_1635_3126)"
                  strokeWidth="2"
                ></circle>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontSize="36"
                  fill="white"
                >
                  3
                </text>
                <defs>
                  <linearGradient
                    id="paint0_linear_1635_3126"
                    x1="31.6458"
                    y1="6.65865"
                    x2="55.9989"
                    y2="91.3348"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FA63D0"></stop>
                    <stop offset="1" stopColor="#811EFF"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="Home_box__2BVaQ flex flex-col items-center">
            <h1 className="Home_title__2gqoF text-4xl">
              Pay <span className="Home_t1__1CETv text-pink-400">Effortlessly</span>
            </h1>
            <span className="Home_subtitle__dVcGY pt-3">
              Just add tockets to cart and pay effortlessly
            </span>
          </div>
        </div>
      </div>
        <Link to="/events" className="btn btn-white w-fit self-center mt-[5rem] justify-center" style={{ border: "2px solid white" }}><span className=" text-xl font-semibold text-center justify-center">Explore Now</span></Link>
    </div>
  );
}
