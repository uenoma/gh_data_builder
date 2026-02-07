import React from 'react';

const DataViewer = ({ data }) => {
  return (
    <div>
      <h2>データ閲覧</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataViewer;