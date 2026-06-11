import { useEffect, useRef, useState } from 'react'
import { briefs, seatChips } from '../data.js'

const DTABS = [
  ['meet', 'Meet the Room'],
  ['table', 'The Table'],
  ['briefs', 'The Briefs'],
  ['conv', 'Converse'],
]

const CONV_ANSWERS = {
  enrich: {
    q: 'Why only one enrichment in this chunk?',
    bubbles: [
      { tile: 't-sage', t: 'AR', who: 'The Archivist', text: 'Because restraint is the policy. The room adds only what earns its place, and everything it adds wears a tag. Twenty three claims trace to your deck this week; four additions in total, each ledgered for your strike.' },
      { tile: 't-terra', t: 'SE', who: 'The Subject Expert', text: 'And the one in this chunk earned its seat on regional relevance, nothing else. I had two more candidates and tabled neither; an example that needs my defense is an example your deck did not ask for.' },
    ],
    rule: 'Enrichment is the room’s contribution, never its assertion. The Archivist ledgers; you strike.',
  },
  cut: {
    q: 'What did the Multimedia Designer cut?',
    bubbles: [
      { tile: 't-sage', t: 'MD', who: 'The Multimedia Designer', text: 'A vivid anecdote about a famous project overrun. Memorable and pointed nowhere: a seductive detail. It would have been remembered instead of the mechanism.' },
    ],
    rule: 'The cut is logged in the trace with what it would have cost to keep. Restore it from there if your taste differs.',
  },
  checkpoint: {
    q: 'Could the checkpoint be gentler?',
    bubbles: [
      { tile: 't-sage', t: 'LD', who: 'The Learning Designer', text: 'A gentler variant exists: diagnose a case the room supplies, rather than name your own. It keeps the verb and loses some transfer; naming your own escalation is the strongest version of the objective. Both pass my check.' },
      { tile: 't-terra', t: 'SE', who: 'The Subject Expert', text: 'If you soften it, chunk 3 wants a second worked example, so the diagnosis is modeled twice before it is performed. I have one drafted and parked; it ships with the tag the moment you say so.' },
    ],
    rule: 'The exposure call is reserved for you, by name, on the desk. Either variant passes every check, and the room re-rehearses whichever you choose.',
  },
}

