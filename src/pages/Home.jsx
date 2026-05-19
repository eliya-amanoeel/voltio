import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-center">
            <h1>Professionella Eltjänster i <span>Södertälje &amp; Stockholm</span></h1>
            <p>Välkommen till Voltio EL AB – din trygga och erfarna elektriker. Med över 15 års erfarenhet erbjuder vi professionella elinstallationer och moderna tekniska lösningar för både privatpersoner och företag.</p>
            <div className="hero-cta">
              <a href="tel:0739133613" className="btn btn-blue">Ring oss nu — 073-913 36 13</a>
              <Link to="/kontakt" className="btn btn-outline">Begär offert</Link>
            </div>
            <div className="hero-icons">
              <div className="hero-icon-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <p>Certifierade Elektriker</p>
              </div>
              <div className="hero-icon-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <p>15+ Års Erfarenhet</p>
              </div>
              <div className="hero-icon-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <p>Kvalitet &amp; Säkerhet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section-white">
        <div className="container">
          <div className="section-center">
            <h2>Våra Eltjänster</h2>
            <p>Vi erbjuder ett komplett utbud av professionella eltjänster för hem och företag i Södertälje och Stockholm.</p>
          </div>
          <div className="services-grid">
            <Link to="/tjanster" className="service-tile">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
              </svg>
              <span>Akut El Jour</span>
            </Link>
            <Link to="/tjanster" className="service-tile">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9z"/>
              </svg>
              <span>Nyinstallation</span>
            </Link>
            <Link to="/tjanster" className="service-tile">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              <span>Felsökning och Reparation</span>
            </Link>
            <Link to="/tjanster" className="service-tile">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4Z"/>
              </svg>
              <span>Renovering av Elsystem</span>
            </Link>
            <Link to="/tjanster" className="service-tile">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>
              </svg>
              <span>Belysningsinstallation</span>
            </Link>
            <Link to="/tjanster" className="service-tile">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>
              </svg>
              <span>Elcentral &amp; Säkringsbyten</span>
            </Link>
            <Link to="/tjanster" className="service-tile">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Smart Hem</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT TEASER ═══ */}
      <section className="section-white" style={{ borderTop: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Vi på <span>Voltio EL AB</span></h2>
              <p>Med över 15 års erfarenhet och ett team av certifierade elektriker tar vi oss an allt från akuta eljobb till större installationsprojekt – alltid med fokus på kvalitet, säkerhet och kundnöjdhet.</p>
              <Link to="/om-oss" className="btn btn-blue" style={{ display: 'inline-block', marginTop: '1rem' }}>Läs mer om oss</Link>
            </div>
            <div>
              <div className="about-img-wrap">
                <div style={{ width: '100%', aspectRatio: '4/3', background: 'var(--gray-100)', borderRadius: 'var(--radius)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '.75rem', color: 'var(--gray-400)', border: '2px dashed var(--gray-200)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                  <span style={{ fontSize: '.875rem' }}>Bild kommer snart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
