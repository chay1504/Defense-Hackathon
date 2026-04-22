import { Link } from 'react-router-dom'
import LoginLayout from '../components/LoginLayout'
import { PasswordInput } from '../components/FormInput'

export default function StartupLogin() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Login submitted (demo)') }

  return (
    <LoginLayout showLangLabel>
      <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', zIndex: 10 }}>
        <div className="login-card" style={{ borderRadius: 'var(--radius-xl)', padding: '3.5rem' }}>
          <div className="login-card-motif" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem' }}>
            <div style={{ marginBottom: '1.5rem', background: '#0A2472', padding: '1rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 12px rgba(10,36,114,0.3)' }}>
              <span className="material-symbols-outlined filled" style={{ color: '#fff', fontSize: '2rem' }}>security</span>
            </div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.015em', textAlign: 'center', lineHeight: 1.2 }}>Startup Login</h1>
            <p className="subtitle" style={{ marginTop: '0.75rem' }}>&nbsp;</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="form-field">
              <label className="form-label" htmlFor="startup-email" style={{ color: 'var(--on-surface-variant)', marginLeft: 2 }}>Email Address</label>
              <input className="form-input" id="startup-email" type="email" placeholder="name@agency.gov"
                     style={{ background: '#E8EDF2', borderBottom: '2px solid var(--outline-variant)', padding: '1rem' }} required />
            </div>
            <div className="form-field">
              <div className="label-row" style={{ marginLeft: 2 }}>
                <label className="form-label" htmlFor="startup-password" style={{ color: 'var(--on-surface-variant)' }}>Password</label>
                <a href="#" className="forgot-link" style={{ color: '#0A2472' }}>Forgot Password?</a>
              </div>
              <PasswordInput id="startup-password" placeholder="••••••••" />
            </div>
            <button type="submit" className="btn-login btn-login-navy" style={{ marginTop: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: '0 8px 24px rgba(10,36,114,0.2)' }}>
              <span className="btn-text" style={{ fontSize: '0.9375rem', letterSpacing: '0.05em' }}>Login</span>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>login</span>
            </button>
          </form>

          <div className="login-create-account">
            <p>New here? <Link to="/startup-registration">Create an account</Link></p>
          </div>
        </div>
      </main>
    </LoginLayout>
  )
}
