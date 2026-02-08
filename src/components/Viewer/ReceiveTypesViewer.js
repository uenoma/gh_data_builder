import React from 'react';
import labels from '../../labels';

const ReceiveTypesViewer = ({ items }) => {
  return (
    <div className="viewer-section">
      <h2>{labels.receiveTypes}</h2>
      <table className="viewer-table">
        <thead>
          <tr>
            <th>{labels.receiveMethod}</th>
            <th>{labels.receiveRate}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.nama}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReceiveTypesViewer;