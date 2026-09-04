// Guide du professeur — chapitre 7 : Robotique avec mTiny
//
// Le simulateur (src/games/MTinyRobot.jsx) reproduit le robot panda mTiny de
// Matatalab : commandes RELATIVES (↑ Avancer vert, ↓ Reculer turquoise,
// ↰ Tourner à gauche indigo, ↱ Tourner à droite violet). Le robot a une
// orientation (flèche rouge ▲ qui pivote autour du panda, vers le haut au
// départ). « Tourner » ne déplace pas. Trois modes : tap (un seul bouton
// Avancer), direct (télécommande), programme (ranger les cartes puis ▶ Go).
// La même suite est ensuite rejouée avec le vrai robot et ses cartes.

export const CHAPTER = {
  thread: {
    fr: 'Un robot, c’est une machine qui obéit à un programme : « il lit les cartes et il fait ce qu’elles disent ». Notre panda regarde devant lui : pour aller ailleurs, il faut d’abord le faire tourner, puis avancer. À la fin, les enfants rangent une suite de cartes, appuient sur Go, répètent ×3 et réparent un bug… puis rejouent tout avec le vrai robot.',
    en: 'A robot is a machine that obeys a program: “it reads the cards and does what they say”. Our panda looks in front of itself: to go elsewhere, first make it turn, then move forward. By the end, children line up cards, press Go, repeat ×3 and fix a bug… then replay everything with the real robot.',
  },
  concepts: ['orientation', 'sequence', 'loop', 'tool', 'debug'],
  domains: [
    { fr: 'Explorer le monde · se repérer dans l’espace : situer un objet par rapport à soi (devant, derrière), tourner d’un quart de tour.', en: 'Exploring the world · spatial awareness: locate an object relative to oneself (in front, behind), turn a quarter turn.' },
    { fr: 'Langage oral : dire une consigne précise avant d’agir (« tourne à droite, puis avance deux fois »).', en: 'Oral language: give a precise instruction before acting (“turn right, then move twice”).' },
    { fr: 'Construire les premiers outils pour structurer sa pensée : dénombrer les pas, comparer « plus de cartes / moins de cartes ».', en: 'Early mathematical thinking: count the steps, compare “more cards / fewer cards”.' },
  ],
  rhythm: {
    fr: 'Trois séances de 30 à 35 minutes, une par semaine, en période 4 ou 5, après le jeu du chien (chapitre 5). Cœur du chapitre : s1 (découvrir, piloter) et s2 (tourner). La s3 est la mission finale : gardez-la même si vous coupez, mais retirez l’escalier 🔁 avec les PS. Ne jouez jamais le chien (flèches absolues) et mTiny (commandes relatives) dans la même séance.',
    en: 'Three sessions of 30–35 minutes, one per week, in term 4 or 5, after the dog game (chapter 5). Core of the chapter: s1 (discover, drive) and s2 (turn). S3 is the final mission: keep it even if you cut, but drop the 🔁 staircase with 3-year-olds. Never play the dog (absolute arrows) and mTiny (relative commands) in the same session.',
  },
  materials: [
    { fr: 'Le TBI tactile, avec le son testé 🔊 (le panda dit « Bravo ! »).', en: 'The touch board, with sound tested 🔊 (the panda says “Well done!”).' },
    { fr: 'Le vrai robot mTiny : panda, crayon-contrôleur, cartes de commande, tapis. Une fois : charger le robot ET le crayon la veille, essayer une carte seule.', en: 'The real mTiny robot: panda, tap pencil, command cards, map. Once: charge the robot AND the pencil the day before, try one card alone.' },
    { fr: 'Un quadrillage au sol (scotch de couleur, 4 × 4 cases d’un grand pas) qui reste toute la période.', en: 'A floor grid (coloured tape, 4 × 4 squares one big step wide) that stays up all term.' },
    { fr: 'Une fois : imprimer et plastifier 4 grandes cartes ↑ vert, ↓ turquoise, ↰ indigo, ↱ violet (mêmes couleurs que l’écran).', en: 'Once: print and laminate 4 big cards ↑ green, ↓ turquoise, ↰ indigo, ↱ purple (same colours as the screen).' },
    { fr: 'Une casquette ou un bandeau avec une flèche : le « devant » du robot humain.', en: 'A cap or headband with an arrow: the human robot’s “front”.' },
    { fr: 'Un objet-cible (cadeau 🎁 en carton ou bonbon 🍬 en papier).', en: 'A target object (cardboard gift 🎁 or paper sweet 🍬).' },
  ],
  ritual: {
    open: { fr: '« Robot, réveille-toi ! » : les enfants s’assoient droits, bras pliés, « bip bip ». Puis les 5 règles du tableau (ch1-s1). Ensuite, on réveille aussi le vrai robot : un enfant l’allume et la classe dit « bonjour panda ».', en: '“Robot, wake up!”: children sit up straight, arms bent, “beep beep”. Then the 5 board rules (ch1-s1). Then wake the real robot too: a child switches it on and the class says “hello panda”.' },
    close: { fr: '« Robot, va dormir ! » : on éteint le vrai robot, on le range sur le tapis, têtes baissées, bip qui s’éteint.', en: '“Robot, go to sleep!”: switch off the real robot, put it back on the map, heads down, fading beep.' },
  },
  unplugged: [
    { id: 'ch8-s1:tot', when: { fr: 'Avant la s1, en motricité : un ordre → un pas, avec le corps.', en: 'Before s1, in PE: one order → one step, with the body.' } },
    { id: 'ch7-s1:h', when: { fr: 'Pendant la s1, AVANT d’allumer le robot : le robot humain avec casquette.', en: 'During s1, BEFORE switching on the robot: the human robot with a cap.' } },
    { id: 'ch8-s1:a', when: { fr: 'Entre s1 et s2 : le robot et le maître, une carte à la fois sur le quadrillage.', en: 'Between s1 and s2: the robot and the master, one card at a time on the grid.' } },
    { id: 'ch8-s5:d', when: { fr: 'Avant la s3 : le chef d’orchestre, pour nommer « répéter ×3 ».', en: 'Before s3: the conductor, to name “repeat ×3”.' } },
    { id: 'ch5-s5:d', when: { fr: 'Pendant la s3, avec les GS : la maîtresse-robot se trompe, la classe crie « bug ! ».', en: 'During s3, with 5-year-olds: the teacher-robot gets it wrong, the class shouts “bug!”.' } },
  ],
  pitfalls: [
    { trap: { fr: 'Les enfants disent « à droite » pour « va vers la droite », comme avec le chien.', en: 'Children say “right” meaning “go to the right”, as with the dog.' },
      fix: { fr: 'Rappelez à chaque séance : ici, « droite » veut dire TOURNER à droite. Faites pivoter la classe sur place.', en: 'Remind them every session: here “right” means TURN right. Have the class pivot on the spot.' } },
    { trap: { fr: 'Le vrai robot ne réagit pas : batterie vide ou crayon éteint.', en: 'The real robot does not respond: flat battery or pencil switched off.' },
      fix: { fr: 'Chargez robot et crayon la veille. Gardez le simulateur : la séance continue à l’écran.', en: 'Charge robot and pencil the day before. Keep the simulator: the session goes on on screen.' } },
    { trap: { fr: 'Tout le monde veut toucher le vrai robot en même temps.', en: 'Everyone wants to touch the real robot at once.' },
      fix: { fr: 'Un seul pilote au crayon, les autres « sont le robot » et pivotent sur place au tapis.', en: 'One pilot holds the pencil, the others “are the robot” and pivot on the spot at the mat.' } },
    { trap: { fr: 'On mélange les flèches du chien et les cartes du panda.', en: 'Mixing the dog’s arrows and the panda’s cards.' },
      fix: { fr: 'Jamais les deux jeux le même jour. Dites : « le chien glisse, le panda tourne ».', en: 'Never both games the same day. Say: “the dog slides, the panda turns”.' } },
  ],
  observables: [
    { fr: 'L’enfant explique qu’un robot suit un programme, et trie robot / pas robot.', en: 'The child explains that a robot follows a program, and sorts robot / not robot.' },
    { fr: 'Il montre où regarde le panda (la flèche rouge) avant d’appuyer.', en: 'They point to where the panda looks (the red arrow) before pressing.' },
    { fr: 'Il pivote sur place d’un quart de tour sans changer de case quand on montre ↰ ou ↱.', en: 'They pivot a quarter turn on the spot without changing square when shown ↰ or ↱.' },
    { fr: 'Il range une suite avancer / tourner / avancer et prédit la case d’arrivée.', en: 'They line up a move / turn / move sequence and predict the arrival square.' },
    { fr: 'Il trouve la carte Reculer quand un mur bloque le devant.', en: 'They find the Backward card when a wall blocks the front.' },
    { fr: 'Il dit « répète ×3 » plutôt que de nommer douze cartes.', en: 'They say “repeat ×3” rather than naming twelve cards.' },
  ],
  celebration: {
    fr: 'Grand tapis au sol, vrai robot réveillé. Chaque groupe rejoue sa mission préférée : PS un bouton, MS une télécommande, GS un programme avec boucle. On affiche les cartes de chaque programme au mur et on prend la photo « la classe et le panda ».',
    en: 'Big map on the floor, real robot awake. Each group replays its favourite mission: 3-year-olds one button, 4-year-olds a remote, 5-year-olds a program with a loop. Display each program’s cards on the wall and take the “class and panda” photo.',
  },
  parents: {
    fr: 'Ce mois-ci, nous avons programmé un vrai robot, le panda mTiny. Votre enfant sait le faire avancer, reculer et tourner avec des cartes, en regardant toujours « devant » lui. À la maison, jouez au robot : vous obéissez à la lettre, votre enfant dit « avance », « tourne à droite », « recule ». Fou rire garanti quand vous tournez sans avancer !',
    en: 'This month we programmed a real robot, the mTiny panda. Your child can make it move forward, back and turn with cards, always looking at its “front”. At home, play robot: you obey literally while your child says “forward”, “turn right”, “back”. Guaranteed giggles when you turn without moving!',
  },
}

