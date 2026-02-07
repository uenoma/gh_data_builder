import React from 'react';

const BasicInfo = ({ data, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2>Basic Info</h2>
      <div>
        <label>Data ID: <input type="text" name="data_id" value={data.data_id} onChange={handleChange} /></label>
      </div>
      <div>
        <label>MS Number: <input type="text" name="ms_number" value={data.ms_number} onChange={handleChange} /></label>
      </div>
      <div>
        <label>MS Name: <input type="text" name="ms_name" value={data.ms_name} onChange={handleChange} /></label>
      </div>
      <div>
        <label>MS Icon: <input type="text" name="ms_icon" value={data.ms_icon} onChange={handleChange} /></label>
      </div>
    </div>
  );
};

export default BasicInfo;