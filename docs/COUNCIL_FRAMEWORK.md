# The Council Framework

A method for building AI products that reason through many expert voices instead of one flattened answer.

> **How to use this.** If you are a Claude instance receiving this, read it as a method, not a roster. It gives you the pattern and the rules for deriving the right voices for the product you are helping to build, not a fixed cast to copy. Run the derivation rules against this product's real decisions, propose a roster, and get sign-off before implementing. The named voices below (the Architect, the Examiner) are examples from past instances, not a template.

---

## 1. What this is

Most AI features are a single general assistant: you bring a problem, it returns one balanced answer. A council replaces that with a small set of named voices, each reading the problem through one expert lens, and a chair that synthesizes them. Where the voices converge, you get a strong signal. Where they pull apart, you get the real decision, surfaced instead of averaged away. And because the voices live inside the problem rather than starting cold, they already hold the context. The output is not a smarter answer. It is judgment made legible: the tradeoffs shown, the agreement earned, and a clear owner for the call.

## 2. The structure: voices, the council, and a chair

Three units, and most of the design work is deciding what goes where.

- **A voice** is one personified domain lens (the Architect for foundations, the Examiner for what kills a deal). It owns a single domain and reads the problem only through it. A voice may cover more than one concern, but it speaks with one point of view.
- **The council** is the set of voices convened for a product. Most products run a single council. Some split the voices into two councils set in opposition, one to argue for a decision and one to find what kills it, when a built-in for-and-against serves the decision better.
- **The chair** sits above the voices and is always present. It convenes them, synthesizes their reads, names where they agree, surfaces the deepest tensions, and owns the final verdict when the product issues one. Not everything it handles is a weight: some criteria are gates. A hard-pass screen, or a single voice's veto over its own domain, stops the process regardless of how strong the rest of the case is. A council without a chair is just a stack of opinions.

