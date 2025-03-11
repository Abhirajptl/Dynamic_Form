// src/utils/formSchema.js
export const formSchema = {
  title: "User Registration Form",
  fields: [
    { label: "Full Name", type: "text", name: "fullName", required: true },
    { label: "Email", type: "email", name: "email", required: true },
    { label: "Phone Number", type: "text", name: "phone", required: true },
    { label: "Age", type: "number", name: "age" },
    { label: "Gender", type: "select", name: "gender", options: ["Male", "Female", "Other"] },
    { label: "Subscribe to newsletter", type: "checkbox", name: "subscribe" },
    {
      label: "Address",
      type: "section",
      name: "address",
      fields: [
        { label: "Street", type: "text", name: "street", required: true },
        { label: "City", type: "text", name: "city", required: true },
        { label: "State", type: "text", name: "state", required: true },
        { label: "Zip Code", type: "text", name: "zip", required: true }
      ]
    },
    {
      label: "Education",
      type: "section",
      name: "education",
      fields: [
        { label: "Degree", type: "text", name: "degree", required: true },
        { label: "University", type: "text", name: "university", required: true }
      ]
    }
  ]
};
