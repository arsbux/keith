import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.tagline}>Built in Uganda. Shipping &gt; talking. Pay for results, not promises.</p>
      
      <div className={styles.links}>
        <a href="https://twitter.com/keithkatale" target="_blank" rel="noopener noreferrer">X/Twitter</a>
        <a href="mailto:keithkatale1@gmail.com">Email</a>
      </div>

      <p className={styles.bio}>17 • builder • I ship small products that either work or teach me something.</p>
      <p className={styles.footnote}>PS: If you're reading this, you're probably procrastinating. Go ship something.</p>
    </footer>
  )
}
