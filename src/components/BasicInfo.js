import React from 'react';
import labels from '../labels';
import './BasicInfo.css';

const BasicInfo = ({ data, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2>{labels.basicInfo}</h2>
      <table className="basic-info-table">
        <tbody>
          <tr>
            <td>{labels.dataId}</td>
            <td><input type="text" name="data_id" value={data.data_id} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>{labels.msNumber}</td>
            <td><input type="text" name="ms_number" value={data.ms_number} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>{labels.msName}</td>
            <td><input type="text" name="ms_name" value={data.ms_name} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>{labels.msIcon}</td>
            <td><input type="text" name="ms_icon" value={data.ms_icon} onChange={handleChange} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasicInfo;