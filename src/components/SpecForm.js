import React from 'react';

const SpecForm = ({ spec, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2>Spec</h2>
      {Object.keys(spec).map(key => (
        <div key={key}>
          <label>{key}: <input type="text" name={key} value={spec[key]} onChange={handleChange} /></label>
        </div>
      ))}
    </div>
  );
};

export default SpecForm;