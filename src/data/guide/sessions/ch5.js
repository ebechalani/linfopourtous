// Guide du professeur — chapitre 5 : Je code avec un algorithme
// Six séances : premiers pas (s0), étapes + boucle (s1), suites et ombres (s2),
// miroir (s3), mosaïque + chemin le plus court (s4), débogage (s5).
// Tout ce qui est décrit existe à l’écran (DogGrid, ArrowPick, PuzzleGame,
// MTinyRobot, TinyGame « tapwalk ») : ne rien promettre d’autre aux enfants.

export const CHAPTER = {
  thread: {
    fr: 'Un algorithme, c’est « d’abord… ensuite… et puis… » : des ordres dans le bon ordre. On les range, on appuie sur Go, on regarde. Quand ça rate, on ne pleure pas : on cherche le bug et on répare.',
    en: 'An algorithm is “first… then… and then…”: orders in the right order. We line them up, press Go, and watch. When it fails, no tears: we find the bug and fix it.',
  },
  concepts: ['sequence', 'loop', 'debug', 'pattern'],
  domains: [
    { fr: 'Explorer le monde · se repérer dans l’espace : coder un déplacement sur quadrillage avec des flèches.', en: 'Exploring the world · spatial orientation: code a move on a grid with arrows.' },
    { fr: 'Construire les premiers outils pour structurer sa pensée : suites organisées, algorithmes simples, rangement par taille.', en: 'Building first tools to structure thinking: organised patterns, simple algorithms, ordering by size.' },
    { fr: 'Mobiliser le langage : dire l’ordre avant d’agir, nommer « d’abord, ensuite, enfin ».', en: 'Using language: say the order before acting, name “first, then, finally”.' },
  ],
  rhythm: {
    fr: 'Six séances de 25–30 min, une par semaine, en période 3 ou 4. Cœur : s0, s1, s5 (séquence, boucle, bug). Bonus : s2, s3, s4, que l’on peut couper si le temps manque. Ne jamais sauter s5 : c’est là que les enfants apprennent à se tromper sans peur.',
    en: 'Six sessions of 25–30 min, one a week, in term 3 or 4. Core: s0, s1, s5 (sequence, loop, bug). Bonus: s2, s3, s4, which can be cut if time is short. Never skip s5: that is where children learn to fail without fear.',
  },
  materials: [
    { fr: 'Un quadrillage au sol de 4 × 4 cases (scotch de couleur ou tapis), à faire une fois pour tout le chapitre.', en: 'A 4 × 4 floor grid (coloured tape or a mat), made once for the whole chapter.' },
    { fr: 'Des cartes flèches A5 plastifiées aux mêmes dessins que l’écran : ⬆️ ⬇️ ⬅️ ➡️ (six de chaque).', en: 'Laminated A5 arrow cards with the same drawings as the screen: ⬆️ ⬇️ ⬅️ ➡️ (six of each).' },
    { fr: 'Une carte 🔁 avec le chiffre 3, une carte 🐛 « bug », une loupe en carton.', en: 'A 🔁 card with the number 3, a 🐛 “bug” card, a cardboard magnifying glass.' },
    { fr: 'Un os ou un drapeau en peluche comme cible au sol ; un tampon « pilote » pour le passage au tableau.', en: 'A plush bone or flag as a floor target; a “pilot” stamp for taking a turn at the board.' },
    { fr: 'Pour s5 : le robot mTiny et ses cartes de commande, si la classe en a un.', en: 'For s5: the mTiny robot and its command cards, if the class has one.' },
  ],
  ritual: {
    open: { fr: '« Robot, réveille-toi ! » : assis droit, bras pliés, « bip bip ». Puis les 5 règles du tableau (ch1-s1:rules), une carte chacune.', en: '“Robot, wake up!”: sit up straight, arms bent, “beep beep”. Then the 5 board rules (ch1-s1:rules), one card each.' },
    close: { fr: 'Le geste de la notion du jour, puis « Robot, va dormir ! » : tête baissée, bip qui s’éteint.', en: 'The gesture for today’s idea, then “Robot, go to sleep!”: heads down, fading beep.' },
  },
  unplugged: [
    { id: 'ch8-s1:a', when: { fr: 'Avant s0 : le robot et le maître, pour vivre « un ordre = un pas » avec le corps.', en: 'Before s0: the robot and the master, to feel “one order = one step” with the body.' } },
    { id: 'ch8-s1:b', when: { fr: 'Entre s0 et s1 : le parcours codé, les cartes flèches alignées avant de suivre le chemin.', en: 'Between s0 and s1: the coded path, arrow cards lined up before following the path.' } },
    { id: 'ch8-s5:d', when: { fr: 'Pendant s1, juste avant l’escalier : le chef d’orchestre lève la carte 🔁 3.', en: 'During s1, right before the staircase: the conductor raises the 🔁 3 card.' } },
    { id: 'ch8-s2:b', when: { fr: 'Avant s2 : continue la suite avec des cubes de deux couleurs.', en: 'Before s2: continue the pattern with two-colour blocks.' } },
    { id: 'ch8-s2:c', when: { fr: 'En ouverture de s3 : le jeu du miroir, deux enfants face à face.', en: 'To open s3: the mirror game, two children face to face.' } },
    { id: 'ch8-s4:a', when: { fr: 'Avant s4 : se ranger du plus petit au plus grand avec les cartes-nombres.', en: 'Before s4: line up from smallest to biggest with number cards.' } },
    { id: 'ch5-s5:d', when: { fr: 'Pendant s5, avant l’écran : la maîtresse-robot se trompe et la classe crie « bug ! ».', en: 'During s5, before the screen: the teacher-robot gets it wrong and the class shouts “bug!”.' } },
    { id: 'ch8-s5:a', when: { fr: 'Après s5 : le sandwich du robot, pour les grands qui veulent des ordres très précis.', en: 'After s5: the robot sandwich, for older ones who want very precise orders.' } },
  ],
  pitfalls: [
    { trap: { fr: 'Les enfants appuient sur les flèches en rafale sans rien dire, puis regardent le chien courir.', en: 'Children mash the arrows without a word, then watch the dog run.' },
      fix: { fr: 'Règle d’or dès s0 : le copilote dit la flèche, PUIS le pilote touche. Sinon on recommence.', en: 'Golden rule from s0: the co-pilot says the arrow, THEN the pilot taps. Otherwise start over.' } },
    { trap: { fr: 'Gauche et droite se mélangent, surtout quand le pilote est de côté par rapport au tableau.', en: 'Left and right get mixed up, especially when the pilot stands sideways to the board.' },
      fix: { fr: 'Le pilote se met face au tableau, bras tendu dans la direction, puis touche. Les flèches sont absolues : « droite » est toujours vers la fenêtre.', en: 'The pilot faces the board, arm stretched in the direction, then taps. Arrows are absolute: “right” always points to the window.' } },
    { trap: { fr: 'Au premier « Essaie encore ! », un enfant veut tout effacer avec Recommencer.', en: 'At the first “Try again!”, a child wants to wipe everything with Reset.' },
      fix: { fr: 'On garde le programme et on retire UNE flèche en la touchant. Recommencer, c’est seulement pour les bugs préparés.', en: 'Keep the program and remove ONE arrow by tapping it. Reset is only for the ready-made bugs.' } },
    { trap: { fr: 'La séance déborde : la boucle ×3 dure vingt secondes et la classe décroche.', en: 'The session overruns: the ×3 loop takes twenty seconds and the class drifts off.' },
      fix: { fr: 'Les ordinateurs 🤖 miment chaque pas avec le bras pendant l’exécution ; ⏹ Stop si ça s’égare.', en: 'The 🤖 computers mime each step with an arm during the run; ⏹ Stop if it wanders.' } },
  ],
  observables: [
    { fr: 'L’enfant dit la flèche avant de la toucher, sans qu’on le lui rappelle.', en: 'The child says the arrow before tapping it, without being reminded.' },
    { fr: 'Il range 3 à 7 flèches, appuie sur Go, et regarde le résultat sans toucher l’écran.', en: 'They line up 3 to 7 arrows, press Go, and watch the result without touching the screen.' },
    { fr: 'Il montre du doigt la case d’arrivée AVANT d’appuyer sur Go (GS).', en: 'They point at the arrival square BEFORE pressing Go (age 5).' },
    { fr: 'Il choisit ×3 au lieu de poser six flèches, et sait dire pourquoi.', en: 'They choose ×3 instead of laying six arrows, and can say why.' },
    { fr: 'Il continue une suite AB ou AAB à voix haute avant de toucher.', en: 'They continue an AB or AAB pattern aloud before tapping.' },
    { fr: 'Quand le chien rate, il dit « bug ! » en souriant et retire une seule flèche.', en: 'When the dog misses, they say “bug!” with a smile and remove a single arrow.' },
  ],
  celebration: {
    fr: 'Fête de fin de chapitre : chaque groupe programme un chemin de son choix au tableau, la classe prédit l’arrivée, puis Go. On affiche les programmes sur papier (cartes flèches collées) dans le couloir. On termine par la danse qui se répète ×3 et le geste « bug » avec la loupe.',
    en: 'End-of-chapter party: each group programs a path of its choice on the board, the class predicts the arrival, then Go. Display the paper programs (glued arrow cards) in the corridor. Finish with the ×3 repeating dance and the “bug” gesture with the magnifying glass.',
  },
  parents: {
    fr: 'Ce mois-ci, votre enfant a programmé un chien avec des flèches : d’abord, ensuite, et puis. Il a appris à répéter (la boucle) et à réparer une erreur (le bug) sans se décourager. À la maison, jouez au robot : donnez trois ordres, il les exécute dans l’ordre, puis échangez.',
    en: 'This month your child programmed a dog with arrows: first, then, and then. They learnt to repeat (the loop) and to fix a mistake (the bug) without giving up. At home, play robot: give three orders, they perform them in order, then swap.',
  },
}

