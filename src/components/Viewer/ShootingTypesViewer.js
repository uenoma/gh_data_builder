import React from 'react';
import labels from '../../labels';

const ShootingTypesViewer = ({ items }) => {
  return (
    <div className="viewer-section">
      <h3>{labels.shootingAndWeapons}</h3>
      <table className="viewer-table">
        <thead>
          <tr>
            <th colSpan="2" className="shooting-name-column">{labels.name}</th>
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
            <th>{labels.totalCountTimes}</th>
            <th>{labels.totalCount}</th>
            <th>{labels.shootingDirection}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td rowSpan="2">{item.name}</td>
                <td>命中</td>
                {Array.from({ length: 10 }, (_, i) => (
                  <td key={`hit-${i}`}>{item.hit_rates && (item.hit_rates[i] === 0 ? 0 : item.hit_rates[i] ?? '-')}</td>
                ))}
                <td className={item.concentration ? 'dcp-circle' : ''}>{item.times || ''}</td>
                <td>{item.total_count_times > 1 ? `×${item.total_count_times}` : ''}</td>
                <td>{item.total_count || ''}</td>
                <td>{item.shooting_direction || ''}</td>
              </tr>
              <tr>
                <td>威力</td>
                {Array.from({ length: 10 }, (_, i) => {
                  const powerValue = Array.isArray(item.power) ? (item.power[i] ?? '') : item.power ? (item.power.toString()[i] ?? '') : '';
                  const displayValue = item.ammunition && i >= 1 && powerValue ? `(${powerValue})` : powerValue;
                  return <td key={`power-${i}`}>{displayValue}</td>;
                })}
                <td colSpan="4">{item.ammunition || ''} 破壊力: {item.destructive_power || ''}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShootingTypesViewer;