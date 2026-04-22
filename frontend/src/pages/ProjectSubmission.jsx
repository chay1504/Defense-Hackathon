import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ProjectSubmission.css'

export default function ProjectSubmission() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    pptFile: null,
    mediaExplanation: '',
    developmentCode: '',
    proBizBoard: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/submission-confirmation', { 
      state: { 
        ...formData,
        ideaTitle: 'Tactical Defense System (Draft Idea)' // In a real app, this comes from an earlier selection
      } 
    })
  }

  return (
    <div className="sp-page">
      {/* Sidebar (similar to StudentPortal) */}
      <aside className="sp-sidebar">
        <div className="sp-sidebar-brand"><h1>DEFENCE HACKATHON</h1></div>
        <nav className="sp-sidebar-nav">
          <Link to="/student-portal"><span className="material-symbols-outlined">groups</span><span>Dashboard</span></Link>
          <Link to="/project-submission" className="active"><span className="material-symbols-outlined filled">cloud_upload</span><span>Submit Project</span></Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="sp-main">
        <header className="sp-header">
          <div className="sp-header-inner">
            <h2>PROJECT SUBMISSION</h2>
            <nav className="sp-header-nav">
              <Link to="/">Home</Link>
              <Link to="/problem-statements">Problem Statements</Link>
              <Link to="/student-login" className="sp-btn-logout">Logout</Link>
            </nav>
          </div>
        </header>

        <div className="sp-content">
          <div className="sp-content-inner">
            
            <div className="sp-page-title animate-fadeInUp">
              <h1>Submission Details</h1>
              <div className="sp-title-bar" />
              <p style={{ marginTop: '1rem', color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>
                <strong>Notice:</strong> For student participants pursuing the startup route, verification will be requested directly from your college's designated student startup division.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="ps-form animate-fadeInUp delay-1">
              
              <div className="ps-section">
                <h3>1. Core Deliverables</h3>
                <p className="ps-section-desc">Provide the required documentation, media, and source code for your solution.</p>
                
                <div className="ps-grid-3">
                  {/* Box 1: Project PPT/BTT */}
                  <div className="ps-upload-box">
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: '#2196F3' }}>description</span>
                    <label className="ps-label">Project PPT / PDF</label>
                    <p className="ps-hint">Upload your presentation deck</p>
                    <input type="file" className="ps-file-input" required />
                  </div>

                  {/* Box 2: Media Explanation */}
                  <div className="ps-upload-box">
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: '#2196F3' }}>play_circle</span>
                    <label className="ps-label">Media Explanation</label>
                    <p className="ps-hint">Video link or demo URL</p>
                    <input 
                      type="url" 
                      className="ps-text-input" 
                      placeholder="https://youtube.com/..." 
                      value={formData.mediaExplanation}
                      onChange={e => setFormData({ ...formData, mediaExplanation: e.target.value })}
                      required 
                    />
                  </div>

                  {/* Box 3: Development */}
                  <div className="ps-upload-box">
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: '#2196F3' }}>code</span>
                    <label className="ps-label">Development source</label>
                    <p className="ps-hint">GitHub repo or Drive link</p>
                    <input 
                      type="url" 
                      className="ps-text-input" 
                      placeholder="https://github.com/..." 
                      value={formData.developmentCode}
                      onChange={e => setFormData({ ...formData, developmentCode: e.target.value })}
                      required 
                    />
                  </div>
                </div>
              </div>

              <div className="ps-section animate-fadeInUp delay-2">
                <h3>2. Pro-Biz Board</h3>
                <p className="ps-section-desc">Outline your business case, market feasibility, and integration strategy below.</p>
                <div className="ps-field">
                  <textarea 
                    className="ps-textarea" 
                    placeholder="Enter your strategic business plan, target audience, and scaleability metrics here..."
                    rows="8" 
                    value={formData.proBizBoard}
                    onChange={e => setFormData({ ...formData, proBizBoard: e.target.value })}
                    required 
                  ></textarea>
                </div>
              </div>

              <div className="ps-submit-row animate-fadeInUp delay-3">
                <button type="submit" className="ps-submit-btn">
                  <span className="material-symbols-outlined">send</span> Push Final Submission
                </button>
              </div>

            </form>
          </div>
        </div>

        <footer className="sp-footer" style={{ marginTop: 'auto' }}>
          <div className="sp-footer-inner">
            <p>© 2026 Defence Hackathon. Tactical Precision Engineering.</p>
            <div className="sp-footer-links"><a href="#">Contact Info</a><a href="#">Privacy Policy</a></div>
          </div>
        </footer>

      </main>
    </div>
  )
}
