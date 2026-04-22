import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div className="landing-page radar-grid">
      <div className="landing-decor">
        <div className="landing-blob landing-blob-1" />
        <div className="landing-blob landing-blob-2" />
      </div>

      <header className="landing-header">
        <div className="landing-brand">Sovereign Portal</div>
        <div className="landing-hdr-actions">
          <button className="landing-hdr-btn"><span className="material-symbols-outlined">help</span></button>
          <button className="landing-hdr-btn"><span className="material-symbols-outlined">language</span></button>
        </div>
      </header>

      <main className="landing-main">
        <div className="landing-content animate-fadeInUp">
          <div className="landing-shield">
            <span className="material-symbols-outlined filled">shield</span>
          </div>
          <h1 className="landing-title">Defense Hackathon<br/>2K26</h1>
          <p className="landing-desc">Secure portal for defense innovation. Register your team, track your progress, and deploy your project.</p>

          <div className="landing-cards">
            <Link to="/student-login" className="landing-card">
              <span className="material-symbols-outlined" style={{ color: '#92ccff', fontSize: '2rem' }}>school</span>
              <span className="landing-card-label">Student Login</span>
            </Link>
            <Link to="/startup-login" className="landing-card">
              <span className="material-symbols-outlined" style={{ color: '#92ccff', fontSize: '2rem' }}>rocket_launch</span>
              <span className="landing-card-label">Startup Login</span>
            </Link>
            <Link to="/admin-login" className="landing-card">
              <span className="material-symbols-outlined" style={{ color: '#92ccff', fontSize: '2rem' }}>admin_panel_settings</span>
              <span className="landing-card-label">Admin Login</span>
            </Link>
          </div>

          <div className="landing-quick-links">
            <Link to="/student-registration">Student Registration →</Link>
            <Link to="/startup-registration">Startup Registration →</Link>
            <Link to="/admin-dashboard">Admin Dashboard →</Link>
            <Link to="/student-portal">Student Portal →</Link>
          </div>
        </div>
      </main>

      <footer className="landing-footer">
        <p>© 2026 Sovereign Defense Operations. Secure Intelligence Access.</p>
        <div className="landing-footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Support</a>
        </div>
      </footer>
    </div>
  )
}
