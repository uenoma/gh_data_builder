import React from 'react';
import labels from '../../labels';
import './ShootingTypesForm.css';

const ShootingTypesForm = ({ shootingTypes, onAdd, onUpdate, onRemove, className }) => {
  const handleUpdate = (index, field, value) => {
    onUpdate(index, field, value);
  };

  return (
    <div className={className}>
      <h2>{labels.shootingTypes}</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th colspan="2">{labels.name}</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7・8</th>
            <th>9・10</th>
            <th>11・12</th>
            <th>13〜15</th>
            <th>{labels.times}</th>
            <th>{labels.concentration}</th>
            <th>{labels.totalCount}</th>
            <th>{labels.totalCountTimes}</th>
            <th>{labels.shootingDirection}</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {shootingTypes.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td rowSpan="2">
                  <input 
                    type="text" 
                    value={item.name || ''} 
                    onChange={(e) => handleUpdate(index, 'name', e.target.value)}
                    className="body-specs-name-input"
                  />
                </td>
                <td>命中</td>
                {Array.from({ length: 10 }, (_, i) => (
                  <td key={`hit-${i}`} className="hit-power-cell">
                    <input 
                      type="text" 
                      value={item.hit_rates ? item.hit_rates[i] || '' : ''} 
                      onChange={(e) => {
                        const newHitRates = [...(item.hit_rates || Array(10).fill(null))];
                        newHitRates[i] = e.target.value === '' ? null : e.target.value;
                        handleUpdate(index, 'hit_rates', newHitRates);
                      }}
                      className="hit-power-input"
                    />
                  </td>
                ))}
                <td>
                  <input 
                    type="number" 
                    value={item.times || ''} 
                    onChange={(e) => handleUpdate(index, 'times', e.target.value)}
                    className="body-specs-value-input narrow-input"
                  />
                </td>
                <td>
                  <div className='checkbox-container'>
                    <input 
                      type="checkbox" 
                      checked={item.concentration || false} 
                      onChange={(e) => handleUpdate(index, 'concentration', e.target.checked)}
                    />
                  </div>
                </td>
                <td>
                  <input 
                    type="number" 
                    value={item.total_count || ''} 
                    onChange={(e) => handleUpdate(index, 'total_count', e.target.value)}
                    className="body-specs-value-input narrow-input"
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    value={item.total_count_times || ''} 
                    onChange={(e) => handleUpdate(index, 'total_count_times', e.target.value)}
                    className="body-specs-value-input narrow-input"
                  />
                </td>
                <td>
                  <input 
                    type="text" 
                    value={item.shooting_direction || ''} 
                    onChange={(e) => handleUpdate(index, 'shooting_direction', e.target.value)}
                    className="body-specs-name-input"
                  />
                </td>
                <td rowSpan="2">
                  <button 
                    type="button" 
                    onClick={() => onRemove(index)}
                    className="body-specs-remove-button"
                  >
                    削除
                  </button>
                </td>
              </tr>
              <tr>
                <td>威力</td>
                {Array.from({ length: 10 }, (_, i) => (
                  <td key={`power-${i}`} className="hit-power-cell">
                    <input 
                      type="text" 
                      value={item.power ? item.power[i] || '' : ''} 
                      onChange={(e) => {
                        const newPower = [...(item.power || Array(10).fill(null))];
                        newPower[i] = e.target.value === '' ? null : e.target.value;
                        handleUpdate(index, 'power', newPower);
                      }}
                      className="hit-power-input"
                    />
                  </td>
                ))}
                <td colSpan="5">
                  <div className="destructive-power-ammunition-cell">
                    {labels.destructivePower}
                    <input 
                      type="number" 
                      value={item.destructive_power || ''} 
                      onChange={(e) => handleUpdate(index, 'destructive_power', e.target.value)}
                      className="body-specs-value-input narrow-input"
                    />
                    <span className="ammunition-label">{labels.ammunition}</span>
                    <input 
                      type="checkbox" 
                      checked={item.ammunition || false} 
                      onChange={(e) => handleUpdate(index, 'ammunition', e.target.checked)}
                    />
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <button 
        type="button" 
        onClick={onAdd}
        className="body-specs-add-button"
      >
        {labels.add} {labels.shootingTypes.slice(0, -2)}
      </button>
    </div>
  );
};

export default ShootingTypesForm;