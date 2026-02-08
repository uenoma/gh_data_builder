import React from 'react';
import labels from '../../labels';
import './BodySpecsViewer.css';

const BodySpecsViewer = ({ bodySpecs }) => {
  const partLabels = {
    head: labels.head,
    leg: labels.leg,
    body: labels.body,
    arm: labels.arm,
    backpack: labels.backpack
  };

  return (
    <div className="body-specs-viewer-section">
      <div className="viewer-row">
        {bodySpecs && ['head', 'leg', 'body', 'arm', 'backpack'].map(part => (
          bodySpecs[part] && bodySpecs[part].length > 0 ? (
          <div key={part} className="body-specs-part">
            <table className="body-specs-viewer-table">
            <thead>
              <tr>
                <th>{partLabels[part]}</th>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <th key={`part-${index}`}>{item.name || `Item ${index + 1}`}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{labels.front}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>{item.values && item.values[0] !== null ? item.values[0] : '-'}</td>
                ))}
              </tr>
              <tr>
                <td>{labels.right}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>{item.values && item.values[1] !== null ? item.values[1] : '-'}</td>
                ))}
              </tr>
              <tr>
                <td>{labels.left}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>{item.values && item.values[2] !== null ? item.values[2] : '-'}</td>
                ))}
              </tr>
              <tr className="back-row">
                <td>{labels.back}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>{item.values && item.values[3] !== null ? item.values[3] : '-'}</td>
                ))}
              </tr>
              <tr>
                <td>{labels.armor}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>{item.armor}</td>
                ))}
              </tr>
              <tr>
                <td>{labels.dcp}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index} className={item.part_explosion ? 'dcp-circle' : ''}>{item.dcp || '-'}</td>
                ))}
              </tr>
              <tr>
                <td>{labels.hp}</td>
                {bodySpecs[part] && bodySpecs[part].map((item, index) => (
                  <td key={index}>{part === 'body' && item.body ? `(${item.hp})` : item.hp}</td>
                ))}
              </tr>
            </tbody>
          </table>
          </div>
          ) : null
        ))}
      </div>
    </div>
  );
};

export default BodySpecsViewer;