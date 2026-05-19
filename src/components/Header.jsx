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
        </nav>
      </div>
    </header>
  )
}
