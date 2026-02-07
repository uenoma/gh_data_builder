import React from 'react';
import labels from '../labels';

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
    arm: labels.arm
  };

  const rowLabels = [
    '名前',
    '正面',
    '右側面',
    '左側面',
    '背面',
    '装甲',
    'DCP',
    '部分爆発',
    '耐久力'
  ];

  return (
    <div>
      {bodySpecs && ['head', 'leg', 'body', 'arm'].map(part => (
        <div key={part} style={{ marginBottom: '30px' }}>
          <h3>{partLabels[part]}</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>項目</th>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <th key={index}>
                    {index + 1}
                    <button 
                      type="button" 
                      onClick={() => removeItem(part, index)}
                      style={{ marginLeft: '5px', fontSize: '0.8em' }}
                    >
                      ×
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>名前</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <input 
                      type="text" 
                      value={item.name || ''} 
                      onChange={(e) => handleUpdate(part, index, 'name', null, e.target.value)}
                      style={{ width: '100px' }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>正面</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <input 
                      type="number" 
                      value={item.values && item.values[0] !== null ? item.values[0] : ''} 
                      onChange={(e) => handleUpdate(part, index, 'values', 0, e.target.value)}
                      style={{ width: '60px' }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>右側面</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <input 
                      type="number" 
                      value={item.values && item.values[1] !== null ? item.values[1] : ''} 
                      onChange={(e) => handleUpdate(part, index, 'values', 1, e.target.value)}
                      style={{ width: '60px' }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>左側面</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <input 
                      type="number" 
                      value={item.values && item.values[2] !== null ? item.values[2] : ''} 
                      onChange={(e) => handleUpdate(part, index, 'values', 2, e.target.value)}
                      style={{ width: '60px' }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>背面</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <input 
                      type="number" 
                      value={item.values && item.values[3] !== null ? item.values[3] : ''} 
                      onChange={(e) => handleUpdate(part, index, 'values', 3, e.target.value)}
                      style={{ width: '60px' }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>装甲</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <input 
                      type="number" 
                      value={item.armor !== null && item.armor !== undefined ? item.armor : ''} 
                      onChange={(e) => handleUpdate(part, index, 'armor', null, e.target.value)}
                      style={{ width: '60px' }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>DCP / 部分爆発</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <input 
                        type="number" 
                        value={item.dcp !== null && item.dcp !== undefined ? item.dcp : ''} 
                        onChange={(e) => handleUpdate(part, index, 'dcp', null, e.target.value)}
                        style={{ width: '50px' }}
                        placeholder="DCP"
                      />
                      <input 
                        type="checkbox" 
                        checked={item.part_explosion || false} 
                        onChange={(e) => handleUpdate(part, index, 'part_explosion', null, e.target.checked)}
                        title="部分爆発"
                      />
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td>耐久力{part === 'body' ? ' / 胴体と耐久力を共有' : ''}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <input 
                        type="number" 
                        value={item.hp !== null && item.hp !== undefined ? item.hp : ''} 
                        onChange={(e) => handleUpdate(part, index, 'hp', null, e.target.value)}
                        style={{ width: '50px' }}
                        placeholder="HP"
                      />
                      {part === 'body' && (
                        <input 
                          type="checkbox" 
                          checked={item.body || false} 
                          onChange={(e) => handleUpdate(part, index, 'body', null, e.target.checked)}
                          title="胴体と耐久力を共有"
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
            style={{ marginTop: '10px' }}
          >
            {labels.add}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BodySpecsForm;