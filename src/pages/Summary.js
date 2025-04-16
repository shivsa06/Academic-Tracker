import React from "react";
import { useNavigate } from "react-router-dom";

const Summary = ({ formData }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Student Summary</h2>
      <form>
        <div className="summary-container">
          <p>
            <strong>Name: </strong>
            {formData.name || "Not Provided"}
          </p>
          <p>
            <strong>Course: </strong>
            {formData.course || "Not Provided"}
          </p>
          <p>
            <strong>Mobile No: </strong>
            {formData.mobileNo || "Not Provided"}
          </p>
          <p>
            <strong>High School Percentage: </strong>{" "}
            {formData.highSchool.percentage
              ? `${formData.highSchool.percentage.toFixed(2)} %`
              : "Not Calculated"}
          </p>
          <p>
            <strong>Intermediate Percentage: </strong>{" "}
            {formData.intermediate.percentage
              ? `${formData.intermediate.percentage.toFixed(2)} %`
              : "Not Calculated"}
          </p>
        </div>
        <button onClick={() => navigate("/")}>Back to Registration</button>
      </form>
    </div>
  );
};

export default Summary;
