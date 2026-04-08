import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavItem } from "../data/siteContent";

type HeaderProps = {
  navItems: NavItem[];
};

export default function Header({ navItems }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink className="brand" to="/">
          <img className="brand-logo" src="/logo.jpg" alt="Phonipino Corp. logo" />
          <div>
            <div className="brand-title">Phonipino</div>
            <div className="brand-subtitle">Corp. | Outsourcing Solutions</div>
          </div>
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link-active" : ""}`
              }
              end={item.path === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <NavLink
            to="/careers"
            className="btn btn-secondary header-careers-link"
            data-label="We're Hiring"
          >
            We’re Hiring
          </NavLink>
          <NavLink to="/contact" className="btn btn-primary">
            Get a Proposal
          </NavLink>
        </div>

        <button
          className="menu-btn"
          type="button"
          data-label={menuOpen ? "Close" : "Menu"}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen ? (
        <div className="mobile-sidebar-layer">
          <button
            type="button"
            className="mobile-sidebar-backdrop"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          />

          <aside className="mobile-sidebar" aria-label="Mobile navigation">
            <div className="mobile-sidebar-header">
              <div>
                <div className="mobile-sidebar-title">Navigation</div>
                <div className="mobile-sidebar-subtitle">
                  Explore the Phonipino website
                </div>
              </div>

              <button
                type="button"
                className="mobile-close-btn"
                aria-label="Close navigation"
                onClick={() => setMenuOpen(false)}
              >
                X
              </button>
            </div>

            <div className="mobile-nav-grid">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `mobile-link${isActive ? " mobile-link-active" : ""}`
                  }
                  end={item.path === "/"}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mobile-sidebar-actions">
              <NavLink to="/careers" className="btn btn-secondary">
                Careers
              </NavLink>
              <NavLink to="/contact" className="btn btn-primary">
                Contact Us
              </NavLink>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
