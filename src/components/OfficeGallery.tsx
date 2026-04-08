import { useMemo, useState } from "react";
import {
  OfficeGalleryPhoto,
  OfficeGallerySpace,
} from "../data/siteContent";
import SectionHeading from "./SectionHeading";

type OfficeGalleryProps = {
  spaces: OfficeGallerySpace[];
};

type MissingPhotoState = Record<string, boolean>;

function getPhotoKey(space: OfficeGallerySpace, photo: OfficeGalleryPhoto) {
  return `${space.slug}:${photo.src}`;
}

export default function OfficeGallery({ spaces }: OfficeGalleryProps) {
  const [spaceIndex, setSpaceIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [missingPhotos, setMissingPhotos] = useState<MissingPhotoState>({});
  const [overlayHidden, setOverlayHidden] = useState(false);

  const totalPhotos = useMemo(
    () => spaces.reduce((count, space) => count + space.photos.length, 0),
    [spaces]
  );

  if (spaces.length === 0 || totalPhotos === 0) {
    return null;
  }

  const activeSpace = spaces[spaceIndex];
  const activePhoto = activeSpace.photos[photoIndex];
  const activePhotoKey = getPhotoKey(activeSpace, activePhoto);
  const isMissing = Boolean(missingPhotos[activePhotoKey]);

  const globalPhotoIndex =
    spaces
      .slice(0, spaceIndex)
      .reduce((count, space) => count + space.photos.length, 0) +
    photoIndex +
    1;

  const handleSpaceChange = (nextSpaceIndex: number) => {
    setSpaceIndex(nextSpaceIndex);
    setPhotoIndex(0);
    setOverlayHidden(false);
  };

  const handleNext = () => {
    if (photoIndex < activeSpace.photos.length - 1) {
      setPhotoIndex((current) => current + 1);
      setOverlayHidden(false);
      return;
    }

    const nextSpaceIndex = (spaceIndex + 1) % spaces.length;
    setSpaceIndex(nextSpaceIndex);
    setPhotoIndex(0);
    setOverlayHidden(false);
  };

  const handlePrevious = () => {
    if (photoIndex > 0) {
      setPhotoIndex((current) => current - 1);
      setOverlayHidden(false);
      return;
    }

    const previousSpaceIndex = (spaceIndex - 1 + spaces.length) % spaces.length;
    const previousSpace = spaces[previousSpaceIndex];
    setSpaceIndex(previousSpaceIndex);
    setPhotoIndex(previousSpace.photos.length - 1);
    setOverlayHidden(false);
  };

  return (
    <section className="section section-alt ultra-section office-gallery-section">
      <div className="shell shell-wide">
        <div className="office-gallery-shell">
          <SectionHeading
            eyebrow="Office Tour"
            title="Explore the spaces inside Phonipino Corp."
            text="Use the room tabs to jump to a space, or use the next button to move through the office one area at a time."
          />

          <div className="office-gallery-nav" role="tablist" aria-label="Office spaces">
            {spaces.map((space, index) => (
              <button
                key={space.slug}
                type="button"
                role="tab"
                aria-selected={index === spaceIndex}
                className={`office-gallery-tab${
                  index === spaceIndex ? " office-gallery-tab-active" : ""
                }`}
                onClick={() => handleSpaceChange(index)}
              >
                <span className="office-gallery-tab-title">{space.title}</span>
                <span className="office-gallery-tab-meta">
                  {space.photos.length} {space.photos.length === 1 ? "photo" : "photos"}
                </span>
              </button>
            ))}
          </div>

          <div className="office-gallery-stage">
            <div
              className={`office-gallery-media-card${
                overlayHidden ? " office-gallery-media-card-active" : ""
              }`}
              onClick={() => setOverlayHidden((current) => !current)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setOverlayHidden((current) => !current);
                }
              }}
            >
              {isMissing ? (
                <div className="office-gallery-placeholder">
                  <div className="office-gallery-placeholder-title">
                    {activePhoto.label} is ready for upload
                  </div>
                  <p className="office-gallery-placeholder-copy">
                    Add this file to show the image automatically in the office tour.
                  </p>
                  {activePhoto.expectedFile ? (
                    <div className="office-gallery-placeholder-path">
                      {activePhoto.expectedFile}
                    </div>
                  ) : null}
                </div>
              ) : (
                <img
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  className="office-gallery-image"
                  onError={() =>
                    setMissingPhotos((current) => ({
                      ...current,
                      [activePhotoKey]: true,
                    }))
                  }
                />
              )}

              <div className="office-gallery-overlay">
                <div className="office-badge">{activeSpace.title}</div>
                <h3 className="card-title">{activePhoto.label}</h3>
                <p className="card-text">{activeSpace.description}</p>
              </div>
            </div>

            <aside className="office-gallery-sidebar">
              <div>
                <div className="page-banner-card-label">Gallery Progress</div>
                <div className="office-gallery-counter">
                  {globalPhotoIndex} / {totalPhotos}
                </div>
                <p className="card-text">
                  Use the room tabs to jump around, or continue with the next button for
                  a smoother walkthrough.
                </p>
              </div>

              <div className="office-gallery-photo-summary">
                <div className="office-gallery-photo-label">Current Room</div>
                <div className="office-gallery-photo-value">{activeSpace.title}</div>
              </div>

              <div className="office-gallery-photo-summary">
                <div className="office-gallery-photo-label">Current Photo</div>
                <div className="office-gallery-photo-value">{activePhoto.label}</div>
              </div>

              <div className="office-gallery-actions">
                <button
                  type="button"
                  className="btn btn-secondary office-gallery-button"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn btn-primary office-gallery-button"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
