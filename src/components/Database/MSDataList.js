import React, { useState, useEffect } from 'react';
import './MSDataList.css';
import { fetchMobileSuits } from '../../api';

const MsDataList = ({ setData, setView, selectedMS, setSelectedMS, sortKey, setSortKey, sortOrder, setSortOrder, refreshTrigger }) => {
  const [mobileSuits, setMobileSuits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedMobileSuits = [...mobileSuits].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    if (sortOrder === 'asc') {
      return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    } else {
      return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
    }
  });

  const filteredMobileSuits = sortedMobileSuits.filter(ms =>
    ms.ms_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ms.ms_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (ms.ms_name_optional && ms.ms_name_optional.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (ms.data_id && ms.data_id.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (ms.creator?.creator_name && ms.creator.creator_name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    const loadMobileSuits = async () => {
      try {
        const data = await fetchMobileSuits();
        setMobileSuits(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMobileSuits();
  }, [refreshTrigger]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div>
      <div className="ms-data-list">
        <h2>機体データ一覧</h2>
        <input
          type="text"
          placeholder="型式番号、機体名称、オプション、識別子、作成者で検索"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
        />
        <table className="ms-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('ms_number')} style={{ cursor: 'pointer' }}>型式番号 {sortKey === 'ms_number' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
              <th onClick={() => handleSort('ms_name')} style={{ cursor: 'pointer' }}>機体名称 {sortKey === 'ms_name' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
              <th onClick={() => handleSort('ms_name_optional')} style={{ cursor: 'pointer' }}>オプション {sortKey === 'ms_name_optional' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>              
              <th onClick={() => handleSort('data_id')} style={{ cursor: 'pointer' }}>識別子 {sortKey === 'data_id' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>              
              <th>イメージ</th>
              <th onClick={() => handleSort('updated_at')} style={{ cursor: 'pointer' }}>更新日 {sortKey === 'updated_at' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
              <th onClick={() => handleSort('creator_name')} style={{ cursor: 'pointer' }}>作成者 {sortKey === 'creator_name' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
            </tr>
          </thead>
          <tbody>
            {filteredMobileSuits.map((ms) => (
              <tr key={ms.id} onClick={() => { setSelectedMS(ms); setData(ms); setView('viewer'); }} style={{ cursor: 'pointer' }} className={selectedMS && selectedMS.id === ms.id ? 'selected' : ''}>
                <td>{ms.ms_number}</td>
                <td>{ms.ms_name}</td>
                <td>{ms.ms_name_optional || '-'}</td>
                <td>{ms.data_id}</td>
                <td>
                  {ms.ms_icon ? (
                    <img src={ms.ms_icon} alt={`${ms.ms_name} icon`} className="ms-icon" />
                  ) : (
                    '-'
                  )}
                </td>
                <td>{ms.updated_at ? new Date(ms.updated_at).toLocaleDateString('ja-JP') : '-'}</td>
                <td>{ms.creator?.creator_name || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MsDataList;