import { message } from "antd";
import React from "react";

export default function loginPayload(email, password) {
  if ((email == "admin@gmail.com", password == 1234)) {
    const data = {
      message: "Login Succesfully",
    };
    return data;
  } else {
    const data = {
      message: "Error",
    };

    return data;
  }
}
