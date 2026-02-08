import React from 'react';
import labels from '../../labels';
import './BodySpecsForm.css';

const BodySpecsForm = ({ bodySpecs, onUpdate }) => {
  const handleUpdate = (part, index, field, valueIndex, value) => {
    const newItems = [...bodySpecs[part]];
    if (field === 'values') {
      const newValues = [...(newItems[index].values || [null, null, null, null])];
      newValues[valueIndex] = value === '' ? null : Number(value);
      newItems[index].values = newValues;
    } else if (field === 'part_explosion' || field === 'body') {
      newItems[index][field] = value;
    } else {
      newItems[index][field] = value === '' ? (field === 'name' ? '' : null) : (field === 'name' ? value : Number(value));
    }
    onUpdate('body_specs', part, null, newItems);
  };

  const addItem = (part) => {
    const newItem = { 
      name: '', 
      values: [null, null, null, null], 
      armor: null, 
      dcp: null, 
      part_explosion: false, 
      hp: null
    };
    if (part === 'body') {
      newItem.body = false;
    }
    const newItems = [...bodySpecs[part], newItem];
    onUpdate('body_specs', part, null, newItems);
  };

  const removeItem = (part, index) => {
    const newItems = bodySpecs[part].filter((_, i) => i !== index);
    onUpdate('body_specs', part, null, newItems);
  };

  const partLabels = {
    head: labels.head,
    leg: labels.leg,
    body: labels.body,
    arm: labels.arm,
    backpack: labels.backpack
  };

  return (
    <div>
      {bodySpecs && ['head', 'leg', 'body', 'arm', 'backpack'].map(part => (
        <div key={part} className="body-specs-part">
          {/* <h3>{partLabels[part]}</h3> */}
          <table className="body-specs-table">
            <thead>
              <tr>
                <th>{partLabels[part]}</th>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <th key={`part-${index}`}>
                    <button 
                      type="button" 
                      onClick={() => removeItem(part, index)}
                      className="body-specs-remove-button"
                    >
                      削除
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{labels.name}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <input 
                      type="text" 
                      value={item.name || ''} 
                      onChange={(e) => handleUpdate(part, index, 'name', null, e.target.value)}
                      className="body-specs-name-input"
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>{labels.front}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <input 
                      type="number" 
                      value={item.values && item.values[0] !== null ? item.values[0] : ''} 
                      onChange={(e) => handleUpdate(part, index, 'values', 0, e.target.value)}
                      className="body-specs-value-input"
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>{labels.right}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <input 
                      type="number" 
                      value={item.values && item.values[1] !== null ? item.values[1] : ''} 
                      onChange={(e) => handleUpdate(part, index, 'values', 1, e.target.value)}
                      className="body-specs-value-input"
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>{labels.left}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <input 
                      type="number" 
                      value={item.values && item.values[2] !== null ? item.values[2] : ''} 
                      onChange={(e) => handleUpdate(part, index, 'values', 2, e.target.value)}
                      className="body-specs-value-input"
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>{labels.back}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <input 
                      type="number" 
                      value={item.values && item.values[3] !== null ? item.values[3] : ''} 
                      onChange={(e) => handleUpdate(part, index, 'values', 3, e.target.value)}
                      className="body-specs-value-input"
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>{labels.armor}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <input 
                      type="number" 
                      value={item.armor !== null && item.armor !== undefined ? item.armor : ''} 
                      onChange={(e) => handleUpdate(part, index, 'armor', null, e.target.value)}
                      className="body-specs-armor-input"
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>{labels.dcp} / {labels.partExplosion}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <div className="body-specs-combined-cell">
                      <input 
                        type="number" 
                        value={item.dcp !== null && item.dcp !== undefined ? item.dcp : ''} 
                        onChange={(e) => handleUpdate(part, index, 'dcp', null, e.target.value)}
                        className="body-specs-dcp-input"
                        placeholder="DCP"
                      />
                      <input 
                        type="checkbox" 
                        checked={item.part_explosion || false} 
                        onChange={(e) => handleUpdate(part, index, 'part_explosion', null, e.target.checked)}
                        title={labels.partExplosion}
                      />
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td>{labels.hp}{part === 'body' ? ` / ${labels.bodyFlag}` : ''}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <div className="body-specs-combined-cell">
                      <input 
                        type="number" 
                        value={item.hp !== null && item.hp !== undefined ? item.hp : ''} 
                        onChange={(e) => handleUpdate(part, index, 'hp', null, e.target.value)}
                        className="body-specs-hp-input"
                        placeholder="HP"
                      />
                      {part === 'body' && (
                        <input 
                          type="checkbox" 
                          checked={item.body || false} 
                          onChange={(e) => handleUpdate(part, index, 'body', null, e.target.checked)}
                          title={labels.bodyFlag}
                        />
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <button 
            type="button" 
            onClick={() => addItem(part)}
            className="body-specs-add-button"
          >
            {labels.add}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BodySpecsForm;