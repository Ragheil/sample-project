type InfoCardProps = {
  icon?: string;
  title?: string;
  stat?: string;
  text: string;
  image?: string;
};

export default function InfoCard({
  icon,
  title,
  stat,
  text,
  image,
}: InfoCardProps) {
  return (
    <article className="info-card">
      {image && (
        <div className="card-image-wrap">
          <img src={image} alt={title ?? stat ?? "Card image"} className="card-image" />
        </div>
      )}

      {icon && <div className="card-icon">{icon}</div>}
      {stat && <div className="card-stat">{stat}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      <p className="card-text">{text}</p>
    </article>
  );
}