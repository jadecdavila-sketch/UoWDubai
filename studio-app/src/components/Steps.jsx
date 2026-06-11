const STEPS = ['The Deck', 'The Proof', 'The Writing Room', 'Approved', 'As Your Students']

export default function Steps({ current, max, onNavigate }) {
  return (
    <div className="steps">
      {STEPS.map((label, i) => {
        const n = i + 1
        const navigable = n <= max && n !== current
        const cls = 'step' + (n === current ? ' active' : '') + (navigable ? ' done' : '')
        return navigable ? (
          <button className={cls} key={n} onClick={() => onNavigate(n)}>
            <span className="sn">{n}</span>{label}
          </button>
        ) : (
          <div className={cls} key={n}>
            <span className="sn">{n}</span>{label}
          </div>
        )
      })}
    </div>
  )
}