export const SESSIONS = {
  // ───────────────────────────────────────────────────────────────────────────
  'ch7-s1': {
    concept: 'tool',
    also: ['cause', 'orientation'],
    duration: 30,
    essential: {
      fr: 'Les enfants découvrent qu’un robot est une machine qui obéit à un programme, puis rencontrent le panda mTiny et ses parties. Ils font avancer le robot d’un bouton, jouent au robot humain, puis pilotent avec les cartes, à l’écran et avec le vrai robot.',
      en: 'Children discover that a robot is a machine that obeys a program, then meet the mTiny panda and its parts. They move the robot with one button, play human robot, then drive with the cards, on screen and with the real robot.',
    },
    setup: [
      { fr: 'Testez le son 🔊 : ouvrez « Les parties de mTiny » et touchez une carte, elle doit parler.', en: 'Test the sound 🔊: open “The parts of mTiny” and tap a card, it should speak.' },
      { fr: 'Chargez le vrai robot et le crayon-contrôleur la veille ; posez le tapis au sol devant le TBI, cadeau sur une case.', en: 'Charge the real robot and the tap pencil the day before; lay the map on the floor in front of the board, gift on a square.' },
      { fr: 'Ouvrez « Le robot avance » (niveau 1, mode tap) : vérifiez que le panda regarde vers le haut et que le cadeau est à 3 cases.', en: 'Open “The robot moves” (level 1, tap mode): check the panda looks up and the gift is 3 squares away.' },
      { fr: 'Préparez les 4 grandes cartes plastifiées et la casquette-flèche pour le robot humain.', en: 'Prepare the 4 big laminated cards and the arrow cap for the human robot.' },
      { fr: 'Apportez une peluche, une lampe torche et, si possible, une photo d’aspirateur robot pour le tri.', en: 'Bring a teddy, a torch and, if possible, a photo of a robot vacuum for the sorting.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », les 5 règles du tableau. Le vrai robot reste endormi, bien visible.', en: 'Ritual: “Robot, wake up!”, the 5 board rules. The real robot stays asleep, in plain view.' } },
      { min: 5, what: { fr: 'Robot ou pas robot ? Montrez la peluche, la torche : « ça décide tout seul ? ». Puis trier les six images à l’écran.', en: 'Robot or not a robot? Show the teddy, the torch: “does it decide by itself?”. Then sort the six pictures on screen.' }, act: 'r' },
      { min: 4, what: { fr: 'Les parties de mTiny : un enfant touche chaque carte, on montre en même temps la vraie pièce.', en: 'The parts of mTiny: a child taps each card, show the real part at the same time.' }, act: 'a' },
      { min: 4, what: { fr: 'Le robot avance : trois pilotes PS appuient sur ↑ Avancer, la classe compte les pas jusqu’au cadeau.', en: 'The robot moves: three 3-year-old pilots press ↑ Forward, the class counts the steps to the gift.' }, act: 'tot' },
      { min: 6, what: { fr: 'Le robot humain : casquette, quadrillage, une carte à la fois. Insistez : ↰ ↱ on pivote SANS changer de case.', en: 'The human robot: cap, grid, one card at a time. Insist: ↰ ↱ you pivot WITHOUT changing square.' }, act: 'h' },
      { min: 5, what: { fr: 'Pilote le robot (télécommande) : le copilote dit la carte, le pilote appuie, le vérificateur regarde la flèche rouge.', en: 'Drive the robot (remote): the co-pilot names the card, the pilot presses, the checker watches the red arrow.' }, act: 'c' },
      { min: 3, what: { fr: 'On réveille le vrai robot : un pilote rejoue la même suite avec le crayon et les cartes. Puis « Robot, va dormir ! ».', en: 'Wake the real robot: a pilot replays the same sequence with the pencil and cards. Then “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Un pilote 🎮 touche l’écran (ou tient le crayon). Un copilote 🗣️ dit la carte AVANT l’appui : « avancer ! ». Un vérificateur 👀 montre du doigt où pointe la flèche rouge. Le reste de la classe « est le robot » : debout au tapis, elle fait un pas ou pivote sur place en même temps que le panda.',
      en: 'A pilot 🎮 touches the screen (or holds the pencil). A co-pilot 🗣️ names the card BEFORE pressing: “forward!”. A checker 👀 points to where the red arrow is pointing. The rest of the class “is the robot”: standing at the mat, they step or pivot on the spot along with the panda.',
    },
    say: [
      { fr: 'Un robot, c’est une machine qui fait ce que dit son programme.', en: 'A robot is a machine that does what its program says.' },
      { fr: 'Regarde la flèche rouge : c’est le devant du panda.', en: 'Look at the red arrow: that is the panda’s front.' },
      { fr: 'Avancer, c’est un pas vers le devant.', en: 'Forward is one step towards the front.' },
      { fr: 'Tourner, ce n’est pas avancer. On pivote sur place.', en: 'Turning is not moving. We pivot on the spot.' },
      { fr: 'Dis la carte tout haut, puis appuie.', en: 'Say the card out loud, then press.' },
    ],
    ask: [
      { fr: 'La peluche, elle bouge toute seule ?', en: 'Does the teddy move by itself?' },
      { fr: 'Où regarde le panda ?', en: 'Where is the panda looking?' },
      { fr: 'Combien de pas jusqu’au cadeau ?', en: 'How many steps to the gift?' },
      { fr: 'Si j’appuie sur « tourner », le panda change de case ?', en: 'If I press “turn”, does the panda change square?' },
      { fr: 'Quelle pièce lit les cartes ?', en: 'Which part reads the cards?' },
    ],
    pitfalls: [
      { trap: { fr: 'Dans « Pilote le robot », le cadeau est à droite : l’enfant appuie sur Avancer et le panda monte.', en: 'In “Drive the robot”, the gift is to the right: the child presses Forward and the panda goes up.' },
        fix: { fr: 'Ne corrigez pas : demandez « où regarde-t-il ? ». Il faut d’abord ↱ Tourner à droite, puis Avancer.', en: 'Do not correct: ask “where is it looking?”. First ↱ Turn right, then Forward.' } },
      { trap: { fr: 'Le robot humain fait un pas de côté quand on montre ↱.', en: 'The human robot steps sideways when shown ↱.' },
        fix: { fr: 'Tenez ses épaules, faites-le pivoter sur place. La classe vérifie la casquette.', en: 'Hold their shoulders, pivot them on the spot. The class checks the cap.' } },
      { trap: { fr: 'En mode tap, un enfant cherche un bouton pour tourner.', en: 'In tap mode, a child looks for a turn button.' },
        fix: { fr: 'Dites : « aujourd’hui le panda ne sait qu’avancer ». Les cartes tourner arrivent dans « Pilote le robot ».', en: 'Say: “today the panda only knows how to move forward”. The turn cards come in “Drive the robot”.' } },
      { trap: { fr: 'Le vrai robot ne bouge pas quand on tape la carte.', en: 'The real robot does not move when the card is tapped.' },
        fix: { fr: 'Vérifiez que robot et crayon sont allumés et chargés. Sinon, finissez à l’écran.', en: 'Check that robot and pencil are on and charged. Otherwise, finish on screen.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : « Le robot avance » seulement. Un doigt sur ↑ Avancer, on compte les pas ensemble : un, deux, trois, cadeau !', en: '🌱 3-year-olds: “The robot moves” only. One finger on ↑ Forward, count the steps together: one, two, three, gift!' },
      beg: { fr: '🌟 MS : « Pilote le robot ». Dire la carte avant d’appuyer : une rotation à droite, puis avancer trois fois.', en: '🌟 4-year-olds: “Drive the robot”. Say the card before pressing: one turn right, then forward three times.' },
      pro: { fr: '🏆 GS : « Avance jusqu’au cadeau » en mode programme. Ranger les 3 cartes, prédire la case, puis ▶ Go. Viser 3 étoiles.', en: '🏆 5-year-olds: “Move to the gift” in program mode. Line up the 3 cards, predict the square, then ▶ Go. Aim for 3 stars.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant appuie une fois, regarde le panda bouger, puis appuie encore.', en: 'I see the child press once, watch the panda move, then press again.' },
      beg: { fr: 'Je vois que l’enfant nomme « tourner à droite » avant de toucher la carte violette.', en: 'I see the child say “turn right” before touching the purple card.' },
      pro: { fr: 'Je vois que l’enfant range trois ↑ et annonce « il arrive au cadeau » avant Go.', en: 'I see the child line up three ↑ and announce “it reaches the gift” before Go.' },
      warn: { fr: 'Un enfant appuie partout sans regarder le panda : revenez au robot humain, une carte à la fois.', en: 'A child presses everywhere without watching the panda: go back to the human robot, one card at a time.' },
    },
    unplugged: {
      id: 'ch7-s1:h',
      bridge: { fr: 'Jouez le robot humain AVANT d’allumer le vrai robot. Puis rejouez la même suite de cartes à l’écran : « c’est pareil ! ».', en: 'Play the human robot BEFORE switching on the real robot. Then replay the same card sequence on screen: “it is the same!”.' },
    },
    noSound: {
      fr: 'Sans son, le bouton 🔊 des parties reste muet : lisez vous-même la phrase de chaque carte. À la victoire, la classe crie « Bravo ! » à la place du panda. Le bandeau rose 🚫 se voit sans le son.',
      en: 'Without sound, the 🔊 button on the parts stays silent: read each card’s sentence yourself. On winning, the class shouts “Well done!” instead of the panda. The pink 🚫 banner is visible without sound.',
    },
    vocab: [
      { word: { fr: 'Robot = « la machine qui obéit au programme »', en: 'Robot = “the machine that obeys the program”' }, gesture: { fr: 'Bras pliés, « bip bip », comme au rituel', en: 'Arms bent, “beep beep”, as in the ritual' } },
      { word: { fr: 'Carte = « l’ordre pour le robot »', en: 'Card = “the order for the robot”' }, gesture: { fr: 'On montre une carte imaginaire devant soi', en: 'Hold up an imaginary card in front of you' } },
      { word: { fr: 'Devant = « là où regarde le panda »', en: 'Front = “where the panda looks”' }, gesture: { fr: 'On pointe le nez et l’index devant soi', en: 'Point nose and finger straight ahead' } },
      { word: { fr: 'Avancer = « un pas vers le devant »', en: 'Forward = “one step towards the front”' }, gesture: { fr: 'Un grand pas en avant, puis stop', en: 'One big step forward, then stop' } },
    ],
    tips: {
      tot: { fr: 'Le bouton devient gris au cadeau : c’est le signal pour appuyer sur ↺ Recommencer et changer de pilote.', en: 'The button goes grey at the gift: that is the signal to press ↺ Reset and change pilot.' },
      r: { fr: 'Avant chaque image, demandez « ça décide tout seul ? » ; la peluche ✘ fait rire, gardez-la pour la fin.', en: 'Before each picture, ask “does it decide by itself?”; the teddy ✘ gets laughs, keep it for last.' },
      a: { fr: 'Touchez la carte à l’écran ET levez la vraie pièce en même temps : le crayon-contrôleur impressionne.', en: 'Tap the card on screen AND hold up the real part at the same time: the tap pencil impresses.' },
      h: { fr: 'Imprimez les cartes depuis la fiche 🖨️ ; la casquette tournée vers le mur évite le « devant, c’est la maîtresse ».', en: 'Print the cards from the 🖨️ sheet; the cap facing the wall avoids “the front is the teacher”.' },
      c: { fr: 'Le cadeau est à droite mais le panda regarde en haut : laissez l’erreur arriver, puis « où regarde-t-il ? ».', en: 'The gift is to the right but the panda looks up: let the mistake happen, then “where is it looking?”.' },
      b: { fr: 'Trois cartes ↑ suffisent : avec 4 ou plus, le bandeau dit « essaie avec moins ! », profitez-en pour compter.', en: 'Three ↑ cards are enough: with 4 or more, the banner says “try with fewer!”, use it to count.' },
      e: { fr: 'Activité calme de fin : quatre bonnes réponses gagnent le trophée ; les PS comptent en touchant chaque robot.', en: 'Calm closing activity: four right answers win the trophy; 3-year-olds count by touching each robot.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a rencontré le panda mTiny. Un robot obéit à son programme : les cartes. Avancer, c’est un pas vers le devant.',
      en: 'Today we met the mTiny panda. A robot obeys its program: the cards. Forward is one step towards the front.',
    },
    parents: {
      fr: 'Nous avons rencontré notre robot, le panda mTiny. Votre enfant sait qu’un robot obéit à un programme et qu’il regarde toujours « devant » lui. Demandez-lui : « qu’est-ce qui lit les cartes ? » (le crayon-contrôleur !).',
      en: 'We met our robot, the mTiny panda. Your child knows a robot obeys a program and always looks at its “front”. Ask them: “what reads the cards?” (the tap pencil!).',
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  'ch7-s2': {
    concept: 'orientation',
    also: ['sequence', 'debug'],
    duration: 30,
    essential: {
      fr: 'Les enfants apprennent que le panda regarde dans une direction et que « tourner » change ce regard sans bouger de case. Ils construisent un chemin en L, avancer-tourner-avancer, et découvrent la marche arrière quand un mur bloque le devant.',
      en: 'Children learn that the panda looks in one direction and that “turning” changes that gaze without moving square. They build an L-shaped path, move-turn-move, and discover reverse gear when a wall blocks the front.',
    },
    setup: [
      { fr: 'Testez le son 🔊 dans « Tourne puis avance » : le tap des cartes tourner fait un petit clic, l’avancer un pas.', en: 'Test the sound 🔊 in “Turn then move”: tapping the turn cards makes a little click, forward a step.' },
      { fr: 'Robot et crayon chargés ; placez le vrai tapis au sol avec le cadeau EN HAUT À DROITE, comme au niveau 4.', en: 'Robot and pencil charged; lay the real map on the floor with the gift TOP RIGHT, like level 4.' },
      { fr: 'Ouvrez « Marche arrière » : vérifiez le mur 🧱 juste devant le panda et le bandeau 🚫 quand on appuie sur Avancer.', en: 'Open “Reverse gear”: check the wall 🧱 right in front of the panda and the 🚫 banner when pressing Forward.' },
      { fr: 'Gardez les grandes cartes ↰ ↱ à portée de main : vous les lèverez à chaque rotation.', en: 'Keep the big ↰ ↱ cards within reach: you will raise them at each turn.' },
      { fr: 'Un tabouret marqué d’une flèche au sol : la « case » du robot humain pour la démonstration.', en: 'A stool with an arrow marked on the floor: the human robot’s “square” for the demo.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », règles du tableau. Debout : tout le monde pivote d’un quart de tour à droite, puis à gauche.', en: 'Ritual: “Robot, wake up!”, board rules. Standing: everyone pivots a quarter turn right, then left.' } },
      { min: 3, what: { fr: 'Le panda avance encore : un pilote PS, la classe compte les pas. « Il regarde en haut, il monte. »', en: 'The panda moves again: a 3-year-old pilot, the class counts the steps. “It looks up, it goes up.”' }, act: 'tot' },
      { min: 6, what: { fr: 'Tourne puis avance : le cadeau est à droite. Ranger ↱ puis ↑ ↑ ↑, prédire, ▶ Go. Regarder la flèche rouge pivoter.', en: 'Turn then move: the gift is to the right. Line up ↱ then ↑ ↑ ↑, predict, ▶ Go. Watch the red arrow pivot.' }, act: 'a' },
      { min: 6, what: { fr: 'Pilote dans le grand tapis : télécommande, un copilote dit chaque carte. Quatre pas, une rotation, quatre pas.', en: 'Drive on the big map: remote, a co-pilot names each card. Four steps, one turn, four steps.' }, act: 'c' },
      { min: 4, what: { fr: 'Marche arrière : mur devant ! Laissez le bandeau 🚫 apparaître, puis cherchez la carte turquoise ↓.', en: 'Reverse gear: wall ahead! Let the 🚫 banner appear, then look for the turquoise ↓ card.' }, act: 'r' },
      { min: 5, what: { fr: 'Le chemin en L en mode programme : les GS rangent les 9 cartes, la classe « est le robot » au tapis pendant Go.', en: 'The L-shaped path in program mode: 5-year-olds line up the 9 cards, the class “is the robot” at the mat during Go.' }, act: 'b' },
      { min: 3, what: { fr: 'Vrai robot : rejouer le L avec le crayon et les cartes, cadeau en haut à droite. « Robot, va dormir ! ».', en: 'Real robot: replay the L with the pencil and cards, gift top right. “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 à l’écran, copilote 🗣️ qui dit la carte avant (« tourne à droite ! »), vérificateur 👀 qui annonce où pointe la flèche rouge après chaque carte. La classe debout au quadrillage « est le robot » : elle pivote sur place aux cartes ↰ ↱, fait un pas aux cartes ↑ ↓. Changez de pilote à chaque cadeau.',
      en: 'Pilot 🎮 on screen, co-pilot 🗣️ who names the card first (“turn right!”), checker 👀 who announces where the red arrow points after each card. The class standing on the grid “is the robot”: it pivots on the spot for ↰ ↱ cards, steps for ↑ ↓ cards. Change pilot at each gift.',
    },
    say: [
      { fr: 'Où regarde le panda ? Montre la flèche rouge.', en: 'Where is the panda looking? Point to the red arrow.' },
      { fr: 'Tourner, ce n’est pas avancer. Le panda reste sur sa case.', en: 'Turning is not moving. The panda stays on its square.' },
      { fr: 'D’abord je tourne, ensuite j’avance.', en: 'First I turn, then I move.' },
      { fr: 'Un mur devant ? Le panda peut reculer.', en: 'A wall ahead? The panda can go backwards.' },
      { fr: 'Dis la carte, puis appuie. Une seule fois.', en: 'Say the card, then press. Only once.' },
    ],
    ask: [
      { fr: 'Le cadeau est à droite : quelle carte en premier ?', en: 'The gift is to the right: which card first?' },
      { fr: 'Après « tourner à droite », où regarde le panda ?', en: 'After “turn right”, where is the panda looking?' },
      { fr: 'Il a tourné : a-t-il changé de case ?', en: 'It turned: did it change square?' },
      { fr: 'Le mur est devant. Que peut faire le panda ?', en: 'The wall is in front. What can the panda do?' },
      { fr: 'Combien de cartes pour le chemin en L ?', en: 'How many cards for the L-shaped path?' },
    ],
    pitfalls: [
      { trap: { fr: 'L’enfant appuie deux fois sur ↱ : le panda regarde vers le bas.', en: 'The child presses ↱ twice: the panda looks down.' },
        fix: { fr: 'Une carte = un quart de tour. Faites pivoter la classe deux fois : « tu regardes le mur du fond ! ».', en: 'One card = one quarter turn. Pivot the class twice: “you are looking at the back wall!”.' } },
      { trap: { fr: 'Personne ne regarde la flèche rouge, on appuie sur Avancer « vers le cadeau ».', en: 'Nobody looks at the red arrow, they press Forward “towards the gift”.' },
        fix: { fr: 'Nommez un vérificateur 👀 qui dit « il regarde en haut » avant chaque appui.', en: 'Appoint a checker 👀 who says “it is looking up” before each press.' } },
      { trap: { fr: 'Dans « Marche arrière », l’enfant tourne deux fois puis avance : ça marche, mais 4 cartes.', en: 'In “Reverse gear”, the child turns twice then moves: it works, but 4 cards.' },
        fix: { fr: 'Félicitez, puis demandez « plus court ? ». La carte turquoise ↓ fait deux pas en arrière.', en: 'Praise, then ask “shorter?”. The turquoise ↓ card takes two steps back.' } },
      { trap: { fr: 'Le programme en L dépasse les 12 cartes : bandeau « Plus de place ! ».', en: 'The L program goes past 12 cards: “No more room!” banner.' },
        fix: { fr: 'Touchez une carte de la suite pour l’enlever. Comptez : quatre, une, quatre = neuf.', en: 'Tap a card in the sequence to remove it. Count: four, one, four = nine.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : « Le panda avance encore » en mode tap. Compter les trois pas ; puis, debout, pivoter avec la classe sans écran.', en: '🌱 3-year-olds: “The panda moves again” in tap mode. Count the three steps; then, standing, pivot with the class without a screen.' },
      beg: { fr: '🌟 MS : « Pilote dans le grand tapis » à la télécommande. Une rotation puis avancer ; dire la carte avant chaque appui.', en: '🌟 4-year-olds: “Drive on the big map” by remote. One turn then forward; say the card before each press.' },
      pro: { fr: '🏆 GS : « Le chemin en L » en programme complet : 9 cartes, prédire l’arrivée, viser 3 étoiles. Puis « Marche arrière » avec ↓ seulement.', en: '🏆 5-year-olds: “The L-shaped path” as a full program: 9 cards, predict the arrival, aim for 3 stars. Then “Reverse gear” with ↓ only.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant pivote sur place quand je lève la carte ↱, sans faire de pas.', en: 'I see the child pivot on the spot when I raise the ↱ card, without stepping.' },
      beg: { fr: 'Je vois que l’enfant regarde la flèche rouge avant de choisir entre ↑ et ↱.', en: 'I see the child look at the red arrow before choosing between ↑ and ↱.' },
      pro: { fr: 'Je vois que l’enfant range ↑↑↑↑ ↱ ↑↑↑↑ et annonce la case d’arrivée avant Go.', en: 'I see the child line up ↑↑↑↑ ↱ ↑↑↑↑ and announce the arrival square before Go.' },
      warn: { fr: 'Un enfant dit « à droite » en montrant la droite de l’écran : reprenez avec le robot humain et la casquette.', en: 'A child says “right” while pointing at the right of the screen: go back to the human robot and the cap.' },
    },
    unplugged: {
      id: 'ch8-s1:a',
      bridge: { fr: 'Le robot et le maître, la veille ou le matin même : une carte, un pas OU un quart de tour. Reprenez la casquette-flèche de la s1 pour le « devant ».', en: 'The robot and the master, the day before or that morning: one card, one step OR one quarter turn. Reuse the arrow cap from s1 for the “front”.' },
    },
    noSound: {
      fr: 'Sans son, on ne distingue plus le clic « tourner » du pas « avancer » : le vérificateur dit tout haut « il tourne » ou « il avance ». La flèche rouge qui pivote et le bandeau rose 🚫 restent visibles.',
      en: 'Without sound, the “turn” click and the “forward” step are no longer distinct: the checker says out loud “it turns” or “it moves”. The pivoting red arrow and the pink 🚫 banner stay visible.',
    },
    vocab: [
      { word: { fr: 'Tourner = « pivoter sur place »', en: 'Turn = “pivot on the spot”' }, gesture: { fr: 'Un quart de tour sur place, les pieds ne changent pas de case', en: 'A quarter turn on the spot, feet stay in the square' } },
      { word: { fr: 'À droite / à gauche = « le côté vers lequel on tourne »', en: 'Right / left = “the side we turn towards”' }, gesture: { fr: 'On lève la main du côté, puis on pivote vers elle', en: 'Raise the hand on that side, then pivot towards it' } },
      { word: { fr: 'Reculer = « un pas en arrière, sans se retourner »', en: 'Backward = “one step back, without turning around”' }, gesture: { fr: 'Un pas en arrière, le nez toujours devant', en: 'One step back, nose still facing front' } },
      { word: { fr: 'Flèche rouge = « le nez du panda »', en: 'Red arrow = “the panda’s nose”' }, gesture: { fr: 'On touche son nez et on montre devant', en: 'Touch your nose and point ahead' } },
    ],
    tips: {
      tot: { fr: 'Même niveau que « Avance jusqu’au cadeau » en s1 : demandez « combien de pas ? » AVANT le premier appui.', en: 'Same level as “Move to the gift” in s1: ask “how many steps?” BEFORE the first press.' },
      a: { fr: 'Après ▶ Go, mettez en pause avec ⏹ Stop juste après ↱ : le panda a tourné mais n’a pas bougé.', en: 'After ▶ Go, pause with ⏹ Stop right after ↱: the panda has turned but has not moved.' },
      c: { fr: 'Deux chemins possibles (monter puis droite, ou droite puis monter) : laissez chaque pilote choisir le sien.', en: 'Two possible paths (up then right, or right then up): let each pilot choose theirs.' },
      r: { fr: 'Laissez l’enfant appuyer sur Avancer contre le mur : le bandeau 🚫 rose est la meilleure explication.', en: 'Let the child press Forward against the wall: the pink 🚫 banner is the best explanation.' },
      b: { fr: 'Neuf cartes, c’est long : la classe au tapis fait les pas en même temps pendant Go, ça tient tout le monde.', en: 'Nine cards is long: the class at the mat steps along during Go, it keeps everyone engaged.' },
    },
    closing: {
      fr: 'Aujourd’hui, le panda a tourné. Tourner, ce n’est pas avancer : il reste sur sa case et regarde ailleurs. Et devant un mur, il recule.',
      en: 'Today the panda turned. Turning is not moving: it stays on its square and looks elsewhere. And facing a wall, it goes backwards.',
    },
    parents: {
      fr: 'Le panda mTiny sait tourner ! Votre enfant a compris que « tourner à droite » fait pivoter le robot sans le déplacer. À la maison : « tourne à droite… avance… recule » ; obéissez à la lettre, il vérifie où regarde votre nez.',
      en: 'The mTiny panda can turn! Your child understood that “turn right” pivots the robot without moving it. At home: “turn right… forward… back”; obey literally, they check where your nose is looking.',
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  'ch7-s3': {
    concept: 'sequence',
    also: ['loop', 'debug'],
    duration: 35,
    essential: {
      fr: 'Mission finale : les enfants combinent avancer, tourner et reculer pour traverser le grand tapis et contourner un mur. Ils rangent un programme complet, le répètent ×3 pour monter l’escalier, cherchent un bug… puis rejouent la mission avec le vrai robot.',
      en: 'Final mission: children combine forward, turn and backward to cross the big map and go around a wall. They line up a full program, repeat it ×3 to climb the staircase, hunt a bug… then replay the mission with the real robot.',
    },
    setup: [
      { fr: 'Testez le son 🔊 dans « Le grand voyage » : rangez ↑ et ▶ Go, un pas doit se faire entendre.', en: 'Test the sound 🔊 in “The big journey”: line up ↑ and ▶ Go, a step should be heard.' },
      { fr: 'Robot et crayon chargés ; vrai tapis au sol, un cube-mur au milieu, cadeau en haut à gauche, robot en bas à droite.', en: 'Robot and pencil charged; real map on the floor, a block as the wall in the middle, gift top left, robot bottom right.' },
      { fr: 'Ouvrez « Répète : l’escalier » et essayez ↑ ↱ ↑ ↰ avec 🔁 ×3 : le panda monte en escalier jusqu’au cadeau.', en: 'Open “Repeat: the staircase” and try ↑ ↱ ↑ ↰ with 🔁 ×3: the panda climbs the staircase to the gift.' },
      { fr: 'Préparez la carte 🔁 3 du chef d’orchestre et les 4 grandes cartes pour le tableau.', en: 'Prepare the conductor’s 🔁 3 card and the 4 big cards for the board.' },
      { fr: 'Pour les GS, gardez « Le robot s’est trompé » (ch5-s5:c) sous la main : un programme avec une carte fausse à réparer.', en: 'For 5-year-olds, keep “The robot got it wrong” (ch5-s5:c) handy: a program with one wrong card to fix.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », règles du tableau. Chef d’orchestre express : taper-sauter, 🔁 ×3.', en: 'Ritual: “Robot, wake up!”, board rules. Quick conductor: clap-jump, 🔁 ×3.' } },
      { min: 3, what: { fr: 'Le panda et le bonbon : un pilote PS, ↑ Avancer trois fois. La classe compte.', en: 'The panda and the sweet: a 3-year-old pilot, ↑ Forward three times. The class counts.' }, act: 'tot' },
      { min: 6, what: { fr: 'Le grand voyage en télécommande : mur au milieu. Copilote dit la carte, pilote appuie, on longe le bord.', en: 'The big journey by remote: wall in the middle. Co-pilot names the card, pilot presses, follow the edge.' }, act: 'c' },
      { min: 7, what: { fr: 'Le grand voyage en programme : les GS rangent les 9 cartes au tableau, prédisent, ▶ Go. Erreur ? On enlève une carte.', en: 'The big journey as a program: 5-year-olds line up the 9 cards on the board, predict, ▶ Go. Mistake? Remove a card.' }, act: 'a' },
      { min: 5, what: { fr: 'Programme la marche arrière : ↓ ↓ et Go, trois étoiles. Comparez avec ↱ ↱ ↑ ↑ : plus long.', en: 'Program the reverse gear: ↓ ↓ and Go, three stars. Compare with ↱ ↱ ↑ ↑: longer.' }, act: 'r' },
      { min: 7, what: { fr: 'L’escalier : ranger ↑ ↱ ↑ ↰, choisir 🔁 ×3, Go. La classe monte l’escalier au tapis en comptant « encore ! ».', en: 'The staircase: line up ↑ ↱ ↑ ↰, choose 🔁 ×3, Go. The class climbs the staircase at the mat counting “again!”.' }, act: 'b' },
      { min: 4, what: { fr: 'Vrai robot : un pilote rejoue le grand voyage avec le crayon et les cartes. Photo, puis « Robot, va dormir ! ».', en: 'Real robot: a pilot replays the big journey with the pencil and cards. Photo, then “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮, copilote 🗣️ qui lit le programme carte par carte, vérificateur 👀 qui suit la flèche rouge. Deux « compteurs » comptent les cartes posées (plafond 12). Pendant Go, la classe « est le robot » au quadrillage : pas, pivot, pas, pivot. Pour l’escalier, un chef d’orchestre lève la carte 🔁 3.',
      en: 'Pilot 🎮, co-pilot 🗣️ who reads the program card by card, checker 👀 who follows the red arrow. Two “counters” count the cards placed (ceiling 12). During Go, the class “is the robot” on the grid: step, pivot, step, pivot. For the staircase, a conductor raises the 🔁 3 card.',
    },
    say: [
      { fr: 'On range toutes les cartes, puis on appuie sur Go.', en: 'We line up all the cards, then press Go.' },
      { fr: 'Où va-t-il arriver ? Montre la case avant Go.', en: 'Where will it arrive? Show the square before Go.' },
      { fr: 'Le mur est devant : on tourne, ou on recule.', en: 'The wall is ahead: we turn, or we go backwards.' },
      { fr: 'Avancer, droite, avancer, gauche… encore, encore, encore !', en: 'Forward, right, forward, left… again, again, again!' },
      { fr: 'Il s’est trompé ? On cherche la carte qui ment.', en: 'Did it get it wrong? We look for the lying card.' },
    ],
    ask: [
      { fr: 'Quelle carte en premier pour éviter le mur ?', en: 'Which card first to avoid the wall?' },
      { fr: 'Combien de cartes en tout ? Plus ou moins de douze ?', en: 'How many cards in all? More or fewer than twelve?' },
      { fr: 'Reculer deux fois ou tourner deux fois : c’est plus court avec quoi ?', en: 'Back twice or turn twice: which is shorter?' },
      { fr: 'Dans l’escalier, qu’est-ce qui revient toujours pareil ?', en: 'In the staircase, what always comes back the same?' },
      { fr: 'Si je change ×3 en ×1, où s’arrête le panda ?', en: 'If I change ×3 to ×1, where does the panda stop?' },
    ],
    pitfalls: [
      { trap: { fr: 'Le panda tombe 😵 sur le mur ou le bord au milieu du programme : « Essaie encore ! ».', en: 'The panda crashes 😵 on the wall or the edge in the middle of the program: “Try again!”.' },
        fix: { fr: 'Ne videz pas tout : trouvez la carte qui mène au mur, touchez-la pour l’enlever, rejouez.', en: 'Do not clear everything: find the card that leads to the wall, tap it to remove it, replay.' } },
      { trap: { fr: 'Pour l’escalier, les enfants posent douze cartes au lieu de quatre avec ×3.', en: 'For the staircase, children place twelve cards instead of four with ×3.' },
        fix: { fr: 'Ça marche, mais 12/12 et une étoile. Demandez « qu’est-ce qui revient ? » et montrez 🔁 ×3.', en: 'It works, but 12/12 and one star. Ask “what comes back?” and show 🔁 ×3.' } },
      { trap: { fr: 'L’enfant oublie que ↰ remet le panda face en haut ; il ajoute un ↑ en trop.', en: 'The child forgets that ↰ puts the panda facing up again; they add an extra ↑.' },
        fix: { fr: 'Après chaque carte, le vérificateur dit où regarde la flèche rouge. La classe pivote avec le panda.', en: 'After each card, the checker says where the red arrow looks. The class pivots with the panda.' } },
      { trap: { fr: 'Le programme tourne longtemps (×3 = 12 pas), les PS décrochent.', en: 'The program runs for a long time (×3 = 12 steps), 3-year-olds drift.' },
        fix: { fr: 'Faites compter les pas tout haut, ou appuyez sur ⏹ Stop et reprenez : les cartes restent.', en: 'Have them count the steps out loud, or press ⏹ Stop and resume: the cards stay.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : « Le panda et le bonbon » en mode tap. Compter les pas ; puis monter l’escalier au tapis avec la classe.', en: '🌱 3-year-olds: “The panda and the sweet” in tap mode. Count the steps; then climb the staircase at the mat with the class.' },
      beg: { fr: '🌟 MS : « Le grand voyage en télécommande ». Une rotation puis avancer, en disant chaque carte. Puis reculer ↓ ↓ en télécommande.', en: '🌟 4-year-olds: “The big journey by remote”. One turn then forward, naming each card. Then reverse ↓ ↓ by remote.' },
      pro: { fr: '🏆 GS : programme complet du grand voyage (contourner le mur), marche arrière ↓ ↓, escalier avec 🔁 ×3, puis réparer le bug de « Le robot s’est trompé ».', en: '🏆 5-year-olds: full program of the big journey (around the wall), reverse ↓ ↓, staircase with 🔁 ×3, then fix the bug in “The robot got it wrong”.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant compte « un, deux, trois » en appuyant et s’arrête au bonbon.', en: 'I see the child count “one, two, three” while pressing and stop at the sweet.' },
      beg: { fr: 'Je vois que l’enfant dit « tourner à gauche » avant d’appuyer, puis avance jusqu’au cadeau.', en: 'I see the child say “turn left” before pressing, then move forward to the gift.' },
      pro: { fr: 'Je vois que l’enfant range quatre cartes, choisit ×3 et annonce « il monte l’escalier ».', en: 'I see the child line up four cards, choose ×3 and announce “it climbs the staircase”.' },
      warn: { fr: 'Un enfant empile des cartes au hasard et appuie sur Go sans regarder : revenez à la télécommande, une carte à la fois.', en: 'A child stacks cards at random and presses Go without looking: go back to the remote, one card at a time.' },
    },
    unplugged: {
      id: 'ch8-s5:d',
      bridge: { fr: 'Le chef d’orchestre au rituel : « taper, sauter » ×3. Puis à l’écran : « avancer, droite, avancer, gauche » ×3, c’est la même carte 🔁. Avec les GS, ajoutez la maîtresse-robot qui se trompe (ch5-s5:d) avant de réparer un bug.', en: 'The conductor at the ritual: “clap, jump” ×3. Then on screen: “forward, right, forward, left” ×3, it is the same 🔁 card. With 5-year-olds, add the teacher-robot getting it wrong (ch5-s5:d) before fixing a bug.' },
    },
    noSound: {
      fr: 'Sans son, la classe fait le bruit des pas : « bip » à chaque case, « clic » à chaque rotation. Le panda 😵, « Essaie encore ! » et les étoiles ⭐ se voient sans le son. Pour la victoire, la classe crie « Bravo ! ».',
      en: 'Without sound, the class makes the step noises: “beep” at each square, “click” at each turn. The panda 😵, “Try again!” and the stars ⭐ are visible without sound. For the win, the class shouts “Well done!”.',
    },
    vocab: [
      { word: { fr: 'Programme = « toutes les cartes rangées avant Go »', en: 'Program = “all the cards lined up before Go”' }, gesture: { fr: 'On avance la main par à-coups, un pas à la fois', en: 'Move your hand forward in little jumps' } },
      { word: { fr: 'Répéter ×3 = « encore, encore, encore »', en: 'Repeat ×3 = “again, again, again”' }, gesture: { fr: 'On tourne l’index en rond trois fois', en: 'Twirl your index finger three times' } },
      { word: { fr: 'Contourner = « faire le tour du mur »', en: 'Go around = “walk round the wall”' }, gesture: { fr: 'La main dessine un L dans l’air', en: 'The hand draws an L in the air' } },
      { word: { fr: 'Bug = « la carte qui ment »', en: 'Bug = “the lying card”' }, gesture: { fr: 'On met la loupe (rond avec les doigts) devant l’œil', en: 'Make a magnifying glass with your fingers' } },
    ],
    tips: {
      tot: { fr: 'Même tapis que la s1 mais avec un bonbon 🍬 : « c’est le même chemin ? » ; le bouton gris à l’arrivée = on change de pilote.', en: 'Same map as s1 but with a sweet 🍬: “is it the same path?”; grey button at the end = change pilot.' },
      c: { fr: 'Le mur au milieu pousse à longer le bord : quatre pas, tourner à gauche, quatre pas. Laissez le 🚫 apparaître si on fonce.', en: 'The wall in the middle pushes you along the edge: four steps, turn left, four steps. Let the 🚫 appear if they charge ahead.' },
      a: { fr: 'Rangez les 9 cartes au tableau avec les grandes cartes AVANT de toucher l’écran : le copilote les lit dans l’ordre.', en: 'Line up the 9 cards on the board with the big cards BEFORE touching the screen: the co-pilot reads them in order.' },
      r: { fr: 'Deux solutions : ↓ ↓ (3 étoiles) ou ↱ ↱ ↑ ↑ (2 étoiles) ; les étoiles font la comparaison à votre place.', en: 'Two solutions: ↓ ↓ (3 stars) or ↱ ↱ ↑ ↑ (2 stars); the stars make the comparison for you.' },
      b: { fr: 'Lancez d’abord avec ×1 : le panda monte une marche. Puis ×2, puis ×3 : la classe voit l’escalier se construire.', en: 'Run first with ×1: the panda climbs one step. Then ×2, then ×3: the class sees the staircase being built.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a programmé une vraie mission : avancer, tourner, reculer, et répéter ×3. Le panda a traversé tout le tapis, à l’écran et pour de vrai.',
      en: 'Today we programmed a real mission: forward, turn, back, and repeat ×3. The panda crossed the whole map, on screen and for real.',
    },
    parents: {
      fr: 'Mission accomplie ! Votre enfant a programmé le panda mTiny pour contourner un mur et monter un escalier en répétant trois fois. Demandez-lui : « avancer, droite, avancer, gauche… et après ? » Il vous répondra « encore, encore, encore ! ».',
      en: 'Mission accomplished! Your child programmed the mTiny panda to go around a wall and climb a staircase by repeating three times. Ask them: “forward, right, forward, left… and then?” They will answer “again, again, again!”.',
    },
  },
}
