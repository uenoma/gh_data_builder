import React from 'react';
import labels from '../labels';

const DataViewer = ({ data }) => {
  return (
    <div>
      <h2>{labels.dataViewer}</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataViewer;