import React from "react";

const Step3 = ({ formData, onSubmit, onEdit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="form-step">
      <h2>Step 3: Review and Submit</h2>
      <form onSubmit={handleSubmit}>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <div className="buttons">
          <button type="button" onClick={onEdit}>
            Edit
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
