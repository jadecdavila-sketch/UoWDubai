# The Desk: Landing Page Brief (agent-readable)

Handoff for prototyping the faculty landing page of The Studio (Aurica x UOWD) inside the React app. Audience for the build: a Claude Code agent working in the existing codebase. Audience for the page: a faculty member, and in the near term Frederick Wehrle in a walkthrough.

Status: composed for reaction. Locked items are marked PRINCIPLE. Items marked YOURS are open calls for Jade and Alanna. Everything else is a strong default the agent may refine within the laws below.

---

## 1. What this page is

The Desk is the faculty member's landing page: the first thing they see, before any upload. It replaces the current behavior of landing directly on the deck upload (Step One). Step One does not go away. It becomes an action the desk offers.

The Desk is already canon: the Floor diagram names "The Desk · faculty control plane" with the verbs approves, redirects, strikes enrichment, turns a voice up or down, sends back to proof. This page is that plane, given a surface.

The governing idea, in two sentences:

- The room argues. The desk decides.
- Seats argue; desks decide. AI holds seats; humans hold desks. (Draft refrain, new this session. YOURS to ratify before it ships anywhere client-facing.)

## 2. The metaphor law (PRINCIPLE)

1. **Things arrive at a desk and await judgment.** Every item on the desk is a named call, prepared by the room, never a task to perform. The desk holds calls, not work.
2. **This desk holds less than the faculty member's real one.** Few objects, fully prepared. The pilot's core metric is hours returned; a crowded landing is the anti-promise.
3. **One desk per person, not per course.** The person is the unit of judgment. Courses sit on the one surface.
4. **The desk never does the work.** No editing, no drafting, no generation happens here. The desk judges, signs, sends back, and convenes.
5. **Students hold no desk.** They raise a hand. Do not mirror this page for students.

### What the desk refuses (PRINCIPLE)
- Notification badges, counts in red, or any urgency mechanics.
- Charts, graphs, analytics panels. The editions pulse is one written line.
- The words dashboard, workspace, home, hub, portal, notification, task.
- Progress bars on the faculty member's own behavior.
- More than five distinct object groups on the surface.

## 3. Vocabulary (PRINCIPLE, from Alanna's handoff, enforce in all new copy)

- **The studio** = Aurica, the method. **The room** = the seven AI seats and the chair. Never call the council the studio.
- **Master** = the approved, locked course design. **Edition** = a per-student rendering. **The proofing room** = where the loop runs. **The aside** = the student's bounded question. **The Presenter** delivers; it never holds the desk.
- **Faculty / faculty member**, never professor, anywhere on this page.
- Desk verbs only: approve, sign, send back, strike, turn a voice up or down, hand the room a deck, convene the room.
- Status language: "on your desk" replaces "ready for review." "In the proofing room" replaces "processing."
- No musical vocabulary (rehearsal, score, performance, conduct, podium, coda, measure). Retained craft words are fine: seat, beat, stage, turned up.

## 4. Design system (PRINCIPLE: extract from the codebase, never approximate)

Tokens are the Studio set already in the app. For reference: paper #EDE8DD, paper-deep #E4DECF, ink #211B12, ink-soft #534A3A, terracotta #74211A, terracotta-deep #4C1610, sage #8C7C58, sage-deep #6A5C3D, sage-light #CFC4A6, gold #B08D4F, gold-deep #8A6C39, line rgba(40,35,27,0.16). Body carries the radial instrument-glow gradient. Type: Cormorant Garamond (display and voice), Barlow (sans), IBM Plex Mono (labels, data, tool names).

