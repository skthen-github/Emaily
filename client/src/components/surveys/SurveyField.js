// SurveyField contains logic to render a single
// label and text input
import React from "react";

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {/* if touched is true, this will print the error
      else, if touched is false, error will not be printed */}
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
