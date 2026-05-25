import { Helmet } from 'react-helmet-async'

export default function OmOss() {
  return (
    <>
      <Helmet>
        <title>Om oss — Voltio EL AB</title>
        <meta name="description" content="Läs mer om Voltio EL AB. Auktoriserade elektriker med över 10 års erfarenhet i Södertälje och Stockholm." />
        <link rel="canonical" href="https://voltioel.se/om-oss" />
        <meta property="og:title" content="Om oss — Voltio EL AB" />
        <meta property="og:url" content="https://voltioel.se/om-oss" />
      </Helmet>
      {/* ═══ PAGE HEADER ═══ */}
      <div className="page-header">
        <div className="container">
          <h1>Om <span>Voltio EL AB</span></h1>
          <p>Din trygga och erfarna elektriker i Södertälje och Stockholm</p>
        </div>
      </div>

      {/* ═══ ABOUT SECTION ═══ */}
      <section className="section-white">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Välkommen till Voltio EL AB</h2>
              <p>Välkommen till Voltio EL AB – din trygga och erfarna elektriker i Södertälje och Stockholm. Med över 10 års erfarenhet erbjuder vi professionella elinstallationer och moderna tekniska lösningar för både privatpersoner och företag.</p>
              <p>Vi är specialiserade inom belysning, installation av elbilsladdare samt kompletta elsystem för hem och verksamheter. Vårt arbete präglas alltid av kvalitet, säkerhet och noggrannhet, där varje projekt utförs enligt de senaste branschstandarderna.</p>
              <p>Hos oss får du pålitlig service, hög kompetens och lösningar anpassade efter dina behov. Vi strävar alltid efter att leverera hållbara och effektiva resultat med fokus på kundnöjdhet och professionalism.</p>
              <div className="stats-grid">
                <div className="stat-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <div className="stat-num">2</div>
                  <div className="stat-label">Certifierade Elektriker</div>
                </div>
                <div className="stat-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                  <div className="stat-num">10+</div>
                  <div className="stat-label">Års Erfarenhet</div>
                </div>
              </div>
            </div>
            <div>
              <div className="about-img-wrap">
                <picture>
                  <source srcSet="/images/home.webp" type="image/webp" />
                  <img src="/images/home.jpg" alt="Voltio EL AB elektriker i arbete" width="1200" height="808" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 'var(--radius)' }} loading="lazy" decoding="async" />
                </picture>
              </div>
            </div>
          </div>

          {/* Why section */}
          <div className="why-section">
            <h2>Varför välja Voltio EL AB?</h2>
            <div className="why-cards">
              <div className="why-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <h3>Certifierade &amp; Försäkrade</h3>
                <p>Alla våra elektriker är fullt certifierade och företaget är försäkrat. Du kan känna dig trygg med våra tjänster.</p>
              </div>
              <div className="why-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
                <h3>Över 10 Års Erfarenhet</h3>
                <p>Med lång erfarenhet inom elbranschen kan vi hantera alla typer av elprojekt med professionalism och expertis.</p>
              </div>
              <div className="why-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>Kvalitetsgaranti</h3>
                <p>Vi står bakom vårt arbete med garantier på både material och utförande. Din nöjdhet är vår prioritet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
