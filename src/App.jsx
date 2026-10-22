import { person, handover, featured, projects, experience, education, skills } from './content.js'

function Stack({ items }) {
  return (
    <ul className="stack" aria-label="Built with">
      {items.map((s) => <li key={s}>{s}</li>)}
    </ul>
  )
}

export default function App() {
  const year = new Date().getFullYear()

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="top">
        <div className="wrap top-inner">
          <a className="mark" href="#main">Kian Mwiberi</a>
          <nav aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero wrap">
          <h1>{person.name}</h1>
          <p className="role">{person.role}</p>
          <p className="intro">{person.intro}</p>

          <figure className="note" aria-label="Handover note">
            <figcaption>
              <span className="dot" aria-hidden="true" />
              Handover note, {year}
            </figcaption>
            <dl>
              {handover.map((h) => (
                <div className="note-row" key={h.field}>
                  <dt>{h.field}</dt>
                  <dd>{h.value}</dd>
                </div>
              ))}
            </dl>
            <div className="note-actions">
              <a className="btn primary" href={person.cv} download>Download CV (PDF)</a>
              <a className="btn" href={`mailto:${person.email}`}>Email me</a>
            </div>
          </figure>
        </section>

        <section id="work" className="wrap section">
          <h2>Work</h2>

          <article className="feature">
            <div className="feature-head">
              <h3>{featured.title}</h3>
              <p className="meta">{featured.context}<span className="when">{featured.when}</span></p>
            </div>
            <p className="lede">{featured.summary}</p>
            <ol className="flow" aria-label="How a handover moves through the system">
              {featured.flow.map((f) => (
                <li key={f.who}><strong>{f.who}</strong> {f.does}</li>
              ))}
            </ol>
            <ul className="points">
              {featured.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <Stack items={featured.stack} />
          </article>

          <div className="projects">
            {projects.filter((p) => p.highlight).map((p) => (
              <article className="project" key={p.title}>
                <h3>{p.title}</h3>
                <p className="kind">{p.kind}</p>
                <p>{p.summary}</p>
                {p.detail && <p className="detail">{p.detail}</p>}
                <Stack items={p.stack} />
                {p.link && <a className="text-link" href={p.link.href} target="_blank" rel="noreferrer">{p.link.label}</a>}
              </article>
            ))}
          </div>

          <div className="earlier">
            <h3>Earlier projects</h3>
            <ul className="earlier-list">
              {projects.filter((p) => !p.highlight).map((p) => (
                <li key={p.title}>
                  <strong>{p.title}</strong> <span className="tech">{p.kind}, {p.stack.join(', ')}</span>
                  <p>{p.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="wrap section">
          <h2>Experience</h2>
          <ol className="rail">
            {experience.map((e) => (
              <li key={e.role}>
                <p className="rail-when">{e.when}</p>
                <div>
                  <h3>{e.role}</h3>
                  <p className="kind">{e.org}</p>
                  <ul className="points">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </li>
            ))}
            <li>
              <p className="rail-when">{education.when}</p>
              <div>
                <h3>{education.degree}</h3>
                <p className="kind">{education.school}</p>
                <p className="detail">Coursework includes {education.coursework.charAt(0).toLowerCase() + education.coursework.slice(1)}</p>
              </div>
            </li>
          </ol>
        </section>

        <section id="skills" className="wrap section">
          <h2>Skills</h2>
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className="wrap section contact">
          <h2>Contact</h2>
          <p className="intro">Email is the quickest way to reach me.</p>
          <ul className="contact-list">
            <li><span>Email</span><a href={`mailto:${person.email}`}>{person.email}</a></li>
            <li><span>Phone</span><a href={`tel:${person.phone.replace(/\s/g, '')}`}>{person.phone}</a></li>
            <li><span>LinkedIn</span><a href={person.linkedin} target="_blank" rel="noreferrer">kian-muchemi</a></li>
            <li><span>GitHub</span><a href={person.github} target="_blank" rel="noreferrer">Mwiberikian</a></li>
            <li><span>CV</span><a href={person.cv} download>Kian_Mwiberi_CV.pdf</a></li>
          </ul>
        </section>
      </main>

      <footer className="wrap foot">
        <p>© {year} {person.name}. Built with React and Vite.</p>
      </footer>
    </>
  )
}
