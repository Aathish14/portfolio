"use client";

import { useState } from "react";
import SmoothScroll from "@/components/smooth-scroll";
import HeroScene from "@/components/hero-scene";
import {
  heroData,
  projects,
  experience,
  education,
  skills,
  credentials,
  socialLinks,
} from "@/lib/project-data";

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("aathi.shhh@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <SmoothScroll>
      {/* 1. STICKY SYSTEM HEADER */}
      <header className="site-header">
        <div className="container">
          <div className="header-brand">
            <a href="#hero" className="brand-title" aria-label="Aathish Rao A. B. — back to top">
              <span style={{ color: "var(--primary)", fontFamily: "var(--font-mono)", marginRight: "0.4rem" }}>
                //
              </span>
              Aathish Rao A. B.
            </a>
            <div className="brand-tag">
              <span className="pulse-dot"></span>
              <span>AI/ML · BACKEND · CLOUD</span>
            </div>
          </div>

          <nav className="site-nav" aria-label="Main Navigation">
            <a className="nav-link active" href="#work">
              Work
            </a>
            <a className="nav-link" href="#experience">
              Experience
            </a>
            <a className="nav-link" href="#education">
              Education
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
            <a className="nav-link" href="#credentials">
              Achievements
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>

          <div className="header-actions">
            <a className="btn-email-call" href={socialLinks.email}>
              [CALL: EMAIL]
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
          <a className="nav-link" href="#work" onClick={() => setMobileOpen(false)}>
            Work
          </a>
          <a className="nav-link" href="#experience" onClick={() => setMobileOpen(false)}>
            Experience
          </a>
          <a className="nav-link" href="#education" onClick={() => setMobileOpen(false)}>
            Education
          </a>
          <a className="nav-link" href="#skills" onClick={() => setMobileOpen(false)}>
            Skills
          </a>
          <a className="nav-link" href="#credentials" onClick={() => setMobileOpen(false)}>
            Achievements
          </a>
          <a className="nav-link" href="#about" onClick={() => setMobileOpen(false)}>
            About
          </a>
          <a className="nav-link" href="#contact" onClick={() => setMobileOpen(false)}>
            Contact
          </a>
          <a
            className="btn-email-call"
            style={{ display: "inline-flex", marginTop: "0.5rem" }}
            href={socialLinks.email}
          >
            [CALL: {socialLinks.emailDisplay}]
          </a>
        </div>
      </header>

      <main id="main-content">
        {/* 2. HERO SECTION */}
        <section id="hero" className="section">
          <div className="container">
            {/* Top Telemetry & Calibration Status Bar */}
            <div className="telemetry-bar">
              <div className="telemetry-init">
                <span className="pulse-dot"></span>
                <span>SYS_INIT // CALIBRATED_CHASSIS</span>
              </div>
              <div className="telemetry-metrics">
                <span>LOC: 12°58&apos;N 77°35&apos;E</span>
                <span className="badge-regime">REGIME: ADAPTIVE</span>
                <span style={{ color: "var(--outline)" }}>LATENCY: DETERMINISTIC [0.82ms]</span>
              </div>
            </div>

            {/* Hero Grid */}
            <div className="hero-grid">
              {/* Left Editorial Column */}
              <div className="hero-editorial">
                <div className="hero-pill">
                  <span>// AI/ML · BACKEND · CLOUD</span>
                </div>
                <h1 className="hero-title">
                  Reliable systems for a{" "}
                  <span className="hero-title-accent">changing world.</span>
                </h1>
                <p className="hero-intro">
                  I’m <strong>{heroData.name}</strong>, {heroData.intro}
                </p>

                {/* Readout Calibration Bar */}
                <div className="readout-bar">
                  <div className="readout-item">
                    <span className="readout-label">THROUGHPUT</span>
                    <span className="readout-val">1.24k req/s</span>
                  </div>
                  <div className="readout-item">
                    <span className="readout-label">DRIFT REGIME</span>
                    <span className="readout-val accent-amber">CONVERGENT</span>
                  </div>
                  <div className="readout-item">
                    <span className="readout-label">FAULT TOLERANCE</span>
                    <span className="readout-val accent-cyan">99.98% COV</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="hero-actions">
                  <a className="btn-trigger-primary" href="#work">
                    <span>[01_EXPLORE SELECTED WORK]</span>
                    <span style={{ fontSize: "1.1rem" }}>↘</span>
                  </a>
                  <a className="btn-trigger-secondary" href="#contact">
                    <span>[GET IN TOUCH]</span>
                    <span style={{ fontSize: "1.1rem" }}>⌨</span>
                  </a>
                </div>
              </div>

              {/* Right Tactile Visual Instrument Panel */}
              <div className="instrument-panel">
                <div className="instrument-canvas-wrapper">
                  <HeroScene />
                </div>

                <div className="instrument-hud">
                  <span className="hud-cyan">[RADIAL_MONITOR: ACTIVE]</span>
                  <span>SCALE: 1:1.04</span>
                </div>

                {/* Precision Center Reticle Overlay */}
                <div className="reticle-center">
                  <svg className="reticle-svg" viewBox="0 0 240 240" fill="none">
                    <circle cx="120" cy="120" r="110" stroke="var(--primary)" strokeOpacity="0.4" strokeDasharray="4 6" strokeWidth="1" />
                    <circle cx="120" cy="120" r="84" stroke="var(--primary)" strokeDasharray="12 4" strokeWidth="1.5" />
                    <circle cx="120" cy="120" r="42" stroke="var(--secondary)" strokeOpacity="0.8" strokeWidth="1" />
                    <line x1="120" y1="8" x2="120" y2="232" stroke="var(--primary)" strokeOpacity="0.5" strokeDasharray="2 4" strokeWidth="0.75" />
                    <line x1="8" y1="120" x2="232" y2="120" stroke="var(--primary)" strokeOpacity="0.5" strokeDasharray="2 4" strokeWidth="0.75" />
                    <circle cx="120" cy="120" r="4" fill="var(--primary)" />
                  </svg>
                </div>

                <div className="instrument-hud">
                  <span>COORD: 0x9F41_AD</span>
                  <span className="hud-cyan">SAMPLING @ 120Hz</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SELECTED WORK SECTION */}
        <section id="work" className="section section-alt">
          <div className="container">
            <div className="section-header" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", alignItems: "flex-end" }}>
              <div>
                <p className="section-label">// 01_INDEX</p>
                <h2 className="section-title">Selected Work</h2>
              </div>
              <p style={{ color: "var(--on-surface-variant)", maxWidth: "420px", fontSize: "var(--fs-body)" }}>
                Three calibrated research and engineering systems focusing on systemic drift, FinOps telemetry, and automated LLM verification.
              </p>
            </div>

            <div className="project-stack">
              {/* PROJECT 1: The Shifting Threat */}
              <article className="project-card">
                <div className="project-grid-inner">
                  {/* Visual Chassis: Signal Drift Spectrum */}
                  <div className="project-visual-chassis">
                    <div className="visual-hud-bar">
                      <span className="visual-hud-cyan">[SIGNAL_DRIFT_SPECTRUM]</span>
                      <span>λ = 1.61803</span>
                    </div>
                    <div className="visual-graphic-container">
                      <svg viewBox="0 0 400 180" fill="none" style={{ width: "100%", height: "100%" }}>
                        {/* Grid lines */}
                        <line x1="0" y1="40" x2="400" y2="40" stroke="var(--primary)" strokeOpacity="0.08" strokeWidth="1" />
                        <line x1="0" y1="90" x2="400" y2="90" stroke="var(--primary)" strokeOpacity="0.12" strokeWidth="1" />
                        <line x1="0" y1="140" x2="400" y2="140" stroke="var(--primary)" strokeOpacity="0.08" strokeWidth="1" />
                        <line x1="140" y1="0" x2="140" y2="180" stroke="var(--secondary)" strokeDasharray="4 4" strokeOpacity="0.7" strokeWidth="1.5" />
                        <line x1="270" y1="0" x2="270" y2="180" stroke="var(--primary)" strokeDasharray="2 4" strokeOpacity="0.7" strokeWidth="1.5" />
                        {/* Waveform 1: Nominal regime */}
                        <path d="M0,90 Q35,40 70,90 T140,90" fill="none" stroke="var(--primary)" strokeWidth="2" />
                        {/* Waveform 2: Chaotic shift regime (amber interference) */}
                        <path d="M140,90 C175,20 205,160 240,75 C255,40 265,115 270,90" fill="none" stroke="var(--secondary)" strokeWidth="2.5" />
                        {/* Waveform 3: Stabilized high-frequency regime */}
                        <path d="M270,90 Q290,65 310,90 T350,90 T390,90 T400,90" fill="none" stroke="var(--primary-bright)" strokeWidth="2" />
                        {/* Phase boundary annotations */}
                        <circle cx="140" cy="90" r="4" fill="var(--secondary)" />
                        <circle cx="270" cy="90" r="4" fill="var(--primary)" />
                      </svg>
                    </div>
                    <div className="visual-hud-bar">
                      <span className="visual-hud-amber">BOUND: REGIME_SWITCH</span>
                      <span>CONFIDENCE: 98.4%</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="project-details">
                    <div className="project-meta-row">
                      <span className="project-badge">PROJECT // 01</span>
                      <span style={{ color: "var(--outline)" }}>·</span>
                      <span className="project-category">{projects[0].category}</span>
                      <span style={{ color: "var(--outline)" }}>·</span>
                      <span style={{ color: "var(--secondary)", fontWeight: 600 }}>{projects[0].status}</span>
                    </div>
                    <h3 className="project-title">{projects[0].title}</h3>
                    <p className="project-desc">{projects[0].description}</p>
                    <div className="tags-wrap">
                      {projects[0].methods.map((method) => (
                        <span key={method} className="tag-chip">
                          {method}
                        </span>
                      ))}
                    </div>
                    <div style={{ paddingTop: "0.5rem" }}>
                      <a
                        className="btn-view-repo"
                        href={projects[0].repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View repository</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              {/* PROJECT 2: Cloud Cost Forecasting & Spend Anomaly Detection */}
              <article className="project-card">
                <div className="project-grid-inner">
                  {/* Visual Chassis: FinOps Cost Vector */}
                  <div className="project-visual-chassis">
                    <div className="visual-hud-bar">
                      <span className="visual-hud-cyan">[FINOPS_COST_VECTOR]</span>
                      <span>AWS_CUR · GCP_EXPORT</span>
                    </div>
                    <div className="visual-graphic-container">
                      <svg viewBox="0 0 360 160" fill="none" style={{ width: "100%", height: "100%" }}>
                        {/* Spend density bars */}
                        <rect x="20" y="90" width="14" height="50" fill="var(--primary)" fillOpacity="0.15" />
                        <rect x="42" y="75" width="14" height="65" fill="var(--primary)" fillOpacity="0.2" />
                        <rect x="64" y="82" width="14" height="58" fill="var(--primary)" fillOpacity="0.25" />
                        <rect x="86" y="60" width="14" height="80" fill="var(--primary)" fillOpacity="0.3" />
                        <rect x="108" y="70" width="14" height="70" fill="var(--primary)" fillOpacity="0.3" />
                        {/* Anomaly spike in amber */}
                        <rect x="130" y="45" width="14" height="95" fill="var(--secondary)" fillOpacity="0.45" />
                        <rect x="152" y="78" width="14" height="62" fill="var(--primary)" fillOpacity="0.3" />
                        <rect x="174" y="68" width="14" height="72" fill="var(--primary)" fillOpacity="0.3" />
                        {/* Residual projection cone (Prophet 7-30d forecast band) */}
                        <polygon points="174,68 220,50 280,30 340,15 340,65 280,75 220,85 174,68" fill="var(--primary)" fillOpacity="0.08" />
                        <path d="M20,95 L64,84 L108,70 L130,45 L174,70 L240,55 L340,25" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                        {/* Anomaly reticle */}
                        <circle cx="137" cy="45" r="7" stroke="var(--secondary)" strokeDasharray="2 2" strokeWidth="1.5" />
                        <circle cx="137" cy="45" r="2.5" fill="var(--secondary)" />
                        <line x1="174" y1="20" x2="174" y2="140" stroke="var(--outline)" strokeDasharray="3 3" strokeOpacity="0.4" />
                      </svg>
                    </div>
                    <div className="visual-hud-bar">
                      <span className="visual-hud-cyan">ISOLATION FOREST [RESIDUALS]</span>
                      <span>T+30 DAYS PROJ</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="project-details">
                    <div className="project-meta-row">
                      <span className="project-badge">PROJECT // 02</span>
                      <span style={{ color: "var(--outline)" }}>·</span>
                      <span className="project-category">{projects[1].category}</span>
                      <span style={{ color: "var(--outline)" }}>·</span>
                      <span style={{ color: "var(--secondary)", fontWeight: 600 }}>{projects[1].status}</span>
                    </div>
                    <h3 className="project-title">{projects[1].title}</h3>
                    <p className="project-desc">{projects[1].description}</p>
                    <div className="tags-wrap">
                      {projects[1].methods.map((method) => (
                        <span key={method} className="tag-chip">
                          {method}
                        </span>
                      ))}
                    </div>
                    <div style={{ paddingTop: "0.5rem" }}>
                      <a
                        className="btn-view-repo"
                        href={projects[1].repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View repository</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              {/* PROJECT 3: Enterprise LLM Trust Framework */}
              <article className="project-card">
                <div className="project-grid-inner">
                  {/* Visual Chassis: Verification Graph */}
                  <div className="project-visual-chassis">
                    <div className="visual-hud-bar">
                      <span className="visual-hud-cyan">[VERIFICATION_GRAPH_LLM]</span>
                      <span>PIPELINE_STAGES // 5</span>
                    </div>
                    <div className="visual-graphic-container">
                      <svg viewBox="0 0 380 170" fill="none" style={{ width: "100%", height: "100%" }}>
                        {/* Concentric shield rings */}
                        <circle cx="85" cy="85" r="65" stroke="var(--primary)" strokeOpacity="0.1" strokeWidth="1.5" />
                        <circle cx="85" cy="85" r="45" stroke="var(--primary)" strokeDasharray="3 3" strokeOpacity="0.25" />
                        <circle cx="85" cy="85" r="25" stroke="var(--primary)" strokeWidth="1.5" />
                        <polygon points="85,68 100,77 100,95 85,103 70,95 70,77" fill="var(--secondary)" fillOpacity="0.1" stroke="var(--secondary)" strokeWidth="1.5" />
                        {/* Orthogonal directed flow connectors */}
                        <line x1="110" y1="85" x2="160" y2="85" stroke="var(--primary)" strokeDasharray="2 3" strokeWidth="1.5" />
                        {/* Stage 1: Gen */}
                        <rect x="160" y="73" width="28" height="24" rx="2" fill="var(--surface-container-high)" stroke="var(--primary)" strokeWidth="1" />
                        <text x="174" y="89" fill="var(--primary-bright)" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">GEN</text>
                        <line x1="188" y1="85" x2="210" y2="85" stroke="var(--primary)" strokeWidth="1.5" />
                        {/* Stage 2: Eval */}
                        <rect x="210" y="73" width="28" height="24" rx="2" fill="var(--surface-container-high)" stroke="var(--primary)" strokeWidth="1" />
                        <text x="224" y="89" fill="var(--primary-bright)" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">EVL</text>
                        <line x1="238" y1="85" x2="260" y2="85" stroke="var(--primary)" strokeWidth="1.5" />
                        {/* Stage 3: Critique */}
                        <rect x="260" y="73" width="28" height="24" rx="2" fill="var(--surface-container-high)" stroke="var(--secondary)" strokeWidth="1" />
                        <text x="274" y="89" fill="var(--secondary)" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">CRT</text>
                        {/* Feedback Loop (Critique -> Correction) */}
                        <path d="M 274,73 L 274,48 L 324,48 L 324,73" fill="none" stroke="var(--secondary)" strokeDasharray="2 2" strokeWidth="1.2" />
                        {/* Stage 4: Correction */}
                        <rect x="310" y="73" width="28" height="24" rx="2" fill="var(--surface-container-high)" stroke="var(--primary)" strokeWidth="1" />
                        <text x="324" y="89" fill="var(--primary-bright)" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">COR</text>
                        <line x1="338" y1="85" x2="350" y2="85" stroke="var(--primary)" strokeWidth="1.5" />
                        {/* Terminal Node */}
                        <circle cx="360" cy="85" r="8" fill="var(--primary)" />
                        <circle cx="360" cy="85" r="3" fill="var(--on-primary)" />
                      </svg>
                    </div>
                    <div className="visual-hud-bar">
                      <span className="visual-hud-cyan">COMPOSITE TRUST SCORER</span>
                      <span>STATE: VERIFIED</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="project-details">
                    <div className="project-meta-row">
                      <span className="project-badge">PROJECT // 03</span>
                      <span style={{ color: "var(--outline)" }}>·</span>
                      <span className="project-category">{projects[2].category}</span>
                      <span style={{ color: "var(--outline)" }}>·</span>
                      <span style={{ color: "var(--secondary)", fontWeight: 600 }}>{projects[2].status}</span>
                    </div>
                    <h3 className="project-title">{projects[2].title}</h3>
                    <p className="project-desc">{projects[2].description}</p>
                    <div className="tags-wrap">
                      {projects[2].methods.map((method) => (
                        <span key={method} className="tag-chip">
                          {method}
                        </span>
                      ))}
                    </div>
                    <div style={{ paddingTop: "0.5rem" }}>
                      <a
                        className="btn-view-repo"
                        href={projects[2].repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View repository</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 4. EXPERIENCE SECTION */}
        <section id="experience" className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">// 02_PRACTICE</p>
              <h2 className="section-title">Experience</h2>
            </div>

            <div className="exp-chassis">
              {/* Header Box */}
              <div className="exp-header-panel">
                <div>
                  <div className="exp-role-title">
                    <span className="pulse-dot"></span>
                    <a
                      href="https://github.com/Aathish14/CAF---Context-Assembly-Framework"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid var(--primary)", paddingBottom: "1px" }}
                    >
                      {experience.role}
                    </a>
                  </div>
                  <p className="exp-company-sub">{experience.company}</p>
                </div>
                <div className="exp-meta-badges">
                  <span className="exp-loc-badge">{experience.location.toUpperCase()}</span>
                  <span>{experience.dates.toUpperCase()}</span>
                </div>
              </div>

              {/* Summary Statement */}
              <p className="exp-summary-text">
                Contributed to the Context Assembly Framework (CAF) — a modular platform that converts structured business requirements into standardized AI-ready instructions.
              </p>

              {/* 4 Technical Contribution Modules */}
              <div className="exp-modules-grid">
                <div className="exp-module-card">
                  <span className="exp-module-num">01 //</span>
                  <div>
                    <h4 className="exp-module-heading">Backend Context Processing</h4>
                    <p className="exp-module-desc">
                      Implemented backend context processing and instruction assembly routines for high-dimensional business specifications.
                    </p>
                  </div>
                </div>

                <div className="exp-module-card">
                  <span className="exp-module-num">02 //</span>
                  <div>
                    <h4 className="exp-module-heading">Validation &amp; Schema Integrity</h4>
                    <p className="exp-module-desc">
                      Enforced strict runtime data contracts using Pydantic models with automated validation and configuration-driven workflows.
                    </p>
                  </div>
                </div>

                <div className="exp-module-card">
                  <span className="exp-module-num">03 //</span>
                  <div>
                    <h4 className="exp-module-heading">NVIDIA NIM Connectivity</h4>
                    <p className="exp-module-desc">
                      Integrated high-throughput NVIDIA NIM connectivity for low-latency model inference along with versioning pipelines.
                    </p>
                  </div>
                </div>

                <div className="exp-module-card">
                  <span className="exp-module-num">04 //</span>
                  <div>
                    <h4 className="exp-module-heading">State &amp; Verification Layer</h4>
                    <p className="exp-module-desc">
                      Constructed internal test instrumentation with Streamlit and SQLite, delivering full automated regression testing, debugging, and documentation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech stack tags */}
              <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {experience.technologies.map((t) => (
                  <span key={t} className="tag-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. EDUCATION & TECHNICAL STACK SPLIT SECTION */}
        <section id="education" className="section section-alt">
          <div className="container">
            <div className="split-grid">
              {/* Education Column */}
              <div>
                <div className="section-header">
                  <p className="section-label">// 03_ACADEMICS</p>
                  <h2 className="section-title">Education</h2>
                </div>

                <div className="card-panel">
                  <div>
                    <div className="edu-header-row">
                      <span>{education.duration.toUpperCase()}</span>
                      <span style={{ color: "var(--primary)", fontWeight: 600 }}>FINAL YEAR</span>
                    </div>
                    <h3 className="edu-degree">{education.degree}</h3>
                    <p className="edu-college">{education.institution}</p>
                    <p className="edu-loc">{education.location}</p>

                    <div className="metric-chips-grid">
                      <div className="metric-chip">
                        <span className="metric-chip-label">CUMULATIVE CGPA</span>
                        <span className="metric-chip-val">{education.cgpa}</span>
                      </div>
                      <div className="metric-chip">
                        <span className="metric-chip-label">ACADEMIC MINOR</span>
                        <span className="metric-chip-val amber">{education.minor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="edu-footer-note">
                    <span style={{ color: "var(--primary)", fontWeight: 600 }}>// DISCIPLINE:</span> Machine Learning Architectures, Distributed Compute, Cloud Native Systems.
                  </div>
                </div>
              </div>

              {/* Technical Stack Column */}
              <div id="skills">
                <div className="section-header">
                  <p className="section-label">// 04_CAPABILITIES</p>
                  <h2 className="section-title">Technical Stack</h2>
                </div>

                <div className="card-panel">
                  {/* Category 1: Languages */}
                  <div className="skill-category">
                    <div className="skill-cat-header">
                      <span className="skill-cat-title">LANGUAGES</span>
                      <span className="skill-cat-idx">01 // CODE</span>
                    </div>
                    <div className="tags-wrap">
                      {skills.languages.map((item) => (
                        <span key={item} className="tag-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Category 2: AI / ML */}
                  <div className="skill-category">
                    <div className="skill-cat-header">
                      <span className="skill-cat-title">AI / MACHINE LEARNING</span>
                      <span className="skill-cat-idx">02 // MODELS &amp; AGENTS</span>
                    </div>
                    <div className="tags-wrap">
                      {skills.aiMl.map((item) => (
                        <span key={item} className="tag-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Category 3: Backend & Cloud */}
                  <div className="skill-category">
                    <div className="skill-cat-header">
                      <span className="skill-cat-title">BACKEND &amp; CLOUD</span>
                      <span className="skill-cat-idx">03 // INFRA</span>
                    </div>
                    <div className="tags-wrap">
                      {skills.backend.map((item) => (
                        <span key={item} className="tag-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Category 4: Data & Ecosystem */}
                  <div className="skill-category">
                    <div className="skill-cat-header">
                      <span className="skill-cat-title">DATA &amp; ECOSYSTEM</span>
                      <span className="skill-cat-idx">04 // PIPELINES</span>
                    </div>
                    <div className="tags-wrap">
                      {skills.dataTools.map((item) => (
                        <span key={item} className="tag-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Category 5: Mathematical Foundations */}
                  <div className="skill-category">
                    <div className="skill-cat-header">
                      <span className="skill-cat-title">MATHEMATICAL FOUNDATIONS</span>
                      <span className="skill-cat-idx">05 // THEORY</span>
                    </div>
                    <div className="tags-wrap">
                      {skills.fundamentals.map((item) => (
                        <span key={item} className="tag-chip" style={{ fontWeight: 600 }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CREDENTIALS & ACHIEVEMENTS */}
        <section id="credentials" className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">// 05_VERIFIED_RECORDS</p>
              <h2 className="section-title">Credentials &amp; Achievements</h2>
            </div>

            <div className="cred-2x2-grid">
              {/* Credential 1 */}
              <article className="cred-box">
                <div>
                  <div className="cred-top-row">
                    <span className="cred-type">ACADEMIC CERTIFICATION</span>
                    <span className="cred-date">{credentials[0].date}</span>
                  </div>
                  <h3 className="cred-title">{credentials[0].name}</h3>
                  <p className="cred-desc">
                    Formal verification covering distributed ledgers, consensus protocols, smart contracts, and cryptographic primitives.
                  </p>
                </div>
                <div className="cred-bottom-bar">
                  <span className="badge-score-cyan">{credentials[0].detail.toUpperCase()}</span>
                  <span style={{ color: "var(--on-surface-variant)" }}>ID: NPTEL25CS</span>
                </div>
              </article>

              {/* Credential 2 */}
              <article className="cred-box">
                <div>
                  <div className="cred-top-row">
                    <span className="cred-type">ENTERPRISE AGENT BADGE</span>
                    <span className="cred-date">{credentials[1].date}</span>
                  </div>
                  <h3 className="cred-title">{credentials[1].name}</h3>
                  <p className="cred-desc">
                    Validation of enterprise agent architecture, orchestration frameworks, tools integration, and production deployment across Google Cloud Platform.
                  </p>
                </div>
                <div className="cred-bottom-bar">
                  <span className="badge-score-amber">STATUS: AGENT READY</span>
                  <span style={{ color: "var(--on-surface-variant)" }}>GCP // GEMINI</span>
                </div>
              </article>

              {/* Credential 3 */}
              <article className="cred-box">
                <div>
                  <div className="cred-top-row">
                    <span className="cred-type">COMPETITIVE RUNTIME</span>
                    <span className="cred-date">GLOBAL LEADERBOARD</span>
                  </div>
                  <h3 className="cred-title">{credentials[2].name}</h3>
                  <p className="cred-desc">
                    High-intensity distributed architecture and algorithmic optimization benchmark demonstrating strict speed and memory efficiency under load.
                  </p>
                </div>
                <div className="cred-bottom-bar">
                  <span className="badge-score-cyan">{credentials[2].detail.toUpperCase()}</span>
                  <span style={{ color: "var(--on-surface-variant)" }}>PCT: TOP 1.8%</span>
                </div>
              </article>

              {/* Credential 4 */}
              <article className="cred-box">
                <div>
                  <div className="cred-top-row">
                    <span className="cred-type">SYSTEMS FINALIST</span>
                    <span className="cred-date">{credentials[3].date} EDITION</span>
                  </div>
                  <h3 className="cred-title">{credentials[3].name}</h3>
                  <p className="cred-desc">
                    National finalist in native systems porting and memory safety engineering. Implemented high-performance natural sorting algorithm in Rust under repository <code style={{ color: "var(--primary)" }}>natsort-rs</code>.
                  </p>
                </div>
                <div className="cred-bottom-bar">
                  <a
                    href="https://github.com/Aathish14/natsort-rs"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
                  >
                    <span>GITHUB/natsort-rs</span>
                    <span>↗</span>
                  </a>
                  <span className="badge-score-amber">FINALIST</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 7. ABOUT SECTION */}
        <section id="about" className="section section-alt">
          <div className="container">
            <div className="about-grid">
              <div className="about-main-panel">
                <div className="section-header" style={{ marginBottom: "1.25rem" }}>
                  <p className="section-label">// 06_POSITIONING</p>
                  <h2 className="section-title">About {heroData.name}</h2>
                </div>
                <p className="about-lead-text">
                  Final-year computer science student focused on AI/ML, backend development, and cloud technologies, with an interest in building reliable, scalable software.
                </p>
                <div className="about-pillars">
                  <span><strong style={{ color: "var(--primary)" }}>●</strong> DETERMINISTIC DESIGN</span>
                  <span><strong style={{ color: "var(--secondary)" }}>●</strong> DRIFT RESILIENT</span>
                  <span><strong style={{ color: "var(--primary)" }}>●</strong> PRODUCTION READY</span>
                </div>
              </div>

              <div>
                <div className="about-side-box">
                  <span className="side-box-label">SYSTEM IDENTITY</span>
                  <span className="side-box-val">{heroData.name}</span>
                  <span className="side-box-sub">B.E. CSE (2023–2027) · Minor MBA</span>
                </div>
                <div className="about-side-box">
                  <span className="side-box-label">PRIMARY RESEARCH AXIS</span>
                  <p style={{ fontSize: "var(--fs-small)", color: "var(--on-surface-variant)", lineHeight: 1.5, marginTop: "0.25rem" }}>
                    Robustness boundaries of machine learning pipelines undergoing real-time concept drift and enterprise multi-provider LLM governance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CONTACT SECTION */}
        <section id="contact" className="section">
          <div className="container">
            <div className="contact-chassis">
              <div className="contact-grid">
                <div>
                  <p className="section-label">// 07_COMMUNICATION_LINK</p>
                  <h2 className="section-title">Initiate Transmission.</h2>
                  <p className="contact-lead">
                    Available for full-time software engineering and AI/ML backend roles starting mid-2027, as well as collaborative engineering research on system robustness.
                  </p>
                  <div className="contact-cta-row">
                    <a className="btn-email-primary" href={socialLinks.email}>
                      <span>✉</span>
                      <span>{socialLinks.emailDisplay}</span>
                    </a>
                    <button className="btn-copy-address" type="button" onClick={handleCopy}>
                      <span>📋</span>
                      <span>COPY ADDRESS</span>
                    </button>
                  </div>
                  {copied && (
                    <div className="copy-feedback">
                      ✓ COPIED: {socialLinks.emailDisplay} TO SYSTEM CLIPBOARD
                    </div>
                  )}
                </div>

                <div className="networks-box">
                  <span className="networks-title">VERIFIED NETWORKS</span>
                  <a
                    className="network-link-row"
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="network-row-left">
                      <span className="network-idx">#01</span>
                      <div>
                        <div className="network-name">GitHub</div>
                        <div className="network-handle">github.com/Aathish14</div>
                      </div>
                    </div>
                    <span className="network-arrow">→</span>
                  </a>

                  <a
                    className="network-link-row"
                    href={socialLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="network-row-left">
                      <span className="network-idx">#02</span>
                      <div>
                        <div className="network-name">LeetCode</div>
                        <div className="network-handle">leetcode.com/Aathish_14</div>
                      </div>
                    </div>
                    <span className="network-arrow">→</span>
                  </a>

                  <a
                    className="network-link-row"
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="network-row-left">
                      <span className="network-idx">#03</span>
                      <div>
                        <div className="network-name">LinkedIn</div>
                        <div className="network-handle">aathish-rao-a-b-881708298</div>
                      </div>
                    </div>
                    <span className="network-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. TECHNICAL FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-id-block">
              <span className="footer-sys-id">SYS_ID:</span>
              <span className="footer-name">{heroData.name}</span>
              <span className="footer-tagline">
                CALIBRATED ARCHITECTURES · ML PIPELINES · CLOUD COMPUTE
              </span>
            </div>

            <div className="footer-links">
              <a
                className="footer-link-pill"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                # GITHUB/Aathish14
              </a>
              <a
                className="footer-link-pill"
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
              >
                # LEETCODE/Aathish_14
              </a>
              <a
                className="footer-link-pill"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                # LINKEDIN/aathish-rao
              </a>
            </div>

            <div className="footer-right-meta">
              <span>[{currentYear}] </span>
              <a href={socialLinks.email} style={{ color: "inherit" }}>
                {socialLinks.emailDisplay}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </SmoothScroll>
  );
}
