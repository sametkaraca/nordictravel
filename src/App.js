import React, { useState } from "react";
import { Pages } from "./pages/Pages";
import { NavBar } from "./pages/NavBar";
import { Footer } from "./pages/Footer";

export const App = () => {
  return (
    <>
      <Pages />
      <Footer />
    </>
  );
};
