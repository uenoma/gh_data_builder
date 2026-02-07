import React from 'react';
import labels from '../labels';

const BasicInfo = ({ data, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2>{labels.basicInfo}</h2>
      <div>
        <label>{labels.dataId}: <input type="text" name="data_id" value={data.data_id} onChange={handleChange} /></label>
      </div>
      <div>
        <label>{labels.msNumber}: <input type="text" name="ms_number" value={data.ms_number} onChange={handleChange} /></label>
      </div>
      <div>
        <label>{labels.msName}: <input type="text" name="ms_name" value={data.ms_name} onChange={handleChange} /></label>
      </div>
      <div>
        <label>{labels.msIcon}: <input type="text" name="ms_icon" value={data.ms_icon} onChange={handleChange} /></label>
      </div>
    </div>
  );
};

export default BasicInfo;