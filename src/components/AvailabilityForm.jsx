// AvailabilityForm.js

import React, { useState } from "react";

const AvailabilityForm = () => {
  const [formData, setFormData] = useState({
    workingHoursStart: "",
    workingHoursEnd: "",
    breakStart: "",
    breakEnd: "",
    unavailableDates: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission and availability management logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Manage Availability</h2>
      <div>
        <label htmlFor="workingHoursStart">Working Hours (Start)</label>
        <input
          type="text"
          id="workingHoursStart"
          name="workingHoursStart"
          value={formData.workingHoursStart}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="workingHoursEnd">Working Hours (End)</label>
        <input
          type="text"
          id="workingHoursEnd"
          name="workingHoursEnd"
          value={formData.workingHoursEnd}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="breakStart">Break (Start)</label>
        <input
          type="text"
          id="breakStart"
          name="breakStart"
          value={formData.breakStart}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="breakEnd">Break (End)</label>
        <input
          type="text"
          id="breakEnd"
          name="breakEnd"
          value={formData.breakEnd}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="unavailableDates">Unavailable Dates</label>
        <input
          type="text"
          id="unavailableDates"
          name="unavailableDates"
          value={formData.unavailableDates}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default AvailabilityForm;
