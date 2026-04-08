import { useMemo, useState } from "react";
import "../styles/phonipino.css";

import Header from "./Header";
import Footer from "./Footer";
import SectionHeading from "./SectionHeading";
import InfoCard from "./InfoCard";
import FloatingFaqChatbot from "./FloatingFaqChatbot";
// import ScrollToTopButton from "./ScrollToTopButton";
import {
  navItems,
  services,
  highlights,
  processSteps,
  faqs,
  showcaseItems,
  teamMembers,
} from "../data/siteContent";

export default function PhonipinoWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);
  const [heroLogoFocus, setHeroLogoFocus] = useState(false);


const [form, setForm] = useState({
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async () => {
  setLoading(true);

  const endpoint =
    window.location.hostname === "localhost"
      ? "http://localhost:5000/send-email"
      : "/api/send-email";

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data: { message?: string } | null = await res.json().catch(() => null);

    if (!res.ok) {
      throw new Error(data?.message || "Failed to send inquiry");
    }

    alert(data?.message || "Inquiry sent!");

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Failed to send inquiry";
    alert(errorMessage);
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="page">
      <div className="ambient-one" />
      <div className="ambient-two" />

      <Header navItems={navItems} />

      <main>
        <section id="home" className="hero ultra-section">
          <div className="shell shell-wide hero-grid">
            <div className="hero-copy">
              {/* <div className="badge">★ Black, White, and Red Enterprise Presentation</div> */}

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

              <p className="hero-founded">
                Established in <strong>2014</strong> — delivering consistent outsourcing
                excellence for over a decade.
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
  <div
    className={`hero-media-card hero-logo-card ${heroLogoFocus ? "hero-media-card-active" : ""}`}
    onClick={() => setHeroLogoFocus((prev) => !prev)}
  >
    <img src="/logo.jpg" alt="Phonipino logo" className="hero-media hero-logo-image" />

    <div className="hero-media-overlay hero-logo-overlay">
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
              eyebrow=" Phonipino Corp. Board of Directors"
              title="Present the people behind Phonipino Corp."
              text="Leadership and key members now sit inside a wider flexible grid for big monitors."
            />

            <div className="team-grid margin-top-lg">
              {teamMembers.map((member) => (
                <article className="team-card overlap-team-card" key={member.name}>
                  <div className="team-image-overlap-wrap">
                    <img src={member.image} alt={member.name} className="team-image-overlap" />
                  </div>

                  <div className="team-content overlap-team-content">
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
                We are currently hiring Agents and Team Leaders. All applicants must
                send their resume or CV to <strong>ragheil123@gmail.com</strong>.
              </p>
              <p className="resume-note">
                <strong>PDF only:</strong> Please submit your resume or CV in PDF
                format only. Include your full name, desired position, and contact
                number in the email.
              </p>
            </div>

            <div className="careers-actions">
              <a
                className="btn btn-primary"
                href="mailto:ragheil123@gmail.com?subject=Application%20for%20Phonipino%20Corp.&body=Full%20Name%3A%0D%0ADesired%20Position%3A%0D%0AContact%20Number%3A%0D%0A%0D%0APlease%20attach%20your%20resume%20or%20CV%20in%20PDF%20format%20only."
              >
                Send Resume / CV
              </a>
            </div>
          </div>

          <div className="career-role-grid">
            <article className="career-role-card">
              <div className="career-role-top">
                <div>
                  <h3 className="career-role-title">Call Center Officers</h3>
                  <div className="career-role-subtitle">
                    Sales, support, and outreach roles for fast-growing operations.
                  </div>
                </div>
                <div className="role-badge">30 positions left</div>
              </div>
              

              <div className="role-meta">
                <div className="role-meta-chip">Full-time</div>
                <div className="role-meta-chip">On-site</div>
                <div className="role-meta-chip">Entry to Mid Level</div>
              </div>

              <ul className="role-list">
                <li>Strong communication skills</li>
                <li>Customer-facing confidence</li>
                <li>Sales or support experience is a plus</li>
                <li>Willingness to work shifting schedules if needed</li>
              </ul>

              <p className="resume-note">
                Resume/CV submissions are accepted in <strong>PDF format only</strong>.
              </p>

              <div className="role-cta">
                <a
                  className="btn btn-primary"
                  href="mailto:ragheil123@gmail.com?subject=Application%20for%20Agent%20Position&body=Full%20Name%3A%0D%0ADesired%20Position%3A%20Agent%0D%0AContact%20Number%3A%0D%0A%0D%0APlease%20attach%20your%20resume%20or%20CV%20in%20PDF%20format%20only."
                >
                  Apply as Agent
                </a>
              </div>
            </article>


          <article className="career-role-card">
            <div className="career-role-top">
              <div>
                <h3 className="career-role-title">IT Staff</h3>
                <div className="career-role-subtitle">
                  Hiring IT personnel for technical support, system maintenance, and network operations.
                </div>
              </div>
              <div className="role-badge">5 positions left</div>
            </div>
            

            <div className="role-meta">
              <div className="role-meta-chip">Full-time</div>
              <div className="role-meta-chip">On-site</div>
              <div className="role-meta-chip">Entry to Mid Level</div>
            </div>

            <ul className="role-list">
              <li>Basic troubleshooting skills</li>
              <li>Proven IT experience</li>
              <li>Basic networking knowledge</li>
              <li>Familiarity with common software and hardware troubleshooting</li>
            </ul>

            <p className="resume-note">
              Resume/CV submissions are accepted in <strong>PDF format only</strong>.
            </p>

            <div className="role-cta">
              <a
                className="btn btn-primary"
                href="mailto:ragheil123@gmail.com?subject=Application%20for%20IT%20Staff%20Position&body=Full%20Name%3A%0D%0ADesired%20Position%3A%20IT%20Staff%0D%0AContact%20Number%3A%0D%0A%0D%0APlease%20attach%20your%20resume%20or%20CV%20in%20PDF%20format%20only."
              >
                Apply as IT Staff
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
                <div className="role-badge">3 positions left</div>
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

              <p className="resume-note">
                Resume/CV submissions are accepted in <strong>PDF format only</strong>.
              </p>

              <div className="role-cta">
                <a
                  className="btn btn-primary"
                  href="mailto:ragheil123@gmail.com?subject=Application%20for%20Team%20Leader%20Position&body=Full%20Name%3A%0D%0ADesired%20Position%3A%20Team%20Leader%0D%0AContact%20Number%3A%0D%0A%0D%0APlease%20attach%20your%20resume%20or%20CV%20in%20PDF%20format%20only."
                >
                  Apply as Team Leader
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

 <section id="contact" className="section ultra-section">
  <div className="shell shell-wide">
    <div className="contact-clean-grid">
      <div className="contact-left-stack">
        <div className="contact-info-panel">
          <SectionHeading
            eyebrow="Contact Us"
            title="Let’s discuss your outsourcing, support, or recruitment needs."
            text="Visit Phonipino Corp. at our office in Kauswagan, or send us an inquiry through the contact form."
          />

          <div className="contact-list contact-list-strong">
            <div className="contact-item">
              <span>✉</span>
              <span>hello@phonipino.com</span>
            </div>
            <div className="contact-item">
              <span>☎</span>
              <span>+63 000 000 0000</span>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <span>
                3F HCL Premier Building, National Highway, Kauswagan, beside
                Savemore Supermarket
              </span>
            </div>
            <div className="contact-item">
              <span>🌍</span>
              <span>Registered in the United States and the Philippines</span>
            </div>
          </div>
        </div>

        <div className="office-showcase-card">
          <img
            src="/building-front.jpg"
            alt="Phonipino office front"
            className="office-showcase-image"
          />
          <div className="office-showcase-content">
            <div className="office-badge">Office Front</div>
            <h3 className="card-title">Phonipino Corp. Building</h3>
            <p className="card-text">
              3F HCL Premier Building, National Highway, Kauswagan, beside
              Savemore Supermarket
            </p>
          </div>
        </div>
      </div>

      <div className="contact-right-stack">
        <div className="contact-card contact-form-card">
          <div className="form-grid">
            <div className="field">
              <label>First Name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="John"
              />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
              />
            </div>

            <div className="field full">
              <label>Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@company.com"
              />
            </div>

            <div className="field full">
              <label>Company</label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>

            <div className="field full">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help"
                rows={5}
              />
            </div>
          </div>

          <div className="margin-top-md">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
          </div>
        </div>

        <div className="map-card map-card-clean">
          <div className="map-card-header">
            <div>
              <div className="office-badge">Location</div>
              <h3 className="card-title">Find Us on the Map</h3>
            </div>

            <a
              className="btn btn-secondary btn-sm"
              href="https://maps.app.goo.gl/uyUrekAjcVeQP3GW9"
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps
            </a>
          </div>

          <div className="map-frame-wrap clean-map-wrap">
            <iframe
              title="Phonipino Office Map"
              className="map-frame clean-map-frame"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=3F%20HCL%20Premier%20Building%20National%20Highway%20Kauswagan%20beside%20Savemore%20Supermarket&t=&z=17&ie=UTF8&iwloc=&output=embed"
            />
          </div>

          <div className="map-card-content">
            <p className="card-text">
              3F HCL Premier Building, National Highway, Kauswagan, beside
              Savemore Supermarket
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      <Footer year={year} navItems={navItems} />
      <FloatingFaqChatbot faqs={faqs} />
      {/* <ScrollToTopButton /> */}
    </div>
  );
}
