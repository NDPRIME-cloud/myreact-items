import React from "react";
import Navbar from "../components/Navbar";
import SIdebar from "../components/SIdebar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", gap: 50 }}>
        <SIdebar /> <Navbar />
      </div>
      <p>This is the home page</p>
    </div>
  );
};

export default Home;
