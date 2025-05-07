import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

export default function Template({ children }) {
  return (
    <>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
