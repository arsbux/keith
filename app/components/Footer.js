import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.tagline}>Built in Uganda. Shipping &gt; talking. Pay for results, not promises.</p>
      
      <div className={styles.links}>
        <a href="https://twitter.com/keithkatale" target="_blank" rel="noopener noreferrer">X/Twitter</a>
        <a href="mailto:keithkatale1@gmail.com">Email</a>
        <a href="https://wa.me/256744820648" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="https://discord.com/users/keithkatale" target="_blank" rel="noopener noreferrer">Discord</a>
        <a href="https://reddit.com/u/just_keith_" target="_blank" rel="noopener noreferrer">Reddit</a>
        <a href="https://t.me/keithkatale" target="_blank" rel="noopener noreferrer">Telegram</a>
      </div>

      <p className={styles.bio}>17 • builder • I ship small products that either work or teach me something.</p>
      <p className={styles.footnote}>PS: If you're reading this, you're probably procrastinating. Go ship something.</p>
    </footer>
  )
}
