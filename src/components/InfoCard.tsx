type InfoCardProps = {
  icon?: string;
  title?: string;
  stat?: string;
  text: string;
  image?: string;
  className?: string;
  imageClass?: string;
};

export default function InfoCard({
  icon,
  title,
  stat,
  text,
  image,
  className = "",
  imageClass = "",
}: InfoCardProps) {
  return (
    <article className={`info-card ${className}`}>
      {image && (
        <div className="card-image-wrap">
          <img
            src={image}
            alt={title ?? stat ?? "Card image"}
            className={`card-image ${imageClass}`}
          />
        </div>
      )}

      <div className="card-body">
        {icon && <div className="card-icon">{icon}</div>}
        {stat && <div className="card-stat">{stat}</div>}
        {title && <h3 className="card-title">{title}</h3>}
        <p className="card-text">{text}</p>
      </div>
    </article>
  );
}