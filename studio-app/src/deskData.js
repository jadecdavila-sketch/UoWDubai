/* Term-time data for the desk, shaped per DESK_LANDING_BRIEF.md §9. */

export const deskData = {
  course: {
    code: 'MGMT110',
    title: 'Principles of Management',
    week: 4,
    of: 13,
    status: 'Week 3 is signed and with your students. Week 4 waits on your deck.',
  },
  trayItems: [
    {
      id: 'week4-deck',
      title: 'Week 4 · Decision Traps',
      standing: 'waiting on your deck',
      line: "The room is seated. Hand it this week's slides and the proofing room convenes.",
      action: 'Hand the room your deck',
    },
  ],
  ledger: {
    repeated: 'Eleven students asked whether escalation of commitment is the same as loss aversion. Loss aversion is on the Week 5 master; the overlap is flagged there.',
    beyond: 'One question ran beyond the master and was named as such. It is on your desk verbatim.',
  },
  pulse: { editions: 183, week: 3 },
  drawer: { signedCount: 3, line: 'The drawer: three masters signed this term. Every strike recorded as yours.' },
  parser: {
    proposal: 'This reads as MGMT110, Week 5: Risk and Uncertainty. 22 slides, agenda on slide 2.',
  },
}
