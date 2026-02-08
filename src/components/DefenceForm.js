import React from 'react';
import labels from '../labels';

const DefenceForm = ({ defence, onUpdate }) => {
  const handleUpdate = (key, index, value) => {
    const newValues = [...defence[key]];
    newValues[index] = value;
    onUpdate('defence', key, null, newValues);
  };

  const keyLabels = {
    same_same: labels.sameSame,
    same_different: labels.sameDifferent,
    different_same: labels.differentSame,
    different_different: labels.differentDifferent
  };

  const valueLabels = labels.directionLabels;

  return (
    <div>
      <h2>{labels.defence}</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th></th>
            {valueLabels.map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {defence && Object.keys(defence).map(key => (
            <tr key={key}>
              <th>{keyLabels[key]}</th>
              {defence[key] && defence[key].map((value, index) => (
                <td key={index}>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => handleUpdate(key, index, e.target.value)}
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

export default DefenceForm;