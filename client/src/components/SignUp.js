import React, { Fragment, useState } from "react";

function SignUp({ logIn }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = first + " " + last;
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email, phn, name }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        localStorage.setItem("loggedInUser", first);
        logIn(first);
        window.location = "/"; // Pass the username to the logIn function
      } else {
        alert("username already in use");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <div className="flex flex-col gap-[3rem] min-h-screen w-[100%] bg-gradient-to-b from-base-200 to-black items-center justify-center">
        <h1 className="text-8xl font-bold text-white">
          Welcome{" "}
          <span className="gradient-text animate-gradient">{first}!</span>
        </h1>
        <form
          className="flex flex-col w-[40%] py-7 px-9 bg-opacity-0 gap-[2rem]"
          style={{ border: "2px solid white" }}
        >
          <div className="flex gap-[1rem]">
            <div className="form-control w-[50%]">
              <input
                type="Name"
                placeholder="First Name"
                className="p-4 bg-base-300"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                required
              />
            </div>
            <div className="form-control w-[50%]">
              <input
                type="Name"
                placeholder="Last Name"
                className="p-4 bg-base-300"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex gap-[1rem]">
          <div className="form-control w-[62%]">
            <input
              type="text"
              placeholder="Email"
              className="p-4 bg-base-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control w-[38%]">
            <input
              type="text"
              placeholder="Phone No."
              className="p-4 bg-base-300"
              value={phn}
              onChange={(e) => setPhn(e.target.value)}
              required
            />
          </div>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Username"
              className="p-4 bg-base-300"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-[1rem] items-center justify-start">
          <div className="form-control w-[70%]">
            <input
              type="password"
              placeholder="Password"
              className="p-4 bg-base-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-[4rem] items-center justify-center">
            <button className="bg-base-300 p-4 ml-2 text-white w-fit" style={{border : "2px solid white"}} onClick={handleSignup}>
              Sign Up
            </button>
          </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default SignUp;
