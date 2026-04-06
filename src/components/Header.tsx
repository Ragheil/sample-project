import { NavItem } from "../data/phonipinoData";

type HeaderProps = {
  navItems: NavItem[];
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({
  navItems,
  menuOpen,
  setMenuOpen,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#home">
          <img className="brand-logo" src="/logo.jpg" alt="Phonipino Corp. logo" />
          <div>
            <div className="brand-title">Phonipino</div>
            <div className="brand-subtitle">Corp. | Outsourcing Solutions</div>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#hiring" className="btn btn-secondary">
            We’re Hiring
          </a>
          <a href="#contact" className="btn btn-primary">
            Get a Proposal
          </a>
        </div>

        <button
          className="menu-btn"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="container mobile-nav">
          <div className="mobile-nav-grid">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}