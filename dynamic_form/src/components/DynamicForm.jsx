import React, { useState } from "react";
import FormField from "./FormField";
import { formSchema } from "../utils/formSchema";
import DraggableSection from "./DraggableSection";

const DynamicForm = () => {
  const [formData, setFormData] = useState({});
  const [fields, setFields] = useState(formSchema.fields);

  // Handle form input changes, including nested fields
  const handleChange = (e, sectionName) => {
    const { name, type, value, checked } = e.target;

    setFormData((prev) => {
      if (sectionName) {
        // Update nested section fields (Education -> Degree, University)
        return {
          ...prev,
          [sectionName]: {
            ...prev[sectionName],
            [name]: type === "checkbox" ? checked : value,
          },
        };
      }
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="dynamic-form">
      <h2>{formSchema.title}</h2>
      
      {/* Drag & Drop Section */}
      <DraggableSection fields={fields} setFields={setFields} />

      {fields.map((field, idx) => (
        <FormField
          key={idx}
          field={field}
          value={field.type === "section" ? formData[field.name] || {} : formData[field.name]}
          onChange={(e) => handleChange(e, field.type === "section" ? field.name : null)}
        />
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
