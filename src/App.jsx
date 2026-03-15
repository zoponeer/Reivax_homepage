import { useState, useEffect, useRef } from 'react'
import {
  ArrowRight, RefreshCw, Building2, TrendingUp,
  Users, Award, Heart, EyeOff, Zap, Phone,
  Wrench, Menu, X, Mail, MapPin,
} from 'lucide-react'

/* ─── Scroll-reveal hook ───────────────────────────────────────────── */
function useFadeUp(threshold = 0.15) {
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

/* ─── Navbar ───────────────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo">Reivax Partners</a>

        <ul className="nav-links">
          <li><a href="#about"  className="nav-link">About</a></li>
          <li><a href="#focus"  className="nav-link">Our Focus</a></li>
          <li><a href="#owners" className="nav-link">Process</a></li>
        </ul>

        <a href="#contact" className="nav-cta">Contact</a>

        <button className="mobile-toggle" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu open">
          <a href="#about"   className="nav-link" onClick={close}>About</a>
          <a href="#focus"   className="nav-link" onClick={close}>Our Focus</a>
          <a href="#owners"  className="nav-link" onClick={close}>Process</a>
          <a href="#contact" className="nav-cta"  onClick={close} style={{ textAlign: 'center', marginTop: '.25rem' }}>Contact</a>
        </div>
      )}
    </nav>
  )
}

/* ─── Hero ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-heading">
          A long-term home<br />for your life's work.
        </h1>
        <p className="hero-sub">
          We buy established service businesses, pay a fair price, and hold them
          forever. No corporate playbooks, no nonsense, no aggressive flips.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Tell us about your business <ArrowRight size={17} />
          </a>
          <div className="hero-badge">
            <span className="hero-badge-label">The Anti-Private Equity</span>
            <span className="hero-badge-sub">St. Louis Based • Founder Friendly</span>
          </div>
        </div>
        <div className="hero-divider" />
      </div>
    </section>
  )
}

/* ─── About ────────────────────────────────────────────────────────── */
function About() {
  const leftRef  = useFadeUp()
  const rightRef = useFadeUp()

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div ref={leftRef} className="fade-up">
            <h2 className="about-heading">
              We buy great businesses<br />and keep them great.
            </h2>
            <div className="about-body">
              <p>Most buyers look at a business like a spreadsheet. They want to cut costs, squeeze margins, and flip it in three years.</p>
              <p className="strong">We aren't those people.</p>
              <p>Reivax Partners was built for founders who care about their employees and their reputation. We buy one business at a time and operate it with a focus on decades, not quarters.</p>
              <p>Led by a practicing physician and systems-thinker, we bring the same analytical rigor and long-term care to business that we do to patient protocols.</p>
            </div>
          </div>

          <div ref={rightRef} className="fade-up delay-2">
            <div className="quote-card">
              <p className="quote-text">
                "Our promise is simple: We will treat your business like it's our own."
              </p>
              <p className="quote-author">— Reivax Mission</p>
            </div>

            <h3 className="longterm-heading">Built for the Long Term</h3>
            <div className="longterm-body">
              <p>Most sellers worry about the same things: Will a buyer over-optimize and break what works? Will they over-leverage the business to make the numbers work? Will they actually hold it—or flip it despite promises?</p>
              <p>Our background answers those questions. We're led by a practicing physician—not as a credential to wave around, but because it explains how we operate. We have established income, so we're not dependent on any single deal. We're trained to be conservative and systematic. We think in decades, not quarters.</p>
              <p>We approach acquisitions the same way we approach patient care: preserve what works, make changes carefully based on evidence, and prioritize long-term outcomes over short-term metrics.</p>
              <p className="bold">No experiments. No stripping. Just steady, sustainable growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Focus ────────────────────────────────────────────────────────── */
const FOCUS_CARDS = [
  { icon: <RefreshCw size={16} />, title: 'Recurring revenue',       body: 'Most of your revenue comes from retainers, contracts, or subscriptions.' },
  { icon: <Building2 size={16} />, title: 'B2B, not B2C',            body: "You're an essential partner to other businesses, not a consumer brand." },
  { icon: <TrendingUp size={16} />, title: 'Healthy, steady profits', body: '$300K–$700K in EBITDA, with particular interest in the $400K–$600K range.' },
  { icon: <Users size={16} />,     title: 'A real management bench', body: 'A general manager or strong number two already running the day-to-day.' },
  { icon: <Award size={16} />,     title: 'Established track record', body: 'Typically 10+ years in business with a proven history.' },
  { icon: <Heart size={16} />,     title: 'A team you care about',   body: 'People who have been with you for years, and customers who stick around.' },
]

function Focus() {
  const gridRef = useFadeUp(0.1)
  const ctaRef  = useFadeUp()

  return (
    <section id="focus" className="focus-section">
      <div className="container">
        <div className="focus-intro fade-up" ref={useFadeUp()}>
          <span className="section-label">What we look for</span>
          <h2 className="section-heading focus-heading">The perfect fit.</h2>
          <p className="section-sub">
            We focus on high-retention B2B service industries where clients rely on your team every month.
          </p>
        </div>

        <div ref={gridRef} className="card-grid fade-up">
          {FOCUS_CARDS.map((c, i) => (
            <div key={c.title} className={`feature-card fade-up delay-${i % 3 + 1}`} ref={useFadeUp(0.05)}>
              <div className="card-icon">{c.icon}</div>
              <h3 className="card-title">{c.title}</h3>
              <p className="card-body">{c.body}</p>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="focus-cta-box fade-up">
          <p className="focus-cta-quote">
            "If this sounds like your company, we'd love to talk."
          </p>
          <a href="#contact" className="btn-primary">
            Start a confidential conversation <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Process ──────────────────────────────────────────────────────── */
const D_CARDS = [
  { icon: <EyeOff size={14} />, title: 'Discreet', body: 'We keep conversations confidential and never shop your business.' },
  { icon: <Zap    size={14} />, title: 'Decisive', body: "If we're a fit, you'll know quickly; if not, we'll tell you clearly." },
  { icon: <Phone  size={14} />, title: 'Direct',   body: 'Plain-spoken communication, no jargon or games.' },
  { icon: <Wrench size={14} />, title: 'Diligent', body: 'Thorough, but efficient diligence that respects your time.' },
]

function Process() {
  const stepsRef = useFadeUp(0.1)
  const dsRef    = useFadeUp(0.1)

  return (
    <section id="owners" className="process-section">
      <div className="container">
        <div className="fade-up" ref={useFadeUp()}>
          <span className="section-label">Our Process</span>
          <h2 className="section-heading" style={{ marginBottom: '3rem' }}>Simple, fast, and respectful.</h2>
        </div>

        <div ref={stepsRef} className="process-steps fade-up">
          {[
            { num: '01', title: 'Chat',  body: "A 30-minute confidential call to see if there's a fit." },
            { num: '02', title: 'Offer', body: 'A simple, one-page offer with clear terms and fair value.' },
            { num: '03', title: 'Close', body: 'We target 60 days from LOI to close, though complex situations may take 90 days.' },
          ].map(s => (
            <div key={s.num} className="process-step">
              <span className="step-num">{s.num}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-body">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="handoff-card fade-up" ref={useFadeUp()}>
          <h3 className="handoff-title">A low-stress handoff</h3>
          <p className="handoff-body">
            Selling your life's work is emotional. We get that. We prioritize a seamless
            transition that honors your existing team and protects the reputation you spent
            decades building.
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

        <div className="handoff-card fade-up" ref={useFadeUp()} style={{ marginBottom: 0 }}>
          <h3 className="handoff-title">After closing</h3>
          <p className="handoff-body">
            Your GM stays in charge of operations. We provide strategic support and financial
            management while staying out of day-to-day execution. Most sellers transition out
            over 3–6 months with consulting agreements. The business keeps its name, brand, and culture.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact ──────────────────────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', industry: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const formRef = useFadeUp()
  const sideRef = useFadeUp()

  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-heading">Let's talk.</h2>
        <p className="contact-sub">
          We respond to every inquiry within 24 hours. Entirely confidential, no strings attached.
        </p>

        <div className="contact-grid">
          {/* Form */}
          <div ref={formRef} className="fade-up">
            {submitted ? (
              <div className="success-card">
                <h3 className="success-title">Message sent.</h3>
                <p className="success-body">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
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

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Company Name <span>(Optional)</span></label>
                    <input className="form-input" type="text" placeholder=""
                      value={form.company} onChange={set('company')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Industry</label>
                    <input className="form-input" type="text" placeholder=""
                      value={form.industry} onChange={set('industry')} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" placeholder="Tell us briefly about your business and goals..."
                    value={form.message} onChange={set('message')} />
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn-primary">
                    Send Message <ArrowRight size={16} />
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
                { icon: <EyeOff size={13} />, title: 'Total Privacy',   body: 'Your employees and competitors will never know we spoke.' },
                { icon: <Zap    size={13} />, title: 'Speed',           body: "We don't waste time. You'll get a 'yes' or 'no' quickly." },
                { icon: <Phone  size={13} />, title: 'Direct Access',   body: "You're talking to the principal, not a broker or junior analyst." },
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

            <div className="contact-meta">
              <div className="contact-meta-group">
                <span className="contact-meta-label">Email</span>
                <a href="mailto:contact@reivaxpartners.com" className="contact-meta-value">
                  <Mail size={15} /> contact@reivaxpartners.com
                </a>
              </div>
              <div className="contact-meta-group">
                <span className="contact-meta-label">Headquarters</span>
                <span className="contact-meta-value">
                  <MapPin size={15} /> St. Louis, MO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ───────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-logo">Reivax Partners</p>
          <p className="footer-tagline">Building a forever home for world-class service businesses.</p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li><a href="#about"   className="footer-link">About</a></li>
            <li><a href="#focus"   className="footer-link">Focus</a></li>
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

/* ─── App ──────────────────────────────────────────────────────────── */
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
