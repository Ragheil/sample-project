import PageBanner from "../components/PageBanner";
import { highlights, whyUsPoints } from "../data/siteContent";

export default function WhyUsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Why Choose Us"
        title="Professional, scalable, and built for serious business."
        text="The value proposition now has its own page so visitors can understand the reasons to choose Phonipino without scanning unrelated sections."
        asideTitle="Why this page matters"
        asideText="Separating the value story into a dedicated route makes your pitch sharper and gives you room to grow proof points later."
        chips={["Scalable teams", "24/7 support", "US + PH presence"]}
      />

      <section className="section section-alt ultra-section">
        <div className="shell shell-wide">
          <div className="card-grid three">
            {whyUsPoints.map((point) => (
              <div key={point} className="info-card">
                <div className="check-row">
                  <span className="check-mark">OK</span>
                  <p className="card-text">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section ultra-section">
        <div className="shell shell-wide quick-stats">
          {highlights.map((item) => (
            <div className="quick-stat" key={item.stat}>
              <strong>{item.stat}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
