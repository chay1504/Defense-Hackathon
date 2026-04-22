import LoginLayout from '../components/LoginLayout'
import { PasswordInput } from '../components/FormInput'

export default function StudentLogin() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Login submitted (demo)') }

  return (
    <LoginLayout>
      <main style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', flex: 1, justifyContent: 'center' }}>
        <div className="login-card">
          <div className="login-icon-wrap" style={{ background: '#005a8d', boxShadow: '0 4px 12px rgba(0,90,141,0.3)' }}>
            <span className="material-symbols-outlined filled">admin_panel_settings</span>
          </div>
          <h1>Student Login</h1>
          <p className="subtitle">&nbsp;</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label" htmlFor="student-email">Email Address</label>
              <input className="form-input" id="student-email" type="email" placeholder="student@university.edu" required />
            </div>
            <PasswordInput label="Password" id="student-password" forgotLink="Forgot Password?" />
            <div style={{ paddingTop: '1rem' }}>
              <button type="submit" className="btn-login btn-login-teal">
                <span className="btn-text">Secure Login</span>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>key</span>
              </button>
            </div>
          </form>

          <div className="login-bottom-note">
            <p>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>info</span>
              Contact your administrator for access
            </p>
          </div>
        </div>
        <div className="login-meta"><p>Node: Alpha-9 // Clearance: Tier 1</p></div>
      </main>
    </LoginLayout>
  )
}
