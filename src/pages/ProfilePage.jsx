import React, { useState, useEffect } from 'react';
import './ProfilePage.css';

const ProfilePage = ({ onBack, userName, userRole }) => {
  const [userData, setUserData] = useState({
    fullName: 'Keerthana Chowdary',
    email: 'keerthanachow33@gmail.com',
    phone: '+91 9876543210',
    state: 'Andhra Pradesh',
    district: 'Visakhapatnam',
    constituency: 'Visakhapatnam North',
    pollingStation: 'GVMC School No. 15',
    voterId: 'APV123456789',
    lastVoted: '2024 General Elections',
    electionsParticipated: '3 Elections',
    language: 'English',
    timezone: 'IST (UTC+5:30)',
    theme: 'Light Mode'
  });

  const [accountInfo, setAccountInfo] = useState({
    memberSince: 'November 5, 2025 at 12:09 AM',
    lastLogin: 'Today at 12:09 AM',
    accountStatus: 'Active',
    userId: 'EGCITZ001',
    twoFactorAuth: false,
    lastPasswordChange: 'October 15, 2025',
    securityQuestions: true,
    notifications: true
  });

  const [editingField, setEditingField] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Load user data from localStorage on component mount
  useEffect(() => {
    const savedName = localStorage.getItem('userFullName');
    const savedRole = localStorage.getItem('userRole');
    
    if (savedName) {
      setUserData(prev => ({ ...prev, fullName: savedName }));
    }
    if (savedRole) {
      setUserData(prev => ({ ...prev, role: savedRole }));
    }
  }, []);

  const handleEdit = (field, currentValue) => {
    setEditingField(field);
    setEditValue(currentValue);
  };

  const handleSave = (field) => {
    setUserData(prev => ({ ...prev, [field]: editValue }));
    
    // Save to localStorage if it's name
    if (field === 'fullName') {
      localStorage.setItem('userFullName', editValue);
    }
    
    setEditingField(null);
    setEditValue('');
  };

  const handleCancel = () => {
    setEditingField(null);
    setEditValue('');
  };

  const handleSecuritySettings = () => {
    alert('🔒 Security Settings Panel Opening...\n\n• Change Password\n• Enable Two-Factor Auth\n• Update Security Questions\n• Session Management');
  };

  const toggleTwoFactorAuth = () => {
    setAccountInfo(prev => ({
      ...prev,
      twoFactorAuth: !prev.twoFactorAuth
    }));
    alert(accountInfo.twoFactorAuth ? '❌ Two-Factor Authentication Disabled' : '✅ Two-Factor Authentication Enabled');
  };

  const toggleNotifications = () => {
    setAccountInfo(prev => ({
      ...prev,
      notifications: !prev.notifications
    }));
  };

  const changePassword = () => {
    const newPassword = prompt('Enter new password:');
    if (newPassword && newPassword.length >= 6) {
      setAccountInfo(prev => ({
        ...prev,
        lastPasswordChange: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      }));
      alert('✅ Password changed successfully!');
    } else if (newPassword) {
      alert('❌ Password must be at least 6 characters long');
    }
  };

  const handleThemeChange = () => {
    const newTheme = userData.theme === 'Light Mode' ? 'Dark Mode' : 'Light Mode';
    setUserData(prev => ({ ...prev, theme: newTheme }));
    alert(`🎨 Theme changed to: ${newTheme}`);
  };

  const handleLanguageChange = () => {
    const newLanguage = userData.language === 'English' ? 'Telugu' : 'English';
    setUserData(prev => ({ ...prev, language: newLanguage }));
    alert(`🌐 Language changed to: ${newLanguage}`);
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Active':
      case 'Enabled':
      case 'Verified Voter':
      case 'Set':
        return <span className="status-active">{status}</span>;
      case 'Not Enabled':
        return <span className="status-inactive">{status}</span>;
      default:
        return <span className="status-verified">{status}</span>;
    }
  };

  const renderEditableField = (field, label, value) => {
    if (editingField === field) {
      return (
        <div className="editing-field">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="edit-input"
            autoFocus
          />
          <div className="edit-actions">
            <button className="save-btn" onClick={() => handleSave(field)}>💾 Save</button>
            <button className="cancel-btn" onClick={handleCancel}>❌ Cancel</button>
          </div>
        </div>
      );
    }

    return (
      <div className="info-item">
        <label>{label}:</label>
        <div className="value-with-edit">
          <span>{value}</span>
          <button 
            className="edit-icon-btn"
            onClick={() => handleEdit(field, value)}
            title={`Edit ${label}`}
          >
            ✏️
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="profile-page">
      {/* Header with Back Button */}
      <div className="profile-header">
        <button className="back-btn" onClick={onBack}>
          ← Back to Dashboard
        </button>
        <h1>User Profile</h1>
        <div className="profile-actions">
          <button className="download-btn" onClick={() => alert('📄 Profile data exported!')}>
            📄 Export Profile
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="profile-content">
        <div className="profile-grid">
          {/* Personal Information Box */}
          <div className="info-card personal-info">
            <div className="card-header">
              <div className="card-icon">👤</div>
              <h3>Personal Information</h3>
            </div>
            <div className="card-body">
              {renderEditableField('fullName', 'Full Name', userData.fullName)}
              
              <div className="info-item">
                <label>Role:</label>
                <span className="role-badge">{userRole || 'Citizen'}</span>
              </div>
              
              {renderEditableField('email', 'Email', userData.email)}
              {renderEditableField('phone', 'Phone', userData.phone)}
            </div>
          </div>

          {/* Account Information Box */}
          <div className="info-card account-info">
            <div className="card-header">
              <div className="card-icon">📋</div>
              <h3>Account Information</h3>
            </div>
            <div className="card-body">
              <div className="info-item">
                <label>Member Since:</label>
                <span>{accountInfo.memberSince}</span>
              </div>
              <div className="info-item">
                <label>Last Login:</label>
                <span>{accountInfo.lastLogin}</span>
              </div>
              <div className="info-item">
                <label>Account Status:</label>
                {getStatusBadge(accountInfo.accountStatus)}
              </div>
              <div className="info-item">
                <label>User ID:</label>
                <span>{accountInfo.userId}</span>
              </div>
            </div>
          </div>

          {/* Location Details Box */}
          <div className="info-card location-info">
            <div className="card-header">
              <div className="card-icon">📍</div>
              <h3>Location Details</h3>
            </div>
            <div className="card-body">
              {renderEditableField('state', 'State', userData.state)}
              {renderEditableField('district', 'District', userData.district)}
              {renderEditableField('constituency', 'Constituency', userData.constituency)}
              <div className="info-item">
                <label>Polling Station:</label>
                <span>{userData.pollingStation}</span>
              </div>
            </div>
          </div>

          {/* Voting History Box */}
          <div className="info-card voting-info">
            <div className="card-header">
              <div className="card-icon">🗳️</div>
              <h3>Voting History</h3>
            </div>
            <div className="card-body">
              <div className="info-item">
                <label>Last Voted:</label>
                <span>{userData.lastVoted}</span>
              </div>
              <div className="info-item">
                <label>Voter ID:</label>
                <span>{userData.voterId}</span>
              </div>
              <div className="info-item">
                <label>Voting Status:</label>
                {getStatusBadge('Verified Voter')}
              </div>
              <div className="info-item">
                <label>Elections Participated:</label>
                <span>{userData.electionsParticipated}</span>
              </div>
            </div>
          </div>

          {/* Preferences Box */}
          <div className="info-card preferences-info">
            <div className="card-header">
              <div className="card-icon">⚙️</div>
              <h3>Preferences & Settings</h3>
            </div>
            <div className="card-body">
              <div className="info-item toggle-item">
                <label>Notifications:</label>
                <div className="toggle-switch">
                  <span>{accountInfo.notifications ? 'Enabled' : 'Disabled'}</span>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={accountInfo.notifications}
                      onChange={toggleNotifications}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              
              <div className="info-item">
                <label>Language:</label>
                <div className="value-with-action">
                  <span>{userData.language}</span>
                  <button className="action-btn" onClick={handleLanguageChange}>
                    🔄 Change
                  </button>
                </div>
              </div>
              
              <div className="info-item">
                <label>Timezone:</label>
                <span>{userData.timezone}</span>
              </div>
              
              <div className="info-item">
                <label>Theme:</label>
                <div className="value-with-action">
                  <span>{userData.theme}</span>
                  <button className="action-btn" onClick={handleThemeChange}>
                    🔄 Change
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Security Box */}
          <div className="info-card security-info">
            <div className="card-header">
              <div className="card-icon">🔒</div>
              <h3>Security</h3>
            </div>
            <div className="card-body">
              <div className="info-item toggle-item">
                <label>Two-Factor Auth:</label>
                <div className="toggle-switch">
                  <span>{accountInfo.twoFactorAuth ? 'Enabled' : 'Not Enabled'}</span>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={accountInfo.twoFactorAuth}
                      onChange={toggleTwoFactorAuth}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              
              <div className="info-item">
                <label>Last Password Change:</label>
                <span>{accountInfo.lastPasswordChange}</span>
              </div>
              
              <div className="info-item">
                <label>Security Questions:</label>
                {getStatusBadge(accountInfo.securityQuestions ? 'Set' : 'Not Set')}
              </div>
              
              <div className="security-actions">
                <button className="security-btn" onClick={changePassword}>
                  🔑 Change Password
                </button>
                <button className="security-btn secondary" onClick={handleSecuritySettings}>
                  ⚙️ Security Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;