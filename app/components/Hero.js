import styles from './Hero.module.css'
import TypewriterName from './TypewriterName'

export default function Hero() {
  return (
    <section>
      <div className={styles.header}>
        <img 
          src="/keith-profile.jpeg"
          alt="Keith Katale"
          width={120}
          height={120}
          className={styles.profilePhoto}
        />
        <TypewriterName />
      </div>
      <p className={styles.hero}>I ship products fast. I fail faster. I keep the useful bits.</p>
      <p className={styles.subhead}>Product-first builder: MVPs, AI tooling, and the messy work between idea and paying customer.</p>
      <p className={styles.location}>📍 Uganda • 17 • Probably debugging something right now</p>
      
      <div className={styles.cta}>
        <a href="mailto:keithkatale1@gmail.com"><button>Email me</button></a>
        <a href="#services"><button className="secondary">Book a paid sprint</button></a>
      </div>
    </section>
  )
}
