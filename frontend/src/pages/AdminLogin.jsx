import LoginLayout from '../components/LoginLayout'
import { PasswordInput } from '../components/FormInput'

export default function AdminLogin() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Login submitted (demo)') }

  return (
    <LoginLayout>
      <main style={{ zIndex: 10, position: 'relative' }}>
        <div className="login-card">
          <div className="login-icon-wrap" style={{ background: '#005a8d', boxShadow: '0 4px 12px rgba(0,90,141,0.3)' }}>
            <span className="material-symbols-outlined filled">admin_panel_settings</span>
          </div>
          <h1>Admin Login</h1>
          <p className="subtitle">&nbsp;</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label" htmlFor="admin-email">Email Address</label>
              <input className="form-input" id="admin-email" type="email" placeholder="admin@sovereign.mil" required />
            </div>
            <PasswordInput label="Password" id="admin-password" forgotLink="Forgot Password?" />
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
        <div className="login-meta">
          <p>Node: Alpha-9 // Clearance: Tier 1</p>
        </div>
      </main>
    </LoginLayout>
  )
}
