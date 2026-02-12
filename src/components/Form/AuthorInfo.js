import React from 'react';
import labels from '../../labels';
import './AuthorInfo.css';

const AuthorInfo = ({ data, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className="author-info-section">
      <h2>{labels.authorInfo}</h2>
      <table className="author-info-table">
        <tbody>
          <tr>
            <td>{labels.author}</td>
            <td><input type="text" name="author" value={data.author || ''} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>{labels.editPassword}</td>
            <td><input type="password" name="editPassword" value={data.editPassword || ''} onChange={handleChange} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AuthorInfo;