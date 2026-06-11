import { useEffect, useState } from 'react'
import { deskData } from '../deskData.js'
import Drawer from './Drawer.jsx'

// The settle plays on the first arrival only; later visits find the desk already set.
let deskSettled = false

function TrayItem({ item, onAction }) {
  return (
    <div className="tray-card">
      <span className="dia">◆</span>
      <div className="ti-main">
        <div className="ti-title serif">{item.title}<span className="ti-standing">{item.standing}</span></div>
        <div className="ti-line">{item.line}</div>
      </div>
      <button className="cta" onClick={onAction}>{item.action}</button>
    </div>
  )
}

function DeskBell({ struck }) {
  const [roomOpen, setRoomOpen] = useState(false)
  const [ledgerOpen, setLedgerOpen] = useState(false)
  return (
    <>
      {!roomOpen && (
        <button className="fab" onClick={() => setRoomOpen(true)}>
          <span className="tiles"><span className="tile t-terra">SE</span><span className="tile t-sage">LS</span><span className="tile t-gold">DC</span></span>
          <span>Convene the room</span>
        </button>
      )}
      <Drawer
        open={roomOpen}
        onClose={() => setRoomOpen(false)}
        struck={struck}
        ledgerOpen={ledgerOpen}
        toggleLedger={() => setLedgerOpen(o => !o)}
        subtitle="seated for MGMT110"
      />
    </>
  )
}

export default function DeskScreen({ onHandDeck, onOpenRecord, struck }) {
  const emptyMode = new URLSearchParams(window.location.search).get('empty') === '1'
  const [courseName, setCourseName] = useState('')
  const [seated, setSeated] = useState(false)
  const [withBeats] = useState(() => !deskSettled)

  useEffect(() => {
    deskSettled = true
  }, [])

  const beat = n => {
    if (!withBeats) return ''
    return n > 1 ? ` beat b${n}` : ' beat'
  }

  const d = deskData
  const trayItem = d.trayItems[0]

  if (emptyMode) {
    return (
      <div className="screen on">
        <div className="desk">
          <header className={beat(1).trim()}>
            <div className="desk-title-row">
              <img className="desk-thumb" src={`${import.meta.env.BASE_URL}assets/theDesk.png`} alt="" aria-hidden="true" />
              <h1 className="sc-title">Your desk.</h1>
            </div>
          </header>

          {seated ? (
            <>
              <div className="seatcard fade-in" style={{ marginTop: 34 }}>
                <span className="tile t-terra">SE</span>
                <div>
                  <b className="serif">A Management mind holds the craft seat.</b>
                  <span className="sc-body">The room is seated around {courseName}. Six more seats and the chair take theirs alongside it.</span>
                </div>
              </div>
              <section className="sec-tray fade-in" style={{ borderBottom: 'none' }}>
                <div className="d-seclabel">On your desk</div>
                <TrayItem item={trayItem} onAction={onHandDeck} />
              </section>
            </>
          ) : (
            <div className={'empty-card' + beat(2)}>
              <div className="ec-q">What do you teach?</div>
              <form
                className="ec-input"
                onSubmit={e => {
                  e.preventDefault()
                  if (courseName.trim()) setSeated(true)
                }}
              >
                <input
                  value={courseName}
                  onChange={e => setCourseName(e.target.value)}
                  placeholder="Name the course"
                  aria-label="What do you teach"
                />
                <button className="cta" type="submit">Seat the room</button>
              </form>
              <div className="ec-note">The craft seat is composed per discipline. Name the course and the room takes its seats around it.</div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="screen on">
      <div className="desk">
        <header className={beat(1).trim()}>
          <div className="desk-title-row">
            <img className="desk-thumb" src={`${import.meta.env.BASE_URL}assets/theDesk.png`} alt="" aria-hidden="true" />
            <h1 className="sc-title">Your desk.</h1>
          </div>
          <div className="cr-line"><b>{d.course.code}</b> &middot; {d.course.title} &middot; Week {d.course.week} of {d.course.of}</div>
          <div className="cr-standing">{d.course.status}</div>
          <div className="rule-double" aria-hidden="true"></div>
        </header>

        <section className={'sec-tray' + beat(2)}>
          <div className="d-seclabel">On your desk</div>
          <TrayItem item={trayItem} onAction={onHandDeck} />
        </section>

        <section className={'sec-ledger' + beat(3)}>
          <div className="ledger-head">
            <img className="ledger-thumb" src={`${import.meta.env.BASE_URL}assets/raisedHands.png`} alt="" aria-hidden="true" />
            <div className="d-seclabel">Raised hands &middot; Week {d.pulse.week}</div>
          </div>
          <button
            className="ledger-row"
            onClick={() => alert("In the product, each raised hand opens with the student's wording, where it sits in the master, and the aside that answered it.")}
          >
            <span className="gmark"></span>
            <span>{d.ledger.repeated}</span>
          </button>
          <button
            className="ledger-row held"
            onClick={() => alert('In the product, the question that ran beyond the master opens verbatim, with the aside that named it. Answer it yourself or fold it into Week 5.')}
          >
            <span className="gmark">◆</span>
            <span>{d.ledger.beyond}</span>
          </button>
        </section>

        <section className={'sec-quiet' + beat(4)}>
          <div className="d-seclabel">Editions</div>
          <div className="gutter-row desk-pulse">
            <span className="gmark"><span className="desk-dot"></span></span>
            <span>{d.pulse.editions} editions met Week {d.pulse.week} this week. Every one was checked against its invariants before it shipped.</span>
          </div>
        </section>

        <section className={'sec-quiet last' + beat(4)}>
          <div className="d-seclabel">The drawer</div>
          <button className="drawer-row" onClick={onOpenRecord}>
            <span className="gmark"><span className="seal-mini">✓</span></span>
            <span>{d.drawer.line}</span>
          </button>
        </section>
      </div>

      <DeskBell struck={struck} />
    </div>
  )
}