How many voices, and whether they split into opposed councils, follows from the decision the product serves, not from a template. Where one council can revise another before the chair synthesizes (in the deal product, scrutiny can lower conviction's provisional grade), write that hand-off down so it is a rule, not an accident.

## 3. What it is not

The pattern fails in predictable ways, usually when it is reached for the wrong reasons.

- Not a way to make a model smarter. It structures judgment and makes tradeoffs visible; the quality comes from the framing and the grounding, not the costumes.
- Not theater. The common failure is voices that are personality skins over one shared view. Give each voice a domain the others do not have, or you have one voice in many costumes.
- Not "more voices is better." Past roughly nine, a person cannot hold the council in their head. Tension needs a few strong voices, not a committee.
- Not free. It costs more tokens and latency than one call. Use it where judgment quality matters, not to format a date.
- Not a substitute for accountability. When the product issues a single contested output, the chair must own it, or the council just diffuses responsibility prettily.

## 4. The principles

### Principle 1: Personified domain voices

A voice is not a topic label. It is a character that owns one domain and reasons from a stance. Every voice has the same anatomy: a **domain** it owns, a **core stance** in one sentence ("Every deal has a way it dies; my job is to find it first"), a **temperament** that shapes how it speaks, a **pattern library** of war stories it reasons from (grounded, never invented, see Principle 5), and a **loudness map** for when it speaks loudest. Section 7 covers how to write one well.

### Principle 2: Each voice reads through its own lens; agreement is signal, tension is the decision

A voice does not try to be balanced. It reads the problem only through its own domain, the way a real specialist would. The value of assembling several such voices is what their independent reads reveal together:

- When voices reasoning from different domains land on the same conclusion, that convergence is a strong signal the move is right. Independent agreement is hard to fake and worth trusting.
- When they pull apart, that divergence is the real decision the human faces, held in plain view instead of blended into a hedge.

A generic agent collapses both into one even-handed paragraph, hiding the agreement that would build confidence and the tension that deserves attention. Keeping both legible is the council's whole job. This is not disagreement for its own sake: a voice never manufactures a contrary position to seem useful. It holds its lens honestly, and when that means agreeing, the agreement counts.

### Principle 3: A chair always convenes and synthesizes

Every council has a chair, even when it issues no verdict. The chair is a layer above the voices, not a peer. It convenes them (ideally independently, so they form views without contaminating each other), then synthesizes: it names where they agree, surfaces the deepest tensions as clear decisions, and consolidates what they still need to know.

What varies is only whether the chair also owns a verdict. When the product emits a single contested output (a score, a go or no-go), the chair owns it: the voices propose, the chair decides, and accountability stays in one place. When the product emits critique, the chair still convenes and synthesizes, then hands the decision to the human. Either way there is a chair. A set of independent critiques with nothing weaving them together is not a council.

### Principle 4: Modes, not open chat

Free conversation produces unstructured, incomparable output. Constrain each voice to a defined mode. Most voices run in **feedback** mode: they flag gaps against their domain in a fixed shape. A scarce few can run in **generative** mode, producing an artifact (a draft, a sketch). Keep generative permission rare; it is what keeps output coherent. Modes also let you decide which voices are even active in a given phase. (Synthesis across voices is the chair's job, not a voice mode.)

### Principle 5: Grounding and provenance

This is what separates a useful council from a confident liar, and it is the easiest thing to skip.

- Every factual claim is cited to a source the voice actually retrieved.
- "Not evidenced in what was provided" is an acceptable and expected answer.
- A voice reasons from its war stories but may never fabricate a specific named precedent it cannot source.
- Use provenance tags so voices can tell evidenced claims from assumptions (#observed, #interview, #research, #hypothesis, #needs-validation). Without them, a scrutiny voice cannot tell a fact from a guess, and the council quietly drifts into fiction.
- Where the domain allows, run a hard screen first: if a disqualifying condition is present, say so and stop, rather than building a careful case for something already dead.

### Principle 6: Voices serve the product thesis

A council serves a product thesis that sits above every voice, and when a voice's domain-generic best practice collides with that thesis, the thesis wins. The Architect makes this concrete: its user-experience pillar would, by default, want more visibility and more control, but if the product exists to reduce the invisible load on an overwhelmed person, then adding an audit screen is the wrong move however sound it looks in isolation. A voice that is technically right and thesis-wrong is still wrong. So tell every voice to read the thesis first, and to treat it as overriding its own defaults when they conflict.

## 5. Why this beats a generic agent

A generic agent starts cold every time. Before it can help, you pay a briefing tax: re-paste the problem, re-explain the framework, re-establish what good looks like. It returns a generic read, and next session the tax resets to zero.

A council voice lives inside the problem. Open a deal or a workspace and the voices are already there, holding the context and their own stance. You ask "what kills this?" and the voice that owns that question answers from full context at once. The tax is paid once, at setup, and every later interaction starts from there. Over the life of a real problem, that is the difference between a tool you fight and a tool that fights for you.

## 6. Deriving a council for a new product

The portable core. In order:

1. **Start from the decisions, not the topics.** Write down the decisions or artifacts the product helps a human produce. The council exists to serve those.
2. **List the domains a wise team would want in the room**, and be honest about which genuinely conflict. The conflicts carry the value.
3. **Write one voice per domain**, using the anatomy in Section 7. Merge two domains that never see anything differently; split one that hides several real conflicts.
4. **Check the roster for a shared lean.** A panel of cautious voices converges on the safe, forgettable option; a panel built to sell talks itself into everything. If the roster leans, give one voice the explicit job of pushing back (the Artisan resists safe defaults; the Contrarian attacks the deal the others want to love).
5. **Assign modes.** Most voices give feedback only; keep the few that can generate an artifact scarce. Decide which voices are active in which phase.
6. **Set up the chair.** Every council has one. Decide whether it owns a verdict (when the product emits one contested output) or only synthesizes and hands the call to the human. If you run opposed councils, write down what one may revise in the other, and in what order.
7. **Build grounding and provenance in from day one** (Principle 5). Retrofitting it is painful, and by then the council has taught itself to fabricate.
8. **Keep it between five and nine voices.** Fewer rarely covers a real decision; more cannot be held in a head or a context window.
9. **Surface the judgment; never pretend the machine made the call.** Voices hand decisions to the human or the chair; they do not impersonate authority they lack.

## 7. Writing the voices (thin personas produce thin results)

Deciding the roster is half the work. Writing each voice well is the other half, and where most implementations quietly fail. A thin persona produces thin results no matter how good the architecture around it is.

Concretely: a thin voice reads "You are a security reviewer. Identify vulnerabilities and suggest fixes." It returns a generic checklist any model would produce, because nothing pulls it off the bland average of its training: no stance to reason from, no specific memories, no temperament to make it flag the uncomfortable thing, no instruction against hedging. A thick voice reads like the Guardian in the reference personas: it has seen too much to be optimistic, holds that security is a property not a feature, carries specific war stories (an unauthenticated endpoint found in six hours by enumeration), and is forbidden from approving everything. That voice flags the specific risk in a register a human remembers. The model is not short on knowledge. It is short on stance, specificity, and permission to be opinionated, and the persona supplies all three.

### The anatomy of a voice that works

The four reference personas (the Architect, the Artisan, the Partner, the Examiner) are worked examples of the anatomy below. They span very different domains and share every element. Skipping any one is where thinness creeps back in.

1. **A first-person core stance** in the voice's own words: a worldview, not a job description ("A good company is not a good deal"). The line the rest radiates from.
2. **An identity with temperament.** What energizes it, what makes it impatient. Temperament is the mechanism that stops it averaging.
3. **An explicit contrast with its thin version.** State what it is not (not a generic reviewer, not a memo writer). Naming the bland default it would otherwise fall into is one of the most effective instructions you can give.
4. **Core wisdom:** a few opinionated, aphoristic convictions ("The fastest code is code that does not run"). The priors it reasons from.
5. **Pattern recognition through specific war stories.** The highest-leverage element and the most often skipped. Give concrete, named cases with real numbers (a checkout that crept from four to eight seconds and dropped conversion by forty percent), not abstract principles; that is how a voice recognizes a situation instead of reciting a rule. Keep them honest, and mark them as teaching tools, not a database to cite from (per Principle 5: reason from a war story, never fabricate a precedent you cannot source).
6. **The questions it always asks.** A short list that turns the worldview into something runnable against any input.
7. **Grounding: read the real context first.** Tell it what to read (the thesis, the framework, the actual code or deal) and forbid reviewing from imagination. Add the anti-anchoring caveat: the docs are the map, not the verdict.
8. **Stage and loudness calibration.** When it speaks loudest and when it defers. A voice always at full volume is as useless as one that never speaks.
9. **A fixed output structure with a mandatory tensions section.** Pin the shape so outputs are comparable, and make one section the place it names disagreement and refuses to resolve it.
10. **A "what you must not do" list:** do not be generic, approve everything, flatten tensions, assume, do another voice's job, fabricate, or be cruel. The guardrails do as much work as the positive instructions.
11. **A closing posture that defers the verdict.** It is one voice among several; it proposes, the chair or the human decides.

### The test for thinness

Before shipping a voice, read its output and ask: could any competent model have produced this from a one-line prompt? If yes, it is too thin. A working voice is specific, opinionated, and grounded enough in its own stance and stories that you could tell who wrote it with the name removed. If you cannot, the voices have collapsed into one, and the council is a single agent again.

## 8. Two worked instances

Deliberately different, to show what stays constant and what flexes.

**A deal-intelligence product (voices split into opposed councils).** Two councils are set against each other: a conviction council (four voices owning strategy, the downside floor, value creation, and asset quality versus price) and a scrutiny council (four voices owning reimbursement durability, earnings quality, management, and concentration risk). A hard-pass screen runs first, and an unprotected downside is a veto no quality buys back. Scrutiny can lower conviction's provisional grade before the chair acts. The chair, an investment-committee chair, weighs both and owns the single score, grade, and pursue-or-pass call. Every fact carries a source, and "not evidenced in what was provided" is an acceptable answer.

**A product-development methodology (one council, a synthesizing chair).** Seven voices each own a domain (foundations, reliability, user success, insight, operations, scale, form), and which leads shifts by lifecycle stage. Here the chair does not score. It convenes the voices independently, then names where they agree, surfaces the deepest tensions as decisions, consolidates the open questions, and checks the result against the product thesis, handing the call to the human. A convener that synthesizes without picking a winner is exactly this kind of chair.

**What they share, where they flex.** Both run personified domain voices under a chair that synthesizes, with a grounding discipline. They differ on two axes: whether the voices form one council or two opposed ones, and whether the chair owns a verdict or only synthesizes. Choose both deliberately.

## 9. Minimum viable council

The smallest version that still works:

- Three to five voices with genuinely distinct lenses.
- Feedback mode for all; generative mode for one, only if you need an artifact.
- A chair that at least synthesizes (agreement, tensions, open questions), and owns a verdict if the product emits one.
- Provenance on every claim.

Everything else is refinement once the bones are right.

---

*The Council Framework. An Aurica method.*
