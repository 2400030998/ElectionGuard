import React from 'react';
import './Profile.css';

const Profile = ({ onBack, userName, userRole }) => {
    // Get user data from localStorage as fallback
    const savedName = localStorage.getItem('userFullName') || 'Keerthana Chowdary';
    const savedRole = localStorage.getItem('userRole') || 'citizen';
    const savedEmail = localStorage.getItem('userEmail') || localStorage.getItem('currentUser') || 'keerthanachow33@gmail.com';

    const handleBackClick = () => {
        if (onBack) {
            onBack();
        } else {
            window.history.back();
        }
    };

    return (
        <div className="profile-container-stylish">
            {/* Header with Back Button */}
            <div className="profile-header-stylish">
                <button className="back-btn-stylish" onClick={handleBackClick}>
                    ← Back to Dashboard
                </button>
                <h1>User Profile</h1>
                <div className="header-actions">
                    <button className="edit-icon-btn" onClick={() => alert('Edit Profile')}>✏️</button>
                    <button className="download-btn" onClick={() => alert('Export Profile')}>📄</button>
                </div>
            </div>

            {/* Main Profile Grid */}
            <div className="profile-grid-stylish">
                
                {/* Personal Information Card */}
                <div className="profile-card personal-card">
                    <div className="card-header">
                        <div className="card-icon">👤</div>
                        <h3>Personal Information</h3>
                    </div>
                    <div className="card-content">
                        <div className="info-row">
                            <span className="info-label">Full Name</span>
                            <span className="info-value">{userName || savedName}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Role</span>
                            <span className="role-badge">{userRole || savedRole}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Email</span>
                            <span className="info-value">{savedEmail}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Phone</span>
                            <span className="info-value">+91 9876543210</span>
                        </div>
                    </div>
                </div>

                {/* Account Information Card */}
                <div className="profile-card account-card">
                    <div className="card-header">
                        <div className="card-icon">📋</div>
                        <h3>Account Information</h3>
                    </div>
                    <div className="card-content">
                        <div className="info-row">
                            <span className="info-label">Member Since</span>
                            <span className="info-value">Nov 5, 2025</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Last Login</span>
                            <span className="info-value">Today, 12:09 AM</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Account Status</span>
                            <span className="status-badge active">Active</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">User ID</span>
                            <span className="info-value">EGCITZ001</span>
                        </div>
                    </div>
                </div>

                {/* Location Details Card */}
                <div className="profile-card location-card">
                    <div className="card-header">
                        <div className="card-icon">📍</div>
                        <h3>Location Details</h3>
                    </div>
                    <div className="card-content">
                        <div className="info-row">
                            <span className="info-label">State</span>
                            <span className="info-value">Andhra Pradesh</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">District</span>
                            <span className="info-value">Visakhapatnam</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Constituency</span>
                            <span className="info-value">Visakhapatnam North</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Polling Station</span>
                            <span className="info-value">GVMC School No. 15</span>
                        </div>
                    </div>
                </div>

                {/* Voting History Card */}
                <div className="profile-card voting-card">
                    <div className="card-header">
                        <div className="card-icon">🗳️</div>
                        <h3>Voting History</h3>
                    </div>
                    <div className="card-content">
                        <div className="info-row">
                            <span className="info-label">Last Voted</span>
                            <span className="info-value">2024 General Elections</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Voter ID</span>
                            <span className="info-value">APV123456789</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Voting Status</span>
                            <span className="status-badge verified">Verified Voter</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Elections Participated</span>
                            <span className="info-value">3 Elections</span>
                        </div>
                    </div>
                </div>

                {/* Preferences Card */}
                <div className="profile-card preferences-card">
                    <div className="card-header">
                        <div className="card-icon">⚙️</div>
                        <h3>Preferences & Settings</h3>
                    </div>
                    <div className="card-content">
                        <div className="info-row">
                            <span className="info-label">Notifications</span>
                            <span className="status-badge enabled">Enabled</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Language</span>
                            <span className="info-value">English</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Timezone</span>
                            <span className="info-value">IST (UTC+5:30)</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Theme</span>
                            <span className="info-value">Light Mode</span>
                        </div>
                    </div>
                </div>

                {/* Security Card */}
                <div className="profile-card security-card">
                    <div className="card-header">
                        <div className="card-icon">🔒</div>
                        <h3>Security</h3>
                    </div>
                    <div className="card-content">
                        <div className="info-row">
                            <span className="info-label">Two-Factor Auth</span>
                            <span className="status-badge disabled">Not Enabled</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Last Password Change</span>
                            <span className="info-value">October 15, 2025</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Security Questions</span>
                            <span className="status-badge enabled">Set</span>
                        </div>
                        <div className="security-actions">
                            <button className="security-btn">Change Password</button>
                            <button className="security-btn secondary">Security Settings</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;