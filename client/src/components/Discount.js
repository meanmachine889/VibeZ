import React,{Fragment} from "react";
import pic from "../components/static/marshmello1.png"

export function Discount(){
    return(
        <Fragment>
            <div className="flex items-center justify-center bg-black">
            <div className="flex items-center justify-between rounded-box bg-gradient-to-b from-pink-200 to-pink-400 shadow-xl w-[80%] h-fit mt-7 pl-4 gap-4">
            <div className="flex flex-col justify-center items-left gap-2">
                <h2 className="card-title text-black text-3xl font-bold">Events Draining Your Wallet?</h2>
                <p className="text-black text-xl">Fear not! We've got your back with unbeatable prices and exclusive discounts, ensuring you enjoy every moment to the fullest</p>
                <div className="card-actions">
                <button className="btn btn-white w-fit mt-5" style={{ border: "2px solid white" }}>
                    <span className="text-indigo-100">Check Out</span>
                </button>
                </div>
                </div>
                <img src={pic} alt="Movie" className="h-60"/>
                </div>
            </div>
        </Fragment>
    )
}