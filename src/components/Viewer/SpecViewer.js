import React from 'react';
import labels from '../../labels';

const SpecViewer = ({ spec }) => {
  const fieldLabels = {
    sensor_rank: labels.sensorRank,
    motion_thrust: labels.motionThrust,
    min_straight: labels.minStraight,
    size: labels.size,
    stall_speed: labels.stallSpeed,
    pp_limit: labels.ppLimit,
    def_modifier: labels.defModifier,
    walk_speed: labels.walkSpeed
  };

  const fields = [
    ['sensor_rank', 'motion_thrust', 'min_straight'],
    ['size', 'stall_speed', 'pp_limit'],
    ['def_modifier', 'walk_speed']
  ];

  return (
    <div className="viewer-section">
      <h2>{labels.spec}</h2>
      <table className="viewer-table">
        <tbody>
          {fields.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map(field => (
                <React.Fragment key={field}>
                  <td>{fieldLabels[field] || field}</td>
                  <td>{spec[field]}</td>
                </React.Fragment>
              ))}
              {row.length < 3 && <td colSpan={2}></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecViewer;