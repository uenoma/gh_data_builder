import React from 'react';
import labels from '../labels';
import './ReceiveTypesForm.css';

const ReceiveTypesForm = ({ items, onAdd, onUpdate, onRemove }) => {
  const handleUpdate = (index, field, value) => {
    onUpdate(index, field, value);
  };

  return (
    <div className="receive-types-form">
      <h2>{labels.receiveTypes}</h2>
      <table className="receive-types-table">
        <thead>
          <tr>
            <th>{labels.receiveMethod}</th>
            <th>{labels.receiveRate}</th>
            <th>{labels.action}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={item.nama || ''}
                  onChange={(e) => handleUpdate(index, 'nama', e.target.value)}
                  className="receive-type-name-input"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.value || ''}
                  onChange={(e) => handleUpdate(index, 'value', e.target.value)}
                  className="receive-type-value-input"
                />
              </td>
              <td>
                <button type="button" onClick={() => onRemove(index)} className="receive-type-remove-button">{labels.remove}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="receive-type-add-button" onClick={onAdd}>{labels.add} {labels.receiveType}</button>
    </div>
  );
};

export default ReceiveTypesForm;