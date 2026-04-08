import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { highlights } from "../data/siteContent";

const homeLinks = [
  {
    label: "About",
    title: "Learn the company story",
    text: "See how Phonipino presents its experience, footprint, and operating model.",
    to: "/about",
  },
  {
    label: "Services",
    title: "Review core solutions",
    text: "Explore sales, lead generation, customer support, and back-office capabilities.",
    to: "/services",
  },
  {
    label: "Culture",
    title: "Meet the brand culture",
    text: "Browse community work, employee recognition, and team-building moments.",
    to: "/culture",
  },
  {
    label: "Leadership",
    title: "See the leadership team",
    text: "Present the people guiding strategy, operations, finance, and marketing.",
    to: "/leadership",
  },
  {
    label: "Careers",
    title: "Open dedicated hiring pages",
    text: "Help applicants go straight to open roles, requirements, and recruitment email links.",
    to: "/careers",
  },
  {
    label: "Office Tour",
    title: "Browse the workplace",
    text: "Show the lobby, training room, leadership office, and production areas in one dedicated page.",
    to: "/office-tour",
  },
  {
    label: "Contact",
    title: "Reach out directly",
    text: "Use the standalone contact page for inquiries, office details, and map access.",
    to: "/contact",
  },
];

export default function HomePage() {
  const [heroLogoFocus, setHeroLogoFocus] = useState(false);

  return (
    <>
      <section className="hero ultra-section">
        <div className="shell shell-wide hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Phonipino Corp.</div>

            <h1 className="hero-title">
              Grow your business with outsourcing teams built for performance.
            </h1>

            <p className="hero-text hero-text-lead">
              Phonipino Corp. is a Philippine-based outsourcing company focused on
              sales, lead generation, customer support, and scalable service delivery.
            </p>

            <p className="hero-text">
              The website now works as a routed experience instead of a single long
              scroll, making each major section easier to find, navigate, and expand.
            </p>

            <p className="hero-founded">
              Established in <strong>2014</strong> and built for long-term support
              partnerships.
            </p>

            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get a Proposal
              </Link>
            </div>

            <div className="quick-stats">
              {highlights.map((item) => (
                <div className="quick-stat" key={item.stat}>
                  <strong>{item.stat}</strong>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div
              className={`hero-media-card hero-logo-card${
                heroLogoFocus ? " hero-media-card-active" : ""
              }`}
              onClick={() => setHeroLogoFocus((current) => !current)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setHeroLogoFocus((current) => !current);
                }
              }}
            >
              <img
                src="/logo.jpg"
                alt="Phonipino logo"
                className="hero-media hero-logo-image"
              />

              <div className="hero-media-overlay hero-logo-overlay">
                <div className="hero-panel-title">Enterprise-ready outsourcing</div>
                <div className="hero-panel-text">
                  Sales, support, hiring, and service excellence now organized into
                  dedicated pages with shared navigation across the site.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt ultra-section">
        <div className="shell shell-wide">
          <SectionHeading
            eyebrow="Site Navigation"
            title="Every major section now has its own page."
            text="Use the navigation bar or jump into the most important areas below."
          />

          <div className="home-link-grid margin-top-lg">
            {homeLinks.map((item) => (
              <Link className="home-link-card" key={item.to} to={item.to}>
                <div className="home-link-label">{item.label}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
