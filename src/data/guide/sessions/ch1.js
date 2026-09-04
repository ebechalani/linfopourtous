// Guide du professeur — chapitre 1 : Je connais mon ordinateur
// Une fiche par séance (SESSIONS) + la fiche du chapitre (CHAPTER).
// Modèle de données : src/data/guide/README.md · notions : src/data/guide/concepts.js
// Tout ce qui est décrit (boutons, sons, étoiles) existe dans les jeux de src/games/.

export const CHAPTER = {
  thread: {
    fr: 'L’ordinateur est une machine qui obéit à mon doigt : je touche, ça bouge. La souris, le clavier et le tableau m’écoutent si je donne un ordre clair. Puis je range des flèches, d’abord… ensuite… et le chien trouve son repas.',
    en: 'The computer is a machine that obeys my finger: I tap, it moves. The mouse, the keyboard and the board listen to me when I give a clear order. Then I line up arrows, first… then… and the dog finds its food.',
  },
  concepts: ['tool', 'cause', 'sequence'],
  domains: [
    { fr: 'Explorer le monde · les outils numériques : nommer l’écran, la souris, le clavier ; agir sur le tableau avec un seul doigt.', en: 'Exploring the world · digital tools: name the screen, the mouse, the keyboard; act on the board with one finger.' },
    { fr: 'Mobiliser le langage : dire un ordre court (« monte », « droite ») au copilote avant de toucher.', en: 'Using language: say a short order (“up”, “right”) to the co-pilot before touching.' },
    { fr: 'Explorer le monde · l’espace : suivre un chemin sur un quadrillage, de bas en haut et de gauche à droite.', en: 'Exploring the world · space: follow a path on a grid, from bottom to top and from left to right.' },
    { fr: 'Agir et s’exprimer avec le corps : main gauche, main droite, un doigt qui vise et qui touche doucement.', en: 'Moving and expressing with the body: left hand, right hand, one finger that aims and taps gently.' },
  ],
  rhythm: {
    fr: '7 séances de 25 à 30 min, une par semaine, en période 1 (septembre–octobre). Séances cœur : s1, s2, s3 et s5. Bonus : s4 (clic droit), s6 et s7 si le temps le permet. Où couper : après s3, on peut passer directement à s5 ; le clic droit reviendra plus tard.',
    en: '7 sessions of 25 to 30 min, one per week, in term 1 (September–October). Core sessions: s1, s2, s3 and s5. Bonus: s4 (right click), s6 and s7 if time allows. Where to cut: after s3 you can jump straight to s5; the right click can come back later.',
  },
  materials: [
    { fr: 'Le TBI tactile, son allumé et testé avec le bouton 🔊 avant chaque séance.', en: 'The touch board, sound on and tested with the 🔊 button before each session.' },
    { fr: 'Une vraie souris et un vrai clavier (même débranchés) à faire passer de main en main.', en: 'A real mouse and a real keyboard (even unplugged) to pass from hand to hand.' },
    { fr: 'À préparer une fois : 4 grandes cartes flèches ⬆️ ⬇️ ⬅️ ➡️ plastifiées, un os 🦴 en carton.', en: 'Prepare once: 4 big laminated arrow cards ⬆️ ⬇️ ⬅️ ➡️ and a cardboard bone 🦴.' },
    { fr: 'Un quadrillage au sol (tapis à cases ou scotch de couleur, 4 × 4 cases).', en: 'A floor grid (squared mat or coloured tape, 4 × 4 squares).' },
    { fr: 'Pour s4 : une gommette rouge par enfant, deux cartes 🐟 et 🐒.', en: 'For s4: one red sticker per child, two cards 🐟 and 🐒.' },
  ],
  ritual: {
    open: { fr: '« Robot, réveille-toi ! » : les enfants s’assoient droits, bras pliés, « bip bip ». Puis on écoute les 5 règles du tableau (ch1-s1, carte « Les règles du tableau »).', en: '“Robot, wake up!”: children sit up straight, arms bent, “beep beep”. Then we listen to the 5 board rules (ch1-s1, “The board rules” card).' },
    close: { fr: '« Robot, va dormir ! » : tête baissée, yeux fermés, le bip s’éteint. Avant, une phrase-bilan : « aujourd’hui on a… ».', en: '“Robot, go to sleep!”: heads down, eyes closed, the beep fades. Just before, one wrap-up sentence: “today we…”.' },
  },
  unplugged: [
    { id: 'ch8-s5:b', when: { fr: 'À chaque séance, en ouverture et en clôture.', en: 'Every session, at the opening and the closing.' } },
    { id: 'ch8-s3:a', when: { fr: 'Avant s1 : écouter la consigne avant de bouger, c’est déjà une règle du tableau.', en: 'Before s1: listening to the instruction before moving is already a board rule.' } },
    { id: 'ch8-s1:tot', when: { fr: 'Avant s1 ou s2 : une carte ↑ = un pas, comme une flèche = un pas du chien.', en: 'Before s1 or s2: one ↑ card = one step, like one arrow = one step of the dog.' } },
    { id: 'ch8-s1:a', when: { fr: 'Après s3, en salle de motricité : le robot et le maître sur le quadrillage au sol.', en: 'After s3, in the gym: the robot and the master on the floor grid.' } },
    { id: 'ch8-s3:d', when: { fr: 'Avant s4 : si carte rouge alors on saute ; si poisson alors clic gauche.', en: 'Before s4: if red card then jump; if fish then left click.' } },
    { id: 'ch8-s1:b', when: { fr: 'Après s5 : le parcours codé avec les cartes flèches, avant le niveau au mur.', en: 'After s5: the coded path with arrow cards, before the wall level.' } },
  ],
  pitfalls: [
    { trap: { fr: 'Toute la main sur le tableau : plusieurs doigts, plusieurs touchers, rien ne marche.', en: 'The whole hand on the board: several fingers, several taps, nothing works.' },
      fix: { fr: 'Le geste-image de la notion « outil » : on tend l’index, on plie les autres doigts, on souffle dessus avant de toucher.', en: 'The “tool” gesture: point the index finger, fold the others, blow on it before touching.' } },
    { trap: { fr: 'Les 24 autres attendent et décrochent.', en: 'The other 24 wait and switch off.' },
      fix: { fr: 'Rôles fixes dès s1 : pilote 🎮, copilote 🗣️, ordinateurs 🤖 qui miment avec le bras, vérificateur 👀. On tourne toutes les 2 minutes.', en: 'Fixed roles from s1: pilot 🎮, co-pilot 🗣️, computers 🤖 who mime with their arm, checker 👀. Rotate every 2 minutes.' } },
    { trap: { fr: 'Le pilote appuie sur les flèches au hasard, très vite.', en: 'The pilot presses arrows at random, very fast.' },
      fix: { fr: 'Règle « dis-le avant de toucher » : le copilote dit la flèche, le pilote la montre du doigt, puis il touche.', en: 'Rule “say it before you touch”: the co-pilot says the arrow, the pilot points at it, then taps.' } },
    { trap: { fr: 'Le son est coupé et personne n’écoute la consigne.', en: 'The sound is off and nobody listens to the instruction.' },
      fix: { fr: 'Vérifiez 🔊 / 🔇 en haut de page avant les enfants. Sinon, vous êtes la voix : lisez la consigne en montrant l’image.', en: 'Check 🔊 / 🔇 at the top of the page before the children arrive. Otherwise you are the voice: read the instruction while pointing at the picture.' } },
  ],
  observables: [
    { fr: 'Je vois que l’enfant montre et nomme l’écran, la souris et le clavier.', en: 'I see the child point at and name the screen, the mouse and the keyboard.' },
    { fr: 'Je vois que l’enfant touche le tableau avec un seul doigt, sans taper.', en: 'I see the child touch the board with one finger, without banging.' },
    { fr: 'Je vois que l’enfant guide le canard ou le poisson jusqu’au but avec le doigt ou la souris.', en: 'I see the child guide the duck or the fish to the goal with a finger or the mouse.' },
    { fr: 'Je vois que l’enfant fait un double-tap et un appui long quand on le lui demande.', en: 'I see the child do a double tap and a long press when asked.' },
    { fr: 'Je vois que l’enfant dit « monte, monte, droite » avant d’appuyer sur Go.', en: 'I see the child say “up, up, right” before pressing Go.' },
    { fr: 'Je vois que l’enfant regarde le chien avancer et dit s’il a gagné ou non.', en: 'I see the child watch the dog move and say whether it has won or not.' },
  ],
  celebration: {
    fr: 'Fête des pilotes : on affiche les 5 images des parties de l’ordinateur ; chaque enfant en nomme une et colle sa gommette. Puis un dernier chemin du chien tous ensemble : les ordinateurs 🤖 miment chaque flèche, le vérificateur crie « Bravo ! » avec la machine. Chacun reçoit son diplôme de pilote de souris.',
    en: 'Pilots’ party: display the 5 pictures of the computer parts; each child names one and sticks a sticker. Then one last dog path all together: the computers 🤖 mime each arrow, the checker shouts “Well done!” with the machine. Everyone gets a mouse-pilot diploma.',
  },
  parents: {
    fr: 'Ce mois-ci, votre enfant a appris à nommer les parties de l’ordinateur et à commander le tableau avec un seul doigt. Il a guidé un chien vers son repas avec des flèches, en disant l’ordre avant de toucher. À la maison, demandez-lui de montrer l’écran, la souris et le clavier, et de vous dire « d’abord… ensuite… ».',
    en: 'This month, your child learnt to name the parts of the computer and to control the board with one finger. They guided a dog to its food with arrows, saying the order before touching. At home, ask them to show you the screen, the mouse and the keyboard, and to tell you “first… then…”.',
  },
}

