import { useState } from 'react'

export default function DeckScreen({ onSend, onReceived, initialStage = 'empty' }) {
  const [stage, setStage] = useState(initialStage) // 'empty' | 'reading' | 'received'

  function upload() {
    if (stage !== 'empty') return
    setStage('reading')
    setTimeout(() => {
      setStage('received')
      onReceived()
    }, 900)
  }

  return (
    <div className="screen on" id="screen-1">
      <div className="sc-kicker">Step One</div>
      <h1 className="sc-title">Hand the room <em>your deck</em>.</h1>
      <p className="sc-lede">Your slides become the data room. Everything downstream is accountable to them.</p>

      {stage === 'received' ? (
        <>
          <div className="filecard fade-in">
            <div className="f-badge">PPTX</div>
            <div>
              <div className="f-name">MGMT110_Week4_DecisionTraps.pptx</div>
              <div className="f-meta">24 slides &middot; 8.2 MB &middot; received just now</div>
            </div>
          </div>

          <div className="dataroom-note fade-in"><span className="dia">◆</span> Every claim in the finished script will either trace to a slide in this deck or wear a tag naming it as enrichment the room added. Enrichment is always yours to strike.</div>

          <div className="center fade-in"><button className="cta" onClick={onSend}>Send it to the proofing room</button></div>
        </>
      ) : (
        <button className="drop await" onClick={upload}>
          <div className="d-icon">♯</div>
          <div className="d-line serif">{stage === 'reading' ? 'Reading the deck…' : "Drop this week's deck"}</div>
          <div className="d-sub">{stage === 'reading' ? 'Slides, notes, and readings entering the data room' : 'PDF or PPTX · lecture notes and readings welcome alongside · click to use the sample deck'}</div>
        </button>
      )}
    </div>
  )
}
