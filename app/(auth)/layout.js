import React from "react";
// import logo from '../../public/images/auth/authBackground.png' 
export default function AuthLayout({ children }) {
  return (
    <section className="container h-screen flex max-w-full">
      <div className="w-1/2 bg-primary authPage "></div>
      {children}
    </section>
  );
}
