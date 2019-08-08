import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="container">Hello world</main>
      <Footer />
    </div>
  );
};

export default App;
