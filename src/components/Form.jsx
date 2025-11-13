import React, { useEffect, useState } from "react";
import closedEye from "../assets/images/eyebrow.png";
import openEye from "../assets/images/eye.png";
import unknownimg from "../assets/images/userimg.png";
import Modal from "./Modal";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, SetAge] = useState("");
  const [error, setError] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [showComfirmPassword, setShowComfrimPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    confirmPassword: "",
    info: "",
  });
  console.log(age);
  console.log(formData);
  // const navigate = useNavigate();

  const [image, setImage] = useState(null);
  console.log(image)
  const [preview, setPreview] = useState(null);
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // for uploading to backend. this is the actual file format
      setPreview(URL.createObjectURL(file));
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    console.log(name, email, password, info);
    const userName = name || "User";

    setShowModal(true);
    setSubmittedName(userName);
    setSubmitted(true);

    setConfirmPassword("");
    setName("");
    setEmail("");
    setPassword("");
    setInfo("");
    SetAge("");
  };
  const handleCloseModal = () => setShowModal(false);

  const handleValidation = (field, value) => {
    setError((prev) => {
      const newErrors = { ...prev };

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      switch (field) {
        case "name":
          if (!value.trim() || value.trim().length < 3)
            newErrors.name = "Enter full name (min 3 characters)";
          else delete newErrors.name;
          break;

        case "email":
          if (!value.trim()) newErrors.email = "Email is required";
          else if (!emailPattern.test(value))
            newErrors.email = "Invalid email format";
          else delete newErrors.email;
          break;

        case "password":
          if (!value.trim()) newErrors.password = "Password is required";
          else if (!passwordRegex.test(value))
            newErrors.password =
              "Password must be 8+ chars. \ninclude uppercase, lowercase, number, and special char.";
          else delete newErrors.password;
          break;

        case "confirmPassword":
          if (!value.trim()) newErrors.confirmPassword = "comfrim password";
          else if (value.trim() !== password.trim())
            newErrors.confirmPassword = "Passwords do not match";
          else delete newErrors.confirmPassword;
          break;

        case "age":
          const Dob = new Date(value);
          const today = new Date();
          const minDate = new Date(
            today.getFullYear() - 18,
            today.getMonth(),
            today.getDate()
          );
          if (!value) newErrors.age = "Please enter your Date of Birth";
          else if (Dob > minDate)
            newErrors.age = "You must be at least 18 years old";
          else delete newErrors.age;
          break;

        default:
          break;
      }

      return newErrors;
    });
  };

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
      newErrors.password =
        "Password must be 8+ chars,\n include uppercase, lowercase, number, and special char.";
    }
    if (!password.trim()) {
      newErrors.password = "Enter password";
    }
    if (password.trim() !== confirmPassword.trim()) {
      newErrors.confirmPassword = " password dooes not match";
    }

    if (!age) {
      newErrors.age = "Please input DOB";
    } else if (Dob > minDate) {
      newErrors.age = "Must be older than 18";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form-card">
      <h1>Query Form</h1>
      <form onSubmit={handelSubmit}>
        <div>
          {preview ? (
            <div className="picUpload">
              <div className="image-size">
                {" "}
                <img src={preview} alt="preview" />
              </div>
            </div>
          ) : (
            <span>
              {" "}
              <div className="picUpload">
                <img src={unknownimg} alt="" />
              </div>
            </span>
          )}
          <input
            type="file"
            name=""
            accept="image/*"
            id="imageInput"
            onChange={handleChangeImage}
            style={{ display: "none" }}
          />
          <label htmlFor="imageInput" className="upload-btn">
            Add Photo
          </label>
        </div>

        <input
          type="text"
          name="name"
          id=""
          value={formData.name}
          onChange={(e) => {
            handleChange(
              "name",
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            );

            handleValidation("name", e.target.value);
          }}
          placeholder="Your Full name"
        />
        <span className="error">
          <i>
            {" "}
            <small>{error.name}</small>
          </i>
        </span>

        <input
          type="text"
          name=""
          id=""
          value={formData.email}
          onChange={(e) => {
            handleChange("email", e.target.value);
            handleValidation("email", e.target.value);
          }}
          placeholder="Your Email"
        />
        <span className="error">
          <i>
            <small> {error.email}</small>
          </i>
        </span>
        <input
          //  max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split("T")[0]}
          type="date"
          value={age}
          name=""
          className="date"
          id=""
          placeholder="DOB"
          onChange={(e) => {
            SetAge(e.target.value);
            handleValidation("age", e.target.value);
          }}
        />
        <span className="error">
          <i>
            {" "}
            <small>{error.age}</small>
          </i>
        </span>

        <div style={{ display: "flex" }}>
          {" "}
          <input
            type={visibility ? "text" : "password"}
            name=""
            id=""
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              handleValidation("password", e.target.value);
            }}
            placeholder="password***"
          />
          <span onClick={() => setVisibility(!visibility)}>
            <img
              src={visibility ? closedEye : openEye}
              alt=""
              style={{ width: "20px", height: "20px", marginTop: "25px" }}
            />
          </span>
        </div>
        <p className="error">
          <i>
            {" "}
            <small>{error.password}</small>
          </i>
        </p>

        <div style={{ display: "flex" }}>
          <input
            type={showComfirmPassword ? "text" : "password"}
            value={confirmPassword}
            name=""
            id=""
            placeholder="comfirm password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              handleValidation("comfirmPassword", e.target.value);
            }}
          />
          <span onClick={() => setShowComfrimPassword(!showComfirmPassword)}>
            <img
              src={showComfirmPassword ? closedEye : openEye}
              alt=""
              style={{ width: "20px", height: "20px", marginTop: "25px" }}
            />
          </span>
        </div>
        <span className="error">
          {" "}
          <i>
            <small>{error.confirmPassword}</small>
          </i>
        </span>

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
