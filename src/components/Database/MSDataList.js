import React, { useState, useEffect } from 'react';
import './MSDataList.css';

const MsDataList = () => {
  const [mobileSuits, setMobileSuits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMobileSuits = async () => {
      try {
        const response = await fetch('https://dndhideout.com/gh/gh_backend/public/api/mobile-suits');
        if (!response.ok) {
          throw new Error('Failed to fetch mobile suits');
        }
        const data = await response.json();
        setMobileSuits(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMobileSuits();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="ms-data-list">
      <h2>Mobile Suit Database</h2>
      <table className="ms-table">
        <thead>
          <tr>
            <th>MS Number</th>
            <th>MS Name</th>
            <th>Optional Name</th>
            <th>Icon</th>
          </tr>
        </thead>
        <tbody>
          {mobileSuits.map((ms) => (
            <tr key={ms.id}>
              <td>{ms.ms_number}</td>
              <td>{ms.ms_name}</td>
              <td>{ms.ms_name_optional || '-'}</td>
              <td>
                {ms.ms_icon ? (
                  <img src={ms.ms_icon} alt={`${ms.ms_name} icon`} className="ms-icon" />
                ) : (
                  '-'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MsDataList;