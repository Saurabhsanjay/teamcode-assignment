// EventTypeForm.js

import React, { useState } from "react";

const EventTypeForm = () => {
  const [formData, setFormData] = useState({
    eventType: "",
    duration: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission and event type creation logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Event Type</h2>
      <div>
        <label htmlFor="eventType">Event Type</label>
        <input
          type="text"
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default EventTypeForm;
