import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import {
  ArrowRight, RefreshCw, Building2, TrendingUp,
  Users, Award, Heart, EyeOff, Zap, Phone,
  Wrench, Menu, X, Mail, MapPin, Lock,
} from 'lucide-react'

/* ─── Hero spotlight (adapted from Aceternity UI / motion) ──────────── */
const SPOT_GREEN_1 = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(125,42%,52%,.16) 0, hsla(125,42%,32%,.05) 50%, hsla(125,42%,22%,0) 80%)"
const SPOT_GREEN_2 = "radial-gradient(50% 50% at 50% 50%, hsla(125,42%,52%,.11) 0, hsla(125,42%,32%,.04) 80%, transparent 100%)"
const SPOT_GREEN_3 = "radial-gradient(50% 50% at 50% 50%, hsla(125,42%,52%,.07) 0, hsla(125,42%,32%,.02) 80%, transparent 100%)"
const SPOT_W = 560, SPOT_H = 1380, SPOT_SW = 240, SPOT_TY = -350

function SpotlightBeam({ side = 'left', duration = 7, xOffset = 100 }) {
  const dir = side === 'left' ? -1 : 1
  const rot  = dir * -45
  return (
    <motion.div
      animate={{ x: [0, dir * xOffset, 0] }}
      transition={{ duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      style={{ position:'absolute', top:0, [side]:0, width:'100vw', height:'100vh', zIndex:2, pointerEvents:'none' }}
    >
      <div style={{ position:'absolute', top:0, [side]:0, width:`${SPOT_W}px`, height:`${SPOT_H}px`, background:SPOT_GREEN_1, transform:`translateY(${SPOT_TY}px) rotate(${rot}deg)` }} />
      <div style={{ position:'absolute', top:0, [side]:0, width:`${SPOT_SW}px`, height:`${SPOT_H}px`, background:SPOT_GREEN_2, transformOrigin:`top ${side}`, transform:`rotate(${rot}deg) translate(${side==='left'?'5%':'-5%'}, -50%)` }} />
      <div style={{ position:'absolute', top:0, [side]:0, width:`${SPOT_SW}px`, height:`${SPOT_H}px`, background:SPOT_GREEN_3, transformOrigin:`top ${side}`, transform:`rotate(${rot}deg) translate(${side==='left'?'-180%':'180%'}, -70%)` }} />
    </motion.div>
  )
}

function HeroSpotlight() {
  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.5 }}
      style={{ pointerEvents:'none', position:'absolute', inset:0, height:'100%', width:'100%' }}>
      <SpotlightBeam side="left"  />
      <SpotlightBeam side="right" />
    </motion.div>
  )
}

function HeroGrid() {
  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1 }}
      style={{
        position:'absolute', inset:0, zIndex:0,
        backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.035)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    />
  )
}

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
  const headRef  = useFadeUp(0.05)
  const ctaRef   = useFadeUp(0.05)
  const statsRef = useFadeUp(0.05)

  return (
    <section className="hero hero--dark">
      <HeroGrid />
      <HeroSpotlight />

      <div className="container hero-inner" style={{ position:'relative', zIndex:10 }}>
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

        {/* ICP qualifier bar */}
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

            {/* Honest early-stage positioning */}
            <div className="story-card">
              <p className="story-eyebrow">Where we are</p>
              <p className="story-body">
                We're actively looking for our first acquisition — and deliberately so.
                We haven't rushed into a deal because we're patient enough to wait for
                the right one. That means your business won't be one of forty in a
                portfolio. You'll be the priority, the relationship, and the proof of
                concept we've spent years preparing for.
              </p>
              <p className="story-note">
                — We'd rather get one right than close many quickly
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
