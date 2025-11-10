import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Form from "./components/Form";
import Navber from "./components/Navber";
import Banner from "./components/Banner";

const App = () => {
  return (
    <>
      <main className="relative w-full h-screen">
        <Navber />
        <Form />
        <Banner />
      </main>
    </>
  );
};

export default App;
