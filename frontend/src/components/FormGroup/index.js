import React, { useState, useEffect } from "react";

const FormGroup = (props) => {
  const { data, name, label, type } = props;
  const [value, setValue] = useState("");

  useEffect(() => {
    const initialValue = data && data[name] ? data[name] : undefined;

    if (initialValue !== undefined) setValue(initialValue);
  }, [name, data]);

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (value === newValue) return;

    setValue(newValue);
  };

  const inputProps = {
    type,
    name,
    value: value || "",
    onChange: handleChange,
  };

  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...inputProps} />
    </div>
  );
};

export default FormGroup;
