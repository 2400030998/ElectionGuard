import React, { useState } from 'react';
import './ReportIssue.css';

const ReportIssue = ({ onBack }) => {
  const [formData, setFormData] = useState({
    issueType: '',
    location: '',
    description: '',
    urgency: 'medium'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Issue reported successfully! Our team will investigate.');
    onBack();
  };

  return (
    <div className="report-container">
      <div className="report-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h1>⚠️ Report Election Issue</h1>
      </div>
      
      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Issue Type</label>
          <select 
            value={formData.issueType} 
            onChange={(e) => setFormData({...formData, issueType: e.target.value})}
            required
          >
            <option value="">Select issue type</option>
            <option value="voting-machine">Voting Machine Problem</option>
            <option value="intimidation">Voter Intimidation</option>
            <option value="fraud">Suspected Fraud</option>
            <option value="accessibility">Accessibility Issue</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Polling Station Location</label>
          <input 
            type="text" 
            placeholder="Enter polling station address"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea 
            placeholder="Describe the issue in detail..."
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            rows="5"
            required
          />
        </div>

        <div className="form-group">
          <label>Urgency Level</label>
          <div className="urgency-options">
            <label>
              <input 
                type="radio" 
                name="urgency" 
                value="low"
                checked={formData.urgency === 'low'}
                onChange={(e) => setFormData({...formData, urgency: e.target.value})}
              />
              Low
            </label>
            <label>
              <input 
                type="radio" 
                name="urgency" 
                value="medium" 
                checked={formData.urgency === 'medium'}
                onChange={(e) => setFormData({...formData, urgency: e.target.value})}
              />
              Medium
            </label>
            <label>
              <input 
                type="radio" 
                name="urgency" 
                value="high"
                checked={formData.urgency === 'high'}
                onChange={(e) => setFormData({...formData, urgency: e.target.value})}
              />
              High
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportIssue;