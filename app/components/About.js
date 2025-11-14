import styles from './About.module.css'

export default function About() {
  return (
    <section>
      <h2>About</h2>
      <p className={styles.text}>I'm a developer and founder who prefers working on product over providing services. I build small, focused software — MVPs, AI automations, and growth tooling — that I can improve and reuse. I've shipped paid projects, learned from client failures, and stopped wasting time on work that doesn't scale.</p>
      
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>~$2k</span>
          <span className={styles.statLabel}>First MVP revenue</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>70%</span>
          <span className={styles.statLabel}>Triage time saved</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>∞</span>
          <span className={styles.statLabel}>Lessons learned</span>
        </div>
      </div>
      
      <div className={styles.honest}>
        <h3 className={styles.heading}>The honest version</h3>
        <p className={styles.text}>I learned to build by shipping things people paid for and by breaking commitments to clients I couldn't support. I'm still young and messy: I'm learning Svelte, navigating payment limits from Uganda, and figuring out which ideas deserve persistence. My metric is simple: did it get real users or revenue? If not, it's an experiment, not a product.</p>
      </div>

      <div className={styles.builds}>
        <h3 className={styles.heading}>What I build</h3>
        <ul>
          <li>Small, testable MVPs — one or two features, launch fast, measure.</li>
          <li>AI automations and agents that remove repetitive work.</li>
          <li>Growth funnels tuned for communities (Reddit/X).</li>
          <li>Tooling that founders can run without constant dev hours.</li>
        </ul>
      </div>

      <div className={styles.builds}>
        <h3 className={styles.heading}>Skills</h3>
        <ul>
          <li>Full-stack development (React, Next.js, Node.js)</li>
          <li>Website design & UI/UX</li>
          <li>Marketing & growth strategy</li>
          <li>Graphics design & video editing</li>
        </ul>
      </div>
    </section>
  )
}
