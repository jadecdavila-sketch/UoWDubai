import { useEffect, useRef, useState } from 'react'
import { perfs, themes } from '../data.js'

const THEME_TABS = [
  ['straight', 'As written'],
  ['sports', 'Sports'],
  ['food', 'Food'],
  ['gaming', 'Gaming'],
  ['campus', 'Student life'],
]

export default function PreviewScreen({ onRestart }) {
  const [theme, setTheme] = useState('straight')
  const [lens, setLens] = useState('straight')
  // The visible text lags the chosen lens by 200ms so the stage can fade between editions.
  const [shownLens, setShownLens] = useState('straight')
  const [swapping, setSwapping] = useState(false)
  const swapTimer = useRef(null)
  const [askedQs, setAskedQs] = useState({}) // { 1: 'student' | 'answered', 2: ... }

  useEffect(() => {
    if (lens === shownLens) return
    setSwapping(true)
    clearTimeout(swapTimer.current)
    swapTimer.current = setTimeout(() => {
      setShownLens(lens)
      setSwapping(false)
    }, 200)
    return () => clearTimeout(swapTimer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lens])

  function pickTheme(t) {
    setTheme(t)
    setLens(t === 'straight' ? 'straight' : themes[t][0][0])
  }

  function askQ(n) {
    setAskedQs(qs => (qs[n] ? qs : { ...qs, [n]: 'student' }))
    setTimeout(() => setAskedQs(qs => ({ ...qs, [n]: 'answered' })), 500)
  }

  const perf = perfs[shownLens]

  return (
    <div className="screen on" id="screen-5">
      <div className="sc-kicker">Step Five &middot; Edition Preview</div>
      <h1 className="sc-title">Same master. <em>Their</em> edition.</h1>
      <p className="sc-lede">What you approved is the skeleton. Each student meets their own edition of it. Watch what changes, and what refuses to.</p>

      <div className="stage-wrap">
        <div className={'perf-stage' + (swapping ? ' swap' : '')}>
          <div className="stage-body">
            <div className="portal" aria-hidden="true"><video autoPlay muted loop playsInline preload="auto" src={`${import.meta.env.BASE_URL}portal.mp4`}></video></div>
            <div className="stage-main">
              <div className="performer">
                <div>
                  <div className="pf-name">The Presenter</div>
                  <div className="pf-state"><span className="live-dot" aria-hidden="true"></span>Playing &middot; Chunk 3 of 5</div>
                </div>
              </div>
              <div className="perf-text">
                {perf.base}
                {perf.seam && <span className="seam">{perf.seam}</span>}
              </div>
            </div>
          </div>
          <div className="perf-inv"><span className="lock">●</span> <b>Held in every edition:</b> escalation is identity, not arithmetic &middot; sunk cost is never only money &middot; the learner names their own escalation trap.</div>
        </div>

        <div className="side-console">
          <div className="scn-label">The Student Console</div>
          <div className="c-group">
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 6 }}>Teach it through</div>
            <div className="lens-tabs" role="tablist">
              {THEME_TABS.map(([key, label]) => (
                <button className="ltab" key={key} aria-selected={theme === key} onClick={() => pickTheme(key)}>{label}</button>
              ))}
            </div>
            {theme !== 'straight' && (
              <div className="lens-subs">
                {themes[theme].map(([key, label]) => (
                  <button className="chip" key={key} aria-pressed={lens === key} onClick={() => setLens(key)}>{label}</button>
                ))}
              </div>
            )}
            <div className="console-note">In the product, themes come from the student's own interests; these are samples.</div>
          </div>
          <div className="c-group">
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 8 }}>Language</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button className="chip" aria-pressed="true">English</button>
              <button className="chip dim" aria-disabled="true">العربية &middot; Phase II</button>
            </div>
          </div>
        </div>
      </div>

      <div className="interlude">
        <div className="int-label">Raise a hand &middot; the aside</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="chip" onClick={() => askQ(1)}>“Is this the same as loss aversion?”</button>
          <button className="chip" onClick={() => askQ(2)}>“Will this be on the exam?”</button>
        </div>
        <div className={'bubble student' + (askedQs[1] ? ' on' : '')}><span className="b-who">You</span>Is escalation of commitment the same thing as loss aversion?</div>
        <div className={'bubble performer-b' + (askedQs[1] === 'answered' ? ' on' : '')}><span className="b-who">The Presenter &middot; traced: chunk 3, your deck slide 15</span>Close cousins, not twins. Loss aversion is about how losses feel heavier than gains. Escalation of commitment is what we do about it: continuing to invest so the loss never has to be admitted. Your course treats loss aversion next week, so hold the thread.</div>
        <div className={'bubble student' + (askedQs[2] ? ' on' : '')}><span className="b-who">You</span>Will this be on the exam?</div>
        <div className={'bubble performer-b' + (askedQs[2] === 'answered' ? ' on' : '')}><span className="b-who">The Presenter &middot; beyond the master &middot; routed to the question-ledger on the desk</span>That sits beyond the master; it belongs with your professor. I've added your question to their list, so it reaches them with this week's batch.</div>
        <div className="int-input">
          <input type="text" placeholder="Ask the presenter anything..." aria-label="Ask the presenter" />
          <button className="cta" style={{ padding: '10px 18px', fontSize: 11 }} onClick={() => alert('In the product, the Presenter answers live, inside the master and the faculty deck. Questions beyond the master are named as such and routed to the question-ledger on your desk.')}>Raise a hand</button>
        </div>
      </div>

      <div className="center"><button className="cta ghost" onClick={onRestart}>Restart the walkthrough</button></div>
    </div>
  )
}
