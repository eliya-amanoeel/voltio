import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
)

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
      </svg>
    ),
    title: 'Akut El Jour',
    desc: 'Vi finns tillgängliga dygnet runt för akuta elfel och nödsituationer.',
    urgent: true,
    features: ['24/7 tillgänglighet', 'Snabb responstid', 'Säker felsökning', 'Akutåtgärder'],
    details: 'Elolyckor och strömavbrott inträffar oftast vid sämsta möjliga tidpunkt. Vår akutjour är aktiv dygnet runt, alla dagar om året — inklusive helger och röda dagar. Våra auktoriserade elektriker når dig snabbt och åtgärdar felet säkert, oavsett om det gäller kortslutning, trasigt elskåp eller totalt strömavbrott. Vi prioriterar alltid säkerheten och arbetar metodiskt tills problemet är helt löst.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9z"/>
      </svg>
    ),
    title: 'Nyinstallation',
    desc: 'Kompletta elinstallationer för nybyggnation, tillbyggnader och renoveringar.',
    features: ['Projektering och planering', 'Kompletta elsystem', 'Slutbesiktning', 'Kvalitetsgaranti'],
    details: 'Oavsett om du bygger nytt, bygger till eller renoverar hjälper vi dig från start till mål. Vi projekterar och installerar kompletta elsystem som uppfyller alla gällande normer och standarder. Vi samarbetar tätt med bygg- och hantverkslag för att hålla tidplanen, och avslutar varje projekt med en noggrann slutbesiktning som säkerställer att allt fungerar korrekt och säkert.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Felsökning och Reparation',
    desc: 'Experthjälp med att hitta och åtgärda elfel i befintliga system.',
    features: ['Systematisk felsökning', 'Moderna mätinstrument', 'Snabb reparation', 'Dokumentation'],
    details: 'Mystiska elfel kan vara svåra att lokalisera utan rätt kompetens och utrustning. Vi använder moderna mätinstrument och en systematisk metodik för att hitta rotorsaken — inte bara symptomen. Det kan handla om trasiga kablar, lösa anslutningar eller överlastade kretsar. När felet är identifierat åtgärdar vi det korrekt och dokumenterar allt som gjorts för din trygghet.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4Z"/>
      </svg>
    ),
    title: 'Renovering av Elsystem',
    desc: 'Modernisering av äldre elsystem för ökad säkerhet och funktionalitet.',
    features: ['Systembedömning', 'Uppdatering av uttag', 'Jordfelsbrytare', 'Ökad kapacitet'],
    details: 'Äldre fastigheter har ofta elsystem som inte uppfyller dagens krav på säkerhet och kapacitet. Vi bedömer ditt befintliga system och rekommenderar kostnadseffektiva uppgraderingar — från att installera jordfelsbrytare och byta uttag till att öka kapaciteten för moderna elbehov som laddstolpar och värmepumpar. Resultatet är ett säkrare hem och lägre risk för el-relaterade problem.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>
      </svg>
    ),
    title: 'Belysningsinstallation',
    desc: 'Professionell installation av inomhus- och utomhusbelysning.',
    features: ['LED-belysning', 'Smart styrning', 'Utomhusbelysning', 'Dimmer & ljusdesign'],
    details: 'Rätt belysning förvandlar ett rum. Vi installerar allt från infällda spotlights och takbelysning till utomhusbelysning och dekorativt ljus. Vi är specialister på LED-lösningar som ger bättre ljuskvalitet och sparar upp till 80\u00a0% energi jämfört med traditionella glödlampor. Vi installerar även dimmrar, rörelsesensorer och smarta ljussystem som kan styras via app eller röst.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>
      </svg>
    ),
    title: 'Elcentral & S\u00e4kringsbyten',
    desc: 'Installation och uppdatering av elcentraler och s\u00e4kringssystem.',
    features: ['Moderna elcentraler', 'Jordfelsbrytare', 'Kapacitets\u00f6kning', 'Besiktning'],
    details: 'Elcentralen \u00e4r hj\u00e4rtat i fastighetens elsystem \u2014 en f\u00f6r\u00e5ldrad central kan orsaka elavbrott, \u00f6verhettning och i v\u00e4rsta fall brand. Vi installerar moderna centraler med automats\u00e4kringar och jordfelsbrytare f\u00f6r b\u00e4ttre skydd och enklare hantering. Vi kan \u00e4ven uppgradera din befintliga central f\u00f6r att ge plats \u00e5t fler kretsar och \u00f6kad kapacitet.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Smart Hem',
    desc: 'Installation av smarta heml\u00f6sningar f\u00f6r komfort och energibesparing.',
    features: ['Smart belysning', 'Hemautomation', 'App-kontroll', 'Energi\u00f6vervakning'],
    details: 'G\u00f6r ditt hem intelligent. Vi installerar och konfigurerar smarta hemsystem f\u00f6r belysning, uttag och energi\u00f6vervakning \u2014 styrda via smartphone eller r\u00f6stassistent. Med automatiseringar som t\u00e4nder lamporna n\u00e4r du kommer hem eller st\u00e4nger av allt n\u00e4r du g\u00e5r sparar du energi och \u00f6kar komforten. Vi hj\u00e4lper dig \u00e4ven med konfiguration och best\u00e4mmer ihop vilket system som passar just dig.',
  },
]

export default function Tjanster() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <>
      <Helmet>
        <title>Eltjänster — Voltio EL AB</title>
        <meta name="description" content="Professionella eltjänster för privatpersoner och företag. Akut el jour 24/7, nyinstallation, felsökning, belysning och smart hem i Södertälje och Stockholm." />
        <link rel="canonical" href="https://voltioel.se/tjanster" />
        <meta property="og:title" content="Eltjänster — Voltio EL AB" />
        <meta property="og:url" content="https://voltioel.se/tjanster" />
      </Helmet>
      {/* ═══ PAGE HEADER ═══ */}
      <div className="page-header">
        <div className="container">
          <h1>Våra <span>Eltjänster</span></h1>
          <p>Ett komplett utbud av professionella eltjänster för privatpersoner och företag i Södertälje och Stockholm.</p>
        </div>
      </div>

      {/* ═══ SERVICE CARDS ═══ */}
      <section className="section-white">
        <div className="container">
          <div className="service-cards-grid">
            {services.map(s => (
              <div className={`service-card${s.urgent ? ' service-card--urgent' : ''}`} key={s.title}>
                <div className="service-card-head">
                  {s.icon}
                  <h3>{s.title}</h3>
                </div>
                <p className="service-card-desc">{s.desc}</p>
                <div className="service-features">
                  {s.features.map(f => (
                    <div className="service-feature" key={f}>
                      <Check />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <button className="service-read-more" onClick={() => setSelected(s)}>
                  <span>Läs mer</span>
                  <ArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MODAL ═══ */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Stäng">
              <CloseIcon />
            </button>
            <div className="modal-head">
              {selected.icon}
              <h2>{selected.title}</h2>
            </div>
            <p className="modal-desc">{selected.desc}</p>
            <div className="service-features" style={{ marginBottom: '1.25rem' }}>
              {selected.features.map(f => (
                <div className="service-feature" key={f}>
                  <Check />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <p className="modal-details">{selected.details}</p>
          </div>
        </div>
      )}
    </>
  )
}
