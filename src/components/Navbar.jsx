import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav  style={{ padding: "20px", backgroundColor: "white", gap: "20px" }}>
      <Link to="/" style={{ color: "grey", padding: "0 20px" }}>
        Home{" "}
      </Link>
      <Link className="text-3xl font-bold underline" to="/contact" style={{ color: "grey", padding: "0 20px" }}>
        Contact us
      </Link>
      <Link to="/about" style={{ color: "grey", padding: "0 20px" }}>
        About
      </Link>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
