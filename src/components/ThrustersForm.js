import React from 'react';
import labels from '../labels';
import './ThrustersForm.css';

const ThrustersForm = ({ items, onAdd, onUpdate, onRemove }) => {
  const handleUpdate = (index, field, value) => {
    onUpdate(index, field, value);
  };

  return (
    <div className="thrusters-form">
      <h2>{labels.thrusters}</h2>
      <table className="thrusters-table">
        <thead>
          <tr>
            <th>{labels.thrusterType}</th>
            <th>{labels.thrust}</th>
            <th>{labels.direction}</th>
            <th>{labels.fuel}</th>
            <th>{labels.action}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={item.name || ''}
                  onChange={(e) => handleUpdate(index, 'name', e.target.value)}
                  className="thruster-name-input"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.value || ''}
                  onChange={(e) => handleUpdate(index, 'value', e.target.value)}
                  className="thruster-value-input"
                />
              </td>
              <td>
                <select
                  value={item.direction || ''}
                  onChange={(e) => handleUpdate(index, 'direction', e.target.value)}
                  className="thruster-direction-select"
                >
                  <option value=""></option>
                  <option value="F">F</option>
                  <option value="B">B</option>
                  <option value="A">A</option>
                  <option value="T">T</option>
                </select>
              </td>
              <td>
                <input
                  type="number"
                  value={item.fuel || ''}
                  onChange={(e) => handleUpdate(index, 'fuel', e.target.value)}
                  className="thruster-fuel-input"
                />
              </td>
              <td>
                <button type="button" onClick={() => onRemove(index)} className="thruster-remove-button">{labels.remove}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="thruster-add-button" onClick={onAdd}>{labels.add} {labels.thruster}</button>
    </div>
  );
};

export default ThrustersForm;