import SectionHeading from "./SectionHeading";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  text: string;
  asideTitle: string;
  asideText: string;
  chips?: string[];
};

export default function PageBanner({
  eyebrow,
  title,
  text,
  asideTitle,
  asideText,
  chips = [],
}: PageBannerProps) {
  return (
    <section className="section page-banner">
      <div className="shell shell-wide page-banner-grid">
        <SectionHeading eyebrow={eyebrow} title={title} text={text} />

        <aside className="page-banner-card">
          <div className="page-banner-card-label">{asideTitle}</div>
          <p className="page-banner-card-text">{asideText}</p>

          {chips.length > 0 ? (
            <div className="page-chip-list">
              {chips.map((chip) => (
                <span key={chip} className="page-chip">
                  {chip}
                </span>
              ))}
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
