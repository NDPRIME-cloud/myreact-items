import React, { useState } from "react";
import closedEye from "../assets/images/eyebrow.png";
import openEye from "../assets/images/eye.png";
import Modal from "./Modal";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowMaodal] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, SetAge] = useState("");
  const [error, setError] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [showComfirmPassword, setShowComfrimPassword] = useState(false);
  console.log(age);

  const handelSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if(!isValid)return

    
    console.log(name, email, password, info);
    const userName = name || "User";
 
    setShowMaodal(true);
    setSubmittedName(userName);
     setSubmitted(true);


    setConfirmPassword("");
    setName("");
    setEmail("");
    setPassword("");
    setInfo("");
    SetAge("");
   
    

   


  };
  const handleCloseModal = () => setShowMaodal(false);
  const validateForm = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Dob = new Date(age);
    const today = new Date();
    const minDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    ); // 18 years ago

    const newErrors = {};

    // if (!name || !email || !info || !password || !confirmPassword || !age) {
    //   setShowMaodal(false);
    // }

    if (!name.trim() || name.trim().length < 3) {
      newErrors.name = "Enter full name";
    }
    if (!emailPattern.test(email)) {
      newErrors.email = "Invalid Email!";
    } else if (!email.trim()) {
      newErrors.email = "enter email";
    }
    if (!passwordRegex.test(password)) {
      newErrors.password = "Invalid password";
    }
    if (!password.trim()) {
      newErrors.password = "Enter password";
    }
    if (password.trim() !== confirmPassword.trim()) {
      newErrors.confirmPassword = "confirm password";
      
    }
    if (Dob > minDate) {
      newErrors.age = "Must be older than 18";
    }
    if (!age){
      newErrors.age = "Please input DOB"
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="form-card">
      <h1>Query Form</h1>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) =>
            setName(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
          placeholder="Your Full name"
        />
        <span className="error">
          <i> {error.name}</i>
        </span>

        <input
          type="text"
          name=""
          id=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
        />
        <span className="error">
          <i> {error.email}</i>
        </span>
        <input
          //  max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split("T")[0]}
          type="date"
          value={age}
          name=""
          className="date"
          id=""
          placeholder="DOB"
          onChange={(e) => SetAge(e.target.value)}
        />
        <span className="error">
          <i> {error.age}</i>
        </span>

        <div style={{position: "relative", display: "flex"}}>
          {" "}
          <input
            type={visibility ? "text" : "password"}
            name=""
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password***"
          />
          <span onClick={() => setVisibility(!visibility)}>
            <img src={visibility? closedEye : openEye} alt="" style={{width: "20px", height: "20px", marginTop: "25px" }} />
          </span>
        </div>
        <p className="error">
          <i> {error.password}</i>
        </p>

        <div style={{display:"flex"}}>
          <input
            type={showComfirmPassword ? "text" : "password"}
            value={confirmPassword}
            name=""
            id=""
            placeholder="comfirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span onClick={() => setShowComfrimPassword(!showComfirmPassword)}>
          <img src={showComfirmPassword? closedEye : openEye} alt="" style={{width: "20px", height:"20px", marginTop:"25px"}} />
          </span>

        </div>
        <span className="error"> <i>{error.confirmPassword}</i></span>

        <textarea
          name=""
          id=""
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          rows={"5"}
          placeholder="write query on different lines"
        ></textarea>

        <button type="submit">Submit</button>

        {/* { submitted && <p>Form submitted</p>} */}
        <Modal
          dive={handleCloseModal}
          show={showModal}
          onClose={handleCloseModal}
          top={`Thank You, ${submittedName}`}
          message="Form submitted"
        />
      </form>
    </div>
  );
};

export default Form;
