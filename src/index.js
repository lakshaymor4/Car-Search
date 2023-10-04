import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"; // Import BrowserRouter
import Gss from "./pages/getst";
import "./index.css"

ReactDOM.render(
  <Router> 
    <Routes>
    <Route exact path="/page/:page" element={<Gss />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
