import React from 'react';
import labels from '../../labels';
import './WeaponSpecsForm.css';

const WeaponSpecsForm = ({ items, onAdd, onUpdate, onRemove }) => {
  const handleUpdate = (index, field, value) => {
    onUpdate(index, field, value);
  };

  return (
    <div className="weapon-specs-form">
      <h2>{labels.weaponSpecs}</h2>
      <table className="weapon-specs-table">
        <thead>
          <tr>
            <th>{labels.weaponName}</th>
            <th>{labels.armor}</th>
            <th>{labels.dcp}</th>
            <th>{labels.hp}</th>
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
                  className="weapon-spec-name-input"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.armor || ''}
                  onChange={(e) => handleUpdate(index, 'armor', e.target.value)}
                  className="weapon-spec-armor-input"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.dcp || ''}
                  onChange={(e) => handleUpdate(index, 'dcp', e.target.value)}
                  className="weapon-spec-dcp-input"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.hp || ''}
                  onChange={(e) => handleUpdate(index, 'hp', e.target.value)}
                  className="weapon-spec-hp-input"
                />
              </td>
              <td>
                <button type="button" onClick={() => onRemove(index)} className="weapon-spec-remove-button">{labels.remove}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="weapon-spec-add-button" onClick={onAdd}>{labels.add} {labels.weaponSpec}</button>
    </div>
  );
};

export default WeaponSpecsForm;