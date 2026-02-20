import React, { useState, useEffect } from 'react';
import { DATA, STORAGE_KEY_LANG, getInitialLang } from './data';

const EXPERIENCE_START = new Date(2022, 3, 1); // 2022년 4월 1일

function getExperienceDuration() {
  const end = new Date();
  const months =
    (end.getFullYear() - EXPERIENCE_START.getFullYear()) * 12 +
    (end.getMonth() - EXPERIENCE_START.getMonth()) +
    (end.getDate() >= EXPERIENCE_START.getDate() ? 0 : -1);
  const y = Math.floor(months / 12);
  const m = months % 12;
  return { y, m };
}

function formatExperienceForHero(lang, { y, m }) {
  if (lang === 'ko') return `${y}년 ${m}개월+`;
  return `${y}y ${m}m+`;
}

function formatExperienceForParagraph(lang, { y, m }) {
  if (lang === 'ko') return `${y}년 ${m}개월`;
  return `${y} year${y !== 1 ? 's' : ''} ${m} month${m !== 1 ? 's' : ''}`;
}

const OTHERS_DURATION = { y: 4, m: 5 };

function getTotalExperienceDuration(blockchain, others = OTHERS_DURATION) {
  const totalMonths = (blockchain.y * 12 + blockchain.m) + (others.y * 12 + others.m);
  return { y: Math.floor(totalMonths / 12), m: totalMonths % 12 };
}

function getDurationFromRange(periodStart, periodEnd, lang) {
  const [yS, mS] = periodStart.split('-').map(Number);
  const end = periodEnd ? (() => { const [yE, mE] = periodEnd.split('-').map(Number); return new Date(yE, mE - 1, 1); })() : new Date();
  const start = new Date(yS, mS - 1, 1);
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (lang === 'ko') return `${y}년 ${m}개월`;
  return `${y}y ${m}m`;
}

function formatExpPeriod(item, lang) {
  if (!item.periodStart) return item.period;
  const duration = getDurationFromRange(item.periodStart, item.periodEnd ?? null, lang);
  return item.period.replace(/{duration}/g, duration);
}

