import React, { useState, useEffect } from 'react';
import './App.css';
import LogoAnimation from './components/LogoAnimation';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Footer from './components/Footer';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 4000);

    // ✅ Check localStorage for user data
    const savedUser = localStorage.getItem('currentUser');
    const savedName = localStorage.getItem('userFullName');
    const savedRole = localStorage.getItem('userRole');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true' && savedName) {
      setUserData({
        fullName: savedName,
        email: savedUser || '',
        role: savedRole || 'citizen'
      });
      setCurrentPage('welcome');
    }

    return () => clearTimeout(timer);
  }, []);

  // ✅ Login success handler
  const handleLoginSuccess = (user) => {
    console.log('Login Success - User:', user);
    
    // Get data from localStorage
    const savedName = localStorage.getItem('userFullName');
    const savedRole = localStorage.getItem('userRole');
    const savedEmail = localStorage.getItem('currentUser');

    if (savedName) {
      setUserData({
        fullName: savedName,
        email: savedEmail || '',
        role: savedRole || 'citizen'
      });
      setCurrentPage('welcome');
    } else {
      console.error('No user data found after login');
    }
  };

  const handleDashboardClick = () => {
    setCurrentPage('dashboard');
  };

  const renderWithFooter = (content) => (
    <div className="App">
      <div className="main-content">{content}</div>
      <Footer />
    </div>
  );

  if (showAnimation) return <LogoAnimation />;

  if (currentPage === 'welcome' && userData) {
    return renderWithFooter(
      <Welcome
        userName={userData.fullName}
        userRole={userData.role}
        onDashboardClick={handleDashboardClick}
      />
    );
  }

  if (currentPage === 'dashboard' && userData) {
    return renderWithFooter(
      <Dashboard
        userName={userData.fullName}
        userRole={userData.role}
        onProfileClick={() => setCurrentPage('profile')}
      />
    );
  }

  if (currentPage === 'login') {
    return renderWithFooter(<Login onLoginSuccess={handleLoginSuccess} />);
  }

  if (currentPage === 'profile') {
    return renderWithFooter(
      <Profile 
        onBack={() => setCurrentPage('dashboard')}
        userName={userData?.fullName}  // ✅ CORRECT: Pass userName
        userRole={userData?.role}      // ✅ CORRECT: Pass userRole
      />
    );
  }

  return renderWithFooter(
    <div className="welcome-home-page">
      <h1>Welcome to Election Guard! 🗳️</h1>
      <p>Transparent Elections for a Stronger Democracy</p>
      <button
        className="get-started-btn"
        onClick={() => setCurrentPage('login')}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;