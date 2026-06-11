import { useState } from 'react'
import Steps from './components/Steps.jsx'
import DeskScreen from './components/DeskScreen.jsx'
import DeckScreen from './components/DeckScreen.jsx'
import RehearsalScreen from './components/RehearsalScreen.jsx'
import PodiumScreen from './components/PodiumScreen.jsx'
import ApprovedScreen from './components/ApprovedScreen.jsx'
import PreviewScreen from './components/PreviewScreen.jsx'

export default function App() {
  const [screen, setScreen] = useState('desk')
  const [rehearsalDone, setRehearsalDone] = useState(false)
  // Desk decisions carried into the approved record (screen 4)
  const [forte, setForte] = useState(false)
  const [struck, setStruck] = useState(false)
  // Passages reworded in the writing room, keyed by paragraph id
  const [scriptEdits, setScriptEdits] = useState({})
  // True once a deck is in the data room: set by the desk's standing slot or by an upload,
  // so stepping back to The Deck does not forget it
  const [deckPrefilled, setDeckPrefilled] = useState(false)
  // Furthest step reached, for click-back navigation in the steps strip
  const [maxStep, setMaxStep] = useState(0)

  function go(n) {
    setScreen(n)
    if (typeof n === 'number') setMaxStep(m => Math.max(m, n))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const inFlow = screen !== 'desk'

  return (
    <>
      <div className="topbar">
        <div className="brand">The <b>Studio</b> &middot; University of Wollongong in Dubai</div>
        <div className="proto">Prototype &middot; sample data</div>
      </div>
      {inFlow && (
        <div className="crumb"><button className="crumb-link" onClick={() => go('desk')}>Your desk</button><span>/</span>MGMT110 Principles of Management<span>/</span><b>Week 4 &middot; Decision Traps</b></div>
      )}

      {inFlow && <Steps current={screen} max={maxStep} onNavigate={go} />}

      {screen === 'desk' && (
        <DeskScreen
          struck={struck}
          onHandDeck={() => { setDeckPrefilled(false); setMaxStep(0); go(1) }}
          onToProofing={() => { setDeckPrefilled(true); setMaxStep(0); go(1) }}
          onOpenRecord={() => go(4)}
        />
      )}
      {screen === 1 && (
        <DeckScreen
          onSend={() => go(2)}
          onReceived={() => setDeckPrefilled(true)}
          initialStage={deckPrefilled ? 'received' : 'empty'}
        />
      )}
      {screen === 2 && (
        <RehearsalScreen
          done={rehearsalDone}
          onDone={() => setRehearsalDone(true)}
          onToPodium={() => go(3)}
        />
      )}
      {screen === 3 && (
        <PodiumScreen
          forte={forte}
          setForte={setForte}
          struck={struck}
          setStruck={setStruck}
          edits={scriptEdits}
          setEdits={setScriptEdits}
          onApprove={() => go(4)}
        />
      )}
      {screen === 4 && <ApprovedScreen forte={forte} struck={struck} editCount={Object.keys(scriptEdits).length} onPreview={() => go(5)} />}
      {screen === 5 && <PreviewScreen onRestart={() => go('desk')} />}

      <div className="footer-note">Aurica &middot; The Studio &middot; Faculty Flow Prototype &middot; Sample Course Data</div>
    </>
  )
}
