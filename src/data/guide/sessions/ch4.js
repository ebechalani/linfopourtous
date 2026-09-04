// Guide du professeur — chapitre 4 : Je dessine avec Paint
// Sept séances sur le mini-atelier PaintStudio (pinceau 🖌️, ligne 📏, carré ⬛,
// cercle ⬭, pot de peinture 🪣, gomme 🧽, trois tailles, dix couleurs,
// ↩️ Annuler, 🗑️ Effacer, 🖨️ imprimer). Notion dominante : la décomposition,
// c’est-à-dire « un dessin = une recette en petites étapes ».

export const CHAPTER = {
  thread: {
    fr: 'Un dessin, c’est une recette : « on coupe en petits morceaux ». D’abord le carré, ensuite le toit, et puis les couleurs. À la fin, chacun imprime son dessin et raconte ses étapes.',
    en: 'A drawing is a recipe: “we cut it into small pieces”. First the square, then the roof, and then the colours. At the end, everyone prints their drawing and tells their steps.',
  },
  concepts: ['decomposition', 'sequence', 'tool', 'debug'],
  domains: [
    { fr: 'Activités artistiques : réaliser une composition en suivant des étapes, choisir ses couleurs et ses outils.',
      en: 'Art activities: create a composition by following steps, choosing colours and tools.' },
    { fr: 'Formes et grandeurs : nommer le carré, le rond, le rectangle, la ligne ; comparer petit et grand.',
      en: 'Shapes and sizes: name the square, circle, rectangle and line; compare small and big.' },
    { fr: 'Langage oral : dire ce qu’on va faire avant de toucher (« d’abord, ensuite, et puis »).',
      en: 'Oral language: say what you are going to do before touching (“first, then, and then”).' },
  ],
  rhythm: {
    fr: 'Sept séances de 25 à 30 minutes, une par semaine, après le chapitre souris. Cœur : s1 (pinceau), s2 (maison), s4 (pot de peinture), s7 (bonhomme). Bonus : s3, s5 et s6, à garder pour des ateliers de 6 enfants. Si le temps manque, coupez après s2 puis reprenez à s4.',
    en: 'Seven sessions of 25 to 30 minutes, one a week, after the mouse chapter. Core: s1 (brush), s2 (house), s4 (fill bucket), s7 (face). Bonus: s3, s5 and s6, ideal for small-group workshops of 6. Short on time? Stop after s2 and resume at s4.',
  },
  materials: [
    { fr: 'Le TBI tactile avec le son allumé : les cartes-recette parlent quand on les touche.',
      en: 'The touch board with sound on: the recipe cards speak when tapped.' },
    { fr: 'À préparer une fois : les cartes-recette en papier (une étape par carte) pour la maison, le bateau et le bonhomme, plastifiées.',
      en: 'Prepare once: paper recipe cards (one step per card) for the house, the boat and the face, laminated.' },
    { fr: 'Une ardoise et un feutre par binôme pour les dessinateurs ✏️.',
      en: 'One whiteboard and marker per pair for the drawers ✏️.' },
    { fr: 'Des formes en carton à toucher : un carré, un rond, un rectangle, une bande pour la ligne.',
      en: 'Cardboard shapes to touch: a square, a circle, a rectangle, a strip for the line.' },
    { fr: 'Une imprimante reliée au TBI (bouton 🖨️) ou un appareil photo pour garder la trace.',
      en: 'A printer linked to the board (🖨️ button) or a camera to keep a record.' },
  ],
  ritual: {
    open: { fr: '« Robot, réveille-toi ! » : les enfants s’assoient droits et font « bip bip ». Puis on rappelle deux règles du tableau : un seul doigt, on dit avant de toucher.',
      en: '“Robot, wake up!”: children sit up straight and go “beep beep”. Then recall two board rules: one finger only, say it before you touch.' },
    close: { fr: 'On regarde le dessin du jour et on redit sa recette en trois mots. Puis « Robot, va dormir ! », tête baissée, bip qui s’éteint.',
      en: 'Look at today’s drawing and repeat its recipe in three words. Then “Robot, go to sleep!”, heads down, fading beep.' },
  },
  unplugged: [
    { id: 'ch8-s5:b', when: { fr: 'À chaque séance : rituel d’ouverture et de clôture.', en: 'Every session: opening and closing ritual.' } },
    { id: 'ch8-s4:c', when: { fr: 'Avant s2 : ranger des images dans l’ordre prépare la recette de la maison.', en: 'Before s2: ordering pictures prepares the house recipe.' } },
    { id: 'ch8-s5:a', when: { fr: 'Avant s3 ou s4 : le robot qui obéit à la lettre force des ordres précis.', en: 'Before s3 or s4: the literal-minded robot forces precise orders.' } },
    { id: 'ch8-s2:c', when: { fr: 'Pendant s5 et s7 : les dessinateurs miment le pilote en miroir.', en: 'During s5 and s7: the drawers mirror the pilot’s gesture.' } },
  ],
  pitfalls: [
    { trap: { fr: 'Le pot de peinture 🪣 colorie tout l’écran d’un coup.', en: 'The fill bucket 🪣 colours the whole screen at once.' },
      fix: { fr: 'C’est normal : la zone n’était pas fermée. Touchez ↩️ Annuler, puis fermez la forme.', en: 'That is normal: the area was not closed. Tap ↩️ Undo, then close the shape.' } },
    { trap: { fr: 'Vingt-cinq enfants veulent dessiner en même temps.', en: 'Twenty-five children want to draw at the same time.' },
      fix: { fr: 'Un pilote par étape de la recette, et tous les autres tracent la forme dans l’air.', en: 'One pilot per recipe step, and everyone else draws the shape in the air.' } },
    { trap: { fr: 'Un enfant ferme l’activité en touchant n’importe où.', en: 'A child closes the activity by tapping anywhere.' },
      fix: { fr: 'On ferme la fenêtre par la croix seulement : montrez-la une fois, puis rappelez-le.', en: 'Close the window with the cross only: show it once, then remind them.' } },
    { trap: { fr: 'La gomme 🧽 semble ne rien faire.', en: 'The eraser 🧽 seems to do nothing.' },
      fix: { fr: 'Elle peint en blanc : on le voit seulement sur une zone colorée. Préférez ↩️ Annuler.', en: 'It paints white: you only see it on a coloured area. Prefer ↩️ Undo.' } },
  ],
  observables: [
    { fr: 'L’enfant nomme l’outil avant de le toucher : pinceau, ligne, carré, cercle, pot.', en: 'The child names the tool before tapping it: brush, line, square, circle, bucket.' },
    { fr: 'L’enfant dit « d’abord… ensuite… » en montrant les cartes de la recette.', en: 'The child says “first… then…” while pointing at the recipe cards.' },
    { fr: 'L’enfant trace une forme assez grande pour qu’on la voie du fond de la classe.', en: 'The child draws a shape big enough to be seen from the back of the class.' },
    { fr: 'Quand le pot déborde, l’enfant touche ↩️ Annuler sans paniquer.', en: 'When the bucket spills over, the child taps ↩️ Undo without panicking.' },
    { fr: 'L’enfant de 5 ans explique ses étapes à un camarade devant le dessin imprimé.', en: 'The five-year-old explains their steps to a friend in front of the printed drawing.' },
  ],
  celebration: {
    fr: 'Accrochez tous les dessins imprimés au mur. Chaque enfant vient devant le sien et dit une étape de sa recette. La classe vote pour le visage le plus rigolo et la maison la plus colorée. On termine par « Robot, va dormir ! » tous ensemble.',
    en: 'Hang every printed drawing on the wall. Each child stands in front of theirs and says one step of their recipe. The class votes for the funniest face and the most colourful house. Finish with “Robot, go to sleep!” all together.',
  },
  parents: {
    fr: 'Ce chapitre, votre enfant a dessiné sur le tableau avec Paint : pinceau, formes, pot de peinture. Il a appris à couper un dessin en petites étapes et à les dire dans l’ordre. Le dessin imprimé dans le cahier est sa trace : demandez-lui « qu’est-ce que tu as fait en premier ? ».',
    en: 'This chapter, your child drew on the board with Paint: brush, shapes, fill bucket. They learned to cut a drawing into small steps and say them in order. The printed drawing in the notebook is their record: ask “what did you do first?”.',
  },
}

