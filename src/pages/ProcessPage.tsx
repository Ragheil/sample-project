import PageBanner from "../components/PageBanner";
import { processSteps } from "../data/siteContent";

export default function ProcessPage() {
  return (
    <>
      <PageBanner
        eyebrow="How We Work"
        title="A structured process that supports dependable service delivery."
        text="The process page gives clients a straightforward explanation of how engagement moves from discovery to optimization."
        asideTitle="Delivery flow"
        asideText="Breaking the process into a dedicated route helps explain your workflow without forcing visitors to scan unrelated sections first."
        chips={["Discovery", "Design", "Deployment", "Optimization"]}
      />

      <section className="section section-alt ultra-section">
        <div className="shell shell-wide">
          <div className="process-grid">
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
    </>
  );
}