export const SESSIONS = {
  // ───────────────────────────────────────────────────────────────────────────
  'ch5-s0': {
    concept: 'sequence',
    also: ['cause'],
    duration: 25,
    essential: {
      fr: 'Les enfants découvrent que chaque flèche fait faire UN pas au chien, puis qu’on peut ranger plusieurs flèches avant d’appuyer sur Go. On passe du « je touche, ça bouge » au « d’abord, ensuite, et puis ».',
      en: 'Children discover that each arrow makes the dog take ONE step, then that several arrows can be lined up before pressing Go. We move from “I tap, it moves” to “first, then, and then”.',
    },
    setup: [
      { fr: 'Testez 🔊 : le « Bravo ! » du chien doit s’entendre depuis le fond du tapis.', en: 'Test 🔊: the dog’s “Well done!” must be heard from the back of the mat.' },
      { fr: 'Ouvrez ch5-s0 et vérifiez les quatre activités : bouton 🐾 Avance, Quelle flèche ?, Promène le chien, Suis les empreintes.', en: 'Open ch5-s0 and check the four activities: 🐾 Walk button, Which arrow?, Walk the dog, Follow the footprints.' },
      { fr: 'Posez les quatre cartes flèches A5 au sol devant le tableau, dans le même ordre qu’à l’écran : ⬆️ ⬇️ ⬅️ ➡️.', en: 'Lay the four A5 arrow cards on the floor in front of the board, in the same order as on screen: ⬆️ ⬇️ ⬅️ ➡️.' },
      { fr: 'Préparez le quadrillage au sol avec l’os en peluche dans un coin, pour le pont débranché.', en: 'Prepare the floor grid with the plush bone in a corner, for the unplugged bridge.' },
      { fr: 'Enfants assis en arc de cercle face au tableau : personne de côté, sinon gauche et droite se mélangent.', en: 'Children seated in an arc facing the board: nobody sideways, or left and right get mixed up.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » puis les 5 règles du tableau, une carte chacune.', en: 'Ritual: “Robot, wake up!” then the 5 board rules, one card each.' } },
      { min: 4, what: { fr: 'Avance le chien : un enfant par toucher, la classe compte les pas jusqu’à l’os.', en: 'Walk the dog: one child per tap, the class counts the steps to the bone.' }, act: 'tot' },
      { min: 4, what: { fr: 'Quelle flèche ? : le pilote montre la direction avec le bras, puis touche la flèche.', en: 'Which arrow?: the pilot shows the direction with an arm, then taps the arrow.' }, act: 'a' },
      { min: 6, what: { fr: 'Promène le chien (mode direct) : le copilote dit la flèche, le pilote touche, le chien bouge tout de suite.', en: 'Walk the dog (direct mode): the co-pilot says the arrow, the pilot taps, the dog moves right away.' }, act: 'b' },
      { min: 5, what: { fr: 'Suis les empreintes : on range trois ➡️ sur les 🐾, on vérifie, puis ▶ Go.', en: 'Follow the footprints: line up three ➡️ on the 🐾, check, then ▶ Go.' }, act: 'c' },
      { min: 3, what: { fr: 'Clôture : geste « d’abord, ensuite, et puis » avec la main, puis « Robot, va dormir ! ».', en: 'Closing: “first, then, and then” gesture with the hand, then “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 : touche l’écran, un doigt. Copilote 🗣️ : dit la flèche AVANT le toucher. Ordinateurs 🤖 (tous les autres) : miment chaque pas du chien avec le bras. Vérificateur 👀 : lève la main si le chien n’arrive pas à l’os. On change de pilote à chaque activité.',
      en: 'Pilot 🎮: taps the screen, one finger. Co-pilot 🗣️: says the arrow BEFORE the tap. Computers 🤖 (everyone else): mime each dog step with an arm. Checker 👀: raises a hand if the dog does not reach the bone. Change pilot at every activity.',
    },
    say: [
      { fr: 'Dis la flèche avant de toucher.', en: 'Say the arrow before you tap.' },
      { fr: 'Une flèche, un pas. Regarde bien le chien.', en: 'One arrow, one step. Watch the dog closely.' },
      { fr: 'D’abord, ensuite, et puis : on range, puis on appuie sur Go.', en: 'First, then, and then: we line up, then we press Go.' },
      { fr: 'Le chien se trompe, pas toi : on répare.', en: 'The dog got it wrong, not you: we fix it.' },
      { fr: 'Les mains sur les genoux, c’est le pilote qui touche.', en: 'Hands on knees, the pilot is the one who taps.' },
    ],
    ask: [
      { fr: 'Où est l’os ? De quel côté ?', en: 'Where is the bone? Which side?' },
      { fr: 'Quelle flèche emmène le chien vers l’os ?', en: 'Which arrow takes the dog to the bone?' },
      { fr: 'Combien de pas jusqu’à l’os ? Combien de flèches alors ?', en: 'How many steps to the bone? So how many arrows?' },
      { fr: 'Que se passe-t-il si on appuie sur ⬆️ ici ?', en: 'What happens if we press ⬆️ here?' },
      { fr: 'Pourquoi le chien ne bouge pas avant Go ?', en: 'Why does the dog not move before Go?' },
    ],
    pitfalls: [
      { trap: { fr: 'Le pilote appuie sur plusieurs flèches à toute vitesse sans rien dire.', en: 'The pilot presses several arrows at full speed without a word.' },
        fix: { fr: 'Stoppez, remettez la main sur les genoux, et faites dire la flèche par le copilote d’abord.', en: 'Stop, put the hand back on the knees, and have the co-pilot say the arrow first.' } },
      { trap: { fr: 'Gauche et droite se confondent ; l’enfant touche ⬅️ en disant « droite ».', en: 'Left and right get confused; the child taps ⬅️ while saying “right”.' },
        fix: { fr: 'Bras tendu vers l’os, puis cherchez la flèche « qui regarde pareil ». Pas de mot, un geste.', en: 'Arm stretched towards the bone, then look for the arrow “that looks the same way”. No word, a gesture.' } },
      { trap: { fr: 'Le chien cogne le bord : bandeau rouge « On ne peut pas aller par là ! », rires, on recommence n’importe comment.', en: 'The dog bumps the edge: red banner “Can’t go that way!”, laughter, restart at random.' },
        fix: { fr: 'Nommez le mur invisible : « le tableau s’arrête ici ». Demandez la flèche qui ramène vers l’os.', en: 'Name the invisible wall: “the board stops here”. Ask for the arrow that leads back to the bone.' } },
      { trap: { fr: 'En mode programme, un enfant touche une flèche déjà rangée : elle disparaît, il pleure.', en: 'In program mode, a child taps an arrow already lined up: it vanishes, tears.' },
        fix: { fr: 'Dites-le avant : « toucher une flèche rangée, ça l’enlève ». C’est un outil, pas une punition.', en: 'Say it beforehand: “tapping a lined-up arrow removes it”. It is a tool, not a punishment.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : le bouton 🐾 Avance et le mode direct. Un toucher, un pas ; l’adulte dit la flèche, l’enfant la touche.', en: '🌱 Age 3: the 🐾 Walk button and direct mode. One tap, one step; the adult says the arrow, the child taps it.' },
      beg: { fr: '🌟 MS : Suis les empreintes avec deux ou trois ➡️. L’enfant dit chaque flèche avant de la ranger, puis Go.', en: '🌟 Age 4: Follow the footprints with two or three ➡️. The child says each arrow before lining it up, then Go.' },
      pro: { fr: '🏆 GS : Suis les empreintes sans regarder les 🐾, trois flèches d’un coup, arrivée annoncée avant Go. Trois étoiles si trois flèches.', en: '🏆 Age 5: Follow the footprints without looking at the 🐾, three arrows in one go, arrival announced before Go. Three stars for three arrows.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant touche une seule fois, regarde le chien, puis attend son tour.', en: 'I see the child tap once, watch the dog, then wait for their turn.' },
      beg: { fr: 'Je vois que l’enfant dit « droite » avant de toucher ➡️, et compte les 🐾.', en: 'I see the child say “right” before tapping ➡️, and count the 🐾.' },
      pro: { fr: 'Je vois que l’enfant range trois flèches sans hésiter et montre l’os avant Go.', en: 'I see the child line up three arrows without hesitating and point at the bone before Go.' },
      warn: { fr: 'Signe d’alerte : l’enfant regarde ses doigts et pas le chien ; reprenez en mode direct, un pas à la fois.', en: 'Warning sign: the child looks at their fingers, not the dog; go back to direct mode, one step at a time.' },
    },
    unplugged: {
      id: 'ch8-s1:a',
      bridge: { fr: 'Jouez d’abord le robot et le maître sur le quadrillage : un enfant montre une carte, l’autre fait un pas. Puis au tableau : « le chien est ton robot, la flèche est ta carte ».', en: 'First play the robot and the master on the floor grid: one child shows a card, the other takes a step. Then at the board: “the dog is your robot, the arrow is your card”.' },
    },
    noSound: {
      fr: 'Sans son, le « Bravo ! » ne s’entend pas : les 🤖 applaudissent quand le chien touche l’os, et le copilote lit le bandeau vert à voix haute.',
      en: 'Without sound, “Well done!” cannot be heard: the 🤖 clap when the dog reaches the bone, and the co-pilot reads the green banner aloud.',
    },
    vocab: [
      { word: { fr: 'Flèche (« la direction »)', en: 'Arrow (“the direction”)' }, gesture: { fr: 'Bras tendu, doigt pointé, comme la flèche.', en: 'Arm stretched, finger pointed, like the arrow.' } },
      { word: { fr: 'Un pas (« le chien bouge d’une case »)', en: 'One step (“the dog moves one square”)' }, gesture: { fr: 'La main saute d’un coup, une fois.', en: 'The hand hops once, in one jump.' } },
      { word: { fr: 'Programme (« d’abord, ensuite, et puis »)', en: 'Program (“first, then, and then”)' }, gesture: { fr: 'La main avance par à-coups, trois fois.', en: 'The hand moves forward in three little jumps.' } },
      { word: { fr: 'Go (« maintenant le chien obéit »)', en: 'Go (“now the dog obeys”)' }, gesture: { fr: 'Le pouce levé, puis on regarde l’écran.', en: 'Thumb up, then watch the screen.' } },
    ],
    tips: {
      tot: { fr: 'Comptez à voix haute avec la classe : « un, deux, trois, quatre, cinq… l’os ! », puis bouton Encore pour un nouveau pilote.', en: 'Count aloud with the class: “one, two, three, four, five… the bone!”, then Again for a new pilot.' },
      a: { fr: 'Quatre bonnes réponses donnent le trophée : quatre pilotes différents, un par étoile.', en: 'Four right answers earn the trophy: four different pilots, one per star.' },
      b: { fr: 'Après le Bravo les flèches se grisent : c’est Recommencer, en orange, qui relance pour le pilote suivant.', en: 'After Well done the arrows grey out: the orange Reset button restarts for the next pilot.' },
      c: { fr: 'Le compteur 3/10 en haut du programme aide à vérifier : « trois empreintes, trois flèches ? ».', en: 'The 3/10 counter above the program helps checking: “three footprints, three arrows?”.' },
    },
    closing: {
      fr: 'Aujourd’hui on a dit la flèche avant de toucher, et le chien a fait un pas à chaque flèche. Puis on a rangé trois flèches et appuyé sur Go : c’est un programme.',
      en: 'Today we said the arrow before tapping, and the dog took a step for each arrow. Then we lined up three arrows and pressed Go: that is a program.',
    },
    parents: {
      fr: 'Votre enfant a guidé un chien vers son os avec des flèches : une flèche, un pas. À la maison, jouez au « robot » : dites « avance, avance, tourne » et laissez-le exécuter dans l’ordre, puis échangez les rôles.',
      en: 'Your child guided a dog to its bone with arrows: one arrow, one step. At home, play “robot”: say “forward, forward, turn” and let them perform in order, then swap roles.',
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  'ch5-s1': {
    concept: 'sequence',
    also: ['loop', 'decomposition'],
    duration: 30,
    essential: {
      fr: 'Un algorithme, c’est des étapes dans le bon ordre : la fleur se dessine de la tige aux couleurs, le pingouin arrive au drapeau avec sept flèches. Puis on découvre la boucle : deux flèches et ×3, au lieu de six flèches.',
      en: 'An algorithm is steps in the right order: the flower is drawn from stem to colours, the penguin reaches the flag with seven arrows. Then we discover the loop: two arrows and ×3, instead of six arrows.',
    },
    setup: [
      { fr: 'Testez 🔊 : les cinq étapes de la fleur se lisent à voix haute quand on les touche.', en: 'Test 🔊: the five flower steps are read aloud when tapped.' },
      { fr: 'Ouvrez ch5-s1 : la fleur, le chemin du pingouin, le long couloir, l’escalier. Vérifiez que le bandeau 🔁 Répéter ×1 ×2 ×3 apparaît sur les deux derniers.', en: 'Open ch5-s1: the flower, the penguin’s path, the long corridor, the staircase. Check the 🔁 Repeat ×1 ×2 ×3 bar appears on the last two.' },
      { fr: 'Préparez la carte 🔁 3 et sept cartes flèches (trois ⬆️, quatre ➡️) pour reconstruire le chemin du pingouin au sol.', en: 'Prepare the 🔁 3 card and seven arrow cards (three ⬆️, four ➡️) to rebuild the penguin’s path on the floor.' },
      { fr: 'Dessinez la fleur en cinq étapes sur une affiche, dans le désordre, pour la remettre dans l’ordre avec les enfants.', en: 'Draw the flower in five steps on a poster, out of order, to reorder with the children.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » puis les règles du tableau en accéléré.', en: 'Ritual: “Robot, wake up!” then the board rules at speed.' } },
      { min: 5, what: { fr: 'Les 5 étapes de la fleur : toucher chaque étape, puis « et si on peint avant la tige ? ».', en: 'The 5 steps of the flower: tap each step, then “what if we paint before the stem?”.' }, act: 'a' },
      { min: 7, what: { fr: 'Le chemin du pingouin : trois ⬆️ et quatre ➡️. Le vérificateur montre le drapeau avant Go.', en: 'The penguin’s path: three ⬆️ and four ➡️. The checker points at the flag before Go.' }, act: 'b' },
      { min: 5, what: { fr: 'Le long couloir : ➡️➡️ puis ×3. Les 🤖 comptent « un, deux ; un, deux ; un, deux ».', en: 'The long corridor: ➡️➡️ then ×3. The 🤖 count “one, two; one, two; one, two”.' }, act: 'b2' },
      { min: 6, what: { fr: 'L’escalier : ➡️⬆️ puis ×3. Comparer avec six flèches posées : moins de flèches, plus d’étoiles.', en: 'The staircase: ➡️⬆️ then ×3. Compare with six arrows laid down: fewer arrows, more stars.' }, act: 'c' },
      { min: 4, what: { fr: 'Clôture : geste de la boucle (index qui tourne), « encore, encore, encore », puis « Robot, va dormir ! ».', en: 'Closing: loop gesture (twirling finger), “again, again, again”, then “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 range les flèches. Copilote 🗣️ dit chaque flèche avant le toucher. Ordinateurs 🤖 miment les pas pendant l’exécution et comptent les tours de boucle avec les doigts. Vérificateur 👀 pointe la case d’arrivée avant Go et dit « oui » ou « bug ».',
      en: 'Pilot 🎮 lines up the arrows. Co-pilot 🗣️ says each arrow before the tap. Computers 🤖 mime the steps during the run and count loop rounds on their fingers. Checker 👀 points at the arrival square before Go and says “yes” or “bug”.',
    },
    say: [
      { fr: 'D’abord la tige, ensuite les feuilles : l’ordre compte.', en: 'First the stem, then the leaves: the order matters.' },
      { fr: 'Dis la flèche avant de toucher.', en: 'Say the arrow before you tap.' },
      { fr: 'Où va-t-il arriver ? Montre la case avant Go.', en: 'Where will it arrive? Point at the square before Go.' },
      { fr: 'Deux flèches et ×3 : le chien refait la même chose trois fois.', en: 'Two arrows and ×3: the dog does the same thing three times.' },
      { fr: 'Moins de flèches, plus d’étoiles !', en: 'Fewer arrows, more stars!' },
    ],
    ask: [
      { fr: 'Que se passe-t-il si on colorie avant de dessiner la tige ?', en: 'What happens if we colour before drawing the stem?' },
      { fr: 'Combien de flèches pour arriver au drapeau ?', en: 'How many arrows to reach the flag?' },
      { fr: 'Est-ce qu’on peut monter d’abord, puis aller à droite ? Ça change quoi ?', en: 'Can we go up first, then right? What does it change?' },
      { fr: 'Ça revient toujours pareil : quelle est la petite suite qui se répète ?', en: 'It always comes back the same: what is the little pattern that repeats?' },
      { fr: 'Six flèches ou deux flèches ×3 : c’est plus court comment ?', en: 'Six arrows or two arrows ×3: which is shorter?' },
    ],
    pitfalls: [
      { trap: { fr: 'Le pilote range ➡️➡️ pour le couloir, appuie sur Go, le lapin s’arrête au milieu : « ça marche pas ».', en: 'The pilot lines up ➡️➡️ for the corridor, presses Go, the rabbit stops halfway: “it doesn’t work”.' },
        fix: { fr: 'Il a oublié de choisir ×3. Montrez le bandeau 🔁 : « combien de fois on refait ? ».', en: 'They forgot to choose ×3. Point at the 🔁 bar: “how many times do we do it again?”.' } },
      { trap: { fr: 'Pour l’escalier, l’enfant pose six flèches : ça marche, mais une seule étoile.', en: 'For the staircase, the child lays six arrows: it works, but only one star.' },
        fix: { fr: 'Félicitez, puis défi : « le même chemin avec deux flèches seulement ». La boucle devient utile, pas imposée.', en: 'Congratulate, then challenge: “the same path with only two arrows”. The loop becomes useful, not imposed.' } },
      { trap: { fr: 'Sept flèches pour le pingouin, le pilote perd le compte et en met huit ou neuf.', en: 'Seven arrows for the penguin, the pilot loses count and puts eight or nine.' },
        fix: { fr: 'Les 🤖 comptent à voix haute, le compteur x/10 confirme. Retirer les flèches en trop en les touchant.', en: 'The 🤖 count aloud, the x/10 counter confirms. Remove extra arrows by tapping them.' } },
      { trap: { fr: 'La boucle ×3 dure vingt secondes : la classe s’agite.', en: 'The ×3 loop lasts twenty seconds: the class gets restless.' },
        fix: { fr: 'Donnez un rôle : les 🤖 miment chaque pas avec le bras. ⏹ Stop si vraiment ça part.', en: 'Give a role: the 🤖 mime each step with an arm. ⏹ Stop if it really falls apart.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : la fleur seulement, en touchant les étapes une par une ; puis le couloir avec l’adulte qui pose ➡️➡️ et l’enfant qui choisit ×3.', en: '🌱 Age 3: the flower only, tapping the steps one by one; then the corridor with the adult laying ➡️➡️ and the child choosing ×3.' },
      beg: { fr: '🌟 MS : le couloir seul (➡️➡️ ×3), puis l’escalier avec aide. Dire la flèche avant de toucher, compter les tours avec les doigts.', en: '🌟 Age 4: the corridor alone (➡️➡️ ×3), then the staircase with help. Say the arrow before tapping, count rounds on fingers.' },
      pro: { fr: '🏆 GS : le pingouin en sept flèches, arrivée prédite avant Go ; l’escalier avec ➡️⬆️ ×3 pour trois étoiles. Défi : ⬆️➡️ ×3 marche aussi ?', en: '🏆 Age 5: the penguin in seven arrows, arrival predicted before Go; the staircase with ➡️⬆️ ×3 for three stars. Challenge: does ⬆️➡️ ×3 work too?' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant touche les étapes de la fleur dans l’ordre et dit « après ».', en: 'I see the child tap the flower steps in order and say “after”.' },
      beg: { fr: 'Je vois que l’enfant choisit ×3 tout seul quand le lapin s’arrête au milieu.', en: 'I see the child choose ×3 on their own when the rabbit stops halfway.' },
      pro: { fr: 'Je vois que l’enfant montre le drapeau avant Go et explique « deux flèches trois fois, ça fait six ».', en: 'I see the child point at the flag before Go and explain “two arrows three times makes six”.' },
      warn: { fr: 'Signe d’alerte : l’enfant range les flèches au hasard et regarde seulement les étoiles ; revenez au couloir.', en: 'Warning sign: the child lines up arrows at random and only looks at the stars; go back to the corridor.' },
    },
    unplugged: {
      id: 'ch8-s5:d',
      bridge: { fr: 'Avant l’escalier, jouez le chef d’orchestre : taper, sauter, carte 🔁 3, la classe fait le motif trois fois. Puis au tableau : « ➡️⬆️, c’est taper-sauter ; ×3, c’est la carte ».', en: 'Before the staircase, play the conductor: clap, jump, 🔁 3 card, the class does the pattern three times. Then at the board: “➡️⬆️ is clap-jump; ×3 is the card”.' },
    },
    noSound: {
      fr: 'Sans son, les étapes de la fleur ne parlent pas : lisez-les vous-même, et faites répéter « tige, feuilles, cœur, pétales, couleurs » avec les doigts.',
      en: 'Without sound, the flower steps do not speak: read them yourself, and have children repeat “stem, leaves, centre, petals, colours” on their fingers.',
    },
    vocab: [
      { word: { fr: 'Étape (« d’abord, ensuite, enfin »)', en: 'Step (“first, then, finally”)' }, gesture: { fr: 'On compte sur les doigts, un doigt par étape.', en: 'Count on fingers, one finger per step.' } },
      { word: { fr: 'Ordre (« ça compte, qui est avant »)', en: 'Order (“it matters, which comes first”)' }, gesture: { fr: 'Les deux mains alignent des cartes invisibles, de gauche à droite.', en: 'Both hands line up invisible cards, left to right.' } },
      { word: { fr: 'Boucle, répéter (« encore, encore, encore »)', en: 'Loop, repeat (“again, again, again”)' }, gesture: { fr: 'L’index tourne en rond trois fois.', en: 'The index finger twirls three times.' } },
      { word: { fr: 'Prédire (« deviner avant Go »)', en: 'Predict (“guess before Go”)' }, gesture: { fr: 'La main en visière, on montre la case d’arrivée.', en: 'Hand shading the eyes, point at the arrival square.' } },
    ],
    tips: {
      a: { fr: 'Après avoir tout écouté, cachez une étape avec la main : « laquelle manque ? il se passe quoi sans elle ? ».', en: 'After listening to all of them, hide a step with your hand: “which one is missing? what happens without it?”.' },
      b: { fr: 'Deux ordres marchent (monter puis droite, ou droite puis monter) : faites tester les deux, sept flèches chaque fois.', en: 'Two orders work (up then right, or right then up): have both tested, seven arrows each time.' },
      b2: { fr: 'Faites d’abord Go avec ×1 exprès : le lapin s’arrête, on voit que ×3 sert à quelque chose.', en: 'First press Go with ×1 on purpose: the rabbit stops, showing what ×3 is for.' },
      c: { fr: 'Le bandeau vert affiche « 2 flèches × 3 » : lisez-le à la classe, c’est la définition de la boucle.', en: 'The green banner shows “2 arrows × 3”: read it to the class, it is the definition of the loop.' },
    },
    closing: {
      fr: 'Aujourd’hui on a vu que l’ordre des étapes compte, pour la fleur comme pour le pingouin. Et on a trouvé un raccourci : deux flèches ×3, c’est une boucle.',
      en: 'Today we saw that the order of steps matters, for the flower and for the penguin. And we found a shortcut: two arrows ×3, that is a loop.',
    },
    parents: {
      fr: 'Votre enfant a découvert la boucle : au lieu de dire six ordres, on dit « deux ordres, trois fois ». À la maison, inventez une petite danse « taper, sauter » et demandez « on la refait combien de fois ? ».',
      en: 'Your child discovered the loop: instead of six orders, we say “two orders, three times”. At home, invent a little “clap, jump” dance and ask “how many times do we do it again?”.',
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  'ch5-s2': {
    concept: 'pattern',
    also: ['sequence', 'abstraction'],
    duration: 25,
    essential: {
      fr: 'Les enfants repèrent ce qui revient toujours pareil dans une suite et devinent ce qui manque : pomme, banane, pomme… Puis ils associent chaque image à son ombre. Reconnaître un motif, c’est déjà lire un algorithme.',
      en: 'Children spot what always comes back the same in a pattern and guess what is missing: apple, banana, apple… Then they match each picture to its shadow. Recognising a pattern is already reading an algorithm.',
    },
    setup: [
      { fr: 'Testez 🔊 : le « Bravo ! » doit s’entendre, il rythme le passage au pilote suivant.', en: 'Test 🔊: “Well done!” must be heard, it marks the change of pilot.' },
      { fr: 'Ouvrez ch5-s2 : Pomme, banane (AB), Complète la liste (AAB), La suite difficile (ABC, ABB), Bébé puzzle (ombres).', en: 'Open ch5-s2: Apple, banana (AB), Complete the list (AAB), The tricky pattern (ABC, ABB), Baby puzzle (shadows).' },
      { fr: 'Préparez des cubes ou jetons de deux puis trois couleurs pour rejouer les suites au sol.', en: 'Prepare blocks or counters in two then three colours to replay the patterns on the floor.' },
      { fr: 'Choisissez un rythme corporel : genoux, mains, genoux, mains, pour dire la suite avec le corps.', en: 'Choose a body rhythm: knees, hands, knees, hands, to say the pattern with the body.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », règles du tableau, et le rythme genoux-mains pour se mettre en jambes.', en: 'Ritual: “Robot, wake up!”, board rules, and the knees-hands rhythm to warm up.' } },
      { min: 4, what: { fr: 'Pomme, banane, pomme : toute la classe lit la suite à voix haute, le pilote touche le fruit qui manque.', en: 'Apple, banana, apple: the whole class reads the pattern aloud, the pilot taps the missing fruit.' }, act: 'tot' },
      { min: 5, what: { fr: 'Complète la liste : fraise, fraise, raisin. On tape le rythme « court, court, long » avant de choisir.', en: 'Complete the list: strawberry, strawberry, grape. Tap the rhythm “short, short, long” before choosing.' }, act: 'a' },
      { min: 5, what: { fr: 'La suite difficile : trois couleurs. Le copilote dit la suite entière, puis le pilote touche.', en: 'The tricky pattern: three colours. The co-pilot says the whole pattern, then the pilot taps.' }, act: 'a2' },
      { min: 5, what: { fr: 'Bébé puzzle : toucher une image, puis son ombre. Quatre animaux, quatre pilotes.', en: 'Baby puzzle: tap a picture, then its shadow. Four animals, four pilots.' }, act: 'b' },
      { min: 3, what: { fr: 'Clôture : geste « ça revient toujours pareil », puis « Robot, va dormir ! ».', en: 'Closing: “it always comes back the same” gesture, then “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 touche le fruit ou l’ombre. Copilote 🗣️ lit la suite entière à voix haute avant le toucher. Ordinateurs 🤖 tapent le rythme de la suite sur les genoux. Vérificateur 👀 dit « pareil » ou « pas pareil » quand la suite est complète.',
      en: 'Pilot 🎮 taps the fruit or the shadow. Co-pilot 🗣️ reads the whole pattern aloud before the tap. Computers 🤖 tap the pattern’s rhythm on their knees. Checker 👀 says “same” or “not the same” when the pattern is complete.',
    },
    say: [
      { fr: 'Lis la suite avec moi : pomme, banane, pomme, banane…', en: 'Read the pattern with me: apple, banana, apple, banana…' },
      { fr: 'Ça revient toujours pareil. Qu’est-ce qui vient après ?', en: 'It always comes back the same. What comes next?' },
      { fr: 'Dis la réponse tout bas au copilote, puis touche.', en: 'Whisper the answer to the co-pilot, then tap.' },
      { fr: 'D’abord l’image, ensuite son ombre.', en: 'First the picture, then its shadow.' },
      { fr: 'Rouge, c’est pas grave : on regarde la suite encore une fois.', en: 'Red is fine: we look at the pattern once more.' },
    ],
    ask: [
      { fr: 'Qu’est-ce qui manque dans la case avec le point d’interrogation ?', en: 'What is missing in the box with the question mark?' },
      { fr: 'Combien de fraises avant le raisin ? Et après ?', en: 'How many strawberries before the grape? And after?' },
      { fr: 'Le petit morceau qui se répète, il est long comment ?', en: 'The little piece that repeats, how long is it?' },
      { fr: 'Comment tu sais que cette ombre est celle du chien ?', en: 'How do you know this shadow is the dog’s?' },
      { fr: 'Est-ce qu’on pourrait continuer la suite encore plus loin ?', en: 'Could we continue the pattern even further?' },
    ],
    pitfalls: [
      { trap: { fr: 'L’enfant touche le premier fruit qu’il voit sans lire la suite.', en: 'The child taps the first fruit they see without reading the pattern.' },
        fix: { fr: 'Le copilote lit d’abord, toute la classe répète en rythme, puis seulement le pilote touche.', en: 'The co-pilot reads first, the whole class repeats in rhythm, then only does the pilot tap.' } },
      { trap: { fr: 'Avec AAB, l’enfant répond « raisin » trop tôt, par habitude du AB.', en: 'With AAB, the child answers “grape” too early, out of AB habit.' },
        fix: { fr: 'Tapez le rythme sur les genoux : court, court, long. Le corps entend le motif avant les yeux.', en: 'Tap the rhythm on the knees: short, short, long. The body hears the pattern before the eyes.' } },
      { trap: { fr: 'Aux ombres, l’enfant touche l’ombre en premier : le haut clignote, rien ne se place.', en: 'With shadows, the child taps the shadow first: the top flashes, nothing gets placed.' },
        fix: { fr: 'C’est le jeu qui montre où toucher : « d’abord l’image en haut, ensuite l’ombre ». Deux gestes, dans l’ordre.', en: 'The game shows where to tap: “first the picture at the top, then the shadow”. Two gestures, in order.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : Pomme, banane seulement (AB), l’adulte lit la suite et l’enfant touche le fruit. Puis une ombre avec aide.', en: '🌱 Age 3: Apple, banana only (AB), the adult reads the pattern and the child taps the fruit. Then one shadow with help.' },
      beg: { fr: '🌟 MS : Complète la liste (AAB) en disant la suite avant de toucher, puis les quatre ombres seul.', en: '🌟 Age 4: Complete the list (AAB) saying the pattern before tapping, then the four shadows alone.' },
      pro: { fr: '🏆 GS : La suite difficile (trois couleurs, ABB) sans lecture de l’adulte ; l’enfant invente ensuite sa propre suite avec les cubes.', en: '🏆 Age 5: The tricky pattern (three colours, ABB) without adult reading; the child then invents their own pattern with blocks.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant dit « pomme » avant de toucher la pomme.', en: 'I see the child say “apple” before tapping the apple.' },
      beg: { fr: 'Je vois que l’enfant tape court-court-long sur ses genoux et trouve le raisin.', en: 'I see the child tap short-short-long on their knees and find the grape.' },
      pro: { fr: 'Je vois que l’enfant nomme le morceau qui se répète : « rouge, bleu, vert ».', en: 'I see the child name the repeating piece: “red, blue, green”.' },
      warn: { fr: 'Signe d’alerte : l’enfant essaie tous les fruits jusqu’au vert ; revenez à AB avec des cubes au sol.', en: 'Warning sign: the child tries every fruit until it goes green; go back to AB with blocks on the floor.' },
    },
    unplugged: {
      id: 'ch8-s2:b',
      bridge: { fr: 'Avant l’écran, posez rouge, bleu, rouge, bleu en cubes au sol et demandez « qu’est-ce qui vient après ? ». Au tableau, la case ❓ est le cube qui manque.', en: 'Before the screen, lay red, blue, red, blue blocks on the floor and ask “what comes next?”. On the board, the ❓ box is the missing block.' },
    },
    noSound: {
      fr: 'Sans son, faites de la classe le haut-parleur : quand le bandeau « Bravo ! » apparaît, tout le monde tape le rythme de la suite une dernière fois.',
      en: 'Without sound, make the class the speaker: when the “Well done!” banner appears, everyone taps the pattern’s rhythm one last time.',
    },
    vocab: [
      { word: { fr: 'Suite (« l’un après l’autre »)', en: 'Pattern (“one after the other”)' }, gesture: { fr: 'La main pose des cubes invisibles en ligne.', en: 'The hand places invisible blocks in a line.' } },
      { word: { fr: 'Motif (« ça revient toujours pareil »)', en: 'Motif (“it always comes back the same”)' }, gesture: { fr: 'Genoux, mains, genoux, mains.', en: 'Knees, hands, knees, hands.' } },
      { word: { fr: 'Ombre (« la forme sans les couleurs »)', en: 'Shadow (“the shape without the colours”)' }, gesture: { fr: 'On ferme à moitié les yeux pour voir la forme.', en: 'Half-close the eyes to see the shape.' } },
    ],
    tips: {
      tot: { fr: 'Le bouton Rejouer change toujours de motif : trois suites AB, donc trois pilotes sans surprise.', en: 'The Play again button always changes the motif: three AB patterns, so three pilots with no surprises.' },
      a: { fr: 'La réponse est toujours le dernier de la ligne : faites lire jusqu’au ❓ sans sauter.', en: 'The answer is always the last one in the line: have them read up to the ❓ without skipping.' },
      a2: { fr: 'Le mauvais choix clignote en rouge une demi-seconde puis disparaît : « on relit, on retente ».', en: 'A wrong choice flashes red for half a second then vanishes: “we read again, we try again”.' },
      b: { fr: 'Une ombre placée devient verte : demandez « combien en reste-t-il ? » avant chaque nouveau pilote.', en: 'A placed shadow turns green: ask “how many are left?” before each new pilot.' },
    },
    closing: {
      fr: 'Aujourd’hui on a lu des suites où ça revient toujours pareil, et on a deviné ce qui manque. On a aussi retrouvé chaque animal dans son ombre.',
      en: 'Today we read patterns where it always comes back the same, and guessed what is missing. We also found each animal in its shadow.',
    },
    parents: {
      fr: 'Votre enfant a complété des suites : pomme, banane, pomme… À table, alignez des objets en motif (cuillère, fourchette, cuillère) et demandez « qu’est-ce qui vient après ? ».',
      en: 'Your child completed patterns: apple, banana, apple… At the table, line up objects in a pattern (spoon, fork, spoon) and ask “what comes next?”.',
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  'ch5-s3': {
    concept: 'abstraction',
    also: ['pattern', 'orientation'],
    duration: 25,
    essential: {
      fr: 'Les enfants colorient le côté droit d’une grille comme dans un miroir : ce qui est tout à gauche va tout à droite. Un dessin de cases, c’est une image qui veut dire quelque chose ; il faut la lire, pas la recopier.',
      en: 'Children colour the right side of a grid like a mirror: what is far left goes far right. A grid picture is an image that means something; it has to be read, not copied.',
    },
    setup: [
      { fr: 'Testez 🔊 : le « Bravo ! » arrive quand le côté droit est exactement le miroir du gauche.', en: 'Test 🔊: “Well done!” comes when the right side is exactly the mirror of the left.' },
      { fr: 'Ouvrez ch5-s3 : Petit miroir 3×3, Dessine en miroir 4×4, Grand miroir 5×5, Tangram (images et ombres).', en: 'Open ch5-s3: Small mirror 3×3, Mirror the drawing 4×4, Big mirror 5×5, Tangram (pictures and shadows).' },
      { fr: 'Apportez un vrai miroir de poche et une grille 3×3 dessinée sur une feuille, avec des jetons.', en: 'Bring a real pocket mirror and a 3×3 grid drawn on paper, with counters.' },
      { fr: 'Collez une gommette au bord gauche et une au bord droit du tableau : « les bords se regardent ».', en: 'Stick a dot on the left edge and one on the right edge of the board: “the edges look at each other”.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 3, what: { fr: 'Jeu du miroir corporel : deux enfants face à face, l’un lève un bras, l’autre fait pareil en miroir.', en: 'Body mirror game: two children face to face, one raises an arm, the other does the same, mirrored.' } },
      { min: 5, what: { fr: 'Petit miroir 3×3 : la case du bord gauche va au bord droit, la case du milieu reste au milieu.', en: 'Small mirror 3×3: the left-edge square goes to the right edge, the middle square stays in the middle.' }, act: 'a0' },
      { min: 5, what: { fr: 'Dessine en miroir 4×4 : le copilote lit la ligne du haut, le pilote colorie ligne par ligne.', en: 'Mirror the drawing 4×4: the co-pilot reads the top row, the pilot colours row by row.' }, act: 'a' },
      { min: 4, what: { fr: 'Grand miroir 5×5 : défi des grands, la classe vérifie ligne par ligne avec le doigt.', en: 'Big mirror 5×5: the older ones’ challenge, the class checks row by row with a finger.' }, act: 'a2' },
      { min: 3, what: { fr: 'Tangram : toucher une image, puis son ombre, pour se reposer les yeux.', en: 'Tangram: tap a picture, then its shadow, to rest the eyes.' }, act: 'b' },
      { min: 2, what: { fr: 'Clôture : on dessine un carré dans l’air, puis « Robot, va dormir ! ».', en: 'Closing: draw a square in the air, then “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 colorie les cases de droite. Copilote 🗣️ lit la ligne de gauche à voix haute : « plein, vide, plein ». Ordinateurs 🤖 lèvent le bras du côté où va la case. Vérificateur 👀 compare les deux côtés ligne par ligne et dit « miroir » ou « bug ».',
      en: 'Pilot 🎮 colours the right-hand squares. Co-pilot 🗣️ reads the left row aloud: “full, empty, full”. Computers 🤖 raise the arm on the side where the square goes. Checker 👀 compares both sides row by row and says “mirror” or “bug”.',
    },
    say: [
      { fr: 'Le miroir retourne : ce qui est au bord va au bord.', en: 'The mirror flips: what is at the edge goes to the edge.' },
      { fr: 'Lis la ligne : plein, vide, plein. Maintenant à l’envers.', en: 'Read the row: full, empty, full. Now backwards.' },
      { fr: 'Une ligne à la fois, on ne saute pas.', en: 'One row at a time, no skipping.' },
      { fr: 'Touche encore la case pour l’éteindre.', en: 'Tap the square again to switch it off.' },
      { fr: 'Le milieu reste au milieu.', en: 'The middle stays in the middle.' },
    ],
    ask: [
      { fr: 'Cette case est tout à gauche : où va-t-elle dans le miroir ?', en: 'This square is far left: where does it go in the mirror?' },
      { fr: 'Combien de cases pleines à gauche ? Combien il en faut à droite ?', en: 'How many full squares on the left? How many do we need on the right?' },
      { fr: 'Pourquoi le Bravo n’apparaît pas ? Quelle ligne n’est pas pareille ?', en: 'Why does Well done not appear? Which row is not the same?' },
      { fr: 'Si je lève le bras droit, ton miroir lève lequel ?', en: 'If I raise my right arm, which one does your mirror raise?' },
    ],
    pitfalls: [
      { trap: { fr: 'L’enfant recopie la grille de gauche telle quelle, sans inverser : la case du bord reste du même côté.', en: 'The child copies the left grid as is, without flipping: the edge square stays on the same side.' },
        fix: { fr: 'Posez le vrai miroir contre la grille papier : on voit la case « sauter » de l’autre côté.', en: 'Hold the real mirror against the paper grid: we see the square “jump” to the other side.' } },
      { trap: { fr: 'Le pilote touche deux fois la même case : elle s’allume puis s’éteint, il ne comprend pas.', en: 'The pilot taps the same square twice: it lights up then switches off, confusion.' },
        fix: { fr: 'Dites-le avant : « un toucher allume, un autre éteint ». Utile pour réparer une case de trop.', en: 'Say it beforehand: “one tap switches on, another switches off”. Useful to fix an extra square.' } },
      { trap: { fr: 'En 5×5, l’enfant se perd et colorie au hasard pour faire apparaître le Bravo.', en: 'In 5×5, the child gets lost and colours at random hoping for Well done.' },
        fix: { fr: 'Le copilote cache les autres lignes avec une feuille ; on avance ligne par ligne.', en: 'The co-pilot hides the other rows with a sheet; move on row by row.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : le jeu du miroir corporel, puis Petit miroir 3×3 avec l’adulte qui lit et montre la case à toucher.', en: '🌱 Age 3: the body mirror game, then Small mirror 3×3 with the adult reading and pointing at the square to tap.' },
      beg: { fr: '🌟 MS : Petit miroir 3×3 seul, puis 4×4 avec le copilote qui lit chaque ligne à l’envers.', en: '🌟 Age 4: Small mirror 3×3 alone, then 4×4 with the co-pilot reading each row backwards.' },
      pro: { fr: '🏆 GS : Grand miroir 5×5, en annonçant le nombre de cases à colorier avant de commencer, puis en vérifiant seul sans Bravo.', en: '🏆 Age 5: Big mirror 5×5, announcing the number of squares to colour before starting, then checking alone before Well done.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant touche la case que l’adulte montre et regarde si elle devient violette.', en: 'I see the child tap the square the adult points at and watch it turn purple.' },
      beg: { fr: 'Je vois que l’enfant met la case du bord gauche au bord droit sans qu’on le lui dise.', en: 'I see the child put the left-edge square on the right edge without being told.' },
      pro: { fr: 'Je vois que l’enfant compte les cases pleines et corrige une ligne avant le Bravo.', en: 'I see the child count the full squares and fix a row before Well done.' },
      warn: { fr: 'Signe d’alerte : la grille de droite ressemble à celle de gauche, sans inversion ; retour au miroir de poche.', en: 'Warning sign: the right grid looks like the left one, not flipped; back to the pocket mirror.' },
    },
    unplugged: {
      id: 'ch8-s2:c',
      bridge: { fr: 'Ouvrez avec le jeu du miroir : un enfant lève le bras gauche, son miroir lève le bras qui est en face. Puis au tableau : « la grille de droite, c’est ton copain-miroir ».', en: 'Open with the mirror game: a child raises the left arm, their mirror raises the arm that faces it. Then at the board: “the right grid is your mirror friend”.' },
    },
    noSound: {
      fr: 'Sans son, le bandeau « Bravo ! » suffit : le vérificateur le guette et lève les deux bras en miroir quand il apparaît.',
      en: 'Without sound, the “Well done!” banner is enough: the checker watches for it and raises both arms in a mirror when it appears.',
    },
    vocab: [
      { word: { fr: 'Miroir (« pareil, mais retourné »)', en: 'Mirror (“the same, but flipped”)' }, gesture: { fr: 'Les deux mains se font face, paume contre paume.', en: 'Both hands face each other, palm to palm.' } },
      { word: { fr: 'Case (« une petite fenêtre de la grille »)', en: 'Square (“a little window in the grid”)' }, gesture: { fr: 'On dessine un carré dans l’air.', en: 'Draw a square in the air.' } },
      { word: { fr: 'Ligne (« de gauche à droite, une rangée »)', en: 'Row (“left to right, one line”)' }, gesture: { fr: 'Le doigt glisse à plat, de gauche à droite.', en: 'The finger slides flat, left to right.' } },
    ],
    tips: {
      a0: { fr: 'En 3×3, la colonne du milieu reste à sa place : commencez par elle, c’est la plus rassurante.', en: 'In 3×3, the middle column stays put: start with it, it is the most reassuring.' },
      a: { fr: 'Le tirage a toujours au moins trois cases pleines : faites-les compter avant le premier toucher.', en: 'The draw always has at least three full squares: have them counted before the first tap.' },
      a2: { fr: 'Les cases 5×5 sont plus petites : le pilote se met bien en face et touche avec la pointe du doigt.', en: 'The 5×5 squares are smaller: the pilot stands right in front and taps with the fingertip.' },
      b: { fr: 'Ce « tangram » est le jeu des images et des ombres : image d’abord, ombre ensuite, quatre animaux.', en: 'This “tangram” is the pictures-and-shadows game: picture first, shadow next, four animals.' },
    },
    closing: {
      fr: 'Aujourd’hui on a colorié en miroir : pareil, mais retourné. Le bord va au bord, le milieu reste au milieu, et on lit ligne par ligne.',
      en: 'Today we coloured in a mirror: the same, but flipped. The edge goes to the edge, the middle stays in the middle, and we read row by row.',
    },
    parents: {
      fr: 'Votre enfant a complété des dessins en miroir sur une grille. À la maison, jouez au miroir devant lui : il doit refaire vos gestes retournés, bras gauche contre bras droit.',
      en: 'Your child completed mirror drawings on a grid. At home, play mirror in front of them: they must copy your gestures flipped, left arm against right arm.',
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  'ch5-s4': {
    concept: 'pattern',
    also: ['sequence', 'decomposition'],
    duration: 25,
    essential: {
      fr: 'Les enfants touchent les étoiles du plus petit au plus grand, puis cherchent pour le renard le chemin avec le moins de flèches. Deux chemins arrivent à la poule : le bon programme, c’est le plus court.',
      en: 'Children tap the stars from smallest to biggest, then look for the fox’s path with the fewest arrows. Two paths reach the hen: the good program is the shortest.',
    },
    setup: [
      { fr: 'Testez 🔊 : le « Bravo ! » du renard doit s’entendre, il marque la fin de chaque essai.', en: 'Test 🔊: the fox’s “Well done!” must be heard, it marks the end of each try.' },
      { fr: 'Ouvrez ch5-s4 : Reconstruis la mosaïque (cinq étoiles à ranger) et Le chemin le plus court (renard, poule, deux murs 🧱).', en: 'Open ch5-s4: Rebuild the mosaic (five stars to order) and The shortest path (fox, hen, two 🧱 walls).' },
      { fr: 'Préparez cinq objets de tailles différentes (cuillères, cubes) pour ranger du plus petit au plus grand au sol.', en: 'Prepare five objects of different sizes (spoons, blocks) to order from smallest to biggest on the floor.' },
      { fr: 'Reproduisez la grille du renard au sol : cinq colonnes, quatre lignes, deux cartons « mur ». Renard en bas à gauche, poule en haut à droite.', en: 'Reproduce the fox grid on the floor: five columns, four rows, two “wall” boxes. Fox bottom left, hen top right.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 5, what: { fr: 'Reconstruis la mosaïque : toucher les étoiles de la plus petite à la plus grande. La classe dit « plus grande ! » à chaque fois.', en: 'Rebuild the mosaic: tap the stars from smallest to biggest. The class says “bigger!” each time.' }, act: 'a' },
      { min: 7, what: { fr: 'Le chemin le plus court, premier essai : n’importe quel chemin qui arrive à la poule. On compte les flèches.', en: 'The shortest path, first try: any path that reaches the hen. Count the arrows.' }, act: 'b' },
      { min: 6, what: { fr: 'Deuxième essai : « même arrivée, moins de flèches ». Sept flèches donnent trois étoiles.', en: 'Second try: “same arrival, fewer arrows”. Seven arrows earn three stars.' }, act: 'b' },
      { min: 4, what: { fr: 'Clôture : on refait le chemin gagnant au sol avec les cartes, puis « Robot, va dormir ! ».', en: 'Closing: replay the winning path on the floor with the cards, then “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 range les flèches. Copilote 🗣️ dit la flèche avant le toucher et compte à voix haute. Ordinateurs 🤖 miment les pas et lèvent la main si le renard va vers un mur. Vérificateur 👀 lit le nombre de flèches dans le bandeau vert et compare les deux essais.',
      en: 'Pilot 🎮 lines up the arrows. Co-pilot 🗣️ says the arrow before the tap and counts aloud. Computers 🤖 mime the steps and raise a hand if the fox heads for a wall. Checker 👀 reads the number of arrows in the green banner and compares both tries.',
    },
    say: [
      { fr: 'Du plus petit au plus grand : cherche la plus petite étoile.', en: 'Smallest to biggest: look for the smallest star.' },
      { fr: 'Le mur, on ne passe pas : on le contourne.', en: 'The wall, we cannot go through: we go around.' },
      { fr: 'Combien de flèches ? Compte avec moi.', en: 'How many arrows? Count with me.' },
      { fr: 'Même arrivée, moins de flèches : c’est le défi.', en: 'Same arrival, fewer arrows: that is the challenge.' },
      { fr: 'Dis la flèche avant de toucher.', en: 'Say the arrow before you tap.' },
    ],
    ask: [
      { fr: 'Laquelle est la plus petite ? Et juste après ?', en: 'Which one is the smallest? And right after?' },
      { fr: 'Combien de cases pour monter jusqu’à la poule ? Combien pour aller à droite ?', en: 'How many squares up to the hen? How many to the right?' },
      { fr: 'Ce chemin a marché avec neuf flèches. On peut faire moins ?', en: 'This path worked with nine arrows. Can we do fewer?' },
      { fr: 'Pourquoi le renard fait la tête ? Quelle flèche l’a envoyé dans le mur ?', en: 'Why is the fox sad? Which arrow sent him into the wall?' },
      { fr: 'Monter d’abord ou aller à droite d’abord : lequel évite les murs ?', en: 'Up first or right first: which avoids the walls?' },
    ],
    pitfalls: [
      { trap: { fr: 'L’enfant touche la grande étoile en premier parce qu’elle est belle.', en: 'The child taps the big star first because it looks nice.' },
        fix: { fr: 'Rangez cinq objets au sol du plus petit au plus grand, mains sur les genoux, avant de toucher l’écran.', en: 'Order five objects on the floor from smallest to biggest, hands on knees, before touching the screen.' } },
      { trap: { fr: 'Le renard fonce dans un mur 🧱 : « Essaie encore ! » et tout le monde veut Recommencer.', en: 'The fox runs into a 🧱 wall: “Try again!” and everyone wants to Reset.' },
        fix: { fr: 'On garde le programme, on retire UNE flèche en la touchant, on ajoute la bonne, Go.', en: 'Keep the program, remove ONE arrow by tapping it, add the right one, Go.' } },
      { trap: { fr: 'Le programme marche avec dix flèches, plafond atteint, une étoile : les enfants sont déçus.', en: 'The program works with ten arrows, ceiling reached, one star: children are disappointed.' },
        fix: { fr: 'Fêtez l’arrivée d’abord. Puis lisez « essaie avec moins ! » et cherchez une flèche qui ne sert à rien.', en: 'Celebrate the arrival first. Then read “try with fewer!” and look for an arrow that does nothing.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : la mosaïque seulement, l’adulte dit « la plus petite » et l’enfant la touche. Au sol, trois objets à ranger.', en: '🌱 Age 3: the mosaic only, the adult says “the smallest” and the child taps it. On the floor, three objects to order.' },
      beg: { fr: '🌟 MS : les cinq étoiles seul, puis le renard avec le copilote, sans compter les étoiles : arriver suffit.', en: '🌟 Age 4: the five stars alone, then the fox with the co-pilot, without counting stars: arriving is enough.' },
      pro: { fr: '🏆 GS : le renard en sept flèches, arrivée prédite avant Go, et explication : « trois pour monter, quatre pour aller à droite ».', en: '🏆 Age 5: the fox in seven arrows, arrival predicted before Go, and the explanation: “three to go up, four to go right”.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant compare deux étoiles avec les mains, « petite, grande », avant de toucher.', en: 'I see the child compare two stars with their hands, “small, big”, before tapping.' },
      beg: { fr: 'Je vois que l’enfant contourne le mur en disant « monte » puis « droite ».', en: 'I see the child go around the wall saying “up” then “right”.' },
      pro: { fr: 'Je vois que l’enfant retire une flèche inutile pour passer de neuf à sept.', en: 'I see the child remove a useless arrow to go from nine to seven.' },
      warn: { fr: 'Signe d’alerte : l’enfant ajoute des flèches sans regarder la grille ; revenez au chemin au sol avec les cartes.', en: 'Warning sign: the child adds arrows without looking at the grid; go back to the floor path with cards.' },
    },
    unplugged: {
      id: 'ch8-s4:a',
      bridge: { fr: 'Avant l’écran, cinq enfants avec des cartes-nombres se rangent du plus petit au plus grand. Au tableau, les étoiles se rangent pareil : on touche la plus petite d’abord.', en: 'Before the screen, five children with number cards line up from smallest to biggest. On the board, the stars are ordered the same way: tap the smallest first.' },
    },
    noSound: {
      fr: 'Sans son, les 🤖 miment les pas du renard avec le bras et crient « poule ! » quand il arrive ; le vérificateur lit les étoiles du bandeau.',
      en: 'Without sound, the 🤖 mime the fox’s steps with an arm and shout “hen!” when he arrives; the checker reads the stars in the banner.',
    },
    vocab: [
      { word: { fr: 'Ranger (« du plus petit au plus grand »)', en: 'Order (“from smallest to biggest”)' }, gesture: { fr: 'La main monte par paliers, comme un escalier.', en: 'The hand rises in steps, like a staircase.' } },
      { word: { fr: 'Mur (« on ne passe pas »)', en: 'Wall (“we cannot go through”)' }, gesture: { fr: 'Les deux paumes poussent une porte fermée.', en: 'Both palms push a closed door.' } },
      { word: { fr: 'Le plus court (« moins de flèches »)', en: 'The shortest (“fewer arrows”)' }, gesture: { fr: 'Les deux mains se rapprochent, comme pour raccourcir.', en: 'Both hands come closer, as if shortening.' } },
      { word: { fr: 'Prédire (« deviner avant Go »)', en: 'Predict (“guess before Go”)' }, gesture: { fr: 'Le doigt montre la case d’arrivée, yeux fermés.', en: 'The finger points at the arrival square, eyes closed.' } },
    ],
    tips: {
      a: { fr: 'Une étoile mal choisie clignote en rouge : demandez « plus petite ou plus grande que celle-là ? » avant le second essai.', en: 'A wrongly chosen star flashes red: ask “smaller or bigger than that one?” before the second try.' },
      b: { fr: 'Deux chemins à sept flèches marchent : trois ⬆️ puis quatre ➡️ par le haut, ou quatre ➡️ puis trois ⬆️ par le bas.', en: 'Two seven-arrow paths work: three ⬆️ then four ➡️ along the top, or four ➡️ then three ⬆️ along the bottom.' },
    },
    closing: {
      fr: 'Aujourd’hui on a rangé du plus petit au plus grand, et on a trouvé le chemin du renard avec le moins de flèches. Un bon programme, c’est un programme court.',
      en: 'Today we ordered from smallest to biggest, and found the fox’s path with the fewest arrows. A good program is a short program.',
    },
    parents: {
      fr: 'Votre enfant a cherché le chemin le plus court pour un renard, en évitant des murs. En promenade, demandez « par où c’est le plus court pour rentrer ? » et comptez les pas ensemble.',
      en: 'Your child looked for the shortest path for a fox, avoiding walls. On a walk, ask “which way home is shortest?” and count the steps together.',
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  'ch5-s5': {
    concept: 'debug',
    also: ['sequence', 'orientation'],
    duration: 30,
    essential: {
      fr: 'Le programme est déjà écrit, mais une flèche se trompe. Les enfants lisent, prédisent où va le chien, appuient sur Go, puis retirent la flèche fautive et ajoutent la bonne. Se tromper, ce n’est pas grave : on cherche le bug et on répare.',
      en: 'The program is already written, but one arrow is wrong. Children read it, predict where the dog goes, press Go, then remove the wrong arrow and add the right one. Mistakes are fine: we find the bug and fix it.',
    },
    setup: [
      { fr: 'Testez 🔊 : le son « raté » et le « Bug réparé ! » doivent s’entendre, ils rythment la séance.', en: 'Test 🔊: the “fail” sound and “Bug fixed!” must be heard, they set the session’s rhythm.' },
      { fr: 'Ouvrez ch5-s5 : Le chien s’est trompé (⬆️➡️⬆️), Le bug caché (six flèches), Le robot s’est trompé (mTiny, cartes ↰ ↑ ↑ ↑). Le bandeau 🐛 « Trouve le bug ! » doit s’afficher.', en: 'Open ch5-s5: The dog got it wrong (⬆️➡️⬆️), The hidden bug (six arrows), The robot got it wrong (mTiny, cards ↰ ↑ ↑ ↑). The 🐛 “Find the bug!” banner must show.' },
      { fr: 'Préparez trois cartes flèches dont une fausse, la carte 🐛 et la loupe en carton pour la maîtresse-robot.', en: 'Prepare three arrow cards including one wrong, the 🐛 card and the cardboard magnifying glass for the teacher-robot.' },
      { fr: 'Si la classe a le robot mTiny, posez-le sur son tapis avec ses cartes, pour rejouer la suite réparée.', en: 'If the class has the mTiny robot, place it on its mat with its cards, to replay the fixed sequence.' },
      { fr: 'Affichez la règle du jour au tableau : « on enlève UNE flèche, pas tout ».', en: 'Display the rule of the day on the board: “we remove ONE arrow, not everything”.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », règles du tableau, et le geste de la loupe.', en: 'Ritual: “Robot, wake up!”, board rules, and the magnifying-glass gesture.' } },
      { min: 5, what: { fr: 'La maîtresse-robot se trompe : trois cartes au tableau, une fausse. Elle exécute, rate, la classe crie « bug ! » et remplace la carte.', en: 'The teacher-robot gets it wrong: three cards on the board, one wrong. She performs, misses, the class shouts “bug!” and swaps the card.' }, act: 'd' },
      { min: 6, what: { fr: 'Le chien s’est trompé : lire ⬆️➡️⬆️, prédire, Go. Retirer ➡️, ajouter ⬆️, Go : « Bug réparé ! ».', en: 'The dog got it wrong: read ⬆️➡️⬆️, predict, Go. Remove ➡️, add ⬆️, Go: “Bug fixed!”.' }, act: 'a' },
      { min: 7, what: { fr: 'Le bug caché : six flèches, le vérificateur montre l’arrivée avant Go. Laquelle se trompe ? On retire ⬅️, on ajoute ➡️.', en: 'The hidden bug: six arrows, the checker points at the arrival before Go. Which one is wrong? Remove ⬅️, add ➡️.' }, act: 'b' },
      { min: 6, what: { fr: 'Le robot s’est trompé : le panda tourne du mauvais côté. On retire les quatre cartes et on range ↱ ↑ ↑ ↑.', en: 'The robot got it wrong: the panda turns the wrong way. Remove the four cards and line up ↱ ↑ ↑ ↑.' }, act: 'c' },
      { min: 3, what: { fr: 'Clôture : « le chien se trompe, pas toi », geste de la loupe, puis « Robot, va dormir ! ».', en: 'Closing: “the dog got it wrong, not you”, magnifying-glass gesture, then “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 touche la flèche à enlever, puis ajoute la bonne. Copilote 🗣️ lit le programme à voix haute avant Go. Ordinateurs 🤖 miment chaque pas et crient « bug ! » quand le chien s’éloigne. Vérificateur 👀 tient la loupe et montre la flèche qu’il soupçonne.',
      en: 'Pilot 🎮 taps the arrow to remove, then adds the right one. Co-pilot 🗣️ reads the program aloud before Go. Computers 🤖 mime each step and shout “bug!” when the dog moves away. Checker 👀 holds the magnifying glass and points at the arrow they suspect.',
    },
    say: [
      { fr: 'Le programme est déjà écrit. Lis-le avec moi.', en: 'The program is already written. Read it with me.' },
      { fr: 'Où va-t-il arriver ? Montre la case, puis Go.', en: 'Where will it arrive? Point at the square, then Go.' },
      { fr: 'Le chien se trompe, pas toi : on répare.', en: 'The dog got it wrong, not you: we fix it.' },
      { fr: 'On enlève une seule flèche, pas tout.', en: 'We remove one arrow only, not everything.' },
      { fr: 'Bug réparé ! Tu as trouvé la flèche qui se trompait.', en: 'Bug fixed! You found the arrow that was wrong.' },
    ],
    ask: [
      { fr: 'Où va-t-il arriver si on appuie sur Go maintenant ?', en: 'Where will it arrive if we press Go now?' },
      { fr: 'Laquelle se trompe ? Pourquoi celle-là ?', en: 'Which one is wrong? Why that one?' },
      { fr: 'Après avoir enlevé la flèche, il manque quoi pour arriver à l’os ?', en: 'After removing the arrow, what is missing to reach the bone?' },
      { fr: 'Le robot regarde vers le haut : s’il tourne à gauche, il regarde où ?', en: 'The robot faces up: if it turns left, where does it face?' },
      { fr: 'Qu’est-ce qu’on fait quand ça rate ? On pleure ou on cherche ?', en: 'What do we do when it fails? Cry or search?' },
    ],
    pitfalls: [
      { trap: { fr: 'Au premier « Essaie encore ! », le pilote appuie sur Recommencer : le programme bugué revient, on tourne en rond.', en: 'At the first “Try again!”, the pilot presses Reset: the buggy program comes back, we go in circles.' },
        fix: { fr: 'Dites avant : « Recommencer remet le bug ». Pour réparer, on touche la flèche fautive : elle disparaît.', en: 'Say beforehand: “Reset brings the bug back”. To fix, tap the wrong arrow: it disappears.' } },
      { trap: { fr: 'L’enfant retire la flèche fautive, appuie sur Go, et le chien s’arrête avant l’os : « ça marche toujours pas ! ».', en: 'The child removes the wrong arrow, presses Go, and the dog stops before the bone: “it still doesn’t work!”.' },
        fix: { fr: 'C’est normal : enlever ne suffit pas, il faut ajouter la bonne flèche à la fin. Deux gestes : enlever, puis ajouter.', en: 'That is expected: removing is not enough, the right arrow must be added at the end. Two moves: remove, then add.' } },
      { trap: { fr: 'Avec le robot mTiny, l’enfant retire ↰ et ajoute ↱ à la fin : le panda monte tout droit et tourne trop tard.', en: 'With the mTiny robot, the child removes ↰ and adds ↱ at the end: the panda goes straight up and turns too late.' },
        fix: { fr: 'Ici la carte « tourne » doit être PREMIÈRE et les cartes s’ajoutent à la fin. On retire les quatre cartes et on range ↱ ↑ ↑ ↑ dans l’ordre.', en: 'Here the “turn” card must come FIRST and cards are added at the end. Remove all four cards and line up ↱ ↑ ↑ ↑ in order.' } },
      { trap: { fr: 'Un enfant se vexe quand la classe crie « bug ! » sur son programme.', en: 'A child is upset when the class shouts “bug!” at their program.' },
        fix: { fr: 'Le bug est dans le programme, jamais dans l’enfant. On crie « bug ! » en souriant, et c’est un jeu de chercheurs.', en: 'The bug is in the program, never in the child. We shout “bug!” with a smile, it is a detective game.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : la maîtresse-robot au sol, puis Le chien s’est trompé avec l’adulte qui lit ; l’enfant touche la flèche ➡️ que la classe a désignée.', en: '🌱 Age 3: the teacher-robot on the floor, then The dog got it wrong with the adult reading; the child taps the ➡️ arrow the class pointed at.' },
      beg: { fr: '🌟 MS : Le chien s’est trompé seul : lire les trois flèches, Go, enlever ➡️, ajouter ⬆️. Dire chaque flèche avant de toucher.', en: '🌟 Age 4: The dog got it wrong alone: read the three arrows, Go, remove ➡️, add ⬆️. Say each arrow before tapping.' },
      pro: { fr: '🏆 GS : Le bug caché en prédisant l’arrivée AVANT Go, puis le robot mTiny et ses cartes qui tournent. Défi : trouver le bug sans appuyer sur Go.', en: '🏆 Age 5: The hidden bug predicting the arrival BEFORE Go, then the mTiny robot and its turning cards. Challenge: find the bug without pressing Go.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant crie « bug ! » quand le chien s’éloigne de l’os, et sourit.', en: 'I see the child shout “bug!” when the dog moves away from the bone, and smile.' },
      beg: { fr: 'Je vois que l’enfant touche la flèche fautive, puis ajoute la bonne, sans appuyer sur Recommencer.', en: 'I see the child tap the wrong arrow, then add the right one, without pressing Reset.' },
      pro: { fr: 'Je vois que l’enfant montre la case d’arrivée fausse avant Go et nomme la flèche qui se trompe.', en: 'I see the child point at the wrong arrival square before Go and name the wrong arrow.' },
      warn: { fr: 'Signe d’alerte : l’enfant efface tout et reconstruit au hasard ; revenez à la maîtresse-robot avec trois cartes.', en: 'Warning sign: the child wipes everything and rebuilds at random; go back to the teacher-robot with three cards.' },
    },
    unplugged: {
      id: 'ch8-s5:a',
      bridge: { fr: 'Après l’écran, le sandwich du robot : la maîtresse obéit à la lettre, « mets le beurre » pose la boîte fermée. Les enfants réparent la recette comme ils ont réparé le programme du chien.', en: 'After the screen, the robot sandwich: the teacher obeys literally, “put the butter” places the closed tub. Children fix the recipe the way they fixed the dog’s program.' },
    },
    noSound: {
      fr: 'Sans son, le bandeau fait tout : rouge « Essaie encore ! », vert « Bug réparé ! ». Le vérificateur les lit, la classe crie « bug ! » ou applaudit.',
      en: 'Without sound, the banner does it all: red “Try again!”, green “Bug fixed!”. The checker reads them, the class shouts “bug!” or claps.',
    },
    vocab: [
      { word: { fr: 'Bug (« la flèche qui se trompe »)', en: 'Bug (“the arrow that is wrong”)' }, gesture: { fr: 'La loupe devant l’œil, rond avec les doigts.', en: 'The magnifying glass in front of the eye, a circle with the fingers.' } },
      { word: { fr: 'Réparer (« on enlève, on remet la bonne »)', en: 'Fix (“remove, put the right one back”)' }, gesture: { fr: 'On pince une carte invisible et on la jette, puis on en pose une.', en: 'Pinch an invisible card and toss it, then lay one down.' } },
      { word: { fr: 'Prédire (« deviner avant Go »)', en: 'Predict (“guess before Go”)' }, gesture: { fr: 'Le doigt montre la case d’arrivée avant de toucher Go.', en: 'The finger points at the arrival square before tapping Go.' } },
      { word: { fr: 'Tourner (« le robot regarde ailleurs »)', en: 'Turn (“the robot looks elsewhere”)' }, gesture: { fr: 'On pivote sur place d’un quart de tour.', en: 'Turn a quarter turn on the spot.' } },
    ],
    tips: {
      a: { fr: 'Après avoir retiré ➡️ il reste ⬆️⬆️ et le chien s’arrête une case trop tôt : c’est le moment d’ajouter la troisième ⬆️.', en: 'After removing ➡️ only ⬆️⬆️ remain and the dog stops one square short: that is when to add the third ⬆️.' },
      b: { fr: 'La flèche fautive est la dernière (⬅️) : faites lire les six à voix haute, le bug se voit à l’oreille.', en: 'The wrong arrow is the last one (⬅️): have all six read aloud, the bug can be heard.' },
      c: { fr: 'Le panda tourne à gauche vers le bord et se bloque tout de suite : la flèche rouge ▲ montre où il regarde, faites-la observer avant Go.', en: 'The panda turns left towards the edge and gets stuck at once: the red ▲ shows where it faces, have it observed before Go.' },
      d: { fr: 'Exécutez la carte fausse avec un grand sérieux, sans réfléchir : le rire des enfants, c’est le moment où ils repèrent le bug.', en: 'Perform the wrong card with great seriousness, without thinking: the children’s laughter is the moment they spot the bug.' },
    },
    closing: {
      fr: 'Aujourd’hui le programme était déjà écrit, et une flèche se trompait. On l’a cherchée avec la loupe, on l’a enlevée, on a remis la bonne : bug réparé !',
      en: 'Today the program was already written, and one arrow was wrong. We looked for it with the magnifying glass, removed it, put the right one back: bug fixed!',
    },
    parents: {
      fr: 'Votre enfant a appris le mot « bug » : une flèche qui se trompe dans un programme. Il sait qu’on ne pleure pas, on cherche et on répare. À la maison, quand quelque chose rate, dites « bug ? on répare ! » et cherchez ensemble ce qui manque.',
      en: 'Your child learnt the word “bug”: an arrow that is wrong in a program. They know we do not cry, we search and fix. At home, when something fails, say “bug? let’s fix it!” and look together for what is missing.',
    },
  },
}
