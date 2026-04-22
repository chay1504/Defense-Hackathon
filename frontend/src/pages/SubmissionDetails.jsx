import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AdminDashboard.css'

const SUBMISSIONS = [
  { ideaId: 'ID-1001', ideaTitle: 'Autonomous Recon Drone Swarm', logic: 'AI Vision & Distributed Computing', teamId: 'AD-2024-001', teamLead: 'Arjun Vardhan', leader: 'Arjun Vardhan', status: 'Submitted' },
  { ideaId: 'ID-1002', ideaTitle: 'Secure Mesh Communications', logic: 'Decentralized P2P Cryptography', teamId: 'AD-2024-042', teamLead: 'Sanya Malhotra', leader: 'Sanya Malhotra', status: 'Draft' },
  { ideaId: 'ID-1003', ideaTitle: 'Reactive Nanotech Armor', logic: 'Material Stress AI Prediction', teamId: 'AD-2024-118', teamLead: 'Vikram Aditya', leader: 'Vikram Aditya', status: 'Under Review' },
  { ideaId: 'ID-1004', ideaTitle: 'Silent Shadow Submersibles', logic: 'Stealth Acoustics Engine', teamId: 'AD-2024-502', teamLead: 'Meera Reddy', leader: 'Meera Reddy', status: 'Submitted' },
]

export default function SubmissionDetails() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  
  const filtered = SUBMISSIONS.filter(s => 
    s.ideaTitle.toLowerCase().includes(search.toLowerCase()) || 
    s.ideaId.toLowerCase().includes(search.toLowerCase()) ||
    s.teamId.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="dash-page">
      <nav className="dash-topnav">
        <Link to="/" className="dash-brand-link">Sovereign Portal</Link>
        <div className="dash-nav-links">
          <Link to="/">Home</Link>
          <Link to="/problem-statements">Problem Statements</Link>
        </div>
      </nav>

      <aside className="dash-sidebar">
        <div className="dash-sidebar-head">
          <h2>Project Hub</h2>
          <p>Global Directory</p>
        </div>
        <nav className="dash-sidebar-nav">
          <button onClick={() => navigate(-1)} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: 0 }} className="dash-action-btn">
            <a style={{ pointerEvents: 'none' }}><span className="material-symbols-outlined">arrow_back</span><span>Back to Dashboard</span></a>
          </button>
          <Link to="/submissions" className="active"><span className="material-symbols-outlined">lightbulb</span><span>Submission Details</span></Link>
        </nav>
      </aside>

      <main className="dash-main">
        <header className="dash-hdr animate-fadeInUp">
          <div>
            <span className="dash-eyebrow">Project Database</span>
            <h1 className="dash-title" style={{ fontSize: '2.5rem' }}>Submission Details</h1>
          </div>
          <button className="dash-btn-export"><span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>download</span> Export Proposals</button>
        </header>

        <section className="dash-table-section animate-fadeInUp delay-1">
          <div className="dash-table-header">
            <h2>Current Proposals</h2>
            <div className="dash-search-wrap">
              <span className="material-symbols-outlined">search</span>
              <input className="dash-search" type="text" placeholder="Search ideas..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Idea ID</th>
                  <th>Idea Title</th>
                  <th>Logic</th>
                  <th>Team ID</th>
                  <th>Team Lead</th>
                  <th>Leader</th>
                  <th>Submission Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr key={i}>
                    <td className="dash-team-id">{s.ideaId}</td>
                    <td className="dash-team-name">{s.ideaTitle}</td>
                    <td>{s.logic}</td>
                    <td className="dash-team-id">{s.teamId}</td>
                    <td>{s.teamLead}</td>
                    <td>{s.leader}</td>
                    <td>
                      <div className={`dash-status ${s.status === 'Submitted' ? 'dash-status-ok' : 'dash-status-pending'}`}>
                        <span className="dash-dot" />
                        {s.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="dash-footer">
        <p>© 2026 Sovereign Blueprint Defense. Built for Strategic Excellence.</p>
        <div className="dash-footer-links">
          <a href="#">Security Protocol</a><a href="#">Operational Terms</a><a href="#">Contact Support</a>
        </div>
      </footer>
    </div>
  )
}
