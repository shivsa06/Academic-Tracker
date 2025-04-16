import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import HighSchool from "./pages/HighSchool";
import Intermediate from "./pages/Intermediate";
import Summary from "./pages/Summary";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    state: "",
    city: "",
    course: "",
    highSchool: {
      hindi: "",
      english: "",
      maths: "",
      science: "",
      socialScience: "",
      sanskrit: "",
      total: null,
      percentage: null,
    },
    intermediate: {
      physics: "",
      chemistry: "",
      maths: "",
      english: "",
      hindi: "",
      total: null,
      percentage: null,
    },
  });

  return (
    <div className="App">
      <BrowserRouter>
        <div className="app-container">
          <h1>Academic Form App</h1>
          <Routes>
            <Route
              path="/"
              element={
                <Registration formData={formData} setFormData={setFormData} />
              }
            />
            <Route
              path="/highSchool"
              element={
                <HighSchool formData={formData} setFormData={setFormData} />
              }
            />
            <Route
              path="/intermediate"
              element={
                <Intermediate formData={formData} setFormData={setFormData} />
              }
            />
            <Route path="/summary" element={<Summary formData={formData} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
