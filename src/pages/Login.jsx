import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'citizen'
  });

  // ✅ Store registered users in localStorage
  const getRegisteredUsers = () => {
    const users = localStorage.getItem('registeredUsers');
    return users ? JSON.parse(users) : [];
  };

  // ✅ Save registered user
  const saveRegisteredUser = (user) => {
    const users = getRegisteredUsers();
    const existingUserIndex = users.findIndex(u => u.email === user.email);
    
    if (existingUserIndex !== -1) {
      users[existingUserIndex] = user; // Update existing user
    } else {
      users.push(user); // Add new user
    }
    
    localStorage.setItem('registeredUsers', JSON.stringify(users));
  };

  // ✅ Input handler
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ DEMO FILL BUTTONS (Only fill form, don't auto-login)
  const handleDemoFill = (role, email, password, name) => {
    setFormData({
      fullName: name,
      email: email,
      password: password,
      confirmPassword: password,
      role: role
    });
    
    setTimeout(() => {
      alert(`Demo ${role} credentials filled! Click the "${isLogin ? 'Login' : 'Create Account'}" button to continue.`);
    }, 100);
  };

  // ✅ Validate login credentials
  const validateLogin = (email, password) => {
    const registeredUsers = getRegisteredUsers();
    const user = registeredUsers.find(u => u.email === email && u.password === password);
    return user;
  };

  // ✅ Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // ✅ LOGIN VALIDATION
      if (!formData.email || !formData.password) {
        alert('Please enter both email and password');
        return;
      }

      const user = validateLogin(formData.email, formData.password);
      
      if (!user) {
        alert('Invalid email or password. Please check your credentials or create a new account.');
        return;
      }

      // ✅ Login successful - set user data
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('userFullName', user.fullName);
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('isLoggedIn', 'true');

      if (onLoginSuccess) {
        onLoginSuccess(user);
      }

      alert(`Welcome back, ${user.fullName}! Redirecting to your ${user.role} dashboard...`);

    } else {
      // ✅ SIGN UP VALIDATION
      if (!formData.fullName || !formData.email || !formData.password) {
        alert('Please fill all required fields');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      // ✅ Check if user already exists
      const registeredUsers = getRegisteredUsers();
      const existingUser = registeredUsers.find(u => u.email === formData.email);
      
      if (existingUser) {
        alert('An account with this email already exists. Please login instead.');
        setIsLogin(true);
        return;
      }

      // ✅ Create user object
      const user = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role || 'citizen',
        createdAt: new Date().toISOString()
      };

      // ✅ Save to registered users
      saveRegisteredUser(user);

      // ✅ Also set as current logged in user
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('userFullName', user.fullName);
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('isLoggedIn', 'true');

      if (onLoginSuccess) {
        onLoginSuccess(user);
      }

      alert(`Welcome ${formData.fullName}! Your ${formData.role} account has been created successfully! Redirecting to your dashboard...`);
    }
  };

  // ✅ Role descriptions and fields
  const roleDescriptions = {
    citizen: "Citizen accounts are automatically approved. You'll have access to track elections, report issues, and participate in civic discussions.",
    observer: "Observer accounts require admin approval. Please provide your official designation and organization details.",
    analyst: "Data Analyst accounts require admin approval. Please provide your technical qualifications and organization details.",
    admin: "Admin accounts are restricted to government election officials. Your request will be verified by the system administrator."
  };

  const renderRoleFields = () => {
    switch (formData.role) {
      case 'observer':
        return (
          <div className="role-fields">
            <h4>Observer Information</h4>
            <input type="text" placeholder="Official Designation" />
            <input type="text" placeholder="Organization" />
            <input type="text" placeholder="Official ID Number" />
          </div>
        );

      case 'analyst':
        return (
          <div className="role-fields">
            <h4>Analyst Information</h4>
            <select>
              <option>Select Qualification</option>
              <option>Data Science</option>
              <option>Statistics</option>
              <option>Computer Science</option>
              <option>Other</option>
            </select>
            <input type="text" placeholder="Organization" />
            <input type="number" placeholder="Years of Experience" />
          </div>
        );

      case 'admin':
        return (
          <div className="role-fields">
            <h4>Government Employee Verification</h4>
            <input type="text" placeholder="Government Department" />
            <input type="text" placeholder="Official Position" />
            <input type="text" placeholder="Employee ID" />
            <textarea
              placeholder="Justification for Admin Access"
              rows="3"
              className="justification-textarea"
            ></textarea>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLogin ? 'Login to Your Account' : 'Create New Account'}</h2>

        {/* ✅ DEMO FILL BUTTONS (All 4 roles) */}
        <div className="demo-buttons">
          <button 
            type="button"
            className="demo-btn citizen-demo"
            onClick={() => handleDemoFill('citizen', 'keerthana@citizen.com', 'password123', 'Keerthana Chowdary')}
          >
            👤 Citizen
          </button>
          <button 
            type="button"
            className="demo-btn observer-demo"
            onClick={() => handleDemoFill('observer', 'observer@electionmonitor.org', 'Observer123!', 'John Observer')}
          >
            👁️ Observer
          </button>
          <button 
            type="button"
            className="demo-btn analyst-demo"
            onClick={() => handleDemoFill('analyst', 'analyst@datainsights.com', 'Analyst123!', 'Dr. Data Analyst')}
          >
            📊 Analyst
          </button>
          <button 
            type="button"
            className="demo-btn admin-demo"
            onClick={() => handleDemoFill('admin', 'admin@electionguard.gov', 'Admin123!', 'System Administrator')}
          >
            👨‍💼 Admin
          </button>
        </div>

        <p className="demo-note">Click demo buttons to fill credentials, then click {isLogin ? 'Login' : 'Create Account'}</p>

        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required={!isLogin}
              />

              {/* ✅ Role Section */}
              <div className="role-section">
                <label className="role-label">Select Your Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="role-select"
                  required={!isLogin}
                >
                  <option value="citizen">Citizen</option>
                  <option value="observer">Election Observer</option>
                  <option value="analyst">Data Analyst</option>
                  <option value="admin">Administrator (Government Employee)</option>
                </select>

                {/* ✅ Role Description */}
                {formData.role && (
                  <div className="role-description">
                    {roleDescriptions[formData.role]}
                  </div>
                )}

                {/* ✅ Role-Specific Fields */}
                {formData.role && !isLogin && renderRoleFields()}
              </div>
            </>
          )}

          {isLogin && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </>
          )}

          {/* ✅ LOGIN/REGISTER BUTTON */}
          <button type="submit" className="login-btn">
            {isLogin ? 'Login to Dashboard' : 'Create Account & Go to Dashboard'}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="toggle-link"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;