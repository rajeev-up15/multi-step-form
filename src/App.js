import React from "react";
import "./App.css";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  return (
    <div className="App">
      <h1>Multi-Step Smart Form</h1>
      <MultiStepForm />

      <div class="instructions">
        <h2>How does it work</h2>
        <p>
          Add unique id to search your record in the CRM(valid ids are 12345,
          67890).
        </p>
        <p>
          If record is found, you are taken to final step for review and submit.
        </p>
        <p>If record is not found, you are taken to manual step and submit.</p>
        <p>
          <i>At the final step edit option is provided.</i>
        </p>
        <p>
          <i>At each step back option is provided.</i>
        </p>
      </div>
    </div>
  );
}

export default App;
