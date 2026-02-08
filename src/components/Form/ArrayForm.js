import React from 'react';
import labels from '../../labels';
import './ArrayForm.css';

const ArrayForm = ({ title, items, fields, onAdd, onUpdate, onRemove }) => {
  const handleUpdate = (index, field, value) => {
    onUpdate(index, field, value);
  };

  const fieldLabels = {
    nama: labels.name,
    value: labels.value,
    name: labels.name,
    direction: labels.direction,
    fuel: labels.fuel,
    power: labels.power,
    destructive_power: labels.destructivePower,
    armor: labels.armor,
    dcp: labels.dcp,
    hp: labels.hp
  };

  return (
    <div className="array-form">
      <h2>{title}</h2>
      {items.map((item, index) => (
        <div key={index} className="array-form-item">
          {fields.map(field => (
            <input
              key={field}
              type={field === 'value' || field === 'power' || field === 'destructive_power' || field === 'times' || field === 'total_count' || field === 'total_count_times' || field === 'fuel' || field === 'armor' || field === 'dcp' || field === 'hp' ? 'number' : 'text'}
              placeholder={fieldLabels[field] || field}
              value={item[field] || ''}
              onChange={(e) => handleUpdate(index, field, e.target.value)}
            />
          ))}
          <button type="button" onClick={() => onRemove(index)}>{labels.remove}</button>
        </div>
      ))}
      <button type="button" className="array-form-add-button" onClick={onAdd}>{labels.add} {title.slice(0, -1)}</button>
    </div>
  );
};

export default ArrayForm;