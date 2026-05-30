import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.home}>
  <div className={styles['hero-left']}>
    <div className={styles['hero-eyebrow']}>Front-end Developer &amp; Designer</div>
    <div>
      <div className={styles['hero-name']}>
        L<span className={styles['hero-name-i']}>i
          <svg className={styles['hero-leaf']} viewBox="0 0 28 34" fill="none" style={{ width: '0.22em', height: '0.28em' }}>
            <ellipse cx="14" cy="17" rx="11" ry="15" fill="#e8200c" transform="rotate(-12 14 17)"></ellipse>
            <line x1="14" y1="3" x2="14" y2="31" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-linecap="round"></line>
            <line x1="14" y1="13" x2="7" y2="19" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-linecap="round"></line>
          </svg>
        </span>v<br />Knapen
      </div>
    </div>
    <div className={styles['hero-sub']}>
      <div className={styles['hero-role']}>Livish Studio</div>
      <p className={styles['hero-desc']}>Design en development met een persoonlijke aanpak. Een stukje van Liv in elk project dat ik maak.</p>
    </div>
  </div>
<div className={styles['hero-right']}>
    <div className={styles['hero-right-top']}>
      <div className={styles['hrt-tagline']}>Elk project<br />heeft een<br /><span className={styles.red}>stukje</span><br />van mij.</div>
      <div className={styles['hrt-scroll']}>
        <div className={styles['scroll-line']}></div>
        <span className={styles['scroll-text']}>Scroll om meer te zien</span>
      </div>
    </div>
    <div className={styles['hero-right-bottom']}>
      <span className={styles['skill-tag']}>React</span>
      <span className={styles['skill-tag']}>Vue.js</span>
      <span className={styles['skill-tag']}>Next.js</span>
      <span className={styles['skill-tag']}>Figma</span>
      <span className={styles['skill-tag']}>SCSS</span>
      <span className={styles['skill-tag']}>TypeScript</span>
      <span className={styles['skill-tag']}>UI/UX</span>
    </div>
  </div>
</section>
  );
}