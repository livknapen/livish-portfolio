import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
 
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projecten", href: "#projecten" },
  { label: "Over mij", href: "#over-mij" },
  { label: "Contact", href: "#contact" },
];
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
 
  // Schaduw bij scrollen
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  // Actieve sectie bijhouden
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
 
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
 
    return () => observer.disconnect();
  }, []);
 
  return (
<nav
  className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}> 
      <a href="#home" className={styles.logo}>
        L
        <span className ={styles.iHost}>
          i
          <svg
            className={styles.leaf}
            viewBox="0 0 28 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="14" cy="17" rx="11" ry="15"
              fill="#e8200c"
              transform="rotate(-12 14 17)"
            />
            <line
              x1="14" y1="3" x2="14" y2="31"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        vish Studio
      </a>
 
      {/* Links */}
      <ul className={styles.linkList}>
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = activeSection === href.replace("#", "");
          return (
            <li key={href}>
              <a
                href={href} className={styles.link} style={{color: isActive ? "#1a3fcb" : "#111111",}}>
                {label}
                <span className={styles.underline} style={{width: isActive ? "100%" : "0%",}}/>
              </a>
            </li>
          );
        })}
      </ul>
 
      {/* CTA */}
      <a href="#contact" className={styles.cta}>
        Neem contact op
      </a>
    </nav>
  );
}