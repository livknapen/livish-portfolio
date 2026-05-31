import { useEffect, useRef } from "react";
import styles from "./Projects.module.css";

interface Project {
  id: string;
  tags: string[];
  title: string;
  description: string;
  github?: string;
  theme: "light" | "dark";
  featured?: boolean;
  bgClass: string;
  mock: React.ReactNode;
}

const projects: Project[] = [
  {
    id: "escapetalk",
    tags: ["Afstudeerproject", "UX Design", "SCSS", "Figma"],
    title: "Escapetalk\nDashboard",
    description:
      "Herontwerp van het abonnementen-dashboard voor Escapetalk.nl, van PID en UX-research tot high-fidelity prototype en front-end implementatie. Drie nieuwe abonnementslagen helder gepresenteerd in een modern, datagedreven dashboard.",
    github: "https://github.com/livknapen/Escapetalk-dashboard",
    theme: "light",
    featured: true,
    bgClass: styles.bgBlue,
    mock: (
      <div className={styles.mockWindow}>
        <div className={styles.mockStatRow}>
          {[0, 1, 2].map((i) => (
            <div key={i} className={styles.mockStatBlock}>
              <div className={styles.mockStatNum} />
              <div className={styles.mockStatLabel} />
            </div>
          ))}
        </div>
        <div className={styles.mockBar} style={{ width: "100%", marginBottom: "8px" }} />
        <div className={styles.mockChart}>
          {[60, 80, 45, 90, 65, 75, 55].map((h, i) => (
            <div key={i} className={styles.mockBarChart} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className={styles.mockRow} style={{ marginTop: "8px" }}>
          <div className={styles.mockBlock} />
          <div className={styles.mockBlock} style={{ flex: 2 }} />
        </div>
        <div className={`${styles.mockBar} ${styles.short}`} />
        <div className={`${styles.mockBar} ${styles.xshort}`} />
      </div>
    ),
  },
  {
    id: "ai-weirdness",
    tags: ["Vue.js", "UX Research", "Creative Coding"],
    title: "AI-\nWeirdness",
    description:
      "Interactieve campagne-website rond een fictieve presidentsverkiezing: mens vs. AI op de maan. Voting Guide gebouwd in Vue.js, mobile-first design in Figma.",
    github: "https://github.com/livknapen/ai-weirdness",
    theme: "dark",
    bgClass: styles.bgOffwhite,
    mock: (
      <div className={styles.mockWindow}>
        <div className={styles.mockAvatar} />
        <div className={styles.mockBar} style={{ width: "90%" }} />
        <div className={`${styles.mockBar} ${styles.short}`} />
        <div className={styles.mockRow} style={{ marginTop: "10px" }}>
          <div className={styles.mockBlock} style={{ background: "rgba(232,32,12,0.4)" }} />
          <div className={styles.mockBlock} style={{ background: "rgba(26,63,203,0.4)" }} />
        </div>
        <div className={styles.mockBar} style={{ width: "100%", marginTop: "8px", background: "rgba(245,230,163,0.3)" }} />
      </div>
    ),
  },
  {
    id: "autohurencuracao",
    tags: ["HTML", "JavaScript", "UX Design"],
    title: "Auto Huren\nCuraçao",
    description:
      "Herontwerp van een autoverhuur-website, van card sorting en usability tests tot werkende filterpagina met semantic HTML5 en BEM. Desktop en mobiel.",
    github: "https://github.com/livknapen/autohurencuracao",
    theme: "dark",
    bgClass: styles.bgCream,
    mock: (
      <div className={styles.mockWindowDark}>
        <div className={styles.mockBarDark} style={{ width: "100%" }} />
        <div className={`${styles.mockBarDark} ${styles.short}`} />
        <div className={styles.mockRow} style={{ marginTop: "8px" }}>
          <div className={styles.mockBlockDark} />
          <div className={styles.mockBlockDark} />
        </div>
        <div className={styles.mockRow}>
          <div className={styles.mockBlockDark} style={{ flex: 3 }} />
          <div className={styles.mockBlockDark} style={{ background: "rgba(26,63,203,0.25)" }} />
        </div>
        <div className={`${styles.mockBarDark} ${styles.xshort}`} style={{ marginTop: "4px" }} />
      </div>
    ),
  },
  {
    id: "projectx",
    tags: ["Three.js", "JavaScript", "Creative Coding"],
    title: "ProjectX\nThree.js",
    description:
      "Interactieve 3D arcade-experience in de browser. Een bestuurbaar karakter loopt naar een arcade machine en teleporteert naar een Street Fighter wereld, gebouwd met Three.js.",
    github: "https://github.com/livknapen/projectX",
    theme: "light",
    bgClass: styles.bgDark,
    mock: (
      <div className={styles.mockWindow} style={{ textAlign: "center", padding: "16px" }}>
        <div className={styles.mockCube} />
        <div className={styles.mockBar} style={{ width: "80%", margin: "0 auto 6px" }} />
        <div className={`${styles.mockBar} ${styles.short}`} style={{ margin: "0 auto 6px" }} />
        <div className={styles.mockWasd}>
          <div className={styles.mockKey} />
          <div className={`${styles.mockKey} ${styles.mockKeyRed}`} />
          <div className={styles.mockKey} />
        </div>
      </div>
    ),
  },
  {
    id: "brandaband",
    tags: ["Branding", "Design", "Figma"],
    title: "Brand\na Band",
    description:
      "Complete visuele identiteit voor een opkomende band, van stylescapes en brandguide tot cd-covers, merch en lp-hoezen. Speels, rebels en persoonlijk.",
    theme: "light",
    bgClass: styles.bgBlue,
    mock: (
      <div className={styles.mockWindow}>
        <div className={styles.mockColorRow}>
          <div className={styles.mockColorDot} style={{ background: "rgba(232,32,12,0.6)" }} />
          <div className={styles.mockColorDot} style={{ background: "rgba(245,230,163,0.6)" }} />
          <div className={styles.mockColorDot} style={{ background: "rgba(255,255,255,0.3)" }} />
        </div>
        <div className={styles.mockBar} style={{ width: "100%", height: "10px" }} />
        <div className={styles.mockBrandLabel}>BRAND A BAND</div>
        <div className={styles.mockRow} style={{ marginTop: "8px" }}>
          <div className={styles.mockBlock} style={{ height: "20px" }} />
          <div className={styles.mockBlock} style={{ height: "20px", background: "rgba(232,32,12,0.3)" }} />
        </div>
      </div>
    ),
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll reveal
  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    if (!reveals) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projecten" ref={sectionRef} className={styles.workSection}>

      {/* Header */}
      <div className={`${styles.workHeader} ${styles.reveal}`}>
        <div>
          <div className={styles.eyebrow}>Projecten</div>
          <div className={styles.workTitle}>
            Mijn<br /><span className={styles.blue}>Werk</span>
          </div>
        </div>
        <div className={styles.workCount}>05 projecten</div>
      </div>

      {/* Grid */}
      <div className={styles.workGrid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${styles.projectCard} ${project.featured ? styles.featured : ""} ${styles.reveal}`}
          >
            {/* Achtergrond */}
            <div className={`${styles.pcBg} ${project.bgClass}`} />
            <div className={styles.pcOverlay} />

            {/* Mock UI */}
            <div className={styles.pcMock}>{project.mock}</div>

            {/* Content */}
            <div className={`${styles.pcContent} ${project.featured ? styles.pcContentFeatured : ""}`}>
              <div>
                <div className={styles.pcTags}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${styles.pcTag} ${project.theme === "dark" ? styles.pcTagDark : ""}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`${styles.pcTitle} ${project.theme === "dark" ? styles.titleDark : styles.titleLight}`}>
                  {project.title.split("\n").map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className={`${styles.pcDesc} ${project.theme === "dark" ? styles.descDark : styles.descLight}`}>
                  {project.description}
                </p>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.pcLink} ${project.theme === "dark" ? styles.linkDark : styles.linkLight}`}
                  >
                    Bekijk op GitHub <span className={styles.pcArrow}>→</span>
                  </a>
                ) : (
                  <span className={`${styles.pcLink} ${styles.linkLight}`}>
                    Bekijk project <span className={styles.pcArrow}>→</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}