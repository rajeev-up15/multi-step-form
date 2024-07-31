import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import axios from "axios";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [crmData, setCrmData] = useState(null);

  const handleSearch = async (uniqueId) => {
    // Mock CRM data
    const mockCrmData = {
      12345: { name: "John Doe", email: "john.doe@example.com" },
      67890: { name: "Jane Smith", email: "jane.smith@example.com" },
    };

    const data = mockCrmData[uniqueId];
    if (data) {
      setCrmData(data);
      setFormData(data);
      setStep(3);
    } else {
      setCrmData(null);
      setStep(2);
    }
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleEdit = () => {
    setStep(2);
  };

  const handleSubmit = async () => {
    // Mock API call
    console.log("Submitting:", formData);
    // Simulate API call with axios
    // await axios.post('/api/submit', formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      {step === 1 && <Step1 onSearch={handleSearch} onBack={handlePrevStep} />}
      {step === 2 && (
        <Step2
          onNext={handleNextStep}
          onBack={handlePrevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          onSubmit={handleSubmit}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