export const SESSIONS = {
  // ─── s1 · Les parties de l’ordinateur ─────────────────────────────────────
  'ch1-s1': {
    concept: 'tool',
    also: ['cause'],
    duration: 30,
    essential: {
      fr: 'Les enfants découvrent la machine : écran, souris, clavier, et le tableau qui obéit à un seul doigt. Ils apprennent les 5 règles et font bouger un chien avec des flèches.',
      en: 'Children discover the machine: screen, mouse, keyboard, and the board that obeys a single finger. They learn the 5 rules and make a dog move with arrows.',
    },
    setup: [
      { fr: 'Testez 🔊 sur une carte des règles : la voix doit lire « Un seul doigt ».', en: 'Test 🔊 on a rules card: the voice must read “One finger only”.' },
      { fr: 'Posez une vraie souris et un vrai clavier sur une table devant le tapis.', en: 'Put a real mouse and a real keyboard on a table in front of the mat.' },
      { fr: 'Ouvrez la séance ch1-s1 ; vérifiez que le chien (activité c) bouge dès qu’on touche une flèche.', en: 'Open session ch1-s1; check that the dog (activity c) moves as soon as an arrow is tapped.' },
      { fr: 'Marquez au sol la place du pilote : un rond de scotch devant le tableau.', en: 'Mark the pilot’s spot on the floor: a tape circle in front of the board.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel d’ouverture : « Robot, réveille-toi ! » puis les 5 règles, une carte à la fois.', en: 'Opening ritual: “Robot, wake up!” then the 5 rules, one card at a time.' }, act: 'rules' },
      { min: 4, what: { fr: 'Touche les animaux : 4 pilotes PS passent, un toucher chacun, une étoile à chaque fois.', en: 'Tap the animals: 4 nursery pilots take turns, one tap each, a star every time.' }, act: 'tot' },
      { min: 6, what: { fr: 'Souris, écran, clavier : on touche chaque carte, on écoute, on montre le vrai objet.', en: 'Mouse, screen, keyboard: tap each card, listen, point at the real object.' }, act: 'a' },
      { min: 6, what: { fr: 'Le canard : le doigt glisse sur le tableau, le canard suit jusqu’à l’eau.', en: 'The duck: the finger slides on the board, the duck follows to the water.' }, act: 'b' },
      { min: 7, what: { fr: 'Le chien : une flèche ➡️ = un pas tout de suite. Trois pilotes, trois pas.', en: 'The dog: one ➡️ arrow = one step right away. Three pilots, three steps.' }, act: 'c' },
      { min: 4, what: { fr: 'Bilan et « Robot, va dormir ! ».', en: 'Wrap-up and “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Le pilote 🎮 est debout sur le rond et touche. Le copilote 🗣️ dit le nom de la carte ou la flèche avant. Les ordinateurs 🤖, assis, tendent l’index et font « bip » à chaque toucher. Le vérificateur 👀 lève le pouce si le canard est à l’eau.',
      en: 'The pilot 🎮 stands on the circle and taps. The co-pilot 🗣️ says the card name or the arrow first. The computers 🤖, seated, point their index finger and go “beep” at each tap. The checker 👀 gives a thumbs-up when the duck reaches the water.',
    },
    say: [
      { fr: 'Regarde : un seul doigt, comme ça, et tu touches doucement.', en: 'Look: one finger, like this, and you touch gently.' },
      { fr: 'Ça, c’est l’écran. On regarde dessus, on ne tape pas dessus.', en: 'This is the screen. We look at it, we do not bang on it.' },
      { fr: 'Ton doigt glisse, le canard te suit. Il a faim d’eau !', en: 'Your finger slides, the duck follows you. It is thirsty for water!' },
      { fr: 'Tu touches la flèche, le chien fait un pas. Encore une !', en: 'You tap the arrow, the dog takes one step. One more!' },
    ],
    ask: [
      { fr: 'Où est la souris dans la classe ? Montre-la avec ton doigt.', en: 'Where is the mouse in the classroom? Point at it with your finger.' },
      { fr: 'Qu’est-ce qui se passe si je touche avec toute la main ?', en: 'What happens if I touch with my whole hand?' },
      { fr: 'Quelle flèche fait avancer le chien vers l’os ?', en: 'Which arrow moves the dog towards the bone?' },
      { fr: 'Est-ce que le chien bouge tout seul, ou parce que tu as touché ?', en: 'Does the dog move on its own, or because you tapped?' },
    ],
    pitfalls: [
      { trap: { fr: 'Les enfants tapent fort ou avec plusieurs doigts.', en: 'Children bang or use several fingers.' },
        fix: { fr: 'Faites d’abord le geste dans l’air : index tendu, on « touche » un nuage. Puis seulement le tableau.', en: 'First do the gesture in the air: index out, “touch” a cloud. Then only the board.' } },
      { trap: { fr: 'Sur le chien, le pilote appuie sur ⬆️ ou ⬇️ : le bord rouge s’allume, « On ne peut pas aller par là ! ».', en: 'On the dog, the pilot presses ⬆️ or ⬇️: the red edge lights up, “Can’t go that way!”.' },
        fix: { fr: 'C’est un bon moment : « la machine dit non ». Montrez l’os à droite et demandez la flèche qui va à droite.', en: 'That is a good moment: “the machine says no”. Point at the bone on the right and ask for the arrow that goes right.' } },
      { trap: { fr: 'Après « Bravo ! », les flèches sont grisées et l’enfant insiste.', en: 'After “Well done!”, the arrows are greyed out and the child keeps pressing.' },
        fix: { fr: 'Le bouton ↺ Recommencer devient orange : c’est lui qu’on touche pour rejouer.', en: 'The ↺ Reset button turns orange: that is the one to tap to play again.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : un seul toucher sur un animal, puis un seul pas du chien. L’adulte dit « tu as touché, il a bougé ». Jamais d’échec.', en: '🌱 Age 3: one single tap on an animal, then one single step of the dog. The adult says “you tapped, it moved”. Never a failure.' },
      beg: { fr: '🌟 MS : nommer 3 parties (écran, souris, clavier) et faire les 3 pas du chien en disant « droite » avant chaque toucher.', en: '🌟 Age 4: name 3 parts (screen, mouse, keyboard) and do the dog’s 3 steps, saying “right” before each tap.' },
      pro: { fr: '🏆 GS : nommer les 5 cartes, guider le canard sans lever le doigt, et prédire : « combien de pas jusqu’à l’os ? ».', en: '🏆 Age 5: name all 5 cards, guide the duck without lifting the finger, and predict: “how many steps to the bone?”.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant touche un animal avec un doigt et sourit quand il change.', en: 'I see the child tap an animal with one finger and smile when it changes.' },
      beg: { fr: 'Je vois que l’enfant montre la vraie souris quand la carte souris est lue.', en: 'I see the child point at the real mouse when the mouse card is read.' },
      pro: { fr: 'Je vois que l’enfant compte « un, deux, trois pas » avant de toucher ➡️.', en: 'I see the child count “one, two, three steps” before tapping ➡️.' },
      warn: { fr: 'Je vois que l’enfant tape au hasard sur toutes les flèches : on ralentit, une flèche, on regarde, on nomme.', en: 'I see the child hit all the arrows at random: slow down, one arrow, look, name it.' },
    },
    unplugged: {
      id: 'ch8-s1:tot',
      bridge: { fr: 'Avant le tableau, la carte ↑ fait faire un pas aux enfants. Sur le tableau, la flèche ➡️ fait faire un pas au chien : même idée, un ordre = un pas.', en: 'Before the board, the ↑ card makes the children take a step. On the board, the ➡️ arrow makes the dog take a step: same idea, one order = one step.' },
    },
    noSound: {
      fr: 'Vous lisez chaque carte à voix haute en montrant l’image ; les ordinateurs 🤖 répètent le mot. Pour le canard et le chien, le vérificateur 👀 dit « Bravo ! » à la place de la machine.',
      en: 'You read each card aloud while pointing at the picture; the computers 🤖 repeat the word. For the duck and the dog, the checker 👀 says “Well done!” instead of the machine.',
    },
    vocab: [
      { word: { fr: 'L’écran', en: 'The screen' }, gesture: { fr: 'On dessine un grand rectangle dans l’air', en: 'Draw a big rectangle in the air' } },
      { word: { fr: 'La souris', en: 'The mouse' }, gesture: { fr: 'La main posée à plat qui glisse sur la cuisse', en: 'Flat hand sliding on the thigh' } },
      { word: { fr: 'Le clavier', en: 'The keyboard' }, gesture: { fr: 'Les doigts qui pianotent sur les genoux', en: 'Fingers tapping on the knees' } },
      { word: { fr: 'Un seul doigt', en: 'One finger only' }, gesture: { fr: 'On tend l’index, on plie les autres', en: 'Point the index, fold the others' } },
    ],
    tips: {
      tot: { fr: 'Les animaux réapparaissent sans fin : arrêtez au bout de 4 pilotes, sinon la file s’allonge.', en: 'The animals reappear endlessly: stop after 4 pilots or the queue gets long.' },
      rules: { fr: 'Touchez la carte 🤫 en dernier et chuchotez vous-même : les enfants imitent tout de suite.', en: 'Tap the 🤫 card last and whisper yourself: the children copy at once.' },
      a: { fr: 'Après chaque carte lue, faites passer le vrai objet de main en main sur le tapis.', en: 'After each card is read, pass the real object from hand to hand on the mat.' },
      b: { fr: 'Le canard suit le doigt qui glisse : si l’enfant tape, montrez « on ne lâche pas le tableau ».', en: 'The duck follows the sliding finger: if the child taps, show “we don’t let go of the board”.' },
      c: { fr: 'En mode direct, chaque flèche bouge le chien aussitôt : l’os est à 3 pas à droite, donc 3 fois ➡️.', en: 'In direct mode, each arrow moves the dog at once: the bone is 3 steps to the right, so ➡️ 3 times.' },
    },
    closing: {
      fr: 'Aujourd’hui on a appris le nom des parties de l’ordinateur, et on a vu que la machine obéit à un seul doigt.',
      en: 'Today we learnt the names of the computer parts, and we saw that the machine obeys one single finger.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a découvert l’écran, la souris et le clavier. Il a touché le tableau avec un seul doigt pour faire bouger un canard et un chien. Demandez-lui de vous montrer le geste « un seul doigt ».',
      en: 'Today, your child discovered the screen, the mouse and the keyboard. They touched the board with one finger to move a duck and a dog. Ask them to show you the “one finger” gesture.',
    },
  },

  // ─── s2 · Je déplace la souris ────────────────────────────────────────────
  'ch1-s2': {
    concept: 'cause',
    also: ['sequence'],
    duration: 25,
    essential: {
      fr: 'Les enfants balayent des briques avec le doigt ou la souris pour découvrir un animal caché. Puis ils rangent leurs premières flèches en suivant les empreintes 🐾 et appuient sur Go.',
      en: 'Children sweep bricks away with a finger or the mouse to reveal a hidden animal. Then they line up their first arrows following the footprints 🐾 and press Go.',
    },
    setup: [
      { fr: 'Testez 🔊 : la machine doit dire « Bravo ! » quand la dernière brique disparaît.', en: 'Test 🔊: the machine must say “Well done!” when the last brick disappears.' },
      { fr: 'Ouvrez le chien (activité b) : vérifiez que les empreintes 🐾 grises apparaissent entre le chien et le repas 🍖.', en: 'Open the dog (activity b): check that the grey footprints 🐾 appear between the dog and the food 🍖.' },
      { fr: 'Préparez les 4 cartes flèches ; posez la carte ⬆️ bien en vue près du tableau.', en: 'Prepare the 4 arrow cards; place the ⬆️ card in plain sight near the board.' },
      { fr: 'Rappel du rond de scotch : le pilote reste dessus, les autres sur le tapis.', en: 'Reminder of the tape circle: the pilot stays on it, the others on the mat.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel d’ouverture : « Robot, réveille-toi ! » et les règles, surtout « un seul doigt ».', en: 'Opening ritual: “Robot, wake up!” and the rules, above all “one finger only”.' } },
      { min: 7, what: { fr: 'Les briques : le doigt glisse sur les briques vertes, l’animal apparaît petit à petit.', en: 'The bricks: the finger slides over the green bricks, the animal appears little by little.' }, act: 'a' },
      { min: 3, what: { fr: 'Sur le tapis : on montre la carte ⬆️, tout le monde fait « monte » avec le bras.', en: 'On the mat: show the ⬆️ card, everyone does “up” with their arm.' } },
      { min: 8, what: { fr: 'Le chien et les empreintes : trois fois ⬆️, puis Go. On regarde le chien marcher.', en: 'The dog and the footprints: ⬆️ three times, then Go. Watch the dog walk.' }, act: 'b' },
      { min: 4, what: { fr: 'Bilan : « je touche, ça bouge ; je range, puis Go ». « Robot, va dormir ! ».', en: 'Wrap-up: “I tap, it moves; I line up, then Go”. “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 : glisse le doigt puis range les flèches. Copilote 🗣️ : dit « monte » avant chaque flèche. Ordinateurs 🤖 : lèvent le bras à chaque « monte ». Vérificateur 👀 : compte les empreintes et dit si le chien est arrivé.',
      en: 'Pilot 🎮: slides the finger then lines up the arrows. Co-pilot 🗣️: says “up” before each arrow. Computers 🤖: raise their arm at each “up”. Checker 👀: counts the footprints and says whether the dog has arrived.',
    },
    say: [
      { fr: 'Glisse ton doigt sur les briques, doucement, comme pour essuyer.', en: 'Slide your finger over the bricks, gently, as if wiping.' },
      { fr: 'Qui se cache derrière ? On enlève encore une brique.', en: 'Who is hiding behind? We remove one more brick.' },
      { fr: 'Les empreintes montrent le chemin. Une empreinte, une flèche.', en: 'The footprints show the way. One footprint, one arrow.' },
      { fr: 'Tu as rangé les flèches. Maintenant, appuie sur Go et regarde.', en: 'You have lined up the arrows. Now press Go and watch.' },
    ],
    ask: [
      { fr: 'Qu’est-ce qui a fait disparaître la brique ?', en: 'What made the brick disappear?' },
      { fr: 'Le chien va où ? Montre le repas avec ton doigt.', en: 'Where is the dog going? Point at the food with your finger.' },
      { fr: 'Combien d’empreintes tu vois ? Alors, combien de flèches ?', en: 'How many footprints do you see? So, how many arrows?' },
      { fr: 'Pourquoi le chien n’a pas bougé quand tu as touché la flèche ?', en: 'Why did the dog not move when you tapped the arrow?' },
    ],
    pitfalls: [
      { trap: { fr: 'Le pilote attend que le chien bouge à chaque flèche, comme la semaine dernière.', en: 'The pilot waits for the dog to move at each arrow, like last week.' },
        fix: { fr: 'Montrez la boîte violette où les flèches se rangent : « le chien attend le Go, comme un vrai robot ».', en: 'Show the purple box where the arrows line up: “the dog waits for Go, like a real robot”.' } },
      { trap: { fr: 'Une flèche de trop : le chien sort de la grille, « Essaie encore ! » et il fait 😟.', en: 'One arrow too many: the dog leaves the grid, “Try again!” and it looks 😟.' },
        fix: { fr: 'On touche la flèche en trop dans la boîte : elle s’enlève. Puis Go à nouveau. Pas besoin de tout Recommencer.', en: 'Tap the extra arrow in the box: it is removed. Then Go again. No need to Reset everything.' } },
      { trap: { fr: 'Sur les briques, l’enfant tape au lieu de glisser et enlève une brique par toucher.', en: 'On the bricks, the child taps instead of sliding and removes one brick per tap.' },
        fix: { fr: 'Ça marche aussi, mais plus lentement. Dites : « essuie sans lever le doigt » et guidez sa main une fois.', en: 'It works too, only slower. Say: “wipe without lifting your finger” and guide their hand once.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : le pilote glisse sur 3 ou 4 briques et l’adulte finit. Sur le chien, l’adulte range les flèches, l’enfant appuie sur Go.', en: '🌱 Age 3: the pilot slides over 3 or 4 bricks and the adult finishes. On the dog, the adult lines up the arrows, the child presses Go.' },
      beg: { fr: '🌟 MS : ranger les 3 flèches ⬆️ en disant « monte » à chaque fois, puis Go.', en: '🌟 Age 4: line up the 3 ⬆️ arrows saying “up” each time, then Go.' },
      pro: { fr: '🏆 GS : dire les 3 flèches avant de toucher, prédire « il arrive au repas ? », puis gagner avec 3 étoiles ⭐⭐⭐.', en: '🏆 Age 5: say the 3 arrows before touching, predict “does it reach the food?”, then win with 3 stars ⭐⭐⭐.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant garde le doigt sur le tableau et regarde les briques disparaître.', en: 'I see the child keep the finger on the board and watch the bricks disappear.' },
      beg: { fr: 'Je vois que l’enfant dit « monte » puis touche ⬆️, trois fois.', en: 'I see the child say “up” then tap ⬆️, three times.' },
      pro: { fr: 'Je vois que l’enfant compte les empreintes avant de ranger ses flèches.', en: 'I see the child count the footprints before lining up the arrows.' },
      warn: { fr: 'Je vois que l’enfant appuie sur Go avec la boîte vide et ne comprend pas : on reprend « d’abord ranger, ensuite Go ».', en: 'I see the child press Go with an empty box and not understand: go back to “first line up, then Go”.' },
    },
    unplugged: {
      id: 'ch8-s1:b',
      bridge: { fr: 'Les empreintes 🐾 du tableau sont le parcours codé au sol : on pose les cartes flèches sur les cases, puis un enfant les suit comme le chien.', en: 'The footprints 🐾 on the board are the coded path on the floor: lay the arrow cards on the squares, then a child follows them like the dog.' },
    },
    noSound: {
      fr: 'Les ordinateurs 🤖 font « pop » à chaque brique enlevée. Sur le chien, tout le monde dit « un, deux, trois » pendant qu’il marche, et le vérificateur annonce « Bravo ! ».',
      en: 'The computers 🤖 go “pop” for each removed brick. On the dog, everyone says “one, two, three” while it walks, and the checker announces “Well done!”.',
    },
    vocab: [
      { word: { fr: 'Glisser', en: 'Slide' }, gesture: { fr: 'Le doigt qui essuie la table sans se lever', en: 'The finger wiping the table without lifting' } },
      { word: { fr: 'Monte ⬆️', en: 'Up ⬆️' }, gesture: { fr: 'Le bras se lève tout droit', en: 'The arm goes straight up' } },
      { word: { fr: 'Go !', en: 'Go!' }, gesture: { fr: 'On tape dans la main, puis on montre l’écran', en: 'Tap your palm, then point at the screen' } },
    ],
    tips: {
      a: { fr: 'L’animal change à chaque partie : rejouez une fois avec ↺ Rejouer pour que les MS devinent avant la fin.', en: 'The animal changes every game: replay once with ↺ Play again so the 4-year-olds can guess before the end.' },
      b: { fr: 'Les empreintes 🐾 montrent 2 cases, le repas est la 3e : il faut bien 3 fois ⬆️ pour 3 étoiles.', en: 'The footprints 🐾 show 2 squares, the food is the 3rd: you do need ⬆️ 3 times for 3 stars.' },
    },
    closing: {
      fr: 'Aujourd’hui on a fait glisser le doigt pour découvrir un animal, et on a rangé des flèches avant d’appuyer sur Go.',
      en: 'Today we slid a finger to discover an animal, and we lined up arrows before pressing Go.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a fait glisser son doigt pour enlever des briques et découvrir un animal caché. Il a aussi rangé trois flèches « monte » pour conduire un chien à son repas, puis a appuyé sur Go. À la maison, jouez à « monte, monte, monte » avec le bras.',
      en: 'Today, your child slid a finger to remove bricks and reveal a hidden animal. They also lined up three “up” arrows to lead a dog to its food, then pressed Go. At home, play “up, up, up” with your arm.',
    },
  },

  // ─── s3 · Je clique avec la souris ────────────────────────────────────────
  'ch1-s3': {
    concept: 'sequence',
    also: ['cause'],
    duration: 30,
    essential: {
      fr: 'Les enfants apprennent le clic : attraper un poisson qui bouge, puis relier des points dans l’ordre pour dessiner une étoile. Le chien fait un chemin en L : monter, puis aller à droite.',
      en: 'Children learn the click: catch a moving fish, then join dots in order to draw a star. The dog follows an L-shaped path: go up, then go right.',
    },
    setup: [
      { fr: 'Testez 🔊 : le « Bravo ! » du poisson doit se faire entendre après 5 poissons attrapés.', en: 'Test 🔊: the fish “Well done!” must be heard after 5 fish are caught.' },
      { fr: 'Ouvrez le chien (activité c) : le bol 🥣 est en haut à droite, le chien en bas à gauche.', en: 'Open the dog (activity c): the bowl 🥣 is top right, the dog bottom left.' },
      { fr: 'Posez les cartes ⬆️ et ➡️ au tableau, l’une au-dessus de l’autre.', en: 'Put the ⬆️ and ➡️ cards on the board, one above the other.' },
      { fr: 'Tracez au sol un chemin en L avec du scotch : 3 cases vers le haut, 3 vers la droite.', en: 'Tape an L-shaped path on the floor: 3 squares up, 3 to the right.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel d’ouverture et règle « j’attends mon tour » : le poisson donne envie de se lever.', en: 'Opening ritual and the rule “I wait for my turn”: the fish makes everyone want to stand up.' } },
      { min: 6, what: { fr: 'Le poisson : cinq clics pour cinq poissons, deux pilotes se relaient.', en: 'The fish: five clicks for five fish, two pilots take turns.' }, act: 'a' },
      { min: 7, what: { fr: 'Les points : on touche le point vert qui clignote, 1, 2, 3… jusqu’à l’étoile.', en: 'The dots: tap the flashing green dot, 1, 2, 3… until the star.' }, act: 'b' },
      { min: 3, what: { fr: 'Au sol : un enfant marche le L, les autres disent « monte, monte, monte, droite, droite, droite ».', en: 'On the floor: a child walks the L, the others say “up, up, up, right, right, right”.' } },
      { min: 8, what: { fr: 'Le chien : 3 fois ⬆️ puis 3 fois ➡️, Go. On regarde, on vérifie.', en: 'The dog: ⬆️ 3 times then ➡️ 3 times, Go. Watch, check.' }, act: 'c' },
      { min: 3, what: { fr: 'Bilan « d’abord… ensuite… » et « Robot, va dormir ! ».', en: 'Wrap-up “first… then…” and “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 : clique. Copilote 🗣️ : dit le numéro du point vert ou la flèche suivante. Ordinateurs 🤖 : bras en haut pour « monte », bras à droite pour « droite ». Vérificateur 👀 : dit « arrivé ! » ou « raté ! » quand le chien s’arrête.',
      en: 'Pilot 🎮: clicks. Co-pilot 🗣️: says the number of the green dot or the next arrow. Computers 🤖: arm up for “up”, arm to the right for “right”. Checker 👀: says “arrived!” or “missed!” when the dog stops.',
    },
    say: [
      { fr: 'Le poisson bouge vite : vise, puis touche une seule fois.', en: 'The fish moves fast: aim, then tap once.' },
      { fr: 'Cherche le point vert qui clignote. C’est lui, et pas un autre.', en: 'Find the flashing green dot. That one, and no other.' },
      { fr: 'D’abord on monte, ensuite on va à droite. Dis-le avec moi.', en: 'First we go up, then we go right. Say it with me.' },
      { fr: 'Le chien fait exactement ce que disent les flèches, rien de plus.', en: 'The dog does exactly what the arrows say, nothing more.' },
    ],
    ask: [
      { fr: 'Pourquoi le point rose n’a pas marché ?', en: 'Why did the pink dot not work?' },
      { fr: 'Après le 3, on touche quel point ?', en: 'After 3, which dot do we tap?' },
      { fr: 'Si on met ➡️ en premier, le chien va où ?', en: 'If we put ➡️ first, where does the dog go?' },
      { fr: 'Combien de flèches il a fallu ? Combien d’étoiles on a eues ?', en: 'How many arrows did we need? How many stars did we get?' },
    ],
    pitfalls: [
      { trap: { fr: 'Sur les points, l’enfant touche le point 5 avant le 2 : il devient rose et fait un bruit.', en: 'On the dots, the child taps dot 5 before dot 2: it turns pink and makes a sound.' },
        fix: { fr: 'Le copilote dit le numéro avant, le pilote cherche le point vert. Un seul point clignote, c’est lui.', en: 'The co-pilot says the number first, the pilot looks for the green dot. Only one dot flashes, that is the one.' } },
      { trap: { fr: 'Six flèches, c’est long : le pilote perd le compte au milieu.', en: 'Six arrows is long: the pilot loses count halfway.' },
        fix: { fr: 'Faites deux pilotes : le premier range les 3 ⬆️, le second les 3 ➡️. Un troisième appuie sur Go.', en: 'Use two pilots: the first lines up the 3 ⬆️, the second the 3 ➡️. A third presses Go.' } },
      { trap: { fr: 'Le chien part pendant que le pilote parle encore : quelqu’un a touché Go trop tôt.', en: 'The dog sets off while the pilot is still talking: someone tapped Go too early.' },
        fix: { fr: 'Le bouton ⏹ Stop arrête le chien et garde les flèches. Puis on finit de ranger et on relance.', en: 'The ⏹ Stop button stops the dog and keeps the arrows. Then finish lining up and run again.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : attraper un poisson, un seul, et se faire applaudir. Sur le chien, l’enfant appuie seulement sur Go.', en: '🌱 Age 3: catch one fish, just one, and get applause. On the dog, the child only presses Go.' },
      beg: { fr: '🌟 MS : relier 3 ou 4 points en disant le numéro avant. Sur le chien, ranger les 3 ⬆️ ; l’adulte ajoute les ➡️.', en: '🌟 Age 4: join 3 or 4 dots saying the number first. On the dog, line up the 3 ⬆️; the adult adds the ➡️.' },
      pro: { fr: '🏆 GS : les 10 points sans erreur. Sur le chien, dire les 6 flèches avant de toucher et prédire les 3 étoiles.', en: '🏆 Age 5: all 10 dots without a mistake. On the dog, say all 6 arrows before touching and predict the 3 stars.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant vise le poisson et touche une seule fois.', en: 'I see the child aim at the fish and tap once.' },
      beg: { fr: 'Je vois que l’enfant cherche le point vert avant de toucher.', en: 'I see the child look for the green dot before tapping.' },
      pro: { fr: 'Je vois que l’enfant dit « trois fois monte, trois fois droite » avant de commencer.', en: 'I see the child say “three times up, three times right” before starting.' },
      warn: { fr: 'Je vois que l’enfant remet des flèches au hasard après un échec : on retire tout avec Recommencer et on reprend au sol.', en: 'I see the child add arrows at random after a failure: clear everything with Reset and go back to the floor path.' },
    },
    unplugged: {
      id: 'ch8-s1:a',
      bridge: { fr: 'Le maître montre une carte, le robot fait un pas : c’est le chien qui lit ses flèches une par une. On refait le L du tableau sur le quadrillage au sol.', en: 'The master shows a card, the robot takes one step: that is the dog reading its arrows one by one. Redo the board’s L on the floor grid.' },
    },
    noSound: {
      fr: 'Le vérificateur 👀 compte les poissons à voix haute jusqu’à 5. Sur les points, toute la classe dit le numéro. Sur le chien, on dit « pas » à chaque case, et « Bravo ! » à l’arrivée.',
      en: 'The checker 👀 counts the fish aloud up to 5. On the dots, the whole class says the number. On the dog, say “step” at each square, and “Well done!” at the end.',
    },
    vocab: [
      { word: { fr: 'Cliquer', en: 'Click' }, gesture: { fr: 'L’index tape une fois dans la paume', en: 'The index taps once in the palm' } },
      { word: { fr: 'Dans l’ordre', en: 'In order' }, gesture: { fr: 'On avance la main par à-coups, un pas à la fois', en: 'Move your hand forward in little jumps' } },
      { word: { fr: 'Droite ➡️', en: 'Right ➡️' }, gesture: { fr: 'Le bras avec la gommette se tend sur le côté', en: 'The sticker arm stretches out to the side' } },
    ],
    tips: {
      a: { fr: 'Le poisson saute de place toutes les 1,3 s : dites « vise… touche ! » pour donner le rythme.', en: 'The fish jumps to a new spot every 1.3 s: say “aim… tap!” to set the rhythm.' },
      b: { fr: 'Les 10 points forment une étoile qui se colorie en jaune à la fin : gardez la surprise.', en: 'The 10 dots form a star that fills in yellow at the end: keep the surprise.' },
      c: { fr: 'Six flèches pour trois étoiles : ⬆️⬆️⬆️ puis ➡️➡️➡️ ; ➡️➡️➡️ puis ⬆️⬆️⬆️ marche aussi, laissez les GS le découvrir.', en: 'Six arrows for three stars: ⬆️⬆️⬆️ then ➡️➡️➡️; ➡️➡️➡️ then ⬆️⬆️⬆️ works too, let the 5-year-olds discover it.' },
    },
    closing: {
      fr: 'Aujourd’hui on a cliqué sur un poisson et sur des points dans l’ordre, et le chien a monté puis tourné à droite.',
      en: 'Today we clicked on a fish and on dots in order, and the dog went up and then right.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a appris à cliquer : attraper un poisson qui bouge et relier des points dans l’ordre pour dessiner une étoile. Il a conduit un chien avec six flèches : trois « monte », trois « droite ». À la maison, jouez à « d’abord… ensuite… » en rangeant les chaussures.',
      en: 'Today, your child learnt to click: catching a moving fish and joining dots in order to draw a star. They led a dog with six arrows: three “up”, three “right”. At home, play “first… then…” while putting away the shoes.',
    },
  },

  // ─── s4 · Clic gauche, clic droit ─────────────────────────────────────────
  'ch1-s4': {
    concept: 'tool',
    also: ['condition', 'sequence'],
    duration: 30,
    essential: {
      fr: 'Les enfants distinguent la main gauche et la main droite, puis le clic gauche et le clic droit : sur le tableau, un appui court pour le poisson, un appui long pour le singe. Le chien fait un chemin de sept flèches.',
      en: 'Children tell left hand from right hand, then left click from right click: on the board, a short tap for the fish, a long press for the monkey. The dog follows a seven-arrow path.',
    },
    setup: [
      { fr: 'Testez 🔊 : le « Bravo ! » n’arrive que quand le poisson ET le singe ont leur ✅.', en: 'Test 🔊: “Well done!” only comes when the fish AND the monkey have their ✅.' },
      { fr: 'Essayez vous-même l’appui long sur le singe au tableau : comptez « un, deux » sans bouger le doigt.', en: 'Try the long press on the monkey on the board yourself: count “one, two” without moving your finger.' },
      { fr: 'Une gommette rouge par enfant et les deux cartes 🐟 🐒 dans la poche.', en: 'One red sticker per child and the two cards 🐟 🐒 in your pocket.' },
      { fr: 'Posez la vraie souris sur la table : le bouton gauche et le bouton droit se montrent avec deux gommettes.', en: 'Put the real mouse on the table: show the left and right buttons with two stickers.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel d’ouverture, puis gommette rouge sur la main droite de chacun.', en: 'Opening ritual, then a red sticker on everyone’s right hand.' } },
      { min: 5, what: { fr: 'Main gauche, main droite : carte 🐟 = main gauche tape la table, carte 🐒 = main droite.', en: 'Left hand, right hand: 🐟 card = left hand taps the table, 🐒 card = right hand.' }, act: 'w' },
      { min: 7, what: { fr: 'Entraînement au clic : appui court sur le poisson, appui long sur le singe.', en: 'Click training: short tap on the fish, long press on the monkey.' }, act: 'a' },
      { min: 5, what: { fr: 'Le puzzle des ombres : on touche l’image, puis son ombre.', en: 'The shadow puzzle: tap the picture, then its shadow.' }, act: 'b' },
      { min: 7, what: { fr: 'Le chien : 3 ⬆️ puis 4 ➡️ jusqu’au poulet 🍗. Deux pilotes se partagent les flèches.', en: 'The dog: 3 ⬆️ then 4 ➡️ to the chicken 🍗. Two pilots share the arrows.' }, act: 'c' },
      { min: 3, what: { fr: 'Bilan « gauche court, droit long » et « Robot, va dormir ! ».', en: 'Wrap-up “left short, right long” and “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 : fait le clic. Copilote 🗣️ : dit « court » ou « long » avant. Ordinateurs 🤖 : tapent la table avec la bonne main (gauche pour 🐟, droite pour 🐒). Vérificateur 👀 : regarde le ✅ apparaître et le dit.',
      en: 'Pilot 🎮: does the click. Co-pilot 🗣️: says “short” or “long” first. Computers 🤖: tap the table with the right hand (left for 🐟, right for 🐒). Checker 👀: watches the ✅ appear and says so.',
    },
    say: [
      { fr: 'La main avec la gommette, c’est ta main droite.', en: 'The hand with the sticker is your right hand.' },
      { fr: 'Pour le poisson, tu touches vite. Pour le singe, tu appuies et tu comptes « un, deux ».', en: 'For the fish, you tap quickly. For the monkey, you press and count “one, two”.' },
      { fr: 'Touche l’image d’abord, ensuite son ombre.', en: 'Tap the picture first, then its shadow.' },
      { fr: 'Le chien fait ce que tu dis. Dis-le, puis touche.', en: 'The dog does what you say. Say it, then tap.' },
    ],
    ask: [
      { fr: 'Si je lève le poisson, quelle main tape la table ?', en: 'If I raise the fish, which hand taps the table?' },
      { fr: 'Qu’est-ce que la machine a fait quand tu as appuyé court sur le singe ?', en: 'What did the machine do when you tapped the monkey quickly?' },
      { fr: 'À quoi tu reconnais l’ombre du lapin ?', en: 'How do you recognise the rabbit’s shadow?' },
      { fr: 'Après les 3 « monte », il reste combien de « droite » ?', en: 'After the 3 “ups”, how many “rights” are left?' },
    ],
    pitfalls: [
      { trap: { fr: 'L’appui long ne marche pas : le doigt glisse ou l’enfant lâche trop tôt.', en: 'The long press does not work: the finger slides or the child lets go too soon.' },
        fix: { fr: 'Posez votre main sur son poignet et comptez ensemble « un, deux » à voix haute. Le doigt ne bouge pas.', en: 'Put your hand on their wrist and count “one, two” aloud together. The finger does not move.' } },
      { trap: { fr: 'L’enfant touche l’ombre en premier : les images clignotent en violet.', en: 'The child taps the shadow first: the pictures flash purple.' },
        fix: { fr: 'C’est la machine qui montre où toucher d’abord. Dites : « elle te dit : l’image avant l’ombre ».', en: 'That is the machine showing where to tap first. Say: “it tells you: the picture before the shadow”.' } },
      { trap: { fr: 'Sept flèches : la boîte se remplit et le pilote ne voit plus où il en est.', en: 'Seven arrows: the box fills up and the pilot loses track.' },
        fix: { fr: 'Le vérificateur compte à voix haute les flèches dans la boîte : « une, deux, trois… sept ». Puis Go.', en: 'The checker counts the arrows in the box aloud: “one, two, three… seven”. Then Go.' } },
      { trap: { fr: 'Un enfant fait un clic droit sur le poisson : bruit d’erreur, rien ne se passe.', en: 'A child right-clicks the fish: error sound, nothing happens.' },
        fix: { fr: 'Parfait pour comprendre : « le poisson veut le clic court ». On recommence avec un tap rapide.', en: 'Perfect for understanding: “the fish wants the short click”. Try again with a quick tap.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : seulement le poisson, un appui court, et la gommette sur la main. L’adulte fait le singe en montrant « un, deux ».', en: '🌱 Age 3: only the fish, one short tap, and the sticker on the hand. The adult does the monkey showing “one, two”.' },
      beg: { fr: '🌟 MS : poisson puis singe en disant « court » ou « long » avant. Deux paires du puzzle.', en: '🌟 Age 4: fish then monkey, saying “short” or “long” first. Two pairs of the puzzle.' },
      pro: { fr: '🏆 GS : les 4 paires du puzzle sans erreur, et les 7 flèches du chien dites d’avance : 3 « monte », 4 « droite ».', en: '🏆 Age 5: all 4 puzzle pairs with no mistake, and the dog’s 7 arrows said in advance: 3 “up”, 4 “right”.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant lève la main avec la gommette quand je dis « droite ».', en: 'I see the child raise the sticker hand when I say “right”.' },
      beg: { fr: 'Je vois que l’enfant garde le doigt appuyé sur le singe jusqu’au ✅.', en: 'I see the child keep the finger pressed on the monkey until the ✅.' },
      pro: { fr: 'Je vois que l’enfant annonce « trois monte, quatre droite » et compte les flèches dans la boîte.', en: 'I see the child announce “three up, four right” and count the arrows in the box.' },
      warn: { fr: 'Je vois que l’enfant confond encore ses deux mains : on garde la gommette toute la journée et on reprend le jeu au tapis.', en: 'I see the child still mix up their two hands: keep the sticker all day and replay the mat game.' },
    },
    unplugged: {
      id: 'ch8-s3:d',
      bridge: { fr: 'Carte rouge alors on saute, carte bleue alors on tape des mains : c’est la même règle que poisson alors clic gauche, singe alors clic droit.', en: 'Red card then we jump, blue card then we clap: it is the same rule as fish then left click, monkey then right click.' },
    },
    noSound: {
      fr: 'Le vérificateur 👀 annonce le ✅ dès qu’il apparaît sur le poisson ou le singe. Sur le puzzle, les ordinateurs disent le nom de l’animal choisi. Sur le chien, on compte les pas ensemble.',
      en: 'The checker 👀 announces the ✅ as soon as it appears on the fish or the monkey. On the puzzle, the computers say the name of the chosen animal. On the dog, count the steps together.',
    },
    vocab: [
      { word: { fr: 'Clic gauche', en: 'Left click' }, gesture: { fr: 'La main sans gommette tape une fois, vite', en: 'The hand without the sticker taps once, fast' } },
      { word: { fr: 'Clic droit = appui long', en: 'Right click = long press' }, gesture: { fr: 'La main avec la gommette appuie et on compte « un, deux »', en: 'The sticker hand presses and we count “one, two”' } },
      { word: { fr: 'L’ombre', en: 'The shadow' }, gesture: { fr: 'On met la main devant la lampe et on montre le mur', en: 'Put a hand in front of the lamp and point at the wall' } },
    ],
    tips: {
      w: { fr: 'Collez la gommette sur le dos de la main droite, bien visible du tableau quand l’enfant pilote.', en: 'Stick the sticker on the back of the right hand, clearly visible from the board when the child pilots.' },
      a: { fr: 'Sur le tableau, appui court = clic gauche, appui long = clic droit ; aucun menu ne surgit, vous pouvez laisser faire.', en: 'On the board, short tap = left click, long press = right click; no menu pops up, you can let them try.' },
      b: { fr: 'Pas de glisser-déposer : on touche l’image, puis l’ombre. Les ombres sont noires, les images en couleur.', en: 'No drag and drop: tap the picture, then the shadow. Shadows are black, pictures are in colour.' },
      c: { fr: 'Sept flèches vers le poulet 🍗 : 3 ⬆️ + 4 ➡️ donnent 3 étoiles ; avec 9 flèches on n’en a plus que 2.', en: 'Seven arrows to the chicken 🍗: 3 ⬆️ + 4 ➡️ give 3 stars; with 9 arrows you only get 2.' },
    },
    closing: {
      fr: 'Aujourd’hui on a trouvé notre main droite, et on a appris le clic court pour le poisson et le clic long pour le singe.',
      en: 'Today we found our right hand, and we learnt the short click for the fish and the long click for the monkey.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a une gommette sur la main droite : il a appris à distinguer gauche et droite. Sur le tableau, il a fait un appui court (clic gauche) pour le poisson et un appui long (clic droit) pour le singe. À la maison, jouez à « main gauche, main droite » à table.',
      en: 'Today, your child has a sticker on their right hand: they learnt to tell left from right. On the board, they did a short tap (left click) for the fish and a long press (right click) for the monkey. At home, play “left hand, right hand” at the table.',
    },
  },

  // ─── s5 · Le double-clic ──────────────────────────────────────────────────
  'ch1-s5': {
    concept: 'tool',
    also: ['sequence'],
    duration: 25,
    essential: {
      fr: 'Les enfants apprennent le double-clic : deux touchers très rapides sur le ballon, et c’est le but ! Puis le chien contourne un premier mur 🧱 pour atteindre l’os, avec huit flèches.',
      en: 'Children learn the double click: two very quick taps on the ball, and it is a goal! Then the dog goes around a first wall 🧱 to reach the bone, with eight arrows.',
    },
    setup: [
      { fr: 'Testez 🔊 : un double-tap rapide sur le ballon doit faire dire « But ! ».', en: 'Test 🔊: a quick double tap on the ball must make it say “Goal!”.' },
      { fr: 'Entraînez-vous : deux touchers en moins d’une demi-seconde, sinon le ballon ne part pas.', en: 'Practise: two taps in under half a second, or the ball does not move.' },
      { fr: 'Ouvrez le chien (activité b) : repérez le mur gris 🧱 au milieu de la grille.', en: 'Open the dog (activity b): spot the grey wall 🧱 in the middle of the grid.' },
      { fr: 'Posez au sol une boîte « mur » sur le quadrillage pour rejouer le chemin avec le corps.', en: 'Put a “wall” box on the floor grid to replay the path with the body.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel d’ouverture, puis « toc-toc » : on frappe deux coups vite sur les genoux.', en: 'Opening ritual, then “knock-knock”: two quick taps on the knees.' } },
      { min: 7, what: { fr: 'Le penalty : double-tap sur le ballon, il vole dans le but. Quatre ou cinq pilotes.', en: 'The penalty: double tap the ball, it flies into the goal. Four or five pilots.' }, act: 'a' },
      { min: 3, what: { fr: 'Au sol : on regarde le mur, on cherche un chemin qui passe à côté.', en: 'On the floor: look at the wall, find a path that goes around it.' } },
      { min: 9, what: { fr: 'Le chien et le mur : 4 ⬆️ puis 4 ➡️ (ou l’inverse), Go, on vérifie.', en: 'The dog and the wall: 4 ⬆️ then 4 ➡️ (or the reverse), Go, check.' }, act: 'b' },
      { min: 3, what: { fr: 'Bilan « deux fois vite = double-clic » et « Robot, va dormir ! ».', en: 'Wrap-up “twice fast = double click” and “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 : tire le penalty ou range les flèches. Copilote 🗣️ : dit « toc-toc » pour donner le rythme, puis la flèche. Ordinateurs 🤖 : frappent « toc-toc » sur les genoux. Vérificateur 👀 : crie « But ! » ou dit si le chien a touché le mur.',
      en: 'Pilot 🎮: takes the penalty or lines up the arrows. Co-pilot 🗣️: says “knock-knock” to set the rhythm, then the arrow. Computers 🤖: tap “knock-knock” on their knees. Checker 👀: shouts “Goal!” or says whether the dog hit the wall.',
    },
    say: [
      { fr: 'Toc-toc ! Deux fois, très vite, au même endroit.', en: 'Knock-knock! Twice, very fast, in the same place.' },
      { fr: 'Si tu attends entre les deux, le ballon reste là.', en: 'If you wait between the two, the ball stays there.' },
      { fr: 'Le mur, on ne passe pas dedans. On passe à côté.', en: 'The wall, we do not go through it. We go around.' },
      { fr: 'Dis ton chemin avant de toucher : monte, monte, monte, monte, droite…', en: 'Say your path before touching: up, up, up, up, right…' },
    ],
    ask: [
      { fr: 'Pourquoi le ballon n’est pas parti la première fois ?', en: 'Why did the ball not move the first time?' },
      { fr: 'Le mur est où ? Montre-le. Et le chien, il va passer par où ?', en: 'Where is the wall? Point at it. And the dog, which way will it go?' },
      { fr: 'Si le chien monte d’abord, est-ce qu’il touche le mur ?', en: 'If the dog goes up first, does it hit the wall?' },
      { fr: 'Est-ce qu’on peut trouver un chemin avec moins de flèches ?', en: 'Can we find a path with fewer arrows?' },
    ],
    pitfalls: [
      { trap: { fr: 'Deux touchers trop lents : « tap… tap », le ballon ne bouge pas.', en: 'Two taps too slow: “tap… tap”, the ball does not move.' },
        fix: { fr: 'Frappez « toc-toc » sur la table à la bonne vitesse et faites-le imiter dans l’air avant le tableau.', en: 'Knock “knock-knock” on the table at the right speed and have them copy it in the air before the board.' } },
      { trap: { fr: 'Le chien fonce dans le mur : il s’arrête, tête 😟, « Essaie encore ! ».', en: 'The dog runs into the wall: it stops, face 😟, “Try again!”.' },
        fix: { fr: 'On garde les flèches, on cherche celle qui va dans le mur, on la touche pour l’enlever. Puis Go.', en: 'Keep the arrows, find the one that goes into the wall, tap it to remove it. Then Go.' } },
      { trap: { fr: 'Huit flèches : l’attente est longue et les enfants au tapis décrochent.', en: 'Eight arrows: the wait is long and the children on the mat switch off.' },
        fix: { fr: 'Les ordinateurs 🤖 miment chaque flèche pendant que le chien marche : bras en haut, bras à droite.', en: 'The computers 🤖 mime each arrow while the dog walks: arm up, arm to the right.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : l’adulte tient le poignet et dit « toc-toc » : le but est marqué à deux. Sur le chien, l’enfant appuie sur Go.', en: '🌱 Age 3: the adult holds the wrist and says “knock-knock”: the goal is scored together. On the dog, the child presses Go.' },
      beg: { fr: '🌟 MS : le double-tap seul. Sur le chien, ranger les 4 ⬆️ en les disant ; l’adulte ajoute les ➡️.', en: '🌟 Age 4: the double tap alone. On the dog, line up the 4 ⬆️ while saying them; the adult adds the ➡️.' },
      pro: { fr: '🏆 GS : dire les 8 flèches d’avance, prédire si le chien touche le mur, et chercher le chemin avec 3 étoiles.', en: '🏆 Age 5: say the 8 arrows in advance, predict whether the dog hits the wall, and look for the 3-star path.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant tape deux fois de suite sur le ballon, même avec de l’aide.', en: 'I see the child tap twice in a row on the ball, even with help.' },
      beg: { fr: 'Je vois que l’enfant réussit le double-tap seul et rit quand le ballon vole.', en: 'I see the child manage the double tap alone and laugh when the ball flies.' },
      pro: { fr: 'Je vois que l’enfant montre le mur et dit « on passe par là » avant de ranger les flèches.', en: 'I see the child point at the wall and say “we go this way” before lining up the arrows.' },
      warn: { fr: 'Je vois que l’enfant tape très vite partout sur le ballon sans regarder : on revient au « toc-toc » sur les genoux.', en: 'I see the child tap the ball very fast without looking: go back to “knock-knock” on the knees.' },
    },
    unplugged: {
      id: 'ch8-s1:b',
      bridge: { fr: 'Posez une boîte « mur » sur le quadrillage au sol. Les enfants alignent les cartes flèches pour l’éviter, puis un enfant suit le parcours. Si on rate le trésor, on corrige.', en: 'Put a “wall” box on the floor grid. The children line up the arrow cards to avoid it, then a child follows the path. If we miss the treasure, we fix it.' },
    },
    noSound: {
      fr: 'Le vérificateur 👀 crie « But ! » quand le ballon arrive dans le filet. Sur le chien, la classe dit « toc » à chaque pas et « aïe » si le chien touche le mur.',
      en: 'The checker 👀 shouts “Goal!” when the ball reaches the net. On the dog, the class says “tock” at each step and “ouch” if the dog hits the wall.',
    },
    vocab: [
      { word: { fr: 'Double-clic', en: 'Double click' }, gesture: { fr: 'L’index frappe deux coups vite dans la paume : « toc-toc »', en: 'The index knocks twice fast in the palm: “knock-knock”' } },
      { word: { fr: 'Le mur', en: 'The wall' }, gesture: { fr: 'Les deux mains à plat devant soi, on ne passe pas', en: 'Both hands flat in front, we do not pass' } },
      { word: { fr: 'Contourner', en: 'Go around' }, gesture: { fr: 'La main fait un détour autour du genou', en: 'The hand goes on a detour around the knee' } },
    ],
    tips: {
      a: { fr: 'Le premier tap fait un petit bruit, le second très vite fait partir le ballon : dites « toc-toc » pour donner le tempo.', en: 'The first tap makes a small sound, the second very fast one sends the ball off: say “knock-knock” to set the tempo.' },
      b: { fr: 'Le mur est au centre : 4 ⬆️ puis 4 ➡️ passent à côté ; 8 flèches = 3 étoiles ⭐⭐⭐, la limite est 10.', en: 'The wall is in the centre: 4 ⬆️ then 4 ➡️ go around it; 8 arrows = 3 stars ⭐⭐⭐, the limit is 10.' },
    },
    closing: {
      fr: 'Aujourd’hui on a fait « toc-toc », le double-clic, pour marquer un but, et le chien a contourné son premier mur.',
      en: 'Today we did “knock-knock”, the double click, to score a goal, and the dog went around its first wall.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a appris le double-clic : deux touchers très rapides, « toc-toc », pour tirer un penalty. Il a aussi conduit un chien autour d’un mur avec huit flèches. À la maison, jouez à « toc-toc » sur la table : deux coups vite, pas trois.',
      en: 'Today, your child learnt the double click: two very fast taps, “knock-knock”, to take a penalty. They also led a dog around a wall with eight arrows. At home, play “knock-knock” on the table: two quick knocks, not three.',
    },
  },

  // ─── s6 · L’ordinateur est partout ────────────────────────────────────────
  'ch1-s6': {
    concept: 'tool',
    also: ['sequence'],
    duration: 30,
    essential: {
      fr: 'Les enfants découvrent que l’ordinateur travaille à l’école, à l’hôpital, à l’aéroport… Puis ils appuient sur les lettres du clavier, comptent des ordinateurs et tapent le nombre. Le chien monte tout droit entre deux murs.',
      en: 'Children discover that computers work at school, at the hospital, at the airport… Then they press keyboard letters, count computers and type the number. The dog goes straight up between two walls.',
    },
    setup: [
      { fr: 'Testez 🔊 : appuyez sur la lettre A du clavier à l’écran, la voix doit la dire.', en: 'Test 🔊: press the letter A on the on-screen keyboard, the voice must say it.' },
      { fr: 'Branchez le vrai clavier si possible : les touches marchent aussi dans les jeux.', en: 'Plug in the real keyboard if possible: its keys work in the games too.' },
      { fr: 'Ouvrez « Compte les ordinateurs » : les 💻 changent de nombre à chaque tour, de 2 à 8.', en: 'Open “Count the computers”: the 💻 change number each round, from 2 to 8.' },
      { fr: 'Préparez les initiales de la classe : chaque enfant connaît la première lettre de son prénom.', en: 'Prepare the class initials: each child knows the first letter of their first name.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel d’ouverture, puis on pianote sur les genoux : « le clavier ».', en: 'Opening ritual, then tap on the knees: “the keyboard”.' } },
      { min: 6, what: { fr: 'L’ordinateur dans la vie : on touche un lieu, on écoute, on lève la main si on y est allé.', en: 'Computers in real life: tap a place, listen, raise a hand if you have been there.' }, act: 'a' },
      { min: 6, what: { fr: 'Bébé clavier : chaque pilote appuie sur la lettre de son prénom, on l’entend.', en: 'Baby keyboard: each pilot presses the letter of their first name, we hear it.' }, act: 'b' },
      { min: 6, what: { fr: 'Compte les ordinateurs : la classe compte tout haut, le pilote tape le nombre.', en: 'Count the computers: the class counts aloud, the pilot types the number.' }, act: 'd' },
      { min: 6, what: { fr: 'Le chien entre les murs : 4 ⬆️ tout droit, Go. Le plus court chemin du chapitre.', en: 'The dog between the walls: 4 ⬆️ straight up, Go. The shortest path of the chapter.' }, act: 'c' },
      { min: 3, what: { fr: 'Bilan « l’ordinateur est partout » et « Robot, va dormir ! ».', en: 'Wrap-up “computers are everywhere” and “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 : touche le lieu, la lettre ou le chiffre. Copilote 🗣️ : dit la lettre ou le nombre avant. Ordinateurs 🤖 : pianotent sur les genoux et comptent les 💻 avec le doigt. Vérificateur 👀 : dit si la grande lettre est la bonne.',
      en: 'Pilot 🎮: taps the place, the letter or the number. Co-pilot 🗣️: says the letter or the number first. Computers 🤖: tap on their knees and count the 💻 with a finger. Checker 👀: says whether the big letter is the right one.',
    },
    say: [
      { fr: 'À l’hôpital, un ordinateur regarde dans le corps. Qui y est déjà allé ?', en: 'At the hospital, a computer looks inside the body. Who has been there?' },
      { fr: 'Appuie sur une lettre : elle devient grande et elle parle.', en: 'Press a letter: it becomes big and it speaks.' },
      { fr: 'On compte ensemble avec le doigt : un, deux, trois… Puis tu tapes le nombre.', en: 'We count together with a finger: one, two, three… Then you type the number.' },
      { fr: 'Deux murs, un couloir : le chien monte tout droit.', en: 'Two walls, one corridor: the dog goes straight up.' },
    ],
    ask: [
      { fr: 'Où as-tu déjà vu un ordinateur en dehors de l’école ?', en: 'Where have you already seen a computer outside school?' },
      { fr: 'Quelle lettre commence ton prénom ? Trouve-la sur le clavier.', en: 'Which letter starts your first name? Find it on the keyboard.' },
      { fr: 'Combien d’ordinateurs ? Compte encore pour être sûr.', en: 'How many computers? Count again to be sure.' },
      { fr: 'Est-ce que le chien a besoin de « droite » cette fois ?', en: 'Does the dog need “right” this time?' },
    ],
    pitfalls: [
      { trap: { fr: 'Le pilote appuie sur toutes les lettres à la suite : la machine parle sans arrêt.', en: 'The pilot presses all the letters one after the other: the machine talks non-stop.' },
        fix: { fr: 'Une lettre, on écoute jusqu’au bout (règle 👂), puis la suivante. Le copilote donne la lettre.', en: 'One letter, listen to the end (rule 👂), then the next. The co-pilot gives the letter.' } },
      { trap: { fr: 'Sur le comptage, l’enfant tape un chiffre sans compter : « Compte encore ! ».', en: 'On counting, the child types a number without counting: “Count again!”.' },
        fix: { fr: 'Le pilote touche chaque 💻 du doigt en comptant tout haut avec la classe, puis seulement le chiffre.', en: 'The pilot touches each 💻 with a finger, counting aloud with the class, then only types the number.' } },
      { trap: { fr: 'Le chien : un pilote ajoute ➡️ par habitude et le chien tape dans le mur.', en: 'The dog: a pilot adds ➡️ out of habit and the dog hits the wall.' },
        fix: { fr: 'Montrez le couloir entre les deux 🧱 : « ici, seulement monte ». On enlève la flèche en trop en la touchant.', en: 'Show the corridor between the two 🧱: “here, only up”. Remove the extra arrow by tapping it.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : toucher un lieu et écouter ; appuyer sur une seule lettre, celle de son prénom. Pas de comptage.', en: '🌱 Age 3: tap a place and listen; press one single letter, the one of their first name. No counting.' },
      beg: { fr: '🌟 MS : compter jusqu’à 5 ordinateurs avec le doigt et taper le chiffre. Sur le chien, dire « monte » 4 fois.', en: '🌟 Age 4: count up to 5 computers with a finger and type the number. On the dog, say “up” 4 times.' },
      pro: { fr: '🏆 GS : compter jusqu’à 8 sans toucher, taper le chiffre seul, et prédire « 4 flèches, 3 étoiles » avant Go.', en: '🏆 Age 5: count up to 8 without touching, type the number alone, and predict “4 arrows, 3 stars” before Go.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant écoute la carte jusqu’au bout avant d’en toucher une autre.', en: 'I see the child listen to the card to the end before tapping another.' },
      beg: { fr: 'Je vois que l’enfant touche chaque 💻 en comptant, puis cherche le chiffre.', en: 'I see the child touch each 💻 while counting, then look for the number.' },
      pro: { fr: 'Je vois que l’enfant trouve la lettre de son prénom sans aide sur le clavier.', en: 'I see the child find the letter of their first name on the keyboard without help.' },
      warn: { fr: 'Je vois que l’enfant tape des chiffres au hasard jusqu’au « Bravo » : on revient au comptage avec les doigts.', en: 'I see the child type random numbers until “Well done”: go back to counting with fingers.' },
    },
    unplugged: {
      id: 'ch8-s3:c',
      bridge: { fr: 'Le clavier géant au sol : on annonce une lettre, un enfant saute dessus. Puis on la retrouve sur le clavier du tableau, à la même place.', en: 'The giant floor keyboard: call a letter, a child jumps on it. Then find it on the board keyboard, in the same place.' },
    },
    noSound: {
      fr: 'Vous lisez chaque lieu à voix haute. Sur le clavier, la grande lettre s’affiche : le vérificateur 👀 la nomme. Sur le comptage, la classe compte tout haut ; le chiffre juste fait disparaître les 💻.',
      en: 'You read each place aloud. On the keyboard, the big letter shows: the checker 👀 names it. On counting, the class counts aloud; the right number makes the 💻 disappear.',
    },
    vocab: [
      { word: { fr: 'Une touche', en: 'A key' }, gesture: { fr: 'L’index appuie une fois sur le genou', en: 'The index presses once on the knee' } },
      { word: { fr: 'Une lettre', en: 'A letter' }, gesture: { fr: 'On dessine la première lettre de son prénom dans l’air', en: 'Draw the first letter of your first name in the air' } },
      { word: { fr: 'Le nombre', en: 'The number' }, gesture: { fr: 'On montre autant de doigts', en: 'Show as many fingers' } },
    ],
    tips: {
      a: { fr: 'Commencez par 🏫 l’école et finissez par 🏠 la maison : les enfants se reconnaissent et parlent.', en: 'Start with 🏫 school and finish with 🏠 home: children recognise themselves and talk.' },
      b: { fr: 'Le clavier à l’écran est en QWERTY comme le vrai : montrez que le A est au même endroit sur les deux.', en: 'The on-screen keyboard is QWERTY like the real one: show that A is in the same place on both.' },
      d: { fr: 'Quatre tours suffisent pour gagner ; les 💻 vont de 2 à 8, le pavé de chiffres va jusqu’à 9.', en: 'Four rounds are enough to win; the 💻 go from 2 to 8, the number pad goes up to 9.' },
      c: { fr: 'Niveau couloir : 4 ⬆️ seulement, c’est le niveau parfait pour un pilote qui n’a pas encore gagné 3 étoiles.', en: 'Corridor level: only 4 ⬆️, the perfect level for a pilot who has not yet won 3 stars.' },
    },
    closing: {
      fr: 'Aujourd’hui on a vu que l’ordinateur est partout, on a fait parler les lettres et on a tapé un nombre.',
      en: 'Today we saw that computers are everywhere, we made the letters talk and we typed a number.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a cherché où l’on voit des ordinateurs : école, hôpital, aéroport, maison. Il a appuyé sur la lettre de son prénom sur le clavier et a compté des ordinateurs avant de taper le nombre. À la maison, cherchez ensemble les ordinateurs cachés : la caisse du magasin, le téléphone…',
      en: 'Today, your child looked for where we see computers: school, hospital, airport, home. They pressed the letter of their first name on the keyboard and counted computers before typing the number. At home, look together for hidden computers: the shop till, the phone…',
    },
  },

  // ─── s7 · Les touches des chiffres ────────────────────────────────────────
  'ch1-s7': {
    concept: 'sequence',
    also: ['tool'],
    duration: 25,
    essential: {
      fr: 'Les enfants lisent le dé et tapent le chiffre sur le pavé. Puis le chien relève le grand défi du chapitre : deux murs, neuf flèches, un chemin dit à l’avance par toute la classe.',
      en: 'Children read the dice and type the number on the pad. Then the dog takes on the chapter’s big challenge: two walls, nine arrows, a path said in advance by the whole class.',
    },
    setup: [
      { fr: 'Testez 🔊 : un bon chiffre fait « tap », un mauvais fait dire « Non, regarde le dé ! ».', en: 'Test 🔊: a right number goes “tap”, a wrong one says “No, look at the dice!”.' },
      { fr: 'Apportez un vrai gros dé en mousse pour lancer sur le tapis avant le tableau.', en: 'Bring a real big foam dice to throw on the mat before the board.' },
      { fr: 'Ouvrez le chien (activité b) : deux murs 🧱 en diagonale, l’os tout en haut à droite.', en: 'Open the dog (activity b): two walls 🧱 on a diagonal, the bone at the top right.' },
      { fr: 'Les 4 cartes flèches au tableau, à hauteur d’enfant : on y touchera pour dire le chemin.', en: 'The 4 arrow cards on the board, at child height: we will point at them to say the path.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel d’ouverture, puis on lance le dé en mousse : on montre le nombre avec les doigts.', en: 'Opening ritual, then throw the foam dice: show the number with fingers.' } },
      { min: 7, what: { fr: 'Le dé : le pilote lit le dé de l’écran et tape le chiffre. Cinq bonnes réponses.', en: 'The dice: the pilot reads the on-screen dice and types the number. Five right answers.' }, act: 'a' },
      { min: 3, what: { fr: 'On dit le chemin ensemble en montrant les cartes : 4 « monte », 5 « droite ».', en: 'Say the path together while pointing at the cards: 4 “up”, 5 “right”.' } },
      { min: 9, what: { fr: 'Le grand défi : deux pilotes rangent les 9 flèches, un troisième appuie sur Go.', en: 'The big challenge: two pilots line up the 9 arrows, a third presses Go.' }, act: 'b' },
      { min: 3, what: { fr: 'Bilan du chapitre et « Robot, va dormir ! ».', en: 'Chapter wrap-up and “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 : tape le chiffre ou range les flèches. Copilote 🗣️ : dit le chiffre du dé ou la flèche avant. Ordinateurs 🤖 : montrent le nombre avec les doigts, puis miment chaque pas. Vérificateur 👀 : compte les flèches dans la boîte et annonce les étoiles.',
      en: 'Pilot 🎮: types the number or lines up the arrows. Co-pilot 🗣️: says the dice number or the arrow first. Computers 🤖: show the number with fingers, then mime each step. Checker 👀: counts the arrows in the box and announces the stars.',
    },
    say: [
      { fr: 'Regarde les points du dé. Compte-les avec le doigt, puis tape le chiffre.', en: 'Look at the dots on the dice. Count them with a finger, then type the number.' },
      { fr: 'Le dé a changé ! Un nouveau nombre, un nouveau chiffre.', en: 'The dice has changed! A new number, a new digit.' },
      { fr: 'Quatre fois monte, cinq fois droite. On le dit tous ensemble avant de toucher.', en: 'Four times up, five times right. We all say it together before touching.' },
      { fr: 'Tu as tout rangé ? Alors Go, et on regarde le chien sans parler.', en: 'All lined up? Then Go, and we watch the dog without a word.' },
    ],
    ask: [
      { fr: 'Combien de points sur le dé ? Montre-le avec tes doigts.', en: 'How many dots on the dice? Show it with your fingers.' },
      { fr: 'Où sont les murs ? Le chien peut monter tout droit ?', en: 'Where are the walls? Can the dog go straight up?' },
      { fr: 'Combien de flèches dans la boîte ? Il en manque ?', en: 'How many arrows in the box? Are any missing?' },
      { fr: 'Qu’est-ce que tu as appris à faire avec un seul doigt depuis le début ?', en: 'What have you learnt to do with one finger since the start?' },
    ],
    pitfalls: [
      { trap: { fr: 'L’enfant confond la face du dé et le chiffre : il tape 3 pour ⚄.', en: 'The child mixes up the dice face and the digit: types 3 for ⚄.' },
        fix: { fr: 'On compte les points du dé à l’écran avec le doigt, tous ensemble, avant de chercher le chiffre.', en: 'Count the dots on the on-screen dice with a finger, all together, before looking for the digit.' } },
      { trap: { fr: 'Neuf flèches : le chien tape dans un mur au milieu du chemin.', en: 'Nine arrows: the dog hits a wall halfway.' },
        fix: { fr: 'Retrouvez la case avec 😟, comptez les flèches faites, enlevez celle qui rentre dans le mur, puis Go.', en: 'Find the square with 😟, count the arrows done, remove the one that goes into the wall, then Go.' } },
      { trap: { fr: 'Plus de 10 flèches : « Plus de place ! Enlève une flèche. »', en: 'More than 10 arrows: “No more room! Remove an arrow.”' },
        fix: { fr: 'C’est le moment de dire « moins de flèches, plus d’étoiles » : on enlève les doublons en les touchant.', en: 'This is the moment to say “fewer arrows, more stars”: remove the duplicates by tapping them.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : lancer le vrai dé, montrer le nombre avec les doigts, et taper le chiffre que l’adulte montre. Sur le chien : Go et applaudir.', en: '🌱 Age 3: throw the real dice, show the number with fingers, and type the digit the adult points at. On the dog: Go and applaud.' },
      beg: { fr: '🌟 MS : lire le dé de 1 à 3 seul, de 4 à 6 avec la classe. Sur le chien, ranger les 4 ⬆️ en les disant.', en: '🌟 Age 4: read the dice from 1 to 3 alone, from 4 to 6 with the class. On the dog, line up the 4 ⬆️ while saying them.' },
      pro: { fr: '🏆 GS : les cinq dés sans erreur. Sur le chien, dire les 9 flèches d’avance et viser les 3 étoiles ⭐⭐⭐.', en: '🏆 Age 5: all five dice without a mistake. On the dog, say the 9 arrows in advance and aim for the 3 stars ⭐⭐⭐.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant montre autant de doigts que de points sur le dé.', en: 'I see the child show as many fingers as dots on the dice.' },
      beg: { fr: 'Je vois que l’enfant trouve le chiffre sur le pavé après avoir compté les points.', en: 'I see the child find the digit on the pad after counting the dots.' },
      pro: { fr: 'Je vois que l’enfant dit « quatre monte, cinq droite » et vérifie la boîte avant Go.', en: 'I see the child say “four up, five right” and check the box before Go.' },
      warn: { fr: 'Je vois que l’enfant tape des chiffres jusqu’à ce que ça marche : on revient au dé en mousse et aux doigts.', en: 'I see the child type digits until it works: go back to the foam dice and fingers.' },
    },
    unplugged: {
      id: 'ch8-s4:b',
      bridge: { fr: 'Passe le message : un enfant invente « monte, monte, droite », le chuchote au suivant… Le dernier le rejoue au tableau avec les flèches. Est-ce le même chemin ?', en: 'Pass the message: a child invents “up, up, right”, whispers it to the next… The last one replays it on the board with the arrows. Is it the same path?' },
    },
    noSound: {
      fr: 'Sur le dé, un bon chiffre fait rebondir le dé et changer la face : le vérificateur 👀 le dit. Un mauvais chiffre affiche « Non, regarde le dé ! » en rose : vous le lisez. Sur le chien, on compte les pas tout haut.',
      en: 'On the dice, a right digit makes the dice bounce and change face: the checker 👀 says so. A wrong digit shows “No, look at the dice!” in pink: you read it. On the dog, count the steps aloud.',
    },
    vocab: [
      { word: { fr: 'Le chiffre', en: 'The digit' }, gesture: { fr: 'On dessine le chiffre dans l’air avec l’index', en: 'Draw the digit in the air with the index' } },
      { word: { fr: 'Le pavé des chiffres', en: 'The number pad' }, gesture: { fr: 'On tape trois touches en ligne sur le genou', en: 'Tap three keys in a row on the knee' } },
      { word: { fr: 'Le programme', en: 'The program' }, gesture: { fr: 'On avance la main par à-coups, un pas à la fois', en: 'Move your hand forward in little jumps' } },
    ],
    tips: {
      a: { fr: 'Le pavé montre seulement 1 à 6 et le dé change à chaque bonne réponse : cinq réussites et c’est le trophée 🏆.', en: 'The pad shows only 1 to 6 and the dice changes at each right answer: five successes and it is the trophy 🏆.' },
      b: { fr: 'Neuf flèches pile pour 3 étoiles : 4 ⬆️ puis 5 ➡️ évitent les deux murs ; c’est le niveau le plus long, deux pilotes.', en: 'Exactly nine arrows for 3 stars: 4 ⬆️ then 5 ➡️ avoid both walls; it is the longest level, use two pilots.' },
    },
    closing: {
      fr: 'Aujourd’hui on a tapé les chiffres du dé, et le chien a fait le plus long chemin du chapitre grâce à toute la classe.',
      en: 'Today we typed the dice numbers, and the dog followed the longest path of the chapter thanks to the whole class.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a lu un dé et tapé le chiffre sur le clavier. Puis toute la classe a dit un chemin de neuf flèches pour que le chien évite deux murs. C’est la fin du chapitre : il sait nommer les parties de l’ordinateur et commander la machine avec un doigt. À la maison, lancez un dé et demandez « combien ? » avec les doigts.',
      en: 'Today, your child read a dice and typed the digit on the keyboard. Then the whole class said a nine-arrow path so the dog could avoid two walls. It is the end of the chapter: they can name the parts of the computer and control the machine with one finger. At home, throw a dice and ask “how many?” with fingers.',
    },
  },
}
