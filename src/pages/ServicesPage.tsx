import { Link } from "react-router-dom";
import InfoCard from "../components/InfoCard";
import PageBanner from "../components/PageBanner";
import { services } from "../data/siteContent";

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Core Services"
        title="Specialized support solutions tailored for business growth."
        text="The services page is now separated from the rest of the site so visitors can focus on capabilities, not scroll depth."
        asideTitle="Service mix"
        asideText="Sales outsourcing, lead generation, support operations, and reporting can all be presented clearly with room to expand each offer over time."
        chips={["Sales", "Lead generation", "Support", "Reporting"]}
      />

      <section className="section section-alt ultra-section">
        <div className="shell shell-wide">
          <div className="card-grid three">
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

      <section className="section ultra-section">
        <div className="shell shell-wide">
          <div className="page-cta-card">
            <div>
              <div className="page-cta-label">Need a custom support model?</div>
              <h3 className="card-title">Let's shape a team around your workflow.</h3>
              <p className="card-text">
                Use the contact page to start a conversation about staffing, support
                coverage, or growth targets.
              </p>
            </div>

            <Link to="/contact" className="btn btn-primary">
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
