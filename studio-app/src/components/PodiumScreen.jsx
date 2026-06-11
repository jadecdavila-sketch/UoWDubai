import { Fragment, useState } from 'react'
import { tunerDescs, tunerChips } from '../data.js'
import Drawer from './Drawer.jsx'
import SeatTile from './SeatTile.jsx'

const TUNER_SEATS = [
  ['provocateur', 'Provocateur'],
  ['scientist', 'Learning Scientist'],
  ['scriptwriter', 'Scriptwriter'],
  ['multimedia', 'Multimedia Designer'],
]

/* The deck-sourced passages are hers to rework in place. The enrichment is the
   room's offer (struck or kept, never rewritten here), and the cold open
   belongs to the dial, so neither carries the rework affordance. */
const SCRIPT_PARAS = [
  {
    id: 'case',
    parts: [
      { text: 'Last week you built the business case. This week we ask a harder question: why do smart managers keep funding projects the case no longer supports?', tag: 'your deck · slide 12' },
    ],
    cue: "on screen: week 3 recap card, dissolving into this week's title",
  },
  {
    id: 'mechanism',
    parts: [
      { text: 'The pattern has a name: escalation of commitment.', tag: 'your deck · slide 14' },
      { text: 'The money already spent is gone whether the project lives or dies. What escalates is not the arithmetic but the identity. Stopping means admitting the original call was wrong.', tag: 'your deck · slide 15' },
    ],
    cue: 'on screen: the decision tree, costs grayed out on both branches',
  },
  {
    id: 'exit',
    parts: [
      { text: 'Organizations that escape the trap separate the decision from the decider, so that killing a project is not killing a career.', tag: 'your deck · slide 17' },
    ],
    cue: 'on screen: two org charts, the reporting line moving',
  },
]

const otherChunkNote = () =>
  alert('In this walkthrough, chunk 3 is the wired path. The full product gives every chunk this depth.')

function EditablePara({ para, edited, onSave, onRestore }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState('')

  const originalText = para.parts.map(p => p.text).join(' ')
  const current = edited ?? originalText

  function beginEdit() {
    setDraft(current)
    setEditing(true)
  }

  if (editing) {
    return (
      <>
        <textarea
          className="rework-area"
          value={draft}
          autoFocus
          onChange={e => setDraft(e.target.value)}
          onKeyDown={e => { if (e.key === 'Escape') setEditing(false) }}
          aria-label="Rework the passage"
        />
        <div className="rework-actions">
          <button
            className="rework-btn"
            onClick={() => {
              const t = draft.trim()
              setEditing(false)
              if (!t || t === originalText) onRestore()
              else onSave(t)
            }}
          >keep the wording</button>
          <button className="rework-btn rb-discard" onClick={() => setEditing(false)}>discard</button>
        </div>
      </>
    )
  }

  return (
    <>
      <button
        type="button"
        className="editable-line"
        title="Click to rework this passage"
        onClick={beginEdit}
      >
        {edited == null ? (
          para.parts.map(part => (
            <Fragment key={part.tag}>{part.text} <span className="tag deck">{part.tag}</span>{' '}</Fragment>
          ))
        ) : (
          <>
            {edited}{' '}
            {para.parts.map(part => (
              <Fragment key={part.tag}><span className="tag deck">{part.tag}</span>{' '}</Fragment>
            ))}
            <span className="tag hand">reworded &middot; by you</span>
          </>
        )}
      </button>
      {edited != null && (
        <div className="rework-actions under-line">
          <button className="rework-btn rb-discard" onClick={onRestore}>restore the room's wording</button>
        </div>
      )}
    </>
  )
}

