import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customer from "./routes/Customer";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*"  element={<Customer />} />
      </Routes>
    </Router>
  );
};

export default App;
