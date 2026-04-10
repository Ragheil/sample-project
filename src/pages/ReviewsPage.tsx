import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import { companyReviews, impactItems } from "../data/siteContent";

function ReviewStars({ rating }: { rating: number }) {
  const fillWidth = `${Math.max(0, Math.min(100, (rating / 5) * 100))}%`;

  return (
    <div className="review-stars" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      <span className="review-stars-base" aria-hidden="true">
        ★★★★★
      </span>
      <span className="review-stars-fill" style={{ width: fillWidth }} aria-hidden="true">
        ★★★★★
      </span>
    </div>
  );
}

export default function ReviewsPage() {
  const averageRating = (
    companyReviews.reduce((total, review) => total + review.rating, 0) / companyReviews.length
  ).toFixed(1);

  return (
    <>
      <PageBanner
        eyebrow="Company Reviews"
        title="A review-ready page that highlights trust, quality, and real service value."
        text="This section gives PHONIPINO CORP. a dedicated place to show star-rated review highlights and explain why the company leaves a positive impression."
        asideTitle="Review snapshot"
        asideText={`PHONIPINO CORP. currently showcases ${companyReviews.length} review highlights with an average rating of ${averageRating} out of 5.`}
        chips={[`${averageRating}/5 average`, `${companyReviews.length} review highlights`, "Positive brand impact"]}
      />

      <section className="section section-alt ultra-section">
        <div className="shell shell-wide">
          <SectionHeading
            eyebrow="Review Highlights"
            title="Ten company review cards with visible star ratings."
            text="Each review block combines a numeric score, star display, and a short explanation of what PHONIPINO CORP. does well for clients and partners."
          />

          <div className="reviews-grid margin-top-lg">
            {companyReviews.map((review) => (
              <article className="review-card" key={review.title}>
                <div className="review-card-top">
                  <div>
                    <div className="review-card-label">{review.category}</div>
                    <h3 className="card-title">{review.title}</h3>
                  </div>

                  <div className="review-score-block">
                    <div className="review-score">{review.rating.toFixed(1)}</div>
                    <ReviewStars rating={review.rating} />
                  </div>
                </div>

                <p className="card-text">{review.text}</p>
                <div className="review-impact-chip">{review.impact}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ultra-section">
        <div className="shell shell-wide">
          <SectionHeading
            eyebrow="Positive Impact"
            title="The positive impact of PHONIPINO CORP. goes beyond ratings alone."
            text="Strong outsourcing support is not only about high scores. It also affects client growth, customer experience, local employment, and the long-term reputation of the businesses PHONIPINO CORP. supports."
          />

          <div className="impact-grid margin-top-lg">
            {impactItems.map((item) => (
              <article className="impact-card" key={item.title}>
                <div className="impact-stat">{item.stat}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ultra-section">
        <div className="shell shell-wide">
          <div className="page-cta-card">
            <div>
              <div className="page-cta-label">Want the same level of support?</div>
              <h3 className="card-title">Talk to PHONIPINO CORP. about your team needs.</h3>
              <p className="card-text">
                Use the contact page to start a conversation about customer support,
                sales outsourcing, or a custom growth-focused support model.
              </p>
            </div>

            <Link to="/contact" className="btn btn-primary">
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
