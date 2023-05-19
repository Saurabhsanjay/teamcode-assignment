// SchedulingForm.js

import React, { useState } from "react";

const SchedulingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedTimeSlot: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission and scheduling logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Schedule an Appointment</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="selectedTimeSlot">Time Slot</label>
        <input
          type="text"
          id="selectedTimeSlot"
          name="selectedTimeSlot"
          value={formData.selectedTimeSlot}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Schedule</button>
    </form>
  );
};

export default SchedulingForm;
