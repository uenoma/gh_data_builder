import React from 'react';

const ShootingTypesForm = ({ shootingTypes, onAdd, onUpdate, onRemove }) => {
  const handleUpdate = (index, field, value) => {
    onUpdate(index, field, value);
  };

  return (
    <div>
      <h2>Shooting Types</h2>
      {shootingTypes.map((item, index) => (
        <div key={index}>
          <input type="text" placeholder="name" value={item.name || ''} onChange={(e) => handleUpdate(index, 'name', e.target.value)} />
          <input type="number" placeholder="times" value={item.times || ''} onChange={(e) => handleUpdate(index, 'times', e.target.value)} />
          <label>Concentration: <input type="checkbox" checked={item.concentration || false} onChange={(e) => handleUpdate(index, 'concentration', e.target.checked)} /></label>
          <input type="number" placeholder="total_count" value={item.total_count || ''} onChange={(e) => handleUpdate(index, 'total_count', e.target.value)} />
          <input type="number" placeholder="total_count_times" value={item.total_count_times || ''} onChange={(e) => handleUpdate(index, 'total_count_times', e.target.value)} />
          <input type="text" placeholder="shooting_direction" value={item.shooting_direction || ''} onChange={(e) => handleUpdate(index, 'shooting_direction', e.target.value)} />
          <input type="text" placeholder="hit_rates (comma separated)" value={item.hit_rates ? item.hit_rates.join(',') : ''} onChange={(e) => handleUpdate(index, 'hit_rates', e.target.value.split(',').map(Number))} />
          <input type="text" placeholder="power (comma separated)" value={item.power ? item.power.join(',') : ''} onChange={(e) => handleUpdate(index, 'power', e.target.value.split(',').map(Number))} />
          <label>Ammunition: <input type="checkbox" checked={item.ammunition || false} onChange={(e) => handleUpdate(index, 'ammunition', e.target.checked)} /></label>
          <input type="number" placeholder="destructive_power" value={item.destructive_power || ''} onChange={(e) => handleUpdate(index, 'destructive_power', e.target.value)} />
          <button type="button" onClick={() => onRemove(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={onAdd}>Add Shooting Type</button>
    </div>
  );
};

export default ShootingTypesForm;