export default function Drawer({ open, onClose, struck, ledgerOpen, toggleLedger, initialTab = 'table', subtitle = 'Chunk 3 · Escalation of Commitment' }) {
  const [tab, setTab] = useState(initialTab)
  const [seat, setSeat] = useState('subject')
  const [asked, setAsked] = useState([])
  const threadRef = useRef(null)

  useEffect(() => {
    if (asked.length && threadRef.current) {
      threadRef.current.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [asked])

  function convAsk(key) {
    setAsked(a => (a.includes(key) ? a : [...a, key]))
  }

  const brief = briefs[seat]

  return (
    <div className={'drawer' + (open ? ' on' : '')} role="dialog" aria-label="The room">
      <div className="dh-bar"></div>
      <div className="drawer-head">
        <div className="dh-title">THE ROOM <span>&middot; {subtitle}</span></div>
        <div className="dtabs" role="tablist">
          {DTABS.map(([key, label]) => (
            <button className="dtab" key={key} aria-selected={tab === key} onClick={() => setTab(key)}>{label}</button>
          ))}
        </div>
        <button className="dclose" onClick={onClose} aria-label="Close the room">×</button>
      </div>
      <div className="drawer-body">

        <div className={'dview' + (tab === 'meet' ? ' on' : '')}>
          <h3 className="d-h serif">Seven seats argue the chunk. <em>You make the call.</em></h3>
          <p className="d-sub">The room does not hand you a script from nowhere. It runs the deliberation of a strong design studio: two seats draft, five push back through one lens apiece, and the disagreements come to you instead of being averaged away. It exists to make your judgment faster and harder to fool, never absent.</p>

          <div className="vsline serif">The drafters propose. The reviewers return named gaps. And one seat is paid to lean against the room's own caution, because a panel of careful disciplines converges on the careful, forgettable lecture every single time.</div>

          <div className="d-seclabel">The drafting seats &middot; they propose</div>
          <div className="seatcard"><span className="tile t-terra">SE</span><div><b className="serif">The Subject Expert</b><i>the craft seat &middot; composed per discipline &middot; Management holds it first</i><p className="mc-quote serif">“In management, the concept and the case teach each other, and neither teaches alone.”</p><span className="sc-body">Reads your deck as the data room, proposes the chunking around the week's hinge concept, and drafts the teaching the way the discipline gets to excellent: the dilemma, the case, the framework meeting Monday morning. A Biologist or a Mathematician will hold this seat differently, later.</span><span className="sc-hand">Hands up: the chunks, their draft invariants, and every addition flagged before it is attached.</span><span className="card-tools"><i className="tl">deck-parser</i><i className="tl">chunk-composer</i><i className="tl">case-builder</i><i className="tl">framework-finder</i><i className="tl">invariant-drafter</i></span></div></div>
          <div className="seatcard"><span className="tile t-terra">SW</span><div><b className="serif">The Scriptwriter</b><i>writes for the ear</i><p className="mc-quote serif">“Students forgive a stumble; they never forgive a lecture that sounds laminated.”</p><span className="sc-body">Turns the teaching into a person talking: breath-length sentences, one idea each, silence scripted where the concept needs room to land. Adds no content of its own; the craft is entirely in the rendering.</span><span className="sc-hand">Hands up: the script, one visual cue per beat, and an honest timing estimate marked as one.</span><span className="card-tools"><i className="tl">script-drafter</i><i className="tl">narration-timer</i><i className="tl">visual-cue-marker</i></span></div></div>

          <div className="d-seclabel">The reviewing seats &middot; they push back, with named gaps</div>
          <div className="seatcard"><span className="tile t-sage">LD</span><div><b className="serif">The Learning Designer</b><i>starts at the destination</i> <span className="gatebadge">◆ holds a gate &middot; alignment</span><p className="mc-quote serif">“Show me the verb a checkpoint can catch.”</p><span className="sc-body">Walks every chunk backward from its checkpoint: the work must earn the check, and an observable objective must name the work. An orphaned chunk does not ship, however beautiful it is.</span><span className="card-tools"><i className="tl ev">alignment-matrix</i><i className="tl ev">objective-tracer</i></span></div></div>
          <div className="seatcard"><span className="tile t-sage">LS</span><div><b className="serif">The Learning Scientist</b><i>attention is a budget</i><p className="mc-quote serif">“A chunk that overdraws the account teaches nothing, beautifully.”</p><span className="sc-body">Reads each chunk against working memory: one concept at a time, names before mechanisms, a runtime budget held as the room's working number and a dial, never a law. Locates the problem; leaves the cut to the drafters.</span><span className="card-tools"><i className="tl ev">load-meter</i><i className="tl ev">pace-gauge</i></span></div></div>
          <div className="seatcard"><span className="tile t-sage">MD</span><div><b className="serif">The Multimedia Designer</b><i>pairs the ear and the eye</i><p className="mc-quote serif">“The seductive detail is not remembered alongside the mechanism. It is remembered instead of it.”</p><span className="sc-body">Audits every cue: narration paired with image, never with its own transcript, one cue per beat. Hunts the vivid thing that points away from the concept, and logs every cut with what it would have cost to keep.</span><span className="card-tools"><i className="tl ev">storyboard-audit</i><i className="tl ev">coherence-check</i></span></div></div>
          <div className="seatcard"><span className="tile t-sage">AR</span><div><b className="serif">The Archivist</b><i>your material, accounted for</i> <span className="gatebadge">◆ holds a gate &middot; provenance</span><p className="mc-quote serif">“I do not decide what is true; I decide what is yours, what is ours, and whether the record can prove the difference.”</p><span className="sc-body">Traces every claim to a slide or tags it as the room's addition, ledgered for your strike. Rules on accounted-for, never on true, because the deck is your thinking and not the room's to audit.</span><span className="card-tools"><i className="tl ev">provenance-tagger</i><i className="tl ev">enrichment-ledger</i></span></div></div>
          <div className="seatcard counter"><span className="tile t-terra">PV</span><div><b className="serif">The Provocateur</b><i>the counterweight</i> <span className="counterbadge">seated on purpose</span><p className="mc-quote serif">“Will anyone remember this tomorrow?”</p><span className="sc-body">Reads for the failure the other checks cannot see: the chunk that passes every audit and gets skipped at minute one by a tired student at midnight. Proposes the bold reading, costed in seconds and pointed at the concept, and withdraws its own misses on the record.</span><span className="card-tools"><i className="tl ev">boredom-audit</i><i className="tl ev">live-question-bank</i></span></div></div>

          <div className="gateline"><span className="dia">◆</span> A gate is not a weight. An unaccounted claim, or an orphaned chunk, returns the work, and no quality argues it down.</div>

          <div className="d-seclabel">The chair &middot; not an eighth lens</div>
          <div className="chaircard" style={{ marginTop: 14 }}>
            <div className="cc-label"><span className="mtile t-gold">DC</span>The Design Chair</div>
            <p className="mc-quote serif" style={{ fontSize: 16, marginTop: 10 }}>“I adjudicate process. I never adjudicate taste.”</p>
            <p className="cc-text serif" style={{ fontSize: 15.5 }}>Brings no lens of its own; brings the order of operations and the ledger. Convenes the drafters, runs the reviewers independently and in parallel, routes the named gaps, and when two positions survive every check, it ships the conservative reading <b>by rule, not by preference</b>, wires the bold one to your dial, and carries the collision to you intact. It assembles the one thing this product sells:</p>
            <div className="owns-grid">
              <div className="own"><b className="serif">the master</b><span>chunks with locked invariants</span></div>
              <div className="own"><b className="serif">the trace</b><span>every claim, one click from its source</span></div>
              <div className="own"><b className="serif">the ledger</b><span>collisions, both readings playable</span></div>
              <div className="own"><b className="serif">the reserved list</b><span>taste calls, named, for you</span></div>
            </div>
            <p className="cc-text serif" style={{ fontSize: 16.5, marginTop: 18 }}><b>The room reasons. You decide.</b> The weight stays on your shoulders; your arms are just stronger.</p>
          </div>

          <div className="ri-grid">
            <div className="ri-col"><div className="d-seclabel" style={{ marginTop: 0 }}>What it refuses to be</div>
              <div className="ri-row refuse">A grade, a score, or any verdict on your course.</div>
              <div className="ri-row refuse">A tie broken on taste.</div>
              <div className="ri-row refuse">An unaccounted claim, shipped because it sounded right.</div>
              <div className="ri-row refuse">Disagreement smoothed into a bland middle.</div>
              <div className="ri-row refuse">An addition without a tag.</div>
            </div>
            <div className="ri-col"><div className="d-seclabel" style={{ marginTop: 0 }}>What it is</div>
              <div className="ri-row is">Every claim one click from the slide it came from.</div>
              <div className="ri-row is">“Not evidenced in the deck”: a complete, honest answer.</div>
              <div className="ri-row is">Both readings of every collision, playable at your dial.</div>
              <div className="ri-row is">Gates that no quality argues down.</div>
              <div className="ri-row is">Taste reserved, by name, for your desk.</div>
            </div>
          </div>

          <div className="seamline">The drafters <span>draft</span> &middot; the reviewers <span>return gaps</span> &middot; the Chair <span>assembles</span> &middot; you <span>direct</span></div>
        </div>

        <div className={'dview' + (tab === 'table' ? ' on' : '')}>
          <div className="chaircard">
            <div className="cc-label"><span className="mtile t-gold">DC</span>The Design Chair &middot; Presiding</div>
            <div className="cc-pills"><span className="pill">2 proofing passes</span><span className="pill ok">checks passed</span><span className="pill ok">0 gates fired</span><span className="pill coll">1 collision</span><span className="pill gold">3 calls yours</span></div>
            <p className="cc-text serif">What I convened: your 24 slides, five chunks, two passes. Where the room agrees: alignment, load after revision, pairing, provenance. One collision stands on the opening. I shipped the conservative reading by rule, not by preference, and wired the bold one to your dial. Reserved for your desk: the enrichment, the opening, the checkpoint's exposure.</p>
          </div>

          <div className="d-seclabel">The room's reading &middot; chunk 3 &middot; topic by topic</div>

          <div className="topic">
            <div className="topic-head"><span className="tname">Alignment</span><span className="t-badge ok">agreed</span></div>
            <div className="duo">
              <div className="plate"><span className="who"><span className="mtile t-sage">LD</span>The Learning Designer</span>Objective “diagnose escalation in a live decision” is carried by the case and proven by the chunk 5 checkpoint. Verb audit clean: diagnose can be caught. <span className="srcc">backward walk</span></div>
              <div className="plate"><span className="who draft"><span className="mtile t-terra">SE</span>The Subject Expert</span>The case turns on a decision: someone has to choose, and the choosing is what teaches. <span className="srcc">slides 12 to 17</span></div>
            </div>
          </div>

          <div className="topic">
            <div className="topic-head"><span className="tname">Attention &amp; load</span><span className="t-badge ok">resolved</span></div>
            <div className="duo">
              <div className="plate"><span className="who"><span className="mtile t-sage">LS</span>The Learning Scientist</span>First draft ran 6:40 holding two concepts at once. The severable history was the cut to locate, not the length. <span className="srcc">pass 1</span></div>
              <div className="plate"><span className="who draft"><span className="mtile t-terra">SE</span>The Subject Expert</span>The sidebar framed but did not carry; it moved to chunk 2 where the arithmetic lives. Now 4:10, one concept, one case. <span className="srcc">pass 2</span></div>
            </div>
          </div>

          <div className="topic">
            <div className="topic-head"><span className="tname">Pairing &amp; media</span><span className="t-badge ok">agreed</span></div>
            <div className="duo">
              <div className="plate"><span className="who"><span className="mtile t-sage">MD</span>The Multimedia Designer</span>Every cue pairs speech with image, never with its own transcript. One vivid anecdote pointed away from the mechanism; cut as a seductive detail, logged with its cost. <span className="srcc">cue audit</span></div>
              <div className="plate"><span className="who draft"><span className="mtile t-terra">SW</span>The Scriptwriter</span>One cue per beat, narration over the decision tree, and a scripted pause after the line about money already being gone. <span className="srcc">script</span></div>
            </div>
          </div>

          <div className="topic">
            <div className="topic-head"><span className="tname">Provenance</span><span className="t-badge ok">accounted &middot; gate did not fire</span></div>
            <div className="duo single">
              <div className="plate"><span className="who"><span className="mtile t-sage">AR</span>The Archivist</span><span>{struck
                ? 'Nine claims traced to your deck. One enrichment in this chunk, struck at your desk and ledgered.'
                : 'Nine claims traced to your deck. One enrichment in this chunk, tagged and ledgered.'}</span> I rule on accounted-for, never on true. <span className="srcc">trace map</span></div>
            </div>
          </div>

          <div className="topic">
            <div className="topic-head"><span className="tname">The opening</span><span className="t-badge coll">◆ collision</span></div>
            <div className="duo">
              <div className="plate"><span className="who"><span className="mtile t-sage">LS</span>The Learning Scientist</span>A cold open spends attention before the learner has a frame to hang it on. The start of a chunk is when the budget is fullest; spend it on the mechanism. <span className="srcc">ledger</span></div>
              <div className="plate"><span className="who" style={{ color: 'var(--terracotta-deep)' }}><span className="mtile t-terra">PV</span>The Provocateur</span>Safe is how chunks get skipped. The film question costs forty seconds and buys four minutes, and it points straight at the concept. Logged, not conceded. <span className="srcc">ledger</span></div>
            </div>
            <div className="ruling"><span className="rlabel"><span className="mtile t-gold">DC</span>The Design Chair ships by rule</span>Both readings passed every other check, so the conservative one shipped and the bold one is wired to your dial. The difference left is taste, and I do not break ties on taste. <button className="ledger-toggle" onClick={toggleLedger}>Open the full ledger entry</button></div>
            <div className={'ledger' + (ledgerOpen ? ' on' : '')}>
              <b>Collision &middot; the opening of chunk 3.</b> The Provocateur argued for a cold open: a question that risks discomfort before the concept arrives. The Learning Scientist held that a cold open spends attention before the learner has a frame to hang it on. <b>Both readings passed every other check, so the Design Chair shipped the conservative one and logged the bold.</b> The dial is yours: close the room and turn the Provocateur up at your desk; the script plays the other reading in place.
            </div>
          </div>
        </div>

        <div className={'dview' + (tab === 'briefs' ? ' on' : '')}>
          <div className="d-seclabel" style={{ marginTop: 0 }}>Each seat wrote its own brief. Pick one.</div>
          <div className="seatpick">
            {seatChips.map(([key, label]) => (
              <button className="chip" key={key} aria-pressed={seat === key} onClick={() => setSeat(key)}>{label}</button>
            ))}
          </div>
          <div>
            <div className="brief-card">
              <div className="bc-head">
                <span className={'tile ' + brief.c}>{brief.t}</span>
                <div>
                  <div className="bc-name">{brief.name}</div>
                  <div className="bc-ep">{brief.ep}</div>
                </div>
                <div className="bc-chips">
                  {brief.chips.map(c => (
                    <span className={'pill' + (c.k ? ' ' + c.k : '')} key={c.t}>{c.t}</span>
                  ))}
                </div>
              </div>
              <div className="b-sec"><div className="b-k">What I see</div><div className="b-v">{brief.see}</div></div>
              <div className="b-sec"><div className="b-k">{brief.ran.label}</div><div className="b-v">{brief.ran.text}</div></div>
              <div className="b-sec">
                <div className="b-k">My checks</div>
                <div className="b-checks">
                  {brief.checks.map(c => (
                    <div className="b-check" key={c.name}>
                      <b className="serif">{c.name}</b><i>{c.lens}</i>
                      <span>{c.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="b-sec">
                <div className="b-k">Tensions I’m holding</div>
                <ul className="b-tens">
                  {brief.tensions.map(t => <li className="serif" key={t}>{t}</li>)}
                </ul>
              </div>
              <div className="b-sec">
                <div className="b-k">At your desk</div>
                <ul className="b-tens desk">
                  {brief.desk.map(q => <li className="serif" key={q}>{q}</li>)}
                </ul>
              </div>
              <div className="b-close">
                <div className="b-k">{brief.closing.label}</div>
                <div className="b-v">{brief.closing.text}</div>
                <div className="b-move"><b>The one thing that would most move it</b><span className="serif">{brief.closing.move}</span></div>
                <div className="b-caveat">{brief.closing.caveat}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={'dview' + (tab === 'conv' ? ' on' : '')}>
          <div className="conv-status"><span className="pill coll">Chunk 3 &middot; one collision standing</span><span className="conv-status-line serif">Two readings exist. The room will argue either, in character, from your deck.</span></div>
          <div ref={threadRef}>
            <div className="conv-ask">You ask</div>
            <div className="conv-q serif">Why does the opening stay safe?</div>
            <div className="bubble performer-b on"><span className="b-who"><span className="mtile t-sage">LS</span>The Learning Scientist</span>Because attention is a budget, and the start of a chunk is when it is fullest. A cold open spends it on surprise before the learner has a frame. I would rather you spend it on the mechanism.</div>
            <div className="bubble performer-b on"><span className="b-who"><span className="mtile t-terra">PV</span>The Provocateur</span>Safe is how chunks get skipped. The film question is not decoration; it is the concept wearing the student's own life. Forty seconds, repaid in four minutes of attention.</div>
            <div className="rules"><span className="ru-label"><span className="mtile t-gold">DC</span>The Design Chair</span>Both readings passed every other check, so I shipped the safer one by rule, not by preference. The difference left is yours: turn the dial and the script plays both.</div>
            {asked.map(key => {
              const a = CONV_ANSWERS[key]
              return (
                <div key={key}>
                  <div className="conv-ask">You ask</div>
                  <div className="conv-q serif">{a.q}</div>
                  {a.bubbles.map(b => (
                    <div className="bubble performer-b on" key={b.t}><span className="b-who"><span className={'mtile ' + b.tile}>{b.t}</span>{b.who}</span>{b.text}</div>
                  ))}
                  <div className="rules"><span className="ru-label"><span className="mtile t-gold">DC</span>The Design Chair</span>{a.rule}</div>
                </div>
              )
            })}
          </div>
          <div className="conv-try">
            <span className="ct-label">Try</span>
            <button className={'chip' + (asked.includes('enrich') ? ' dim' : '')} onClick={() => convAsk('enrich')}>Why only one enrichment?</button>
            <button className={'chip' + (asked.includes('cut') ? ' dim' : '')} onClick={() => convAsk('cut')}>What did the Multimedia Designer cut?</button>
            <button className={'chip' + (asked.includes('checkpoint') ? ' dim' : '')} onClick={() => convAsk('checkpoint')}>Could the checkpoint be gentler?</button>
          </div>
          <div className="conv-input">
            <input type="text" placeholder="Ask the room about this chunk..." aria-label="Ask the room" />
            <button className="cta" onClick={() => alert('In the product, the room answers live, in character, citing the master and your deck.')}>Ask the room</button>
          </div>
          <div className="conv-foot">The room answers in character, from your deck and the master, and cites where each claim comes from.</div>
        </div>

      </div>
    </div>
  )
}
