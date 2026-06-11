// The room's roster, keyed by the seat's initials: its tile color, portrait
// thumbnail, and full name. Initials are unique per seat, so every avatar in
// the app can be resolved from them.
// deck-parser (a sys voice) and the House Review (the human house) are not seats
// and carry no persona tile, matching how they appear elsewhere in the app.
export const SEATS = {
  SE: { t: 'SE', c: 't-terra', img: 'subject-expert', name: 'The Subject Expert' },
  SW: { t: 'SW', c: 't-terra', img: 'scriptwriter', name: 'The Scriptwriter' },
  PV: { t: 'PV', c: 't-terra', img: 'provocateur', name: 'The Provocateur' },
  LD: { t: 'LD', c: 't-sage', img: 'learning-designer', name: 'The Learning Designer' },
  LS: { t: 'LS', c: 't-sage', img: 'learning-scientist', name: 'The Learning Scientist' },
  MD: { t: 'MD', c: 't-sage', img: 'multimedia-designer', name: 'The Multimedia Designer' },
  AR: { t: 'AR', c: 't-sage', img: 'archivist', name: 'The Archivist' },
  DC: { t: 'DC', c: 't-gold', img: 'design-chair', name: 'The Design Chair' },
}

// Same roster, keyed by full name (for the proof log, which speaks in names).
export const SEAT_BY_NAME = Object.fromEntries(
  Object.values(SEATS).map(s => [s.name, s]),
)
