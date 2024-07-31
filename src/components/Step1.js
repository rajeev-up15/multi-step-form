import React, { useState } from "react";

const Step1 = ({ onNext, onSearch, onBack }) => {
  const [uniqueId, setUniqueId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(uniqueId);
  };

  return (
    <div className="form-step">
      <h2>Step 1: Enter Unique ID</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Unique ID:
          <input
            type="text"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
            required
          />
        </label>
        <div className="buttons">
          <button type="button" onClick={onBack} disabled>
            Back
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
