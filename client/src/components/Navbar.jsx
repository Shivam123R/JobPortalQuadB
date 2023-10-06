import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import { AiOutlineMenu } from "react-icons/ai"; // Import AiOutlineMenu icon

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successfully");
    localStorage.clear();
    navigate("/login");
  };

  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="bg-purple-500 p-2 ">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center h-16">
          <div>
            <h1 className="text-3xl font-medium text-white">Job Portal</h1>
          </div>
          <div className="flex items-center">
            <ul className="md:flex  items-center gap-4 text-white text-xl hidden">
              <li className="hover:underline-offset-8 duration-500 hover:underline">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:underline-offset-8 duration-500 hover:underline">
                <NavLink to="/about">About</NavLink>
              </li>
              {user ? (
                <>
                  <li className="hover:underline-offset-8 duration-500 hover:underline">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li
                    className="hover:underline-offset-8 duration-500 hover:underline"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:underline-offset-8 duration-500 hover:underline">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li className="hover:underline-offset-8 duration-500 hover:underline">
                    <NavLink to="/signup">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
            <div
              className="text-white text-2xl md:hidden"
              onClick={toggleHandler}
            >
              <AiOutlineMenu />
            </div>
          </div>
        </div>
        {/*============= mobile=================== */}
        {toggle && (
          <>
            <ul className="md:hidden flex flex-col py-10 items-center gap-4 text-white text-xl ">
              <li className="hover:underline-offset-8 duration-500 hover:underline">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:underline-offset-8 duration-500 hover:underline">
                <NavLink to="/about">About</NavLink>
              </li>
              {user ? (
                <>
                  <li className="hover:underline-offset-8 duration-500 hover:underline">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li
                    className="hover:underline-offset-8 duration-500 hover:underline"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:underline-offset-8 duration-500 hover:underline">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li className="hover:underline-offset-8 duration-500 hover:underline">
                    <NavLink to="/signup">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
