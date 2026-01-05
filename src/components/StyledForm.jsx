import React, { useState } from "react";
import closedeye from "../assets/images/eyebrow.png";
import openeye from "../assets/images/eye.png";
import check from "../assets/images/check.png";
import close from "../assets/images/close.png";
import "../App.css"

const StyledForm = () => {
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [hasupandlowcase, setHasupandlowcase] = useState(false);
  const [hasnumber, setHasnumber] = useState(false);
  const [hasspecialchar, setHasspecialchar] = useState(false);
  const [has8char, setHas8char] = useState(false);

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    setHasupandlowcase(/[a-z]/.test(value) && /[A-Z]/.test(value));

    setHasnumber(/[0-9]/.test(value));

    setHasspecialchar(/[!@#$%&*]/.test(value));

    setHas8char(value.length >= 8);
  };
  const strengthScore = hasupandlowcase + hasspecialchar + hasnumber + has8char;

  return (
    <div className="backcolor">
      <div>
        <div className="s-input-holder">
          <label htmlFor="password">Password</label>
          <div className="s-main-input">
          <input
            type={visibility ? "text" : "password"}
            name=""
            id="password"
            value={password}
            onChange={handlePassword}
          />
          <span onClick={() => setVisibility(!visibility)} >
            <img
              src={visibility ? closedeye : openeye}
              alt=""
              style={{ width: "20px", height: "20px", marginTop: "25px" , color: "#fff"}}
            />
          </span>
          </div>
        </div>

        <div className="case-holder">
          <h2>Your password must include </h2>
          <div className="rule">
            <img src={hasupandlowcase ? check : close} alt="" />
            <span>
              <p>Lowercase & Uppercase</p>
            </span>
          </div>
          <div className="rule">
            <img src={hasnumber ? check : close} alt="" />
            <span>
              <p>Numbers (0-9)</p>
            </span>
          </div>
          <div className="rule">
            <img src={hasspecialchar ? check : close} alt="" />
            <span>
              <p>Special Character (!@#$%&*)</p>
            </span>
          </div>
          <div className="rule">
            <img src={has8char ? check : close} alt="" />
            <span>
              <p>Atleast 8 Characters</p>
            </span>
          </div>
        </div>

        <div>
          <div className="strength">
            <h2>Password strength</h2>
            <p>
              {strengthScore === 4
                ? "Strong"
                : strengthScore === 3
                ? "Avarage"
                : "Weak"}
            </p>
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
  <div style={{
    width: "100px",
    height: "6px",
    backgroundColor: strengthScore >= 1 ? "red" : "#ccc"
  }} />
  <div style={{
    width: "100px",
    height: "6px",
    backgroundColor: strengthScore >= 2 ? "yellow" : "#ccc"
  }} />
  <div style={{
    width: "100px",
    height: "6px",
    backgroundColor: strengthScore >= 4 ? "green" : "#ccc"
  }} />
</div>

        </div>
      </div>
    </div>
  );
};

export default StyledForm;
