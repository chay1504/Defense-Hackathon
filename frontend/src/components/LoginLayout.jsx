import { Link } from 'react-router-dom'
import './LoginLayout.css'

export default function LoginLayout({ children, brandName = 'Sovereign Portal', showLangLabel, footer }) {
  return (
    <div className="login-page radar-grid">
      {/* Header */}
      <header className="login-header">
        <Link to="/" className="login-brand">{brandName}</Link>
        <div className="login-header-actions">
          {showLangLabel ? (
            <>
              <button className="login-hdr-btn">
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>language</span>
                <span className="login-hdr-label">EN</span>
              </button>
              <button className="login-hdr-btn">
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>help</span>
                <span className="login-hdr-label">Support</span>
              </button>
            </>
          ) : (
            <>
              <button className="login-hdr-btn">
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>help</span>
              </button>
              <button className="login-hdr-btn">
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>language</span>
              </button>
            </>
          )}
        </div>
      </header>

      {/* Content */}
      {children}

      {/* Footer */}
      <footer className="login-footer">
        <p className="login-copyright">© 2026 Sovereign Defense Operations. Secure Intelligence Access.</p>
        <div className="login-footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Support</a>
        </div>
      </footer>

      {/* Decorative */}
      <div className="login-decor">
        <div className="login-blob login-blob-left" />
        <div className="login-blob login-blob-right" />
      </div>
    </div>
  )
}
