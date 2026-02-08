import React from 'react';
import labels from '../labels';

const BodyPartForm = ({ bodyPart, onUpdate }) => {
  const handleUpdate = (direction, index, value) => {
    const newValues = [...bodyPart[direction]];
    newValues[index] = value;
    onUpdate('body_part', direction, null, newValues);
  };

  const directionLabels = {
    front: labels.front,
    right: labels.right,
    left: labels.left,
    back: labels.back
  };

  const positionLabels = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  return (
    <div>
      <h3>{labels.bodyPart}</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th></th>
            {positionLabels.map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyPart && ['front', 'right', 'left', 'back'].map(direction => (
            <tr key={direction}>
              <th>{directionLabels[direction]}</th>
              {bodyPart[direction] && bodyPart[direction].map((value, index) => (
                <td key={index}>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleUpdate(direction, index, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BodyPartForm;