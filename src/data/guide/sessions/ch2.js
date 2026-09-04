// Guide du professeur — chapitre 2 : Je dessine des dessins animés
// Atelier Paint (src/games/PaintStudio.jsx) : pinceau 🖌️, ligne 📏, carré ⬛
// (rectangle plein), cercle ⬭ (rond plein), pot 🪣, gomme 🧽, 3 tailles,
// 10 couleurs, ↩️ Annuler, 🗑️ Effacer, 🖨️ imprimer. Le modèle (emoji + titre)
// s'affiche au-dessus de la toile. Jeux 3 ans : tampons (stamp) et doigt
// arc-en-ciel (scribble), avec un seul bouton 🗑️.

export const CHAPTER = {
  thread: {
    fr: 'Un dessin, c’est une recette : d’abord une forme, ensuite une autre, et puis encore une. On coupe le dessin en petits morceaux et on les pose dans l’ordre. À la fin, on sait dire « comment j’ai fait » et on imprime pour la maison.',
    en: 'A drawing is a recipe: first one shape, then another, and then one more. We cut the picture into small pieces and place them in order. By the end, children can say “how I did it” and print it to take home.',
  },
  concepts: ['decomposition', 'sequence', 'abstraction'],
  domains: [
    { fr: 'Agir, s’exprimer, comprendre à travers les activités artistiques : réaliser une composition en plan à partir de formes.', en: 'Artistic activities: create a flat composition from shapes.' },
    { fr: 'Construire les premiers outils pour structurer sa pensée : reconnaître, nommer et assembler des formes planes (rond, carré, ligne).', en: 'First tools for structured thinking: recognise, name and combine flat shapes (circle, square, line).' },
    { fr: 'Mobiliser le langage : raconter ses étapes avec « d’abord, ensuite, et puis ».', en: 'Using language: tell the steps with “first, then, and then”.' },
  ],
  rhythm: {
    fr: '6 séances de 25 min, une par semaine, en période 2 ou 3. Séances cœur : s1 (chiffres), s4 (robot en 4 étapes) et s6 (dessins animés). Bonus : s2, s3, s5, à couper si le temps manque. Ne jamais faire deux séances Paint dans la même semaine : la main a besoin de reposer.',
    en: 'Six 25-minute sessions, one a week, in term 2 or 3. Core sessions: s1 (numbers), s4 (the robot in 4 steps) and s6 (cartoons). Bonus: s2, s3, s5, skip them if short on time. Never run two Paint sessions in the same week: hands need a rest.',
  },
  materials: [
    { fr: 'TBI tactile avec le site ouvert au chapitre 2, son testé une fois pour toutes.', en: 'Touch board with the site open at chapter 2, sound tested once and for all.' },
    { fr: 'Une imprimante reliée au TBI pour le bouton 🖨️ (à tester avant la première séance).', en: 'A printer linked to the board for the 🖨️ button (test it before the first session).' },
    { fr: 'Formes en carton (ronds, carrés, rectangles, bandes) pour la recette au sol, préparées une fois.', en: 'Cardboard shapes (circles, squares, rectangles, strips) for the floor recipe, prepared once.' },
    { fr: 'Feuilles blanches et feutres pour dessiner la recette sur papier avant l’écran.', en: 'Blank paper and felt pens to draw the recipe on paper before the screen.' },
    { fr: 'Un chiffon sec pour l’écran : les doigts laissent des traces.', en: 'A dry cloth for the screen: fingers leave marks.' },
  ],
  ritual: {
    open: { fr: 'Debout, on chante « Robot, réveille-toi ! » (ch8-s5:b), puis on rappelle les règles du tableau : un doigt, on regarde, on écoute.', en: 'Standing, we sing “Robot, wake up!” (ch8-s5:b), then recall the board rules: one finger, we look, we listen.' },
    close: { fr: 'On regarde le dessin du jour, on dit la recette ensemble, puis « Robot, va dormir ! » et l’écran s’éteint.', en: 'We look at today’s drawing, say the recipe together, then “Robot, go to sleep!” and the screen goes off.' },
  },
  unplugged: [
    { id: 'ch8-s5:b', when: { fr: 'À chaque séance, en ouverture et en clôture.', en: 'Every session, to open and to close.' } },
    { id: 'ch8-s4:a', when: { fr: 'Avant s1 : ranger les nombres dans l’ordre avant de les dessiner.', en: 'Before s1: order the numbers before drawing them.' } },
    { id: 'ch8-s2:b', when: { fr: 'Avant s3 : pétale, pétale, pétale, la fleur est une suite qui revient.', en: 'Before s3: petal, petal, petal, the flower is a repeating pattern.' } },
    { id: 'ch8-s5:a', when: { fr: 'Avant s4 : le sandwich du robot, une recette dans l’ordre.', en: 'Before s4: the robot sandwich, a recipe in order.' } },
    { id: 'ch8-s4:b', when: { fr: 'Après s6 : un enfant dicte la recette, un autre dessine.', en: 'After s6: one child dictates the recipe, another draws.' } },
  ],
  pitfalls: [
    { trap: { fr: 'Les enfants veulent tous toucher en même temps et le tableau se couvre de traits.', en: 'Every child wants to touch at once and the board fills with strokes.' },
      fix: { fr: 'Un seul pilote debout, les autres dessinent la forme dans l’air. Le pilote change à chaque étape.', en: 'One pilot standing, the others draw the shape in the air. Change pilot at every step.' } },
    { trap: { fr: 'Le pot de peinture 🪣 colore toute la toile d’un coup.', en: 'The paint bucket 🪣 colours the whole canvas at once.' },
      fix: { fr: '↩️ Annuler tout de suite. Le pot ne sert qu’à l’intérieur d’une forme bien fermée.', en: 'Tap ↩️ Undo right away. The bucket is only for inside a fully closed shape.' } },
    { trap: { fr: 'On oublie d’imprimer et rien ne repart à la maison.', en: 'Printing is forgotten and nothing goes home.' },
      fix: { fr: 'Mettez 🖨️ dans la dernière étape du déroulé, avant « Robot, va dormir ! ».', en: 'Put 🖨️ in the last step of the plan, before “Robot, go to sleep!”.' } },
    { trap: { fr: 'On cherche la perfection du trait et la séance s’étire.', en: 'Chasing a perfect stroke drags the session on.' },
      fix: { fr: 'Ce qui compte, c’est l’ordre des étapes, pas la beauté. Trois essais, puis on passe.', en: 'What counts is the order of the steps, not beauty. Three tries, then move on.' } },
  ],
  observables: [
    { fr: 'L’enfant choisit seul un outil (pinceau, ligne, carré, cercle) et une couleur.', en: 'The child picks a tool (brush, line, square, circle) and a colour alone.' },
    { fr: 'L’enfant dit l’étape avant de toucher : « D’abord le grand rectangle. »', en: 'The child says the step before touching: “First the big rectangle.”' },
    { fr: 'L’enfant coupe un dessin en 2, 3 ou 4 formes et les nomme.', en: 'The child cuts a picture into 2, 3 or 4 shapes and names them.' },
    { fr: 'L’enfant utilise ↩️ Annuler seul après une erreur, sans tout effacer.', en: 'The child uses ↩️ Undo alone after a mistake, without clearing everything.' },
    { fr: 'L’enfant raconte sa recette à un camarade avec « d’abord, ensuite, et puis ».', en: 'The child tells a classmate the recipe with “first, then, and then”.' },
    { fr: 'L’enfant reconnaît qu’un rond plus deux ronds, c’est « un chat ».', en: 'The child recognises that a circle plus two circles is “a cat”.' },
  ],
  celebration: {
    fr: 'Exposition des dessins imprimés au mur du couloir. Chaque enfant montre le sien et dit sa recette en trois mots. On termine par un grand dessin collectif : chaque groupe ajoute une forme au tableau, dans l’ordre.',
    en: 'Hang the printed drawings on the corridor wall. Each child shows theirs and says the recipe in three words. Finish with a big shared drawing: each group adds one shape to the board, in order.',
  },
  parents: {
    fr: 'Ce chapitre, nous avons dessiné avec des formes sur le grand écran : un rond, un carré, une ligne, dans l’ordre. Votre enfant rapporte ses dessins imprimés. Demandez-lui « comment tu as fait ? » et laissez-le raconter d’abord, ensuite, et puis.',
    en: 'This chapter we drew with shapes on the big screen: a circle, a square, a line, in order. Your child brings home their printed drawings. Ask “how did you do it?” and let them tell you first, then, and then.',
  },
}