export default function PodiumScreen({ forte, setForte, struck, setStruck, edits, setEdits, onApprove }) {
  const [tunerSeat, setTunerSeat] = useState('provocateur')
  const [ledgerOpen, setLedgerOpen] = useState(false)
  const [rerehearsing, setRerehearsing] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  function dialForte(f) {
    if (f === forte || rerehearsing) return
    setRerehearsing(true)
    setTimeout(() => {
      setForte(f)
      setRerehearsing(false)
    }, 1500)
  }

  function saveEdit(id, text) {
    setEdits({ ...edits, [id]: text })
  }
  function restoreEdit(id) {
    const next = { ...edits }
    delete next[id]
    setEdits(next)
  }

  return (
    <div className="screen on" id="screen-3">
      <div className="podium-head">
        <div>
          <div className="sc-kicker">Step Three &middot; The Writing Room</div>
          <h1 className="sc-title">The master is yours to <em>direct</em>.</h1>
          <div className="legend">
            <span><span className="dotb"></span>held by principle</span>
            <span><span className="dia">◆</span> left to your judgment</span>
          </div>
        </div>
        <div className="podium-cta">
          <button className="cta ghost" onClick={() => alert('In the product, this returns the master to the proofing room with your notes attached.')}>Send back with notes</button>
          <button className="cta" onClick={onApprove}>Approve the master</button>
        </div>
      </div>

      <div className="podium-grid">
        <div className="leftrail">
          <div className="chunklist">
            <div className="cl-head">Week 4 &middot; Five chunks</div>
            <button className="chunk-item" onClick={otherChunkNote}>
              <div className="ci-num">Chunk 1 &middot; 3:20</div><div className="ci-name serif">Why good managers stay too long</div><div className="ci-flag ok">● checks passed</div>
            </button>
            <button className="chunk-item" onClick={otherChunkNote}>
              <div className="ci-num">Chunk 2 &middot; 3:05</div><div className="ci-name serif">Sunk costs: the arithmetic</div><div className="ci-flag ok">● checks passed</div>
            </button>
            <button className="chunk-item sel">
              <div className="ci-num">Chunk 3 &middot; 4:10</div><div className="ci-name serif">Escalation of commitment</div><div className="ci-flag coll">◆ one collision &middot; three calls yours</div>
            </button>
            <button className="chunk-item" onClick={otherChunkNote}>
              <div className="ci-num">Chunk 4 &middot; 3:45</div><div className="ci-name serif">Designing the exit: kill criteria</div><div className="ci-flag ok">● checks passed</div>
            </button>
            <button className="chunk-item" onClick={otherChunkNote}>
              <div className="ci-num">Chunk 5 &middot; 2:50</div><div className="ci-name serif">Checkpoint: your escalation audit</div><div className="ci-flag ok">● checks passed</div>
            </button>
            <div className="cl-foot">Prototype note: chunk 3 carries the wired interactions.</div>
          </div>
        </div>

        <div className="detail">
          <div className="panel">
            <div className="panel-head"><div className="ph-t">Direct</div><div className="ph-s">The script responds below, in place</div></div>
            <div className="panel-body">
              <div className="tuner-tabs" role="tablist">
                {TUNER_SEATS.map(([key, label]) => (
                  <button className="ttab" key={key} aria-selected={tunerSeat === key} onClick={() => setTunerSeat(key)}>{label}</button>
                ))}
              </div>
              <div className="tuner-body">
                <div className="tuner-desc">{tunerDescs[tunerSeat]}</div>
                {tunerSeat === 'provocateur' ? (
                  <div className="conduct-row">
                    <button className="chip" aria-pressed={!forte} onClick={() => dialForte(false)}>Standard</button>
                    <button className="chip" aria-pressed={forte} onClick={() => dialForte(true)}>Turned up</button>
                  </div>
                ) : (
                  <>
                    <div className="conduct-row">
                      <button className="chip" aria-pressed="true">{tunerChips[tunerSeat][0]}</button>
                      <button className="chip dim" aria-disabled="true">{tunerChips[tunerSeat][1]}</button>
                    </div>
                    <div className="conduct-note">This dial exists in the product; the Provocateur is the one wired in this walkthrough.</div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-head">
              <div className="ph-t">The script &middot; Chunk 3</div>
              <div className="ph-s">{forte ? 'The Provocateur, turned up' : 'Standard reading'} &middot; yours to rework in place</div>
            </div>
            <div className="panel-body script">
              <div className={'forte-open' + (forte ? ' on' : '')}>
                <p>Before anything else, ask the room and hold the silence: every one of you has finished a film you were not enjoying. Why did you keep watching? <span className="tag forte">the Provocateur &middot; turned up</span></p>
                <span className="cue">on screen: black slide, the question alone</span>
              </div>
              {SCRIPT_PARAS.map((para, i) => (
                <Fragment key={para.id}>
                  <EditablePara
                    para={para}
                    edited={edits[para.id]}
                    onSave={t => saveEdit(para.id, t)}
                    onRestore={() => restoreEdit(para.id)}
                  />
                  <span className="cue">{para.cue}</span>
                  {i === 1 && (
                    <p>
                      <span className={'strikable' + (struck ? ' off' : '')}>Consider the 2025 Gulf logistics consolidation, where exits clustered two years too late and every quarter of delay was justified by the quarters before it.</span>{' '}
                      <span className={struck ? 'tag struck' : 'tag enrich'}>{struck ? 'struck · by you' : 'enrichment · added by the room'}</span>
                      <button className="strike-btn" onClick={() => setStruck(s => !s)}>{struck ? 'restore' : 'strike'}</button>
                    </p>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="panel rail-judg">
          <div className="panel-head"><div className="ph-t" style={{ fontSize: 17 }}>Left to your judgment</div><div className="ph-s"><span className="dia">◆</span> this master</div></div>
          <div className="panel-body">
            <div className="judg-row"><div className="q">“</div><div>The Gulf logistics enrichment: apt for your cohort, or strike it? The room offered; it does not insist. <span className="jc">chunk 3</span></div></div>
            <div className="judg-row"><div className="q">“</div><div>How bold should the opening be? Two readings exist; the dial plays both. <span className="jc">chunk 3</span></div></div>
            <div className="judg-row"><div className="q">“</div><div>Students name an escalation of their own. Right for your room, or too exposed for week 4? <span className="jc">chunk 5</span></div></div>
          </div>
        </div>
      </div>

      {!drawerOpen && (
        <button className="fab" onClick={() => setDrawerOpen(true)}>
          <span className="tiles"><SeatTile t="SE" /><SeatTile t="LS" /><SeatTile t="DC" /></span>
          <span>Convene the room</span>
        </button>
      )}

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        struck={struck}
        ledgerOpen={ledgerOpen}
        toggleLedger={() => setLedgerOpen(o => !o)}
      />

      <div className={'rerehearse' + (rerehearsing ? ' on' : '')} aria-hidden={!rerehearsing}>
        <div>
          <div className="rr-line">The chunk has returned to the proofing room…</div>
          <div className="rr-sub">The Provocateur is playing the other reading &middot; the checks run again</div>
        </div>
      </div>
    </div>
  )
}