export const SESSIONS = {
  // ── s1 : Le pinceau et le soleil ─────────────────────────────────────────
  'ch4-s1': {
    concept: 'tool',
    also: ['cause', 'decomposition'],
    duration: 25,
    essential: {
      fr: 'Les enfants découvrent l’écran de Paint : le modèle, la toile, les couleurs, les outils. Ils dessinent un soleil en deux étapes : un rond jaune, puis des rayons au pinceau.',
      en: 'Children discover the Paint screen: the model, the canvas, the colours, the tools. They draw a sun in two steps: a yellow circle, then rays with the brush.',
    },
    setup: [
      { fr: 'Testez 🔊 le son : le tap de chaque geste rassure les enfants.', en: 'Test 🔊 the sound: the tap after each gesture reassures children.' },
      { fr: 'Ouvrez « Le doigt magique » puis « Dessine le soleil » une fois pour voir les boutons.', en: 'Open “Magic finger” then “Draw the sun” once to see the buttons.' },
      { fr: 'Posez un rond jaune en carton et une bande orange près du tableau.', en: 'Put a yellow cardboard circle and an orange strip near the board.' },
      { fr: 'Préparez deux files au sol : les pilotes du doigt magique, les pilotes du soleil.', en: 'Prepare two lines on the floor: magic-finger pilots, sun pilots.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les deux règles du tableau.', en: 'Ritual: “Robot, wake up!” and the two board rules.' } },
      { min: 5, what: { fr: 'Le doigt magique : cinq pilotes glissent le doigt, la classe nomme les couleurs qui apparaissent.', en: 'Magic finger: five pilots slide a finger, the class names the colours that appear.' }, act: 'tot' },
      { min: 4, what: { fr: 'Visite de l’écran Paint : le modèle ☀️ en haut, la toile blanche, les ronds de couleur, les outils.', en: 'Tour of the Paint screen: the ☀️ model at the top, the white canvas, the colour dots, the tools.' }, act: 'a' },
      { min: 8, what: { fr: 'Le soleil : un pilote fait le rond jaune avec ⬭, deux autres ajoutent des rayons au pinceau 🖌️.', en: 'The sun: one pilot makes the yellow circle with ⬭, two more add rays with the brush 🖌️.' }, act: 'a' },
      { min: 3, what: { fr: 'Le vérificateur compare avec le modèle. Un rayon en trop ? On montre ↩️ Annuler.', en: 'The checker compares with the model. One ray too many? Show ↩️ Undo.' } },
      { min: 2, what: { fr: 'Clôture : on redit la recette du soleil, puis « Robot, va dormir ! ».', en: 'Closing: repeat the sun recipe, then “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Le pilote 🎮 dessine avec un seul doigt. Le copilote 🗣️ dit la couleur et l’outil avant le geste. Les dessinateurs ✏️ tracent le rond puis les rayons dans l’air. Le vérificateur 👀 dit si ça ressemble au modèle.',
      en: 'The pilot 🎮 draws with one finger. The co-pilot 🗣️ says the colour and the tool before the gesture. The drawers ✏️ trace the circle then the rays in the air. The checker 👀 says whether it looks like the model.',
    },
    say: [
      { fr: 'Regarde en haut : le modèle, c’est le soleil.', en: 'Look at the top: the model is the sun.' },
      { fr: 'Choisis la couleur d’abord, l’outil ensuite.', en: 'Choose the colour first, the tool next.' },
      { fr: 'Un rond jaune, grand comme ta tête.', en: 'A yellow circle, as big as your head.' },
      { fr: 'Le pinceau glisse, il ne tape pas.', en: 'The brush slides, it does not tap.' },
      { fr: 'Tu t’es trompé ? Touche Annuler, ça revient.', en: 'Made a mistake? Tap Undo, it comes back.' },
    ],
    ask: [
      { fr: 'Qu’est-ce qui change quand tu glisses le doigt magique ?', en: 'What changes when you slide the magic finger?' },
      { fr: 'Où est le jaune ? Montre-le sans toucher.', en: 'Where is yellow? Point at it without touching.' },
      { fr: 'Quel outil fait un rond tout seul ?', en: 'Which tool makes a circle on its own?' },
      { fr: 'Qu’est-ce qu’on dessine en premier, le rond ou les rayons ?', en: 'What do we draw first, the circle or the rays?' },
    ],
    pitfalls: [
      { trap: { fr: 'Le rond est minuscule : l’enfant a tapé au lieu de glisser.', en: 'The circle is tiny: the child tapped instead of sliding.' },
        fix: { fr: 'Touchez ↩️ Annuler. Montrez le geste : poser le doigt, glisser loin, lever.', en: 'Tap ↩️ Undo. Show the gesture: put the finger down, slide far, lift.' } },
      { trap: { fr: 'Le pinceau dessine en bleu : c’est la couleur de départ.', en: 'The brush draws in blue: that is the starting colour.' },
        fix: { fr: 'Faites nommer et toucher le jaune avant chaque pilote.', en: 'Have each pilot name and touch yellow first.' } },
      { trap: { fr: 'Un enfant touche 🗑️ Effacer et tout disparaît.', en: 'A child taps 🗑️ Clear and everything vanishes.' },
        fix: { fr: 'Pas de drame : ↩️ Annuler ramène le dessin. Dites-le à voix haute.', en: 'No drama: ↩️ Undo brings the drawing back. Say it out loud.' } },
      { trap: { fr: 'La fenêtre de l’activité se ferme sans le vouloir.', en: 'The activity window closes by accident.' },
        fix: { fr: 'Rappelez : on ferme par la croix seulement, et c’est la maîtresse qui le fait.', en: 'Remind: close with the cross only, and the teacher does it.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : le doigt magique, puis un seul rond jaune sur la toile de Paint. L’adulte nomme : « tu touches, ça dessine ».', en: '🌱 Age 3: magic finger, then a single yellow circle on the Paint canvas. The adult narrates: “you touch, it draws”.' },
      beg: { fr: '🌟 MS : le rond, puis trois rayons au pinceau. L’enfant dit la couleur avant de toucher et choisit la grosse taille.', en: '🌟 Age 4: the circle, then three rays with the brush. The child says the colour before touching and picks the big size.' },
      pro: { fr: '🏆 GS : rond, rayons tout autour, puis un ciel avec le pot 🪣. L’enfant explique ses trois étapes et imprime.', en: '🏆 Age 5: circle, rays all around, then a sky with the bucket 🪣. The child explains their three steps and prints.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant glisse le doigt sans le lever et regarde la trace apparaître.', en: 'I see the child sliding a finger without lifting and watching the line appear.' },
      beg: { fr: 'Je vois que l’enfant touche le jaune avant de dessiner, sans qu’on le lui dise.', en: 'I see the child touching yellow before drawing, without being told.' },
      pro: { fr: 'Je vois que l’enfant dit « d’abord le rond, ensuite les rayons » avant de commencer.', en: 'I see the child saying “first the circle, then the rays” before starting.' },
      warn: { fr: 'L’enfant tape partout sur l’écran sans regarder : repassez par le doigt magique.', en: 'The child taps all over the screen without looking: go back to the magic finger.' },
    },
    unplugged: {
      id: 'ch8-s2:c',
      bridge: { fr: 'Avant l’écran, jouez au miroir : le pilote trace un rond dans l’air, la classe le copie. Le geste du rond est alors déjà dans les bras.', en: 'Before the screen, play the mirror game: the pilot draws a circle in the air, the class copies it. The circle gesture is then already in their arms.' },
    },
    noSound: {
      fr: 'Sans son, dites vous-même « tap » à chaque geste réussi et faites lever le pouce au vérificateur. Le doigt magique marche sans aucun son.',
      en: 'Without sound, say “tap” yourself after each successful gesture and have the checker raise a thumb. The magic finger works with no sound at all.',
    },
    vocab: [
      { word: { fr: 'Outil = « ce qui dessine »', en: 'Tool = “the thing that draws”' }, gesture: { fr: 'On tend l’index, un seul doigt.', en: 'Point one finger.' } },
      { word: { fr: 'Pinceau = « le doigt qui glisse »', en: 'Brush = “the sliding finger”' }, gesture: { fr: 'On fait onduler le doigt dans l’air.', en: 'Wave a finger through the air.' } },
      { word: { fr: 'Annuler = « ça revient en arrière »', en: 'Undo = “it goes back”' }, gesture: { fr: 'On fait un petit cercle en arrière avec la main.', en: 'Make a small backward circle with the hand.' } },
    ],
    tips: {
      tot: { fr: 'Laissez chaque pilote glisser dix secondes seulement : la file avance et tout le monde passe.', en: 'Let each pilot slide for ten seconds only: the line moves and everyone gets a turn.' },
      a: { fr: 'Faites choisir la taille 3 avant le pinceau : les rayons se voient du fond de la classe.', en: 'Have them pick size 3 before the brush: the rays are visible from the back of the class.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a réveillé Paint. On a fait un soleil en deux étapes : le rond, puis les rayons.',
      en: 'Today we woke up Paint. We made a sun in two steps: the circle, then the rays.',
    },
    parents: {
      fr: 'Votre enfant a découvert Paint sur le tableau de la classe. Il a dessiné un soleil : un rond jaune, puis des rayons au pinceau. Demandez-lui de vous dessiner le même soleil sur une feuille, en disant ses deux étapes.',
      en: 'Your child discovered Paint on the class board. They drew a sun: a yellow circle, then rays with the brush. Ask them to draw the same sun on paper, saying their two steps.',
    },
  },

  // ── s2 : Les formes et la maison ─────────────────────────────────────────
  'ch4-s2': {
    concept: 'decomposition',
    also: ['sequence', 'debug'],
    duration: 30,
    essential: {
      fr: 'La maison devient une recette en quatre étapes : carré, toit, porte, couleurs. Les enfants écoutent chaque carte 🔊, puis dessinent avec le carré, la ligne et le pot de peinture.',
      en: 'The house becomes a four-step recipe: square, roof, door, colours. Children listen to each card 🔊, then draw with the square, the line and the fill bucket.',
    },
    setup: [
      { fr: 'Testez 🔊 le son : les quatre cartes de « La maison en 4 étapes » parlent.', en: 'Test 🔊 the sound: the four cards of “The house in 4 steps” speak.' },
      { fr: 'Préparez quatre cartes papier : carré, toit, porte, pot de peinture, dans le désordre.', en: 'Prepare four paper cards: square, roof, door, bucket, out of order.' },
      { fr: 'Essayez le toit vous-même : deux lignes qui se rejoignent au sommet, bien posées sur le carré.', en: 'Try the roof yourself: two lines meeting at the top, resting on the square.' },
      { fr: 'Ardoises et feutres prêts pour les dessinateurs.', en: 'Whiteboards and markers ready for the drawers.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », un seul doigt, on dit avant de toucher.', en: 'Ritual: “Robot, wake up!”, one finger, say it before touching.' } },
      { min: 5, what: { fr: 'Cartes papier au sol : la classe les range dans l’ordre en disant « d’abord, ensuite, puis, enfin ».', en: 'Paper cards on the floor: the class orders them saying “first, then, next, finally”.' } },
      { min: 4, what: { fr: 'La recette à l’écran : un enfant touche chaque carte 1️⃣ à 4️⃣, on écoute la voix.', en: 'The recipe on screen: a child taps each card 1️⃣ to 4️⃣, we listen to the voice.' }, act: 'steps' },
      { min: 12, what: { fr: 'La maison : un pilote par étape. Carré ⬛ orange, toit avec 📏, porte ⬛ petite, couleurs 🪣.', en: 'The house: one pilot per step. Orange square ⬛, roof with 📏, small door ⬛, colours 🪣.' }, act: 'a' },
      { min: 4, what: { fr: 'Le pot déborde ? ↩️ Annuler, on ferme le toit, on recommence. Le vérificateur valide.', en: 'The bucket spills? ↩️ Undo, close the roof, try again. The checker approves.' } },
      { min: 2, what: { fr: 'Clôture : on redit les quatre étapes avec les doigts, « Robot, va dormir ! ».', en: 'Closing: repeat the four steps on fingers, “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Quatre pilotes 🎮, un par étape. Le copilote 🗣️ lit la carte à voix haute avant le geste. Les dessinateurs ✏️ font la même étape sur l’ardoise. Le vérificateur 👀 compte les étapes faites.',
      en: 'Four pilots 🎮, one per step. The co-pilot 🗣️ reads the card aloud before the gesture. The drawers ✏️ do the same step on their whiteboard. The checker 👀 counts the completed steps.',
    },
    say: [
      { fr: 'On coupe la maison en petits morceaux.', en: 'We cut the house into small pieces.' },
      { fr: 'D’abord le carré, grand, au milieu.', en: 'First the square, big, in the middle.' },
      { fr: 'Le toit, c’est deux lignes qui se touchent en haut.', en: 'The roof is two lines that meet at the top.' },
      { fr: 'Le pot remplit seulement ce qui est fermé.', en: 'The bucket only fills what is closed.' },
      { fr: 'Étape suivante ! Qui vient ?', en: 'Next step! Who is coming?' },
    ],
    ask: [
      { fr: 'Pourquoi le carré vient avant le toit ?', en: 'Why does the square come before the roof?' },
      { fr: 'Que se passe-t-il si les deux lignes du toit ne se touchent pas ?', en: 'What happens if the two roof lines do not meet?' },
      { fr: 'La porte, elle est plus grande ou plus petite que les murs ?', en: 'The door, is it bigger or smaller than the walls?' },
      { fr: 'On a fait combien d’étapes ? Compte sur tes doigts.', en: 'How many steps did we do? Count on your fingers.' },
    ],
    pitfalls: [
      { trap: { fr: 'Le pot 🪣 colorie tout l’écran : le toit n’était pas fermé.', en: 'The bucket 🪣 colours the whole screen: the roof was not closed.' },
        fix: { fr: 'Touchez ↩️ Annuler, prolongez la ligne avec 📏 jusqu’à l’autre, puis remplissez.', en: 'Tap ↩️ Undo, extend the line with 📏 to meet the other, then fill.' } },
      { trap: { fr: 'Le carré est trop petit pour y poser une porte.', en: 'The square is too small to fit a door.' },
        fix: { fr: 'Annulez et montrez : on part d’un coin, on glisse jusqu’au coin opposé.', en: 'Undo and show: start at one corner, slide to the opposite corner.' } },
      { trap: { fr: 'Après le pot, l’enfant choisit une couleur et croit avoir repris le pinceau.', en: 'After the bucket, the child picks a colour and thinks the brush is back.' },
        fix: { fr: 'Dites-le : « choisir une couleur garde le pot ». Pour le pinceau, on touche 🖌️.', en: 'Say it: “choosing a colour keeps the bucket”. For the brush, tap 🖌️.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : une seule étape, le grand carré des murs, d’une seule couleur. L’adulte dit « tu glisses, le carré grandit ».', en: '🌱 Age 3: one step only, the big square of walls, in one colour. The adult says “you slide, the square grows”.' },
      beg: { fr: '🌟 MS : carré puis toit, dans l’ordre de la recette. L’enfant choisit la taille des lignes du toit.', en: '🌟 Age 4: square then roof, in recipe order. The child chooses the size of the roof lines.' },
      pro: { fr: '🏆 GS : les quatre étapes, le pot pour les murs et le toit, puis il explique la recette et imprime.', en: '🏆 Age 5: all four steps, the bucket for walls and roof, then explains the recipe and prints.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant glisse d’un coin à l’autre et lâche quand le carré est grand.', en: 'I see the child sliding from corner to corner and letting go once the square is big.' },
      beg: { fr: 'Je vois que l’enfant montre la carte 2️⃣ avant de toucher l’outil ligne.', en: 'I see the child pointing at card 2️⃣ before tapping the line tool.' },
      pro: { fr: 'Je vois que l’enfant vérifie que le toit est fermé avant de prendre le pot.', en: 'I see the child checking the roof is closed before taking the bucket.' },
      warn: { fr: 'Un enfant refait sans cesse le carré sans passer au toit : revenez aux cartes papier.', en: 'A child keeps redoing the square without moving to the roof: go back to the paper cards.' },
    },
    unplugged: {
      id: 'ch8-s4:c',
      bridge: { fr: 'L’algorithme du matin la veille : réveil, habits, petit-déjeuner, dents. Aujourd’hui, même jeu avec les cartes de la maison : l’ordre compte.', en: 'The morning algorithm the day before: wake up, clothes, breakfast, teeth. Today, the same game with the house cards: order matters.' },
    },
    noSound: {
      fr: 'Sans voix, lisez chaque carte vous-même en montrant son numéro. Faites répéter la phrase par la classe avant le geste.',
      en: 'Without voice, read each card yourself while pointing at its number. Have the class repeat the sentence before the gesture.',
    },
    vocab: [
      { word: { fr: 'Recette = « les étapes dans l’ordre »', en: 'Recipe = “the steps in order”' }, gesture: { fr: 'On avance la main par à-coups, un pas à la fois.', en: 'Move the hand forward in little jumps.' } },
      { word: { fr: 'Carré = « les murs »', en: 'Square = “the walls”' }, gesture: { fr: 'On dessine un carré dans l’air avec l’index.', en: 'Draw a square in the air with the index finger.' } },
      { word: { fr: 'Pot = « ça remplit »', en: 'Bucket = “it fills up”' }, gesture: { fr: 'On renverse un seau imaginaire.', en: 'Tip over an imaginary bucket.' } },
      { word: { fr: 'Fermé = « pas de trou »', en: 'Closed = “no gap”' }, gesture: { fr: 'On joint les deux index en pointe.', en: 'Bring both index fingers together into a point.' } },
    ],
    tips: {
      steps: { fr: 'Faites toucher les cartes dans le désordre exprès, puis demandez laquelle vient vraiment en premier.', en: 'Have the cards tapped out of order on purpose, then ask which one really comes first.' },
      a: { fr: 'Pour le toit, une seule ligne 📏 taille 3 par pilote : deux pilotes, deux pentes, ça se touche en haut.', en: 'For the roof, one 📏 line at size 3 per pilot: two pilots, two slopes, meeting at the top.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a coupé la maison en quatre étapes. On a suivi la recette dans l’ordre.',
      en: 'Today we cut the house into four steps. We followed the recipe in order.',
    },
    parents: {
      fr: 'Votre enfant a dessiné une maison sur le tableau en suivant une recette : carré, toit, porte, couleurs. Il apprend qu’un grand dessin, c’est des petites étapes dans l’ordre. À la maison, demandez-lui « et après le carré, on fait quoi ? ».',
      en: 'Your child drew a house on the board following a recipe: square, roof, door, colours. They are learning that a big drawing is small steps in order. At home, ask “and after the square, what comes next?”.',
    },
  },

  // ── s3 : La ligne et la voiture ──────────────────────────────────────────
  'ch4-s3': {
    concept: 'decomposition',
    also: ['tool', 'sequence'],
    duration: 25,
    essential: {
      fr: 'L’outil ligne 📏 trace la route, puis les formes s’assemblent en voiture : rectangle, deux ronds noirs, petite cabine. Les enfants donnent des ordres précis, comme au robot du sandwich.',
      en: 'The line tool 📏 draws the road, then shapes come together as a car: rectangle, two black circles, small cabin. Children give precise orders, like to the sandwich robot.',
    },
    setup: [
      { fr: 'Testez 🔊 le son et ouvrez « Dessine la voiture » pour vérifier le modèle 🚗.', en: 'Test 🔊 the sound and open “Draw the car” to check the 🚗 model.' },
      { fr: 'Apportez une petite voiture-jouet : on la regarde, on nomme ses morceaux.', en: 'Bring a small toy car: look at it, name its parts.' },
      { fr: 'Dessinez la recette au tableau blanc : route, corps, roues, cabine.', en: 'Draw the recipe on the whiteboard: road, body, wheels, cabin.' },
      { fr: 'Rappelez-vous : le rond ⬭ est plein, deux roues noires suffisent.', en: 'Remember: the ⬭ circle is filled, two black wheels are enough.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 4, what: { fr: 'La voiture-jouet passe de main en main : « elle a quoi ? ». On liste les morceaux.', en: 'The toy car goes round: “what does it have?”. List the parts.' } },
      { min: 4, what: { fr: 'La route : un pilote trace une longue ligne 📏 noire, taille 3, d’un bord à l’autre.', en: 'The road: a pilot draws a long black 📏 line, size 3, from edge to edge.' }, act: 'a' },
      { min: 10, what: { fr: 'La voiture : rectangle ⬛ rouge sur la route, deux ronds ⬭ noirs, petit rectangle pour la cabine.', en: 'The car: red ⬛ rectangle on the road, two black ⬭ circles, small rectangle for the cabin.' }, act: 'a' },
      { min: 2, what: { fr: 'Formes libres : un pilote ajoute la fumée au pinceau 🖌️, gris ou noir.', en: 'Free shapes: a pilot adds smoke with the brush 🖌️, grey or black.' }, act: 'a' },
      { min: 2, what: { fr: 'Clôture : on nomme les quatre morceaux de la voiture, « Robot, va dormir ! ».', en: 'Closing: name the four parts of the car, “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Le copilote 🗣️ donne un ordre précis : « rond noir, en bas à gauche ». Le pilote 🎮 obéit à la lettre, comme un robot. Les dessinateurs ✏️ posent la même forme sur l’ardoise. Le vérificateur 👀 dit si la voiture tient sur la route.',
      en: 'The co-pilot 🗣️ gives a precise order: “black circle, bottom left”. The pilot 🎮 obeys literally, like a robot. The drawers ✏️ put the same shape on their whiteboard. The checker 👀 says whether the car sits on the road.',
    },
    say: [
      { fr: 'La ligne, c’est un trait tout droit, d’ici à là.', en: 'The line is a straight stroke, from here to there.' },
      { fr: 'Dis l’ordre au robot-pilote avant qu’il touche.', en: 'Say the order to the robot-pilot before he touches.' },
      { fr: 'Les roues touchent la route, pas le ciel.', en: 'The wheels touch the road, not the sky.' },
      { fr: 'Un rond, deux ronds : ça roule !', en: 'One circle, two circles: it rolls!' },
    ],
    ask: [
      { fr: 'Quelle forme fait le corps de la voiture ?', en: 'Which shape makes the body of the car?' },
      { fr: 'Pourquoi on trace la route avant la voiture ?', en: 'Why do we draw the road before the car?' },
      { fr: 'Si je dis juste « une roue », le robot la met où ?', en: 'If I only say “a wheel”, where does the robot put it?' },
      { fr: 'Ligne ou pinceau : lequel fait un trait bien droit ?', en: 'Line or brush: which makes a perfectly straight stroke?' },
    ],
    pitfalls: [
      { trap: { fr: 'La ligne 📏 est courte et de travers : le doigt a bougé trop vite.', en: 'The 📏 line is short and crooked: the finger moved too fast.' },
        fix: { fr: '↩️ Annuler, puis guidez : « pose, glisse lentement, lève ». La classe compte jusqu’à trois.', en: '↩️ Undo, then guide: “put down, slide slowly, lift”. The class counts to three.' } },
      { trap: { fr: 'Les roues flottent au-dessus de la route.', en: 'The wheels float above the road.' },
        fix: { fr: 'Le vérificateur montre le trou. On annule et on recommence la roue plus bas.', en: 'The checker points at the gap. Undo and redraw the wheel lower.' } },
      { trap: { fr: 'Le rectangle de la cabine cache une roue.', en: 'The cabin rectangle hides a wheel.' },
        fix: { fr: 'Rappelez l’ordre : corps, roues, cabine. Annulez et posez la cabine en haut.', en: 'Recall the order: body, wheels, cabin. Undo and put the cabin on top.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : une longue ligne noire, la route. L’adulte dit « tu glisses, la route s’allonge ».', en: '🌱 Age 3: one long black line, the road. The adult says “you slide, the road gets longer”.' },
      beg: { fr: '🌟 MS : le rectangle puis les deux roues, en disant chaque forme avant de toucher. Taille 3 pour les roues.', en: '🌟 Age 4: the rectangle then the two wheels, saying each shape before touching. Size 3 for the wheels.' },
      pro: { fr: '🏆 GS : route, corps, roues, cabine, fumée, puis il donne lui-même les ordres à un camarade pilote.', en: '🏆 Age 5: road, body, wheels, cabin, smoke, then gives the orders to a classmate pilot.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant tient le doigt posé du début à la fin de la ligne.', en: 'I see the child keeping the finger down from the start to the end of the line.' },
      beg: { fr: 'Je vois que l’enfant dit « rond noir » avant de toucher le noir puis ⬭.', en: 'I see the child saying “black circle” before tapping black then ⬭.' },
      pro: { fr: 'Je vois que l’enfant précise « en bas à gauche » quand il donne son ordre.', en: 'I see the child specifying “bottom left” when giving an order.' },
      warn: { fr: 'L’enfant change d’outil à chaque seconde sans dessiner : revenez à la voiture-jouet.', en: 'The child switches tools every second without drawing: go back to the toy car.' },
    },
    unplugged: {
      id: 'ch8-s5:a',
      bridge: { fr: 'Le sandwich du robot juste avant : « mets le beurre » ne suffit pas. À l’écran, « mets une roue » ne suffit pas non plus : où, quelle couleur ?', en: 'The robot sandwich just before: “put the butter” is not enough. On screen, “put a wheel” is not enough either: where, which colour?' },
    },
    noSound: {
      fr: 'Sans son, aucune gêne : la voix n’intervient pas dans cette séance. Faites dire « tap » à la classe quand la forme est posée.',
      en: 'No sound is no problem: voice plays no part in this session. Have the class say “tap” when a shape is placed.',
    },
    vocab: [
      { word: { fr: 'Ligne = « un trait tout droit »', en: 'Line = “a straight stroke”' }, gesture: { fr: 'On tend le bras et on coupe l’air d’un coup.', en: 'Stretch the arm and slice the air in one go.' } },
      { word: { fr: 'Rectangle = « un carré allongé »', en: 'Rectangle = “a stretched square”' }, gesture: { fr: 'On écarte les deux mains, paumes face à face.', en: 'Spread both hands apart, palms facing.' } },
      { word: { fr: 'Ordre précis = « où, quoi, quelle couleur »', en: 'Precise order = “where, what, which colour”' }, gesture: { fr: 'On compte trois doigts : où, quoi, couleur.', en: 'Count three fingers: where, what, colour.' } },
    ],
    tips: {
      a: { fr: 'Choisissez le noir avant ⬭ pour les roues : le rond est plein, une roue apparaît d’un seul geste.', en: 'Pick black before ⬭ for the wheels: the circle is filled, a wheel appears in a single gesture.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a tracé une route toute droite. On a assemblé des formes pour faire une voiture.',
      en: 'Today we drew a straight road. We put shapes together to make a car.',
    },
    parents: {
      fr: 'Votre enfant a dessiné une voiture avec des formes : un rectangle, deux ronds, une ligne pour la route. Il a appris à donner un ordre précis : quelle forme, quelle couleur, où. Jouez au robot à la maison : il vous donne les ordres, vous dessinez.',
      en: 'Your child drew a car with shapes: a rectangle, two circles, a line for the road. They learned to give a precise order: which shape, which colour, where. Play robot at home: they give the orders, you draw.',
    },
  },

  // ── s4 : Remplir de couleur, le bateau ───────────────────────────────────
  'ch4-s4': {
    concept: 'decomposition',
    also: ['debug', 'tool'],
    duration: 30,
    essential: {
      fr: 'Le pot de peinture 🪣 devient l’outil vedette : il colore le ciel d’un coup, puis remplit la voile fermée. Les enfants construisent un paysage étape par étape : ciel, mer, nuage, soleil, bateau.',
      en: 'The fill bucket 🪣 is the star tool: it colours the sky in one tap, then fills the closed sail. Children build a landscape step by step: sky, sea, cloud, sun, boat.',
    },
    setup: [
      { fr: 'Testez 🔊 le son, puis ouvrez « Dessine le bateau » et essayez le pot sur la toile vide : tout se colore.', en: 'Test 🔊 the sound, then open “Draw the boat” and try the bucket on the empty canvas: everything gets coloured.' },
      { fr: 'Préparez cinq cartes papier : ciel, mer, nuage, soleil, bateau.', en: 'Prepare five paper cards: sky, sea, cloud, sun, boat.' },
      { fr: 'Essayez la voile : trois lignes 📏 qui se touchent, puis le pot dedans.', en: 'Try the sail: three 📏 lines that meet, then the bucket inside.' },
      { fr: 'Prévoyez le bouton 🖨️ : le paysage est une belle trace pour le cahier.', en: 'Plan for the 🖨️ button: the landscape is a lovely record for the notebook.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », un seul doigt, on dit avant de toucher.', en: 'Ritual: “Robot, wake up!”, one finger, say it before touching.' } },
      { min: 4, what: { fr: 'Cartes au sol : dans quel ordre ? Le ciel avant le bateau, sinon le bateau disparaît.', en: 'Cards on the floor: in what order? Sky before boat, or the boat disappears.' } },
      { min: 6, what: { fr: 'Le ciel : pot 🪣 orange sur la toile vide, tout devient orange. La mer : grand rectangle ⬛ bleu en bas.', en: 'The sky: orange bucket 🪣 on the empty canvas, all turns orange. The sea: big blue ⬛ rectangle at the bottom.' }, act: 'a' },
      { min: 4, what: { fr: 'Nuage et soleil : un ovale ⬭ blanc, un rond ⬭ jaune. Deux pilotes.', en: 'Cloud and sun: a white ⬭ oval, a yellow ⬭ circle. Two pilots.' }, act: 'a' },
      { min: 8, what: { fr: 'Le bateau : coque ⬛ marron sur la mer, mât 📏 noir, voile en trois lignes, pot rouge dedans.', en: 'The boat: brown ⬛ hull on the sea, black 📏 mast, sail in three lines, red bucket inside.' }, act: 'a' },
      { min: 3, what: { fr: 'Vérification : le pot a débordé ? ↩️ Annuler, on ferme la voile. Puis 🖨️.', en: 'Check: did the bucket spill? ↩️ Undo, close the sail. Then 🖨️.' } },
      { min: 2, what: { fr: 'Clôture : on redit les cinq étapes, « Robot, va dormir ! ».', en: 'Closing: repeat the five steps, “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Cinq pilotes 🎮, un par carte. Le copilote 🗣️ annonce « outil, couleur, où ». Les dessinateurs ✏️ tracent la forme dans l’air, très grande. Le vérificateur 👀 crie « débordé ! » si le pot remplit tout.',
      en: 'Five pilots 🎮, one per card. The co-pilot 🗣️ announces “tool, colour, where”. The drawers ✏️ draw the shape in the air, very big. The checker 👀 shouts “spilled!” if the bucket fills everything.',
    },
    say: [
      { fr: 'Le pot cherche un trou. Pas de trou, il reste dedans.', en: 'The bucket looks for a gap. No gap, it stays inside.' },
      { fr: 'Choisis l’orange, prends le pot, touche le ciel.', en: 'Choose orange, take the bucket, touch the sky.' },
      { fr: 'La mer, c’est un grand rectangle bleu tout en bas.', en: 'The sea is a big blue rectangle right at the bottom.' },
      { fr: 'La voile : trois lignes qui se tiennent la main.', en: 'The sail: three lines holding hands.' },
      { fr: 'Ça a débordé ? Annuler, et on répare.', en: 'Did it spill? Undo, and we fix it.' },
    ],
    ask: [
      { fr: 'Pourquoi le ciel est venu en premier ?', en: 'Why did the sky come first?' },
      { fr: 'Qu’a fait le pot quand j’ai touché la toile vide ?', en: 'What did the bucket do when I touched the empty canvas?' },
      { fr: 'Comment savoir si la voile est fermée ?', en: 'How can we tell if the sail is closed?' },
      { fr: 'Quel bouton répare quand le pot a tout coloré ?', en: 'Which button fixes it when the bucket coloured everything?' },
      { fr: 'Il manque quoi pour que le bateau flotte ?', en: 'What is missing for the boat to float?' },
    ],
    pitfalls: [
      { trap: { fr: 'Le pot rouge de la voile colore aussi le ciel : une ligne ne touchait pas l’autre.', en: 'The red bucket for the sail also colours the sky: one line did not meet the other.' },
        fix: { fr: '↩️ Annuler, puis le pilote rallonge la ligne trop courte avec 📏. On réessaie.', en: '↩️ Undo, then the pilot extends the short line with 📏. Try again.' } },
      { trap: { fr: 'Le nuage blanc a disparu : il a été posé avant le ciel orange.', en: 'The white cloud vanished: it was placed before the orange sky.' },
        fix: { fr: 'Non, il est caché par le pot. Refaites-le après le ciel : l’ordre compte.', en: 'No, the bucket hid it. Redo it after the sky: order matters.' } },
      { trap: { fr: 'Le pilote garde le pot sans le savoir et « remplit » au lieu de tracer le mât.', en: 'The pilot keeps the bucket unknowingly and “fills” instead of drawing the mast.' },
        fix: { fr: 'Choisir une couleur garde le pot : faites toucher 📏 avant le mât.', en: 'Choosing a colour keeps the bucket: have them tap 📏 before the mast.' } },
      { trap: { fr: 'Un pilote veut gommer le ciel avec 🧽.', en: 'A pilot wants to erase the sky with 🧽.' },
        fix: { fr: 'La gomme peint en blanc, ça fait des trous. Préférez ↩️ Annuler ou le pot blanc.', en: 'The eraser paints white, it makes holes. Prefer ↩️ Undo or the white bucket.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : le pot sur la toile vide, une seule couleur. L’adulte dit « tu touches, tout le ciel change ».', en: '🌱 Age 3: the bucket on the empty canvas, one colour. The adult says “you touch, the whole sky changes”.' },
      beg: { fr: '🌟 MS : ciel, mer, soleil dans l’ordre des cartes. L’enfant choisit la taille et dit la couleur avant.', en: '🌟 Age 4: sky, sea, sun in card order. The child chooses the size and says the colour first.' },
      pro: { fr: '🏆 GS : le paysage complet, la voile fermée remplie au pot, il explique ses cinq étapes et imprime.', en: '🏆 Age 5: the full landscape, the closed sail filled with the bucket, explains the five steps and prints.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant touche une fois et attend que la couleur apparaisse.', en: 'I see the child tapping once and waiting for the colour to appear.' },
      beg: { fr: 'Je vois que l’enfant regarde la carte suivante avant de choisir son outil.', en: 'I see the child looking at the next card before choosing a tool.' },
      pro: { fr: 'Je vois que l’enfant touche ↩️ Annuler tout seul quand le pot a débordé.', en: 'I see the child tapping ↩️ Undo on their own when the bucket spilled.' },
      warn: { fr: 'L’enfant tape plusieurs fois avec le pot sans comprendre : revenez au sandwich du robot.', en: 'The child taps repeatedly with the bucket without understanding: go back to the robot sandwich.' },
    },
    unplugged: {
      id: 'ch8-s5:a',
      bridge: { fr: 'Le robot-maîtresse à qui on dit « mets la mer » remplit tout le tableau de bleu. Rires, puis on précise : « un rectangle, en bas ». Le pot fait pareil à l’écran.', en: 'The teacher-robot told “put the sea” fills the whole board with blue. Laughter, then they specify: “a rectangle, at the bottom”. The bucket does the same on screen.' },
    },
    noSound: {
      fr: 'Sans son, le vérificateur annonce lui-même « rempli ! » ou « débordé ! » à chaque pot. Aucune voix n’est nécessaire.',
      en: 'Without sound, the checker announces “filled!” or “spilled!” after each bucket tap. No voice is needed.',
    },
    vocab: [
      { word: { fr: 'Pot = « ça remplit d’un coup »', en: 'Bucket = “it fills in one go”' }, gesture: { fr: 'On renverse un seau imaginaire.', en: 'Tip over an imaginary bucket.' } },
      { word: { fr: 'Déborder = « la couleur s’échappe »', en: 'Spill = “the colour escapes”' }, gesture: { fr: 'On ouvre les mains comme de l’eau qui coule.', en: 'Open the hands like flowing water.' } },
      { word: { fr: 'Annuler = « ça revient en arrière »', en: 'Undo = “it goes back”' }, gesture: { fr: 'On fait un petit cercle en arrière avec la main.', en: 'Make a small backward circle with the hand.' } },
      { word: { fr: 'Fermé = « pas de trou »', en: 'Closed = “no gap”' }, gesture: { fr: 'On joint les deux index en pointe.', en: 'Bring both index fingers together into a point.' } },
    ],
    tips: {
      a: { fr: 'Faites déborder le pot exprès une fois devant tous, puis ↩️ Annuler : la peur disparaît.', en: 'Make the bucket spill on purpose once in front of everyone, then ↩️ Undo: the fear is gone.' },
    },
    closing: {
      fr: 'Aujourd’hui, le pot a rempli le ciel et la voile. Quand ça a débordé, on a annulé et réparé.',
      en: 'Today the bucket filled the sky and the sail. When it spilled, we undid and fixed it.',
    },
    parents: {
      fr: 'Votre enfant a dessiné un paysage avec un bateau, en cinq étapes. Il a découvert le pot de peinture qui remplit une zone fermée et le bouton Annuler qui répare. Le dessin imprimé est dans le cahier : demandez-lui ce qui a « débordé ».',
      en: 'Your child drew a landscape with a boat, in five steps. They discovered the fill bucket that fills a closed area and the Undo button that fixes things. The printed drawing is in the notebook: ask them what “spilled”.',
    },
  },

  // ── s5 : Le crayon : chien et soleil ─────────────────────────────────────
  'ch4-s5': {
    concept: 'decomposition',
    also: ['tool', 'sequence'],
    duration: 25,
    essential: {
      fr: 'Le « crayon », c’est le pinceau 🖌️ réglé fin, moyen ou gros : les trois tailles. Les enfants dessinent une tête de chien avec des ronds, puis un soleil au trait fin.',
      en: 'The “pen” is the brush 🖌️ set thin, medium or thick: the three sizes. Children draw a dog face with circles, then a sun with a thin stroke.',
    },
    setup: [
      { fr: 'Testez 🔊 le son et ouvrez « Tête de chien » : repérez les trois boutons de taille.', en: 'Test 🔊 the sound and open “Dog face”: find the three size buttons.' },
      { fr: 'Affichez une photo de chien : on cherche les ronds (tête, yeux, nez) et les ovales (oreilles).', en: 'Display a dog photo: look for circles (head, eyes, nose) and ovals (ears).' },
      { fr: 'Trois feutres de grosseurs différentes sur la table pour comparer aux tailles.', en: 'Three markers of different thickness on the table to compare with the sizes.' },
      { fr: 'Recette au tableau blanc : tête, oreilles, yeux, nez, bouche, puis soleil.', en: 'Recipe on the whiteboard: head, ears, eyes, nose, mouth, then sun.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 4, what: { fr: 'Les trois tailles : un pilote fait un trait fin, un moyen, un gros. On compare aux feutres.', en: 'The three sizes: a pilot draws a thin, a medium, a thick stroke. Compare with the markers.' }, act: 'a' },
      { min: 8, what: { fr: 'La tête de chien : grand rond ⬭ marron, deux ovales pour les oreilles, yeux et nez noirs.', en: 'The dog face: big brown ⬭ circle, two ovals for the ears, black eyes and nose.' }, act: 'a' },
      { min: 5, what: { fr: 'La bouche au pinceau fin, puis un soleil : rond jaune et rayons taille 1.', en: 'The mouth with the thin brush, then a sun: yellow circle and size-1 rays.' }, act: 'a' },
      { min: 3, what: { fr: 'Le vérificateur compte les ronds. On imprime 🖨️ pour le cahier.', en: 'The checker counts the circles. Print 🖨️ for the notebook.' } },
      { min: 2, what: { fr: 'Clôture : on redit la recette du chien, « Robot, va dormir ! ».', en: 'Closing: repeat the dog recipe, “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Le pilote 🎮 dessine un morceau du chien. Le copilote 🗣️ dit la taille et la couleur avant. Les dessinateurs ✏️ font le miroir du pilote : deux oreilles, une de chaque côté. Le vérificateur 👀 compte les yeux.',
      en: 'The pilot 🎮 draws one part of the dog. The co-pilot 🗣️ says the size and the colour first. The drawers ✏️ mirror the pilot: two ears, one on each side. The checker 👀 counts the eyes.',
    },
    say: [
      { fr: 'Le petit point, c’est fin. Le gros point, c’est gros.', en: 'The small dot is thin. The big dot is thick.' },
      { fr: 'La tête, c’est un grand rond marron.', en: 'The head is a big brown circle.' },
      { fr: 'Une oreille à gauche, une oreille à droite, pareil.', en: 'One ear on the left, one on the right, the same.' },
      { fr: 'Pour la bouche, prends le trait fin.', en: 'For the mouth, take the thin stroke.' },
    ],
    ask: [
      { fr: 'Quelle taille pour les rayons du soleil, fine ou grosse ?', en: 'Which size for the sun rays, thin or thick?' },
      { fr: 'Combien de ronds dans la tête du chien ?', en: 'How many circles in the dog face?' },
      { fr: 'Les yeux, on les fait avant ou après la tête ? Pourquoi ?', en: 'Do we make the eyes before or after the head? Why?' },
      { fr: 'Qu’est-ce qui change si je prends le gros trait pour les yeux ?', en: 'What changes if I take the thick stroke for the eyes?' },
    ],
    pitfalls: [
      { trap: { fr: 'Les yeux sont dessinés avant la tête et disparaissent sous le rond marron.', en: 'The eyes are drawn before the head and vanish under the brown circle.' },
        fix: { fr: 'Rappelez l’ordre : la grande forme d’abord, les petites dessus. Annulez et recommencez.', en: 'Recall the order: the big shape first, small ones on top. Undo and start again.' } },
      { trap: { fr: 'Le trait fin ne se voit pas du fond de la classe.', en: 'The thin stroke cannot be seen from the back of the class.' },
        fix: { fr: 'Gardez le fin pour la bouche et les rayons, le gros pour tout le reste.', en: 'Keep thin for the mouth and the rays, thick for everything else.' } },
      { trap: { fr: 'L’enfant choisit la taille mais garde la gomme 🧽 : il « dessine » en blanc.', en: 'The child picks a size but keeps the eraser 🧽: they “draw” in white.' },
        fix: { fr: 'Touchez une couleur : ça quitte la gomme et reprend le pinceau.', en: 'Tap a colour: it leaves the eraser and brings back the brush.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : un grand rond marron, puis deux points noirs au gros pinceau. L’adulte dit « tu touches, l’œil apparaît ».', en: '🌱 Age 3: one big brown circle, then two black dots with the thick brush. The adult says “you touch, the eye appears”.' },
      beg: { fr: '🌟 MS : tête, oreilles, yeux dans l’ordre. L’enfant choisit la taille et l’annonce avant.', en: '🌟 Age 4: head, ears, eyes in order. The child chooses the size and announces it first.' },
      pro: { fr: '🏆 GS : le chien complet, la bouche au trait fin, le soleil, puis il explique pourquoi la tête vient en premier.', en: '🏆 Age 5: the full dog, the mouth in a thin stroke, the sun, then explains why the head comes first.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant pose deux points et dit « les yeux ».', en: 'I see the child placing two dots and saying “the eyes”.' },
      beg: { fr: 'Je vois que l’enfant touche le bouton taille avant de dessiner.', en: 'I see the child tapping the size button before drawing.' },
      pro: { fr: 'Je vois que l’enfant place la deuxième oreille en face de la première, en miroir.', en: 'I see the child placing the second ear opposite the first, mirrored.' },
      warn: { fr: 'L’enfant gribouille au gros pinceau sans forme : revenez au rond en carton.', en: 'The child scribbles with the thick brush without any shape: go back to the cardboard circle.' },
    },
    unplugged: {
      id: 'ch8-s2:c',
      bridge: { fr: 'Le jeu du miroir avant l’écran : un enfant trace une oreille dans l’air, son camarade trace l’autre en face. Les deux oreilles du chien sont un miroir.', en: 'The mirror game before the screen: one child draws an ear in the air, their partner draws the other opposite. The dog’s two ears are a mirror.' },
    },
    noSound: {
      fr: 'Sans son, rien ne manque : montrez les tailles avec les trois feutres et faites dire « fin, moyen, gros » par la classe.',
      en: 'Without sound, nothing is missing: show the sizes with the three markers and have the class say “thin, medium, thick”.',
    },
    vocab: [
      { word: { fr: 'Taille = « fin, moyen, gros »', en: 'Size = “thin, medium, thick”' }, gesture: { fr: 'On écarte le pouce et l’index : un peu, plus, beaucoup.', en: 'Open thumb and index: a little, more, a lot.' } },
      { word: { fr: 'Crayon = « le pinceau fin »', en: 'Pen = “the thin brush”' }, gesture: { fr: 'On pince un crayon invisible entre deux doigts.', en: 'Pinch an invisible pen between two fingers.' } },
      { word: { fr: 'Miroir = « pareil de l’autre côté »', en: 'Mirror = “the same on the other side”' }, gesture: { fr: 'On lève les deux mains, paumes face à face.', en: 'Raise both hands, palms facing.' } },
    ],
    tips: {
      a: { fr: 'Pour les oreilles, l’ovale ⬭ étiré vers le bas suffit : on glisse en hauteur plus qu’en largeur.', en: 'For the ears, the ⬭ oval stretched downward is enough: slide more in height than in width.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a réglé la taille du pinceau. On a fait un chien avec des ronds, la grande forme d’abord.',
      en: 'Today we set the brush size. We made a dog out of circles, the big shape first.',
    },
    parents: {
      fr: 'Votre enfant a dessiné une tête de chien avec des ronds et des ovales, puis un soleil au trait fin. Il a appris à choisir l’épaisseur du trait et à faire la grande forme avant les petites. Regardez ensemble le dessin imprimé et comptez les ronds.',
      en: 'Your child drew a dog face with circles and ovals, then a sun with a thin stroke. They learned to choose the stroke thickness and make the big shape before the small ones. Look at the printed drawing together and count the circles.',
    },
  },

  // ── s6 : Glace et gâteau ─────────────────────────────────────────────────
  'ch4-s6': {
    concept: 'decomposition',
    also: ['sequence', 'debug'],
    duration: 25,
    essential: {
      fr: 'Deux recettes gourmandes : le cornet en trois lignes, les boules en ovales empilées ; puis le gâteau en rectangle avec ses bougies. L’ordre compte : le cornet avant les boules, sinon la glace tombe.',
      en: 'Two tasty recipes: the cone in three lines, the scoops as stacked ovals; then the cake as a rectangle with candles. Order matters: the cone before the scoops, or the ice cream falls.',
    },
    setup: [
      { fr: 'Testez 🔊 le son, ouvrez « Glace et gâteau » et repérez le modèle 🍦.', en: 'Test 🔊 the sound, open “Ice cream and cake” and find the 🍦 model.' },
      { fr: 'Essayez le cornet : trois lignes 📏 marron, pointe en bas, puis le pot marron dedans.', en: 'Try the cone: three brown 📏 lines, point at the bottom, then the brown bucket inside.' },
      { fr: 'Cartes papier : cornet, boule, boule, boule ; puis gâteau, bougies, flammes.', en: 'Paper cards: cone, scoop, scoop, scoop; then cake, candles, flames.' },
      { fr: 'Décidez les parfums : rose fraise, jaune vanille, vert menthe.', en: 'Decide the flavours: pink strawberry, yellow vanilla, green mint.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », un seul doigt, on dit avant de toucher.', en: 'Ritual: “Robot, wake up!”, one finger, say it before touching.' } },
      { min: 5, what: { fr: 'Le cornet : trois pilotes, une ligne 📏 marron chacun. Elles doivent se toucher. Pot marron.', en: 'The cone: three pilots, one brown 📏 line each. They must meet. Brown bucket.' }, act: 'a' },
      { min: 5, what: { fr: 'Les boules : un ovale ⬭ rose sur le cornet, un jaune dessus, un vert tout en haut.', en: 'The scoops: a pink ⬭ oval on the cone, a yellow one above, a green one on top.' }, act: 'a' },
      { min: 7, what: { fr: 'Le gâteau : rectangle ⬛ marron, bougies en lignes 📏 fines, flammes en petits ronds jaunes.', en: 'The cake: brown ⬛ rectangle, candles as thin 📏 lines, flames as small yellow circles.' }, act: 'a' },
      { min: 3, what: { fr: 'Galerie : le vérificateur nomme les parfums et compte les bougies. Un raté ? ↩️ Annuler.', en: 'Gallery: the checker names the flavours and counts the candles. A slip? ↩️ Undo.' } },
      { min: 2, what: { fr: 'Clôture : « d’abord le cornet, ensuite les boules », « Robot, va dormir ! ».', en: 'Closing: “first the cone, then the scoops”, “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Les pilotes 🎮 se relaient à chaque ligne et chaque boule. Le copilote 🗣️ dit le parfum et la forme avant. Les dessinateurs ✏️ empilent les boules sur l’ardoise. Le vérificateur 👀 vérifie que la glace ne tombe pas du cornet.',
      en: 'The pilots 🎮 take turns at each line and each scoop. The co-pilot 🗣️ says the flavour and the shape first. The drawers ✏️ stack the scoops on their whiteboard. The checker 👀 checks the ice cream does not fall off the cone.',
    },
    say: [
      { fr: 'Le cornet, c’est un triangle : trois lignes, pointe en bas.', en: 'The cone is a triangle: three lines, point at the bottom.' },
      { fr: 'Les lignes se tiennent la main, sinon le pot déborde.', en: 'The lines hold hands, or the bucket spills.' },
      { fr: 'Une boule rose, posée sur le cornet.', en: 'A pink scoop, sitting on the cone.' },
      { fr: 'Bougie : trait fin. Flamme : petit rond jaune.', en: 'Candle: thin line. Flame: small yellow circle.' },
      { fr: 'Combien de bougies ? Ton âge !', en: 'How many candles? Your age!' },
    ],
    ask: [
      { fr: 'Pourquoi on fait le cornet avant les boules ?', en: 'Why do we make the cone before the scoops?' },
      { fr: 'Quel outil fait une boule d’un seul geste ?', en: 'Which tool makes a scoop in a single gesture?' },
      { fr: 'La flamme, elle va au-dessus ou en dessous de la bougie ?', en: 'The flame, does it go above or below the candle?' },
      { fr: 'Comment on sait que le cornet est fermé ?', en: 'How do we know the cone is closed?' },
    ],
    pitfalls: [
      { trap: { fr: 'Le pot marron du cornet remplit tout l’écran.', en: 'The brown bucket for the cone fills the whole screen.' },
        fix: { fr: '↩️ Annuler, puis le vérificateur cherche le trou. Une ligne 📏 courte le bouche.', en: '↩️ Undo, then the checker finds the gap. A short 📏 line plugs it.' } },
      { trap: { fr: 'La boule est posée à côté du cornet, pas dessus.', en: 'The scoop is placed next to the cone, not on it.' },
        fix: { fr: 'Annulez. Faites poser le doigt exactement sur la pointe haute du cornet avant de glisser.', en: 'Undo. Have them put the finger exactly on the top of the cone before sliding.' } },
      { trap: { fr: 'Les bougies sont si fines qu’on ne les voit pas.', en: 'The candles are so thin they cannot be seen.' },
        fix: { fr: 'Prenez la taille 2 pour les bougies et gardez la taille 1 pour la flamme.', en: 'Use size 2 for the candles and keep size 1 for the flame.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : une seule boule rose, grande, au milieu. L’adulte dit « tu glisses, la boule grossit ».', en: '🌱 Age 3: one pink scoop, big, in the middle. The adult says “you slide, the scoop grows”.' },
      beg: { fr: '🌟 MS : cornet déjà fait par la maîtresse, puis deux boules dans l’ordre, en choisissant la taille des lignes.', en: '🌟 Age 4: cone already drawn by the teacher, then two scoops in order, choosing the line size.' },
      pro: { fr: '🏆 GS : cornet en trois lignes, pot marron, trois boules, gâteau avec bougies, puis il explique et imprime.', en: '🏆 Age 5: cone in three lines, brown bucket, three scoops, cake with candles, then explains and prints.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant lâche le doigt quand la boule est assez grosse.', en: 'I see the child letting go when the scoop is big enough.' },
      beg: { fr: 'Je vois que l’enfant pose la deuxième boule sur la première, pas à côté.', en: 'I see the child placing the second scoop on the first, not beside it.' },
      pro: { fr: 'Je vois que l’enfant vérifie les trois coins du cornet avant de prendre le pot.', en: 'I see the child checking the three corners of the cone before taking the bucket.' },
      warn: { fr: 'L’enfant empile sans regarder et les boules se chevauchent n’importe comment : ralentissez, une boule par pilote.', en: 'The child stacks without looking and the scoops overlap randomly: slow down, one scoop per pilot.' },
    },
    unplugged: {
      id: 'ch8-s5:a',
      bridge: { fr: 'Le robot-maîtresse qui « pose la boule » sans cornet la fait tomber par terre. Les enfants réparent l’ordre : cornet d’abord. À l’écran, même règle.', en: 'The teacher-robot who “puts the scoop” without a cone drops it on the floor. Children fix the order: cone first. On screen, same rule.' },
    },
    noSound: {
      fr: 'Sans son, faites chanter « d’abord, ensuite, et puis » à la classe en montrant les cartes. Le tap n’est pas indispensable.',
      en: 'Without sound, have the class chant “first, then, and then” while pointing at the cards. The tap is not essential.',
    },
    vocab: [
      { word: { fr: 'Triangle = « trois lignes qui se touchent »', en: 'Triangle = “three lines that meet”' }, gesture: { fr: 'On forme un triangle avec les deux mains, pouces en bas.', en: 'Form a triangle with both hands, thumbs at the bottom.' } },
      { word: { fr: 'Ovale = « un rond allongé »', en: 'Oval = “a stretched circle”' }, gesture: { fr: 'On dessine un œuf dans l’air.', en: 'Draw an egg in the air.' } },
      { word: { fr: 'Empiler = « l’un sur l’autre »', en: 'Stack = “one on top of the other”' }, gesture: { fr: 'On pose une main sur l’autre, puis encore.', en: 'Put one hand on the other, then again.' } },
    ],
    tips: {
      a: { fr: 'Dessinez le cornet marron d’abord, les boules pourront le chevaucher : le dessus cache toujours le dessous.', en: 'Draw the brown cone first, the scoops can overlap it: what is on top always hides what is below.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a fait une glace et un gâteau. D’abord le cornet, ensuite les boules : l’ordre compte.',
      en: 'Today we made an ice cream and a cake. First the cone, then the scoops: order matters.',
    },
    parents: {
      fr: 'Votre enfant a dessiné une glace à trois boules et un gâteau à bougies, en suivant une recette. Il sait que le cornet vient avant les boules, sinon la glace tombe. Demandez-lui de vous dire les parfums de sa glace sur le dessin imprimé.',
      en: 'Your child drew a three-scoop ice cream and a cake with candles, following a recipe. They know the cone comes before the scoops, or the ice cream falls. Ask them to tell you the flavours on the printed drawing.',
    },
  },

  // ── s7 : Des visages avec des cercles ────────────────────────────────────
  'ch4-s7': {
    concept: 'decomposition',
    also: ['sequence', 'debug'],
    duration: 30,
    essential: {
      fr: 'La recette du bonhomme a cinq étapes : tête, yeux, nez, bouche, couleurs. Les enfants la suivent à la lettre, puis s’amusent : huit cercles qui deviennent huit visages rigolos.',
      en: 'The face recipe has five steps: head, eyes, nose, mouth, colours. Children follow it exactly, then have fun: eight circles that become eight funny faces.',
    },
    setup: [
      { fr: 'Testez 🔊 le son : les cinq cartes de « La recette du bonhomme » parlent.', en: 'Test 🔊 the sound: the five cards of “The face recipe” speak.' },
      { fr: 'Cinq cartes papier mélangées : tête, yeux, nez, bouche, couleurs.', en: 'Five paper cards shuffled: head, eyes, nose, mouth, colours.' },
      { fr: 'Ouvrez « Des visages rigolos » et posez vous-même huit cercles de couleurs différentes.', en: 'Open “Funny faces” and place eight circles of different colours yourself.' },
      { fr: 'Papier dans l’imprimante : c’est la séance des traces pour la fête du chapitre.', en: 'Paper in the printer: this is the session for records for the chapter party.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 4, what: { fr: 'Les cartes 🔊 : cinq enfants touchent 1️⃣ à 5️⃣ ; la classe mime chaque étape sur son visage.', en: 'The 🔊 cards: five children tap 1️⃣ to 5️⃣; the class mimes each step on their own face.' }, act: 'steps' },
      { min: 10, what: { fr: 'Le bonhomme : cinq pilotes. Grand rond ⬭, deux petits ronds noirs, ligne 📏 pour le nez, bouche au pinceau, pot pour les cheveux.', en: 'The face: five pilots. Big ⬭ circle, two small black circles, 📏 line for the nose, mouth with the brush, bucket for the hair.' }, act: 'b' },
      { min: 8, what: { fr: 'Visages rigolos : sur les huit cercles préparés, chaque pilote transforme un rond en visage.', en: 'Funny faces: on the eight prepared circles, each pilot turns one circle into a face.' }, act: 'a' },
      { min: 3, what: { fr: 'Un enfant explique sa recette devant le tableau, puis on imprime 🖨️.', en: 'A child explains their recipe in front of the board, then print 🖨️.' } },
      { min: 2, what: { fr: 'Clôture : les cinq étapes sur les cinq doigts, « Robot, va dormir ! ».', en: 'Closing: five steps on five fingers, “Robot, go to sleep!”.' } },
    ],
    roles: {
      fr: 'Cinq pilotes 🎮 pour la recette, puis huit pour les visages. Le copilote 🗣️ annonce la carte et la couleur. Les dessinateurs ✏️ font le bonhomme sur l’ardoise, étape par étape. Le vérificateur 👀 dit si le visage sourit.',
      en: 'Five pilots 🎮 for the recipe, then eight for the faces. The co-pilot 🗣️ announces the card and the colour. The drawers ✏️ draw the face on their whiteboard, step by step. The checker 👀 says whether the face is smiling.',
    },
    say: [
      { fr: 'Cinq étapes, cinq doigts : tête, yeux, nez, bouche, couleurs.', en: 'Five steps, five fingers: head, eyes, nose, mouth, colours.' },
      { fr: 'La tête d’abord, sinon les yeux n’ont pas de maison.', en: 'The head first, or the eyes have no home.' },
      { fr: 'La bouche qui sourit, c’est une ligne courbe au pinceau.', en: 'The smiling mouth is a curved line with the brush.' },
      { fr: 'Maintenant, rends ce rond rigolo !', en: 'Now, make this circle funny!' },
      { fr: 'Raconte ta recette : d’abord, ensuite, et puis…', en: 'Tell your recipe: first, then, and then…' },
    ],
    ask: [
      { fr: 'Que se passe-t-il si on fait les yeux avant la tête ?', en: 'What happens if we make the eyes before the head?' },
      { fr: 'Quel outil pour une bouche qui sourit ?', en: 'Which tool for a smiling mouth?' },
      { fr: 'Comment rendre ce visage triste au lieu de content ?', en: 'How can we make this face sad instead of happy?' },
      { fr: 'Le pot des cheveux, il remplit quoi si on touche la tête ?', en: 'The hair bucket, what does it fill if you touch the head?' },
      { fr: 'Ta recette a combien d’étapes ? Montre-les sur tes doigts.', en: 'How many steps in your recipe? Show them on your fingers.' },
    ],
    pitfalls: [
      { trap: { fr: 'Le pot des joues recolore toute la tête.', en: 'The cheek bucket recolours the whole head.' },
        fix: { fr: 'Normal : la tête est une seule zone. ↩️ Annuler, puis joues en petits ronds ⬭ roses.', en: 'Normal: the head is a single area. ↩️ Undo, then cheeks as small pink ⬭ circles.' } },
      { trap: { fr: 'Les petits ronds des yeux sont invisibles : même couleur que la tête.', en: 'The small eye circles are invisible: same colour as the head.' },
        fix: { fr: 'Faites nommer et toucher le noir avant chaque œil.', en: 'Have them name and tap black before each eye.' } },
      { trap: { fr: 'Le huitième pilote efface tout avec 🗑️ par impatience.', en: 'The eighth pilot clears everything with 🗑️ out of impatience.' },
        fix: { fr: '↩️ Annuler ramène les visages. Rappelez : on ferme par la croix seulement, pas par Effacer.', en: '↩️ Undo brings the faces back. Remind: close with the cross only, never with Clear.' } },
      { trap: { fr: 'Le nez en ligne 📏 traverse tout le visage.', en: 'The 📏 line nose crosses the whole face.' },
        fix: { fr: 'Annulez ; « une petite ligne » : on compte un seul temps en glissant.', en: 'Undo; “a small line”: count just one beat while sliding.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 PS : un grand rond et deux points noirs pour les yeux. L’adulte dit « tu touches, le bonhomme regarde ».', en: '🌱 Age 3: one big circle and two black dots for the eyes. The adult says “you touch, the face looks at you”.' },
      beg: { fr: '🌟 MS : tête, yeux, bouche dans l’ordre des cartes ; il choisit la taille du pinceau pour la bouche.', en: '🌟 Age 4: head, eyes, mouth in card order; chooses the brush size for the mouth.' },
      pro: { fr: '🏆 GS : les cinq étapes, le pot pour les cheveux, un visage rigolo différent, puis il explique et imprime.', en: '🏆 Age 5: all five steps, the bucket for the hair, a different funny face, then explains and prints.' },
    },
    observe: {
      tot: { fr: 'Je vois que l’enfant pose les deux yeux dans le rond, pas à côté.', en: 'I see the child placing both eyes inside the circle, not beside it.' },
      beg: { fr: 'Je vois que l’enfant regarde la carte suivante avant de choisir son outil.', en: 'I see the child looking at the next card before choosing a tool.' },
      pro: { fr: 'Je vois que l’enfant raconte ses cinq étapes dans l’ordre sans regarder les cartes.', en: 'I see the child telling their five steps in order without looking at the cards.' },
      warn: { fr: 'L’enfant dessine des yeux partout sur l’écran sans tête : revenez à la carte 1️⃣.', en: 'The child draws eyes all over the screen with no head: go back to card 1️⃣.' },
    },
    unplugged: {
      id: 'ch8-s4:c',
      bridge: { fr: 'L’algorithme du matin en quatre images, puis la recette du bonhomme en cinq cartes : même jeu, on range dans l’ordre avant d’aller à l’écran.', en: 'The morning algorithm in four pictures, then the face recipe in five cards: same game, put them in order before going to the screen.' },
    },
    noSound: {
      fr: 'Sans voix, lisez chaque carte en la montrant et faites mimer l’étape sur le visage. Le mime remplace le 🔊.',
      en: 'Without voice, read each card while pointing at it and have the step mimed on the face. Miming replaces the 🔊.',
    },
    vocab: [
      { word: { fr: 'Recette = « les étapes dans l’ordre »', en: 'Recipe = “the steps in order”' }, gesture: { fr: 'On avance la main par à-coups, un pas à la fois.', en: 'Move the hand forward in little jumps.' } },
      { word: { fr: 'Cercle = « un rond tout fermé »', en: 'Circle = “a fully closed round”' }, gesture: { fr: 'On dessine un rond dans l’air et on le ferme.', en: 'Draw a circle in the air and close it.' } },
      { word: { fr: 'Ligne courbe = « qui sourit »', en: 'Curved line = “that smiles”' }, gesture: { fr: 'On trace un sourire dans l’air avec l’index.', en: 'Trace a smile in the air with the index finger.' } },
      { word: { fr: 'Annuler = « ça revient en arrière »', en: 'Undo = “it goes back”' }, gesture: { fr: 'On fait un petit cercle en arrière avec la main.', en: 'Make a small backward circle with the hand.' } },
    ],
    tips: {
      steps: { fr: 'Après chaque carte 🔊, faites mimer l’étape sur son propre visage : la recette passe dans le corps.', en: 'After each 🔊 card, have the step mimed on their own face: the recipe goes into the body.' },
      b: { fr: 'Pour les cheveux, touchez avec le pot juste au-dessus de la tête : le fond blanc devient la chevelure.', en: 'For the hair, tap with the bucket just above the head: the white background becomes the hair.' },
      a: { fr: 'Posez les huit cercles avant les enfants avec des couleurs différentes : chaque pilote reconnaît le sien.', en: 'Place the eight circles before the children arrive, in different colours: each pilot recognises theirs.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a suivi une recette en cinq étapes. Puis on a transformé des ronds en visages rigolos.',
      en: 'Today we followed a five-step recipe. Then we turned circles into funny faces.',
    },
    parents: {
      fr: 'Votre enfant a dessiné un bonhomme en cinq étapes : tête, yeux, nez, bouche, couleurs. Puis il a inventé des visages rigolos. Le dessin imprimé est dans le cahier : demandez-lui de vous raconter la recette avec ses cinq doigts.',
      en: 'Your child drew a face in five steps: head, eyes, nose, mouth, colours. Then they invented funny faces. The printed drawing is in the notebook: ask them to tell you the recipe on their five fingers.',
    },
  },
}
