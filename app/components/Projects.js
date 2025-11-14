import styles from './Projects.module.css'
import Skull from './icons/Skull'
import Flask from './icons/Flask'
import Check from './icons/Check'
import Rocket from './icons/Rocket'

const projects = [
  {
    name: "Atomic Labs",
    desc: "14-day MVP development studio",
    icon: Rocket,
    status: "Active",
    statusColor: "#10b981",
    link: "https://atomiclabs.space",
    lesson: "Building demo-ready MVPs and web apps for founders. Full-stack development with hosting, auth, payments, and analytics."
  },
  {
    name: "Flight Labs",
    desc: "Development agency",
    icon: Check,
    status: "Active",
    statusColor: "#10b981",
    link: "https://flightlabs.agency",
    lesson: "Agency work focused on rapid prototyping and product development. Learning to scale client relationships."
  },
  {
    name: "Cue AI",
    desc: "Marketing intelligence for founders",
    icon: Flask,
    status: "Testing",
    statusColor: "#f59e0b",
    link: "https://cue.atomiclabs.space",
    lesson: "AI-powered competitor analysis and marketing playbooks. Helps first-time founders find their first customer."
  },
  {
    name: "Proof 3",
    desc: "On-chain credential verification",
    icon: Skull,
    status: "Archived",
    statusColor: "#ef4444",
    link: "https://proof3.atomiclabs.space",
    lesson: "Blockchain-based credential system. Built the full platform but struggled with market fit. Learned: solve a real pain first."
  },
  {
    name: "Proofly",
    desc: "Testimonial collection tool",
    icon: Skull,
    status: "Archived",
    statusColor: "#ef4444",
    link: "https://proofly.atomiclabs.space",
    lesson: "Free testimonial collection for small businesses. Got users but no monetization path. Lesson: free users ≠ customers."
  },
  {
    name: "Swift",
    desc: "AI-powered ideation platform",
    icon: Skull,
    status: "Archived",
    statusColor: "#ef4444",
    link: "https://swift.flightlabs.agency",
    lesson: "Idea generation tool with AI. Zero retention after initial signups. Lesson: onboarding > features."
  }
]

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      
      <div className={styles.grid}>
        {projects.map((project, i) => {
          const Icon = project.icon
          const content = (
            <>
              <div className={styles.projectHeader}>
                <div className={styles.iconWrapper}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className={styles.heading}>{project.name}</h3>
                  <p className={styles.desc}>{project.desc}</p>
                </div>
                <span className={styles.status} style={{ color: project.statusColor }}>
                  {project.status}
                </span>
              </div>
              <p className={styles.lesson}>{project.lesson}</p>
            </>
          )
          
          return project.link ? (
            <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className={styles.project}>
              {content}
            </a>
          ) : (
            <div key={i} className={styles.project}>
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}
