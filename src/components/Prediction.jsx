import React, { useState } from "react";
import axios from "axios";

const Prediction = () => {
  const [formData, setFormData] = useState({
    id: null,
    status: null,
    credit_history: null,
    purpose: null,
    savings: null,
    employment_duration: null,
    installment_rate: null,
    personal_status_sex: null,
    other_debtors: null,
    present_residence: null,
    property: null,
    other_installment_plans: null,
    housing: null,
    number_credits: null,
    job: null,
    people_liable: null,
    telephone: null,
    foreign_worker: null,
  });
  const [predictionResult, setPredictionResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData
      );
      setPredictionResult(response.data.predictions[0]); // Store response data in state
      console.log("Response:", JSON.stringify(response.data, null, 2)); // Handle response from ML model
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="#00f6ff p-6 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* Custom input styling */}
        <style>{`
          .custom-input {
            background: none;
            border: none;
            border-bottom: 1px solid white; /* Add a white bottom border */
            color: white; /* Text color */
            width: 100%;
            padding: 0.5rem;
            margin-bottom: 0.5rem;
          }
        `}</style>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 mr-5 text-white">
            ID:
            <input
              type="number"
              name="id"
              className="custom-input"
              value={formData.id || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Status:
            <input
              type="number"
              name="status"
              className="custom-input"
              value={formData.status || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Credit History:
            <input
              type="number"
              name="credit_history"
              className="custom-input"
              value={formData.credit_history || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Purpose:
            <input
              type="number"
              name="purpose"
              className="custom-input"
              value={formData.purpose || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Savings:
            <input
              type="number"
              name="savings"
              className="custom-input"
              value={formData.savings || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Employment Duration:
            <input
              type="number"
              name="employment_duration"
              className="custom-input"
              value={formData.employment_duration || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Installment Rate:
            <input
              type="number"
              name="installment_rate"
              className="custom-input"
              value={formData.installment_rate || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Personal Status/Sex:
            <input
              type="number"
              name="personal_status_sex"
              className="custom-input"
              value={formData.personal_status_sex || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Other Debtors:
            <input
              type="number"
              name="other_debtors"
              className="custom-input"
              value={formData.other_debtors || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Present Residence:
            <input
              type="number"
              name="present_residence"
              className="custom-input"
              value={formData.present_residence || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Property:
            <input
              type="number"
              name="property"
              className="custom-input"
              value={formData.property || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Other Installment Plans:
            <input
              type="number"
              name="other_installment_plans"
              className="custom-input"
              value={formData.other_installment_plans || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Housing:
            <input
              type="number"
              name="housing"
              className="custom-input"
              value={formData.housing || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Number of Credits:
            <input
              type="number"
              name="number_credits"
              className="custom-input"
              value={formData.number_credits || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Job:
            <input
              type="number"
              name="job"
              className="custom-input"
              value={formData.job || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            People Liable:
            <input
              type="number"
              name="people_liable"
              className="custom-input"
              value={formData.people_liable || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Telephone:
            <input
              type="number"
              name="telephone"
              className="custom-input"
              value={formData.telephone || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="col-span-9 sm:col-span-2 text-white">
            Foreign Worker:
            <input
              type="number"
              name="foreign_worker"
              className="custom-input"
              value={formData.foreign_worker || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit" className="bg-white text-black py-1 px-4 rounded">
          Submit
        </button>
        {predictionResult !== null && (
          <div className="mt-4 border-solid border-2 border-white-600 py-2 px-4 rounded  ">
            <h2 className="text-white mt">Prediction </h2>
            <pre className="text-white">Result : {predictionResult}</pre>
          </div>
        )}
      </form>
    </div>
  );
};

export default Prediction;
