import PageBanner from "../components/PageBanner";
import { teamMembers } from "../data/siteContent";

export default function LeadershipPage() {
  return (
    <>
      <PageBanner
        eyebrow="Leadership"
        title="Present the people behind Phonipino Corp."
        text="The leadership page gives the board and executive team a dedicated place in the navigation instead of keeping them buried inside a long scroll."
        asideTitle="Leadership focus"
        asideText="Use this area to build credibility and make it easier for visitors, applicants, and clients to understand who leads the organization."
        chips={["Executive team", "Board visibility", "Brand trust"]}
      />

      <section className="section ultra-section">
        <div className="shell shell-wide">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card overlap-team-card" key={member.name}>
                <div className="team-image-overlap-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image-overlap"
                  />
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
    </>
  );
}
