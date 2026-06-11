/* Sample-data content shared across screens, ported verbatim from the prototype. */

export const tunerDescs = {
  provocateur: 'Argues for the bold reading, costed in seconds and pointed at the concept. The dial plays both readings in the script below.',
  scientist: 'Holds the runtime budget as the room’s working number and a dial, never a law.',
  scriptwriter: 'Writes the register, and the silence. A warmer read is a redraft, not a filter.',
  multimedia: 'Pairs the ear and the eye. Every cut is logged with its cost and restorable from the trace.',
}

export const tunerChips = {
  scientist: ['As budgeted', 'Stricter'],
  scriptwriter: ['As drafted', 'Warmer'],
  multimedia: ['As audited', 'Restore the cut'],
}

export const perfs = {
  straight: {
    base: "A manager has spent eight months and most of a budget on a system that is failing. The choice ahead feels financial. It is psychological: the money is gone whether the project lives or dies. What escalates commitment is not the arithmetic but the identity. To stop is to admit the original decision was wrong, and so the spending continues, protecting the decider rather than the decision.",
    seam: "",
  },
  kitchen: {
    base: "Picture a chef who has spent the whole evening reducing a sauce that has already broken. Every minute spent stirring feels like a reason to keep stirring, and not one of those minutes will fix it. The kitchen that plates the broken sauce is protecting the chef's pride, not the diner's meal. That is escalation of commitment: the cost is sunk whether you serve it or start again.",
    seam: "Where the kitchen ends: dinner service resets every night. Corporate commitments compound for years, which is why they are harder to walk away from.",
  },
  f1: {
    base: "A team has spent the season's development budget on a car concept that does not work. Every upgrade package now chases the money already burned, because switching concepts mid-season admits the winter was wasted. The budget is gone either way. Escalation of commitment is bringing upgrades to a dead end because the dead end was expensive.",
    seam: "Where the season ends: the regulations reset every year and force the concept question. Most organizations never get a winter; the forced rethink has to be designed in.",
  },
  bakery: {
    base: "You are four hours into a loaf that did not rise, and dinner is at eight. Every hour invested argues for coaxing the dough one more hour, and none of those hours will bring the yeast back. The flour is spent whether you bake it or bin it. Escalation of commitment is baking the brick to honor the afternoon.",
    seam: "Where the bakery ends: a failed loaf costs an afternoon and some pride. Organizational doughs have salaries and quarters attached, which is why binning one needs a rule, not a feeling.",
  },
  streak: {
    base: "You are six losses deep and still queuing, not because the next match looks winnable but because logging off makes the losses final. Tonight's rank is gone either way. Escalation of commitment is playing to protect the session that already happened instead of the match in front of you.",
    seam: "Where the ladder ends: the queue resets and nobody remembers your Tuesday. Organizations remember; their losing streaks compound through budgets and reputations, so the stop rule has to be written before the streak.",
  },
  group: {
    base: "Your group is three weeks into an approach that is not working, and everyone at the table knows it. Nobody says so, because three weeks of meetings argue for the approach all by themselves. The weeks are spent whether you pivot or persist. Escalation of commitment is defending the plan for the meetings it cost, not the grade it will earn.",
    seam: "Where the term ends: the deadline forces the reckoning whether the group designs it or not. Working life has no syllabus; the checkpoint that saves the project has to be built.",
  },
  deadline: {
    base: "The course is not working, the drop deadline is Friday, and you have already survived six weeks of it. Those six weeks are the argument for staying, and they are gone whichever box you tick. Escalation of commitment is finishing a course to honor the suffering it already caused.",
    seam: "Where the semester ends: a dropped course costs credits and some pride, on a printed schedule. Careers have no drop deadline on them, which is why this one is practice.",
  },
  cricket: {
    base: "A franchise pays record auction money for a star batsman whose form has gone. The fee was spent on auction day, yet he walks out to open every innings, because dropping him would put a public price on the selectors' mistake. Picking the eleven should be about the next innings. Escalation of commitment is selecting the side to defend the last decision instead of the next result.",
    seam: "Where the series ends: form is public and the table forces a reckoning. Most organizations publish no scorecard, so the reckoning has to be designed in.",
  },
  gaming: {
    base: "You are eighty hours into a game you stopped enjoying around hour thirty. Every session now is not for the fun; it is to justify the eighty. The hours are spent whether you finish or quit. Escalation of commitment is grinding to protect the past self who chose the game, instead of the present self who would rather be playing anything else.",
    seam: "Where the game ends: quitting costs pride and nothing else. Organizations escalate with budgets, careers, and people attached, which is why the exit has to be designed, not just felt.",
  },
  football: {
    base: "A club pays a record fee for a striker who does not score. The fee left the building on the day of the transfer, yet he keeps starting every match, because benching him would put a public price on the board's mistake. Escalation of commitment is picking the team to defend the last decision instead of the next result.",
    seam: "Where the pitch ends: a season has a league table that forces the reckoning. Most organizations have no relegation, so the reckoning has to be designed in.",
  },
}

