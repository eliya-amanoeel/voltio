import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <NavLink to="/" className="nav-logo" onClick={close}>
            <img src="/LOGO.png" alt="Voltio EL AB" onError={e => { e.target.style.display = 'none' }} />
          </NavLink>
          <nav className="nav-links">
            <NavLink to="/" end>Hem</NavLink>
            <NavLink to="/tjanster">Tjänster</NavLink>
            <NavLink to="/om-oss">Om oss</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </nav>
          <a href="tel:0739133613" className="btn btn-amber nav-cta">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Ring jouren
          </a>
          <button
            className="nav-toggle"
            aria-label="Öppna meny"
            onClick={() => setOpen(o => !o)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>
        <nav className={`mobile-menu${open ? ' open' : ''}`}>
          <NavLink to="/" end onClick={close}>Hem</NavLink>
          <NavLink to="/tjanster" onClick={close}>Tjänster</NavLink>
          <NavLink to="/om-oss" onClick={close}>Om oss</NavLink>
          <NavLink to="/kontakt" onClick={close}>Kontakt</NavLink>
          <a href="tel:0739133613" className="btn btn-amber btn-full mobile-cta" style={{gap: '.5rem', marginTop: '.5rem'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Ring jouren — 073-913 36 13
          </a>
        </nav>
      </div>
    </header>
  )
}
