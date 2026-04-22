import { useState } from 'react'
import './FormInput.css'

export function FormInput({ label, id, type = 'text', placeholder, required, readOnly, value, onChange, className = '' }) {
  return (
    <div className={`form-field ${className}`}>
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      <input
        className="form-input"
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export function PasswordInput({ label, id, placeholder = '••••••••••••', required, forgotLink }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="form-field">
      <div className="label-row">
        {label && <label htmlFor={id} className="form-label">{label}</label>}
        {forgotLink && <a href="#" className="forgot-link">{forgotLink}</a>}
      </div>
      <div className="input-wrapper">
        <input
          className="form-input"
          id={id}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          required={required}
        />
        <button
          type="button"
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
          aria-label="Toggle password visibility"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
            {showPassword ? 'visibility_off' : 'visibility'}
          </span>
        </button>
      </div>
    </div>
  )
}

export function FormSelect({ label, id, options, className = '' }) {
  return (
    <div className={`form-field ${className}`}>
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      <select className="form-select" id={id}>
        {options.map((opt, i) => (
          <option key={i} value={opt.value || opt} selected={opt.selected}>
            {opt.label || opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export function OtpInput({ count = 6 }) {
  const handleInput = (e, index) => {
    if (e.target.value.length === 1) {
      const next = e.target.nextElementSibling
      if (next) next.focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value) {
      const prev = e.target.previousElementSibling
      if (prev) prev.focus()
    }
  }

  return (
    <div className="otp-container">
      <span className="otp-label">Verify Identity</span>
      <div className="otp-inputs">
        {Array.from({ length: count }).map((_, i) => (
          <input
            key={i}
            className="otp-box"
            maxLength={1}
            type="text"
            onInput={(e) => handleInput(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          />
        ))}
      </div>
    </div>
  )
}
