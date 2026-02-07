import React from 'react';
import labels from '../labels';

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

  return (
    <div>
      <h2>{labels.spec}</h2>
      {Object.keys(spec).map(key => (
        <div key={key}>
          <label>{fieldLabels[key] || key}: <input type="text" name={key} value={spec[key]} onChange={handleChange} /></label>
        </div>
      ))}
    </div>
  );
};

export default SpecForm;