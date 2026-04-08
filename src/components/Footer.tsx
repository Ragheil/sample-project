import { NavLink } from "react-router-dom";
import { NavItem } from "../data/siteContent";

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
            <NavLink key={item.label} to={item.path} end={item.path === "/"}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
