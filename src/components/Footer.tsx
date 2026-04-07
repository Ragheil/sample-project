import { NavItem } from "../data/phonipinoData";

type FooterProps = {
  year: number;
  navItems: NavItem[];
};

export default function Footer({ year, navItems }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© 2014–{new Date().getFullYear()} Phonipino Corp. All rights reserved.</div>

        <div className="footer-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}