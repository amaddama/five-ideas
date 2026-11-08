/* ============================================================
   THE CONTENT LIVES HERE.
   To expand the guide, add objects to the arrays below
   (ideas, thinkers, quotes, flashcards, quiz, practice…).
   You can also add a 6th category by copying one block.
   Things you add in the browser (notes, custom ideas, custom
   flashcards) are saved separately in localStorage.
   ============================================================ */

window.STUDY_DATA = [
  /* ───────────────────────── 1 ───────────────────────── */
  {
    id: "control",
    num: "01",
    title: "Dichotomy of Control",
    short: "Control",
    school: "Stoicism",
    origin: "Hellenistic Greece & Rome",
    accent: "#6EA8FE",
    glyph: "control",
    tagline: "Sort the world into what's yours to steer and what isn't. Spend your energy only on the first pile.",
    bigQuestion: "What is actually up to me?",
    summary: [
      "The Stoics noticed that most suffering comes from trying to command things we can't command. Epictetus opens his handbook with the cut that defines the whole school: some things are up to us, and some are not.",
      "Up to us: our judgments, intentions, choices and actions. Not up to us: our body, reputation, wealth, other people, and how things turn out. Peace comes from putting your effort — and your sense of success — in the first pile."
    ],
    thinkers: [
      { name: "Epictetus", dates: "c. 50–135 CE", role: "Former slave turned teacher. His Discourses and Enchiridion were recorded by his student Arrian." },
      { name: "Marcus Aurelius", dates: "121–180 CE", role: "Roman emperor. His private journal, the Meditations, is Stoic practice in real time." },
      { name: "Seneca", dates: "c. 4 BCE–65 CE", role: "Statesman and playwright. Wrote the Letters to Lucilius on daily practice." },
      { name: "Zeno of Citium", dates: "c. 334–262 BCE", role: "Founder of Stoicism, teaching at the painted porch (stoa) in Athens." }
    ],
    quotes: [
      { text: "Some things are up to us and some are not up to us.", source: "Epictetus, Enchiridion 1" },
      { text: "Men are disturbed not by things, but by the views which they take of them.", source: "Epictetus, Enchiridion 5" },
      { text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.", source: "Marcus Aurelius, Meditations 8.47" }
    ],
    ideas: [
      {
        id: "control-1", title: "Up to us / not up to us",
        short: "The core sort.",
        body: "Epictetus splits reality in two. Up to us: opinion, impulse, desire, aversion — in short, whatever is our own doing. Not up to us: body, property, reputation, office — whatever isn't our own doing. Confusing the two is the root of anxiety and anger.",
        example: "Job interview: your preparation, honesty and tone are yours. Whether they hire you is not."
      },
      {
        id: "control-2", title: "It's the judgment, not the event",
        short: "Between impression and reaction, there is assent.",
        body: "An event hits you as an impression. The distress comes from the judgment you add — 'this is terrible', 'he disrespected me'. Stoics train to pause and test the impression before agreeing to it.",
        example: "Someone cuts you off in traffic. The event is a car moving. The sting is your story: 'disrespect'."
      },
      {
        id: "control-3", title: "The archer",
        short: "Aim well; the hit is a bonus.",
        body: "In an analogy Cicero reports (from the Stoic Antipater), an archer does everything possible to shoot well. Hitting the target is 'preferred', but the archer's own success is in the quality of the shot, which is within their control.",
        example: "Studying for an exam: your preparation is the shot. The grade is the arrow's landing."
      },
      {
        id: "control-4", title: "The reserve clause",
        short: "Plan with 'fate permitting' attached.",
        body: "Seneca and Marcus advise acting 'with reservation': commit fully to your effort while quietly holding that the result may be blocked. You aren't pessimistic, you've just pre-forgiven the world.",
        example: "'I'll host a great dinner — unless something outside my power prevents it.' If it rains, your plan changed, not your peace."
      },
      {
        id: "control-5", title: "Premeditatio malorum",
        short: "Rehearse what could go wrong.",
        body: "Seneca recommends imagining setbacks in advance — loss, failure, insult — so that they arrive as familiar, not as shocks. The goal is composure, not gloom.",
        example: "Before a big presentation, picture the projector failing and decide how you'd calmly continue."
      },
      {
        id: "control-6", title: "The trichotomy of control (modern)",
        short: "A useful patch: some things are partly ours.",
        body: "Philosopher William Irvine proposed adding a middle bucket — things we partly influence, like a tennis match. There the advice is to set internal goals (play my best) rather than external ones (win).",
        example: "Your team's project: you control your contribution, influence the group, and can't control the market."
      }
    ],
    practice: [
      "Two-column sort: write today's worries, then split them into 'mine to steer' and 'not mine'. Act only on the first column.",
      "Evening review (Seneca): ask what you did well, what you did poorly, and what you left undone. No self-punishment — just notes.",
      "Pause before assent: when you feel a spike of anger or dread, say 'you are an impression, not the thing itself', then check the facts."
    ],
    misreadings: [
      { myth: "Stoics suppress their emotions.", truth: "They examine the judgments behind passions. They keep 'good feelings' like joy, caution and goodwill." },
      { myth: "If it's not in my control, I shouldn't care.", truth: "Stoics stressed duty and justice. What's 'indifferent' is the outcome's power to damage your character." },
      { myth: "'Not up to me' is a great excuse.", truth: "It's the opposite. Everything that is up to you — your judgments, effort and choices — is fully your responsibility." }
    ],
    vs: [
      { id: "wuwei", text: "Both accept what is outside your hands. Stoics train deliberate judgment; Daoists trust spontaneous flow." },
      { id: "badfaith", text: "Beware the bad-faith trap: 'it's not in my control' can slide from a tool into an excuse." }
    ],
    compare: {
      question: "What is up to me, and what isn't?",
      move: "Sort, then spend effort only on what's yours.",
      practice: "Evening review; the two-column sort.",
      pitfall: "Mistaking calm for coldness."
    },
    flashcards: [
      { q: "What's the 'dichotomy of control'?", a: "Epictetus's split of the world into what is up to us (judgments, choices, actions) and what is not (body, reputation, outcomes)." },
      { q: "Which text opens with 'Some things are up to us…'?", a: "Epictetus's Enchiridion (the 'Handbook')." },
      { q: "What does the archer analogy teach?", a: "Do everything to shoot well; the hit itself isn't up to you. Your success lies in the quality of the effort." },
      { q: "What is the reserve clause?", a: "Acting with the unspoken qualifier 'fate permitting', committing to the effort while holding the outcome loosely." },
      { q: "What is premeditatio malorum?", a: "Deliberately rehearsing possible setbacks in advance so they don't shock you." },
      { q: "Who was Epictetus?", a: "A former slave turned Stoic teacher (c. 50–135 CE) whose lectures were recorded by Arrian." }
    ],
    quiz: [
      { q: "Which text famously opens with 'Some things are up to us and some are not'?", options: ["Meditations", "Enchiridion", "Letters from a Stoic", "The Republic"], answer: 1, why: "It's the opening of Epictetus's Enchiridion, compiled by his student Arrian." },
      { q: "According to Epictetus, which of these is 'up to us'?", options: ["Your reputation", "Your judgments", "Your health", "The outcome of your job interview"], answer: 1, why: "Judgments, desires and actions are ours. Reputation, health and outcomes are not entirely so." },
      { q: "In the archer analogy, what is within the archer's control?", options: ["Whether the arrow hits", "The wind", "Preparing, aiming and releasing well", "Other archers' praise"], answer: 2, why: "The shot is yours; the landing isn't. Success is located in the quality of the effort." },
      { q: "Premeditatio malorum involves…", options: ["Praying for good luck", "Rehearsing what could go wrong in advance", "Ignoring bad news", "Avoiding risk completely"], answer: 1, why: "Seneca's exercise: imagine setbacks beforehand so they arrive as familiar rather than shocking." }
    ]
  },

  /* ───────────────────────── 2 ───────────────────────── */
  {
    id: "wuwei",
    num: "02",
    title: "Wu Wei",
    short: "Wu Wei",
    school: "Daoism",
    origin: "Ancient China",
    accent: "#5FD3A5",
    glyph: "wuwei",
    tagline: "Effortless action. Move with the grain of things instead of shoving against it.",
    bigQuestion: "How do I act without forcing?",
    summary: [
      "Wu wei (無為) is usually translated 'non-action', but it doesn't mean doing nothing. It means acting without strain: no grasping, no forcing, no fighting the current. Think of a skilled swimmer, not a floating log.",
      "The Daoist claim is that the world already has a natural pattern (the Dao, or 'Way'). Wise action fits that pattern. Force creates resistance; yielding finds the path."
    ],
    thinkers: [
      { name: "Laozi", dates: "traditionally 6th c. BCE", role: "Semi-legendary sage credited with the Tao Te Ching, a short book of 81 poems." },
      { name: "Zhuangzi", dates: "c. 369–286 BCE", role: "Daoist storyteller whose funny, strange parables (like Cook Ding) make the ideas tangible." },
      { name: "Alan Watts", dates: "1915–1973", role: "Modern interpreter who brought Daoism to Western readers (e.g. Tao: The Watercourse Way)." }
    ],
    quotes: [
      { text: "The Way never acts, yet nothing is left undone.", source: "Tao Te Ching 37" },
      { text: "The highest good is like water.", source: "Tao Te Ching 8" },
      { text: "A journey of a thousand miles starts beneath one's feet.", source: "Tao Te Ching 64" }
    ],
    ideas: [
      {
        id: "wuwei-1", title: "Non-action ≠ inaction",
        short: "Acting without forcing.",
        body: "The Tao Te Ching repeatedly describes the sage as 'doing without doing' (wei wu wei). The idea is action that is so well-fitted to the situation that it feels effortless and leaves no mess behind.",
        example: "Compare gripping a pen so hard your hand cramps with writing in a relaxed flow."
      },
      {
        id: "wuwei-2", title: "Be like water",
        short: "Soft overcomes hard.",
        body: "Laozi's favorite image: water benefits everything, doesn't compete, settles in low places, and yet wears down stone. Yielding is a strategy, not weakness.",
        example: "When a conversation turns heated, softening your tone often moves things more than pushing harder."
      },
      {
        id: "wuwei-3", title: "Cook Ding and the ox",
        short: "Skill so deep it stops being effort.",
        body: "In the Zhuangzi, a butcher carves an ox so smoothly his knife never dulls. He says he doesn't see the ox anymore — he follows the natural gaps in it. Mastery means moving along the grain of reality.",
        example: "An experienced driver, climber or musician who 'just knows' where to go next."
      },
      {
        id: "wuwei-4", title: "Ziran and the uncarved block",
        short: "Naturalness over contrivance.",
        body: "Ziran (自然) means 'so of itself' — things unfolding by their own nature. The uncarved block (pu) is Laozi's symbol of simplicity before labels, status and striving carve us up.",
        example: "Dropping a performative version of yourself in a room because it no longer helps."
      },
      {
        id: "wuwei-5", title: "Know when to stop",
        short: "Enough is a skill.",
        body: "Chapter 44 notes that those who know when to stop are free from danger. Wu wei includes restraint: not over-polishing, not over-managing, not adding the extra hour that spoils the work.",
        example: "Ending a workout, edit or argument at the point where more effort makes things worse."
      }
    ],
    practice: [
      "Notice the grip: a few times today, check where you're clenching (jaw, shoulders, schedule). Loosen by 10%.",
      "Subtract one thing: remove a single task or commitment instead of adding a new productivity trick.",
      "Find your Cook Ding: pick a skill you're decent at and write down what 'flow' feels like. What makes it effortless?"
    ],
    misreadings: [
      { myth: "Wu wei means being lazy or passive.", truth: "It means effortless, well-fitted action. The sage acts, but without strain or ego-driven force." },
      { myth: "It's just 'go with the flow' about everything.", truth: "Yielding is intelligent. Like water, you find the path; you don't dissolve." },
      { myth: "It's the same as Stoic acceptance.", truth: "Related, but Stoics emphasize disciplined judgment. Daoists emphasize spontaneity and trust in natural patterns." }
    ],
    vs: [
      { id: "control", text: "Stoics train the mind to judge correctly; Daoists suspect too much deliberate training is itself forcing." },
      { id: "mean", text: "Aristotle builds virtue through deliberate habit. Daoists wonder if cultivated virtue already departs from naturalness." }
    ],
    compare: {
      question: "How do I act without forcing?",
      move: "Yield, fit the situation, stop at enough.",
      practice: "Notice the grip; subtract one thing.",
      pitfall: "Confusing flow with laziness."
    },
    flashcards: [
      { q: "What does 'wu wei' mean?", a: "Literally 'non-action' or 'without doing': effortless, unforced action in harmony with the Dao." },
      { q: "Which book is attributed to Laozi?", a: "The Tao Te Ching (Daodejing), 81 short chapters." },
      { q: "Why does Laozi praise water?", a: "It benefits all things without competing, settles low, and yet overcomes hard things." },
      { q: "What's the story of Cook Ding?", a: "A butcher who carves an ox without dulling his knife by following its natural gaps. A picture of effortless mastery." },
      { q: "What is ziran?", a: "'Naturalness' or 'so of itself': things unfolding according to their own nature." },
      { q: "What is the uncarved block (pu)?", a: "Laozi's symbol of simplicity and original nature before labels and striving." }
    ],
    quiz: [
      { q: "Wu wei is best translated as…", options: ["Great path", "Non-forcing, effortless action", "Empty mind", "Complete silence"], answer: 1, why: "Literally 'non-action', but it means acting without strain, not doing nothing." },
      { q: "Which text is traditionally attributed to Laozi?", options: ["The Analects", "The Art of War", "Tao Te Ching", "The I Ching"], answer: 2, why: "The Tao Te Ching (Daodejing) is the foundational Daoist text." },
      { q: "What does Cook Ding illustrate?", options: ["That knives need sharpening", "Mastery as moving along the natural grain of things", "That butchers are wise", "That work should be avoided"], answer: 1, why: "His skill is so deep he follows the natural gaps in the ox. Effort has dissolved into fit." },
      { q: "Which image does Laozi use for the highest good?", options: ["Mountain", "Fire", "Water", "Bamboo"], answer: 2, why: "Chapter 8: 'The highest good is like water.'" }
    ]
  },

  /* ───────────────────────── 3 ───────────────────────── */
  {
    id: "socratic",
    num: "03",
    title: "Socratic Ignorance",
    short: "Socratic",
    school: "Classical Greek philosophy",
    origin: "Classical Athens",
    accent: "#FF8F5A",
    glyph: "socratic",
    tagline: "Wisdom begins by noticing the edge of what you actually know.",
    bigQuestion: "Do I know what I think I know?",
    summary: [
      "Socrates left no writings. We meet him mainly through Plato's dialogues. In Plato's Apology, Socrates says he is wiser than others in one small way: he doesn't think he knows what he doesn't know.",
      "That humility isn't an ending point. It's a method. By asking careful questions, Socrates exposes hidden contradictions in our confident beliefs and invites us to think again, together."
    ],
    thinkers: [
      { name: "Socrates", dates: "470–399 BCE", role: "Athenian philosopher who questioned people in public. Tried and executed for impiety and 'corrupting the youth'." },
      { name: "Plato", dates: "c. 428–348 BCE", role: "Socrates's student. His dialogues are our main source, though Plato's own views blend with Socrates's." },
      { name: "Xenophon", dates: "c. 430–354 BCE", role: "Soldier and writer. His Memorabilia is a second, more down-to-earth portrait." },
      { name: "Aristophanes", dates: "c. 446–386 BCE", role: "Comic playwright whose Clouds caricatured Socrates, showing how Athens saw him." }
    ],
    quotes: [
      { text: "The unexamined life is not worth living for a human being.", source: "Plato, Apology 38a" },
      { text: "I neither know nor think I know [the things I do not know].", source: "Plato, Apology 21d (paraphrase)" },
      { text: "Wisdom begins in wonder.", source: "Plato, Theaetetus 155d (often paraphrased)" }
    ],
    ideas: [
      {
        id: "socratic-1", title: "The oracle puzzle",
        short: "Why a prophecy started it all.",
        body: "Socrates's friend Chaerephon asked the Oracle at Delphi if anyone was wiser than Socrates. The oracle said no. Puzzled, Socrates tested politicians, poets and craftsmen to refute it, and found they all claimed knowledge they lacked.",
        example: "An expert who confidently speaks outside their field and can't say why."
      },
      {
        id: "socratic-2", title: "Wise by knowing the limits",
        short: "Not 'I know nothing' but 'I don't pretend.'",
        body: "Socrates concludes his wisdom is human, limited wisdom: he doesn't think he knows what he doesn't know. The popular line 'I know that I know nothing' is a later summary, not a direct quote.",
        example: "Saying 'I'm not sure — let me check' instead of bluffing in a meeting."
      },
      {
        id: "socratic-3", title: "Elenchus: the questioning method",
        short: "Cross-examination that tests beliefs.",
        body: "Socrates asks 'What is courage?' (or justice, piety…). He takes the answer, draws out its consequences, and shows it conflicts with other things the speaker believes. Refinement follows.",
        example: "'Is a fearless soldier always courageous? What about a reckless one?' Each question narrows the definition."
      },
      {
        id: "socratic-4", title: "Aporia: productive puzzlement",
        short: "Being stuck is progress.",
        body: "Many dialogues end in aporia — a state of perplexity with no final answer. For Socrates this isn't failure: clearing false certainty is the first step toward real inquiry.",
        example: "Realizing you can't actually define 'fairness' after being sure you could."
      },
      {
        id: "socratic-5", title: "The examined life",
        short: "Living on autopilot isn't enough.",
        body: "At his trial, Socrates refuses to stop philosophizing, saying the unexamined life is not worth living. Examination means testing your values and habits, not just your opinions.",
        example: "Periodically asking 'Why do I actually want this career/lifestyle?' and following the answer."
      }
    ],
    practice: [
      "Ask 'What do you mean by…?' three times in a conversation today — genuinely curious, not gotcha.",
      "Write 'Things I believe but couldn't defend' and pick one to investigate this week.",
      "Steelman: state an opposing view so well that its holder would say 'yes, that's what I think'."
    ],
    misreadings: [
      { myth: "Socrates claimed to know nothing at all.", truth: "He claimed no expert knowledge of the big questions. He did hold firm views, like that doing wrong is worse than suffering it." },
      { myth: "The method is just asking annoying questions.", truth: "It's a cooperative search. Done well, it tests ideas rather than humiliating people." },
      { myth: "Ignorance is the goal.", truth: "It's the starting point. Admitting limits makes real learning possible." }
    ],
    vs: [
      { id: "mean", text: "Socrates asks what virtue is; Aristotle supplies a working map of virtue in practice." },
      { id: "badfaith", text: "Both start with honest self-examination. Self-deception is the enemy of the Socratic life." }
    ],
    compare: {
      question: "Do I know what I think I know?",
      move: "Question your own confident beliefs.",
      practice: "Ask 'what do you mean?'; steelman.",
      pitfall: "Questioning as a weapon, not a search."
    },
    flashcards: [
      { q: "What is Socratic ignorance?", a: "Recognizing the limits of your own knowledge and not claiming to know what you don't." },
      { q: "What did the Oracle at Delphi say?", a: "In response to Chaerephon, that no one was wiser than Socrates, which launched his investigation." },
      { q: "What's the elenchus?", a: "Socrates's method of cross-examination: probing a claim with questions to expose contradictions." },
      { q: "What is aporia?", a: "A state of puzzlement or impasse, often reached at the end of Socratic dialogues." },
      { q: "Where does 'the unexamined life…' come from?", a: "Plato's Apology (38a), Socrates's defence at his trial." },
      { q: "Is 'I know that I know nothing' an exact quote?", a: "No. It's a later paraphrase of Apology 21d: he neither knows nor thinks he knows what he doesn't know." }
    ],
    quiz: [
      { q: "Why did Socrates consider himself wise?", options: ["He had studied under the Oracle", "He recognized the limits of his knowledge", "He knew every virtue", "He had many followers"], answer: 1, why: "He was wiser only in not thinking he knew what he didn't know." },
      { q: "What launched Socrates's public questioning?", options: ["A Spartan invasion", "A dream about Plato", "The Delphic Oracle's answer to Chaerephon", "A royal decree"], answer: 2, why: "Told no one was wiser, Socrates set out to test the claim." },
      { q: "What is the 'elenchus'?", options: ["A speech of praise", "A cross-examination that exposes contradictions", "A silent meditation", "A debate trophy"], answer: 1, why: "The elenchus tests beliefs by questioning and drawing out consequences." },
      { q: "Aporia refers to…", options: ["A definitive answer", "A state of puzzlement or impasse", "An Athenian law", "A poem"], answer: 1, why: "Many dialogues end in aporia; clearing false certainty is itself progress." }
    ]
  },

  /* ───────────────────────── 4 ───────────────────────── */
  {
    id: "mean",
    num: "04",
    title: "Golden Mean",
    short: "Golden Mean",
    school: "Aristotelian virtue ethics",
    origin: "Classical Athens",
    accent: "#E9D25E",
    glyph: "mean",
    tagline: "Every virtue sits between too much and too little. Find the right amount for the moment.",
    bigQuestion: "What's the right amount here?",
    summary: [
      "In the Nicomachean Ethics, Aristotle argues that a good life is an active one, which he calls eudaimonia ('flourishing'). Flourishing comes from developing virtues, and each virtue is a mean between two vices: one of excess and one of deficiency.",
      "Crucially, the mean isn't a fixed midpoint or mediocrity. It's the response that fits the person, time and situation, and finding it takes practiced judgment (phronesis)."
    ],
    thinkers: [
      { name: "Aristotle", dates: "384–322 BCE", role: "Plato's student and Alexander the Great's tutor. Author of the Nicomachean Ethics." },
      { name: "Confucius", dates: "551–479 BCE", role: "Not Greek, but a parallel: the Zhongyong ('Doctrine of the Mean') tradition also values balance." },
      { name: "Thomas Aquinas", dates: "1225–1274", role: "Medieval theologian who built Aristotle's virtue ethics into Christian thought." }
    ],
    quotes: [
      { text: "…at the right times, about the right things, towards the right people, for the right end, and in the right way, is what is intermediate and best.", source: "Aristotle, Nicomachean Ethics II.6 (1106b)" },
      { text: "We are what we repeatedly do. Excellence, then, is not an act but a habit.", source: "Will Durant's summary of Aristotle (not a direct quote)" },
      { text: "Virtue is a state of character concerned with choice, lying in a mean.", source: "Aristotle, Nicomachean Ethics II.6" }
    ],
    spectrum: [
      { virtue: "Courage", deficiency: "Cowardice", excess: "Rashness" },
      { virtue: "Temperance", deficiency: "Insensibility", excess: "Self-indulgence" },
      { virtue: "Generosity", deficiency: "Stinginess", excess: "Wastefulness" },
      { virtue: "Good temper", deficiency: "Spiritlessness", excess: "Irascibility" },
      { virtue: "Truthfulness", deficiency: "Self-belittling", excess: "Boastfulness" },
      { virtue: "Wit", deficiency: "Boorishness", excess: "Buffoonery" }
    ],
    ideas: [
      {
        id: "mean-1", title: "Virtue lies between two vices",
        short: "Too little, too much, and the sweet spot.",
        body: "For each virtue there are two failure modes. Courage sits between cowardice (too little confidence in the face of fear) and rashness (too much). Seeing virtues as targets between extremes makes character visible and trainable.",
        example: "Speaking up in a meeting: silence is a deficiency; steamrolling everyone is an excess."
      },
      {
        id: "mean-2", title: "The mean is relative to us",
        short: "Not the arithmetical middle.",
        body: "Aristotle's example: if ten pounds of food is a lot and two is little, a trainer won't automatically prescribe six. It depends on the athlete (a champion like Milo, or a beginner). Good judgment is contextual.",
        example: "A first-time marathoner and an elite runner need very different training loads."
      },
      {
        id: "mean-3", title: "Eudaimonia: flourishing",
        short: "The point of all this.",
        body: "Eudaimonia is often translated 'happiness', but it's closer to 'living well and doing well': a life of excellent activity over time. Aristotle also thinks friends, health and some resources help; virtue alone isn't quite enough.",
        example: "A life of meaningful work, good friendships and growth, not a perfect Tuesday."
      },
      {
        id: "mean-4", title: "Habituation: you become what you practice",
        short: "Virtues are built, like skills.",
        body: "We become just by doing just acts and brave by doing brave acts. Character is formed gradually through repetition and good examples, which means you can start now.",
        example: "Practicing generosity with small gifts until it becomes your default response."
      },
      {
        id: "mean-5", title: "Phronesis: practical wisdom",
        short: "The skill of finding the mean.",
        body: "There's no formula for 'the right amount'. Phronesis is the experienced judgment that spots what a situation calls for. It develops through experience, reflection and learning from wise people.",
        example: "Knowing when a friend needs advice and when they just need you to listen."
      }
    ],
    practice: [
      "Pick one virtue and plot yourself: do you tend to drift toward the deficiency or the excess? Aim a little toward the other side.",
      "Use Aristotle's checklist before a decision: right time? right amount? right person? right reason? right way?",
      "Find a role model: someone who handles a situation well. Write down what exactly they do that you don't."
    ],
    misreadings: [
      { myth: "It means 'moderation in everything' or being average.", truth: "Some actions have no mean (e.g. murder, cruelty). And at the extreme of excellence, the mean is a peak, not a compromise." },
      { myth: "The mean is the exact middle.", truth: "It's relative to you and the circumstance." },
      { myth: "It's a formula you can apply.", truth: "It needs practical wisdom (phronesis), which only experience builds." }
    ],
    vs: [
      { id: "socratic", text: "Socrates keeps asking what virtue is; Aristotle gives a working map of how to practice it." },
      { id: "control", text: "Stoics say virtue alone is enough for happiness. Aristotle also counts friends, health and resources." }
    ],
    compare: {
      question: "What's the right amount here?",
      move: "Find the response between excess and deficiency.",
      practice: "Plot your virtue drift; the five 'rights'.",
      pitfall: "Treating it as bland moderation."
    },
    flashcards: [
      { q: "What is the Golden Mean?", a: "Aristotle's idea that each virtue is a mean between a vice of excess and a vice of deficiency." },
      { q: "Courage sits between which two vices?", a: "Cowardice (deficiency) and rashness (excess)." },
      { q: "What does 'relative to us' mean?", a: "The mean varies with the person and situation — not the exact arithmetic middle." },
      { q: "What is eudaimonia?", a: "'Flourishing': a life of excellent activity, often translated as happiness." },
      { q: "What is phronesis?", a: "Practical wisdom: the experienced judgment that finds the right action in context." },
      { q: "How are virtues acquired, according to Aristotle?", a: "By habituation: practicing virtuous actions until they become character." }
    ],
    quiz: [
      { q: "Courage, as a mean, lies between…", options: ["Fear and anger", "Cowardice and rashness", "Pride and humility", "Wisdom and folly"], answer: 1, why: "Cowardice is too little confidence in the face of danger; rashness is too much." },
      { q: "'The mean is relative to us' means…", options: ["It's always the exact middle", "It's whatever we feel like", "It varies by person and situation", "It's the same for everyone"], answer: 2, why: "Aristotle's trainer example: the right amount depends on the athlete." },
      { q: "Is the Golden Mean mediocrity?", options: ["Yes — always play it safe", "No — it's the fitting response at the right time, way and degree", "Yes — avoid all extremes", "No — it means maximum intensity"], answer: 1, why: "It's about fit, and finding the fit needs practical wisdom." },
      { q: "Phronesis is…", options: ["A type of poetry", "A Greek city", "Practical wisdom for finding the mean", "A moral law"], answer: 2, why: "Phronesis is the skill of perceiving what a situation calls for." }
    ]
  },

  /* ───────────────────────── 5 ───────────────────────── */
  {
    id: "badfaith",
    num: "05",
    title: "Bad Faith",
    short: "Bad Faith",
    school: "Existentialism",
    origin: "20th-century France",
    accent: "#E86A92",
    glyph: "badfaith",
    tagline: "Lying to yourself so you don't have to own your freedom.",
    bigQuestion: "Where am I pretending I have no choice?",
    summary: [
      "For Sartre there's no pre-set human nature: 'existence precedes essence'. You exist first, then define yourself through your choices. That makes you radically free — and radically responsible, which can be unbearable.",
      "Bad faith (mauvaise foi) is the escape hatch: hiding from that freedom by pretending you're just a role, a personality, a past or a circumstance. It's self-deception, not an outright lie to others."
    ],
    thinkers: [
      { name: "Jean-Paul Sartre", dates: "1905–1980", role: "French philosopher and writer. Being and Nothingness (1943); Existentialism Is a Humanism (1946)." },
      { name: "Simone de Beauvoir", dates: "1908–1986", role: "Philosopher who developed existentialist ethics (The Ethics of Ambiguity) and feminist theory (The Second Sex)." },
      { name: "Søren Kierkegaard", dates: "1813–1855", role: "Danish precursor who wrote about anxiety, choice and the 'leap' of commitment." },
      { name: "Albert Camus", dates: "1913–1960", role: "Contemporary and rival of Sartre; explored the absurd. Rejected the 'existentialist' label." }
    ],
    quotes: [
      { text: "Existence precedes essence.", source: "Sartre, Existentialism Is a Humanism" },
      { text: "Man is condemned to be free.", source: "Sartre, Existentialism Is a Humanism" },
      { text: "To will oneself free is also to will others free.", source: "Simone de Beauvoir, The Ethics of Ambiguity" }
    ],
    ideas: [
      {
        id: "badfaith-1", title: "Existence precedes essence",
        short: "No blueprint. You make yourself.",
        body: "A paper-knife is designed for a purpose before it exists. Humans aren't: we show up first and define ourselves by what we do. There is no built-in script for who you are 'supposed' to be.",
        example: "'I'm just not a creative person' treats a past pattern as a permanent essence."
      },
      {
        id: "badfaith-2", title: "Radical freedom and anguish",
        short: "Freedom isn't comfortable.",
        body: "If nothing fixes your choices, you're responsible for them, and for what they imply about how humans should live. Sartre calls the dizzy feeling of this anguish. Bad faith is the tempting way out.",
        example: "Standing at a big decision with no 'right answer' guaranteed."
      },
      {
        id: "badfaith-3", title: "What bad faith is",
        short: "Self-deception about your own freedom.",
        body: "In bad faith you are both deceiver and deceived: part of you knows the truth and hides it. Typical forms: 'I had no choice', 'that's just who I am', 'I'm only doing my job'.",
        example: "'I'd quit, but I have to stay' — when what's true is that you choose to stay for reasons you'd rather not face."
      },
      {
        id: "badfaith-4", title: "Facticity and transcendence",
        short: "You are both your givens and your possibilities.",
        body: "Facticity is the stuff you can't choose: your past, body, circumstances. Transcendence is your capacity to go beyond them. Bad faith denies one side: pretending you're only facts (no choice) or only freedom (no limits).",
        example: "Sartre's waiter plays at being a waiter with exaggerated precision, as if the role were his essence. A woman on a date lets her hand rest in her date's, treating it like a thing to avoid deciding."
      },
      {
        id: "badfaith-5", title: "Authenticity",
        short: "Owning your choices, constraints included.",
        body: "The alternative isn't perfect honesty or total freedom. It's recognizing both your situation and your power to respond, and taking responsibility. Beauvoir adds that real freedom also respects others' freedom.",
        example: "'I'm staying in this job for now because I value stability; I can revisit that.'"
      }
    ],
    practice: [
      "Catch 'I have to': rewrite it as 'I choose to, because…' and see what feels true or false.",
      "Role audit: where do you act as 'the responsible one', 'the funny one', 'the nice guy' because it's expected?",
      "List your facticity (non-negotiable givens) and your possibilities. Notice which list you tend to overstate."
    ],
    misreadings: [
      { myth: "Bad faith means lying to others.", truth: "It's lying to yourself, where you're both the deceiver and the deceived." },
      { myth: "Sartre says you can do anything you want.", truth: "Facticity limits you. Freedom is how you respond to your situation, not the removal of limits." },
      { myth: "Existentialism is gloomy.", truth: "Sartre saw it as a philosophy of action and responsibility. If nothing is fixed, you can change." }
    ],
    vs: [
      { id: "control", text: "Stoics carve out what's not in your control. Sartre warns that this can become an excuse if applied too freely." },
      { id: "socratic", text: "Self-examination is the shared tool: bad faith is Socratic ignorance about yourself, held on purpose." }
    ],
    compare: {
      question: "Where am I pretending I have no choice?",
      move: "Own your choices, and your constraints.",
      practice: "Rewrite 'I have to' as 'I choose'.",
      pitfall: "Denying real limits (facticity)."
    },
    flashcards: [
      { q: "What is bad faith (mauvaise foi)?", a: "Self-deception that lets you avoid your freedom and responsibility, e.g. 'I had no choice'." },
      { q: "What does 'existence precedes essence' mean?", a: "Humans exist first and define themselves through choices; there's no pre-given human nature." },
      { q: "What is facticity?", a: "The concrete givens of your situation: your past, body, circumstances — what you didn't choose." },
      { q: "What is transcendence?", a: "Your capacity to go beyond your givens by choosing and projecting yourself into the future." },
      { q: "What's the waiter example?", a: "A waiter overplays the role as if it were his essence, forgetting it's a role he chooses." },
      { q: "What is authenticity?", a: "Owning your choices and acknowledging both your situation and your freedom." }
    ],
    quiz: [
      { q: "Bad faith is…", options: ["Lying to other people", "Self-deception that escapes freedom and responsibility", "Losing religious belief", "Refusing to cooperate"], answer: 1, why: "Sartre's bad faith is lying to yourself about your own freedom." },
      { q: "The waiter example shows…", options: ["Waiters are dishonest", "Denying your freedom by living as if a role is your essence", "That customers should be polite", "The value of hard work"], answer: 1, why: "He treats the role as what he is, forgetting he chooses it." },
      { q: "'Existence precedes essence' means…", options: ["Nature determines who we are", "We exist first, then define ourselves by our choices", "Essence is divine", "Objects have no purpose"], answer: 1, why: "There's no pre-set human nature; we create ourselves." },
      { q: "Facticity refers to…", options: ["Pure freedom", "The concrete givens of your situation", "The truth of a claim", "An ethical rule"], answer: 1, why: "Past, body, circumstances. Bad faith can deny facticity or freedom." }
    ]
  }
];
