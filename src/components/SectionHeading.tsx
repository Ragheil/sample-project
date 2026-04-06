type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      <p className="section-text">{text}</p>
    </div>
  );
}