function App() {
  const [lang, setLang] = useState(getInitialLang);
  const [projectTab, setProjectTab] = useState('blockchains');
  const [othersExpanded, setOthersExpanded] = useState(false);
  const experienceDurationRaw = getExperienceDuration();
  const experienceDuration = formatExperienceForHero(lang, experienceDurationRaw);
  const experienceDurationForParagraph = formatExperienceForParagraph(lang, experienceDurationRaw);
  const totalDurationRaw = getTotalExperienceDuration(experienceDurationRaw);
  const totalDuration = formatExperienceForHero(lang, totalDurationRaw);
  const othersDurationFormatted =
    lang === 'ko' ? `${OTHERS_DURATION.y}년 ${OTHERS_DURATION.m}개월` : `${OTHERS_DURATION.y}y ${OTHERS_DURATION.m}m`;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = lang;
      window.localStorage.setItem(STORAGE_KEY_LANG, lang);
    }
  }, [lang]);

  const d = DATA[lang];
  const projectsList = d.projects.categories[projectTab] || [];

  const toggleLang = () => {
    setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  return (
    <>
      <a className="skip-link" href="#main">
        {lang === 'ko' ? '본문으로 건너뛰기' : 'Skip to main content'}
      </a>

      <header className="site-header">
        <div className="container">
          <div className="brand">
            <span className="brand-dot" aria-hidden="true" />
            <span className="brand-name">Johnny JI</span>
            <span className="brand-role">{d.brand.role}</span>
          </div>

          <nav className="nav" aria-label="Primary navigation">
            <a className="nav-link" href="#about">{d.nav.about}</a>
            <a className="nav-link" href="#experience">{d.nav.experience}</a>
            <a className="nav-link" href="#projects">{d.nav.projects}</a>
            <a className="nav-link" href="#skills">{d.nav.skills}</a>
            <a className="nav-link" href="#contact">{d.nav.contact}</a>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="lang-toggle"
              onClick={toggleLang}
              aria-label="Language toggle"
            >
              <span className={`lang-pill ${lang === 'en' ? 'is-muted' : ''}`} aria-hidden="true">KO</span>
              <span className="lang-slash" aria-hidden="true">/</span>
              <span className={`lang-pill ${lang === 'ko' ? 'is-muted' : ''}`} aria-hidden="true">EN</span>
            </button>
            <a className="btn btn-ghost" href="https://github.com/johnnyji-dev" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">{d.hero.kicker}</p>
              <h1 className="hero-title">{d.hero.title}</h1>
              <p className="hero-subtitle">{d.hero.subtitle}</p>
              <p className="hero-summary">{d.hero.summary}</p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#projects">{d.hero.ctaProjects}</a>
                <a className="btn btn-secondary" href="#contact">{d.hero.ctaContact}</a>
              </div>
              <ul className="hero-highlights" aria-label="highlights">
                <li>{d.hero.h1}</li>
                <li>{d.hero.h2}</li>
                <li>{d.hero.h3}</li>
              </ul>
            </div>
            <aside className="hero-card" aria-label="quick facts">
              <div className="hero-card-row">
                <span className="label">{d.facts.focus}</span>
                <span className="value">{d.facts.focusValue}</span>
              </div>
              <div className="hero-card-row">
                <span className="label">{d.facts.years}</span>
                <span className="value hero-card-value-with-note">
                  <span className="hero-card-value-main">{totalDuration}</span>
                  <span className="hero-card-value-note">
                    (<span className="hero-card-value-emphasis"><span className="hero-card-value-label">{d.facts.blockchainLabel}</span> <span className="hero-card-value-duration">{experienceDuration}</span></span>
                    {lang === 'ko' ? ' · ' : ' · '}<span className="hero-card-value-others"><span className="hero-card-value-label">{d.facts.othersRoleLabel}</span> {othersDurationFormatted}</span>)
                  </span>
                </span>
              </div>
              <div className="hero-card-row">
                <span className="label">{d.facts.location}</span>
                <span className="value">{d.facts.locationValue}</span>
              </div>
              <div className="hero-card-divider" role="presentation" />
              <p className="hero-card-note">{d.facts.note}</p>
            </aside>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">{d.about.title}</h2>
              <p className="section-desc">{d.about.desc}</p>
            </div>
            <div className="grid-two">
              <div className="card">
                <h3 className="card-title">{d.about.profileTitle}</h3>
                <p className="card-text">{d.about.profileP1.replace(/{duration}/g, experienceDurationForParagraph)}</p>
                <p className="card-text">{d.about.profileP2}</p>
              </div>
              <div className="card">
                <h3 className="card-title">{d.about.interestTitle}</h3>
                <ul className="list">
                  <li>{d.about.interest1}</li>
                  <li>{d.about.interest2}</li>
                  <li>{d.about.interest3}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">{d.exp.title}</h2>
              <p className="section-desc">{d.exp.desc}</p>
            </div>
            <div className="stack">
              {d.exp.items.slice(0, -3).map((item, i) => (
                <article key={i} className="exp-card">
                  <div className="exp-top">
                    <h3 className="exp-company">{item.company}</h3>
                    <div className="exp-period">{formatExpPeriod(item, lang)}</div>
                  </div>
                  <p className="exp-lede">{item.lede}</p>
                  <div className="exp-area">
                    {item.areas.map((a, j) => (
                      <React.Fragment key={j}>
                        <h4>{a.title}</h4>
                        <ul>
                          {a.bullets.map((b, k) => (
                            <li key={k}>{b}</li>
                          ))}
                        </ul>
                      </React.Fragment>
                    ))}
                  </div>
                </article>
              ))}
              <div className="exp-others-wrap">
                <button
                  type="button"
                  className="exp-others-toggle"
                  onClick={() => setOthersExpanded((e) => !e)}
                  aria-expanded={othersExpanded}
                >
                  <span className="exp-others-label">{d.exp.othersLabel}</span>
                  <span className="exp-others-summary">({d.exp.othersSummary})</span>
                  <span className="exp-others-period">{d.exp.othersPeriod}</span>
                  <span className="exp-others-icon" aria-hidden="true">{othersExpanded ? '−' : '+'}</span>
                </button>
                {othersExpanded && (
                  <div className="stack exp-others-stack">
                    {d.exp.items.slice(-3).map((item, i) => (
                      <article key={i} className="exp-card">
                        <div className="exp-top">
                          <h3 className="exp-company">{item.company}</h3>
                          <div className="exp-period">{formatExpPeriod(item, lang)}</div>
                        </div>
                        <p className="exp-lede">{item.lede}</p>
                        <div className="exp-area">
                          {item.areas.map((a, j) => (
                            <React.Fragment key={j}>
                              <h4>{a.title}</h4>
                              <ul>
                                {a.bullets.map((b, k) => (
                                  <li key={k}>{b}</li>
                                ))}
                              </ul>
                            </React.Fragment>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">{d.projects.title}</h2>
              <p className="section-desc">{d.projects.desc}</p>
            </div>
            <div className="tabs" role="tablist" aria-label="Project categories">
              <button
                type="button"
                className={`tab ${projectTab === 'blockchains' ? 'is-active' : ''}`}
                role="tab"
                aria-selected={projectTab === 'blockchains'}
                onClick={() => setProjectTab('blockchains')}
              >
                {d.projects.tab1}
              </button>
              <button
                type="button"
                className={`tab ${projectTab === 'fullstack' ? 'is-active' : ''}`}
                role="tab"
                aria-selected={projectTab === 'fullstack'}
                onClick={() => setProjectTab('fullstack')}
              >
                {d.projects.tab2}
              </button>
            </div>
            <div className="grid-three" aria-live="polite">
              {projectsList.map((p, i) => (
                <a
                  key={i}
                  className="project-card"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-meta">
                    {(p.tags || [p.tag, "GitHub"]).map((t, j) => (
                      <span key={j} className="pill">{t}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">{d.skills.title}</h2>
              <p className="section-desc">{d.skills.desc}</p>
            </div>
            <div className="grid-three">
              {d.skills.groups.map((g, i) => (
                <div key={i} className="skill-card">
                  <h3 className="card-title">{g.title}</h3>
                  <div className="chips">
                    {g.items.map((it, j) => (
                      <span key={j} className="chip">{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">{d.contact.title}</h2>
              <p className="section-desc">{d.contact.desc}</p>
            </div>
            <div className="grid-two">
              <div className="card">
                <h3 className="card-title">{d.contact.linksTitle}</h3>
                <div className="link-list">
                  <a className="link-item" href="https://github.com/johnnyji-dev" target="_blank" rel="noopener noreferrer">
                    <span className="link-k">GitHub</span>
                    <span className="link-v">github.com/johnnyji-dev</span>
                  </a>
                  <a className="link-item" href="mailto:johnnyji.dev@gmail.com">
                    <span className="link-k">{d.contact.email}</span>
                    <span className="link-v">{d.contact.emailValue}</span>
                  </a>
                  <a className="link-item" href="#" aria-disabled="true">
                    <span className="link-k">LinkedIn</span>
                    <span className="link-v">{d.contact.linkedinValue}</span>
                  </a>
                  <a className="link-item" href="https://t.me/JohnnyBlck" target="_blank" rel="noopener noreferrer">
                    <span className="link-k">Telegram</span>
                    <span className="link-v">{d.contact.telegramValue}</span>
                  </a>
                </div>
              </div>
              <div className="card">
                <h3 className="card-title">{d.contact.noteTitle}</h3>
                <p className="card-text">{d.contact.noteP1}</p>
                <p className="card-text">{d.contact.noteP2}</p>
                <blockquote className="quote">{d.quote.text}</blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-muted">
            {d.footer.built}{' '}
            <span className="footer-tech">HTML</span>, <span className="footer-tech">CSS</span>, <span className="footer-tech">JavaScript</span>.
          </p>
          <p className="footer-muted">© {new Date().getFullYear()} Johnny JI</p>
          <a className="footer-link" href="https://github.com/johnnyji-dev/AboutMe" target="_blank" rel="noopener noreferrer">
            {d.footer.star}
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
