export default function Ambulance({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 16v-1"/>
      <path d="M14 16v-1"/>
      <path d="M16 6h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
      <path d="M4 14h12"/>
      <path d="M4 8h12"/>
      <circle cx="7" cy="18" r="2"/>
      <circle cx="17" cy="18" r="2"/>
      <path d="M2 8v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
      <path d="M10 6V4"/>
      <path d="M14 6V4"/>
    </svg>
  )
}
