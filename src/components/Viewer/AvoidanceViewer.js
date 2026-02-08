import React from 'react';
import labels from '../../labels';

const AvoidanceViewer = ({ avoidance }) => {
  const directionLabels = {
    front: labels.front,
    side: labels.side,
    back: labels.back,
  };

  const valueLabels = ["〜2", "〜4", "〜6", "〜7", "〜12", "13〜"];

  return (
    <div className="viewer-section">
      <h2>{labels.avoidance}</h2>
      <table className="viewer-table">
        <thead>
          <tr>
            <th></th>
            {valueLabels.map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {avoidance &&
            ["front", "side", "back"].map((direction) => (
              <tr key={direction}>
                <th>{directionLabels[direction]}</th>
                {avoidance[direction] &&
                  avoidance[direction].values &&
                  avoidance[direction].values.map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvoidanceViewer;