import React from "react";
import "./App.scss";
import {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  contactInfo
} from "./portfolio";

const Arrow = () => <span aria-hidden="true">↗</span>;

function App() {
  return (
    <div className="resume-site" id="top">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <a
          href="#top"
          className="monogram"
          aria-label="Chakradhar Chinnam home"
        >
          cc<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#expertise">Expertise</a>
          <a href="#education">Education</a>
        </nav>
        <a className="header-contact" href="#contact">
          Let’s connect <Arrow />
        </a>
      </header>
      <main id="content">
        <section className="hero" aria-labelledby="name">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> PLATFORM ENGINEER · ICE MORTGAGE
              TECHNOLOGY
            </p>
            <h1 id="name">
              Chakradhar
              <br />
              <em>Chinnam.</em>
            </h1>
            <p className="intro">{greeting.subTitle}</p>
            <div className="hero-actions">
              <a className="primary-link" href="#experience">
                Explore my experience <span aria-hidden="true">↓</span>
              </a>
              <button className="print-link" onClick={() => window.print()}>
                Print resume <Arrow />
              </button>
            </div>
          </div>
          <aside className="hero-note" aria-label="Engineering focus">
            <div className="architecture" aria-hidden="true">
              <div />
              <div />
              <div />
              <span>CC / ENGINEERING</span>
            </div>
            <p className="eyebrow">THE FOCUS</p>
            <p>
              Reliable platforms.
              <br />
              Thoughtful automation.
              <br />
              <em>Better developer experience.</em>
            </p>
            <div className="note-bottom">
              <span>PLATFORM & INFRASTRUCTURE</span>
              <span>01 — 03</span>
            </div>
          </aside>
        </section>
        <div className="profile-strip">
          <span>ENGINEERING WITH PURPOSE</span>
          <p>
            Infrastructure <i>/</i> Automation <i>/</i> Reliability
          </p>
          <a href={socialMediaLinks.linkedin}>
            LinkedIn <Arrow />
          </a>
        </div>
        <section className="resume-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">01 / THE JOURNEY</p>
            <h2>
              Professional
              <br />
              <em>experience.</em>
            </h2>
            <p>ICE Mortgage Technology</p>
          </div>
          <div className="timeline">
            {workExperiences.experience.map((job, index) => (
              <article className="job" key={job.role}>
                <div className="job-meta">
                  <span>{job.date}</span>
                  {index === 0 && (
                    <span className="current-label">CURRENT ROLE</span>
                  )}
                </div>
                <h3>{job.role}</h3>
                <p className="company">{job.company}</p>
                <p className="job-description">{job.desc}</p>
                <ul>
                  {job.descBullets.map(bullet => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section className="expertise-section" id="expertise">
          <div className="expertise-top">
            <div>
              <p className="eyebrow">02 / THE CRAFT</p>
              <h2>
                Built on <em>expertise.</em>
              </h2>
            </div>
            <p>{skillsSection.subTitle}</p>
          </div>
          <div className="capabilities">
            {skillsSection.skills.map((skill, index) => (
              <div className="capability" key={index}>
                <span className="capability-number">0{index + 1}</span>
                <p>{skill}</p>
              </div>
            ))}
          </div>
          <div className="expertise-bottom">
            <div>
              <p className="eyebrow">TOOLS & TECHNOLOGIES</p>
              <div className="skill-tags">
                {skillsSection.softwareSkills.map(skill => (
                  <span key={skill.skillName}>{skill.skillName}</span>
                ))}
              </div>
            </div>
            <div className="proficiency">
              <p className="eyebrow">CORE PROFICIENCIES</p>
              {techStack.experience.map(item => (
                <div className="proficiency-item" key={item.Stack}>
                  <div>
                    <span>{item.Stack}</span>
                    <span>{item.progressPercentage}</span>
                  </div>
                  <div className="meter">
                    <span style={{width: item.progressPercentage}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="resume-section education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">03 / THE FOUNDATION</p>
            <h2>
              Always
              <br />
              <em>learning.</em>
            </h2>
          </div>
          <div className="education-list">
            {educationInfo.schools.map((school, index) => (
              <article key={school.schoolName}>
                <span className="education-index">0{index + 1}</span>
                <div>
                  <p className="eyebrow">{school.subHeader}</p>
                  <h3>{school.schoolName}</h3>
                </div>
                <span aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>
        <section className="contact-section" id="contact">
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>
            Good engineering starts
            <br />
            with a <em>conversation.</em>
          </h2>
          <p>{contactInfo.subtitle}</p>
          <a
            className="email-link"
            href={`mailto:${contactInfo.email_address}`}
          >
            {contactInfo.email_address} <Arrow />
          </a>
          <div className="contact-socials">
            <a href={socialMediaLinks.linkedin}>
              LinkedIn <Arrow />
            </a>
            <a href={socialMediaLinks.github}>
              GitHub <Arrow />
            </a>
          </div>
        </section>
      </main>
      <footer>
        <a className="monogram" href="#top">
          cc<span>.</span>
        </a>
        <p>
          {greeting.username} <span> / </span> Platform Engineer
        </p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
export default App;
