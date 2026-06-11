import { useEffect, useState } from 'react'
import SeatTile from './SeatTile.jsx'
import { SEAT_BY_NAME } from '../seats.js'

const LOG = [
  {
    seat: 'deck-parser', seatClass: 'sys',
    line: <>24 slides read &middot; 31 claims indexed &middot; week's arc detected: decision traps</>,
    think: [
      "Slide text extracted, speaker notes included. Claim segmentation: 31 atomic claims, 6 figures, 2 readings referenced. The week's arc was inferred from the agenda on slide 2: framing, arithmetic, escalation, exits, audit. Confidence high; the agenda slide is explicit.",
      "Ambiguities resolved during the pass: slide 9 carries a chart with no caption, so it was paired with the speaker note above it and the pairing tagged #hypothesis for the Archivist. Slides 19 and 20 repeat the same figure at different crops; deduplicated to one claim with two anchors. The two readings (Staw 1976 on slide 22, an HBR piece on slide 23) are cited but not attached, so they are indexed as referenced-not-provided: the room can point at them but cannot quote them.",
      "Nothing in the deck contradicts itself. One soft flag: the definition on slide 14 and the preview wording on slide 6 differ by a clause. Both versions indexed; the drafters will have to choose one, and the trace will show which.",
    ],
  },
  {
    seat: 'The Subject Expert', seatClass: 'draft',
    line: <>Proposing five chunks from your arc: framing, the arithmetic, escalation, designing the exit, the audit.</>,
    think: [
      "The week's hinge is escalation; everything before it builds the trap and everything after designs the exit. So the chunking follows the dramatic arc of a decision rather than the order of the slides. The case wants to live inside chunk 3, not after it: in management, the concept and the case teach each other.",
      "I considered following the slide order instead and rejected it. It reaches escalation at minute fourteen, after the energy of the hour is spent, and it treats the case as an appendix. The discipline does not get to excellent that way: put a person in the trap, let the concept name what is happening to them, then hand the student the tools to design the exit. Five chunks, escalation as the hinge at chunk 3, the case inside it.",
      "Invariants drafted against the deck: chunk 3 must land the slide 14 definition and the slide 15 mechanism, must not re-teach the arithmetic (chunk 2 owns it), and is proven by the chunk 5 checkpoint. I am also tabling one offer, a Gulf logistics example for regional relevance. It is not in the deck, so it goes to the Archivist with that named, not smuggled.",
    ],
  },
  {
    seat: 'The Scriptwriter', seatClass: 'draft',
    line: <>Voicing chunk 1. One take, a person talking. Visual cues marked for the storyboard.</>,
    think: [
      'The first draft wrote like a paper, not a person. Rebuilt sentence lengths for breath. The line "the money is gone whether the project lives or dies" lands best spoken slowly, so a beat is marked after it. No polish on purpose: students trust the unvarnished read.',
      "Register decisions: second person where the deck says 'managers', because the student is eighteen months from being one. Nothing the lungs cannot carry in one take. Each cue is paired to the beat it serves: the decision tree arrives exactly when the script says 'lives or dies', not a beat early, or the eye reads ahead of the ear.",
      "Timing comes out at 4:10 at a speaking pace, marked as an estimate until a voice reads it. One thing I will defend in review: the pause after the money line is scripted, not incidental. If a check wants seconds back, it can have any of them but those two.",
    ],
  },
  {
    seat: 'The Learning Scientist', seatClass: 'eval',
    line: <>Chunk 3 runs 6:40. Attention budget exceeded. <span className="loopmark">↺ Returned to the drafters with named gaps.</span></>,
    think: [
      "6:40, holding two concepts at once: the sunk cost arithmetic and the identity mechanism. The case competes with the mechanism for working memory and both lose. The history sidebar frames but carries no invariant, which makes it severable.",
      "The diagnosis, precisely: the chunk's intrinsic load is the identity mechanism, which is genuinely hard and worth every second of working memory it costs. The extraneous load is the history sidebar and the second pass through the arithmetic, neither of which the mechanism needs and both of which interfere with it. Interference, not length, is the real finding; 6:40 is just where it becomes visible.",
      "I am returning it rather than trimming it myself for a reason of craft: the cut is a drafting decision, and a reviewer who edits stops being a reviewer. Gaps named: runtime over a 4:30 working budget, two concepts where the chunk earns one. The budget stays what it has always been, a working number and a dial for the faculty member, never a law.",
    ],
  },
  {
    seat: 'The Subject Expert', seatClass: 'draft',
    line: <>Split the history sidebar out of chunk 3 and into chunk 2. Redrafted at 4:10.</>,
    think: [
      'The Learning Scientist is right. The sidebar was me being thorough. It moved to chunk 2, where the arithmetic already lives, and it reads as context there. Chunk 3 now does one thing, the identity mechanism, carried by the case. 4:10.',
      "What the move cost, accounted honestly: chunk 3 loses the historical framing that made the trap feel inevitable rather than stupid. I rebuilt that beat inside the case itself, one sentence where the manager's eight months stand in for the history. Chunk 2 absorbs the sidebar cleanly and stays inside its own budget. Invariants unchanged; back to the room for a second pass.",
    ],
  },
  {
    seat: 'The Archivist', seatClass: 'eval',
    line: <>23 claims traced to your deck. 4 tagged as enrichment, ledgered for your review.</>,
    think: [
      'Trace map complete across all five chunks. Nine claims in chunk 3 alone, all but one resolving to slides 12 through 17. The exception is the Gulf logistics example: no source in your deck. It earns consideration on regional relevance. It is not yours, so it wears the tag and enters the ledger for your call.',
      "How the map resolved: 19 claims anchor to a single slide, 4 span two. The slide 14 definition appears in the script in the deck's exact wording, which I note because paraphrase is where drift starts. The readings on slides 22 and 23 are cited but not provided, so the script may point to them and may not quote them; the drafters respected that line.",
      "On the Gulf example: I rule on accounted-for, never on true or useful. It wears the enrichment tag, sits in the ledger with the Subject Expert's stated reason, and waits for the strike or the keep. My gate did not fire this pass: nothing arrived at the script unaccounted.",
    ],
  },
  {
    seat: 'The Learning Designer', seatClass: 'eval',
    line: <>Objectives, activities, and checkpoints aligned across all five chunks.</>,
    think: [
      "Walked the chain backward from the checkpoint: chunk 5 asks students to diagnose a live escalation, the case in chunk 3 models that diagnosis, and the concept gives it a name. Nothing decorative survived the walk. Chunk 4's kill criteria approach the same objective from the design side, which is reinforcement, not repetition.",
      "Verb audit, since alignment lives or dies on observable verbs: the objective says diagnose, the case models a diagnosis, and the checkpoint catches one. 'Understand' appeared once in an early invariant and was rewritten before it could orphan anything. Two candidates for decoration did not survive the walk: a motivational quote on slide 11, and a second worked example in chunk 2 that repeated the first without adding a condition.",
      "One thing flagged without gating: the chunk 5 checkpoint asks students to name an escalation of their own. That is the strongest possible alignment with the objective, and it is also personal exposure in week 4. Whether the cohort is ready is a judgment about this room, not about design. It goes to the reserved list with that framing, and my gate stays quiet.",
    ],
  },
  {
    seat: 'The Provocateur', seatClass: 'eval',
    line: <>Chunk 3 opens too safely. Argued for a cold open on a question. <span className="loopmark">The Learning Scientist holds. Collision logged.</span></>,
    think: [
      'The chunk is sound, aligned, accounted for, and forgettable in its first minute. The film question would cost forty seconds and buy the next four minutes of attention, because every student has lived it.',
      "For honesty's sake, the idea I withdrew first: a joke about a famous corporate collapse to open the chunk. It aimed at the laugh, not the mechanism, and would have flunked the coherence check as a seductive detail anyway. Withdrawn on the record before anyone had to gate it. The film question is different in kind: the example is the student's own before the concept ever arrives.",
      'The Learning Scientist answers with the strongest version of the counter-position: a cold open spends attention before there is a frame to hang it on. We are both right, which is what the ledger is for. Logged, not conceded; the dial at the desk plays both readings, and the faculty member can judge the difference in the script instead of in the abstract.',
    ],
  },
  {
    seat: 'The Design Chair', seatClass: 'orch',
    line: <>Assembling the master, the trace, and the collision-ledger. Three calls reserved for your judgment.</>,
    think: [
      'Agreements: alignment, load after revision, audiovisual pairing, provenance. One collision stands on the opening, rigor against memorability; I shipped the conservative order and kept the bold reading a dial away at your desk. A room with no collisions is a room not listening.',
      "Why the conservative opening shipped, since by-rule should mean a rule you can read: when two readings survive every check, I ship the one closer to the faculty member's own deck and keep the other a dial away. The deck opens on the week-3 recap, so the recap opening ships. That is a tie-break by provenance, not a ruling that the Provocateur is wrong; if I broke ties on taste I would be doing the faculty member's job with worse information.",
      "The trace is assembled in full: who drafted what, which checks fired, what was returned and why, and the one collision with both positions intact. Reserved for the desk, by name: the Gulf enrichment (the Archivist holds the ledger), the boldness of the opening (the dial plays both), and the checkpoint's exposure (the Learning Designer named it, no one gated it). Three calls, three owners on record.",
    ],
  },
  {
    seat: 'The House Review', seatClass: 'house',
    line: <>UOWD's instructional designers vet the master against the institution's standards, reading the room's trace. Signed off; released to your desk.</>,
    think: [
      'Every master is reviewed at launch; a sampled few once the room earns it. That dial is the designers’ to hold. The trace made the review a reading, not a re-derivation: one query on the Gulf enrichment, answered by the ledger.',
      "For this master in particular: the collision ledger was checked against the institution's accessibility and assessment standards, and neither reading of the opening touches them. Signed off and released to the desk, with the sampling dial noted for next term.",
    ],
  },
]

