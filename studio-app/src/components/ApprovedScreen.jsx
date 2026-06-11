export default function ApprovedScreen({ forte, struck, editCount = 0, onPreview }) {
  let wordingNote = 'Kept as the room drafted it.'
  if (editCount === 1) {
    wordingNote = 'One passage reworded in the writing room. The trace records the wording as yours.'
  } else if (editCount > 1) {
    wordingNote = `${editCount} passages reworded in the writing room. The trace records the wording as yours.`
  }

  const rows = [
    {
      k: 'The Gulf enrichment',
      v: struck
        ? 'Struck, at your desk. The ledger records the call as yours.'
        : 'Kept, wearing its tag, ledgered as yours to revisit.',
    },
    {
      k: 'The opening',
      v: forte
        ? 'The Provocateur, turned up: the cold open ships, with the silence scripted.'
        : 'Standard reading shipped; the bold open stays one dial away.',
    },
    { k: 'The wording', v: wordingNote },
    { k: 'The checkpoint', v: 'Kept as drafted: students name an escalation of their own.' },
  ]

  return (
    <div className="screen on" id="screen-4">
      <div className="approved-hero">
        <div className="seal">✓</div>
        <div className="sc-kicker" style={{ textAlign: 'center' }}>Step Four</div>
        <h1 className="sc-title">The master is <em>approved</em>.</h1>
        <p className="sc-lede" style={{ margin: '14px auto 0' }}>Week 4, five chunks, signed at your desk. Every edition your students meet renders from this master, and is re-checked against its invariants before it ships.</p>
      </div>

      <div className="record-wrap">
        <div className="d-seclabel" style={{ maxWidth: 640, margin: '34px auto 6px' }}>The record of your desk</div>
        <div className="record">
          {rows.map(r => (
            <div className="rec-row" key={r.k}><div className="q">“</div><div className="rk"><b>{r.k}:</b> {r.v}</div></div>
          ))}
        </div>
        <div className="record-foot">23 claims traced to your deck &middot; 4 additions tagged &middot; 1 collision carried to you, intact</div>
      </div>

      <p className="approved-line">Nothing shipped unapproved. The room reasoned; you decided.<br /><span style={{ fontSize: 14, color: 'var(--sage-deep)' }}>The master is versioned and house-reviewed. Every edition your students meet renders from it, and is checked against it.</span></p>

      <div className="center"><button className="cta" onClick={onPreview}>See it as your students will</button></div>
    </div>
  )
}
