// The room's roster: canonical seat name → its avatar initials and tile color.
// deck-parser (a sys voice) and the House Review (the human house) are not seats
// and carry no persona tile, matching how they appear elsewhere in the app.
export const SEATS = {
  'The Subject Expert': { t: 'SE', c: 't-terra' },
  'The Scriptwriter': { t: 'SW', c: 't-terra' },
  'The Provocateur': { t: 'PV', c: 't-terra' },
  'The Learning Designer': { t: 'LD', c: 't-sage' },
  'The Learning Scientist': { t: 'LS', c: 't-sage' },
  'The Multimedia Designer': { t: 'MD', c: 't-sage' },
  'The Archivist': { t: 'AR', c: 't-sage' },
  'The Design Chair': { t: 'DC', c: 't-gold' },
}
