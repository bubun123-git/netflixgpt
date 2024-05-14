import React from "react";

const CheckValidateData = (email, password, name) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
    const fullNameRegex = /^[A-Za-z]+([\s][A-Za-z]+)*$/.test(name);

    if (!isEmailValid) return "Email Id is not valid";
    if (!isPassword) return "Password is not valid";
    if(!fullNameRegex) return "Write Name Properly"
  
    return true;
  };
  

export default CheckValidateData;
