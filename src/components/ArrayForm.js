import React from 'react';

const ArrayForm = ({ title, items, fields, onAdd, onUpdate, onRemove }) => {
  const handleUpdate = (index, field, value) => {
    onUpdate(index, field, value);
  };

  return (
    <div>
      <h2>{title}</h2>
      {items.map((item, index) => (
        <div key={index}>
          {fields.map(field => (
            <input
              key={field}
              type={field === 'value' || field === 'power' || field === 'destructive_power' || field === 'times' || field === 'total_count' || field === 'total_count_times' || field === 'fuel' ? 'number' : 'text'}
              placeholder={field}
              value={item[field] || ''}
              onChange={(e) => handleUpdate(index, field, e.target.value)}
            />
          ))}
          <button type="button" onClick={() => onRemove(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={onAdd}>Add {title.slice(0, -1)}</button>
    </div>
  );
};

export default ArrayForm;