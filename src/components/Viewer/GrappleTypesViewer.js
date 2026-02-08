import React from 'react';
import labels from '../../labels';

const GrappleTypesViewer = ({ items }) => {
  return (
    <div className="viewer-section">
      <h2>{labels.grappleTypes}</h2>
      <table className="viewer-table">
        <thead>
          <tr>
            <th>{labels.grappleMethod}</th>
            <th>{labels.hitRate}</th>
            <th>{labels.power}</th>
            <th>{labels.destructivePower}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.value}</td>
              <td>{item.power}</td>
              <td>{item.destructive_power}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GrappleTypesViewer;