import { Outlet } from "react-router-dom";
import { faqs, navItems } from "../data/siteContent";
import RouteScrollToTop from "../router/RouteScrollToTop";
import FloatingFaqChatbot from "./FloatingFaqChatbot";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTopButton from "./ScrollToTopButton";

export default function SiteLayout() {
  return (
    <div className="page">
      <RouteScrollToTop />
      <div className="ambient-one" />
      <div className="ambient-two" />

      <Header navItems={navItems} />

      <main className="page-main">
        <Outlet />
      </main>

      <Footer year={new Date().getFullYear()} navItems={navItems} />
      <FloatingFaqChatbot faqs={faqs} />
      {/* <ScrollToTopButton /> */}
    </div>
  );
}
