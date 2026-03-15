import { useState, useEffect, useRef } from 'react'
import {
  ArrowRight, RefreshCw, Building2, TrendingUp,
  Users, Award, Heart, EyeOff, Zap, Phone,
  Wrench, Menu, X, Mail, MapPin, Lock,
} from 'lucide-react'

/* ─── Scroll-reveal hook ─────────────────────────────────────────────── */
function useFadeUp(threshold = 0.12) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

/* ─── Navbar ─────────────────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const close = () => setOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-brand">
          <img src="/logo.png" alt="Reivax Partners" className="nav-logo-img" />
          <span className="nav-wordmark">Reivax Partners</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about"  className="nav-link">About</a></li>
          <li><a href="#focus"  className="nav-link">Our Focus</a></li>
          <li><a href="#owners" className="nav-link">Process</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Contact</a>
        <button className="mobile-toggle" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu open">
          <a href="#about"   className="nav-link" onClick={close}>About</a>
          <a href="#focus"   className="nav-link" onClick={close}>Our Focus</a>
          <a href="#owners"  className="nav-link" onClick={close}>Process</a>
          <a href="#contact" className="btn-primary" onClick={close}
             style={{ marginTop: '.5rem', justifyContent: 'center' }}>Contact</a>
        </div>
      )}
    </nav>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────────── */
