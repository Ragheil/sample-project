import InfoCard from "../components/InfoCard";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import { highlights, registrationItems } from "../data/siteContent";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Phonipino Corp."
        title="A modern outsourcing partner built for service excellence and long-term growth."
        text="Phonipino Corp. supports clients with structured delivery, dependable communication, and a service model designed for modern local and global businesses."
        asideTitle="Company snapshot"
        asideText="Phonipino Corp. is a Philippine-based outsourcing partner registered with the Cagayan de Oro City LGU, DTI, BIR, and SEC Philippines."
        chips={["Established 2014", "US + PH presence", "Service-first teams"]}
      />

      <section className="section section-alt ultra-section">
        <div className="shell shell-wide two-col-layout">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Reliable operations, talented people, and long-term client partnerships."
            text="The business story now has its own dedicated page so visitors can focus on who you are before they move into services, culture, or hiring."
          />

          <div className="card-grid two">
            {highlights.map((item) => (
              <InfoCard key={item.stat} stat={item.stat} text={item.text} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="section ultra-section">
        <div className="shell shell-wide">
          <SectionHeading
            eyebrow="Official Registrations"
            title="Registered with the key Philippine government agencies that support business compliance."
            text="These certificates show Phonipino Corp.'s local registration and corporate compliance in Cagayan de Oro City and across the Philippines."
          />

          <div className="registration-grid margin-top-lg">
            {registrationItems.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                text={item.text}
                image={item.image}
                className="registration-card"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section ultra-section">
        <div className="shell shell-wide card-grid two">
          <article className="info-card">
            <h3 className="card-title">Built for steady delivery</h3>
            <p className="card-text">
              Phonipino combines operational structure with people-focused support so
              growing companies can scale without losing quality, responsiveness, or
              brand consistency.
            </p>
          </article>

          <article className="info-card">
            <h3 className="card-title">Ready for long-term growth</h3>
            <p className="card-text">
              The company story, service offering, culture, leadership team, and hiring
              experience are now separated into individual pages, making the website
              easier to navigate and easier to grow over time.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
