import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="min-h-[85vh] bg-[#f9f9f9]">
        <div className=" max-w-[1000px] mx-auto flex justify-center items-center min-h-[70vh] p-2 flex-col">
          <h1 className="text-5xl font-medium text-[#4e4e4e]">
            "Unlock Your Dream Career: Your{" "}
            <span className="text-slate-500"> Job Search</span> Starts Here!"
          </h1>

          <button className="mt-10 text-2xl font-medium text-white bg-purple-500 w-full p-2 rounded-md">
            <NavLink to="/signup">Get Started</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
