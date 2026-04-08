import { ChangeEvent, FormEvent, useState } from "react";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import {
  officeAddress,
  officeFrontPhotos,
  officeMapEmbedUrl,
  officeMapLink,
  publicContactEmail,
  publicContactPhone,
} from "../data/siteContent";

type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
};

type SubmissionState = {
  tone: "idle" | "success" | "error";
  message: string;
};

const initialFormState: ContactFormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [loading, setLoading] = useState(false);
  const [frontPhotoIndex, setFrontPhotoIndex] = useState(0);
  const [missingFrontPhotos, setMissingFrontPhotos] = useState<
    Record<string, boolean>
  >({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    tone: "idle",
    message: "",
  });

  const currentFrontPhoto = officeFrontPhotos[frontPhotoIndex];
  const currentFrontPhotoMissing = currentFrontPhoto
    ? Boolean(missingFrontPhotos[currentFrontPhoto.src])
    : true;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSubmissionState({ tone: "idle", message: "" });

    const endpoint =
      window.location.hostname === "localhost"
        ? "http://localhost:5000/send-email"
        : "/api/send-email";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data: { message?: string } | null = await response
        .json()
        .catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || "Failed to send inquiry");
      }

      setForm(initialFormState);
      setSubmissionState({
        tone: "success",
        message: data?.message || "Inquiry sent successfully.",
      });
    } catch (error) {
      setSubmissionState({
        tone: "error",
        message:
          error instanceof Error ? error.message : "Failed to send inquiry",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageBanner
        eyebrow="Contact Us"
        title="Let's discuss your outsourcing, support, or recruitment needs."
        text="The contact experience now has its own page so visitors can reach out without scrolling through the rest of the site."
        asideTitle="Office details"
        asideText="Visit the office in Kauswagan, send an inquiry through the contact form, or open the map in a separate tab."
        chips={["Inquiries", "Office visit", "Map access"]}
      />

      <section className="section ultra-section">
        <div className="shell shell-wide">
          <div className="contact-clean-grid">
            <div className="contact-left-stack">
              <div className="contact-info-panel">
                <SectionHeading
                  eyebrow="Reach Out"
                  title="Let's start the conversation."
                  text="Share your outsourcing goals, support needs, or recruitment questions and the team can follow up with next steps."
                />

                <div className="contact-list contact-list-strong">
                  <div className="contact-item">
                    <span className="contact-item-label">Email</span>
                    <span>{publicContactEmail}</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item-label">Phone</span>
                    <span>{publicContactPhone}</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item-label">Address</span>
                    <span>{officeAddress}</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item-label">Presence</span>
                    <span>Registered in the United States and the Philippines</span>
                  </div>
                </div>
              </div>

              <div className="office-showcase-card">
                {currentFrontPhoto && !currentFrontPhotoMissing ? (
                  <img
                    src={currentFrontPhoto.src}
                    alt={currentFrontPhoto.alt}
                    className="office-showcase-image"
                    onError={() =>
                      setMissingFrontPhotos((current) => ({
                        ...current,
                        [currentFrontPhoto.src]: true,
                      }))
                    }
                  />
                ) : (
                  <div className="office-showcase-placeholder">
                    <div className="office-gallery-placeholder-title">
                      Office front photo ready for upload
                    </div>
                    <p className="office-gallery-placeholder-copy">
                      Add the second office-front image to show it here when visitors
                      click next.
                    </p>
                    <div className="office-gallery-placeholder-path">
                      {currentFrontPhoto?.expectedFile ?? "public/building-front-2.jpg"}
                    </div>
                  </div>
                )}
                <div className="office-showcase-content">
                  <div className="office-showcase-top">
                    <div className="office-badge">Office Front</div>
                    {officeFrontPhotos.length > 1 ? (
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm office-showcase-next"
                        onClick={() =>
                          setFrontPhotoIndex((current) =>
                            (current + 1) % officeFrontPhotos.length
                          )
                        }
                      >
                        Next Photo
                      </button>
                    ) : null}
                  </div>
                  <h3 className="card-title">Phonipino Corp. Building</h3>
                  <p className="card-text">
                    {officeAddress}. This section can flip between the front-office
                    photos directly from the Contact page.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-right-stack">
              <div className="contact-card contact-form-card">
                <form className="form-grid" onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </div>

                  <div className="field full">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                    />
                  </div>

                  <div className="field full">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  <div className="field full">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help"
                      rows={5}
                      required
                    />
                  </div>

                  <div className="field full">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Inquiry"}
                    </button>
                  </div>
                </form>

                {submissionState.tone !== "idle" ? (
                  <div
                    className={`form-status form-status-${submissionState.tone}`}
                    role="status"
                  >
                    {submissionState.message}
                  </div>
                ) : null}
              </div>

              <div className="map-card map-card-clean">
                <div className="map-card-header">
                  <div>
                    <div className="office-badge">Location</div>
                    <h3 className="card-title">Find Us on the Map</h3>
                  </div>

                  <a
                    className="btn btn-secondary btn-sm"
                    href={officeMapLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Maps
                  </a>
                </div>

                <div className="map-frame-wrap clean-map-wrap">
                  <iframe
                    title="Phonipino Office Map"
                    className="map-frame clean-map-frame"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={officeMapEmbedUrl}
                  />
                </div>

                <div className="map-card-content">
                  <p className="card-text">{officeAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
