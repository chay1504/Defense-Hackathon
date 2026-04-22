import { useLocation, Link } from 'react-router-dom'
import './SubmissionConfirmation.css'

export default function SubmissionConfirmation() {
  const location = useLocation()
  
  // If navigated directly, use mock data. If from submission form, merge with state.
  const data = {
    ideaId: 'ID-2026-X84T',
    ideaTitle: location.state?.ideaTitle || 'Tactical Defense System (Draft Idea)',
    template: 'Software Protocol Template-B',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    problemStatement: 'PS-12: Decentralized Mesh Communications',
    pptFile: location.state?.pptFile?.name || 'project-deck-final.pdf',
    mediaExplanation: location.state?.mediaExplanation || 'https://vimeo.com/demo-link',
    developmentCode: location.state?.developmentCode || 'https://github.com/secure-mesh-2026',
    proBizBoard: location.state?.proBizBoard || 'Our focus is strictly addressing communication resilience in high-interference zones.',
    teamName: 'CYBER_SENTINEL_V4',
    college: 'National Institute of Technology',
    leader: 'Arjun Vardhan'
  }

  return (
    <div className="conf-page radar-grid">
      <header className="conf-header">
        <Link to="/student-portal" className="conf-brand">Sovereign Portal Access</Link>
        <Link to="/student-portal" className="conf-btn-return">
          <span className="material-symbols-outlined">arrow_back</span> Return to Dashboard
        </Link>
      </header>

      <main className="conf-main">
        <div className="conf-container animate-fadeInUp">
          
          <div className="conf-success-banner">
            <span className="material-symbols-outlined conf-success-icon">task_alt</span>
            <div className="conf-banner-text">
              <h1>Submission Verified</h1>
              <p>Your solution has been securely transmitted to Hackathon Command.</p>
            </div>
          </div>

          <div className="conf-grid">
            {/* Left Column: Student & Idea Info */}
            <div className="conf-col-left">
              {/* Student Photo Card */}
              <div className="conf-card">
                <div className="conf-avatar-wrap">
                  <img src="https://i.pravatar.cc/150?img=11" alt="Student Profile" className="conf-avatar" />
                  <div className="conf-avatar-badge"><span className="material-symbols-outlined" style={{fontSize: 14}}>verified</span> Verified Profile</div>
                </div>
                <h3 className="conf-student-name">{data.leader}</h3>
                <p className="conf-student-detail">Team Leader - {data.teamName}</p>
                <p className="conf-student-detail">{data.college}</p>
              </div>

              {/* Idea Details */}
              <div className="conf-card conf-card-brand">
                <div className="conf-card-header">
                  <span className="material-symbols-outlined">lightbulb</span>
                  <h4>Idea Specifications</h4>
                </div>
                <div className="conf-kv">
                  <span className="conf-k">Idea ID</span>
                  <span className="conf-v">{data.ideaId}</span>
                </div>
                <div className="conf-kv">
                  <span className="conf-k">Title</span>
                  <span className="conf-v">{data.ideaTitle}</span>
                </div>
                <div className="conf-kv">
                  <span className="conf-k">Template</span>
                  <span className="conf-v">{data.template}</span>
                </div>
                <div className="conf-kv">
                  <span className="conf-k">Problem Statement</span>
                  <span className="conf-v">{data.problemStatement}</span>
                </div>
                <div className="conf-kv">
                  <span className="conf-k">Submission Date</span>
                  <span className="conf-v">{data.date}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Submitted Assets */}
            <div className="conf-col-right">
              <div className="conf-card" style={{ flexGrow: 1 }}>
                <div className="conf-card-header">
                  <span className="material-symbols-outlined">folder_special</span>
                  <h4>Registered Submission Assets</h4>
                </div>
                
                <p className="conf-section-desc">The following files and logic boards are now locked for preliminary evaluation. Further edits require administrative clearance.</p>
                
                <div className="conf-asset-grid">
                  <div className="conf-asset-item">
                    <span className="material-symbols-outlined">picture_as_pdf</span>
                    <div>
                      <p className="conf-asset-label">Project BTT / Pitch Deck</p>
                      <p className="conf-asset-value">{data.pptFile}</p>
                    </div>
                  </div>

                  <div className="conf-asset-item">
                    <span className="material-symbols-outlined">smart_display</span>
                    <div>
                      <p className="conf-asset-label">Media Explanation Link</p>
                      <a href={data.mediaExplanation} target="_blank" rel="noreferrer" className="conf-asset-link">Watch Demonstration</a>
                    </div>
                  </div>

                  <div className="conf-asset-item">
                    <span className="material-symbols-outlined">terminal</span>
                    <div>
                      <p className="conf-asset-label">Development Source</p>
                      <a href={data.developmentCode} target="_blank" rel="noreferrer" className="conf-asset-link">View Repository</a>
                    </div>
                  </div>
                </div>

                <div className="conf-probiz-box">
                  <h5><span className="material-symbols-outlined" style={{fontSize: 16}}>query_stats</span> Pro-Biz Board Statement</h5>
                  <div className="conf-probiz-content">
                    <p>{data.proBizBoard}</p>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  )
}
