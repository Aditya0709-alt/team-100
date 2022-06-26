import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Logo from "../static/images/Logo.png";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [dropdown, setDropdown] = useState(false);

  const handleSignout = () => {
    setUser({});
  };

  return (
    <nav className="hidden tb:w-screen tb:visible tb:flex tb:flex-row tb:place-content-between tb:h-16 tb:shadow-3xl tb:z-10 tb:bg-secondary-red tb:items-center tb:overscroll-none">
      <Link to="/home">
        <img src={Logo} alt="logo" className=" justify-self-start h-10 ml-8" />
      </Link>
      <ul className="flex flex-row place-content-between w-4/12 text-primary font-sans font-normal lp:text-xl tb:text-md -mr-24">
        <li className="tb:mr-4">
          {user ? (
            <Link to="/home">Details</Link>
          ) : (
            <Link to="/login">Details</Link>
          )}
        </li>
      </ul>
      {user ? (
        <section className="flex flex-col">
          <span className="flex flex-col font-sans rounded-md text-xl w-max h-max p-3 bg-primary -mb-36 z-20">
            <p>Hello</p>
            <p>{user && user.name}</p>
            <button
              onClick={(e) => {
                handleSignout(e);
              }}
            >
              <Link to="/">Sign out</Link>
            </button>
          </span>
        </section>
      ) : (
        <Link to="/">
          <button className="w-max h-max ml-2 px-4 py-1 bg-secondary-lightred items-center tracking-wide rounded-md text-primary font-sans text-md font-medium">
            Signup/Login
          </button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
