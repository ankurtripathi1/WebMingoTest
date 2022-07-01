import React from "react";
import "./App.css";
import { Dashboard } from "./Components/Dashboard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
const App = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <Dashboard />
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
