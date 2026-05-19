const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
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
    features: ['24/7 tillgänglighet', 'Snabb responstid', 'Säker felsökning', 'Akutåtgärder'],
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
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>
      </svg>
    ),
    title: 'Elcentral & Säkringsbyten',
    desc: 'Installation och uppdatering av elcentraler och säkringssystem.',
    features: ['Moderna elcentraler', 'Jordfelsbrytare', 'Kapacitetsökning', 'Besiktning'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Smart Hem',
    desc: 'Installation av smarta hemlösningar för komfort och energibesparing.',
    features: ['Smart belysning', 'Hemautomation', 'App-kontroll', 'Energiövervakning'],
  },
]

export default function Tjanster() {
  return (
    <>
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
              <div className="service-card" key={s.title}>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
