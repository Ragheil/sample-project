import { useMemo, useState } from "react";
import "../styles/phonipino.css";

import Header from "./Header";
import Footer from "./Footer";
import SectionHeading from "./SectionHeading";
import InfoCard from "./InfoCard";
import FloatingFaqChatbot from "./FloatingFaqChatbot";

import {
  navItems,
  services,
  highlights,
  processSteps,
  faqs,
  showcaseItems,
  teamMembers,
} from "../data/phonipinoData";

export default function PhonipinoWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="page">
      <div className="ambient-one" />
      <div className="ambient-two" />

      <Header navItems={navItems} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <section id="home" className="hero ultra-section">
          <div className="shell shell-wide hero-grid">
            <div className="hero-copy">
              <div className="badge">★ Black, White, and Red Enterprise Presentation</div>

              <h1 className="hero-title">
                Grow your business with expert outsourcing solutions built for performance.
              </h1>

              <p className="hero-text hero-text-lead">
                Phonipino Corp. is a top Philippine-based outsourcing company
                specializing in sales, lead generation, and customer support.
                We help businesses grow with expert agents, competitive rates,
                and 24/7 service tailored to your needs.
              </p>

              <p className="hero-text">
                We are presented here as registered in both the United States
                and the Philippines, with a service model designed for modern
                local and global clients.
              </p>

              <div className="hero-actions">
                <a href="#services" className="btn btn-primary">
                  Explore Services
                </a>
                <a href="#careers" className="btn btn-secondary">
                  View Careers
                </a>
              </div>

              <div className="quick-stats">
                <div className="quick-stat">
                  <strong>24/7</strong>
                  <span>Operational Support</span>
                </div>
                <div className="quick-stat">
                  <strong>US + PH</strong>
                  <span>Registered Presence</span>
                </div>
                <div className="quick-stat">
                  <strong>Growth</strong>
                  <span>Scalable Delivery Model</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-media-card">
                <img src="/hero-team.jpg" alt="Phonipino team" className="hero-media" />
                <div className="hero-media-overlay">
                  <div className="hero-panel-title">Enterprise-Ready Outsourcing</div>
                  <div className="hero-panel-text">
                    Sales, support, culture, hiring, and service excellence in one
                    modern brand experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-alt ultra-section">
          <div className="shell shell-wide two-col-layout">
            <SectionHeading
              eyebrow="About Phonipino Corp."
              title="A modern outsourcing partner built for service excellence and long-term growth."
              text="The system is rebuilt to use more width on very large screens while staying clean on tablets and mobile devices."
            />

            <div className="card-grid two">
              {highlights.map((item) => (
                <InfoCard
                  key={item.stat}
                  icon={item.icon}
                  stat={item.stat}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section ultra-section">
          <div className="shell shell-wide">
            <SectionHeading
              eyebrow="Core Services"
              title="Specialized support solutions tailored for business growth."
              text="The cards, spacing, and content blocks now scale much better on ultrawide displays."
            />

            <div className="card-grid three margin-top-lg">
              {services.map((service) => (
                <InfoCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  text={service.text}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="culture" className="section section-alt ultra-section">
          <div className="shell shell-wide">
            <SectionHeading
              eyebrow="Culture & Recognition"
              title="Showcase your team, events, donations, and achievements."
              text="These image blocks are ready for real photos and are sized to breathe better on large screens."
            />

            <div className="card-grid four margin-top-lg">
              {showcaseItems.map((item) => (
                <InfoCard
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="leadership" className="section ultra-section">
          <div className="shell shell-wide">
            <SectionHeading
              eyebrow="Core Members"
              title="Present the people behind Phonipino Corp."
              text="Leadership and key members now sit inside a wider flexible grid for big monitors."
            />

            <div className="team-grid margin-top-lg">
              {teamMembers.map((member) => (
                <article className="team-card" key={member.name}>
                  <img src={member.image} alt={member.name} className="team-image" />
                  <div className="team-content">
                    <h3 className="card-title">{member.name}</h3>
                    <p className="card-text">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="section section-alt ultra-section">
          <div className="shell shell-wide">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Professional, scalable, and built for serious business."
              text="This area uses a wider card layout so it does not look boxed in on large displays."
            />

            <div className="card-grid three margin-top-lg">
              {[
                "Competitive outsourcing rates with quality-focused delivery.",
                "Expert agents for sales, support, and lead generation operations.",
                "A business image that feels polished and enterprise-ready.",
                "24/7 coverage for time-sensitive and international needs.",
                "Flexible team scaling as campaigns and client requirements grow.",
                "Registered presence in both the United States and the Philippines.",
              ].map((point) => (
                <div key={point} className="info-card">
                  <div className="check-row">
                    <span className="check-mark">✓</span>
                    <p className="card-text">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section ultra-section">
          <div className="shell shell-wide">
            <SectionHeading
              eyebrow="How We Work"
              title="A structured process that supports dependable service delivery."
              text="The process grid expands naturally across large screens with less wasted margin."
            />

            <div className="process-grid margin-top-lg">
              {processSteps.map((step, index) => (
                <div className="process-card" key={step.title}>
                  <div className="process-number">{index + 1}</div>
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-text">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="careers" className="section section-alt ultra-section">
          <div className="shell shell-wide careers-section-shell">
            <div className="careers-top">
              <div>
                <div className="eyebrow">Careers</div>
                <h2 className="section-title">
                  We’re expanding and actively hiring.
                </h2>
                <p className="section-text">
                  Applicants must send their resume or CV to your recruitment email.
                  Replace the sample address below with your real one.
                </p>
                <p className="resume-note">
                  Required in the email: full name, desired position, phone number,
                  and attached resume/CV.
                </p>
              </div>

              <div className="careers-actions">
                <a
                  className="btn btn-primary"
                  href="mailto:your-email@example.com?subject=Application%20for%20Phonipino%20Corp."
                >
                  Send Resume / CV
                </a>
              </div>
            </div>

            <div className="career-role-grid">
              <article className="career-role-card">
                <div className="career-role-top">
                  <div>
                    <h3 className="career-role-title">Agents</h3>
                    <div className="career-role-subtitle">
                      Sales, support, and outreach roles for fast-growing operations.
                    </div>
                  </div>
                  <div className="role-badge">30 positions left</div>
                </div>

                <div className="role-meta">
                  <div className="role-meta-chip">Full-time</div>
                  <div className="role-meta-chip">On-site / Hybrid / Remote</div>
                  <div className="role-meta-chip">Entry to Mid Level</div>
                </div>

                <ul className="role-list">
                  <li>Strong communication skills</li>
                  <li>Customer-facing confidence</li>
                  <li>Sales or support experience is a plus</li>
                  <li>Willingness to work shifting schedules if needed</li>
                </ul>

                <div className="role-cta">
                  <a
                    className="btn btn-primary"
                    href="mailto:your-email@example.com?subject=Application%20for%20Agent%20Position"
                  >
                    Apply as Agent
                  </a>
                </div>
              </article>

              <article className="career-role-card">
                <div className="career-role-top">
                  <div>
                    <h3 className="career-role-title">Team Leaders</h3>
                    <div className="career-role-subtitle">
                      Leadership roles focused on coaching, performance, and team guidance.
                    </div>
                  </div>
                  <div className="role-badge">10 positions left</div>
                </div>

                <div className="role-meta">
                  <div className="role-meta-chip">Full-time</div>
                  <div className="role-meta-chip">Leadership Role</div>
                  <div className="role-meta-chip">Operations / Sales / Support</div>
                </div>

                <ul className="role-list">
                  <li>Leadership or supervisory experience preferred</li>
                  <li>Ability to coach and motivate teams</li>
                  <li>Strong reporting and communication skills</li>
                  <li>Can help drive accountability and performance</li>
                </ul>

                <div className="role-cta">
                  <a
                    className="btn btn-primary"
                    href="mailto:your-email@example.com?subject=Application%20for%20Team%20Leader%20Position"
                  >
                    Apply as Team Leader
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section ultra-section">
          <div className="shell shell-wide two-col-layout">
            <div>
              <SectionHeading
                eyebrow="Contact Us"
                title="Let’s discuss your outsourcing, support, or recruitment needs."
                text="This section stays wide and balanced instead of sitting inside a narrow centered box."
              />

              <div className="contact-list">
                <div className="contact-item"><span>✉</span> hello@phonipino.com</div>
                <div className="contact-item"><span>☎</span> +63 000 000 0000</div>
                <div className="contact-item"><span>📍</span> United States and Philippines</div>
              </div>
            </div>

            <div className="contact-card">
              <div className="form-grid">
                <div className="field">
                  <label>First Name</label>
                  <input placeholder="John" />
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input placeholder="Doe" />
                </div>
                <div className="field full">
                  <label>Email</label>
                  <input placeholder="name@company.com" />
                </div>
                <div className="field full">
                  <label>Company</label>
                  <input placeholder="Your company name" />
                </div>
                <div className="field full">
                  <label>Message</label>
                  <textarea placeholder="Tell us how we can help" rows={5} />
                </div>
              </div>

              <div className="margin-top-md">
                <button type="button" className="btn btn-primary">
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer year={year} navItems={navItems} />
      <FloatingFaqChatbot faqs={faqs} />
    </div>
  );
}