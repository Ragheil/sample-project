import OfficeGallery from "../components/OfficeGallery";
import PageBanner from "../components/PageBanner";
import { officeGallerySpaces } from "../data/siteContent";

export default function OfficeTourPage() {
  return (
    <>
      <PageBanner
        eyebrow="Office Tour"
        title="Step through the spaces that shape daily work at Phonipino Corp."
        text="This page brings the office environment into the main navigation so visitors can explore the lobby, training areas, leadership rooms, and production spaces without going through Contact first."
        asideTitle="Inside the workplace"
        asideText="Use the room tabs or the next button to move through the workplace gallery and preview each area of the office."
        chips={["Lobby", "Training Room", "Production Floor"]}
      />

      <OfficeGallery spaces={officeGallerySpaces} />
    </>
  );
}
