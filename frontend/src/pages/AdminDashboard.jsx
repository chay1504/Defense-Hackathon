import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AdminDashboard.css'

const TEAMS = [
  { id: 'AD-2024-001', name: 'Vanguard Aerospace', category: 'Unmanned Systems', chipClass: 'chip-blue', status: 'Confirmed' },
  { id: 'AD-2024-042', name: 'Cortex AI Defense', category: 'Cyber Intelligence', chipClass: 'chip-indigo', status: 'Pending' },
  { id: 'AD-2024-118', name: 'Ironclad Structures', category: 'Material Science', chipClass: 'chip-green', status: 'Confirmed' },
  { id: 'AD-2024-502', name: 'Silent Shadow', category: 'Stealth Tech', chipClass: 'chip-blue', status: 'Confirmed' },
]

export default function AdminDashboard() {
  const [search, setSearch] = useState('')
  const filtered = TEAMS.filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.id.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="dash-page">
      {/* Top Nav */}
      <header className="dash-topnav">
        <Link to="/" className="dash-brand-link">AeroDef HQ</Link>
        <div className="dash-nav-links">
          <Link to="/">Home</Link>
          <Link to="/problem-statements">Problem Statements</Link>
          <Link to="/admin-login" className="dash-btn-login">Login</Link>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="dash-sidebar">
        <div className="dash-sidebar-head">
          <h2>Command Center</h2>
          <p>Protocol Active</p>
        </div>
        <nav className="dash-sidebar-nav">
          <a href="#" className="active"><span className="material-symbols-outlined">dashboard</span><span>Overview</span></a>
          <Link to="/submissions"><span className="material-symbols-outlined">description</span><span>Submission Details</span></Link>
          <a href="#"><span className="material-symbols-outlined">group</span><span>Team Comms</span></a>
        </nav>
        <div className="dash-sidebar-bottom">
          <button className="dash-btn-deploy">
            <span className="material-symbols-outlined">send</span> Deploy Project
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="dash-main">
        <header className="dash-hdr animate-fadeInUp">
          <div>
            <span className="dash-eyebrow">Administrative Control</span>
            <h1 className="dash-title">Registrar Database.</h1>
          </div>
          <button className="dash-btn-export"><span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>download</span> Export to CSV</button>
        </header>

        {/* KPIs */}
        <section className="dash-kpi-grid">
          <div className="dash-kpi dash-kpi-light animate-fadeInUp delay-1">
            <div className="dash-kpi-top">
              <div><h3 className="dash-kpi-label">Total Registrations</h3><p className="dash-kpi-value">1,402</p></div>
              <div className="dash-kpi-icon"><span className="material-symbols-outlined" style={{ fontSize: '1.875rem' }}>group_add</span></div>
            </div>
            <div className="dash-kpi-bottom">
              <div><p className="dash-kpi-sub-label">Students</p><p className="dash-kpi-sub-value">894</p></div>
              <div><p className="dash-kpi-sub-label">Startups</p><p className="dash-kpi-sub-value">508</p></div>
            </div>
          </div>
          <div className="dash-kpi dash-kpi-blue animate-fadeInUp delay-2">
            <div className="dash-kpi-top">
              <div><h3 className="dash-kpi-label">Revenue Collected</h3><p className="dash-kpi-value">$42,900.00</p></div>
              <div className="dash-kpi-icon"><span className="material-symbols-outlined" style={{ fontSize: '1.875rem' }}>payments</span></div>
            </div>
            <div className="dash-kpi-bottom">
              <div><p className="dash-kpi-sub-label">Student Fees</p><p className="dash-kpi-sub-value">$17,500.00</p></div>
              <div><p className="dash-kpi-sub-label">Startup Fees</p><p className="dash-kpi-sub-value">$25,400.00</p></div>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="dash-table-section animate-fadeInUp delay-3">
          <div className="dash-table-header">
            <h2>Active Deployments</h2>
            <div className="dash-search-wrap">
              <span className="material-symbols-outlined">search</span>
              <input className="dash-search" type="text" placeholder="Filter team..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="dash-table">
              <thead>
                <tr><th>Team ID</th><th>Team Name</th><th>Category</th><th>Status</th><th style={{ textAlign: 'right' }}>Action</th></tr>
              </thead>
              <tbody>
                {filtered.map(t => (
                  <tr key={t.id}>
                    <td className="dash-team-id">{t.id}</td>
                    <td className="dash-team-name">{t.name}</td>
                    <td><span className={`dash-chip ${t.chipClass}`}>{t.category}</span></td>
                    <td>
                      <div className={`dash-status ${t.status === 'Confirmed' ? 'dash-status-ok' : 'dash-status-pending'}`}>
                        <span className="dash-dot" />
                        {t.status}
                      </div>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="dash-action-btn"><span className="material-symbols-outlined">more_vert</span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="dash-pagination">
            <span>Showing 1-{filtered.length} of 1,402 teams</span>
            <div className="dash-page-btns">
              <button className="dash-page-btn"><span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_left</span></button>
              <button className="dash-page-btn active">1</button>
              <button className="dash-page-btn">2</button>
              <button className="dash-page-btn"><span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span></button>
            </div>
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
