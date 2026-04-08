import PageBanner from "../components/PageBanner";
import { careerRoles, recruitmentEmail } from "../data/siteContent";

export default function CareersPage() {
  return (
    <>
      <PageBanner
        eyebrow="Careers"
        title="We're expanding and actively hiring."
        text="The careers experience now has its own route, giving applicants a clear, focused place to review openings and send resumes."
        asideTitle="How to apply"
        asideText="Send your resume or CV in PDF format only. Include your full name, desired position, and contact number in the email."
        chips={["Agents", "IT Staff", "Team Leaders"]}
      />

      <section className="section section-alt ultra-section">
        <div className="shell shell-wide careers-section-shell">
          <div className="careers-top">
            <div>
              <div className="eyebrow">Current Openings</div>
              <h2 className="section-title">Apply directly through our recruitment inbox.</h2>
              <p className="section-text">
                We are currently hiring Agents, IT Staff, and Team Leaders. All
                applicants must send their resume or CV to <strong>{recruitmentEmail}</strong>.
              </p>
              <p className="resume-note">
                <strong>PDF only:</strong> Please submit your resume or CV in PDF
                format only.
              </p>
            </div>

            <div className="careers-actions">
              <a
                className="btn btn-primary"
                href={`mailto:${recruitmentEmail}?subject=Application%20for%20Phonipino%20Corp.&body=Full%20Name%3A%0D%0ADesired%20Position%3A%0D%0AContact%20Number%3A%0D%0A%0D%0APlease%20attach%20your%20resume%20or%20CV%20in%20PDF%20format%20only.`}
              >
                Send Resume / CV
              </a>
            </div>
          </div>

          <div className="career-role-grid">
            {careerRoles.map((role) => (
              <article className="career-role-card" key={role.title}>
                <div className="career-role-top">
                  <div>
                    <h3 className="career-role-title">{role.title}</h3>
                    <div className="career-role-subtitle">{role.subtitle}</div>
                  </div>
                  <div className="role-badge">{role.openings}</div>
                </div>

                <div className="role-meta">
                  {role.meta.map((item) => (
                    <div className="role-meta-chip" key={item}>
                      {item}
                    </div>
                  ))}
                </div>

                <ul className="role-list">
                  {role.requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="resume-note">
                  Resume/CV submissions are accepted in <strong>PDF format only</strong>.
                </p>

                <div className="role-cta">
                  <a className="btn btn-primary" href={role.mailto}>
                    Apply Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
