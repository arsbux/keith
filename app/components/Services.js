import styles from './Services.module.css'
import DollarSign from './icons/DollarSign'
import Ambulance from './icons/Ambulance'
import Target from './icons/Target'

export default function Services() {
  return (
    <section id="services">
      <h2>Services</h2>
      <p className={styles.tagline}>No free work. No hourly chaos. Just outcomes.</p>
      
      <div className={styles.offer}>
        <p><DollarSign size={20} /> I'll build a paid beta MVP if you bring an idea and some budget.</p>
        <p><Ambulance size={20} /> I'll rescue a stalled product if the problem is technical and fixable within a sprint.</p>
        <p><Target size={20} /> I'll consult on launching to Reddit/X for first users — tactical, no fluff.</p>
      </div>

      <div className={styles.pricing}>
        <h3 className={styles.heading}>Pricing signal</h3>
        <p>I don't work for free. I prefer fixed outcomes over hourly chaos. If you want scope, timeline, and a clear ask — I'll give you a quote.</p>
      </div>

      <div className={styles.testimonial}>
        <h3 className={styles.heading}>Client feedback</h3>
        <video 
          controls 
          className={styles.video}
          poster="/video-thumbnail.jpg"
        >
          <source src="/Thanks to @fiverr & especially to @keithkatale for helping me get this business off the ground. .mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.cta}>
        <a href="mailto:keithkatale1@gmail.com"><button>Email me (preferred)</button></a>
        <a href="https://atomiclabs.space" target="_blank" rel="noopener noreferrer"><button className="secondary">View work</button></a>
      </div>
    </section>
  )
}
