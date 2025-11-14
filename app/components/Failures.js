import styles from './Failures.module.css'
import X from './icons/X'

const failures = [
  "Took on agency clients I couldn't scale — lost time, learned scope control.",
  "Built features because they sounded cool, not because users asked — wasted months.",
  "Payment integrations from Uganda are harder than expected — workaround knowledge now exists, but it costs time.",
  "Thought I could do everything alone — turns out asking for help is a skill too."
]

export default function Failures() {
  return (
    <section>
      <h2>Failures & what I learned</h2>
      <p className={styles.intro}>I keep these notes public so I don't repeat them. (Narrator: he repeated some of them.)</p>
      
      <ul className={styles.list}>
        {failures.map((failure, i) => (
          <li key={i}>
            <X size={16} />
            {failure}
          </li>
        ))}
      </ul>
    </section>
  )
}
