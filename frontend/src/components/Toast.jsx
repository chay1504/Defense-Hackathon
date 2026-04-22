import { useState, useEffect, createContext, useContext } from 'react'

const ToastContext = createContext()

export function useToast() {
  return useContext(ToastContext)
}

export function ToastProvider({ children }) {
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)

  const showToast = (msg) => {
    setMessage(msg)
    setVisible(true)
  }

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setVisible(false), 3000)
      return () => clearTimeout(t)
    }
  }, [visible])

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div style={{
        position: 'fixed', bottom: '2rem', right: '2rem',
        padding: '1rem 1.5rem', borderRadius: '0.5rem',
        background: 'var(--inverse-surface)', color: 'var(--inverse-on-surface)',
        fontSize: '0.875rem', fontWeight: 500,
        boxShadow: 'var(--shadow-lg)', zIndex: 9999,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(1rem)',
        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        pointerEvents: visible ? 'auto' : 'none',
      }}>
        {message}
      </div>
    </ToastContext.Provider>
  )
}

export default function Toast() {
  return null // Toast is rendered by ToastProvider
}
