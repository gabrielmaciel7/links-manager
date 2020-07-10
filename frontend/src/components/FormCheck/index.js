import React, { useState, useEffect } from "react";

const FormCheck = (props) => {
  const { data, name, label } = props;
  const [isChecked, setIsChecked] = useState(null);

  useEffect(() => {
    const initialValue = data && data[name] ? data[name] : false;

    if (initialValue !== undefined) setIsChecked(!!initialValue);
  }, [name, data]);

  const handleChange = (e) => {
    const newCheck = e.target.checked;

    if (isChecked === newCheck) return;

    setIsChecked(!!newCheck);
  };

  const inputProps = {
    type: "checkbox",
    name,
    checked: !!isChecked,
    onChange: handleChange,
  };

  return (
    <div className="form-group form-check">
      <label className="form-check-label">
        <input {...inputProps} />
        <span className="form-check-sign"></span>
        {label}
      </label>
    </div>
  );
};

export default FormCheck;
