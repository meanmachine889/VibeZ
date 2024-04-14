import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Login({ logIn }) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password: pass }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        localStorage.setItem("loggedInUser", name);
        logIn(name); // Pass the username to the logIn function
      } else {
        alert("invalied username or password");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-base-100 to-black">
        <div className="flex gap-[4rem]">
          <div className="text-center lg:text-left">
            <h1 className="text-8xl font-bold text-white gradient-text animate-gradient">
              Welcome!
            </h1>
            <p className="ml-2 mt-5 text-xl text-white">
            Let's have you <span className="text-pink-400">Grooving!</span> Login now and let the rhythm take over!
            </p>
            <div className="flex flex-col gap-[1rem]">
              <p className="mt-9 ml-2 text-l text-white">Don't have an account? Don't worry! Sign up and join the party!</p>
              <Link to="/signup" className="bg-base-300 p-3 ml-2 text-white w-fit" style={{border : "2px solid white"}}>
                Sign Up
              </Link>
            </div>
          </div>
          <form className="bg-opacity-0 bg-black p-8 flex flex-col gap-[2rem] justify-center" style={{border : "2px solid white"}}>
              <div className="form-control">
                <input
                  type="Name"
                  placeholder="Username"
                  className="bg-base-300 p-3 input-bordered"
                  value={name}
                  
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-left gap-[3rem]">
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-base-300 p-3 input-bordered"
                  value={pass}
                  
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-[2rem] items-center justify-center">
                <button className="bg-base-300 p-3 text-white" style={{border : "2px solid white"}}  onClick={handleLogin}>
                  Login
                </button>
              </div>
              </div>
            </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
