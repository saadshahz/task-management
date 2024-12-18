"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Greetings() {
  const { data, status } = useSession();
  const [userData, setUserData] = useState(data.user);
  return (
    <div className="pb-4 ">
      <span className="text-modalTitle text-primary  font-bold">
        Greetings,
      </span>
      <h1 className="text-formHeading font-semibold">
        {userData.first_name} {userData.last_name}
      </h1>
    </div>
  );
}