function Hero() {
  const headRef        = useFadeUp(0.05)
  const ctaRef         = useFadeUp(0.05)
  const statsRef       = useFadeUp(0.05)
  const testimonialRef = useFadeUp(0.05)

  return (
    <section className="hero">
      <div className="container hero-inner">
        <p className="hero-kicker">St. Louis, Missouri — Founder Friendly</p>

        <h1 ref={headRef} className="hero-heading fade-up">
          Considering an exit?<br />
          <em>You don't have to decide anything yet.</em>
        </h1>

        <p className="hero-sub">
          We have confidential, no-pressure conversations with founders who are
          exploring their options — even years before they're ready to sell.
          No brokers, no NDAs to sign upfront, no commitment. Just a direct
          conversation with the principal.
        </p>

        {/* Single primary CTA */}
        <div ref={ctaRef} className="hero-actions fade-up delay-1">
          <a href="#contact" className="btn-primary">
            Have a confidential conversation <ArrowRight size={15} />
          </a>
          <div className="hero-badge">
            <span className="hero-badge-label">Stewardship, not extraction</span>
            <span className="hero-badge-sub">The anti-private-equity acquirer</span>
          </div>
        </div>

        {/* ICP qualifier bar — self-select signal right below the fold */}
        <div ref={statsRef} className="stats-bar fade-up delay-2">
          <div className="stat-item">
            <span className="stat-value">$300K–700K</span>
            <span className="stat-label">EBITDA sweet spot</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Forever</span>
            <span className="stat-label">Holding horizon</span>
          </div>
          <div className="stat-item">
            <span className="stat-value accent">B2B</span>
            <span className="stat-label">Service focus</span>
          </div>
        </div>

        {/* Social proof testimonial strip */}
        <div ref={testimonialRef} className="hero-testimonial fade-up delay-3">
          <div className="hero-testimonial-inner">
            <svg className="hero-testimonial-quote" width="24" height="20" viewBox="0 0 24 20" fill="none" aria-hidden="true">
              <path d="M0 20V12.727C0 5.697 4.364 1.212 13.09 0l1.274 2.182C10.182 3.03 8 5.455 7.273 9.09H11V20H0Zm13 0V12.727C13 5.697 17.364 1.212 26.09 0l1.274 2.182C23.182 3.03 21 5.455 20.273 9.09H24V20H13Z" fill="currentColor"/>
            </svg>
            <p className="hero-testimonial-text">
              "I wasn't sure I was ready to sell. Xavier never pushed. We talked on and off for almost two years before it felt right — and when it did, everything moved quickly and exactly as he said it would."
            </p>
            <p className="hero-testimonial-attr">— Founder, 22-year commercial HVAC company (Midwest)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── About ──────────────────────────────────────────────────────────── */
function About() {
  const leftRef  = useFadeUp()
  const rightRef = useFadeUp()

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">

          {/* Left col */}
          <div ref={leftRef} className="fade-up">
            <h2 className="about-heading">
              Most of the founders we talk to<br />
              aren't ready to sell yet.
            </h2>
            <div className="about-body">
              <p>
                And that's fine. We have conversations years before a deal ever happens.
                If you're a 50-something owner of a well-run HVAC company, a commercial
                cleaning firm, a staffing agency, or any B2B service business — and
                you're beginning to think about what comes next — this site was written
                for you.
              </p>
              <p>
                Most buyers will cut costs, install a new management team, and sell your
                business in three to five years. Your employees will face uncertainty.
                Your culture will change. Your legacy will be at risk. That is the
                conventional PE playbook — and it is not ours.
              </p>
              <p className="strong">
                We don't need this deal to work. That changes everything.
              </p>
              <p>
                We're led by a practicing physician with established income outside of
                acquisitions. We are not dependent on any single deal closing — which
                means we only move forward when the fit is genuinely right for both
                sides. No pressure. No manufactured urgency.
              </p>
            </div>

            {/* Principal bio placeholder */}
            <div className="principal-card">
              <div className="principal-photo-wrap">
                {/* Photo placeholder — swap src for real headshot */}
                <div className="principal-photo-placeholder" aria-label="Principal photo">
                  <span style={{ fontFamily:'var(--serif)', fontSize:'2rem', color:'var(--stone)', fontWeight:300 }}>X</span>
                </div>
              </div>
              <div className="principal-bio">
                <p className="principal-name">Xavier Robinson</p>
                <p className="principal-title">Founder &amp; Principal, Reivax Partners</p>
                <p className="principal-desc">
                  Practicing physician, systems-thinker, and long-term investor. Based in
                  St. Louis, MO. Committed to operating every acquisition as a permanent
                  steward — not a financial intermediary.
                </p>
              </div>
            </div>
          </div>

          {/* Right col — positioning + pillars */}
          <div ref={rightRef} className="fade-up delay-2">
            <div className="positioning-block">
              <p className="positioning-text">
                "Long-term stewards for GM-led, recurring-revenue service
                businesses built to last."
              </p>
            </div>

            {/* Anonymized deal story */}
            <div className="story-card">
              <p className="story-eyebrow">A recent acquisition</p>
              <p className="story-body">
                Our first acquisition was a 19-year-old commercial facilities company
                in the Midwest. The founder stayed on for five months as a consultant.
                The GM — who had run day-to-day operations for six years — took the
                lead from day one. Not a single employee left in the first year. The
                business grew 14% in the twelve months after close.
              </p>
              <p className="story-note">
                — Revenue and location withheld at seller's request
              </p>
            </div>

            <div className="pillar-stack">
              {[
                {
                  label: 'Who We Buy From',
                  title: 'Founders ready to transition',
                  body: 'Owners who built something real and want to see it continue — not carved up or stripped for parts.',
                },
                {
                  label: 'What We Buy',
                  title: 'Service businesses with staying power',
                  body: 'B2B sticky revenue. Loyal customer bases. Operations led by GMs, not the seller\'s personality.',
                },
                {
                  label: 'How We Operate',
                  title: 'Stewardship, not extraction',
                  body: 'We preserve culture, back management, and build systematically — without the conventional PE playbook.',
                },
              ].map(p => (
                <div key={p.label} className="pillar">
                  <p className="pillar-label">{p.label}</p>
                  <p className="pillar-title">{p.title}</p>
                  <p className="pillar-body">{p.body}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── Focus ──────────────────────────────────────────────────────────── */
const FOCUS_CARDS = [
  { icon: <RefreshCw size={15} />, title: 'Sticky revenue',          body: 'Retainers, contracts, or subscriptions. Clients renew because they rely on you — not because of a promotion.' },
  { icon: <Building2 size={15} />, title: 'B2B, not B2C',            body: 'You\'re an essential operational partner to other businesses. Think facilities, staffing, accounting, HVAC, IT services.' },
  { icon: <TrendingUp size={15} />, title: '$300K–$700K EBITDA',     body: 'Healthy, steady profits. Particular interest in the $400K–$600K range. Not a turnaround — a proven operation.' },
  { icon: <Users size={15} />,     title: 'A real general manager',  body: 'A GM or strong operator running day-to-day. The business doesn\'t depend on your personal relationships.' },
  { icon: <Award size={15} />,     title: '10+ years in business',   body: 'A proven history, durable customer relationships, and a track record that speaks for itself.' },
  { icon: <Heart size={15} />,     title: 'A team you care about',   body: 'People who have stayed because the culture is good. Customers who don\'t churn. That loyalty is what we protect.' },
]

function Focus() {
  const introRef = useFadeUp()
  const gridRef  = useFadeUp(0.08)

  return (
    <section id="focus" className="focus-section">
      <div className="container">
        <div ref={introRef} className="focus-intro fade-up">
          <div>
            <p className="eyebrow">What we look for</p>
            <h2 className="focus-heading">The perfect fit.</h2>
          </div>
          <p className="focus-sub">
            We focus on high-retention B2B service businesses — commercial cleaning,
            HVAC, facilities management, staffing, IT services, environmental services,
            and similar industries where clients rely on your team every month.
          </p>
        </div>

        <div ref={gridRef} className="card-grid fade-up">
          {FOCUS_CARDS.map((c, i) => (
            <div key={c.title} className={`feature-card fade-up delay-${(i % 3) + 1}`} ref={useFadeUp(0.04)}>
              <div className="card-icon">{c.icon}</div>
              <h3 className="card-title">{c.title}</h3>
              <p className="card-body">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Dark strip — NO duplicate CTA button, just the quote to reinforce the message */}
        <div className="focus-cta-strip">
          <p className="focus-cta-quote">
            "If this sounds like your business, we'd love a confidential conversation — whether you're ready to sell today or just beginning to think about it."
          </p>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }}>
            Reach out <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Process ────────────────────────────────────────────────────────── */
const D_CARDS = [
  { icon: <EyeOff size={13} />, title: 'Discreet', body: 'We operate under mutual NDA from the first substantive conversation. Your name and business stay confidential — always.' },
  { icon: <Zap    size={13} />, title: 'Decisive', body: "If we're a fit, you'll know quickly. If not, we'll say so clearly and part as friends." },
  { icon: <Phone  size={13} />, title: 'Direct',   body: 'Plain language. No jargon, no games. You\'re talking to the principal on every call.' },
  { icon: <Wrench size={13} />, title: 'Diligent', body: 'Thorough but efficient diligence that respects your time — and your employees\' privacy.' },
]

function Process() {
  const topRef  = useFadeUp()
  const stepRef = useFadeUp(0.08)
  const dsRef   = useFadeUp(0.08)

  return (
    <section id="owners" className="process-section">
      <div className="container">
        <div ref={topRef} className="fade-up" style={{ marginBottom: '3rem' }}>
          <p className="eyebrow">Our Process</p>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            letterSpacing: '.02em', lineHeight: 1.12, color: 'var(--obsidian)',
          }}>
            Simple, fast, and respectful.
          </h2>
        </div>

        <div ref={stepRef} className="process-steps fade-up">
          {[
            { num: '01', title: 'Chat',  body: 'A 30-minute confidential call. No NDA required upfront, no broker involved, no obligation — just an honest conversation.' },
            { num: '02', title: 'Offer', body: 'A simple, one-page letter of intent. Clear terms, fair value. No surprise conditions buried in footnotes.' },
            { num: '03', title: 'Close', body: 'We target 60 days from LOI to close. More complex situations may take 90. We move at your pace.' },
          ].map(s => (
            <div key={s.num} className="process-step">
              <span className="step-num">{s.num}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-body">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="info-card fade-up" ref={useFadeUp()}>
          <h3 className="info-card-title">A low-stress founder transition</h3>
          <p className="info-card-body">
            Selling your life's work is emotional. We know that. We prioritize a seamless
            transition that honors your existing team and protects the reputation you spent
            decades building. Your GM stays in charge. Most founders transition out over
            3–6 months with a consulting agreement. The business keeps its name, brand,
            and culture.
          </p>
        </div>

        <div ref={dsRef} className="ds-grid fade-up">
          {D_CARDS.map(d => (
            <div key={d.title} className="d-card">
              <div className="d-icon">{d.icon}</div>
              <h4 className="d-title">{d.title}</h4>
              <p className="d-body">{d.body}</p>
            </div>
          ))}
        </div>

        <div className="info-card fade-up" ref={useFadeUp()} style={{ marginBottom: 0 }}>
          <h3 className="info-card-title">After the founder transition</h3>
          <p className="info-card-body">
            Your GM remains in charge of operations. We provide strategic support and
            financial management while staying out of day-to-day execution. The business
            keeps its name, brand, culture, and team. We think in decades — not quarters.
          </p>
        </div>

      </div>
    </section>
  )
}

/* ─── Contact ────────────────────────────────────────────────────────── */
const EBITDA_OPTIONS = [
  { value: '', label: 'Select a range…' },
  { value: 'under-300k', label: 'Under $300K' },
  { value: '300-500k', label: '$300K – $500K' },
  { value: '500-700k', label: '$500K – $700K' },
  { value: 'over-700k', label: 'Over $700K' },
  { value: 'unknown', label: 'Not sure / prefer not to say' },
]
const STAGE_OPTIONS = [
  { value: '', label: 'Select one…' },
  { value: 'just-curious', label: 'Just curious, years out' },
  { value: 'exploring', label: 'Actively exploring options' },
  { value: 'ready', label: 'Ready to move forward' },
]

function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', industry: '',
    ebitda: '', stage: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const formRef = useFadeUp()
  const sideRef = useFadeUp()
  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }))
  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/xbdzaojq', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please email us directly at contact@reivaxpartners.com')
      }
    } catch {
      alert('Something went wrong. Please email us directly at contact@reivaxpartners.com')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-heading">Let's talk.</h2>
        <p className="contact-sub">
          We respond to every inquiry within 24 hours — directly from the principal,
          not a junior analyst. Entirely confidential, no strings attached.
        </p>

        <div className="contact-grid">

          {/* Form */}
          <div ref={formRef} className="fade-up">
            {submitted ? (
              <div className="success-card">
                <h3 className="success-title">Message received.</h3>
                <p className="success-body">
                  You'll hear from Xavier directly within 24 hours. If there's a fit,
                  we'll schedule a 30-minute call. No broker fees, no NDA required
                  upfront, no obligation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input className="form-input" type="text" placeholder="Jane Smith"
                      value={form.name} onChange={set('name')} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" placeholder="jane@company.com"
                      value={form.email} onChange={set('email')} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Company <span>(Optional)</span></label>
                    <input className="form-input" type="text"
                      value={form.company} onChange={set('company')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Industry <span>(Optional)</span></label>
                    <input className="form-input" type="text" placeholder="e.g. HVAC, staffing"
                      value={form.industry} onChange={set('industry')} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Approx. EBITDA range</label>
                    <select className="form-input" value={form.ebitda} onChange={set('ebitda')}
                      style={{ cursor: 'pointer' }}>
                      {EBITDA_OPTIONS.map(o => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Where are you in the process?</label>
                    <select className="form-input" value={form.stage} onChange={set('stage')}
                      style={{ cursor: 'pointer' }}>
                      {STAGE_OPTIONS.map(o => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Message <span>(Optional — tell us anything you'd like us to know)</span>
                  </label>
                  <textarea className="form-textarea"
                    placeholder="Not required — but feel free to share anything that would help us understand your situation."
                    value={form.message} onChange={set('message')} />
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn-primary" disabled={submitting}
                    style={{ opacity: submitting ? .7 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
                    {submitting ? 'Sending…' : <><span>Send message</span> <ArrowRight size={14} /></>}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div ref={sideRef} className="fade-up delay-2">
            <h3 className="why-heading">Why reach out?</h3>
            <ul className="why-list">
              {[
                {
                  icon: <Lock size={12} />,
                  title: 'Guaranteed confidentiality',
                  body: 'We operate under mutual NDA from the first substantive conversation. Your employees and competitors will never know we spoke — that\'s a mechanism, not just a promise.',
                },
                {
                  icon: <Zap size={12} />,
                  title: 'A clear answer, quickly',
                  body: "We don't waste your time. You'll receive a direct yes or no within 24–48 hours of your first call.",
                },
                {
                  icon: <Phone size={12} />,
                  title: 'You\'re talking to the principal',
                  body: 'No brokers, no junior analysts. Every conversation is with the person who makes the decision.',
                },
              ].map(item => (
                <li key={item.title} className="why-item">
                  <div className="why-dot">{item.icon}</div>
                  <div>
                    <p className="why-item-title">{item.title}</p>
                    <p className="why-item-body">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="what-happens-next">
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>What happens next</p>
              {[
                'You submit this form.',
                'Xavier responds within 24 hours.',
                'If there\'s a potential fit, we schedule a 30-minute call.',
                'No NDA required upfront. No broker fees. No obligation.',
              ].map((step, i) => (
                <div key={i} className="next-step">
                  <span className="next-step-num">{i + 1}</span>
                  <span className="next-step-text">{step}</span>
                </div>
              ))}
            </div>

            <div className="contact-meta">
              <div className="contact-meta-group">
                <span className="contact-meta-label">Email</span>
                <a href="mailto:contact@reivaxpartners.com" className="contact-meta-value">
                  <Mail size={14} /> contact@reivaxpartners.com
                </a>
              </div>
              <div className="contact-meta-group">
                <span className="contact-meta-label">Headquarters</span>
                <span className="contact-meta-value">
                  <MapPin size={14} /> St. Louis, MO
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">
            <img src="/logo.png" alt="Reivax Partners" className="footer-logo-img" />
            <span className="footer-wordmark">Reivax Partners</span>
          </div>
          <p className="footer-tagline">
            Building a permanent home for world-class service businesses.
          </p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li><a href="#about"   className="footer-link">About</a></li>
            <li><a href="#focus"   className="footer-link">Focus</a></li>
            <li><a href="#owners"  className="footer-link">Process</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
          <p className="footer-copy">© 2026 Reivax Partners LLC. St. Louis, MO.</p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── App ────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Focus />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
