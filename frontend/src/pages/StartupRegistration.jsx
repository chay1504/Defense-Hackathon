import { useState } from 'react'
import { Link } from 'react-router-dom'
import { OtpInput } from '../components/FormInput'
import './Registration.css'

export default function StartupRegistration() {
  const [teamSize, setTeamSize] = useState(3)
  const handleSubmit = (e) => { e.preventDefault(); alert('Registration submitted (demo)') }

  return (
    <div className="reg-page">
      <header className="reg-topnav">
        <div className="reg-topnav-inner">
          <Link to="/" className="reg-brand">DEFENSE HACKATHON 2K26</Link>
          <nav className="reg-nav">
            <Link to="/student-registration" className="reg-nav-link">Student Track</Link>
            <Link to="/startup-registration" className="reg-nav-link active">Startup Track</Link>
          </nav>
          <span className="reg-support">Support</span>
        </div>
      </header>

      <main className="reg-main">
        <div className="reg-bg-motif radar-grid-dots" />
        <div className="reg-container animate-fadeInUp">
          <div className="reg-quote-header">
            <div className="reg-quote-block">
              <span>"Built for those who build what matters."</span>
            </div>
          </div>

          <form className="reg-form-body" onSubmit={handleSubmit}>
            {/* Section 1: Personal */}
            <section className="reg-section">
              <div className="reg-sec-header"><span className="reg-sec-num">01</span><h2>Personal Information</h2></div>
              <div className="reg-grid-2">
                <div className="reg-field"><label>Full Name</label><input className="reg-input" placeholder="Johnathan Doe" /></div>
                <div className="reg-field"><label>Phone Number</label><input className="reg-input" type="tel" placeholder="+91 XXXXX XXXXX" /></div>
                <div className="reg-field">
                  <label>Email Address</label>
                  <div className="reg-email-row">
                    <input className="reg-input" type="email" placeholder="j.doe@startup.com" />
                    <button type="button" className="btn-otp">Get OTP</button>
                  </div>
                  <OtpInput />
                </div>
                <div className="reg-field"><label>Gender</label>
                  <select className="reg-select"><option>Select Identity</option><option>Male</option><option>Female</option><option>Non-binary</option><option>Prefer not to say</option></select>
                </div>
                <div className="reg-field"><label>Password</label><input className="reg-input" type="password" placeholder="Create password" required /></div>
                <div className="reg-field"><label>Confirm Password</label><input className="reg-input" type="password" placeholder="Confirm password" required /></div>
              </div>
            </section>

            {/* Section 2: Startup Details */}
            <section className="reg-section">
              <div className="reg-sec-header"><span className="reg-sec-num">02</span><h2>Startup Details</h2></div>
              <div className="reg-subsection">
                <div className="reg-grid-2">
                  <div className="reg-field reg-full"><label>Startup Name</label><input className="reg-input reg-input-low" placeholder="Innovative Defense Systems LLC" /></div>
                  <div className="reg-field"><label>Office State</label><input className="reg-input reg-input-low" /></div>
                  <div className="reg-field"><label>Office District</label><input className="reg-input reg-input-low" /></div>
                </div>
              </div>
            </section>

            {/* Section 3: Team */}
            <section className="reg-section">
              <div className="reg-sec-header"><span className="reg-sec-num">03</span><h2>Team Details</h2></div>
              <div className="reg-grid-4">
                <div className="reg-field reg-span-2"><label>Team Name</label><input className="reg-input" placeholder="Cyber Sentinels" /></div>
                <div className="reg-field"><label>Leader Name</label><input className="reg-input" readOnly value="Johnathan Doe" /></div>
                <div className="reg-field"><label>Team Size</label>
                  <select className="reg-select" value={teamSize} onChange={(e) => setTeamSize(parseInt(e.target.value))}>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Section 4: Members */}
            <section className="reg-section">
              <div className="reg-members-hdr">
                <div className="reg-sec-header"><span className="reg-sec-num">04</span><h2>Member Details</h2></div>
                <span className="reg-badge">{teamSize - 1} Member{teamSize - 1 !== 1 && 's'} Pending</span>
              </div>
              <div className="reg-member-cards">
                {Array.from({ length: teamSize - 1 }).map((_, i) => {
                  const n = i + 2
                  return (
                    <div className="reg-member-card" key={n}>
                      <div className="reg-member-top" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                        <span className="reg-member-label">Member 0{n}</span>
                        <button type="button" className="reg-remove-btn" onClick={() => setTeamSize(prev => Math.max(2, prev - 1))}>
                          <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>close</span>
                        </button>
                      </div>
                      <div className="reg-grid-2">
                        <div className="reg-field"><label>Member Name</label><input className="reg-input reg-input-low" placeholder="Full Name" /></div>
                        <div className="reg-field"><label>Member Email ID</label><input className="reg-input reg-input-low" type="email" placeholder="email@college.edu" /></div>
                        <div className="reg-field"><label>Phone Number</label><input className="reg-input reg-input-low" type="tel" placeholder="+91 XXXXX XXXXX" /></div>
                        <div className="reg-field"><label>Gender</label>
                          <select className="reg-select" style={{ background: 'var(--surface-container-lowest)' }}>
                            <option>Select Gender</option><option>Male</option><option>Female</option><option>Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            <div className="reg-submit">
              <div className="reg-terms-row">
                <input type="checkbox" id="su-terms" />
                <label htmlFor="su-terms">I certify that all provided intelligence is accurate and comply with the Hackathon Guidelines.</label>
              </div>
              <button type="submit" className="reg-submit-btn">Finalize Registration</button>
            </div>
          </form>
        </div>
      </main>

      <footer className="reg-footer">
        <div className="reg-footer-inner">
          <div className="reg-brand" style={{ fontSize: '0.875rem' }}>DEFENSE HACKATHON 2026</div>
          <div className="reg-footer-links">
            <a href="#">Privacy Protocol</a><a href="#">Operational Terms</a>
            <a href="#">Track Guidelines</a><a href="#">Intelligence Support</a>
          </div>
          <div className="reg-copyright">© 2026 DEFENSE INNOVATION COMMAND. OFFICIAL PORTAL.</div>
        </div>
      </footer>
    </div>
  )
}