export const SESSIONS = {
  // ── s1 : les chiffres 1-2-3-4 ────────────────────────────────────────────
  'ch2-s1': {
    concept: 'decomposition',
    also: ['sequence', 'cause'],
    duration: 25,
    essential: {
      fr: 'Les enfants découvrent la toile : un doigt qui touche laisse une trace. Puis ils fabriquent les chiffres 1, 2, 3, 4 avec des lignes et des bouts de pinceau, une étape après l’autre.',
      en: 'Children discover the canvas: a finger that touches leaves a mark. Then they build the numbers 1, 2, 3, 4 with lines and brush strokes, one step after another.',
    },
    setup: [
      { fr: 'Testez 🔊 et le bouton 🖨️ : une feuille doit sortir de l’imprimante.', en: 'Test 🔊 and the 🖨️ button: a sheet must come out of the printer.' },
      { fr: 'Ouvrez ch2-s1, activité « Tampons rigolos », le tableau bien essuyé.', en: 'Open ch2-s1, activity “Funny stamps”, with the board wiped clean.' },
      { fr: 'Affichez au mur les chiffres 1, 2, 3, 4 en grand, à côté du TBI.', en: 'Pin large numbers 1, 2, 3, 4 on the wall next to the board.' },
      { fr: 'Préparez 4 bandes de carton pour montrer que le 4 est fait de lignes.', en: 'Prepare 4 cardboard strips to show that the 4 is made of lines.' },
      { fr: 'Choisissez à l’avance les deux premiers pilotes pour éviter la bousculade.', en: 'Choose the first two pilots ahead to avoid a rush.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 4, what: { fr: 'Tampons rigolos : 4 pilotes PS touchent, la classe compte les tampons.', en: 'Funny stamps: 4 nursery pilots tap, the class counts the stamps.' }, act: 'tot' },
      { min: 3, what: { fr: 'Découverte de Paint : pinceau, une couleur, un gribouillage, puis 🗑️ Effacer.', en: 'Discover Paint: brush, one colour, a scribble, then 🗑️ Clear.' }, act: 'a' },
      { min: 4, what: { fr: 'Le 1 : outil ligne 📏, un seul trait du haut vers le bas. Trois pilotes.', en: 'The 1: line tool 📏, one stroke from top to bottom. Three pilots.' }, act: 'a' },
      { min: 5, what: { fr: 'Le 4 : trois lignes dans l’ordre, le copilote dit chaque ligne avant.', en: 'The 4: three lines in order, the copilot names each line first.' }, act: 'a' },
      { min: 4, what: { fr: 'Le 2 et le 3 au pinceau : un ventre rond, puis une ligne pour le 2.', en: 'The 2 and 3 with the brush: a round belly, then a line for the 2.' }, act: 'a' },
      { min: 2, what: { fr: 'On imprime 🖨️, on dit la recette du 4, « Robot, va dormir ! ».', en: 'Print 🖨️, say the recipe of the 4, “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Un pilote 🎮 debout touche l’écran. Un copilote 🗣️ dit l’étape avant : « une ligne en haut ». Les dessinateurs ✏️ assis tracent le chiffre dans l’air avec l’index. Un vérificateur 👀 lève le pouce si le chiffre ressemble au modèle du mur.',
      en: 'One pilot 🎮 stands and touches the screen. One copilot 🗣️ says the step first: “a line at the top”. The drawers ✏️ sit and trace the number in the air with a finger. One checker 👀 gives a thumbs up if the number matches the wall model.',
    },
    say: [
      { fr: 'Regarde : je touche, ça laisse une trace.', en: 'Look: I touch, it leaves a mark.' },
      { fr: 'Un doigt sur l’écran, les autres doigts dans la poche.', en: 'One finger on the screen, the other fingers in your pocket.' },
      { fr: 'Le 1, c’est une seule ligne, du haut vers le bas.', en: 'The 1 is one single line, from top to bottom.' },
      { fr: 'Dis ta ligne avant de la dessiner.', en: 'Say your line before you draw it.' },
      { fr: 'Raté ? Pas grave, on touche ↩️ Annuler.', en: 'Missed? No problem, we tap ↩️ Undo.' },
    ],
    ask: [
      { fr: 'Combien de lignes pour faire le 4 ?', en: 'How many lines to make the 4?' },
      { fr: 'Par quelle ligne on commence ?', en: 'Which line do we start with?' },
      { fr: 'Le 2, il a un rond ou une ligne ? Les deux ?', en: 'Does the 2 have a circle or a line? Both?' },
      { fr: 'Quel outil pour un trait bien droit ?', en: 'Which tool makes a really straight stroke?' },
    ],
    pitfalls: [
      { trap: { fr: 'Avec l’outil ligne, l’enfant tapote au lieu de glisser : rien n’apparaît.', en: 'With the line tool the child taps instead of sliding: nothing appears.' },
        fix: { fr: 'Guidez sa main : « on pose, on glisse, on lève ». Montrez une fois sans parler.', en: 'Guide the hand: “put down, slide, lift”. Show once without speaking.' } },
      { trap: { fr: 'La paume touche la toile et fait un gros paquet de couleur.', en: 'The palm touches the canvas and makes a big blob of colour.' },
        fix: { fr: 'Pliez les autres doigts dans le poing. ↩️ Annuler retire le paquet.', en: 'Fold the other fingers into a fist. ↩️ Undo removes the blob.' } },
      { trap: { fr: 'Un enfant touche 🗑️ Effacer et tout le chiffre disparaît.', en: 'A child taps 🗑️ Clear and the whole number vanishes.' },
        fix: { fr: 'Calme : ↩️ Annuler ramène le dessin. Rappelez que 🗑️ est un bouton de fin.', en: 'Stay calm: ↩️ Undo brings the drawing back. Remind them 🗑️ is an end button.' } },
    ],
    differentiation: {
      tot: { fr: 'Tampons rigolos puis un seul trait de pinceau. L’adulte nomme : « tu as fait un 1 ! »', en: 'Funny stamps, then one single brush stroke. The adult names it: “you made a 1!”' },
      beg: { fr: 'Le 1 puis le 4 avec l’outil ligne. Dire chaque ligne avant de la tracer.', en: 'The 1 then the 4 with the line tool. Say each line before drawing it.' },
      pro: { fr: 'Les quatre chiffres, en choisissant la couleur et la taille. Expliquer l’ordre des lignes du 4.', en: 'All four numbers, choosing colour and size. Explain the order of the lines of the 4.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant regarde l’écran après son geste et sourit.', en: 'I see the child look at the screen after the gesture and smile.' },
      beg: { fr: 'Je vois que l’enfant annonce « la ligne en haut » avant de toucher.', en: 'I see the child announce “the top line” before touching.' },
      pro: { fr: 'Je vois que l’enfant choisit ligne pour le 1 et pinceau pour le 2.', en: 'I see the child pick line for the 1 and brush for the 2.' },
      warn: { fr: 'Je vois que les dessinateurs assis ne tracent plus dans l’air : on change de pilote.', en: 'I see the seated drawers have stopped tracing in the air: change pilot.' },
    },
    unplugged: {
      id: 'ch8-s4:a',
      bridge: { fr: 'Avant l’écran, rangez les cartes 1, 2, 3, 4 dans l’ordre au sol. Puis construisez le 4 avec des bandes de carton : trois bandes, trois lignes.', en: 'Before the screen, order the cards 1, 2, 3, 4 on the floor. Then build the 4 with cardboard strips: three strips, three lines.' },
    },
    noSound: {
      fr: 'Le son ne sert qu’au « clic » de la toile. Sans lui, montrez chaque trace avec le doigt et dites « ça y est » à la place du bip.',
      en: 'Sound is only the canvas “click”. Without it, point at each mark and say “there it is” instead of the beep.',
    },
    vocab: [
      { word: { fr: 'Trace ↔ « ça marque »', en: 'Mark ↔ “it leaves a line”' }, gesture: { fr: 'On glisse l’index sur la paume.', en: 'Slide a finger across the palm.' } },
      { word: { fr: 'Ligne ↔ « un trait droit »', en: 'Line ↔ “a straight stroke”' }, gesture: { fr: 'Bras tendu, main qui descend.', en: 'Arm out, hand going down.' } },
      { word: { fr: 'Étape ↔ « d’abord, ensuite »', en: 'Step ↔ “first, then”' }, gesture: { fr: 'On coupe avec la main, une fois, deux fois.', en: 'Chop with the hand, once, twice.' } },
    ],
    tips: {
      tot: { fr: 'Le tampon tombe là où le doigt touche : demandez « en haut ! en bas ! » pour viser.', en: 'The stamp lands where the finger taps: call “top! bottom!” to aim.' },
      a: { fr: 'Choisissez la grosse taille dès le début : le trait se voit du fond de la classe.', en: 'Pick the big size from the start: the stroke shows from the back of the room.' },
    },
    closing: {
      fr: 'Aujourd’hui on a dessiné des chiffres avec des lignes. Un 1, c’est une ligne. Un 4, c’est trois lignes dans l’ordre.',
      en: 'Today we drew numbers with lines. A 1 is one line. A 4 is three lines in order.',
    },
    parents: {
      fr: 'Nous avons dessiné les chiffres 1, 2, 3, 4 sur le grand écran, avec l’outil ligne et le pinceau. Le dessin imprimé est dans le cahier. Demandez à votre enfant combien de lignes il faut pour faire un 4.',
      en: 'We drew the numbers 1, 2, 3, 4 on the big screen with the line tool and the brush. The printed drawing is in the folder. Ask your child how many lines it takes to make a 4.',
    },
  },

  // ── s2 : les lettres L-P-C-B ─────────────────────────────────────────────
  'ch2-s2': {
    concept: 'decomposition',
    also: ['sequence'],
    duration: 25,
    essential: {
      fr: 'Les enfants coupent les lettres L, P, C, B en morceaux : des lignes droites et des ventres ronds. Ils les dessinent dans l’ordre, en disant chaque morceau avant de toucher.',
      en: 'Children cut the letters L, P, C, B into pieces: straight lines and round bellies. They draw them in order, saying each piece before touching.',
    },
    setup: [
      { fr: 'Testez 🔊 et 🖨️ ; essuyez la toile du TBI.', en: 'Test 🔊 and 🖨️; wipe the board.' },
      { fr: 'Ouvrez ch2-s2, activité « Les lettres L-P-C-B ». Le modèle 🔤 s’affiche au-dessus de la toile.', en: 'Open ch2-s2, activity “Letters L-P-C-B”. The 🔤 model shows above the canvas.' },
      { fr: 'Affichez L, P, C, B en capitales au mur, chaque lettre d’une couleur.', en: 'Pin capital L, P, C, B on the wall, each letter in a different colour.' },
      { fr: 'Préparez 2 bandes de carton et 2 demi-ronds pour montrer le L et le B.', en: 'Prepare 2 cardboard strips and 2 half-circles to show the L and the B.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 3, what: { fr: 'Au sol : on fabrique le L avec deux bandes. Une debout, une couchée.', en: 'On the floor: build the L with two strips. One standing, one lying down.' } },
      { min: 5, what: { fr: 'Le L à l’écran : ligne 📏 vers le bas, puis ligne vers la droite. Trois pilotes.', en: 'The L on screen: line 📏 going down, then line going right. Three pilots.' }, act: 'a' },
      { min: 5, what: { fr: 'Le C et le P : pinceau 🖌️ pour le ventre rond, ligne pour le dos du P.', en: 'The C and the P: brush 🖌️ for the round belly, line for the back of the P.' }, act: 'a' },
      { min: 5, what: { fr: 'Le B : une ligne puis deux ventres. Le copilote compte « un, deux ».', en: 'The B: one line then two bellies. The copilot counts “one, two”.' }, act: 'a' },
      { min: 2, what: { fr: 'Les GS choisissent la lettre de leur prénom et la dessinent.', en: 'Reception children pick the letter of their name and draw it.' }, act: 'a' },
      { min: 2, what: { fr: 'On imprime 🖨️, on redit la recette du B, « Robot, va dormir ! ».', en: 'Print 🖨️, repeat the recipe of the B, “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 debout, un doigt. Copilote 🗣️ à côté, il dit le morceau : « la ligne debout ». Dessinateurs ✏️ assis, index en l’air, ils tracent la lettre en même temps. Vérificateur 👀 : il compare avec la lettre du mur et dit « pareil » ou « pas pareil ».',
      en: 'Pilot 🎮 standing, one finger. Copilot 🗣️ next to them says the piece: “the standing line”. Drawers ✏️ sit with a finger up and trace the letter at the same time. Checker 👀 compares with the wall letter and says “same” or “not the same”.',
    },
    say: [
      { fr: 'Le L, c’est deux lignes : une debout, une couchée.', en: 'The L is two lines: one standing, one lying down.' },
      { fr: 'Pour le rond, on prend le pinceau.', en: 'For the round part, we take the brush.' },
      { fr: 'Dis ton morceau, puis dessine-le.', en: 'Say your piece, then draw it.' },
      { fr: 'Le B a un dos droit et deux ventres.', en: 'The B has a straight back and two bellies.' },
      { fr: 'Pas pareil ? On touche ↩️ Annuler et on recommence.', en: 'Not the same? Tap ↩️ Undo and try again.' },
    ],
    ask: [
      { fr: 'Le C, il est fait avec une ligne ou un rond ?', en: 'Is the C made with a line or a curve?' },
      { fr: 'Quel morceau on dessine en premier pour le P ?', en: 'Which piece do we draw first for the P?' },
      { fr: 'Le P et le B, qu’est-ce qui est pareil ? Qu’est-ce qui change ?', en: 'The P and the B, what is the same? What changes?' },
      { fr: 'Ta lettre à toi, elle a combien de morceaux ?', en: 'Your own letter, how many pieces does it have?' },
    ],
    pitfalls: [
      { trap: { fr: 'Le ventre du P part loin du dos : la lettre est ouverte.', en: 'The belly of the P starts far from the back: the letter is open.' },
        fix: { fr: 'Demandez de « coller » le doigt sur le haut de la ligne avant de tourner.', en: 'Ask them to “stick” the finger at the top of the line before turning.' } },
      { trap: { fr: 'Le pilote garde l’outil ligne pour le C et obtient un trait droit.', en: 'The pilot keeps the line tool for the C and gets a straight stroke.' },
        fix: { fr: 'Le copilote annonce aussi l’outil : « pinceau ! ». Le bouton violet montre l’outil choisi.', en: 'The copilot also calls the tool: “brush!”. The purple button shows the chosen tool.' } },
      { trap: { fr: 'Trop de lettres pour une seule séance, l’attention tombe.', en: 'Too many letters for one session, attention drops.' },
        fix: { fr: 'Deux lettres suffisent : L et B. Gardez C et P pour l’accueil du matin.', en: 'Two letters are enough: L and B. Keep C and P for morning free time.' } },
    ],
    differentiation: {
      tot: { fr: 'Une seule ligne debout au pinceau, grosse taille. L’adulte dit : « c’est le début du L ».', en: 'One standing line with the brush, big size. The adult says: “that is the start of the L”.' },
      beg: { fr: 'Le L et le P : deux morceaux, dits avant de toucher.', en: 'The L and the P: two pieces, said before touching.' },
      pro: { fr: 'Le B complet, puis la première lettre de son prénom. Choisir outil, taille et couleur seul.', en: 'The whole B, then the first letter of their name. Pick tool, size and colour alone.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant tient un seul doigt et lève la main à la fin du trait.', en: 'I see the child hold one finger and lift the hand at the end of the stroke.' },
      beg: { fr: 'Je vois que l’enfant dit « ligne debout, ligne couchée » dans le bon ordre.', en: 'I see the child say “standing line, lying line” in the right order.' },
      pro: { fr: 'Je vois que l’enfant passe seul de la ligne au pinceau pour le ventre.', en: 'I see the child switch from line to brush for the belly on their own.' },
      warn: { fr: 'Je vois que le pilote regarde ses doigts et pas l’écran : on fait une pause.', en: 'I see the pilot watch their fingers, not the screen: take a break.' },
    },
    unplugged: {
      id: 'ch8-s4:c',
      bridge: { fr: 'Comme le matin (se lever, s’habiller, déjeuner), une lettre a un ordre. Au sol, posez les bandes du L une par une en disant « d’abord, ensuite ».', en: 'Like the morning (get up, get dressed, breakfast), a letter has an order. On the floor, lay the strips of the L one by one saying “first, then”.' },
    },
    noSound: {
      fr: 'Aucun texte n’est lu dans cette séance. Sans son, le copilote parle plus fort et la classe répète le morceau en chœur.',
      en: 'No text is read aloud in this session. Without sound, the copilot speaks louder and the class repeats the piece together.',
    },
    vocab: [
      { word: { fr: 'Morceau ↔ « un bout de lettre »', en: 'Piece ↔ “a bit of the letter”' }, gesture: { fr: 'On coupe avec la main.', en: 'Chop with the hand.' } },
      { word: { fr: 'Ligne debout ↔ « un trait qui descend »', en: 'Standing line ↔ “a stroke going down”' }, gesture: { fr: 'Bras vertical, main qui descend.', en: 'Vertical arm, hand going down.' } },
      { word: { fr: 'Ventre ↔ « le rond de la lettre »', en: 'Belly ↔ “the round bit of the letter”' }, gesture: { fr: 'On dessine un demi-rond dans l’air.', en: 'Draw a half-circle in the air.' } },
    ],
    tips: {
      a: { fr: 'Une couleur par morceau : dos bleu, ventre rouge. On voit tout de suite les étapes.', en: 'One colour per piece: blue back, red belly. The steps show at a glance.' },
    },
    closing: {
      fr: 'Aujourd’hui on a coupé les lettres en morceaux. Une ligne, un ventre, et la lettre est là.',
      en: 'Today we cut letters into pieces. A line, a belly, and the letter is there.',
    },
    parents: {
      fr: 'Nous avons dessiné L, P, C et B sur le grand écran, en coupant chaque lettre en morceaux. Le dessin imprimé est dans le cahier. À la maison, cherchez ensemble les lettres avec un ventre rond.',
      en: 'We drew L, P, C and B on the big screen, cutting each letter into pieces. The printed drawing is in the folder. At home, look together for letters with a round belly.',
    },
  },

  // ── s3 : des fleurs ──────────────────────────────────────────────────────
  'ch2-s3': {
    concept: 'decomposition',
    also: ['pattern', 'cause'],
    duration: 25,
    essential: {
      fr: 'Les enfants découvrent le cercle plein et l’assemblent : un rond au milieu, des ronds tout autour, une ligne pour la tige. Une fleur, c’est des ronds qui reviennent.',
      en: 'Children discover the filled circle and combine it: one circle in the middle, circles all around, a line for the stem. A flower is circles that come back again.',
    },
    setup: [
      { fr: 'Testez 🔊 et 🖨️ ; essuyez la toile.', en: 'Test 🔊 and 🖨️; wipe the canvas.' },
      { fr: 'Ouvrez ch2-s3, activité « Un jardin de tampons » pour les PS.', en: 'Open ch2-s3, activity “A stamp garden” for the nursery children.' },
      { fr: 'Posez au sol un grand rond jaune et six petits ronds roses en carton.', en: 'Lay a big yellow circle and six small pink cardboard circles on the floor.' },
      { fr: 'Une vraie fleur ou une photo : on cherche le cœur, les pétales, la tige.', en: 'A real flower or a photo: find the heart, the petals, the stem.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 4, what: { fr: 'Jardin de tampons : les PS touchent, une fleur pousse à chaque doigt.', en: 'Stamp garden: nursery children tap, a flower grows at every finger.' }, act: 'tot' },
      { min: 3, what: { fr: 'Au sol : on pose le cœur, puis pétale, pétale, pétale, autour.', en: 'On the floor: place the heart, then petal, petal, petal, all around.' } },
      { min: 4, what: { fr: 'À l’écran : outil cercle ⬭, jaune, un rond au milieu. On glisse en diagonale.', en: 'On screen: circle tool ⬭, yellow, one circle in the middle. Slide diagonally.' }, act: 'a' },
      { min: 5, what: { fr: 'Rose : un pétale en haut, en bas, à gauche, à droite. Un pilote par pétale.', en: 'Pink: one petal at the top, bottom, left, right. One pilot per petal.' }, act: 'a' },
      { min: 4, what: { fr: 'Vert : ligne 📏 pour la tige, cercle pour une feuille. Les GS font une 2e fleur.', en: 'Green: line 📏 for the stem, circle for a leaf. Reception children make a 2nd flower.' }, act: 'a' },
      { min: 2, what: { fr: 'On imprime 🖨️, on dit la recette de la fleur, « Robot, va dormir ! ».', en: 'Print 🖨️, say the flower recipe, “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 : un pétale, puis on change. Copilote 🗣️ : « pétale en haut ! ». Dessinateurs ✏️ : ils font un rond dans l’air à chaque pétale. Vérificateur 👀 : il compte les pétales sur l’écran avec le doigt.',
      en: 'Pilot 🎮: one petal, then change. Copilot 🗣️: “petal at the top!”. Drawers ✏️: they draw a circle in the air for each petal. Checker 👀: counts the petals on screen with a finger.',
    },
    say: [
      { fr: 'Le cercle, on pose le doigt, on glisse en travers, on lève.', en: 'For the circle, put the finger down, slide across, lift.' },
      { fr: 'D’abord le cœur. Ensuite les pétales, tout autour.', en: 'First the heart. Then the petals, all around.' },
      { fr: 'Encore un pétale, et encore un !', en: 'One more petal, and another one!' },
      { fr: 'La tige, c’est une ligne verte vers le bas.', en: 'The stem is a green line going down.' },
      { fr: 'Le rond est trop gros ? ↩️ Annuler, et plus petit.', en: 'Circle too big? ↩️ Undo, and smaller.' },
    ],
    ask: [
      { fr: 'Qu’est-ce qu’on dessine en premier, le cœur ou les pétales ?', en: 'What do we draw first, the heart or the petals?' },
      { fr: 'Combien de pétales a notre fleur ?', en: 'How many petals does our flower have?' },
      { fr: 'Pour la tige, quel outil ? Quelle couleur ?', en: 'For the stem, which tool? Which colour?' },
      { fr: 'Si on met les pétales avant le cœur, que se passe-t-il ?', en: 'If we put the petals before the heart, what happens?' },
    ],
    pitfalls: [
      { trap: { fr: 'Le pétale rose recouvre le cœur jaune : la forme dessinée après cache celle d’avant.', en: 'The pink petal covers the yellow heart: the shape drawn after hides the one before.' },
        fix: { fr: 'C’est justement l’ordre ! Faites les pétales d’abord, puis le cœur par-dessus, et comparez.', en: 'That is exactly the order! Do the petals first, then the heart on top, and compare.' } },
      { trap: { fr: 'Le cercle sort tout plat : le doigt a glissé en ligne droite.', en: 'The circle comes out flat: the finger slid in a straight line.' },
        fix: { fr: 'Montrez le geste « en travers », du coin en haut au coin en bas.', en: 'Show the “across” move, from top corner to bottom corner.' } },
      { trap: { fr: 'Un enfant choisit blanc et « rien » n’apparaît sur la toile blanche.', en: 'A child picks white and “nothing” appears on the white canvas.' },
        fix: { fr: 'Dites : « blanc sur blanc, ça se cache ». Choisissez une autre couleur ensemble.', en: 'Say: “white on white hides”. Pick another colour together.' } },
    ],
    differentiation: {
      tot: { fr: 'Jardin de tampons, puis un seul rond jaune au cercle. L’adulte nomme : « le cœur de la fleur ».', en: 'Stamp garden, then one yellow circle with the circle tool. The adult names it: “the heart of the flower”.' },
      beg: { fr: 'Le cœur puis deux pétales, en disant « en haut, en bas » avant de toucher.', en: 'The heart then two petals, saying “top, bottom” before touching.' },
      pro: { fr: 'La fleur complète avec la tige et une feuille. Choisir la taille pour des petits pétales.', en: 'The whole flower with stem and leaf. Choose the size for small petals.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant touche encore et encore pour faire pousser les tampons.', en: 'I see the child tap again and again to grow the stamps.' },
      beg: { fr: 'Je vois que l’enfant place le pétale à l’endroit annoncé.', en: 'I see the child place the petal where it was announced.' },
      pro: { fr: 'Je vois que l’enfant change de couleur et d’outil pour la tige sans aide.', en: 'I see the child switch colour and tool for the stem without help.' },
      warn: { fr: 'Je vois que les pétales partent n’importe où : on revient à la fleur en carton.', en: 'I see petals landing anywhere: go back to the cardboard flower.' },
    },
    unplugged: {
      id: 'ch8-s2:b',
      bridge: { fr: 'Pétale, pétale, pétale : la fleur est une suite qui revient. Continuez la suite au sol avec les ronds en carton avant de la dessiner.', en: 'Petal, petal, petal: the flower is a pattern that comes back. Continue the pattern on the floor with the cardboard circles before drawing it.' },
    },
    noSound: {
      fr: 'Seul le petit clic manque. Frappez dans vos mains à chaque pétale posé, les enfants comptent avec vous.',
      en: 'Only the little click is missing. Clap once for every petal placed, the children count with you.',
    },
    vocab: [
      { word: { fr: 'Cercle ↔ « un rond plein »', en: 'Circle ↔ “a full round”' }, gesture: { fr: 'Les deux mains font un rond.', en: 'Both hands make a circle.' } },
      { word: { fr: 'Autour ↔ « tout autour du cœur »', en: 'Around ↔ “all around the heart”' }, gesture: { fr: 'L’index tourne autour du poing.', en: 'A finger circles around the fist.' } },
      { word: { fr: 'Encore ↔ « encore un pétale »', en: 'Again ↔ “one more petal”' }, gesture: { fr: 'On tourne l’index en rond.', en: 'Twirl a finger in a circle.' } },
    ],
    tips: {
      tot: { fr: 'Le tampon est au hasard : quand une 🌸 sort, criez « une fleur ! » et faites-la chercher.', en: 'The stamp is random: when a 🌸 appears, shout “a flower!” and have them find it.' },
      a: { fr: 'Taille moyenne pour les pétales et petit geste : un pétale doit rester plus petit que le cœur.', en: 'Medium size for petals and a small move: a petal must stay smaller than the heart.' },
    },
    closing: {
      fr: 'Aujourd’hui on a fait une fleur avec des ronds. D’abord le cœur, ensuite les pétales, et puis la tige.',
      en: 'Today we made a flower with circles. First the heart, then the petals, and then the stem.',
    },
    parents: {
      fr: 'Nous avons dessiné des fleurs sur le grand écran : un rond pour le cœur, des ronds pour les pétales, une ligne pour la tige. Le dessin imprimé est dans le cahier. Demandez à votre enfant ce qu’il a dessiné en premier.',
      en: 'We drew flowers on the big screen: a circle for the heart, circles for the petals, a line for the stem. The printed drawing is in the folder. Ask your child what they drew first.',
    },
  },

  // ── s4 : un robot en 4 étapes ────────────────────────────────────────────
  'ch2-s4': {
    concept: 'decomposition',
    also: ['sequence', 'abstraction'],
    duration: 25,
    essential: {
      fr: 'La séance cœur du chapitre : un dessin, c’est une recette. Les enfants écoutent les 4 étapes du robot au 🔊, puis les dessinent dans l’ordre : grand rectangle, petit carré, deux ronds, deux lignes.',
      en: 'The core session of the chapter: a drawing is a recipe. Children listen to the robot’s 4 steps on 🔊, then draw them in order: big rectangle, small square, two circles, two lines.',
    },
    setup: [
      { fr: 'Testez 🔊 : touchez la carte 1️⃣ de « Le robot en 4 étapes », elle doit parler.', en: 'Test 🔊: tap card 1️⃣ of “The robot in 4 steps”, it must speak.' },
      { fr: 'Ouvrez ch2-s4 sur l’activité « steps » ; l’activité « Un robot » viendra juste après.', en: 'Open ch2-s4 on the “steps” activity; the “A robot” activity comes right after.' },
      { fr: 'Préparez au sol un grand rectangle, un petit carré, deux ronds et deux bandes en carton.', en: 'Prepare on the floor a big rectangle, a small square, two circles and two cardboard strips.' },
      { fr: 'Faites le sandwich du robot (ch8-s5:a) la veille : la recette est déjà connue.', en: 'Do the robot sandwich (ch8-s5:a) the day before: the recipe is already familiar.' },
      { fr: 'Testez 🖨️ : la feuille montre « Dessin de ____ » pour écrire le prénom.', en: 'Test 🖨️: the sheet shows “Drawing by ____” to write the first name.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 4, what: { fr: 'Les 4 étapes : un enfant touche 1️⃣, on écoute, on pose la forme en carton au sol. Même chose pour 2️⃣ 3️⃣ 4️⃣.', en: 'The 4 steps: a child taps 1️⃣, we listen, we place the cardboard shape on the floor. Same for 2️⃣ 3️⃣ 4️⃣.' }, act: 'steps' },
      { min: 3, what: { fr: 'On mélange les cartons, un enfant les remet dans l’ordre en récitant.', en: 'Mix the cardboard shapes, one child puts them back in order while reciting.' } },
      { min: 4, what: { fr: 'À l’écran, étape 1 et 2 : carré ⬛ violet, grand corps ; carré bleu plus petit, posé dessus.', en: 'On screen, steps 1 and 2: square ⬛ purple, big body; smaller blue square, on top.' }, act: 'a' },
      { min: 4, what: { fr: 'Étape 3 : cercle ⬭ vert, deux petits yeux sur la tête. Deux pilotes.', en: 'Step 3: circle ⬭ green, two small eyes on the head. Two pilots.' }, act: 'a' },
      { min: 4, what: { fr: 'Étape 4 : ligne 📏 orange, un bras de chaque côté. Le vérificateur compare avec le sol.', en: 'Step 4: line 📏 orange, one arm on each side. The checker compares with the floor.' }, act: 'a' },
      { min: 3, what: { fr: 'On imprime 🖨️, on redit les 4 étapes avec les doigts, « Robot, va dormir ! ».', en: 'Print 🖨️, repeat the 4 steps on fingers, “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Un pilote 🎮 par étape, quatre pilotes en tout. Le copilote 🗣️ touche la carte 1️⃣ 2️⃣… pour l’entendre, puis la redit au pilote. Les dessinateurs ✏️ assis tracent la forme dans l’air : rectangle, carré, ronds, lignes. Le vérificateur 👀 tient le carton de l’étape et dit « pareil ».',
      en: 'One pilot 🎮 per step, four pilots in all. The copilot 🗣️ taps card 1️⃣ 2️⃣… to hear it, then repeats it to the pilot. The drawers ✏️ sit and trace the shape in the air: rectangle, square, circles, lines. The checker 👀 holds the cardboard for the step and says “same”.',
    },
    say: [
      { fr: 'Un robot, ça se dessine en quatre étapes. Écoute.', en: 'A robot is drawn in four steps. Listen.' },
      { fr: 'Étape 1 : le grand rectangle, c’est le corps.', en: 'Step 1: the big rectangle, that is the body.' },
      { fr: 'Le rectangle, on pose le doigt en haut et on glisse en bas.', en: 'For the rectangle, put the finger at the top and slide down.' },
      { fr: 'Dis l’étape avant de toucher.', en: 'Say the step before you touch.' },
      { fr: 'Les yeux sont partis à côté ? ↩️ Annuler, et on vise la tête.', en: 'Eyes landed off to the side? ↩️ Undo, and aim for the head.' },
    ],
    ask: [
      { fr: 'Qu’est-ce qu’on dessine en premier ? Pourquoi pas les yeux ?', en: 'What do we draw first? Why not the eyes?' },
      { fr: 'Où va le petit carré : sous le corps ou dessus ?', en: 'Where does the small square go: under the body or on top?' },
      { fr: 'Combien de ronds pour les yeux ? Combien de lignes pour les bras ?', en: 'How many circles for the eyes? How many lines for the arms?' },
      { fr: 'Si on oublie l’étape 2, à quoi ressemble le robot ?', en: 'If we skip step 2, what does the robot look like?' },
      { fr: 'Ce rectangle, c’est vraiment un corps ? Qu’est-ce qui fait qu’on dit « robot » ?', en: 'Is this rectangle really a body? What makes us say “robot”?' },
    ],
    pitfalls: [
      { trap: { fr: 'La tête est dessinée de la même couleur que le corps : on ne la voit plus.', en: 'The head is drawn in the same colour as the body: it disappears.' },
        fix: { fr: 'Une couleur par étape, comme sur les cartes : violet, bleu, vert, orange.', en: 'One colour per step, like on the cards: purple, blue, green, orange.' } },
      { trap: { fr: 'Le pilote touche 🗑️ Effacer pour retirer un seul œil raté.', en: 'The pilot taps 🗑️ Clear to remove one botched eye.' },
        fix: { fr: '↩️ Annuler ramène tout. Répétez : « Annuler retire le dernier, Effacer retire tout ».', en: '↩️ Undo brings it all back. Repeat: “Undo removes the last one, Clear removes everything”.' } },
      { trap: { fr: 'Les cartes 1️⃣ 2️⃣ parlent en même temps que la maîtresse.', en: 'Cards 1️⃣ 2️⃣ speak at the same time as the teacher.' },
        fix: { fr: 'Une carte, silence, on écoute jusqu’au bout, puis on répète ensemble.', en: 'One card, silence, listen to the end, then repeat together.' } },
      { trap: { fr: 'Les bras sont tracés au pinceau et sortent tout tordus.', en: 'The arms are drawn with the brush and come out crooked.' },
        fix: { fr: 'Le copilote annonce l’outil avec l’étape : « étape 4, ligne ! ».', en: 'The copilot calls the tool with the step: “step 4, line!”.' } },
    ],
    differentiation: {
      tot: { fr: 'Toucher une carte 1️⃣ pour l’entendre, puis dessiner un grand carré. L’adulte dit : « le corps du robot ».', en: 'Tap card 1️⃣ to hear it, then draw one big square. The adult says: “the robot’s body”.' },
      beg: { fr: 'Étapes 1, 2 et 3 dans l’ordre. Dire l’étape avant de dessiner.', en: 'Steps 1, 2 and 3 in order. Say the step before drawing.' },
      pro: { fr: 'Les 4 étapes, en choisissant taille et couleur. Expliquer pourquoi le corps vient avant les yeux.', en: 'All 4 steps, choosing size and colour. Explain why the body comes before the eyes.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant touche une carte et attend qu’elle finisse de parler.', en: 'I see the child tap a card and wait for it to finish speaking.' },
      beg: { fr: 'Je vois que l’enfant dit « le petit carré » avant de le poser sur le corps.', en: 'I see the child say “the small square” before placing it on the body.' },
      pro: { fr: 'Je vois que l’enfant remet les cartons mélangés dans l’ordre sans regarder l’écran.', en: 'I see the child put the mixed cardboard shapes back in order without looking at the screen.' },
      warn: { fr: 'Je vois que le rectangle est tout petit ou hors de la toile : on reprend le geste au sol.', en: 'I see the rectangle is tiny or off the canvas: redo the move on the floor.' },
    },
    unplugged: {
      id: 'ch8-s5:a',
      bridge: { fr: 'Le sandwich du robot, c’est pain, puis jambon, puis pain. Le robot dessiné, c’est corps, puis tête, puis yeux, puis bras. Même jeu : une recette dans l’ordre.', en: 'The robot sandwich is bread, then ham, then bread. The drawn robot is body, then head, then eyes, then arms. Same game: a recipe in order.' },
    },
    noSound: {
      fr: 'Sans voix, lisez chaque carte 1️⃣ 2️⃣ 3️⃣ 4️⃣ vous-même en montrant le carton. Les enfants répètent le nom de la forme en chœur.',
      en: 'Without voice, read each card 1️⃣ 2️⃣ 3️⃣ 4️⃣ yourself while showing the cardboard. The children repeat the shape name together.',
    },
    vocab: [
      { word: { fr: 'Étape ↔ « d’abord, ensuite, et puis »', en: 'Step ↔ “first, then, and then”' }, gesture: { fr: 'On avance la main par à-coups.', en: 'Move the hand forward in little jumps.' } },
      { word: { fr: 'Rectangle ↔ « un carré allongé »', en: 'Rectangle ↔ “a stretched square”' }, gesture: { fr: 'Les mains dessinent une grande boîte.', en: 'Hands draw a big box.' } },
      { word: { fr: 'Recette ↔ « comment on fait »', en: 'Recipe ↔ “how we make it”' }, gesture: { fr: 'On compte les étapes sur les doigts.', en: 'Count the steps on the fingers.' } },
      { word: { fr: 'Représente ↔ « ça veut dire »', en: 'Stands for ↔ “it means”' }, gesture: { fr: 'On dessine un carré dans l’air et on dit « robot ».', en: 'Draw a square in the air and say “robot”.' } },
    ],
    tips: {
      steps: { fr: 'Les cartes sont dans l’ordre 1️⃣ à 4️⃣ : touchez-les dans le désordre pour rire, puis remettez l’ordre.', en: 'The cards run 1️⃣ to 4️⃣: tap them out of order for a laugh, then restore the order.' },
      a: { fr: 'Le carré ⬛ fait un rectangle si on glisse plus loin vers le bas : montrez-le une fois.', en: 'The square ⬛ makes a rectangle if you slide further down: show it once.' },
    },
    closing: {
      fr: 'Aujourd’hui on a dessiné un robot en quatre étapes. Corps, tête, yeux, bras. On a suivi la recette dans l’ordre.',
      en: 'Today we drew a robot in four steps. Body, head, eyes, arms. We followed the recipe in order.',
    },
    parents: {
      fr: 'Nous avons dessiné un robot en 4 étapes sur le grand écran : le grand rectangle, le petit carré, deux ronds, deux lignes. Le dessin imprimé est dans le cahier. Demandez à votre enfant de vous dire les 4 étapes sur ses doigts.',
      en: 'We drew a robot in 4 steps on the big screen: the big rectangle, the small square, two circles, two lines. The printed drawing is in the folder. Ask your child to tell you the 4 steps on their fingers.',
    },
  },

  // ── s5 : un chat, un chien ───────────────────────────────────────────────
  'ch2-s5': {
    concept: 'decomposition',
    also: ['abstraction', 'cause'],
    duration: 25,
    essential: {
      fr: 'Les enfants inventent eux-mêmes la recette : quelles formes pour une tête de chat ? Un rond, deux oreilles pointues en lignes, deux yeux, des moustaches. Puis le chien, avec des oreilles qui pendent.',
      en: 'Children invent the recipe themselves: which shapes for a cat’s head? A circle, two pointed ears made of lines, two eyes, whiskers. Then the dog, with floppy ears.',
    },
    setup: [
      { fr: 'Testez 🔊 et 🖨️ ; essuyez la toile.', en: 'Test 🔊 and 🖨️; wipe the canvas.' },
      { fr: 'Ouvrez ch2-s5, activité « Le chat arc-en-ciel » pour les PS.', en: 'Open ch2-s5, activity “The rainbow cat” for the nursery children.' },
      { fr: 'Deux photos au mur : un chat, un chien. On cherche ce qui change : les oreilles.', en: 'Two photos on the wall: a cat, a dog. Find what changes: the ears.' },
      { fr: 'Préparez un grand rond orange, deux triangles et deux ovales en carton.', en: 'Prepare a big orange circle, two triangles and two cardboard ovals.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 4, what: { fr: 'Chat arc-en-ciel : les PS glissent le doigt, la couleur change toute seule.', en: 'Rainbow cat: nursery children slide a finger, the colour changes by itself.' }, act: 'tot' },
      { min: 3, what: { fr: 'Devant les photos : « avec quelles formes on fait un chat ? ». On pose les cartons.', en: 'In front of the photos: “which shapes make a cat?”. Place the cardboard shapes.' } },
      { min: 5, what: { fr: 'Le chat : cercle ⬭ orange pour la tête, deux lignes 📏 par oreille, pointe en haut.', en: 'The cat: orange circle ⬭ for the head, two lines 📏 per ear, point at the top.' }, act: 'a' },
      { min: 4, what: { fr: 'Yeux : cercle noir, petite taille. Moustaches : trois lignes de chaque côté.', en: 'Eyes: black circle, small size. Whiskers: three lines on each side.' }, act: 'a' },
      { min: 4, what: { fr: 'Le chien à côté : cercle marron, oreilles en cercles allongés qui pendent, un nez rond.', en: 'The dog next to it: brown circle, ears as long circles hanging down, a round nose.' }, act: 'a' },
      { min: 2, what: { fr: 'On imprime 🖨️, on nomme les formes du chat, « Robot, va dormir ! ».', en: 'Print 🖨️, name the cat’s shapes, “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Pilote 🎮 pour une forme, puis on change. Copilote 🗣️ : il propose la forme suivante, « maintenant les oreilles ». Dessinateurs ✏️ assis : ils font les oreilles pointues avec les mains sur la tête. Vérificateur 👀 : il regarde la photo et dit ce qui manque.',
      en: 'Pilot 🎮 for one shape, then change. Copilot 🗣️: suggests the next shape, “now the ears”. Seated drawers ✏️: make pointed ears with their hands on their heads. Checker 👀: looks at the photo and says what is missing.',
    },
    say: [
      { fr: 'La tête du chat, c’est un grand rond.', en: 'The cat’s head is a big circle.' },
      { fr: 'Une oreille pointue, c’est deux lignes qui se touchent en haut.', en: 'A pointed ear is two lines that meet at the top.' },
      { fr: 'Pour les yeux, choisis la petite taille.', en: 'For the eyes, choose the small size.' },
      { fr: 'Le chien a les oreilles qui pendent, pas pointues.', en: 'The dog’s ears hang down, they are not pointed.' },
      { fr: 'Un œil de trop ? ↩️ Annuler.', en: 'One eye too many? ↩️ Undo.' },
    ],
    ask: [
      { fr: 'Avec quelles formes on peut faire une tête de chat ?', en: 'Which shapes can make a cat’s head?' },
      { fr: 'Qu’est-ce qu’on dessine en premier : la tête ou les yeux ? Pourquoi ?', en: 'What do we draw first: the head or the eyes? Why?' },
      { fr: 'Comment on sait que c’est un chien et pas un chat ?', en: 'How do we know it is a dog and not a cat?' },
      { fr: 'Trois ronds et des lignes, ça fait un chat ? C’est un vrai chat ?', en: 'Three circles and some lines make a cat? Is it a real cat?' },
    ],
    pitfalls: [
      { trap: { fr: 'Les yeux noirs sont dessinés avant la tête orange : la tête les recouvre.', en: 'The black eyes are drawn before the orange head: the head covers them.' },
        fix: { fr: 'Laissez voir le problème, puis ↩️ deux fois. « La grande forme d’abord, les petites après. »', en: 'Let the problem show, then ↩️ twice. “Big shape first, small ones after.”' } },
      { trap: { fr: 'La gomme 🧽 fait un trou blanc dans la tête orange.', en: 'The eraser 🧽 makes a white hole in the orange head.' },
        fix: { fr: 'La gomme peint en blanc. Préférez ↩️ Annuler, ou repassez un cercle orange.', en: 'The eraser paints white. Prefer ↩️ Undo, or draw an orange circle again.' } },
      { trap: { fr: 'Le doigt part à côté de la toile, sur une couleur : l’outil change sans qu’on le voie.', en: 'The finger slips off the canvas onto a colour: the tool changes unnoticed.' },
        fix: { fr: 'Regardez le bouton violet avant chaque forme. Le copilote dit l’outil à voix haute.', en: 'Check the purple button before each shape. The copilot says the tool out loud.' } },
    ],
    differentiation: {
      tot: { fr: 'Chat arc-en-ciel avec le doigt, puis un grand rond orange. L’adulte dit : « la tête du chat ».', en: 'Rainbow cat with a finger, then one big orange circle. The adult says: “the cat’s head”.' },
      beg: { fr: 'Tête, deux yeux, moustaches : trois formes dites avant de toucher.', en: 'Head, two eyes, whiskers: three shapes said before touching.' },
      pro: { fr: 'Le chat complet puis le chien. Choisir seul la taille des yeux et expliquer ce qui change.', en: 'The whole cat then the dog. Pick the eye size alone and explain what changes.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant glisse le doigt et suit la couleur qui change des yeux.', en: 'I see the child slide a finger and follow the changing colour with their eyes.' },
      beg: { fr: 'Je vois que l’enfant dessine la tête avant les yeux sans qu’on le dise.', en: 'I see the child draw the head before the eyes without being told.' },
      pro: { fr: 'Je vois que l’enfant dit « oreilles qui pendent » pour changer le chat en chien.', en: 'I see the child say “floppy ears” to turn the cat into a dog.' },
      warn: { fr: 'Je vois que l’enfant ajoute des formes sans les nommer : on revient aux cartons.', en: 'I see the child adding shapes without naming them: go back to the cardboard.' },
    },
    unplugged: {
      id: 'ch8-s5:c',
      bridge: { fr: 'En file indienne, chaque enfant est une étape : le premier dit « tête », le deuxième « oreilles », le troisième « yeux ». On avance d’un pas à chaque étape, puis on dessine.', en: 'In a line, each child is one step: the first says “head”, the second “ears”, the third “eyes”. Take one step forward per step, then draw.' },
    },
    noSound: {
      fr: 'Seul le clic manque. Miaulez à chaque forme du chat et aboyez pour le chien : la classe adore, et l’ordre reste clair.',
      en: 'Only the click is missing. Meow at every cat shape and bark for the dog: the class loves it, and the order stays clear.',
    },
    vocab: [
      { word: { fr: 'Pointu ↔ « ça pique en haut »', en: 'Pointed ↔ “it pricks at the top”' }, gesture: { fr: 'Les deux index se touchent au-dessus de la tête.', en: 'Both index fingers meet above the head.' } },
      { word: { fr: 'Petite taille ↔ « le petit point »', en: 'Small size ↔ “the little dot”' }, gesture: { fr: 'Pouce et index presque serrés.', en: 'Thumb and finger almost pinched.' } },
      { word: { fr: 'Représente ↔ « ça veut dire chat »', en: 'Stands for ↔ “it means cat”' }, gesture: { fr: 'On dessine un rond dans l’air et on miaule.', en: 'Draw a circle in the air and meow.' } },
    ],
    tips: {
      tot: { fr: 'Le doigt arc-en-ciel change de couleur tout seul : dites « regarde, ça change ! » à chaque courbe.', en: 'The rainbow finger changes colour by itself: say “look, it changes!” at every curve.' },
      a: { fr: 'Dessinez le chat à gauche et le chien à droite sur la même toile : une seule impression pour les deux.', en: 'Draw the cat on the left and the dog on the right of the same canvas: one print for both.' },
    },
    closing: {
      fr: 'Aujourd’hui on a inventé la recette du chat : un rond, des oreilles pointues, deux yeux. Avec des oreilles qui pendent, ça devient un chien.',
      en: 'Today we invented the cat recipe: a circle, pointed ears, two eyes. With floppy ears, it turns into a dog.',
    },
    parents: {
      fr: 'Nous avons dessiné un chat et un chien avec des ronds et des lignes sur le grand écran. Le dessin imprimé est dans le cahier. Demandez à votre enfant ce qui change entre le chat et le chien.',
      en: 'We drew a cat and a dog with circles and lines on the big screen. The printed drawing is in the folder. Ask your child what changes between the cat and the dog.',
    },
  },

  // ── s6 : mes dessins animés ──────────────────────────────────────────────
  'ch2-s6': {
    concept: 'decomposition',
    also: ['sequence', 'abstraction'],
    duration: 30,
    essential: {
      fr: 'Séance de fin de chapitre : les enfants choisissent un sujet (soleil, papillon, champignon, glace, arbre, ours) et écrivent sa recette sur papier avant l’écran. Puis un enfant dicte, un autre dessine.',
      en: 'End-of-chapter session: children choose a subject (sun, butterfly, mushroom, ice cream, tree, bear) and write its recipe on paper before the screen. Then one child dictates, another draws.',
    },
    setup: [
      { fr: 'Testez 🔊 et 🖨️ ; prévoyez plusieurs feuilles, il y aura plusieurs dessins.', en: 'Test 🔊 and 🖨️; have several sheets ready, there will be several drawings.' },
      { fr: 'Ouvrez ch2-s6, activité « Mes dessins animés ». Le modèle 🦋 s’affiche au-dessus de la toile.', en: 'Open ch2-s6, activity “My cartoons”. The 🦋 model shows above the canvas.' },
      { fr: 'Affichez six images au mur : soleil, papillon, champignon, glace, arbre, ours.', en: 'Pin six pictures on the wall: sun, butterfly, mushroom, ice cream, tree, bear.' },
      { fr: 'Une feuille et un feutre par groupe de 4 pour dessiner la recette : une forme par case.', en: 'One sheet and one felt pen per group of 4 to draw the recipe: one shape per box.' },
      { fr: 'Choisissez deux sujets pour la classe entière, pas six : soleil pour tous, puis papillon.', en: 'Choose two subjects for the whole class, not six: sun for everyone, then butterfly.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 5, what: { fr: 'Sur papier, par groupe : la recette du soleil, une forme par case. Un rond, puis des lignes.', en: 'On paper, in groups: the sun recipe, one shape per box. A circle, then lines.' } },
      { min: 5, what: { fr: 'Le soleil à l’écran : un groupe dicte sa recette, un pilote dessine sans regarder le papier.', en: 'The sun on screen: one group dictates its recipe, one pilot draws without looking at the paper.' }, act: 'a' },
      { min: 4, what: { fr: 'On compare : le soleil dessiné ressemble-t-il au papier ? Qu’est-ce qui manquait dans la recette ?', en: 'Compare: does the drawn sun match the paper? What was missing from the recipe?' } },
      { min: 6, what: { fr: 'Le papillon : ligne pour le corps, quatre cercles pour les ailes. Le pot 🪣 colore l’intérieur d’une aile fermée au pinceau.', en: 'The butterfly: line for the body, four circles for the wings. The bucket 🪣 colours inside a wing closed with the brush.' }, act: 'a' },
      { min: 4, what: { fr: 'GS : un troisième dessin au choix, champignon ou glace, en expliquant chaque étape.', en: 'Reception children: a third drawing of their choice, mushroom or ice cream, explaining each step.' }, act: 'a' },
      { min: 3, what: { fr: 'On imprime 🖨️ chaque dessin, on applaudit les recettes, « Robot, va dormir ! ».', en: 'Print 🖨️ each drawing, applaud the recipes, “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Le pilote 🎮 dessine ce qu’on lui dicte, sans voir le papier. Le copilote 🗣️ lit la recette de son groupe, une case à la fois. Les dessinateurs ✏️ assis tracent chaque forme dans l’air et disent « c’est bon » ou « pas ça ». Le vérificateur 👀 compare l’écran et le papier à la fin.',
      en: 'The pilot 🎮 draws what is dictated, without seeing the paper. The copilot 🗣️ reads the group’s recipe, one box at a time. Seated drawers ✏️ trace each shape in the air and say “right” or “not that”. The checker 👀 compares the screen and the paper at the end.',
    },
    say: [
      { fr: 'Avant l’écran, on dessine la recette sur le papier.', en: 'Before the screen, we draw the recipe on paper.' },
      { fr: 'Une case, une forme. D’abord, ensuite, et puis.', en: 'One box, one shape. First, then, and then.' },
      { fr: 'Tu dictes, il dessine. Il fait seulement ce que tu dis.', en: 'You dictate, they draw. They only do what you say.' },
      { fr: 'Le pot remplit ce qui est bien fermé. Sinon, ↩️ Annuler.', en: 'The bucket fills what is fully closed. Otherwise, ↩️ Undo.' },
      { fr: 'Ton dessin est fini ? On l’imprime pour la maison.', en: 'Is your drawing done? We print it to take home.' },
    ],
    ask: [
      { fr: 'Quelles formes il faut pour un soleil ? Et pour une glace ?', en: 'Which shapes do we need for a sun? And for an ice cream?' },
      { fr: 'Le pilote a dessiné autre chose : qu’est-ce que la recette ne disait pas ?', en: 'The pilot drew something else: what did the recipe not say?' },
      { fr: 'Le papillon, c’est combien de ronds ? Où va la ligne ?', en: 'The butterfly, how many circles? Where does the line go?' },
      { fr: 'Pourquoi le pot a colorié toute la toile ?', en: 'Why did the bucket colour the whole canvas?' },
      { fr: 'Ta recette, tu peux la redire sans regarder ?', en: 'Your recipe, can you say it again without looking?' },
    ],
    pitfalls: [
      { trap: { fr: 'Le pot 🪣 remplit toute la toile : le contour de l’aile n’était pas fermé.', en: 'The bucket 🪣 fills the whole canvas: the wing outline was not closed.' },
        fix: { fr: '↩️ Annuler tout de suite. Fermez le trou au pinceau, puis touchez à nouveau à l’intérieur.', en: 'Tap ↩️ Undo right away. Close the gap with the brush, then tap inside again.' } },
      { trap: { fr: 'Le copilote dit « fais un soleil » au lieu de dicter forme par forme.', en: 'The copilot says “make a sun” instead of dictating shape by shape.' },
        fix: { fr: 'Le pilote répond « je ne sais pas faire un soleil, dis-moi une forme ».', en: 'The pilot answers “I do not know how to make a sun, tell me a shape”.' } },
      { trap: { fr: 'Trop de dessins, plus d’attention, l’imprimante n’arrête plus.', en: 'Too many drawings, no attention left, the printer never stops.' },
        fix: { fr: 'Deux dessins collectifs, un troisième pour les GS. Le reste à l’accueil du matin.', en: 'Two shared drawings, a third for reception. The rest during morning free time.' } },
      { trap: { fr: 'Plus de 12 gestes en arrière : ↩️ Annuler ne revient pas plus loin.', en: 'More than 12 moves back: ↩️ Undo goes no further.' },
        fix: { fr: 'Annuler tout de suite après l’erreur, pas à la fin. Sinon repassez une forme par-dessus.', en: 'Undo right after the mistake, not at the end. Otherwise draw a shape over it.' } },
    ],
    differentiation: {
      tot: { fr: 'Un grand rond jaune, puis des lignes de pinceau tout autour. L’adulte dit : « un soleil ! »', en: 'One big yellow circle, then brush lines all around. The adult says: “a sun!”' },
      beg: { fr: 'Le soleil et le papillon, 2 ou 3 formes dictées par un camarade et dites avant de toucher.', en: 'The sun and the butterfly, 2 or 3 shapes dictated by a classmate and said before touching.' },
      pro: { fr: 'Écrire sa recette sur papier, la dicter, puis dessiner un sujet au choix en expliquant chaque étape.', en: 'Write a recipe on paper, dictate it, then draw a subject of choice explaining each step.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant regarde son rond et dit « soleil » tout seul.', en: 'I see the child look at the circle and say “sun” by themselves.' },
      beg: { fr: 'Je vois que l’enfant attend la case suivante avant de dessiner.', en: 'I see the child wait for the next box before drawing.' },
      pro: { fr: 'Je vois que l’enfant corrige sa recette après avoir vu le dessin du pilote.', en: 'I see the child fix the recipe after seeing the pilot’s drawing.' },
      warn: { fr: 'Je vois que le papier reste vide et que tout le monde regarde l’écran : on éteint et on dessine au sol.', en: 'I see the paper stays blank and everyone watches the screen: switch off and draw on the floor.' },
    },
    unplugged: {
      id: 'ch8-s4:b',
      bridge: { fr: 'Passe le message : un enfant chuchote la recette « rond, puis lignes » à son voisin, jusqu’au dernier qui la dessine au tableau. Si le dessin change, une étape s’est perdue en route.', en: 'Pass the message: one child whispers the recipe “circle, then lines” to their neighbour, down to the last one who draws it on the board. If the drawing changes, a step got lost on the way.' },
    },
    noSound: {
      fr: 'La séance repose sur la voix des enfants, pas sur celle de l’écran. Sans son, rien ne change : le copilote dicte, la classe répète.',
      en: 'The session relies on the children’s voices, not the screen’s. Without sound nothing changes: the copilot dictates, the class repeats.',
    },
    vocab: [
      { word: { fr: 'Recette ↔ « comment on fait »', en: 'Recipe ↔ “how we make it”' }, gesture: { fr: 'On compte les étapes sur les doigts.', en: 'Count the steps on the fingers.' } },
      { word: { fr: 'Dicter ↔ « je dis, tu fais »', en: 'Dictate ↔ “I say, you do”' }, gesture: { fr: 'Main devant la bouche, puis main vers l’ami.', en: 'Hand at the mouth, then hand towards the friend.' } },
      { word: { fr: 'Fermé ↔ « pas de trou »', en: 'Closed ↔ “no gap”' }, gesture: { fr: 'Les deux mains font un rond bien serré.', en: 'Both hands make a tight circle.' } },
      { word: { fr: 'Représente ↔ « ça veut dire soleil »', en: 'Stands for ↔ “it means sun”' }, gesture: { fr: 'On dessine un rond dans l’air et on ouvre les doigts.', en: 'Draw a circle in the air and spread the fingers.' } },
    ],
    tips: {
      a: { fr: 'Après chaque dessin, 🖨️ puis 🗑️ Effacer : la toile est propre pour le groupe suivant.', en: 'After each drawing, 🖨️ then 🗑️ Clear: the canvas is clean for the next group.' },
    },
    closing: {
      fr: 'Aujourd’hui on a fabriqué nos propres recettes. On a dit les formes dans l’ordre, un ami a dessiné. On sait faire des dessins animés !',
      en: 'Today we made our own recipes. We said the shapes in order, a friend drew them. We know how to make cartoons!',
    },
    parents: {
      fr: 'Pour finir le chapitre, votre enfant a inventé la recette d’un dessin (soleil, papillon…) et l’a dictée à un camarade. Les dessins imprimés sont dans le cahier. Jouez à la maison : il dicte les formes, vous dessinez exactement ce qu’il dit.',
      en: 'To end the chapter, your child invented the recipe for a drawing (sun, butterfly…) and dictated it to a classmate. The printed drawings are in the folder. Play at home: they dictate the shapes, you draw exactly what they say.',
    },
  },
}
