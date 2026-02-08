import React from 'react';
import labels from '../../labels';
import './SpecForm.css';

const SpecForm = ({ spec, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

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
    <div>
      <h2>{labels.spec}</h2>
      <table className="spec-form-table">
        <tbody>
          {fields.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map(field => (
                <React.Fragment key={field}>
                  <td>{fieldLabels[field] || field}</td>
                  <td><input type="text" name={field} value={spec[field]} onChange={handleChange} className="narrow-input" /></td>
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

export default SpecForm;