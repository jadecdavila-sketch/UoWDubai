import { SEATS } from '../seats.js'

// The seat avatar: the persona's portrait, color-coded and keyed by initials.
// One source of truth for the SE / SW / LS … markers across the desk, the
// drawer, the proof log, and the convene-the-room button.
//   <SeatTile t="SE" />          large tile
//   <SeatTile t="DC" mini />     mini tile (mtile)
// The initials show through as a fallback if the portrait is missing.
export default function SeatTile({ t, c, className = '', mini = false }) {
  const meta = SEATS[t] || {}
  const color = c || meta.c || ''
  const base = mini ? 'mtile' : 'tile'
  return (
    <span className={`${base} ${color} ${className}`.trim()} title={meta.name || t}>
      {meta.img
        ? <img src={`${import.meta.env.BASE_URL}assets/personas/${meta.img}.jpg`} alt={meta.name || t} />
        : t}
    </span>
  )
}
