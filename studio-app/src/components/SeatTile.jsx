// The seat avatar: initials on a color-coded tile. One source of truth for the
// SE / SW / LS … markers that recur across the desk, the drawer, and the proof log.
export default function SeatTile({ t, c, className = '' }) {
  return <span className={`tile ${c} ${className}`.trim()}>{t}</span>
}
