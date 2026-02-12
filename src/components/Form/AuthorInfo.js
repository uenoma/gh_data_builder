import React, { useState } from 'react';
import labels from '../../labels';
import './AuthorInfo.css';

const AuthorInfo = ({ data, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="author-info-section">
      <h2>{labels.authorInfo}</h2>
      <table className="author-info-table">
        <tbody>
          <tr>
            <td>{labels.author}</td>
            <td><input type="text" name="creator_name" value={data.creator_name || ''} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>{labels.editPassword}</td>
            <td>
              <div className="password-input-wrapper">
                <input type={showPassword ? 'text' : 'password'} name="edit_password" value={data.edit_password || ''} onChange={handleChange} />
                <button type="button" onClick={togglePasswordVisibility} className="password-toggle-button">
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AuthorInfo;