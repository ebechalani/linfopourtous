// Guide du professeur — chapitre 8 : Activités débranchées
// Ici chaque activité est déjà une fiche imprimable (objectif, matériel, étapes).
// Ce guide dit comment ENCHAÎNER les fiches en une séance sans écran, comment
// faire le pont vers le jeu à l’écran (linkId), et comment différencier 3/4/5 ans.

export const CHAPTER = {
  thread: {
    fr: 'On code avec le corps avant de coder avec le doigt. Le robot, c’est un copain qui obéit à la lettre : « d’abord, ensuite, et puis ». On répète, on trie, on cherche le bug, puis on retrouve les mêmes flèches à l’écran.',
    en: 'We code with our bodies before coding with a finger. The robot is a friend who obeys literally: “first, then, and then”. We repeat, we sort, we hunt the bug, then we find the same arrows on screen.',
  },
  concepts: ['sequence', 'loop', 'condition', 'pattern', 'decomposition', 'debug', 'abstraction'],
  domains: [
    { fr: 'Agir, s’exprimer, comprendre à travers l’activité physique : adapter ses déplacements à des contraintes (un pas, un quart de tour).', en: 'Physical activity: adapting movement to constraints (one step, a quarter turn).' },
    { fr: 'Explorer le monde : se repérer dans l’espace, utiliser des repères (devant, à côté, sur la case).', en: 'Exploring the world: spatial orientation, using landmarks (in front, beside, on the square).' },
    { fr: 'Construire les premiers outils pour structurer sa pensée : trier, ranger, continuer un algorithme simple.', en: 'First tools for structured thinking: sorting, ordering, continuing a simple algorithm.' },
    { fr: 'Mobiliser le langage : donner une consigne précise, dire « d’abord… ensuite… puis ».', en: 'Language: giving a precise instruction, saying “first… then… next”.' },
  ],
  rhythm: {
    fr: '5 séances de 30 à 40 minutes, en salle de motricité de préférence. Séances « cœur » : s1 (le robot) et s5 (le sandwich). Séances « bonus » : s2, s3, s4 à intercaler dans l’année, avant le chapitre écran correspondant. Si le temps manque, coupez après la 2ᵉ fiche : chaque fiche se suffit.',
    en: 'Five sessions of 30 to 40 minutes, ideally in the movement room. Core sessions: s1 (the robot) and s5 (the sandwich). Bonus sessions: s2, s3, s4, spread across the year before the matching screen chapter. Short on time? Stop after the second card: each card stands alone.',
  },
  materials: [
    { fr: 'Un quadrillage au sol : 4 × 4 cases de 50 cm au scotch de couleur (à faire une fois, il reste toute l’année).', en: 'A floor grid: 4 × 4 squares of 50 cm in coloured tape (make it once, it stays all year).' },
    { fr: 'Des cartes flèches A5 plastifiées : ↑ (×6), ↓ (×2), ↰ (×2), ↱ (×2), plus une carte 🔁 avec un chiffre.', en: 'Laminated A5 arrow cards: ↑ (×6), ↓ (×2), ↰ (×2), ↱ (×2), plus a 🔁 card with a number.' },
    { fr: 'Une carte rouge, une bleue, une verte (A5).', en: 'One red, one blue, one green card (A5).' },
    { fr: 'Des objets « cible » ou « trésor » : peluche, os en carton, cerceau.', en: 'Target or treasure objects: teddy, cardboard bone, hoop.' },
    { fr: 'Objets à trier : bouchons, cubes, jetons de deux couleurs ; 3 bacs ou cerceaux.', en: 'Objects to sort: caps, blocks, counters in two colours; 3 bins or hoops.' },
    { fr: 'Cartes-nombres 1 à 5, cartes-lettres, vignettes ⏰ 👕 🥣 🪥 et cartes 🧥 🚶 🤫.', en: 'Number cards 1 to 5, letter cards, ⏰ 👕 🥣 🪥 pictures and 🧥 🚶 🤫 cards.' },
    { fr: 'Pour le sandwich : pain de mie, boîte de beurre fermée, couteau en plastique (ou versions en carton).', en: 'For the sandwich: sliced bread, a closed butter tub, a plastic knife (or cardboard versions).' },
  ],
  ritual: {
    open: { fr: '« Robot, réveille-toi ! » : les enfants s’assoient droits, bras pliés, et font « bip bip ». Seuls les robots réveillés peuvent être pilotes.', en: '“Robot, wake up!”: children sit up straight, arms bent, and go “beep beep”. Only awake robots can be pilots.' },
    close: { fr: '« Robot, va dormir ! » : tête baissée, yeux fermés, le bip s’éteint. On dit en un mot ce qu’on a appris.', en: '“Robot, go to sleep!”: head down, eyes closed, the beep fades. Say in one word what we learned.' },
  },
  unplugged: [
    { id: 'ch8-s1:a', when: { fr: 'Avant le chapitre 5 (Promène le chien) et avant le chapitre 7 (mTiny).', en: 'Before chapter 5 (Walk the dog) and before chapter 7 (mTiny).' } },
    { id: 'ch8-s2:b', when: { fr: 'La semaine de « Compléter et assembler » (ch5-s2).', en: 'The week of “Complete and match” (ch5-s2).' } },
    { id: 'ch8-s3:d', when: { fr: 'N’importe quand : 10 minutes de transition, dès que la classe connaît Jacques a dit.', en: 'Any time: a 10-minute transition, once the class knows Simon says.' } },
    { id: 'ch8-s4:c', when: { fr: 'Le jour des « 5 étapes de la fleur » (ch5-s1), avec le cahier de liaison.', en: 'The day of “The 5 steps of the flower” (ch5-s1), with the home-school notebook.' } },
    { id: 'ch8-s5:a', when: { fr: 'Juste avant « Je répare mon programme » (ch5-s5).', en: 'Right before “I fix my program” (ch5-s5).' } },
  ],
  pitfalls: [
    { trap: { fr: 'On veut faire toutes les fiches de la séance en une fois : les enfants décrochent.', en: 'Trying to do every card of the session at once: children switch off.' },
      fix: { fr: 'Deux fiches par séance suffisent. Gardez la troisième pour un moment de transition.', en: 'Two cards per session are enough. Keep the third for a transition moment.' } },
    { trap: { fr: 'Le robot « devine » où aller et ne regarde plus les cartes.', en: 'The robot “guesses” where to go and stops looking at the cards.' },
      fix: { fr: 'Cachez la cible sous un tissu, ou faites exécuter une carte fausse : le robot doit obéir, pas deviner.', en: 'Hide the target under a cloth, or have a wrong card performed: the robot must obey, not guess.' } },
    { trap: { fr: 'Les grands répondent avant les petits, qui ne font que suivre.', en: 'Older children answer before the younger ones, who just follow.' },
      fix: { fr: 'Donnez un rôle aux grands : vérificateur, qui parle seulement après le pas.', en: 'Give older ones a role: checker, who speaks only after the step.' } },
    { trap: { fr: 'On oublie le pont avec l’écran : le jeu reste une récréation.', en: 'The bridge to the screen is forgotten: the game stays a break.' },
      fix: { fr: 'Le même jour ou la semaine suivante, rejouez la même suite de flèches sur le tableau.', en: 'The same day or the following week, replay the same arrow sequence on the board.' } },
  ],
  observables: [
    { fr: 'L’enfant attend la carte avant de bouger, puis fait exactement un pas.', en: 'The child waits for the card before moving, then takes exactly one step.' },
    { fr: 'L’enfant dit « d’abord, ensuite, puis » pour raconter un chemin ou le matin.', en: 'The child says “first, then, next” to tell a path or the morning.' },
    { fr: 'L’enfant continue un motif à deux couleurs sans aide.', en: 'The child continues a two-colour pattern without help.' },
    { fr: 'L’enfant reste statue quand le signal n’est pas là (Jacques a dit, cartes couleur).', en: 'The child stays a statue when the signal is absent (Simon says, colour cards).' },
    { fr: 'L’enfant repère la carte qui se trompe et la remplace.', en: 'The child spots the wrong card and swaps it.' },
    { fr: 'L’enfant dit « répète ×3 » au lieu de répéter six gestes.', en: 'The child says “repeat ×3” instead of repeating six gestures.' },
  ],
  celebration: {
    fr: 'Grand parcours codé en salle de motricité : chaque groupe programme un chemin de 4 cartes vers un trésor. La classe bippe à chaque pas. On termine par la danse qui se répète, ×3 tous ensemble, puis « Robot, va dormir ! ».',
    en: 'Big coded course in the movement room: each group programs a 4-card path to a treasure. The class beeps at every step. Finish with the repeating dance, ×3 all together, then “Robot, go to sleep!”.',
  },
  parents: {
    fr: 'Ce trimestre, votre enfant a appris à coder sans écran : donner un ordre précis, suivre un chemin, répéter, trouver le bug. À la maison, jouez au robot : vous obéissez à la lettre, il vous guide jusqu’au frigo ! Ces jeux préparent les jeux de flèches à l’écran.',
    en: 'This term, your child learned to code without a screen: giving a precise order, following a path, repeating, finding the bug. At home, play robot: you obey literally, they guide you to the fridge! These games prepare the arrow games on screen.',
  },
}

