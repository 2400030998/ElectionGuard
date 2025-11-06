import React, { useState } from 'react';
import './ViewResults.css';

const ViewResults = ({ onBack }) => {
  const [selectedState, setSelectedState] = useState('andhra-pradesh');

  const electionData = {
    'andhra-pradesh': {
      name: 'Andhra Pradesh',
      results: [
        {
          constituency: 'Amaravati',
          candidates: [
            { party: 'TDP', candidate: 'N. Chandrababu Naidu', votes: '48.5%', leading: true },
            { party: 'YSRCP', candidate: 'Y.S. Jagan Mohan Reddy', votes: '45.2%', leading: false },
            { party: 'JANASENA', candidate: 'Pawan Kalyan', votes: '4.1%', leading: false },
            { party: 'BJP', candidate: 'Purandeswari', votes: '1.5%', leading: false },
            { party: 'CONGRESS', candidate: 'Raghuveera Reddy', votes: '0.7%', leading: false }
          ]
        },
        {
          constituency: 'Visakhapatnam',
          candidates: [
            { party: 'TDP', candidate: 'M. Srinivasa Rao', votes: '49.1%', leading: true },
            { party: 'YSRCP', candidate: 'Vishnu Kumar', votes: '44.3%', leading: false },
            { party: 'JANASENA', candidate: 'G.V. Ravi Raju', votes: '4.3%', leading: false },
            { party: 'BJP', candidate: 'D. Ramakrishna', votes: '1.8%', leading: false }
          ]
        },
        {
          constituency: 'Vijayawada',
          candidates: [
            { party: 'TDP', candidate: 'Kesineni Srinivas', votes: '50.2%', leading: true },
            { party: 'YSRCP', candidate: 'Bonda Umamaheswara Rao', votes: '43.1%', leading: false },
            { party: 'JANASENA', candidate: 'Vangaveeti Radha', votes: '4.5%', leading: false },
            { party: 'BJP', candidate: 'J. Sridevi', votes: '1.7%', leading: false }
          ]
        },
        {
          constituency: 'Tirupati',
          candidates: [
            { party: 'TDP', candidate: 'Panabaka Lakshmi', votes: '47.8%', leading: true },
            { party: 'YSRCP', candidate: 'B. Karunakar Reddy', votes: '46.1%', leading: false },
            { party: 'JANASENA', candidate: 'Madhusudhan Reddy', votes: '4.2%', leading: false }
          ]
        },
        {
          constituency: 'Kakinada',
          candidates: [
            { party: 'TDP', candidate: 'Pilli Subhash Chandra Bose', votes: '48.9%', leading: true },
            { party: 'YSRCP', candidate: 'D. Chandrasekhar', votes: '45.3%', leading: false },
            { party: 'JANASENA', candidate: 'K. Suryanarayana', votes: '4.0%', leading: false }
          ]
        }
      ],
      currentRuling: 'TDP+JANASENA+BJP',
      chiefMinister: 'N. Chandrababu Naidu',
      alliance: 'NDA Alliance',
      seatsWon: 164,
      totalSeats: 175
    },
    'telangana': {
      name: 'Telangana',
      results: [
        {
          constituency: 'Hyderabad',
          candidates: [
            { party: 'CONGRESS', candidate: 'Revanth Reddy', votes: '46.8%', leading: true },
            { party: 'BRS', candidate: 'K. Chandrashekar Rao', votes: '40.2%', leading: false },
            { party: 'BJP', candidate: 'Kishan Reddy', votes: '11.3%', leading: false },
            { party: 'AIMIM', candidate: 'Asaduddin Owaisi', votes: '1.2%', leading: false }
          ]
        },
        {
          constituency: 'Warangal',
          candidates: [
            { party: 'CONGRESS', candidate: 'K. Srihari', votes: '49.1%', leading: true },
            { party: 'BRS', candidate: 'Narender Rao', votes: '42.7%', leading: false },
            { party: 'BJP', candidate: 'Aruri Ramesh', votes: '6.5%', leading: false }
          ]
        },
        {
          constituency: 'Karimnagar',
          candidates: [
            { party: 'CONGRESS', candidate: 'V. Sreekanth', votes: '47.5%', leading: true },
            { party: 'BRS', candidate: 'G. Kamalakar', votes: '45.2%', leading: false },
            { party: 'BJP', candidate: 'B. Sanjay Kumar', votes: '5.8%', leading: false }
          ]
        },
        {
          constituency: 'Khammam',
          candidates: [
            { party: 'CONGRESS', candidate: 'T. Nageswara Rao', votes: '48.3%', leading: true },
            { party: 'BRS', candidate: 'P. Srinivas Reddy', votes: '44.1%', leading: false },
            { party: 'BJP', candidate: 'N. Ramchander Rao', votes: '6.1%', leading: false }
          ]
        }
      ],
      currentRuling: 'CONGRESS',
      chiefMinister: 'Revanth Reddy',
      alliance: 'Congress (Single Party)',
      seatsWon: 75,
      totalSeats: 119
    },
    'karnataka': {
      name: 'Karnataka',
      results: [
        {
          constituency: 'Bangalore South',
          candidates: [
            { party: 'CONGRESS', candidate: 'Siddaramaiah', votes: '48.5%', leading: true },
            { party: 'BJP', candidate: 'Basavaraj Bommai', votes: '43.8%', leading: false },
            { party: 'JDS', candidate: 'H.D. Kumaraswamy', votes: '6.1%', leading: false }
          ]
        },
        {
          constituency: 'Mysore',
          candidates: [
            { party: 'CONGRESS', candidate: 'D.K. Shivakumar', votes: '49.2%', leading: true },
            { party: 'BJP', candidate: 'R. Ashoka', votes: '42.9%', leading: false },
            { party: 'JDS', candidate: 'H.D. Deve Gowda', votes: '6.3%', leading: false }
          ]
        }
      ],
      currentRuling: 'CONGRESS',
      chiefMinister: 'Siddaramaiah',
      alliance: 'Congress (Single Party)',
      seatsWon: 138,
      totalSeats: 224
    },
    'tamil-nadu': {
      name: 'Tamil Nadu',
      results: [
        {
          constituency: 'Chennai',
          candidates: [
            { party: 'DMK', candidate: 'M.K. Stalin', votes: '50.1%', leading: true },
            { party: 'AIADMK', candidate: 'Edappadi Palaniswami', votes: '42.3%', leading: false },
            { party: 'BJP', candidate: 'T.N. Raja', votes: '6.2%', leading: false }
          ]
        },
        {
          constituency: 'Coimbatore',
          candidates: [
            { party: 'AIADMK', candidate: 'S.P. Velumani', votes: '48.5%', leading: true },
            { party: 'DMK', candidate: 'P.R. Natarajan', votes: '45.1%', leading: false },
            { party: 'BJP', candidate: 'C.P. Radhakrishnan', votes: '4.9%', leading: false }
          ]
        }
      ],
      currentRuling: 'DMK',
      chiefMinister: 'M.K. Stalin',
      alliance: 'DMK+ Alliance',
      seatsWon: 162,
      totalSeats: 234
    },
    'maharashtra': {
      name: 'Maharashtra',
      results: [
        {
          constituency: 'Mumbai South',
          candidates: [
            { party: 'SHIVSENA', candidate: 'Uddhav Thackeray', votes: '46.2%', leading: true },
            { party: 'BJP', candidate: 'Mihir Kotecha', votes: '43.1%', leading: false },
            { party: 'CONGRESS', candidate: 'Bhushan Patil', votes: '8.2%', leading: false }
          ]
        },
        {
          constituency: 'Pune',
          candidates: [
            { party: 'BJP', candidate: 'Murlidhar Mohol', votes: '48.3%', leading: true },
            { party: 'NCP', candidate: 'Ravindra Dhangekar', votes: '44.7%', leading: false },
            { party: 'SHIVSENA', candidate: 'Sanjay Ghorpade', votes: '5.4%', leading: false }
          ]
        }
      ],
      currentRuling: 'SHIVSENA+NCP+CONGRESS',
      chiefMinister: 'Eknath Shinde',
      alliance: 'Mahayuti Alliance',
      seatsWon: 118,
      totalSeats: 288
    },
    'uttar-pradesh': {
      name: 'Uttar Pradesh',
      results: [
        {
          constituency: 'Varanasi',
          candidates: [
            { party: 'BJP', candidate: 'Narendra Modi', votes: '59.3%', leading: true },
            { party: 'SP', candidate: 'Ajay Rai', votes: '34.1%', leading: false },
            { party: 'BSP', candidate: 'Athar Singh', votes: '4.5%', leading: false }
          ]
        },
        {
          constituency: 'Lucknow',
          candidates: [
            { party: 'BJP', candidate: 'Rajnath Singh', votes: '57.8%', leading: true },
            { party: 'SP', candidate: 'Ravidas Mehrotra', votes: '37.2%', leading: false },
            { party: 'CONGRESS', candidate: 'Amar Singh', votes: '3.4%', leading: false }
          ]
        }
      ],
      currentRuling: 'BJP',
      chiefMinister: 'Yogi Adityanath',
      alliance: 'NDA Alliance',
      seatsWon: 285,
      totalSeats: 403
    }
  };

  const currentState = electionData[selectedState];

  return (
    <div className="results-container">
      <div className="results-header">
        <button className="back-btn" onClick={onBack}>← Back to Dashboard</button>
        <h1>📊 Live Election Results - {currentState.name}</h1>
      </div>

      {/* State Selection */}
      <div className="state-selector">
        <label>Select State: </label>
        <select 
          value={selectedState} 
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="andhra-pradesh">Andhra Pradesh</option>
          <option value="telangana">Telangana</option>
          <option value="karnataka">Karnataka</option>
          <option value="tamil-nadu">Tamil Nadu</option>
          <option value="maharashtra">Maharashtra</option>
          <option value="uttar-pradesh">Uttar Pradesh</option>
        </select>
      </div>

      {/* Current Government Info */}
      <div className="government-info">
        <h2>🏛️ Current Government Information</h2>
        <div className="govt-details">
          <div className="govt-card">
            <h3>Ruling Party/Alliance</h3>
            <p className="ruling-party">{currentState.currentRuling}</p>
          </div>
          <div className="govt-card">
            <h3>Chief Minister</h3>
            <p className="cm-name">{currentState.chiefMinister}</p>
          </div>
          <div className="govt-card">
            <h3>Alliance</h3>
            <p className="alliance">{currentState.alliance}</p>
          </div>
          <div className="govt-card">
            <h3>Seats Won</h3>
            <p className="seats">{currentState.seatsWon} / {currentState.totalSeats}</p>
          </div>
        </div>
      </div>
      
      <div className="results-content">
        <div className="election-stats">
          <div className="stat-box">
            <h3>Total Votes Cast</h3>
            <p className="stat-number">{
              selectedState === 'andhra-pradesh' ? '4,127,483' :
              selectedState === 'telangana' ? '3,247,592' :
              selectedState === 'karnataka' ? '4,538,291' :
              selectedState === 'tamil-nadu' ? '5,428,183' :
              selectedState === 'maharashtra' ? '7,128,394' :
              '9,328,283'
            }</p>
          </div>
          <div className="stat-box">
            <h3>Voter Turnout</h3>
            <p className="stat-number">{
              selectedState === 'andhra-pradesh' ? '78.5%' :
              selectedState === 'telangana' ? '72.3%' :
              selectedState === 'karnataka' ? '75.1%' :
              selectedState === 'tamil-nadu' ? '73.8%' :
              selectedState === 'maharashtra' ? '68.9%' :
              '65.2%'
            }</p>
          </div>
          <div className="stat-box">
            <h3>Polling Stations</h3>
            <p className="stat-number">{
              selectedState === 'andhra-pradesh' ? '46,389' :
              selectedState === 'telangana' ? '35,892' :
              selectedState === 'karnataka' ? '58,473' :
              selectedState === 'tamil-nadu' ? '68,928' :
              selectedState === 'maharashtra' ? '96,582' :
              '1,73,672'
            }</p>
          </div>
        </div>

        <div className="live-results">
          <h2>🏛️ Constituency Results - {currentState.name}</h2>
          <div className="results-grid">
            {currentState.results.map((result, index) => (
              <div key={index} className="result-card">
                <h3>{result.constituency}</h3>
                <div className="candidate-list">
                  {result.candidates.map((candidate, idx) => (
                    <div key={idx} className={`candidate ${candidate.leading ? 'leading' : ''}`}>
                      <div className="candidate-info">
                        <span className={`party-${candidate.party.toLowerCase()}`}>{candidate.party}</span>
                        <span className="candidate-name">{candidate.candidate}</span>
                      </div>
                      <div className="vote-info">
                        <span className="votes">{candidate.votes}</span>
                        {candidate.leading && <span className="leading-badge">👑 Leading</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewResults;