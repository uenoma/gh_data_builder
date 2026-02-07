import React from 'react';
import labels from '../labels';

const ShootingTypesForm = ({ shootingTypes, onAdd, onUpdate, onRemove }) => {
  const handleUpdate = (index, field, value) => {
    onUpdate(index, field, value);
  };

  return (
    <div>
      <h2>{labels.shootingTypes}</h2>
      {shootingTypes.map((item, index) => (
        <div key={index}>
          <input type="text" placeholder={labels.name} value={item.name || ''} onChange={(e) => handleUpdate(index, 'name', e.target.value)} />
          <input type="number" placeholder={labels.times} value={item.times || ''} onChange={(e) => handleUpdate(index, 'times', e.target.value)} />
          <label>{labels.concentration}: <input type="checkbox" checked={item.concentration || false} onChange={(e) => handleUpdate(index, 'concentration', e.target.checked)} /></label>
          <input type="number" placeholder={labels.totalCount} value={item.total_count || ''} onChange={(e) => handleUpdate(index, 'total_count', e.target.value)} />
          <input type="number" placeholder={labels.totalCountTimes} value={item.total_count_times || ''} onChange={(e) => handleUpdate(index, 'total_count_times', e.target.value)} />
          <input type="text" placeholder={labels.shootingDirection} value={item.shooting_direction || ''} onChange={(e) => handleUpdate(index, 'shooting_direction', e.target.value)} />
          <input type="text" placeholder={`${labels.hitRates} (comma separated)`} value={item.hit_rates ? item.hit_rates.join(',') : ''} onChange={(e) => handleUpdate(index, 'hit_rates', e.target.value.split(',').map(Number))} />
          <input type="text" placeholder={`${labels.power} (comma separated)`} value={item.power ? item.power.join(',') : ''} onChange={(e) => handleUpdate(index, 'power', e.target.value.split(',').map(Number))} />
          <label>{labels.ammunition}: <input type="checkbox" checked={item.ammunition || false} onChange={(e) => handleUpdate(index, 'ammunition', e.target.checked)} /></label>
          <input type="number" placeholder={labels.destructivePower} value={item.destructive_power || ''} onChange={(e) => handleUpdate(index, 'destructive_power', e.target.value)} />
          <button type="button" onClick={() => onRemove(index)}>{labels.remove}</button>
        </div>
      ))}
      <button type="button" onClick={onAdd}>{labels.add} {labels.shootingTypes.slice(0, -2)}</button>
    </div>
  );
};

export default ShootingTypesForm;