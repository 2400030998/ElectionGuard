import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import ViewResults from './ViewResults';
import ReportIssue from './ReportIssue';
import JoinDiscussion from './JoinDiscussion';
import GetInfo from './GetInfo';

const Dashboard = ({ userName, userRole, onProfileClick }) => {
  const [activePage, setActivePage] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(null);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('userFullName');
    const savedEmail = localStorage.getItem('userEmail');
    const savedCurrentUser = localStorage.getItem('currentUser');
    
    if (savedName && savedName !== 'User' && savedName !== 'user') {
      setDisplayName(savedName);
    } else if (savedCurrentUser) {
      const user = JSON.parse(savedCurrentUser);
      setDisplayName(user.fullName || 'User');
    } else if (savedEmail) {
      const nameFromEmail = savedEmail.split('@')[0];
      setDisplayName(nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1));
    } else if (userName && userName !== 'User') {
      setDisplayName(userName);
    } else {
      setDisplayName('User');
    }
  }, [userName]);

  const handleLogout = () => {
    localStorage.removeItem('userFullName');
    localStorage.removeItem('userRole');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userEmail');
    window.location.reload();
  };

  const handleBackToHome = () => setCurrentFeature(null);

  const handleProfileClick = () => {
    if (onProfileClick) {
      onProfileClick();
    } else {
      setShowProfile(true);
    }
  };

  const handleViewResults = () => setCurrentFeature('viewResults');
  const handleReportIssue = () => setCurrentFeature('reportIssue');
  const handleJoinDiscussion = () => setCurrentFeature('joinDiscussion');
  const handleGetInfo = () => setCurrentFeature('getInfo');

  // Data Analyst specific functions
  const handleDataAnalytics = () => setCurrentFeature('dataAnalytics');
  const handleGenerateReports = () => setCurrentFeature('generateReports');
  const handleTrendAnalysis = () => setCurrentFeature('trendAnalysis');

  // Election Observer specific functions
  const handleMonitorPolling = () => setCurrentFeature('monitorPolling');
  const handleSubmitReport = () => setCurrentFeature('submitReport');
  const handleIncidentLog = () => setCurrentFeature('incidentLog');

  const renderRoleContent = (userRole) => {
    if (currentFeature) {
      switch(currentFeature) {
        case 'viewResults':
          return <ViewResults onBack={handleBackToHome} />;
        case 'reportIssue':
          return <ReportIssue onBack={handleBackToHome} />;
        case 'joinDiscussion':
          return <JoinDiscussion onBack={handleBackToHome} />;
        case 'getInfo':
          return <GetInfo onBack={handleBackToHome} />;
        case 'dataAnalytics':
          return (
            <div className="feature-page">
              <h2>📊 Data Analytics Dashboard</h2>
              <p>Advanced analytics and insights for election data</p>
              <button className="back-btn" onClick={handleBackToHome}>← Back to Dashboard</button>
            </div>
          );
        case 'generateReports':
          return (
            <div className="feature-page">
              <h2>📋 Generate Reports</h2>
              <p>Create comprehensive election reports</p>
              <button className="back-btn" onClick={handleBackToHome}>← Back to Dashboard</button>
            </div>
          );
        case 'trendAnalysis':
          return (
            <div className="feature-page">
              <h2>📈 Trend Analysis</h2>
              <p>Analyze voting patterns and trends</p>
              <button className="back-btn" onClick={handleBackToHome}>← Back to Dashboard</button>
            </div>
          );
        case 'monitorPolling':
          return (
            <div className="feature-page">
              <h2>👁️ Polling Station Monitoring</h2>
              <p>Real-time monitoring of polling stations</p>
              <button className="back-btn" onClick={handleBackToHome}>← Back to Dashboard</button>
            </div>
          );
        case 'submitReport':
          return (
            <div className="feature-page">
              <h2>📝 Submit Observation Report</h2>
              <p>Submit detailed observation reports</p>
              <button className="back-btn" onClick={handleBackToHome}>← Back to Dashboard</button>
            </div>
          );
        case 'incidentLog':
          return (
            <div className="feature-page">
              <h2>⚠️ Incident Log</h2>
              <p>Track and manage election incidents</p>
              <button className="back-btn" onClick={handleBackToHome}>← Back to Dashboard</button>
            </div>
          );
        default:
          return null;
      }
    }

    if (userRole === 'citizen') {
      return (
        <div className="role-content">
          <h2>Citizen Dashboard</h2>
          <div className="features-grid">
            <div className="feature-card-box" onClick={handleViewResults}>
              <div className="feature-icon-box">📊</div>
              <h3>Live Election Results</h3>
              <p>Track real-time election updates and statistics</p>
              <button className="feature-btn-box">
                <span className="btn-icon">👁️</span> View Results
              </button>
            </div>
            
            <div className="feature-card-box" onClick={handleReportIssue}>
              <div className="feature-icon-box">⚠️</div>
              <h3>Report Issues</h3>
              <p>Report election irregularities or voting problems</p>
              <button className="feature-btn-box">
                <span className="btn-icon">📝</span> Report Issue
              </button>
            </div>
            
            <div className="feature-card-box" onClick={handleJoinDiscussion}>
              <div className="feature-icon-box">💬</div>
              <h3>Civic Forum</h3>
              <p>Participate in community discussions</p>
              <button className="feature-btn-box">
                <span className="btn-icon">👥</span> Join Discussion
              </button>
            </div>
            
            <div className="feature-card-box" onClick={handleGetInfo}>
              <div className="feature-icon-box">🔍</div>
              <h3>Voter Information</h3>
              <p>Access voting guidelines and polling locations</p>
              <button className="feature-btn-box">
                <span className="btn-icon">📍</span> Get Info
              </button>
            </div>
          </div>
        </div>
      );
    } else if (userRole === 'admin') {
      return (
        <div className="role-content">
          <h2>Admin Dashboard</h2>
          <div className="admin-stats">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <h3>Total Users</h3>
              <p className="stat-number">1,247</p>
              <button className="feature-btn-box" onClick={() => alert("👥 User Management Opening...")}>
                Manage Users
              </button>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏳</div>
              <h3>Pending Approvals</h3>
              <p className="stat-number">23</p>
              <button className="feature-btn-box" onClick={() => alert("⏳ Approval Panel Loading...")}>
                Review Requests
              </button>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🗳️</div>
              <h3>Active Elections</h3>
              <p className="stat-number">5</p>
              <button className="feature-btn-box" onClick={() => alert("🗳️ Election Management Opening...")}>
                Manage Elections
              </button>
            </div>
          </div>
        </div>
      );
    } else if (userRole === 'analyst') {
      return (
        <div className="role-content">
          <h2>Data Analyst Dashboard</h2>
          <div className="features-grid">
            <div className="feature-card-box" onClick={handleDataAnalytics}>
              <div className="feature-icon-box">📊</div>
              <h3>Data Analytics</h3>
              <p>Advanced analytics and election insights</p>
              <button className="feature-btn-box">
                <span className="btn-icon">📈</span> Analyze Data
              </button>
            </div>
            
            <div className="feature-card-box" onClick={handleGenerateReports}>
              <div className="feature-icon-box">📋</div>
              <h3>Generate Reports</h3>
              <p>Create comprehensive election reports</p>
              <button className="feature-btn-box">
                <span className="btn-icon">📄</span> Create Reports
              </button>
            </div>
            
            <div className="feature-card-box" onClick={handleTrendAnalysis}>
              <div className="feature-icon-box">📈</div>
              <h3>Trend Analysis</h3>
              <p>Analyze voting patterns and trends</p>
              <button className="feature-btn-box">
                <span className="btn-icon">🔍</span> View Trends
              </button>
            </div>
            
            <div className="feature-card-box" onClick={handleViewResults}>
              <div className="feature-icon-box">👁️</div>
              <h3>Live Results</h3>
              <p>Monitor real-time election data</p>
              <button className="feature-btn-box">
                <span className="btn-icon">📊</span> View Results
              </button>
            </div>
          </div>
        </div>
      );
    } else if (userRole === 'observer') {
      return (
        <div className="role-content">
          <h2>Election Observer Dashboard</h2>
          <div className="features-grid">
            <div className="feature-card-box" onClick={handleMonitorPolling}>
              <div className="feature-icon-box">👁️</div>
              <h3>Monitor Polling</h3>
              <p>Real-time polling station monitoring</p>
              <button className="feature-btn-box">
                <span className="btn-icon">📍</span> Monitor Stations
              </button>
            </div>
            
            <div className="feature-card-box" onClick={handleSubmitReport}>
              <div className="feature-icon-box">📝</div>
              <h3>Submit Reports</h3>
              <p>Submit detailed observation reports</p>
              <button className="feature-btn-box">
                <span className="btn-icon">✅</span> Submit Report
              </button>
            </div>
            
            <div className="feature-card-box" onClick={handleIncidentLog}>
              <div className="feature-icon-box">⚠️</div>
              <h3>Incident Log</h3>
              <p>Track and manage election incidents</p>
              <button className="feature-btn-box">
                <span className="btn-icon">📋</span> View Incidents
              </button>
            </div>
            
            <div className="feature-card-box" onClick={handleViewResults}>
              <div className="feature-icon-box">📊</div>
              <h3>Election Results</h3>
              <p>Monitor election progress and results</p>
              <button className="feature-btn-box">
                <span className="btn-icon">👁️</span> View Results
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="role-content">
          <h2>{userRole} Dashboard</h2>
          <p>Specific features for {userRole} role coming soon...</p>
        </div>
      );
    }
  };

  const renderFeaturesPage = () => (
    <div className="page-content">
      <h2>🌟 Key Features</h2>
      <div className="features-grid">
        <div className="feature-card-box">
          <div className="feature-icon-box">🔒</div>
          <h3>Fraud Prevention</h3>
          <p>Advanced algorithms to detect and prevent election fraud in real-time</p>
          <button className="feature-btn-box">
            <span className="btn-icon">🛡️</span> Learn More
          </button>
        </div>
        
        <div className="feature-card-box">
          <div className="feature-icon-box">📊</div>
          <h3>Live Monitoring</h3>
          <p>Real-time election tracking with transparent data visualization</p>
          <button className="feature-btn-box">
            <span className="btn-icon">👁️</span> View Demo
          </button>
        </div>
        
        <div className="feature-card-box">
          <div className="feature-icon-box">👥</div>
          <h3>Civic Engagement</h3>
          <p>Encourage new voters through educational resources and discussions</p>
          <button className="feature-btn-box">
            <span className="btn-icon">💬</span> Participate
          </button>
        </div>
        
        <div className="feature-card-box">
          <div className="feature-icon-box">📈</div>
          <h3>Data Analytics</h3>
          <p>Comprehensive reports and insights for all stakeholders</p>
          <button className="feature-btn-box">
            <span className="btn-icon">📋</span> View Reports
          </button>
        </div>
      </div>
    </div>
  );

  const renderAboutPage = () => (
    <div className="page-content">
      <h2>ℹ️ About ElectionGuard</h2>
      <div className="about-content">
        <h3>Transparent Elections for a Stronger Democracy</h3>
        <p>ElectionGuard is a comprehensive platform designed to monitor elections, prevent fraud, and encourage civic engagement among new voters.</p>
        
        <div className="about-section">
          <h4>🚀 How It Works</h4>
          <p>Our system uses advanced technology to ensure election integrity:</p>
          <ul>
            <li>Real-time monitoring of election processes</li>
            <li>Secure data encryption and verification</li>
            <li>Multi-role access for different stakeholders</li>
            <li>Transparent reporting and analytics</li>
          </ul>
        </div>

        <div className="about-section">
          <h4>🎯 Our Mission</h4>
          <p>To ensure free, fair, and transparent elections through cutting-edge technology and active community participation.</p>
        </div>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="page-content">
      <h2>📞 Contact & Support</h2>
      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email Support</h3>
            <p>support@electionguard.gov</p>
            <p>help@electionguard.gov</p>
            <button className="contact-btn">Send Email</button>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Phone Support</h3>
            <p>+1-800-ELECTION (355-3284)</p>
            <p>+1-800-VOTE-NOW (868-3669)</p>
            <button className="contact-btn">Call Now</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfileModal = () => (
    <div className="profile-modal">
      <div className="modal-content">
        <h2>👤 User Profile</h2>
        <div className="profile-info">
          <div className="profile-item">
            <strong>Name:</strong> {displayName}
          </div>
          <div className="profile-item">
            <strong>Role:</strong> {userRole}
          </div>
          <div className="profile-item">
            <strong>Email:</strong> user@example.com
          </div>
        </div>
        <button className="close-btn" onClick={() => setShowProfile(false)}>
          Close Profile
        </button>
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>
          <span className="logo">🗳️</span>
          Election Guard
        </h1>
        <div className="user-profile">
          <span>Welcome, {displayName}</span>
          <div className="profile-actions">
            <div className="profile-circle">👤</div>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </header>

      {!currentFeature && (
        <div className="simple-nav">
          <button className={activePage === 'home' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActivePage('home')}>Home</button>
          <button className={activePage === 'features' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActivePage('features')}>Features</button>
          <button className={activePage === 'about' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActivePage('about')}>About</button>
          <button className={activePage === 'contact' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActivePage('contact')}>Contact</button>
          <button className="nav-btn profile-btn" onClick={handleProfileClick}>
            {displayName ? 'My Profile' : 'Login/Register'}
          </button>
        </div>
      )}

      <div className="dashboard-content">
        {activePage === 'home' && renderRoleContent(userRole)}
        {activePage === 'features' && renderFeaturesPage()}
        {activePage === 'about' && renderAboutPage()}
        {activePage === 'contact' && renderContactPage()}
        {showProfile && renderProfileModal()}
      </div>
    </div>
  );
};

export default Dashboard;