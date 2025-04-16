import React from "react";
import { useNavigate } from "react-router-dom";

const Intermediate = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      intermediate: {
        ...formData.intermediate,
        [e.target.name]: e.target.value,
      },
    });
  };

  const calculateResult = (e) => {
    e.preventDefault();

    const total =
      Number(formData.intermediate.physics) +
      Number(formData.intermediate.chemistry) +
      Number(formData.intermediate.math) +
      Number(formData.intermediate.hindi) +
      Number(formData.intermediate.english);
    const percentage = (total / 500) * 100;

    setFormData({
      ...formData,
      intermediate: { ...formData.intermediate, total, percentage },
    });
  };

  return (
    <div>
      <h2>Intermediate - Marks & Result</h2>
      <form onSubmit={calculateResult}>
        <input
          type="number"
          placeholder="Physics"
          name="physics"
          value={formData.intermediate.physics}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Chemistry"
          name="chemistry"
          value={formData.intermediate.chemistry}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Maths"
          name="math"
          value={formData.intermediate.math}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Hindi"
          name="hindi"
          value={formData.intermediate.hindi}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="English"
          name="english"
          value={formData.intermediate.english}
          onChange={handleChange}
          required
        />
        <button type="submit">Calculate</button>
        <button onClick={() => navigate("/summary")}>View Summary</button>
      </form>
      {formData.intermediate.percentage && (
        <div className="result">
          <h3>Total Marks: {formData.intermediate.total}</h3>
          <h3>Percentage: {formData.intermediate.percentage.toFixed(2)}%</h3>
        </div>
      )}
    </div>
  );
};

export default Intermediate;