export const SESSIONS = {
  // ─────────────────────────────────────────────────────────────────────────
  'ch8-s1': {
    concept: 'sequence',
    also: ['loop'],
    duration: 35,
    essential: {
      fr: 'Les enfants deviennent des robots qui obéissent à des cartes flèches, un ordre à la fois. Ils construisent un chemin, le corrigent, puis découvrent la répétition avec une danse.',
      en: 'Children become robots that obey arrow cards, one order at a time. They build a path, fix it, then discover repetition with a dance.',
    },
    setup: [
      { fr: 'Tracez le quadrillage au sol (4 × 4 cases de 50 cm, scotch de couleur) ou déroulez le tapis.', en: 'Tape the floor grid (4 × 4 squares of 50 cm, coloured tape) or unroll the mat.' },
      { fr: 'Préparez les cartes flèches A5 : 6 ↑, 2 ↰, 2 ↱ ; gardez une grande ↑ pour la fiche ☝️.', en: 'Prepare the A5 arrow cards: 6 ↑, 2 ↰, 2 ↱; keep one big ↑ for the ☝️ card.' },
      { fr: 'Posez la peluche-cible et le trésor à deux endroits différents, sans les montrer.', en: 'Place the target teddy and the treasure in two different spots, without showing them.' },
      { fr: 'Prévoyez une ligne de départ au sol : tout le monde en ligne face à vous.', en: 'Mark a start line on the floor: everyone in a line facing you.' },
      { fr: 'Ordre conseillé : ☝️ tot → 🤖 a → 🦶 b → 👏 c. Si le temps manque, gardez b pour la semaine suivante.', en: 'Suggested order: ☝️ tot → 🤖 a → 🦶 b → 👏 c. Short on time? Keep b for next week.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel « Robot, réveille-toi ! » : assis droits, bras pliés, bip bip. On mime la notion : la main avance par à-coups.', en: 'Ritual “Robot, wake up!”: sit up straight, arms bent, beep beep. Mime the concept: the hand moves in little jumps.' } },
      { min: 5, what: { fr: 'Le robot suit UN ordre : carte ↑ montrée = un pas, cachée = stop. Trois fois de suite, puis un enfant tient la carte.', en: 'The robot follows ONE order: ↑ card shown = one step, hidden = stop. Three times in a row, then a child holds the card.' }, act: 'tot' },
      { min: 12, what: { fr: 'Le robot et le maître sur le quadrillage : un robot, un maître, une carte à la fois, jusqu’à la cible. Trois binômes passent, on change à chaque cible.', en: 'The robot and the master on the grid: one robot, one master, one card at a time, up to the target. Three pairs go, swap at every target.' }, act: 'a' },
      { min: 8, what: { fr: 'Le parcours codé : la classe aligne les cartes du chemin vers le trésor. Un robot suit. Raté ? On change UNE carte et on rejoue.', en: 'The coded path: the class lines up the cards to the treasure. A robot follows. Missed? Change ONE card and replay.' }, act: 'b' },
      { min: 5, what: { fr: 'La danse qui se répète : taper, taper, sauter. « On répète 3 fois ! » On compte avec les doigts.', en: 'The repeating dance: clap, clap, jump. “Repeat 3 times!” Count on fingers.' }, act: 'c' },
      { min: 2, what: { fr: 'Clôture : « Robot, va dormir ! » Un mot chacun : qu’est-ce qu’un robot fait avec une carte ?', en: 'Closing: “Robot, go to sleep!” One word each: what does a robot do with a card?' } },
    ],
    roles: {
      fr: 'Un robot, un maître (pilote), deux vérificateurs qui disent « juste ! » ou « bug ! » après chaque pas. Le reste de la classe est assis autour du quadrillage et fait « bip » à chaque pas du robot. Pour la danse, tout le monde bouge.',
      en: 'One robot, one master (pilot), two checkers who say “right!” or “bug!” after each step. The rest of the class sits around the grid and beeps at every robot step. For the dance, everyone moves.',
    },
    say: [
      { fr: 'Tu es un robot. Tu attends la carte, puis tu fais UN pas.', en: 'You are a robot. You wait for the card, then you take ONE step.' },
      { fr: 'Pas de carte, pas de pas. Tu es une statue.', en: 'No card, no step. You are a statue.' },
      { fr: 'Le maître montre une seule carte à la fois.', en: 'The master shows only one card at a time.' },
      { fr: 'On a raté le trésor ? On cherche la carte qui se trompe.', en: 'Missed the treasure? Let’s find the card that is wrong.' },
      { fr: 'Taper, taper, sauter : on répète trois fois !', en: 'Clap, clap, jump: repeat three times!' },
    ],
    ask: [
      { fr: 'Combien de pas pour arriver à la peluche ?', en: 'How many steps to reach the teddy?' },
      { fr: 'Qu’est-ce qui se passe si le maître cache la carte ?', en: 'What happens if the master hides the card?' },
      { fr: 'Quelle carte on doit changer pour arriver au trésor ?', en: 'Which card must we change to reach the treasure?' },
      { fr: 'On a fait la danse combien de fois ? Comment tu le sais ?', en: 'How many times did we do the dance? How do you know?' },
      { fr: 'Le robot, il réfléchit ou il obéit ?', en: 'Does the robot think, or does it obey?' },
    ],
    pitfalls: [
      { trap: { fr: 'Les enfants avancent avant que la carte soit montrée.', en: 'Children step before the card is shown.' },
        fix: { fr: 'Ajoutez un « bip » collectif : on ne bouge qu’après le bip. Montrez la carte lentement, bien haut.', en: 'Add a collective “beep”: nobody moves until the beep. Show the card slowly, held high.' } },
      { trap: { fr: 'Le robot voit la cible et « devine » le chemin sans regarder les cartes.', en: 'The robot sees the target and “guesses” the path without looking at the cards.' },
        fix: { fr: 'Le robot regarde la carte, pas la cible. Glissez une carte fausse : il doit la suivre quand même.', en: 'The robot looks at the card, not the target. Slip in a wrong card: it must follow it anyway.' } },
      { trap: { fr: 'Le maître montre trois cartes d’un coup ; le robot s’emmêle.', en: 'The master shows three cards at once; the robot gets muddled.' },
        fix: { fr: 'Une carte dans la main, les autres à l’envers sur le sol. Le maître attend le bip avant la suivante.', en: 'One card in hand, the others face down on the floor. The master waits for the beep before the next.' } },
      { trap: { fr: 'Les grands corrigent le chemin à la place des petits.', en: 'Older children fix the path instead of the younger ones.' },
        fix: { fr: 'Les grands sont vérificateurs : ils parlent seulement après le pas, et seulement pour dire « juste » ou « bug ».', en: 'Older ones are checkers: they speak only after the step, and only to say “right” or “bug”.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : une seule carte ↑. L’adulte est le robot, les enfants tiennent la carte à tour de rôle. Un ordre = un pas, on s’arrête, on regarde.', en: '🌱 Age 3: a single ↑ card. The adult is the robot, children hold the card in turns. One order = one step, stop, look.' },
      beg: { fr: '🌟 MS : l’enfant est le robot, 2 à 3 cartes ↑ et un quart de tour. Le maître dit la carte à voix haute avant de la montrer.', en: '🌟 Age 4: the child is the robot, 2 to 3 ↑ cards and one quarter turn. The master says the card aloud before showing it.' },
      pro: { fr: '🏆 GS : chemin de 4 cartes et plus posé à l’avance, puis exécuté. Cacher un bug dans le chemin, et faire la danse ×3 puis ×4.', en: '🏆 Age 5: a path of 4 or more cards laid out first, then performed. Hide a bug in the path, and do the dance ×3 then ×4.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant attend la carte, fait un pas, puis s’arrête sans aide.', en: 'I see the child wait for the card, take one step, then stop without help.' },
      beg: { fr: 'Je vois que l’enfant fait un quart de tour sans changer de case.', en: 'I see the child turn a quarter turn without changing square.' },
      pro: { fr: 'Je vois que l’enfant montre la carte fautive et propose la bonne.', en: 'I see the child point at the wrong card and suggest the right one.' },
      warn: { fr: 'L’enfant court vers la cible sans regarder les cartes : revenir à une seule carte ↑.', en: 'The child runs to the target without looking at the cards: go back to a single ↑ card.' },
    },
    unplugged: {
      id: 'ch5-s0:b',
      bridge: {
        fr: 'Le même jour ou la semaine suivante, ouvrez « Promène le chien » : les mêmes flèches, le chien bouge à chaque appui. Puis « Suis les empreintes » : on range les flèches AVANT Go, comme les cartes du parcours codé.',
        en: 'The same day or the following week, open “Walk the dog”: the same arrows, the dog moves on every press. Then “Follow the footprints”: arrows are arranged BEFORE Go, like the coded path cards.',
      },
    },
    noSound: {
      fr: 'Sans cartes : les flèches deviennent des gestes. Bras tendu devant = avancer, main qui pivote = tourner, poing fermé = stop. Sans quadrillage, les dalles du sol ou des feuilles A4 font les cases.',
      en: 'No cards: arrows become gestures. Arm straight ahead = forward, hand pivoting = turn, closed fist = stop. No grid? Floor tiles or A4 sheets make the squares.',
    },
    vocab: [
      { word: { fr: 'Ordre (une carte = un pas)', en: 'Order (one card = one step)' }, gesture: { fr: 'On tend l’index, un seul doigt', en: 'Point one finger' } },
      { word: { fr: 'Programme (le chemin de cartes)', en: 'Program (the path of cards)' }, gesture: { fr: 'On avance la main par à-coups, un pas à la fois', en: 'Move your hand forward in little jumps' } },
      { word: { fr: 'Robot (il obéit, il ne devine pas)', en: 'Robot (it obeys, it does not guess)' }, gesture: { fr: 'Bras pliés, bip bip', en: 'Arms bent, beep beep' } },
      { word: { fr: 'Répéter (encore, encore, encore)', en: 'Repeat (again, again, again)' }, gesture: { fr: 'On tourne l’index en rond', en: 'Twirl your index finger in a circle' } },
    ],
    tips: {
      tot: { fr: 'Comptez « bip » avant de montrer la carte : le bip devient le signal de départ.', en: 'Say “beep” before showing the card: the beep becomes the start signal.' },
      a: { fr: 'Mettez une casquette au robot : sa visière montre son « devant » pour le quart de tour.', en: 'Give the robot a cap: its peak shows the “front” for the quarter turn.' },
      b: { fr: 'Posez les cartes du chemin au sol, à côté du quadrillage : le robot les lit une à une.', en: 'Lay the path cards on the floor next to the grid: the robot reads them one by one.' },
      c: { fr: 'Levez un doigt par répétition : les enfants voient « combien de fois » sans compter à voix haute.', en: 'Raise one finger per repeat: children see “how many times” without counting aloud.' },
    },
    closing: {
      fr: 'Aujourd’hui on a été des robots : une carte, un pas. On a construit un chemin et réparé la carte qui se trompait. Et on a répété une danse trois fois.',
      en: 'Today we were robots: one card, one step. We built a path and fixed the wrong card. And we repeated a dance three times.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a joué au robot : il attend un ordre, puis fait un seul pas. À la maison, guidez-le jusqu’à un trésor avec des ordres : « avance, avance, tourne ». Puis échangez : c’est lui le maître, vous obéissez à la lettre !',
      en: 'Today your child played robot: wait for an order, then take a single step. At home, guide them to a treasure with orders: “forward, forward, turn”. Then swap: they are the master, you obey literally!',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  'ch8-s2': {
    concept: 'pattern',
    also: ['abstraction'],
    duration: 30,
    essential: {
      fr: 'Les enfants trient des objets selon une règle, puis repèrent un motif qui revient et le continuent. Enfin, ils reproduisent un geste en miroir, exactement pareil.',
      en: 'Children sort objects by a rule, then spot a repeating pattern and continue it. Finally, they mirror a gesture, exactly the same.',
    },
    setup: [
      { fr: 'Rassemblez une trentaine d’objets de deux couleurs et deux tailles (bouchons, cubes, jetons).', en: 'Gather about thirty objects in two colours and two sizes (caps, blocks, counters).' },
      { fr: 'Posez trois cerceaux ou bacs au centre du tapis, bien espacés.', en: 'Place three hoops or bins in the middle of the mat, well spaced.' },
      { fr: 'Préparez une bande au sol (scotch) pour poser la suite rouge, bleu, rouge, bleu.', en: 'Prepare a strip on the floor (tape) to lay the red, blue, red, blue pattern.' },
      { fr: 'Ordre conseillé : 🍎 a → 🔺 b → 🪞 c. Le miroir se joue debout, en binômes : gardez de la place.', en: 'Suggested order: 🍎 a → 🔺 b → 🪞 c. The mirror is played standing, in pairs: keep space free.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel « Robot, réveille-toi ! ». Geste de la notion : genoux, mains, genoux, mains.', en: 'Ritual “Robot, wake up!”. Concept gesture: knees, hands, knees, hands.' } },
      { min: 8, what: { fr: 'Trier les objets : tout au centre, un cerceau par couleur. Chaque enfant range un objet, la classe vérifie. Puis on recommence par la taille.', en: 'Sort the objects: everything in the middle, one hoop per colour. Each child places one object, the class checks. Then again by size.' }, act: 'a' },
      { min: 9, what: { fr: 'Continue la suite : rouge, bleu, rouge, bleu… « Qu’est-ce qui vient après ? » Chaque enfant pose un objet. Puis rouge, rouge, bleu.', en: 'Continue the pattern: red, blue, red, blue… “What comes next?” Each child places one object. Then red, red, blue.' }, act: 'b' },
      { min: 7, what: { fr: 'Le jeu du miroir en binômes : un geste lent, l’autre copie exactement. On échange. Puis un enfant face à toute la classe.', en: 'The mirror game in pairs: one slow gesture, the other copies exactly. Swap. Then one child facing the whole class.' }, act: 'c' },
      { min: 3, what: { fr: 'Clôture : on récite la suite du sol tous ensemble, puis « Robot, va dormir ! ».', en: 'Closing: recite the floor pattern all together, then “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pour le tri : un « rangeur » à la fois, tous les autres vérifient avec le pouce (en haut = bon bac). Pour la suite : un « poseur », un « diseur » qui chante la suite à voix haute. Pour le miroir : binômes, puis un meneur face à la classe.',
      en: 'For sorting: one “sorter” at a time, everyone else checks with a thumb (up = right bin). For the pattern: one “placer”, one “speaker” who chants the pattern aloud. For the mirror: pairs, then one leader facing the class.',
    },
    say: [
      { fr: 'Regarde bien : ici, tous les rouges. Là, tous les bleus.', en: 'Look closely: here, all the reds. There, all the blues.' },
      { fr: 'Rouge, bleu, rouge, bleu… Qu’est-ce qui vient après ?', en: 'Red, blue, red, blue… What comes next?' },
      { fr: 'Ça revient toujours pareil : c’est un motif.', en: 'It always comes back the same: that is a pattern.' },
      { fr: 'Tu es le miroir. Tu fais exactement pareil, tout doucement.', en: 'You are the mirror. You do exactly the same, very slowly.' },
    ],
    ask: [
      { fr: 'Pourquoi ce bouchon va dans ce bac et pas dans l’autre ?', en: 'Why does this cap go in this bin and not the other?' },
      { fr: 'Comment tu sais ce qui vient après ?', en: 'How do you know what comes next?' },
      { fr: 'Si je cache un objet de la suite, tu peux le retrouver ?', en: 'If I hide one object from the pattern, can you find it?' },
      { fr: 'Le miroir a-t-il fait exactement pareil ? Qu’est-ce qui change ?', en: 'Did the mirror do exactly the same? What changed?' },
    ],
    pitfalls: [
      { trap: { fr: 'Les enfants rangent par « ce que j’aime » et non par la règle.', en: 'Children sort by “what I like” instead of by the rule.' },
        fix: { fr: 'Collez un objet-modèle sur chaque bac. Répétez la règle avant chaque objet : « la couleur ! ».', en: 'Stick a sample object on each bin. Repeat the rule before each object: “colour!”.' } },
      { trap: { fr: 'Pour la suite, un enfant pose n’importe quelle couleur pour aller vite.', en: 'For the pattern, a child places any colour to go fast.' },
        fix: { fr: 'On chante la suite en la montrant du doigt avant de poser. Le « diseur » s’arrête juste avant le trou.', en: 'Chant the pattern while pointing before placing. The “speaker” stops right before the gap.' } },
      { trap: { fr: 'Dans le miroir, les gestes sont trop rapides ; on rit et on ne copie plus.', en: 'In the mirror, gestures are too fast; children laugh and stop copying.' },
        fix: { fr: 'Le meneur bouge « comme sous l’eau ». Un geste à la fois, on tient trois secondes.', en: 'The leader moves “as if underwater”. One gesture at a time, hold for three seconds.' } },
      { trap: { fr: 'Les grands donnent la réponse avant que le petit ait posé.', en: 'Older children give the answer before the younger one has placed.' },
        fix: { fr: 'Les grands ferment les yeux pendant que le petit pose, puis vérifient.', en: 'Older ones close their eyes while the younger one places, then check.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : un seul critère, la couleur, deux bacs. Suite AB avec deux couleurs très contrastées. Miroir : l’adulte est le meneur, un geste.', en: '🌱 Age 3: a single criterion, colour, two bins. AB pattern with two strongly contrasting colours. Mirror: the adult leads, one gesture.' },
      beg: { fr: '🌟 MS : couleur puis taille. Suite AAB (rouge, rouge, bleu). L’enfant dit ce qui vient avant de poser. Miroir en binômes, deux gestes.', en: '🌟 Age 4: colour then size. AAB pattern (red, red, blue). The child says what comes next before placing. Mirror in pairs, two gestures.' },
      pro: { fr: '🏆 GS : trier avec deux critères à la fois (grand ET rouge). Suite ABC à trois couleurs, ou inventer sa suite pour les autres. Miroir : trois gestes enchaînés, cacher un « bug » que l’autre doit repérer.', en: '🏆 Age 5: sort by two criteria at once (big AND red). ABC pattern with three colours, or invent a pattern for the others. Mirror: three gestures in a row, hide a “bug” the partner must spot.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant met l’objet dans le bac de la bonne couleur sans hésiter.', en: 'I see the child put the object in the right colour bin without hesitating.' },
      beg: { fr: 'Je vois que l’enfant annonce la couleur suivante avant de la poser.', en: 'I see the child announce the next colour before placing it.' },
      pro: { fr: 'Je vois que l’enfant continue une suite à trois éléments et explique la règle.', en: 'I see the child continue a three-element pattern and explain the rule.' },
      warn: { fr: 'L’enfant pose au hasard ou copie le voisin : revenir à deux couleurs et chanter la suite.', en: 'The child places at random or copies a neighbour: go back to two colours and chant the pattern.' },
    },
    unplugged: {
      id: 'ch5-s2:tot',
      bridge: {
        fr: 'Le même jour, ouvrez « Pomme, banane, pomme… » : la même suite que sur le tapis, mais on touche le fruit qui vient après. Les MS enchaînent sur « Complète la liste des fruits », les GS sur « Petit miroir » (3 × 3 cases).',
        en: 'The same day, open “Apple, banana, apple…”: the same pattern as on the mat, but you tap the fruit that comes next. Age 4 moves on to “Complete the fruit list”, age 5 to “Small mirror” (3 × 3 squares).',
      },
    },
    noSound: {
      fr: 'Sans objets : on trie les enfants eux-mêmes (pull rouge / pull bleu, cheveux longs / courts). La suite devient une suite de gestes : taper, sauter, taper, sauter. Le miroir ne demande rien.',
      en: 'No objects: sort the children themselves (red top / blue top, long hair / short hair). The pattern becomes gestures: clap, jump, clap, jump. The mirror needs nothing.',
    },
    vocab: [
      { word: { fr: 'Trier (mettre ensemble ceux qui vont ensemble)', en: 'Sort (put together those that belong together)' }, gesture: { fr: 'Les deux mains poussent les objets à gauche, à droite', en: 'Both hands push objects left, right' } },
      { word: { fr: 'Motif (ça revient toujours pareil)', en: 'Pattern (it always comes back the same)' }, gesture: { fr: 'On tape genoux, mains, genoux, mains', en: 'Knees, hands, knees, hands' } },
      { word: { fr: 'Miroir (exactement pareil)', en: 'Mirror (exactly the same)' }, gesture: { fr: 'Les deux paumes face à face', en: 'Both palms facing each other' } },
    ],
    tips: {
      a: { fr: 'Changez de critère sans changer d’objets : les enfants voient que la règle décide, pas l’objet.', en: 'Change the criterion without changing the objects: children see the rule decides, not the object.' },
      b: { fr: 'Laissez un trou au milieu de la suite : retrouver l’objet manquant est plus fort que continuer.', en: 'Leave a gap in the middle of the pattern: finding the missing object is stronger than continuing.' },
      c: { fr: 'Un tambourin marque chaque geste : « boum », geste ; « boum », geste. Le rythme calme le jeu.', en: 'A tambourine marks each gesture: “boom”, gesture; “boom”, gesture. Rhythm calms the game.' },
    },
    closing: {
      fr: 'Aujourd’hui on a trié avec une règle, on a continué un motif qui revient toujours pareil, et on a fait le miroir exactement pareil.',
      en: 'Today we sorted with a rule, continued a pattern that always comes back the same, and mirrored exactly the same.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a trié des objets et continué un motif : rouge, bleu, rouge, bleu… À la maison, rangez les couverts ou les chaussettes ensemble, et jouez au miroir devant la glace. Demandez : « qu’est-ce qui vient après ? »',
      en: 'Today your child sorted objects and continued a pattern: red, blue, red, blue… At home, sort cutlery or socks together, and play mirror in front of the glass. Ask: “what comes next?”',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  'ch8-s3': {
    concept: 'condition',
    also: ['abstraction'],
    duration: 40,
    essential: {
      fr: 'Les enfants n’agissent que si le signal est là : « Jacques a dit », carte rouge, carte bleue. Puis ils lisent un code, case par case, pour faire apparaître un dessin et retrouver des lettres au sol.',
      en: 'Children act only if the signal is there: “Simon says”, red card, blue card. Then they read a code square by square to reveal a picture and find letters on the floor.',
    },
    setup: [
      { fr: 'Préparez une carte rouge, une bleue et une verte (la verte = le piège).', en: 'Prepare a red, a blue and a green card (green = the trick).' },
      { fr: 'Imprimez une feuille quadrillée 4 × 4 par enfant (cases de 3 cm) et le code d’un dessin simple : un cœur ou un sapin.', en: 'Print a 4 × 4 grid sheet per child (3 cm squares) and the code of a simple picture: a heart or a tree.' },
      { fr: 'Disposez 8 à 10 cartes-lettres au sol en QWERTY, à 40 cm l’une de l’autre : Q W E R T… puis A S D F.', en: 'Lay 8 to 10 letter cards on the floor in QWERTY, 40 cm apart: Q W E R T… then A S D F.' },
      { fr: 'Ordre conseillé : 🙋 a → 🚦 d → 🔤 c → 🎨 b. Le pixel-art se fait assis, en dernier, ou en atelier un autre jour.', en: 'Suggested order: 🙋 a → 🚦 d → 🔤 c → 🎨 b. Pixel art is done sitting, last, or as a workshop another day.' },
      { fr: 'Testez le code du pixel-art vous-même : chaque ligne doit avoir exactement 4 couleurs.', en: 'Test the pixel-art code yourself: every row must have exactly 4 colours.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel « Robot, réveille-toi ! ». Geste de la notion : main levée = on bouge, main baissée = statue.', en: 'Ritual “Robot, wake up!”. Concept gesture: hand up = move, hand down = statue.' } },
      { min: 6, what: { fr: 'Jacques a dit : « Jacques a dit : touche ton nez ». Sans « Jacques a dit », on ne bouge pas. On accélère doucement, puis un enfant mène.', en: 'Simon says: “Simon says: touch your nose”. Without “Simon says”, nobody moves. Speed up gently, then a child leads.' }, act: 'a' },
      { min: 8, what: { fr: 'La danse des couleurs : SI rouge ALORS on saute, SI bleue ALORS on tape, SINON statue. Piège avec la verte. Un GS invente une 3ᵉ règle.', en: 'The colour dance: IF red THEN jump, IF blue THEN clap, OTHERWISE statue. Trick with green. An older child invents a 3rd rule.' }, act: 'd' },
      { min: 8, what: { fr: 'Le clavier géant : « A ! », un enfant saute sur la lettre. Puis on épelle un petit mot, une lettre par enfant.', en: 'The giant keyboard: “A!”, a child jumps on the letter. Then spell a short word, one letter per child.' }, act: 'c' },
      { min: 12, what: { fr: 'Le pixel-art codé, assis : « ligne 1 : rouge, rouge, blanc, rouge ». Ligne par ligne, on colorie dans l’ordre. On découvre le dessin.', en: 'Coded pixel art, sitting: “row 1: red, red, white, red”. Row by row, colour in order. Reveal the picture.' }, act: 'b' },
      { min: 3, what: { fr: 'Clôture : on montre les dessins, puis « Robot, va dormir ! ».', en: 'Closing: show the pictures, then “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Un meneur (l’adulte puis un enfant) tient les cartes. Deux « arbitres » repèrent qui a bougé sans signal, gentiment. Pour le clavier, un « sauteur » à la fois, les autres épellent à voix haute. Pour le pixel-art, un « lecteur de code » par table lit la ligne.',
      en: 'A leader (the adult then a child) holds the cards. Two “referees” gently spot who moved without a signal. For the keyboard, one “jumper” at a time, the others spell aloud. For pixel art, one “code reader” per table reads the row.',
    },
    say: [
      { fr: 'Tu bouges seulement si Jacques a dit. Sinon, statue !', en: 'You move only if Simon says. Otherwise, statue!' },
      { fr: 'Si je lève la rouge, alors tu sautes. Si je lève la bleue, alors tu tapes.', en: 'If I raise red, then you jump. If I raise blue, then you clap.' },
      { fr: 'Carte verte ? Pas de règle. Alors statue.', en: 'Green card? No rule. So, statue.' },
      { fr: 'Ligne 1 : rouge, rouge, blanc, rouge. Une case, une couleur.', en: 'Row 1: red, red, white, red. One square, one colour.' },
      { fr: 'Saute sur le A ! Regarde bien avant de sauter.', en: 'Jump on the A! Look carefully before you jump.' },
    ],
    ask: [
      { fr: 'Pourquoi tu n’as pas bougé ? Qu’est-ce qui manquait ?', en: 'Why did you not move? What was missing?' },
      { fr: 'Carte bleue : qu’est-ce qu’on fait ? Et carte verte ?', en: 'Blue card: what do we do? And green card?' },
      { fr: 'Où est le A sur le clavier géant ? Et sur le vrai clavier ?', en: 'Where is the A on the giant keyboard? And on the real keyboard?' },
      { fr: 'Qu’est-ce qui se passe si on colorie une case de trop ?', en: 'What happens if we colour one square too many?' },
      { fr: 'Le dessin est-il pareil chez ton voisin ? Pourquoi ?', en: 'Is the picture the same as your neighbour’s? Why?' },
    ],
    pitfalls: [
      { trap: { fr: 'Les enfants bougent dès qu’ils entendent une action, sans écouter la condition.', en: 'Children move as soon as they hear an action, without listening for the condition.' },
        fix: { fr: 'Marquez une pause après « Jacques a dit… ». Faites d’abord trois tours sans jamais piéger.', en: 'Pause after “Simon says…”. Do three rounds first without ever tricking.' } },
      { trap: { fr: 'Le meneur enfant enchaîne trop d’ordres ; plus personne ne suit.', en: 'The child leader strings too many orders; nobody follows.' },
        fix: { fr: 'Le meneur montre UNE carte, compte jusqu’à trois dans sa tête, puis la cache.', en: 'The leader shows ONE card, counts to three in their head, then hides it.' } },
      { trap: { fr: 'Pour le pixel-art, les enfants colorient toute la ligne de la même couleur.', en: 'For pixel art, children colour the whole row in one colour.' },
        fix: { fr: 'Posez le doigt sur la case, dites la couleur, coloriez, puis passez à la suivante.', en: 'Put a finger on the square, say the colour, colour it, then move to the next.' } },
      { trap: { fr: 'Les grands crient la lettre et sautent avant le petit.', en: 'Older children shout the letter and jump before the younger one.' },
        fix: { fr: 'Les grands sont « souffleurs » : ils chuchotent l’indice seulement si le sauteur demande.', en: 'Older ones are “prompters”: they whisper a hint only if the jumper asks.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : Jacques a dit sans piège, gestes très simples. Une seule carte couleur : rouge = on saute, sinon statue. Clavier géant avec 3 lettres. Pixel-art : 2 lignes, deux couleurs.', en: '🌱 Age 3: Simon says without tricks, very simple gestures. A single colour card: red = jump, otherwise statue. Giant keyboard with 3 letters. Pixel art: 2 rows, two colours.' },
      beg: { fr: '🌟 MS : deux cartes couleur, un piège vert. L’enfant dit la règle avant de faire. Clavier : sauter sur la première lettre de son prénom. Pixel-art 4 × 4, l’adulte lit le code.', en: '🌟 Age 4: two colour cards, one green trick. The child says the rule before acting. Keyboard: jump on the first letter of their name. 4 × 4 pixel art, the adult reads the code.' },
      pro: { fr: '🏆 GS : l’enfant mène et invente une 3ᵉ règle « si… alors… sinon ». Épeler un mot de 3 lettres au sol. Pixel-art : un enfant lit le code à sa table, ou invente un code pour un camarade.', en: '🏆 Age 5: the child leads and invents a 3rd “if… then… else” rule. Spell a 3-letter word on the floor. Pixel art: a child reads the code at their table, or invents a code for a friend.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant reste statue quand il n’y a pas de signal.', en: 'I see the child stay a statue when there is no signal.' },
      beg: { fr: 'Je vois que l’enfant fait l’action qui correspond à la couleur, et non la dernière faite.', en: 'I see the child do the action matching the colour, not the last one done.' },
      pro: { fr: 'Je vois que l’enfant lit un code de 4 couleurs et colorie les cases dans l’ordre.', en: 'I see the child read a 4-colour code and colour the squares in order.' },
      warn: { fr: 'L’enfant saute à chaque carte, quelle que soit la couleur : revenir à une seule règle.', en: 'The child jumps at every card, whatever the colour: go back to a single rule.' },
    },
    unplugged: {
      id: 'ch6-s2:m',
      bridge: {
        fr: 'La semaine suivante, ouvrez « Le message secret » : la maîtresse dicte une case, l’enfant conduit le crayon. Comme le pixel-art, on lit un code case par case. Pour les lettres, enchaînez sur « Lettres simples » : la même lettre, sur le vrai clavier.',
        en: 'The following week, open “The secret message”: the teacher names a square, the child leads the crayon. Like pixel art, we read a code square by square. For letters, move on to “Simple letters”: the same letter, on the real keyboard.',
      },
    },
    noSound: {
      fr: 'Sans cartes couleur : main droite levée = on saute, main gauche levée = on tape, deux mains baissées = statue. Sans feuille quadrillée : quatre cerceaux en ligne, les enfants posent des objets rouges ou blancs selon le code.',
      en: 'No colour cards: right hand up = jump, left hand up = clap, both hands down = statue. No grid sheet: four hoops in a row, children place red or white objects according to the code.',
    },
    vocab: [
      { word: { fr: 'Si… alors… (seulement si)', en: 'If… then… (only if)' }, gesture: { fr: 'Main levée = on bouge, main baissée = statue', en: 'Hand up = move, hand down = statue' } },
      { word: { fr: 'Sinon (il n’y a pas de règle)', en: 'Otherwise (there is no rule)' }, gesture: { fr: 'Les deux paumes vers le ciel, épaules levées', en: 'Both palms up, shoulders raised' } },
      { word: { fr: 'Code (un dessin qui veut dire quelque chose)', en: 'Code (a picture that means something)' }, gesture: { fr: 'On dessine un carré dans l’air', en: 'Draw a square in the air' } },
      { word: { fr: 'Case (une seule à la fois)', en: 'Square (one at a time)' }, gesture: { fr: 'L’index tape sur la table, une fois par case', en: 'Index finger taps the table, once per square' } },
    ],
    tips: {
      a: { fr: 'Remplacez « Jacques » par « Robot a dit » : le lien avec le rituel est immédiat.', en: 'Replace “Simon” with “Robot says”: the link with the ritual is immediate.' },
      b: { fr: 'Numérotez les lignes sur la feuille et lisez « ligne 2 » en la montrant : personne ne se perd.', en: 'Number the rows on the sheet and say “row 2” while pointing: nobody gets lost.' },
      c: { fr: 'Commencez par les lettres du prénom de chacun : la motivation est immédiate.', en: 'Start with the letters of each child’s name: motivation is immediate.' },
      d: { fr: 'Après le piège vert, félicitez les statues : ne pas bouger, c’est aussi obéir à la règle.', en: 'After the green trick, praise the statues: not moving is also obeying the rule.' },
    },
    closing: {
      fr: 'Aujourd’hui on a bougé seulement SI le signal était là. Sinon, statue ! Et on a lu un code, case par case, pour faire apparaître un dessin.',
      en: 'Today we moved only IF the signal was there. Otherwise, statue! And we read a code, square by square, to reveal a picture.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a joué à « si… alors… sinon » : carte rouge, on saute ; carte bleue, on tape ; sinon, statue. À la maison, jouez à Jacques a dit, et laissez-le mener. Demandez-lui de vous expliquer la règle.',
      en: 'Today your child played “if… then… else”: red card, jump; blue card, clap; otherwise, statue. At home, play Simon says, and let them lead. Ask them to explain the rule to you.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  'ch8-s4': {
    concept: 'sequence',
    also: ['debug'],
    duration: 30,
    essential: {
      fr: 'Les enfants se rangent dans l’ordre des nombres, puis transmettent une suite de gestes sans la perdre. Enfin, ils remettent le matin dans l’ordre : un algorithme de la vie de tous les jours.',
      en: 'Children line up in number order, then pass on a sequence of gestures without losing it. Finally, they put the morning in order: an everyday algorithm.',
    },
    setup: [
      { fr: 'Préparez deux jeux de cartes-nombres 1 à 5 (grands chiffres, avec les points en dessous).', en: 'Prepare two sets of number cards 1 to 5 (big digits, with dots underneath).' },
      { fr: 'Marquez une ligne au sol pour la file du message.', en: 'Mark a line on the floor for the message queue.' },
      { fr: 'Imprimez ou dessinez 4 vignettes ⏰ 👕 🥣 🪥 par enfant, plus un grand jeu pour le tableau. Prévoyez colle et cahiers.', en: 'Print or draw 4 pictures ⏰ 👕 🥣 🪥 per child, plus a big set for the board. Get glue and notebooks ready.' },
      { fr: 'Ordre conseillé : 🔢 a → 📞 b → ⏰ c. Le collage se fait à table, en fin de séance.', en: 'Suggested order: 🔢 a → 📞 b → ⏰ c. Gluing is done at the tables, at the end.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel « Robot, réveille-toi ! ». Geste de la notion : la main avance par à-coups, d’abord, ensuite, puis.', en: 'Ritual “Robot, wake up!”. Concept gesture: the hand moves in little jumps, first, then, next.' } },
      { min: 7, what: { fr: 'Range les nombres : cinq enfants reçoivent une carte, se mélangent, puis se rangent du plus petit au plus grand. On vérifie en comptant. Deux groupes passent.', en: 'Order the numbers: five children get a card, mix up, then line up from smallest to biggest. Check by counting. Two groups go.' }, act: 'a' },
      { min: 8, what: { fr: 'Passe le message des robots : une file de 6. Le premier invente 3 gestes, les montre au suivant seulement. Le dernier rejoue : pareil qu’au début ?', en: 'Pass the robots’ message: a line of 6. The first invents 3 gestures, shows them only to the next. The last replays: same as the start?' }, act: 'b' },
      { min: 9, what: { fr: 'L’algorithme du matin : 4 images mélangées au tableau. « Que fait-on en premier ? » On les range en disant d’abord, ensuite, puis, enfin. Puis chacun colle sa suite.', en: 'The morning algorithm: 4 pictures mixed on the board. “What do we do first?” Order them saying first, then, next, finally. Then everyone glues their sequence.' }, act: 'c' },
      { min: 3, what: { fr: 'Clôture : on récite le matin tous ensemble avec les gestes, puis « Robot, va dormir ! ».', en: 'Closing: recite the morning all together with gestures, then “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pour les nombres : cinq « cartes vivantes », les autres comptent à voix haute pour vérifier. Pour le message : une file de 6, les autres sont « témoins » et ont vu la suite de départ. Pour le matin : un « poseur » par image, la classe dit « d’abord, ensuite… ».',
      en: 'For numbers: five “living cards”, the others count aloud to check. For the message: a line of 6, the others are “witnesses” who saw the starting sequence. For the morning: one “placer” per picture, the class says “first, then…”.',
    },
    say: [
      { fr: 'Range-toi du plus petit au plus grand. Le 1 en premier.', en: 'Line up from smallest to biggest. Number 1 first.' },
      { fr: 'Montre tes trois gestes seulement au copain d’après.', en: 'Show your three gestures only to the next friend.' },
      { fr: 'Le dernier rejoue. C’est pareil qu’au début ?', en: 'The last one replays. Is it the same as the start?' },
      { fr: 'Le matin, on fait quoi en premier ? Et ensuite ?', en: 'In the morning, what do we do first? And then?' },
      { fr: 'D’abord, ensuite, puis, enfin : c’est un programme.', en: 'First, then, next, finally: that is a program.' },
    ],
    ask: [
      { fr: 'Comment tu sais que le 3 va après le 2 ?', en: 'How do you know 3 comes after 2?' },
      { fr: 'Où le message a-t-il changé ? Qui avait la bonne suite ?', en: 'Where did the message change? Who had the right sequence?' },
      { fr: 'Peut-on se brosser les dents avant de se réveiller ? Pourquoi ?', en: 'Can we brush our teeth before waking up? Why?' },
      { fr: 'Si on inverse deux images, ça marche encore ?', en: 'If we swap two pictures, does it still work?' },
    ],
    pitfalls: [
      { trap: { fr: 'Les enfants se rangent par taille ou par copains, pas par nombre.', en: 'Children line up by height or by friends, not by number.' },
        fix: { fr: 'Chaque enfant tient sa carte devant lui et compte les points. La classe chante 1, 2, 3, 4, 5.', en: 'Each child holds the card in front and counts the dots. The class chants 1, 2, 3, 4, 5.' } },
      { trap: { fr: 'Le message se perd dès le deuxième enfant : trop de gestes, trop vite.', en: 'The message is lost by the second child: too many gestures, too fast.' },
        fix: { fr: 'Trois gestes maximum, montrés deux fois, lentement. Le suivant les refait avant de passer.', en: 'Three gestures maximum, shown twice, slowly. The next child redoes them before passing on.' } },
      { trap: { fr: 'Les grands donnent l’ordre du matin avant que les petits aient regardé.', en: 'Older children give the morning order before the younger ones have looked.' },
        fix: { fr: 'Les petits posent la 1ʳᵉ et la dernière image ; les grands justifient le milieu.', en: 'Younger ones place the first and last picture; older ones justify the middle.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : cartes 1 à 3 avec les points. Message : un seul geste, transmis à 3 enfants, l’adulte commence. Matin : 2 images (réveil, petit-déjeuner).', en: '🌱 Age 3: cards 1 to 3 with dots. Message: a single gesture, passed to 3 children, the adult starts. Morning: 2 pictures (wake up, breakfast).' },
      beg: { fr: '🌟 MS : cartes 1 à 5. Message : 2 ou 3 gestes, l’enfant dit les gestes en les faisant. Matin : 4 images, en disant « d’abord, ensuite, puis, enfin ».', en: '🌟 Age 4: cards 1 to 5. Message: 2 or 3 gestures, the child names the gestures while doing them. Morning: 4 pictures, saying “first, then, next, finally”.' },
      pro: { fr: '🏆 GS : du plus grand au plus petit, ou avec un nombre manquant. Message : 4 gestes, avec des cartes flèches ; retrouver où le bug est apparu. Matin : ajouter une 5ᵉ image et inventer « l’algorithme du soir ».', en: '🏆 Age 5: biggest to smallest, or with a missing number. Message: 4 gestures, with arrow cards; find where the bug appeared. Morning: add a 5th picture and invent “the evening algorithm”.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant trouve sa place entre deux nombres en comptant les points.', en: 'I see the child find their place between two numbers by counting the dots.' },
      beg: { fr: 'Je vois que l’enfant refait les 3 gestes dans le bon ordre avant de les passer.', en: 'I see the child redo the 3 gestures in the right order before passing them on.' },
      pro: { fr: 'Je vois que l’enfant explique pourquoi deux images ne peuvent pas être inversées.', en: 'I see the child explain why two pictures cannot be swapped.' },
      warn: { fr: 'L’enfant recopie le voisin sans regarder sa propre carte : reprendre avec 3 nombres.', en: 'The child copies a neighbour without looking at their own card: start again with 3 numbers.' },
    },
    unplugged: {
      id: 'ch5-s0:c',
      bridge: {
        fr: 'La semaine suivante, ouvrez « Suis les empreintes » : on range les flèches dans l’ordre, puis Go. C’est le message des robots, mais le dernier de la file, c’est le chien. Pour le matin, revoyez « Les 5 étapes de la fleur » : 1 → 5, un algorithme.',
        en: 'The following week, open “Follow the footprints”: arrange the arrows in order, then Go. It is the robots’ message, but the last in line is the dog. For the morning, revisit “The 5 steps of the flower”: 1 → 5, an algorithm.',
      },
    },
    noSound: {
      fr: 'Sans cartes-nombres : les enfants montrent des doigts (1 à 5) et se rangent. Sans vignettes : mimez le matin, un geste par étape, et rangez les enfants-gestes en file.',
      en: 'No number cards: children show fingers (1 to 5) and line up. No pictures: mime the morning, one gesture per step, and line up the gesture-children.',
    },
    vocab: [
      { word: { fr: 'Ordre (du plus petit au plus grand)', en: 'Order (smallest to biggest)' }, gesture: { fr: 'La main monte par paliers, comme un escalier', en: 'The hand rises in steps, like a staircase' } },
      { word: { fr: 'Programme (d’abord, ensuite, puis, enfin)', en: 'Program (first, then, next, finally)' }, gesture: { fr: 'On avance la main par à-coups, un pas à la fois', en: 'Move your hand forward in little jumps' } },
      { word: { fr: 'Transmettre (passer sans rien perdre)', en: 'Pass on (hand over without losing anything)' }, gesture: { fr: 'Les deux mains donnent un objet invisible au voisin', en: 'Both hands give an invisible object to a neighbour' } },
      { word: { fr: 'Bug (là où ça a changé)', en: 'Bug (where it changed)' }, gesture: { fr: 'On met la loupe devant l’œil', en: 'Make a magnifying glass with your fingers' } },
    ],
    tips: {
      a: { fr: 'Ajoutez un enfant « 0 » assis au début de la file : le plus petit a une place claire.', en: 'Add a child “0” sitting at the start of the line: the smallest has a clear place.' },
      b: { fr: 'Filmez la suite de départ avec le regard des « témoins » : ils tranchent à la fin, pas vous.', en: 'Let the “witnesses” memorise the starting sequence: they decide at the end, not you.' },
      c: { fr: 'Collez les vignettes dans le cahier de liaison : les parents refont l’algorithme le lendemain matin.', en: 'Glue the pictures in the home-school notebook: parents redo the algorithm the next morning.' },
    },
    closing: {
      fr: 'Aujourd’hui on s’est rangés dans l’ordre, on a passé un message de robots sans le perdre, et on a mis le matin dans l’ordre : d’abord, ensuite, puis, enfin.',
      en: 'Today we lined up in order, passed a robots’ message without losing it, and put the morning in order: first, then, next, finally.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a collé « l’algorithme du matin » dans le cahier : réveil, habits, petit-déjeuner, dents. Demain matin, refaites-le ensemble en disant « d’abord, ensuite, puis, enfin ». Jouez aussi au téléphone des gestes en famille : trois gestes à passer sans rien perdre.',
      en: 'Today your child glued “the morning algorithm” in the notebook: wake up, clothes, breakfast, teeth. Tomorrow morning, redo it together saying “first, then, next, finally”. Also play the gesture telephone as a family: three gestures to pass on without losing anything.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  'ch8-s5': {
    concept: 'decomposition',
    also: ['debug', 'loop'],
    duration: 30,
    essential: {
      fr: 'La maîtresse devient un robot qui obéit à la lettre : « mets le beurre » ne suffit pas. Les enfants coupent la tâche en petites étapes, réparent les ordres qui ratent, et nomment la répétition avec le chef d’orchestre.',
      en: 'The teacher becomes a robot that obeys literally: “put the butter” is not enough. Children cut the task into small steps, fix the orders that fail, and name repetition with the conductor.',
    },
    setup: [
      { fr: 'Posez sur une table visible de tous : pain de mie, boîte de beurre fermée, couteau en plastique (ou versions en carton).', en: 'On a table everyone can see: sliced bread, a closed butter tub, a plastic knife (or cardboard versions).' },
      { fr: 'Préparez la carte 🔁 avec le chiffre 3 (et un 2, un 4 au dos).', en: 'Prepare the 🔁 card with the number 3 (and a 2, a 4 on the back).' },
      { fr: 'Affichez les 3 cartes 🧥 🚶 🤫 près de la porte, dans l’ordre.', en: 'Display the 3 cards 🧥 🚶 🤫 near the door, in order.' },
      { fr: 'Gardez un coin du tableau libre pour dessiner la recette réparée, une image par étape.', en: 'Keep a corner of the board free to draw the fixed recipe, one picture per step.' },
      { fr: 'Ordre conseillé : 😴 b → 🎼 d → 🥪 a → 🧥 c à la sortie. Le rituel b ouvre et ferme la séance.', en: 'Suggested order: 😴 b → 🎼 d → 🥪 a → 🧥 c on the way out. Ritual b opens and closes the session.' },
    ],
    timeline: [
      { min: 3, what: { fr: '« Robot, réveille-toi ! » : assis droits, bras pliés, bip bip. Rappel : le robot obéit, il ne devine pas.', en: '“Robot, wake up!”: sit up straight, arms bent, beep beep. Reminder: the robot obeys, it does not guess.' }, act: 'b' },
      { min: 5, what: { fr: 'Le chef d’orchestre : motif taper, sauter. Carte 🔁 3 levée : on le fait trois fois en comptant. On change de motif, puis de nombre.', en: 'The conductor: pattern clap, jump. 🔁 3 card raised: do it three times, counting. Change the pattern, then the number.' }, act: 'd' },
      { min: 5, what: { fr: 'Le sandwich, partie 1 : « Je suis un robot. » « Mets le beurre » → la boîte fermée sur le pain. Rires. Il manque des étapes !', en: 'The sandwich, part 1: “I am a robot.” “Put the butter” → the closed tub on the bread. Laughter. Steps are missing!' }, act: 'a' },
      { min: 10, what: { fr: 'Le sandwich, partie 2 : les enfants reformulent, étape par étape. On dessine la recette réparée au tableau. Un enfant devient le robot.', en: 'The sandwich, part 2: children rephrase, step by step. Draw the fixed recipe on the board. A child becomes the robot.' }, act: 'a' },
      { min: 5, what: { fr: 'La file indienne programmée, à la sortie : un enfant lit les 3 cartes, tout le monde exécute. Un jour, inversez deux cartes.', en: 'The programmed line-up, on the way out: a child reads the 3 cards, everyone performs. One day, swap two cards.' }, act: 'c' },
      { min: 2, what: { fr: '« Robot, va dormir ! » : tête baissée, le bip s’éteint. Un mot chacun : qu’est-ce qui manquait au robot ?', en: '“Robot, go to sleep!”: head down, the beep fades. One word each: what was the robot missing?' }, act: 'b' },
    ],
    roles: {
      fr: 'Pour le sandwich : un « donneur d’ordres » à la fois, l’adulte-robot, et deux « réparateurs » qui proposent l’étape manquante. La classe crie « bug ! » quand le robot fait n’importe quoi. Pour le chef d’orchestre : un chef, la classe qui compte. Pour la file : un « lecteur de programme ».',
      en: 'For the sandwich: one “order giver” at a time, the adult robot, and two “fixers” who suggest the missing step. The class shouts “bug!” when the robot does something silly. For the conductor: one conductor, the class counting. For the line-up: one “program reader”.',
    },
    say: [
      { fr: 'Je suis un robot. Je fais exactement ce que tu dis, rien de plus.', en: 'I am a robot. I do exactly what you say, nothing more.' },
      { fr: 'Mets le beurre ? D’accord. La boîte est sur le pain.', en: 'Put the butter? Fine. The tub is on the bread.' },
      { fr: 'Il manque une étape. Laquelle ? Dis-la-moi.', en: 'A step is missing. Which one? Tell me.' },
      { fr: 'Taper, sauter, et on répète trois fois !', en: 'Clap, jump, and repeat three times!' },
      { fr: 'Manteau, rang, silence : c’est notre programme pour sortir.', en: 'Coat, line, silence: that is our program for going out.' },
    ],
    ask: [
      { fr: 'Pourquoi le robot a posé la boîte fermée sur le pain ?', en: 'Why did the robot put the closed tub on the bread?' },
      { fr: 'Qu’est-ce qu’on doit dire AVANT « étale le beurre » ?', en: 'What must we say BEFORE “spread the butter”?' },
      { fr: 'C’est plus court de dire « répète ×3 » ou de dire les six gestes ?', en: 'Is it shorter to say “repeat ×3” or to say the six gestures?' },
      { fr: 'Si on met « rang » avant « manteau », ça marche encore ?', en: 'If we put “line” before “coat”, does it still work?' },
      { fr: 'Combien d’étapes pour faire un vrai sandwich ? Comptons-les.', en: 'How many steps to make a real sandwich? Let’s count them.' },
    ],
    pitfalls: [
      { trap: { fr: 'Le robot « aide » les enfants et fait l’étape juste, sans qu’elle soit dite.', en: 'The robot “helps” the children and does the right step without it being said.' },
        fix: { fr: 'Restez bête, avec humour. Chaque ordre flou donne une action absurde : c’est ce qui fait apprendre.', en: 'Stay literal, with humour. Every vague order gives an absurd action: that is what teaches.' } },
      { trap: { fr: 'Tout le monde crie des ordres en même temps.', en: 'Everyone shouts orders at once.' },
        fix: { fr: 'Un bâton de parole : seul l’enfant qui le tient donne UN ordre, puis le passe.', en: 'A talking stick: only the child holding it gives ONE order, then passes it on.' } },
      { trap: { fr: 'Les grands donnent la recette complète d’un coup ; les petits décrochent.', en: 'Older children give the whole recipe at once; younger ones switch off.' },
        fix: { fr: 'Une seule étape par enfant, et le robot ne bouge qu’après le « bip ». Les petits donnent les premiers ordres.', en: 'One step per child, and the robot only moves after the “beep”. Younger ones give the first orders.' } },
      { trap: { fr: 'La classe rit trop et le jeu part dans tous les sens.', en: 'The class laughs too much and the game runs wild.' },
        fix: { fr: 'Après chaque rire, revenez au tableau : « on dessine l’étape qui manquait ». Le tableau calme.', en: 'After each laugh, go back to the board: “let’s draw the missing step”. The board calms things down.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : l’adulte est le robot, 2 ou 3 étapes seulement : ouvrir la boîte, prendre le couteau. Chef d’orchestre : un geste répété ×2. File : l’adulte lit les cartes.', en: '🌱 Age 3: the adult is the robot, only 2 or 3 steps: open the tub, take the knife. Conductor: one gesture repeated ×2. Line-up: the adult reads the cards.' },
      beg: { fr: '🌟 MS : l’enfant donne un ordre, dit-le avant que le robot bouge. Réparer un ordre qui rate. Chef : motif de 2 gestes ×3, l’enfant est chef. File : un enfant lit les cartes.', en: '🌟 Age 4: the child gives an order and says it before the robot moves. Fix one failed order. Conductor: 2-gesture pattern ×3, the child conducts. Line-up: a child reads the cards.' },
      pro: { fr: '🏆 GS : un enfant est le robot, un autre donne 4 étapes et plus. Cacher un bug dans la recette dessinée, la classe le trouve. Chef : ×4, puis « si je lève la rouge, alors on arrête ». File : inverser deux cartes et expliquer pourquoi ça rate.', en: '🏆 Age 5: a child is the robot, another gives 4 or more steps. Hide a bug in the drawn recipe, the class finds it. Conductor: ×4, then “if I raise red, then we stop”. Line-up: swap two cards and explain why it fails.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant rit quand le robot rate, et propose un geste.', en: 'I see the child laugh when the robot fails, and suggest a gesture.' },
      beg: { fr: 'Je vois que l’enfant ajoute l’étape manquante : « d’abord, ouvre la boîte ».', en: 'I see the child add the missing step: “first, open the tub”.' },
      pro: { fr: 'Je vois que l’enfant dicte 4 étapes dans l’ordre et repère le bug dans la recette.', en: 'I see the child dictate 4 steps in order and spot the bug in the recipe.' },
      warn: { fr: 'L’enfant répète « mets le beurre » plus fort au lieu de couper en étapes : montrez une étape, puis demandez la suivante.', en: 'The child repeats “put the butter” louder instead of cutting into steps: show one step, then ask for the next.' },
    },
    unplugged: {
      id: 'ch5-s5:a',
      bridge: {
        fr: 'Juste après, ou la semaine suivante, ouvrez « Le chien s’est trompé » : le programme est déjà écrit, une flèche se trompe. Comme le sandwich : on trouve le bug, on change UNE chose, on réessaie. Pour la boucle, « Répète : l’escalier » reprend la carte 🔁 3.',
        en: 'Right after, or the following week, open “The dog got it wrong”: the program is already written, one arrow is wrong. Like the sandwich: find the bug, change ONE thing, try again. For the loop, “Repeat: the staircase” picks up the 🔁 3 card.',
      },
    },
    noSound: {
      fr: 'Sans pain ni beurre : le robot doit mettre son manteau, ou ranger un livre sur l’étagère. Les ordres flous donnent les mêmes ratés. Sans carte 🔁 : montrez le nombre avec les doigts.',
      en: 'No bread or butter: the robot must put on a coat, or put a book on the shelf. Vague orders give the same failures. No 🔁 card: show the number with fingers.',
    },
    vocab: [
      { word: { fr: 'Étape (on coupe en petits morceaux)', en: 'Step (we cut it into small pieces)' }, gesture: { fr: 'On « coupe » avec la main, une fois, deux fois', en: 'Chop with your hand, once, twice' } },
      { word: { fr: 'Bug (l’ordre qui rate)', en: 'Bug (the order that fails)' }, gesture: { fr: 'On met la loupe (rond avec les doigts) devant l’œil', en: 'Make a magnifying glass with your fingers' } },
      { word: { fr: 'Répéter ×3 (encore, encore, encore)', en: 'Repeat ×3 (again, again, again)' }, gesture: { fr: 'On tourne l’index en rond', en: 'Twirl your index finger in a circle' } },
      { word: { fr: 'Robot (il obéit à la lettre)', en: 'Robot (it obeys literally)' }, gesture: { fr: 'Bras pliés, bip bip', en: 'Arms bent, beep beep' } },
    ],
    tips: {
      b: { fr: 'Faites le rituel tous les jours, même sans séance : il devient le signal « on écoute ».', en: 'Do the ritual every day, even without a session: it becomes the “we listen” signal.' },
      c: { fr: 'Le jour où vous inversez deux cartes, ne dites rien : laissez les enfants voir que ça rate.', en: 'The day you swap two cards, say nothing: let the children see it fails.' },
      d: { fr: 'Retournez la carte 🔁 pour changer le chiffre : les enfants voient que seul le nombre change.', en: 'Flip the 🔁 card to change the number: children see that only the number changes.' },
      a: { fr: 'Gardez un visage neutre de robot : plus vous êtes sérieuse, plus la classe rit et réfléchit.', en: 'Keep a neutral robot face: the more serious you are, the more the class laughs and thinks.' },
    },
    closing: {
      fr: 'Aujourd’hui le robot a raté le sandwich, alors on a coupé la recette en petites étapes et on a réparé les bugs. On a aussi dit « répète ×3 » au lieu de six gestes.',
      en: 'Today the robot failed the sandwich, so we cut the recipe into small steps and fixed the bugs. We also said “repeat ×3” instead of six gestures.',
    },
    parents: {
      fr: 'Aujourd’hui, la maîtresse était un robot qui obéit à la lettre : « mets le beurre » ne suffit pas ! Votre enfant a appris à couper une tâche en petites étapes. À la maison, soyez le robot : il vous explique comment mettre vos chaussures, étape par étape.',
      en: 'Today the teacher was a robot that obeys literally: “put the butter” is not enough! Your child learned to cut a task into small steps. At home, be the robot: they explain how to put on your shoes, step by step.',
    },
  },
}
