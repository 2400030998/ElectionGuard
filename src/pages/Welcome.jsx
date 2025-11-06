import React from 'react';
import './Welcome.css';

const Welcome = ({ userName, userRole, onDashboardClick }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
  <div className="welcome-header">
    <div className="welcome-logo">🗳️</div>
    <h1>Welcome, {userName}!</h1>
  </div>
  <p className="welcome-role">Role: {userRole}</p>
  <p className="welcome-message">
    Your account has been created successfully. 
    You now have access to the Election Guard platform.
  </p>
  <button className="dashboard-btn" onClick={onDashboardClick}>
    Go to Dashboard
  </button>
</div>
    </div>
  );
};

export default Welcome;