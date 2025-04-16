import React from "react";
import { useNavigate } from "react-router-dom";

const HighSchool = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      highSchool: {
        ...formData.highSchool,
        [e.target.name]: e.target.value,
      },
    });
  };

  const calculateResult = (e) => {
    e.preventDefault();
    const total =
      Number(formData.highSchool.hindi) +
      Number(formData.highSchool.english) +
      Number(formData.highSchool.math) +
      Number(formData.highSchool.science) +
      Number(formData.highSchool.sanskrit) +
      Number(formData.highSchool.socialScience);

    const percentage = (total / 600) * 100;

    setFormData({
      ...formData,
      highSchool: { ...formData.highSchool, total, percentage },
    });
  };

  return (
    <div>
      <h2>High School - Marks & Result</h2>
      <form onSubmit={calculateResult}>
        <input
          type="number"
          placeholder="Hindi"
          name="hindi"
          value={formData.highSchool.hindi}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="English"
          name="english"
          value={formData.highSchool.english}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Maths"
          name="math"
          value={formData.highSchool.math}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Science"
          name="science"
          value={formData.highSchool.science}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Social Science"
          name="socialScience"
          value={formData.highSchool.socialScience}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Sanskrit"
          name="sanskrit"
          value={formData.highSchool.sanskrit}
          onChange={handleChange}
          required
        />
        <button type="submit">Calculate</button>
        <button onClick={() => navigate("/intermediate")}>Next</button>
      </form>
      {formData.highSchool.percentage && (
        <div className="result">
          <h3>Total Marks: {formData.highSchool.total}</h3>
          <h3>Percentage: {formData.highSchool.percentage.toFixed(2)}%</h3>
        </div>
      )}
    </div>
  );
};

export default HighSchool;
