import InfoCard from "../components/InfoCard";
import PageBanner from "../components/PageBanner";
import { showcaseItems } from "../data/siteContent";

export default function CulturePage() {
  return (
    <>
      <PageBanner
        eyebrow="Culture & Recognition"
        title="Showcase the people, events, and achievements behind the company."
        text="The culture section now stands on its own page so visitors can focus on the atmosphere and energy behind the brand."
        asideTitle="Culture matters"
        asideText="Team moments, community outreach, and employee recognition all reinforce the kind of workplace experience your brand wants to project."
        chips={["Team building", "Donations", "Recognition"]}
      />

      <section className="section section-alt ultra-section">
        <div className="shell shell-wide">
          <div className="card-grid four">
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
    </>
  );
}
