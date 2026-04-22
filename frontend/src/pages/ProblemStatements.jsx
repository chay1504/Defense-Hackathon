import { Link } from 'react-router-dom'
import './ProblemStatements.css'

export default function ProblemStatements() {
  const problems = [
    {
      id: "PS-01",
      title: "Secure Mesh Communications",
      context: "Derived from recent UK Government tech directives regarding fragile communication lines.",
      problem: "When central towers go down, operating units cannot talk to each other. We need a software app that connects devices directly to form a local network. Addressing this problem means ensuring all nodes sync properly without a central server.",
      plugin: "Telecom_Tech_File_Plugin.pdf",
      icon: "wifi_tethering"
    },
    {
      id: "PS-02",
      title: "Autonomous Logistics Allocation",
      context: "Following the latest defense speech on supply chain automation and software implementation.",
      problem: "We need a very simple way to figure out which drone should deliver which supply box to which location automatically. The software app must connect the inventory records to the active fleet properly.",
      plugin: "Aero_Tech_File_Plugin.zip",
      icon: "flight_takeoff"
    },
    {
      id: "PS-03",
      title: "Perimeter Threat Identification",
      context: "Addresses the problem of remote base security forming simple records.",
      problem: "We have hundreds of sensors but no quick way to tell if motion is an actual threat or just noise. Build a simple software plugin that filters the data into simple records of real threats.",
      plugin: "Sensor_Tech_File_Plugin.pdf",
      icon: "radar"
    }
  ]

  return (
    <div className="psb-page radar-grid">
      <header className="psb-header">
        <Link to="/" className="psb-brand">Sovereign Portal Access</Link>
        <div className="psb-nav-links">
          <Link to="/">Home</Link>
          <Link to="/problem-statements" className="active">Problem Statements</Link>
        </div>
      </header>

      <main className="psb-main">
        <div className="psb-container">
          
          <div className="psb-title-section animate-fadeInUp">
            <h1>Strategic Problem Statements</h1>
            <p>
              Review the straightforward directives outlined below. Addressing these issues means you understand the core problems identified in recent government briefings. Use these ideas to build a connected software app that forms a complete solution.
            </p>
          </div>

          <div className="psb-grid">
            {problems.map((p, i) => (
              <div className="psb-card animate-fadeInUp" style={{ animationDelay: `${(i + 1) * 100}ms` }} key={p.id}>
                
                <div className="psb-card-top">
                  <div className="psb-icon-wrap">
                    <span className="material-symbols-outlined">{p.icon}</span>
                  </div>
                  <span className="psb-id-badge">{p.id}</span>
                </div>

                <h2 className="psb-card-title">{p.title}</h2>
                <div className="psb-context">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>campaign</span>
                  {p.context}
                </div>

                <div className="psb-problem-box">
                  <h4>The Core Problem</h4>
                  <p>{p.problem}</p>
                </div>

                <div className="psb-plugin-dl">
                  <div className="psb-plugin-info">
                    <span className="material-symbols-outlined" style={{ color: '#006193', fontSize: 28 }}>extension</span>
                    <div>
                      <p className="psb-plugin-label">Required Tech File Plugin</p>
                      <p className="psb-plugin-name">{p.plugin}</p>
                    </div>
                  </div>
                  <button className="psb-btn-download">
                    <span className="material-symbols-outlined">download</span> Download Plugin
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </main>

      <footer className="psb-footer">
        <div className="psb-footer-inner">
          <p>© 2026 Sovereign Blueprint Defense.</p>
          <div className="psb-footer-links">
            <a href="#">Security Protocol</a>
            <a href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
