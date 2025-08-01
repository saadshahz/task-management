"use client"
import { addNewMedia } from "@/app/actions/addNewMedia";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export default function uploader(params) {
  const { data, status } = useSession();
  const [userDate, setUserDate] = useState(data.user);


  console.log("response :", response);
}
