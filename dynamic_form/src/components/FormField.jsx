// src/components/FormField.js
import React from "react";

const FormField = ({ field, value, onChange }) => {
  switch (field.type) {
    case "text":
    case "email":
    case "number":
      return (
        <div className="form-group">
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={value || ""}
            onChange={onChange}
            required={field.required}
          />
        </div>
      );
    case "select":
      return (
        <div className="form-group">
          <label>{field.label}</label>
          <select name={field.name} value={value || ""} onChange={onChange} required={field.required}>
            <option value="">Select...</option>
            {field.options.map((option, idx) => (
              <option key={idx} value={option}>{option}</option>
            ))}
          </select>
        </div>
      );
    case "checkbox":
      return (
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name={field.name}
              checked={value || false}
              onChange={onChange}
            />
            {field.label}
          </label>
        </div>
      );
    case "section":
      return (
        <fieldset className="form-group">
          <legend>{field.label}</legend>
          {field.fields.map((subField, idx) => (
            <FormField
              key={idx}
              field={subField}
              value={value?.[subField.name] || ""}
              onChange={onChange}
            />
          ))}
        </fieldset>
      );
    default:
      return null;
  }
};

export default FormField;
