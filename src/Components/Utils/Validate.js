import React from "react";

const CheckValidateData = (email, password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
  
    if (!isEmailValid) return "Email Id is not valid";
    if (!isPassword) return "Password is not valid";
  
    return true;
  };
  

export default CheckValidateData;
