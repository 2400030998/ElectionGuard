import React, { useState } from 'react';
import './GetInfo.css';  // ✅ Idi correct ga vundali

const GetInfo = ({ onBack }) => {
  const [voterId, setVoterId] = useState('');
  const [pollingInfo, setPollingInfo] = useState(null);
  const [searchError, setSearchError] = useState('');

  // Mock voter database
  const voterDatabase = {
    'AP1234567890': {
      name: 'Ravi Kumar',
      pollingStation: 'Govt High School, Amaravati',
      address: 'Door No: 12-34, MG Road, Amaravati',
      constituency: 'Amaravati Assembly Constituency',
      partNumber: '156',
      serialNumber: '342'
    },
    'AP9876543210': {
      name: 'Sita Devi',
      pollingStation: 'ZP High School, Visakhapatnam',
      address: 'Flat 205, Beach Road, Visakhapatnam',
      constituency: 'Visakhapatnam Assembly Constituency',
      partNumber: '89',
      serialNumber: '156'
    },
    'TL5678901234': {
      name: 'Arjun Reddy',
      pollingStation: 'St. Joseph School, Hyderabad',
      address: 'H.No 45, Banjara Hills, Hyderabad',
      constituency: 'Hyderabad Assembly Constituency',
      partNumber: '234',
      serialNumber: '78'
    }
  };

  const handleSearch = () => {
    if (!voterId.trim()) {
      setSearchError('Please enter Voter ID');
      return;
    }

    const voterData = voterDatabase[voterId.toUpperCase()];
    if (voterData) {
      setPollingInfo(voterData);
      setSearchError('');
    } else {
      setSearchError('Voter ID not found. Please check and try again.');
      setPollingInfo(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="info-container">
      <div className="info-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h1>🔍 Voter Information & Services</h1>
      </div>
      
      <div className="info-content">
        <div className="info-grid">
          <div className="info-card">
            <h3>📍 Find Your Polling Station</h3>
            <p>Enter your Voter ID to find where you need to vote</p>
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Enter Voter ID (e.g., AP1234567890)" 
                value={voterId}
                onChange={(e) => setVoterId(e.target.value)}
                onKeyPress={handleKeyPress}
                maxLength={12}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            
            {searchError && (
              <div className="error-message">{searchError}</div>
            )}

            {pollingInfo && (
              <div className="polling-info">
                <div className="voter-details">
                  <h4>Voter Details:</h4>
                  <p><strong>Name:</strong> {pollingInfo.name}</p>
                  <p><strong>Voter ID:</strong> {voterId.toUpperCase()}</p>
                </div>
                
                <div className="polling-details">
                  <h4>📍 Your Polling Station:</h4>
                  <p><strong>Station:</strong> {pollingInfo.pollingStation}</p>
                  <p><strong>Address:</strong> {pollingInfo.address}</p>
                  <p><strong>Constituency:</strong> {pollingInfo.constituency}</p>
                  <p><strong>Part Number:</strong> {pollingInfo.partNumber}</p>
                  <p><strong>Serial Number:</strong> {pollingInfo.serialNumber}</p>
                </div>
                
                <button className="directions-btn">
                  🗺️ Get Directions on Google Maps
                </button>
              </div>
            )}
          </div>

          <div className="info-card">
            <h3>📋 Voting Guidelines & Procedures</h3>
            <ul>
              <li>✅ Carry original ID proof (Voter ID, Aadhaar, Passport, Driving License)</li>
              <li>✅ Polling hours: 7:00 AM to 6:00 PM IST</li>
              <li>✅ No mobile phones, cameras inside polling booth</li>
              <li>✅ Follow COVID safety protocols if applicable</li>
              <li>✅ Verify your details in electoral roll before voting</li>
              <li>✅ Use EVM carefully - press button only once</li>
              <li>✅ Collect voting slip from polling officer</li>
              <li>✅ Don't disclose whom you voted for</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>⏰ Election Schedule 2025</h3>
            <div className="dates">
              <div className="date-item">
                <strong>Notification Date:</strong>
                <span>April 1, 2025</span>
              </div>
              <div className="date-item">
                <strong>Last Date for Nominations:</strong>
                <span>April 8, 2025</span>
              </div>
              <div className="date-item">
                <strong>Scrutiny of Nominations:</strong>
                <span>April 9, 2025</span>
              </div>
              <div className="date-item">
                <strong>Withdrawal Date:</strong>
                <span>April 11, 2025</span>
              </div>
              <div className="date-item highlight">
                <strong>Voting Date:</strong>
                <span>May 12, 2025</span>
              </div>
              <div className="date-item highlight">
                <strong>Counting & Results:</strong>
                <span>May 15, 2025</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>📞 Election Commission Helpline</h3>
            <div className="helplines">
              <div className="helpline">
                <strong>National Voter Helpline:</strong>
                <span>1950</span>
              </div>
              <div className="helpline">
                <strong>Complaints & Grievances:</strong>
                <span>1800-110-420</span>
              </div>
              <div className="helpline">
                <strong>SMS Service:</strong>
                <span>VOTE to 56666</span>
              </div>
              <div className="helpline">
                <strong>Email:</strong>
                <span>help@eci.gov.in</span>
              </div>
              <div className="helpline">
                <strong>Mobile App:</strong>
                <span>Voter Helpline App</span>
              </div>
            </div>
          </div>
        </div>

        <div className="download-section">
          <h3>📥 Download Election Resources</h3>
          <div className="download-buttons">
            <button>📄 Voter Guide PDF</button>
            <button>🏛️ Polling Station List</button>
            <button>⚖️ Election Rules 2025</button>
            <button>📱 Voter Helpline App</button>
            <button>🗳️ EVM User Manual</button>
          </div>
        </div>

        <div className="quick-links">
          <h3>🔗 Quick Links</h3>
          <div className="links-grid">
            <a href="#" className="link-card">Apply for Voter ID</a>
            <a href="#" className="link-card">Check Electoral Roll</a>
            <a href="#" className="link-card">Track Application</a>
            <a href="#" className="link-card">Know Your Candidate</a>
            <a href="#" className="link-card">Election Laws</a>
            <a href="#" className="link-card">FAQs</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInfo;