import { Link } from 'react-router-dom'
import './StudentPortal.css'

const MEMBERS = [
  { name: 'Arjun Vardhan (Leader)', email: 'arjun.v@nitw.edu.in', phone: '+91 98765 43210', gender: 'Male', college: 'National Institute of Technology, Warangal' },
  { name: 'Sanya Malhotra', email: 'sanya.m@nitw.edu.in', phone: '+91 98765 43211', gender: 'Female', college: 'National Institute of Technology, Warangal' },
  { name: 'Vikram Aditya', email: 'vikram.a@nitw.edu.in', phone: '+91 98765 43212', gender: 'Male', college: 'National Institute of Technology, Warangal' },
  { name: 'Meera Reddy', email: 'meera.r@nitw.edu.in', phone: '+91 98765 43213', gender: 'Female', college: 'National Institute of Technology, Warangal' },
  { name: 'Rohan Gupta', email: 'rohan.g@nitw.edu.in', phone: '+91 98765 43214', gender: 'Male', college: 'National Institute of Technology, Warangal' },
]

export default function StudentPortal() {
  const copyId = () => {
    navigator.clipboard.writeText('#DH-2024-991')
    alert('Copied!')
  }

  return (
    <div className="sp-page">
      {/* Sidebar */}
      <aside className="sp-sidebar">
        <div className="sp-sidebar-brand"><h1>DEFENCE HACKATHON</h1></div>
        <nav className="sp-sidebar-nav">
          <a href="#" className="active"><span className="material-symbols-outlined filled">groups</span><span>Dashboard</span></a>
          <a href="#"><span className="material-symbols-outlined">lightbulb</span><span>Submission Details</span></a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="sp-main">
        <header className="sp-header">
          <div className="sp-header-inner">
            <h2>STUDENT PORTAL</h2>
            <nav className="sp-header-nav">
              <Link to="/">Home</Link>
              <a href="#">Problem Statements</a>
              <Link to="/student-login" className="sp-btn-logout">Logout</Link>
            </nav>
          </div>
        </header>

        <div className="sp-content">
          <div className="sp-content-inner">
            <div className="sp-page-title animate-fadeInUp">
              <h1>Team Details</h1>
              <div className="sp-title-bar" />
            </div>

            <div className="sp-stat-cards">
              <div className="sp-stat-card animate-fadeInUp delay-1">
                <p className="sp-stat-label">Team Name</p>
                <p className="sp-stat-value">CYBER_SENTINEL_V4</p>
              </div>
              <div className="sp-stat-card animate-fadeInUp delay-2">
                <p className="sp-stat-label">Team Leader</p>
                <p className="sp-stat-value">Arjun Vardhan</p>
              </div>
              <div className="sp-stat-card animate-fadeInUp delay-3">
                <p className="sp-stat-label">Team ID</p>
                <div className="sp-stat-value-row">
                  <p className="sp-stat-value">#DH-2024-991</p>
                  <button className="sp-copy-btn" onClick={copyId}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>content_copy</span>
                  </button>
                </div>
              </div>
            </div>

            <section className="sp-table-section animate-fadeInUp delay-4">
              <div className="sp-table-hdr">
                <h2>Team Members</h2>
                <div className="sp-members-badge"><span>TOTAL MEMBERS:</span><span className="sp-badge-count">05</span></div>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table className="sp-table">
                  <thead><tr><th>Member Name</th><th>Email Address</th><th>Phone</th><th>Gender</th><th>College Name</th></tr></thead>
                  <tbody>
                    {MEMBERS.map((m, i) => (
                      <tr key={i}><td>{m.name}</td><td>{m.email}</td><td>{m.phone}</td><td>{m.gender}</td><td>{m.college}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="sp-info-banner animate-fadeInUp delay-5">
              <span className="material-symbols-outlined" style={{ color: '#2196F3' }}>info</span>
              <p>Team verification is complete. Team Details available in Dashboard.</p>
            </div>
          </div>
        </div>

        <footer className="sp-footer">
          <div className="sp-footer-inner">
            <p>© 2026 Defence Hackathon. Tactical Precision Engineering.</p>
            <div className="sp-footer-links"><a href="#">Contact Info</a><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
          </div>
        </footer>
      </main>
    </div>
  )
}
