import React, { useState } from "react";

const OtpGenerator = () => {
  const [otp, setOtp] = useState("");
  const generate = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOtp(otp);
  };

  return (
    <div>
      <p> {otp} </p>
      <button onClick={generate}> Generate OTP</button>
    </div>
  );
};

export default OtpGenerator;
