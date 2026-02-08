import React from 'react';
import labels from '../labels';
import './GrappleTypesForm.css';

const GrappleTypesForm = ({ items, onAdd, onUpdate, onRemove }) => {
  const handleUpdate = (index, field, value) => {
    onUpdate(index, field, value);
  };

  return (
    <div className="grapple-types-form">
      <h2>{labels.grappleTypes}</h2>
      <table className="grapple-types-table">
        <thead>
          <tr>
            <th>{labels.grappleMethod}</th>
            <th>{labels.hitRate}</th>
            <th>{labels.power}</th>
            <th>{labels.destructivePower}</th>
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
                  className="grapple-type-name-input"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.value || ''}
                  onChange={(e) => handleUpdate(index, 'value', e.target.value)}
                  className="grapple-type-value-input"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.power || ''}
                  onChange={(e) => handleUpdate(index, 'power', e.target.value)}
                  className="grapple-type-power-input"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.destructive_power || ''}
                  onChange={(e) => handleUpdate(index, 'destructive_power', e.target.value)}
                  className="grapple-type-destructive-power-input"
                />
              </td>
              <td>
                <button type="button" onClick={() => onRemove(index)} className="grapple-type-remove-button">{labels.remove}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="grapple-type-add-button" onClick={onAdd}>{labels.add} {labels.grappleType}</button>
    </div>
  );
};

export default GrappleTypesForm;