function LogEntry({ entry, shown }) {
  const [open, setOpen] = useState(false)
  const seat = SEAT_BY_NAME[entry.seat]
  return (
    <div className="log-entry">
      <div className={'log-line' + (shown ? ' show' : '')}>
        <span className="l-avatar">{seat && <SeatTile t={seat.t} c={seat.c} className="l-tile" />}</span>
        <span className={'l-seat ' + entry.seatClass}>{entry.seat}</span>
        <span>{entry.line}</span>
      </div>
      <div className={'think' + (shown ? ' show' : '') + (open ? ' open' : '')}>
        <div className="think-body">
          {entry.think.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <button className="think-more" aria-expanded={open} onClick={() => setOpen(o => !o)}>
          {open ? 'collapse the thinking' : 'expand the thinking'}
        </button>
      </div>
    </div>
  )
}

export default function RehearsalScreen({ done, onDone, onToPodium }) {
  const [shownCount, setShownCount] = useState(done ? LOG.length : 0)

  useEffect(() => {
    if (done) return
    const timers = LOG.map((_, i) =>
      setTimeout(() => {
        setShownCount(i + 1)
        if (i === LOG.length - 1) onDone()
      }, 650 * (i + 1))
    )
    return () => timers.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const ready = done && shownCount === LOG.length

  return (
    <div className="screen on" id="screen-2">
      <div className="podium-head">
        <div>
          <div className="sc-kicker">Step Two</div>
          <h1 className="sc-title">The room is <em>proofing</em>.</h1>
          <p className="sc-lede">The room's drafters propose. Its reviewers push back, with named gaps. The loop runs until the room agrees, or the disagreement is worth bringing to you.</p>
        </div>
        <div className="podium-cta">
          {!ready && (
            <div className="rehearsal-status">The seats are taking their places…</div>
          )}
          <button className="cta" disabled={!ready} onClick={onToPodium}>To the writing room</button>
        </div>
      </div>

      <div className="console-log">
        {LOG.map((entry, i) => (
          <LogEntry entry={entry} shown={i < shownCount} key={i} />
        ))}
      </div>

    </div>
  )
}