export const themes = {
  sports: [['football', 'Football'], ['cricket', 'Cricket'], ['f1', 'Formula 1']],
  food: [['kitchen', 'The kitchen'], ['bakery', 'The bakery']],
  gaming: [['gaming', 'The grind'], ['streak', 'The losing streak']],
  campus: [['group', 'The group project'], ['deadline', 'The drop deadline']],
}

/* Each seat's full brief: its lens, status chips, what it saw, what it ran,
   its named checks, the tensions it holds, what it routes to the desk, and a
   close that defers the verdict. Modeled on the council-read anatomy. */
export const briefs = {
  subject: {
    t: 'SE', c: 't-terra', name: 'The Subject Expert', ep: 'drafting seat · the craft seat · Management holds it first',
    chips: [{ k: '', t: 'five chunks proposed' }, { k: 'ok', t: 'invariants locked' }, { k: 'ok', t: '1 gap returned · resolved' }],
    see: 'Escalation is the hinge of week 4. Everything before it builds the trap; everything after designs the exit. The case belongs inside the concept, because in management the two teach each other, and neither teaches alone.',
    ran: { label: 'How I read your deck', text: 'Your 24 slides carry one explicit arc, the agenda on slide 2: framing, arithmetic, escalation, exits, audit. I followed the arc, not the slide order. The slide order reaches escalation at minute fourteen, after the energy of the hour is spent, and it treats the case as an appendix. The discipline teaches by dilemma: put a person in the trap, let the concept name what is happening to them, then hand the student the exit.' },
    checks: [
      { name: 'The chunking', lens: 'five chunks on the arc', text: 'Framing, the arithmetic, escalation, designing the exit, the audit. The hinge sits at chunk 3 and the case lives inside it, not after it.' },
      { name: 'The invariants', lens: 'what must land', text: 'Chunk 3 holds the slide 14 definition and the slide 15 mechanism, avoids re-teaching the arithmetic chunk 2 owns, and is proven by the chunk 5 checkpoint.' },
      { name: 'The case', lens: 'a decision, not an anecdote', text: 'The case turns on a choice someone has to make, because the choosing is what teaches. The manager’s eight months now carry the history the sidebar used to.' },
      { name: 'The offer', lens: 'tabled, never smuggled', text: 'The Gulf logistics example is mine, not yours. It went to the Archivist named as an addition, and it wears the tag in your script.' },
    ],
    tensions: [
      'The Learning Scientist returned my first chunk 3 and was right to. Thoroughness is my failure mode; the history sidebar framed but did not carry, and it moved to chunk 2.',
      'The Gulf example is regionally apt and not evidenced in your deck. Apt is my judgment; yours is the one that ships.',
    ],
    desk: [
      'Does the Gulf consolidation read as current to your cohort, or already dated? I will swap it for a case anchored in your readings if you would rather own the example.',
      'Chunk 5 asks students to name an escalation of their own. The exposure is right for the objective; whether it is right for week 4 is your room, not my draft.',
    ],
    closing: {
      label: 'My drafting read',
      text: 'The master teaches the week as a decision, the way the discipline gets to excellent. Five chunks, one hinge, one case that turns on a choice.',
      move: 'The checkpoint’s exposure. Soften it and chunk 3 needs a second worked example, so the diagnosis is modeled twice before it is performed.',
      caveat: 'The teaching is mine to draft, never to grade. The reviewers check it, the Chair assembles it, and the strike stays yours.',
    },
  },
  scriptwriter: {
    t: 'SW', c: 't-terra', name: 'The Scriptwriter', ep: 'drafting seat · writes for the ear',
    chips: [{ k: '', t: 'five scripts voiced' }, { k: 'ok', t: '4:10 · an estimate' }, { k: 'ok', t: 'silence scripted' }],
    see: 'The teaching draft wrote like a paper, and the ear cannot re-read. I rebuilt it as a person talking: breath-length sentences, one idea each, no polish on purpose. Students forgive a stumble; they never forgive a lecture that sounds laminated.',
    ran: { label: 'How I rendered it', text: 'Second person where your deck says managers, because the student is eighteen months from being one. Every sentence cut to what the lungs carry in one take. Timed at a speaking pace to 4:10 and marked as an estimate, because a script is not a runtime until a voice reads it.' },
    checks: [
      { name: 'The register', lens: 'a person talking', text: 'No paper survives the read-aloud test in this chunk. One idea per sentence, each one breath long, the way a colleague explains a trap they have seen close on someone.' },
      { name: 'The timing', lens: 'held as an estimate', text: '4:10 at a speaking pace, marked honest. If the room’s presenter reads slower, the estimate moves and the budget conversation reopens; nothing is laminated to the number.' },
      { name: 'The cues', lens: 'one per beat', text: 'Each visual cue lands exactly on the beat it serves. The decision tree arrives on “lives or dies”, not a beat early, or the eye reads ahead of the ear.' },
      { name: 'The silence', lens: 'scripted, not incidental', text: 'A pause is written after the line about the money already being gone. That silence is protecting the concept; it is the one pair of seconds no check may have back.' },
    ],
    tensions: [
      'A warmer read is a redraft, not a filter. If you dial my register, I rewrite the sentences; I do not sand them.',
      'If you turn the Provocateur up, I write and hold the silence after the film question. A question without its silence is just a rhetorical flourish.',
    ],
    desk: [
      'Will the room’s presenter voice this, or will you record it yourself? The pacing marks change for a live reader.',
      'The pause after the money line: hold it tight, or let it breathe a beat longer for a lecture-hall screen? I have marked the tight read.',
    ],
    closing: {
      label: 'My script read',
      text: 'Chunk 3 speaks like one person who knows the trap from the inside. One take, one idea per breath, the silence where the concept needs room to land.',
      move: 'The opening. Either reading changes the first forty seconds of register, and the dial plays both in place.',
      caveat: 'The content is the Subject Expert’s, the pairing rules are the Multimedia Designer’s, and the taste is yours.',
    },
  },
  designer: {
    t: 'LD', c: 't-sage', name: 'The Learning Designer', ep: 'reviewing seat · owner of alignment · holds a gate',
    chips: [{ k: 'ok', t: 'gate quiet' }, { k: 'ok', t: 'verb audit clean' }, { k: 'ok', t: 'five chunks aligned' }],
    see: 'One objective: diagnose escalation in a live decision. This chunk names it, the case models it, and chunk 5 makes the student perform it. Nothing decorative survived the walk.',
    ran: { label: 'The walk I ran', text: 'Backward from the checkpoint, the only honest direction. Chunk 5 asks students to diagnose a live escalation; the case in chunk 3 models that diagnosis; the concept gives it a name. Chunk 4’s kill criteria approach the same objective from the design side, which is reinforcement, not repetition.' },
    checks: [
      { name: 'The verb audit', lens: 'observable, catchable', text: 'Diagnose can be caught by a checkpoint. “Understand” appeared once in an early invariant and was rewritten before it could orphan anything.' },
      { name: 'The chain', lens: 'objective to activity to checkpoint', text: 'Every chunk points at the same outcome. No orphans, and no checkpoint testing what was never taught.' },
      { name: 'The decoration cut', lens: 'what the walk removed', text: 'Two candidates did not survive: a motivational quote on slide 11, and a second worked example in chunk 2 that repeated the first without adding a condition.' },
      { name: 'My gate', lens: 'why it stayed quiet', text: 'An orphaned or misaligned chunk does not ship, regardless of how good it is. Nothing in this master came close; the gate watched and had nothing to do.' },
    ],
    tensions: [
      'The chunk 5 checkpoint asks students to name an escalation of their own. That is the strongest possible alignment with the objective, and it is also personal exposure in week 4. Design says keep it; the reading of your room is not mine to make.',
    ],
    desk: [
      'How exposed may week 4 be? A gentler variant exists: diagnose a case the room supplies rather than your own. It costs some transfer and buys some safety, and either passes my check.',
    ],
    closing: {
      label: 'My alignment read',
      text: 'The chain holds from objective to checkpoint across all five chunks. Cut anything you like at the desk except the checkpoint; the week is aimed at it.',
      move: 'The checkpoint’s framing. Move it from “your escalation” to “an escalation you have seen” and the alignment survives while the exposure drops.',
      caveat: 'I rule on alignment, never on content or taste. The Subject Expert owns the teaching; the exposure call is yours.',
    },
  },
  scientist: {
    t: 'LS', c: 't-sage', name: 'The Learning Scientist', ep: 'reviewing seat · owner of attention',
    chips: [{ k: 'ok', t: '4:10 · inside budget' }, { k: 'ok', t: '1 gap returned · resolved' }, { k: 'coll', t: 'position logged' }],
    see: 'The first draft asked working memory to hold two concepts at once, and both lost. The revision does one thing, the identity mechanism, carried by one case. Attention is a budget, and this chunk now spends it where the teaching is.',
    ran: { label: 'The budget I held', text: 'A 4:30 working number for a narrated chunk, held as the room’s dial and never a law. The first draft ran 6:40 holding the sunk-cost arithmetic and the identity mechanism together; interference, not length, was the real finding. 6:40 is just where it became visible.' },
    checks: [
      { name: 'The load meter', lens: 'one concept per chunk', text: 'After the revision, chunk 3 carries the identity mechanism alone. The arithmetic lives in chunk 2 with its own budget, and the two no longer compete.' },
      { name: 'The cut I named', lens: 'located, not made', text: 'The history sidebar framed but carried no invariant, which made it severable. I named the gap and returned it; the cut itself is a drafting decision, and a reviewer who edits stops being a reviewer.' },
      { name: 'The sequence', lens: 'names before mechanisms', text: 'The concept is named on the slide 14 definition before the mechanism asks anything of the student. A mechanism without a name has nowhere to live.' },
      { name: 'The opening', lens: 'costed, not blocked', text: 'A cold open spends attention before there is a frame to hang it on, and the start of a chunk is when the budget is fullest. If you dial it anyway, the forty seconds are costed in the ledger.' },
    ],
    tensions: [
      'The Provocateur and I are both right about the opening, which is why the ledger exists. Rigor against memorability is a taste call, and I do not get to win it by default.',
    ],
    desk: [
      'If you turn the opening up, do you want the forty seconds repaid by trimming the case, or accepted as 4:50? Either is defensible; the ledger will cost whichever you choose.',
    ],
    closing: {
      label: 'My attention read',
      text: '4:10, one concept, one case, names before mechanisms. The chunk now spends its budget on the teaching and nothing else.',
      move: 'The opening dial. It is the only spend left in this chunk that I did not get to audit in advance.',
      caveat: 'The budget is a working number and a dial, never a law. Dial it; my position stands in the ledger either way.',
    },
  },
  multimedia: {
    t: 'MD', c: 't-sage', name: 'The Multimedia Designer', ep: 'reviewing seat · pairs the ear and the eye',
    chips: [{ k: 'ok', t: 'every cue paired' }, { k: 'ok', t: '1 cut · logged' }, { k: 'ok', t: 'bold opening passes' }],
    see: 'The ear and the eye must carry different halves of the same idea. Narration over the decision tree works; narration over its own transcript would not. Every cue in this chunk passes that test.',
    ran: { label: 'The audit I ran', text: 'Every cue against the principles that hold for narrated video: coherence, so nothing vivid points away from the mechanism; redundancy, so the screen never captions what the voice is saying; signaling and contiguity, so the eye is guided to the right place on the right beat.' },
    checks: [
      { name: 'The pairing', lens: 'speech with image, never with text', text: 'One cue per beat across the chunk. The decision tree greys its costs on both branches exactly as the narration says the money is gone either way.' },
      { name: 'The cut', lens: 'the seductive detail', text: 'One vivid anecdote about a famous overrun pointed nowhere. It would have been remembered instead of the mechanism. Cut, and logged in the trace with what it would have cost to keep.' },
      { name: 'The bold opening', lens: 'audited, not endorsed', text: 'If you dial the Provocateur up, the film question passes my audit clean: one cue, one beat, a black slide with the question alone, pointed straight at the concept.' },
      { name: 'The restore path', lens: 'every cut reversible', text: 'Nothing I cut is gone. Each removal sits in the trace with its cost; restore it from there if your taste differs from mine.' },
    ],
    tensions: [
      'The anecdote I cut was the best image in the chunk and the worst thing for it. The vivid and the instructive are not the same axis, and when they split, I cut vivid.',
    ],
    desk: [
      'The black-slide opening, if dialed: hold the question alone, or pair it with a film still? I hold for alone; a still gives the eye an answer before the ear has asked.',
    ],
    closing: {
      label: 'My pairing read',
      text: 'Every beat of speech has its image and no image competes with the voice. The chunk watches the way it listens.',
      move: 'The opening cue. Both readings pass, but they ask different first images of the storyboard, and the storyboard is built from this script.',
      caveat: 'The script is the Scriptwriter’s, the attention budget the Learning Scientist’s. I audit the seam between them; the taste is yours.',
    },
  },
  archivist: {
    t: 'AR', c: 't-sage', name: 'The Archivist', ep: 'reviewing seat · your material, accounted for · holds a gate',
    chips: [{ k: 'ok', t: 'gate quiet' }, { k: 'ok', t: '23 traced · 4 enrichments' }, { k: 'gold', t: 'ledger open' }],
    see: 'Nine claims in this chunk. All but one resolve to slides 12 through 17. I rule on accounted-for, never on true; the deck is your thinking, and your thinking is not mine to audit.',
    ran: { label: 'The trace I keep', text: 'Every claim in the script either traces to a slide in your deck or wears a tag naming it as the room’s addition. Across the master: 23 claims traced and 4 enrichments tagged and ledgered. Nineteen anchor to a single slide; four span two.' },
    checks: [
      { name: 'The wording', lens: 'verbatim where it matters', text: 'The slide 14 definition appears in the script in your deck’s exact words. I note exactness because paraphrase is where drift starts.' },
      { name: 'The readings', lens: 'cited, not quoted', text: 'Staw on slide 22 and the Harvard piece on slide 23 are cited in your deck but not provided. The script may point at them and may not quote them. The drafters respected the line.' },
      { name: 'The enrichment', lens: 'tagged for your strike', text: 'The Gulf logistics example has no anchor in your deck. It wears the tag, sits in the ledger with the Subject Expert’s stated reason, and waits for your call.' },
      { name: 'My gate', lens: 'why it stayed quiet', text: 'An unaccounted claim does not ship, and no quality argues it down. Nothing arrived at the script unaccounted this week.' },
    ],
    tensions: [
      'The Gulf example is probably useful and certainly not yours. Useful is not my ruling to make; accounted-for is, and it is accounted for as ours, not yours.',
    ],
    desk: [
      'Strike or keep the Gulf example; the record holds the call as yours either way. If you keep it, consider anchoring it in next term’s deck, so it becomes yours.',
    ],
    closing: {
      label: 'My provenance read',
      text: 'The master is fully accounted for: every claim traced or tagged, every tag ledgered, every cut restorable. Open any sentence and the record shows where it came from.',
      move: 'Nothing moves my read; that is the point of it. The trace stays the same whichever way your taste runs.',
      caveat: 'I keep the record. The Subject Expert owns the content, the room owns its additions until you strike them, and the strike is yours.',
    },
  },
  provocateur: {
    t: 'PV', c: 't-terra', name: 'The Provocateur', ep: 'reviewing seat · the counterweight · seated on purpose',
    chips: [{ k: 'coll', t: 'collision standing' }, { k: '', t: '1 idea withdrawn' }, { k: 'gold', t: 'dial wired' }],
    see: 'Sound, aligned, accounted for, and forgettable in its first minute. Boredom is a failure mode the other checks cannot see, and no other seat is asking about tomorrow.',
    ran: { label: 'The audit no other seat runs', text: 'I read the chunk as the tired student at midnight: the one it passes every other check for, and who skips it at minute one anyway. The other seats audit whether the chunk teaches. I audit whether anyone will still be there when it does.' },
    checks: [
      { name: 'The first minute', lens: 'where chunks die', text: 'The shipped opening recaps week 3 before it asks anything of the student. Safe, correct, and the easiest sixty seconds to scroll past in the whole master.' },
      { name: 'The film question', lens: 'forty seconds for four minutes', text: 'Every student has finished a film they were not enjoying. The question is the concept wearing the student’s own life, and it passes the pairing audit: one cue, one beat, pointed at the mechanism.' },
      { name: 'The withdrawal', lens: 'on the record', text: 'My first idea was a joke about a famous collapse. It aimed at the laugh, not the mechanism, and I withdrew it before anyone had to gate it. The counterweight audits itself, or it is just noise.' },
      { name: 'Tomorrow', lens: 'the question I always ask', text: 'Will anyone remember this chunk tomorrow? The mechanism, yes; the case carries it. The opening, only if you dial it.' },
    ],
    tensions: [
      'The Learning Scientist holds the strongest version of the counter-position: a cold open spends attention before there is a frame to hang it on. We are both right, which is exactly what the ledger is for. Logged, not conceded.',
    ],
    desk: [
      'Turn me up once and judge the difference in the script, not in the abstract. The dial is reversible; the first minute of a skipped chunk is not.',
    ],
    closing: {
      label: 'My counterweight read',
      text: 'The master is good, and good is one notch from forgettable. One bold reading is wired to your dial: costed, audited, and ready to play.',
      move: 'Your dial. Everything else about my position is already in the ledger.',
      caveat: 'I propose the bold reading; I do not get to ship it. The Chair ships by rule, and the rule is not mine. The taste is yours.',
    },
  },
  chair: {
    t: 'DC', c: 't-gold', name: 'The Design Chair', ep: 'the orchestrator · ships by rule, never by taste',
    chips: [{ k: '', t: '2 passes' }, { k: 'ok', t: '0 gates fired' }, { k: 'coll', t: '1 collision' }, { k: 'gold', t: '3 calls yours' }],
    see: 'Two passes, four agreements, one collision, zero gates fired, three calls reserved. A room with no collisions is a room not listening.',
    ran: { label: 'The order I kept', text: 'Drafters first, in sequence: the Subject Expert, then the Scriptwriter. Reviewers second, in parallel and independently, so they form views without contaminating each other. One named gap returned to the drafters and resolved on the second pass. I route gaps; I never soften them in transit.' },
    checks: [
      { name: 'The rule', lens: 'how the opening shipped', text: 'When two readings survive every check, I ship the one closer to your own deck and wire the other to your dial. Your deck opens on the week 3 recap, so the recap opening shipped. A tie-break by provenance, never by my preference.' },
      { name: 'The gates', lens: 'watched, silent', text: 'Two findings stop a chunk regardless of everything else: an unaccounted claim, an orphaned chunk. Neither fired. A gate is not a weight; it does not average against the chunk’s strengths.' },
      { name: 'The ledger', lens: 'the collision, intact', text: 'Rigor against memorability, on the opening of chunk 3. Both positions survive every check, both are recorded whole, and the dial plays both. I carry disagreement to you; I do not resolve it for you.' },
      { name: 'The assembly', lens: 'what I hand up', text: 'The master with its locked invariants, the trace with every claim one click from its source, the ledger with both readings playable, and the reserved list with your three calls named.' },
    ],
    tensions: [
      'Every seat that argues well would also love to win. My job is to make sure the room’s best argument reaches you as an argument, not as a verdict that already happened.',
    ],
    desk: [
      'Three calls, named, at your desk: the Gulf enrichment, the boldness of the opening, the checkpoint’s exposure. Each has an owner on record and a dial or a strike waiting.',
    ],
    closing: {
      label: 'What I hand you',
      text: 'A master the room agrees on, a trace you can open, a collision held intact, and three calls that were never mine to make.',
      move: 'Nothing. I hold no position to move; I hold a process to defend, and it held.',
      caveat: 'I adjudicate process. I never adjudicate taste. The room reasons; you decide.',
    },
  },
}

export const seatChips = [
  ['subject', 'Subject Expert'],
  ['scriptwriter', 'Scriptwriter'],
  ['designer', 'Learning Designer'],
  ['scientist', 'Learning Scientist'],
  ['multimedia', 'Multimedia Designer'],
  ['archivist', 'Archivist'],
  ['provocateur', 'Provocateur'],
  ['chair', 'Design Chair'],
]
