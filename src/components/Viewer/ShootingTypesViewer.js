import React from 'react';
import labels from '../../labels';

const ShootingTypesViewer = ({ items }) => {
  return (
    <div className="viewer-section">
      <h3>{labels.shootingAndWeapons}</h3>
      <table className="viewer-table">
        <thead>
          <tr>
            <th>{labels.name}</th>
            <th>{labels.hitRate}</th>
            <th>{labels.power}</th>
            <th>{labels.ammunition}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.hit_rate}</td>
              <td>{item.power}</td>
              <td>{item.ammunition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShootingTypesViewer;