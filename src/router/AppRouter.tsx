import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "../components/SiteLayout";
import AboutPage from "../pages/AboutPage";
import CareersPage from "../pages/CareersPage";
import ContactPage from "../pages/ContactPage";
import CulturePage from "../pages/CulturePage";
import HomePage from "../pages/HomePage";
import LeadershipPage from "../pages/LeadershipPage";
import OfficeTourPage from "../pages/OfficeTourPage";
import ProcessPage from "../pages/ProcessPage";
import ReviewsPage from "../pages/ReviewsPage";
import ServicesPage from "../pages/ServicesPage";
import WhyUsPage from "../pages/WhyUsPage";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/office-tour" element={<OfficeTourPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
