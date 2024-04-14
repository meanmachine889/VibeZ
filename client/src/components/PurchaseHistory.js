import React, { Fragment, useState, useEffect } from "react";

export default function PurchaseHistory({ userID }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchPurchaseHistory();
  }, []);

  const fetchPurchaseHistory = async () => {
    try {
      const response = await fetch("http://localhost:5000/purchasehistory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: userID }),
      });
      let data = await response.json();
      // Sort purchase history in descending order based on payment_id
      data.sort((a, b) => b.payment_id - a.payment_id);
      setHistory(data);
    } catch (error) {
      console.error("Error fetching purchase history:", error);
    }
  };

  const formatDate = (timestamp) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-IN", options);
  };

  return (
    <Fragment>
      <div className="flex flex-col gap-[5rem] items-center justify-center bg-gradient-to-b from-base-100 to-black pb-[5rem]">
        <h1 className="text-7xl mt-9 font-bold text-white">
          <span className="gradient-text animate-gradient">Purchase</span> History
        </h1>
        <div className="flex items-center flex-col gap-[2rem] justify-center gap-[2rem] w-[100%]">
          {history.map((purchase) => (
            <div
              className="rounded-box shadow-xl bg-gradient-to-b from-base-300 to-black w-[50%]"
              style={{ border: "1px solid white" }}
              key={purchase.id}
            >
              <div className="card-body">
                <h2 className="card-title">{purchase.event_name}</h2>
                <p>Quantity: {purchase.quantity}</p>
                <p>Amount: ₹ {purchase.amount}</p>
                <p>Date: {formatDate(purchase.payment_date)}</p>
                <p>Time: {purchase.payment_time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
