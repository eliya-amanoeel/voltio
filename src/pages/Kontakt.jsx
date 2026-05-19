import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'

const schema = z.object({
  firstName: z.string().min(1, 'Ange förnamn'),
  lastName:  z.string().min(1, 'Ange efternamn'),
  email:     z.string().min(1, 'Ange e-postadress').email('Ogiltig e-postadress'),
  phone: z.string().optional().refine(v => {
    if (!v?.trim()) return true
    const digits = v.replace(/[\s\-()+]/g, '')
    return /^\d{7,15}$/.test(digits)
  }, 'Ogiltigt telefonnummer (7–15 siffror)'),
  message: z.string().min(1, 'Skriv ett meddelande'),
})

export default function Kontakt() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema), mode: 'onBlur' })

  async function onSubmit(data) {
    try {
      const res = await fetch('/send.ashx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: new URLSearchParams(data),
      })
      const json = await res.json()
      if (json.ok) {
        toast.success('Tack! Ditt meddelande har skickats. Vi återkommer så snart som möjligt.')
        reset()
      } else {
        toast.error('Något gick fel. Försök igen eller kontakta oss direkt på info@voltioel.se')
      }
    } catch {
      toast.error('Något gick fel. Försök igen eller kontakta oss direkt på info@voltioel.se')
    }
  }

  function Err({ name }) {
    const msg = errors[name]?.message
    return msg ? <span className="field-error" role="alert">{msg}</span> : null
  }

  return (
    <>
      {/* ═══ PAGE HEADER ═══ */}
      <div className="page-header">
        <div className="container">
          <h1>Kontakta <span>Oss</span></h1>
          <p>Vi finns här för att hjälpa dig med alla dina elbehov.</p>
        </div>
      </div>

      {/* ═══ CONTACT CONTENT ═══ */}
      <section className="section-white">
        <div className="container">

          {/* Info cards */}
          <div className="contact-info-grid">
            <div className="contact-card">
              <div className="contact-card-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Telefon
              </div>
              <a href="tel:0739133613">073-913 36 13</a>
              <p className="sub">Akut El Jour 24/7</p>
            </div>

            <div className="contact-card">
              <div className="contact-card-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                E-post
              </div>
              <a href="mailto:info@voltioel.se">info@voltioel.se</a>
              <p className="sub">Svar inom 24 timmar</p>
            </div>

            <div className="contact-card">
              <div className="contact-card-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                Öppettider
              </div>
              <span className="contact-hours-primary">Mån - Fre: 07:00 - 17:00</span>
              <p className="sub">Lördag: 09:00 - 15:00</p>
              <p className="sub">Söndag: Akut El Jour</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="form-section">
            <h2>Kontaktformulär</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Förnamn</label>
                  <input type="text" id="firstName" placeholder="Ditt förnamn"
                    aria-invalid={errors.firstName ? 'true' : undefined}
                    {...register('firstName')} />
                  <Err name="firstName" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Efternamn</label>
                  <input type="text" id="lastName" placeholder="Ditt efternamn"
                    aria-invalid={errors.lastName ? 'true' : undefined}
                    {...register('lastName')} />
                  <Err name="lastName" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">E-post</label>
                  <input type="email" id="email" placeholder="din@epost.se"
                    aria-invalid={errors.email ? 'true' : undefined}
                    {...register('email')} />
                  <Err name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input type="tel" id="phone" placeholder="Ditt telefonnummer"
                    aria-invalid={errors.phone ? 'true' : undefined}
                    {...register('phone')} />
                  <Err name="phone" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Meddelande</label>
                <textarea id="message" placeholder="Beskriv ditt ärende..."
                  aria-invalid={errors.message ? 'true' : undefined}
                  {...register('message')} />
                <Err name="message" />
              </div>
              <button type="submit" className="btn btn-blue btn-full" disabled={isSubmitting}>
                {isSubmitting ? 'Skickar...' : 'Skicka'}
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}
