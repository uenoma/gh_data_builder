import React from 'react';
import labels from '../../labels';

const BasicInfoViewer = ({ data }) => {
  return (
    <div className="viewer-section">
      <h2>{labels.basicInfo}</h2>
      <table className="viewer-table">
        <tbody>
          <tr>
            <td>{labels.dataId}</td>
            <td>{data.data_id}</td>
          </tr>
          <tr>
            <td>{labels.msNumber}</td>
            <td>{data.ms_number}</td>
          </tr>
          <tr>
            <td>{labels.msName}</td>
            <td>{data.ms_name}</td>
          </tr>
          <tr>
            <td>{labels.msIcon}</td>
            <td>{data.ms_icon}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasicInfoViewer;