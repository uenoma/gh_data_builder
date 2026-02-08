import React from 'react';
import labels from '../../labels';

const DefenceViewer = ({ defence }) => {
  return (
    <div className="viewer-section">
      <h2>{labels.defence}</h2>
      <table className="viewer-table">
        <thead>
          <tr>
            <th></th>
            <th>{labels.front}</th>
            <th>{labels.right}</th>
            <th>{labels.left}</th>
            <th>{labels.back}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{labels.sameSame}</td>
            {defence.same_same.map((val, i) => (
              <td key={i}>{val}</td>
            ))}
          </tr>
          <tr>
            <td>{labels.sameDifferent}</td>
            {defence.same_different.map((val, i) => (
              <td key={i}>{val}</td>
            ))}
          </tr>
          <tr>
            <td>{labels.differentSame}</td>
            {defence.different_same.map((val, i) => (
              <td key={i}>{val}</td>
            ))}
          </tr>
          <tr>
            <td>{labels.differentDifferent}</td>
            {defence.different_different.map((val, i) => (
              <td key={i}>{val}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DefenceViewer;