Semantic color (PRINCIPLE):
- Navy #17315A = a decision, or owned by the faculty member. Every diamond. Every reserved call on the desk.
- Mustard #C9A227 = held by principle, locked. The seal, invariant references, the locked dot.
- Oxblood (terracotta tokens) = Aurica's own hand.
- Brass (gold tokens) = instrument material only: rules, ticks, bezels. Brass never carries meaning.
- Any accent on a dark panel must use a lifted variant (e.g. #C85A42 for red) or it disappears.

The page register is calm paper. Generous space, hairline rules, no cards stacked on cards. If the build needs a reference for restraint, the approved screen's record is the closest existing relative.

## 5. The surface: five object groups, in order

### 5.1 The course in flight
One line of identity, term-time, not app-time.

> MGMT110 · Principles of Management · Week 4 of 13

Beneath it, the week's standing in plain words (see copy block). If a second course exists, it stacks as a second quiet row; the demo shows one.

### 5.2 On your desk (the tray)
The named calls awaiting judgment. Demo state carries exactly one:

> **Week 4 · Decision Traps** · waiting on your deck. [navy diamond]
> The room is seated. Hand it this week's slides and the proofing room convenes.
> [Action: Hand the room your deck] → routes to the existing Step One (deck upload)

Each tray item is: title, one sentence of standing, one action. Never a list of subtasks.

### 5.3 The ledger
The question-ledger from the asides, surfaced without being asked for. Demo state:

> **Raised hands · Week 3.** Eleven students asked whether escalation of commitment is the same as loss aversion. Loss aversion is on the Week 5 master; the overlap is flagged there.
> One question ran beyond the master and was named as such. It is on your desk verbatim.

(Continuity note: the existing aside demo question is exactly this loss-aversion confusion. The ledger aggregates it. Keep that thread intact.)

### 5.4 The editions pulse
One written line, gold locked dot, no numbers larger than the sentence:

> ● 183 editions met Week 3 this week. Every one was checked against its invariants before it shipped.

### 5.5 The drawer
A single quiet row that opens the archive: versioned masters, signed records, struck enrichments. Demo state links to the existing approved record for Week 3.

> The drawer: three masters signed this term. Every strike recorded as yours.

### 5.6 Handing the room a deck (the standing affordance)

Two paths, one law: the desk anticipates, and the surface receives.

**Anticipated:** most decks arrive by answering a tray item (5.2). That path needs no extra UI.

**Unprompted:** a quiet standing slot at the foot of the tray, dashed hairline in the existing drop-zone style, miniaturized. The entire desk surface is also a drop target. On drop or select, the deck-parser reads the file and proposes the routing in its sys voice (mono, the same voice that opens the proofing feed):

> deck-parser · This reads as MGMT110, Week 5: Risk and Uncertainty. 22 slides, agenda on slide 2.
> [To the proofing room] [It belongs elsewhere]

Routing cases (PRINCIPLE):
- **Matches an anticipated tray item:** fulfills it; the item's standing becomes "in the proofing room."
- **Targets a week with a signed master:** this is a revision, never an overwrite. Copy: "Week 3 carries a signed master, v2. This deck opens v3; nothing signed is overwritten."
- **Names no course the desk knows:** routes to the What-do-you-teach card (section 6). A new course seats a new craft voice.
- **Several decks at once:** queue in arrival order, one proposal at a time.

Refusals for this affordance: no floating action button, no modal wizard, no multi-step form, and the word upload never appears. The verbs are hand and drop.

Slot copy:
- Label: **Hand the room a deck**
- Subline: Drop it here, or anywhere on the desk. The room reads it and proposes where it belongs.

Persistent on the page, not in the five groups: the bell (Convene the room, the existing FAB pattern) and the seal motif near signed items (mustard, small, the check seal from the approved screen).

## 6. Empty state (first run)

A clean desk holding one object: a card from the room.

> **What do you teach?**
> [single field]
> The craft seat is composed per discipline. Name the course and the room takes its seats around it.

On submit, the Subject Expert card is shown seated for that discipline ("A Management mind holds the craft seat"), then the tray's first item appears: waiting on your deck. For the prototype this can be theater behind the one wired discipline.

## 7. Wired vs theater (prototype convention)

Wired: the tray action into Step One; the drawer link to the approved record; the bell. The standing slot may be wired cheaply: drop or select triggers the scripted parser proposal for the demo deck; [To the proofing room] routes into Step One pre-fulfilled or into the proofing feed directly, whichever the app's routing makes cheaper.
Theater, explaining itself politely on click: the ledger rows, the second-course affordance, the revision and unknown-course routing cases, the empty-state field (unless cheap to wire).
Match the existing convention: chunk 3 carries the interactions; everything else says what it would do in the product.

## 8. Copy block (use verbatim; cadence rules apply to any new lines)

Voice rules for additions: no em-dashes or en-dashes anywhere, including ranges. No candor words (honestly, actually, genuinely, exactly). No notification-speak. Ends on the record, not on a maxim. Refrains repeat exactly or not at all.

- Page title: **Your desk.**
- Subline: The room prepares. The desk decides. Nothing reaches a student unsigned.
  (Note: "The room reasons. You decide." is the registered refrain and lives at approval. This subline is deliberately not it. YOURS: keep the distinction or unify.)
- Tray label: On your desk
- Ledger label: Raised hands
- Pulse label: Editions
- Drawer label: The drawer
- Bell label: Convene the room
- Empty tray line: Nothing awaits you. The room is at work in the proofing room.

## 9. Build notes for the agent

- Read the existing app first. Reuse the established primitives (chips, pills, diamond and dot markers, seal, FAB) rather than re-deriving them. Extract tokens from code.
- Suggested components, names negotiable: Desk (page), CourseRow, TrayItem, LedgerCard, EditionsPulse, DrawerRow, EmptyDesk, RoomBell.
- Routing: Desk is the index route. The existing five-step flow mounts from the tray action. Approved record reachable from the drawer.
- Term-time data shape: course { code, title, week, of, status }, trayItems[], ledger { repeated, beyond }, pulse { editions, week }, drawer { signedCount }.
- Verify before delivery: the dash grep (em, en, and entities), and that no banned vocabulary entered (professor, dashboard, notification, rehearsal, score, performance, podium).

## 10. Open calls (YOURS, do not resolve in the build)

i. Ratify or kill the draft refrain "Seats argue; desks decide." If ratified, where does it live: this page, the pitch, or both?
ii. Does the house review appear on the faculty desk? Default: only as a provenance phrase on arriving masters ("house-reviewed"), never as a section. The designers hold their own desk and it is not this page.
iii. The subline question in section 8.
iv. Multi-course demo state: does Frederick see one course or two? Default one.
v. Whether the empty state ships in the walkthrough or stays a product note.
vi. Whether drop-anywhere ships in the walkthrough, or the standing slot alone carries the demo. Default: slot alone; drop-anywhere is a product note until the React build proves it cheap.
