// Guide du professeur — chapitre 6 : Je code avec ScratchJr
// Le site prépare à ScratchJr avec des blocs simplifiés (ScratchBlocks), la
// grille à coordonnées (DogGrid) et deux mini-jeux. Le vrai logiciel ScratchJr
// n’est pas dans le site : c’est un prolongement possible sur tablette.

export const CHAPTER = {
  thread: {
    fr: 'Tic le chat ne fait rien tout seul : il attend nos blocs. On range les blocs dans l’ordre, on appuie sur le drapeau, et Tic obéit. Puis on apprend à dire où il est avec deux nombres, et à répéter un bloc « encore, encore, encore ».',
    en: 'Tic the cat does nothing on his own: he waits for our blocks. We line up the blocks in order, press the flag, and Tic obeys. Then we learn to say where he is with two numbers, and to repeat a block “again, again, again”.',
  },
  concepts: ['sequence', 'abstraction', 'loop', 'tool'],
  domains: [
    { fr: 'Explorer le monde — se repérer dans l’espace : nommer une case avec deux nombres, suivre un chemin sur un quadrillage.', en: 'Exploring the world — spatial awareness: name a square with two numbers, follow a path on a grid.' },
    { fr: 'Construire les premiers outils pour structurer sa pensée : compter jusqu’à 8, dire « 3 blocs sauter = 3 sauts ».', en: 'First tools to structure thinking: count up to 8, say “3 jump blocks = 3 jumps”.' },
    { fr: 'Mobiliser le langage : raconter ce que va faire Tic avec « d’abord, ensuite, et puis ».', en: 'Using language: tell what Tic will do with “first, then, and then”.' },
  ],
  rhythm: {
    fr: 'Cinq séances de 25 à 30 minutes, une par semaine, en période 4 ou 5. Séances « cœur » : s1, s2 et s5. Si le temps manque, coupez s3 (même grille que s2) ou s4 (juste le bloc « dire »). Les tout-petits font seulement l’activité 🌱 de chaque séance.',
    en: 'Five sessions of 25 to 30 minutes, one a week, in term 4 or 5. Core sessions: s1, s2 and s5. If time is short, drop s3 (same grid as s2) or s4 (just the “say” block). The youngest only do the 🌱 activity of each session.',
  },
  materials: [
    { fr: 'Le TBI tactile avec le son testé (bouton 🔊 et bulle « Bonjour ! »).', en: 'The touch board with sound tested (🔊 button and the “Hello!” bubble).' },
    { fr: 'Une fois pour tout le chapitre : 6 grandes cartes-blocs en carton (➡️ ⬅️ ⬆️ ⬇️ bleues, 🦘 violette, 💬 verte) et un drapeau vert 🚩.', en: 'Once for the whole chapter: 6 big cardboard block cards (➡️ ⬅️ ⬆️ ⬇️ blue, 🦘 purple, 💬 green) and a green flag 🚩.' },
    { fr: 'Un quadrillage au sol 4 × 4 (scotch de couleur) avec les nombres 1 à 4 écrits sur les bords.', en: 'A 4 × 4 floor grid (coloured tape) with the numbers 1 to 4 written along the edges.' },
    { fr: 'Une carte 🔁 avec le chiffre 3, pour la dernière séance.', en: 'A 🔁 card with the number 3, for the last session.' },
    { fr: 'Option : une tablette avec le vrai ScratchJr, pour prolonger avec deux ou trois enfants.', en: 'Optional: a tablet with the real ScratchJr, to extend with two or three children.' },
  ],
  ritual: {
    open: { fr: '« Robot, réveille-toi ! » : on s’assoit droit, bras pliés, « bip bip ». Puis on écoute les règles du tableau (ch1-s1:rules).', en: '“Robot, wake up!”: sit up straight, arms bent, “beep beep”. Then listen to the board rules (ch1-s1:rules).' },
    close: { fr: '« Robot, va dormir ! » : tête baissée, yeux fermés, le bip s’éteint. On dit en une phrase ce que Tic a appris.', en: '“Robot, go to sleep!”: head down, eyes closed, the beep fades. Say in one sentence what Tic learned.' },
  },
  unplugged: [
    { id: 'ch8-s1:b', when: { fr: 'Avant s1 : le parcours codé avec des cartes flèches, pour vivre la suite de blocs avec le corps.', en: 'Before s1: the coded path with arrow cards, to live the block sequence with the body.' } },
    { id: 'ch8-s3:b', when: { fr: 'Pendant s2 : le pixel-art codé, pour lire les cases d’un quadrillage.', en: 'During s2: coded pixel art, to read the squares of a grid.' } },
    { id: 'ch8-s4:b', when: { fr: 'Après s4 : passer le message des robots, comme un programme qui voyage.', en: 'After s4: pass the robots’ message, like a program that travels.' } },
    { id: 'ch8-s5:d', when: { fr: 'Juste avant s5 : le chef d’orchestre, pour nommer « répéter ×3 » avec le corps.', en: 'Right before s5: the conductor, to name “repeat ×3” with the body.' } },
  ],
  pitfalls: [
    { trap: { fr: 'Les enfants veulent tous toucher le tableau en même temps.', en: 'All the children want to touch the board at once.' },
      fix: { fr: 'Un seul pilote, un copilote qui dit le bloc, la classe mime Tic avec le corps.', en: 'One pilot, one co-pilot who says the block, the class mimes Tic with the body.' } },
    { trap: { fr: 'On appuie sur le drapeau sans savoir ce que Tic va faire.', en: 'The flag gets pressed without knowing what Tic will do.' },
      fix: { fr: 'Avant chaque Go, la classe « lit » la bande de blocs à voix haute.', en: 'Before each Go, the class “reads” the block strip aloud.' } },
    { trap: { fr: 'Vous cherchez le vrai ScratchJr dans le site.', en: 'You look for the real ScratchJr in the site.' },
      fix: { fr: 'Il n’y est pas : le site prépare. ScratchJr sur tablette est un bonus si vous l’avez.', en: 'It is not there: the site prepares. ScratchJr on a tablet is a bonus if you have it.' } },
  ],
  observables: [
    { fr: 'Pose deux blocs dans le bon ordre et appuie sur le drapeau tout seul.', en: 'Places two blocks in the right order and presses the flag alone.' },
    { fr: 'Dit ce que Tic va faire avant d’appuyer sur Go.', en: 'Says what Tic will do before pressing Go.' },
    { fr: 'Nomme la case de Tic avec ses deux nombres, colonne d’abord.', en: 'Names Tic’s square with its two numbers, column first.' },
    { fr: 'Retire le bloc qui gêne au lieu de tout recommencer.', en: 'Removes the block that gets in the way instead of starting over.' },
    { fr: 'Dit « répéter 3 fois » pour trois blocs « sauter » identiques.', en: 'Says “repeat 3 times” for three identical “jump” blocks.' },
    { fr: 'Mime le programme avec le corps quand un camarade pilote.', en: 'Mimes the program with the body while a classmate pilots.' },
  ],
  celebration: {
    fr: 'Le spectacle de Tic : chaque groupe invente un programme de 4 blocs. La classe le lit, prédit, puis on appuie sur le drapeau. On termine par le ballon qui saute 3 fois, tout le monde saute avec lui.',
    en: 'Tic’s show: each group invents a 4-block program. The class reads it, predicts, then we press the flag. We end with the ball jumping 3 times, everyone jumping along.',
  },
  parents: {
    fr: 'Ce mois-ci, nous avons programmé Tic le chat avec des blocs : d’abord, ensuite, et puis. Votre enfant sait dire où est Tic avec deux nombres et compter les sauts du ballon. Demandez-lui : « Combien de blocs pour faire sauter le ballon 3 fois ? »',
    en: 'This month we programmed Tic the cat with blocks: first, then, and then. Your child can say where Tic is with two numbers and count the ball’s jumps. Ask them: “How many blocks to make the ball jump 3 times?”',
  },
}

export const SESSIONS = {
  // ── s1 : Tic fait ses premiers pas ────────────────────────────────────────
  'ch6-s1': {
    concept: 'sequence',
    also: ['cause', 'tool'],
    duration: 25,
    essential: {
      fr: 'Les enfants découvrent la scène, les blocs de couleur et le drapeau vert. Ils comprennent que Tic ne bouge qu’après le drapeau, et qu’il suit les blocs dans l’ordre.',
      en: 'The children discover the stage, the coloured blocks and the green flag. They understand that Tic only moves after the flag, and that he follows the blocks in order.',
    },
    setup: [
      { fr: 'Testez 🔊 : le « Youpi ! » de la danse et les bips des pas doivent s’entendre du fond de la classe.', en: 'Test 🔊: the dance’s “Yay!” and the step beeps must be heard from the back of the room.' },
      { fr: 'Ouvrez « Tic avance de 5 pas » et vérifiez que la palette montre ➡️ ⬅️ ⬆️ ⬇️ 🦘.', en: 'Open “Tic walks 5 steps” and check the palette shows ➡️ ⬅️ ⬆️ ⬇️ 🦘.' },
      { fr: 'Posez les cartes-blocs en carton au sol, près du tableau, dans le même ordre que la palette.', en: 'Lay the cardboard block cards on the floor near the board, in the same order as the palette.' },
      { fr: 'Prévoyez une ligne de scotch au sol : la « scène » où la classe mime Tic.', en: 'Plan a line of tape on the floor: the “stage” where the class mimes Tic.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », puis les règles du tableau, un seul doigt.', en: 'Ritual: “Robot, wake up!”, then the board rules, one finger only.' } },
      { min: 4, what: { fr: 'Fais danser le chat : trois tout-petits touchent Sauter, Tourner, Danser. On nomme Tic.', en: 'Make the cat dance: three little ones tap Jump, Spin, Dance. We name Tic.' }, act: 'tot' },
      { min: 8, what: { fr: 'Tic avance de 5 pas : un pilote pose ➡️ cinq fois, la classe compte, on lit la bande, drapeau.', en: 'Tic walks 5 steps: a pilot places ➡️ five times, the class counts, we read the strip, flag.' }, act: 'a' },
      { min: 4, what: { fr: 'Variante : ➡️ ➡️ ⬆️. « Que va faire Tic ? » On prédit avec le corps, puis Go.', en: 'Variation: ➡️ ➡️ ⬆️. “What will Tic do?” We predict with the body, then Go.' }, act: 'a' },
      { min: 4, what: { fr: 'Compte les chats : deux enfants comptent et tapent le nombre sur le pavé.', en: 'Count the cats: two children count and type the number on the pad.' }, act: 'b' },
      { min: 2, what: { fr: 'Clôture : « Tic a fait 5 pas parce qu’on a mis 5 blocs. » « Robot, va dormir ! »', en: 'Closing: “Tic took 5 steps because we placed 5 blocks.” “Robot, go to sleep!”' } },
    ],
    roles: {
      fr: 'Le pilote 🎮 touche les blocs. Le copilote 🗣️ dit le bloc avant chaque toucher : « droite ! ». La classe est Tic : debout sur la ligne, elle fait un pas à chaque bip. Le vérificateur 👀 dit si Tic est bien arrivé au bout.',
      en: 'The pilot 🎮 taps the blocks. The co-pilot 🗣️ says the block before each tap: “right!”. The class is Tic: standing on the line, one step at each beep. The checker 👀 says whether Tic really reached the end.',
    },
    say: [
      { fr: 'Voici Tic. Il ne bouge pas tout seul : il attend nos blocs.', en: 'This is Tic. He does not move on his own: he waits for our blocks.' },
      { fr: 'Un bloc bleu ➡️, c’est un pas vers la droite.', en: 'A blue ➡️ block is one step to the right.' },
      { fr: 'On lit la bande ensemble, puis on appuie sur le drapeau.', en: 'We read the strip together, then we press the flag.' },
      { fr: 'Si tu touches un bloc dans la bande, il s’en va.', en: 'If you tap a block in the strip, it goes away.' },
      { fr: 'Maintenant, tu es Tic. Un pas à chaque bip !', en: 'Now you are Tic. One step at each beep!' },
    ],
    ask: [
      { fr: 'Que va faire Tic quand j’appuie sur le drapeau ?', en: 'What will Tic do when I press the flag?' },
      { fr: 'Combien de blocs pour 5 pas ? Montre avec tes doigts.', en: 'How many blocks for 5 steps? Show with your fingers.' },
      { fr: 'Pourquoi Tic ne bouge pas encore ?', en: 'Why is Tic not moving yet?' },
      { fr: 'Et si on met ⬆️ avant ➡️, ça change quoi ?', en: 'And if we put ⬆️ before ➡️, what changes?' },
    ],
    pitfalls: [
      { trap: { fr: 'L’enfant pose des blocs puis attend que Tic bouge : il a oublié le drapeau.', en: 'The child places blocks then waits for Tic to move: the flag was forgotten.' },
        fix: { fr: 'Faites lever le drapeau en carton à la classe : « Drapeau ! ». Le geste devient le rappel.', en: 'Have the class raise the cardboard flag: “Flag!”. The gesture becomes the reminder.' } },
      { trap: { fr: 'Le pilote tape vite sur tous les blocs, la bande se remplit sans ordre.', en: 'The pilot taps all the blocks fast, the strip fills up with no order.' },
        fix: { fr: 'Règle : le copilote dit le bloc, puis seulement le pilote touche. Un bloc, un mot.', en: 'Rule: the co-pilot says the block, then only the pilot taps. One block, one word.' } },
      { trap: { fr: 'La bande devient rouge : 8 blocs, plus de place.', en: 'The strip turns red: 8 blocks, no more room.' },
        fix: { fr: 'Dites « la bande est pleine ». On retire un bloc en le touchant, ou on recommence.', en: 'Say “the strip is full”. Remove a block by tapping it, or reset.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 Fais danser le chat : un seul bouton, Tic bouge tout de suite. L’adulte nomme le geste.', en: '🌱 Make the cat dance: one button, Tic moves right away. The adult names the move.' },
      beg: { fr: '🌟 Deux ou trois blocs ➡️, dire chaque bloc avant de le toucher, puis drapeau.', en: '🌟 Two or three ➡️ blocks, say each block before tapping it, then flag.' },
      pro: { fr: '🏆 Cinq blocs, puis un mélange ➡️ ⬆️ ⬇️. Prédire où Tic finit avant d’appuyer sur Go.', en: '🏆 Five blocks, then a mix of ➡️ ⬆️ ⬇️. Predict where Tic ends before pressing Go.' },
    },
    observe: {
      tot: { fr: 'Je vois qu’il touche un bouton et regarde Tic bouger.', en: 'I see that they tap a button and watch Tic move.' },
      beg: { fr: 'Je vois qu’il dit « droite » avant de toucher le bloc bleu.', en: 'I see that they say “right” before tapping the blue block.' },
      pro: { fr: 'Je vois qu’il compte les blocs et annonce où Tic va s’arrêter.', en: 'I see that they count the blocks and announce where Tic will stop.' },
      warn: { fr: 'Il appuie sur le drapeau sans regarder la bande : on ralentit, on relit ensemble.', en: 'They press the flag without looking at the strip: slow down, read it together.' },
    },
    unplugged: {
      id: 'ch8-s1:b',
      bridge: { fr: 'Le parcours codé au sol, c’est la bande de blocs avec des cartes. Faites-le avant : Tic suit les cartes comme l’enfant suivait le chemin.', en: 'The coded path on the floor is the block strip with cards. Do it first: Tic follows the cards as the child followed the path.' },
    },
    noSound: {
      fr: 'Sans son, la classe fait le bip avec la bouche à chaque pas de Tic. Le compteur de la bande (2/8, 3/8) remplace la voix pour compter.',
      en: 'Without sound, the class makes the beep with their mouth at each Tic step. The strip counter (2/8, 3/8) replaces the voice for counting.',
    },
    vocab: [
      { word: { fr: 'Bloc = un ordre pour Tic', en: 'Block = one order for Tic' }, gesture: { fr: 'On pose une brique dans l’air, à plat', en: 'Lay a flat brick in the air' } },
      { word: { fr: 'Scène = là où Tic bouge', en: 'Stage = where Tic moves' }, gesture: { fr: 'On dessine un grand rectangle devant soi', en: 'Draw a big rectangle in front of you' } },
      { word: { fr: 'Drapeau = c’est parti !', en: 'Flag = off we go!' }, gesture: { fr: 'On lève le bras et on l’agite', en: 'Raise an arm and wave it' } },
    ],
    tips: {
      tot: { fr: 'Laissez toucher trois fois le même bouton : la répétition rassure les tout-petits.', en: 'Let them tap the same button three times: repetition reassures the youngest.' },
      a: { fr: 'Le cinquième ➡️ amène Tic tout au bord : dites « il est arrivé » et recommencez.', en: 'The fifth ➡️ brings Tic right to the edge: say “he has arrived” and reset.' },
      b: { fr: 'Faites toucher chaque chat sur l’écran en comptant, avant de taper le nombre.', en: 'Have them touch each cat on the screen while counting, before typing the number.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a donné des blocs à Tic. Il a fait exactement ce qu’on a dit, dans l’ordre.',
      en: 'Today we gave Tic blocks. He did exactly what we said, in order.',
    },
    parents: {
      fr: 'Nous avons programmé Tic le chat : on pose des blocs, on appuie sur le drapeau, Tic marche. Votre enfant peut vous montrer le geste du drapeau. Demandez-lui : « Combien de blocs pour 3 pas ? »',
      en: 'We programmed Tic the cat: place blocks, press the flag, Tic walks. Your child can show you the flag gesture. Ask them: “How many blocks for 3 steps?”',
    },
  },

  // ── s2 : Tic sur la grille ────────────────────────────────────────────────
  'ch6-s2': {
    concept: 'abstraction',
    also: ['sequence'],
    duration: 30,
    essential: {
      fr: 'Tic vit maintenant sur une grille où chaque case porte deux nombres. Les enfants apprennent à dire où il est, à aller dans une case dictée, puis à programmer le chemin vers l’étoile.',
      en: 'Tic now lives on a grid where each square carries two numbers. The children learn to say where he is, go to a dictated square, then program the path to the star.',
    },
    setup: [
      { fr: 'Testez 🔊 : le « Bravo ! » de l’arrivée doit s’entendre.', en: 'Test 🔊: the “Well done!” on arrival must be heard.' },
      { fr: 'Ouvrez « Tic en télécommande » : Tic est en 1-4 en bas à gauche, l’étoile en 1-1 en haut.', en: 'Open “Tic by remote control”: Tic is at 1-4 bottom left, the star at 1-1 at the top.' },
      { fr: 'Préparez le quadrillage au sol 4 × 4, nombres 1 à 4 sur le bord du haut et sur le bord gauche.', en: 'Prepare the 4 × 4 floor grid, numbers 1 to 4 along the top edge and the left edge.' },
      { fr: 'Écrivez sur un papier trois cases à dicter pour le message secret : 2-1, 3-2, 4-1.', en: 'Write on a paper three squares to dictate for the secret message: 2-1, 3-2, 4-1.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 4, what: { fr: 'Lire la grille : chaque case a deux nombres. Le premier, c’est la colonne ; le deuxième, la ligne.', en: 'Read the grid: each square has two numbers. The first is the column, the second the row.' }, act: 'tot' },
      { min: 6, what: { fr: 'Tic en télécommande : une flèche, Tic bouge. À chaque pas, la classe dit sa case.', en: 'Tic by remote control: one arrow, Tic moves. At each step, the class says his square.' }, act: 'tot' },
      { min: 7, what: { fr: 'Le message secret : vous dictez « va en 4-1 ». Le pilote conduit le crayon jusqu’à l’étoile.', en: 'The secret message: you dictate “go to 4-1”. The pilot leads the crayon to the star.' }, act: 'm' },
      { min: 7, what: { fr: 'Tic se déplace : programme complet vers l’étoile 5-1, en évitant le mur 3-3.', en: 'Tic moves: full program to the star at 5-1, avoiding the wall at 3-3.' }, act: 'a' },
      { min: 3, what: { fr: 'Clôture : sur le quadrillage au sol, un enfant va dans la case dite. « Robot, va dormir ! »', en: 'Closing: on the floor grid, a child goes to the square named. “Robot, go to sleep!”' } },
    ],
    roles: {
      fr: 'Le pilote 🎮 appuie sur la flèche. Le copilote 🗣️ dit la flèche avant. La classe est Tic sur le quadrillage au sol : un enfant marche, les autres disent sa case. Le vérificateur 👀 compare la case de l’écran et celle du sol.',
      en: 'The pilot 🎮 presses the arrow. The co-pilot 🗣️ says the arrow first. The class is Tic on the floor grid: one child walks, the others say his square. The checker 👀 compares the square on screen and on the floor.',
    },
    say: [
      { fr: 'Chaque case a un nom : deux nombres. Regarde, ici c’est 1-1.', en: 'Every square has a name: two numbers. Look, this one is 1-1.' },
      { fr: 'Le premier nombre, c’est la colonne. Le deuxième, c’est la ligne.', en: 'The first number is the column. The second is the row.' },
      { fr: 'Tic est en 1-4. Dis les deux nombres avec moi.', en: 'Tic is at 1-4. Say the two numbers with me.' },
      { fr: 'Je te dis une case, tu conduis le crayon jusque là.', en: 'I tell you a square, you drive the crayon there.' },
      { fr: 'Le mur 🧱, on ne peut pas passer. Il faut le contourner.', en: 'The wall 🧱, we cannot pass. We have to go around it.' },
    ],
    ask: [
      { fr: 'Quelle case ? Dis les deux nombres.', en: 'Which square? Say the two numbers.' },
      { fr: 'Si Tic monte d’une case, quel nombre change ?', en: 'If Tic goes up one square, which number changes?' },
      { fr: 'Où est l’étoile ? Comment on y va ?', en: 'Where is the star? How do we get there?' },
      { fr: 'Combien de flèches pour arriver ? On peut faire moins ?', en: 'How many arrows to get there? Can we do fewer?' },
    ],
    pitfalls: [
      { trap: { fr: 'L’enfant lit la case à l’envers : « 4-1 » pour la case 1-4.', en: 'The child reads the square backwards: “4-1” for square 1-4.' },
        fix: { fr: 'Le geste : l’index glisse d’abord sur le bord du haut, puis descend. « Colonne, puis ligne. »', en: 'The gesture: the index slides first along the top edge, then down. “Column, then row.”' } },
      { trap: { fr: 'Le pilote appuie sur une flèche vers le bord : l’écran flashe rouge.', en: 'The pilot presses an arrow towards the edge: the screen flashes red.' },
        fix: { fr: 'C’est normal : « On ne peut pas aller par là ! ». Demandez « quelle flèche alors ? ».', en: 'That is normal: “Can’t go that way!”. Ask “which arrow then?”.' } },
      { trap: { fr: 'En mode programme, Tic fonce dans le mur et fait 😟.', en: 'In program mode, Tic runs into the wall and shows 😟.' },
        fix: { fr: 'Ne pas tout effacer : toucher la flèche fautive pour la retirer, puis Go à nouveau.', en: 'Do not clear everything: tap the wrong arrow to remove it, then Go again.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 Télécommande seulement : une flèche, Tic bouge. L’adulte dit la case à chaque pas.', en: '🌱 Remote control only: one arrow, Tic moves. The adult says the square at each step.' },
      beg: { fr: '🌟 Nommer la case de Tic avant chaque flèche, puis conduire le crayon vers une case dictée.', en: '🌟 Name Tic’s square before each arrow, then lead the crayon to a dictated square.' },
      pro: { fr: '🏆 Programme complet vers 5-1 en évitant le mur, prédire l’arrivée, viser 8 flèches.', en: '🏆 Full program to 5-1 avoiding the wall, predict the arrival, aim for 8 arrows.' },
    },
    observe: {
      tot: { fr: 'Je vois qu’il appuie sur une flèche et suit Tic des yeux.', en: 'I see that they press an arrow and follow Tic with their eyes.' },
      beg: { fr: 'Je vois qu’il dit « 2-3 » en montrant la bonne case.', en: 'I see that they say “2-3” while pointing at the right square.' },
      pro: { fr: 'Je vois qu’il range ses flèches pour contourner le mur avant d’appuyer sur Go.', en: 'I see that they arrange the arrows to go around the wall before pressing Go.' },
      warn: { fr: 'Il dit des nombres au hasard sans regarder la case : on revient au quadrillage au sol.', en: 'They say random numbers without looking at the square: go back to the floor grid.' },
    },
    unplugged: {
      id: 'ch8-s3:b',
      bridge: { fr: 'Le pixel-art codé se lit case par case, ligne par ligne. Faites-le le même jour : « colorie la case 2-1 » prépare « va en 2-1 ».', en: 'Coded pixel art is read square by square, row by row. Do it the same day: “colour square 2-1” prepares “go to 2-1”.' },
    },
    noSound: {
      fr: 'Sans son, l’arrivée se voit : Tic est sur l’étoile et le bouton Recommencer devient orange. La classe dit « Bravo ! » à sa place.',
      en: 'Without sound, arrival is visible: Tic sits on the star and the Reset button turns orange. The class says “Well done!” instead.',
    },
    vocab: [
      { word: { fr: 'Case = la maison d’un moment', en: 'Square = a home for a moment' }, gesture: { fr: 'On dessine un petit carré dans l’air', en: 'Draw a small square in the air' } },
      { word: { fr: 'Coordonnées = le nom de la case, deux nombres', en: 'Coordinates = the square’s name, two numbers' }, gesture: { fr: 'On montre deux doigts, l’un après l’autre', en: 'Show two fingers, one after the other' } },
      { word: { fr: 'Colonne, ligne = de côté, puis en descendant', en: 'Column, row = across, then down' }, gesture: { fr: 'La main glisse à droite, puis descend', en: 'The hand slides right, then down' } },
      { word: { fr: 'Mur = on ne passe pas', en: 'Wall = no way through' }, gesture: { fr: 'Les deux paumes devant soi, bras tendus', en: 'Both palms out, arms straight' } },
    ],
    tips: {
      tot: { fr: 'Trois ⬆️ suffisent : demandez la case après chaque flèche, 1-3, 1-2, 1-1.', en: 'Three ⬆️ are enough: ask the square after each arrow, 1-3, 1-2, 1-1.' },
      m: { fr: 'Dictez une case intermédiaire avant l’étoile : le chemin devient un vrai message.', en: 'Dictate an intermediate square before the star: the path becomes a real message.' },
      a: { fr: 'Le mur est en 3-3 : montrez-le du doigt avant Go, la classe cherche le détour.', en: 'The wall is at 3-3: point at it before Go, the class looks for the detour.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a donné un nom à chaque case : deux nombres. Tic sait dire où il est.',
      en: 'Today we gave every square a name: two numbers. Tic can say where he is.',
    },
    parents: {
      fr: 'Tic le chat se déplace sur une grille. Chaque case a un nom avec deux nombres, comme 2-3. Votre enfant peut jouer à la maison sur un carrelage : « va dans la case 2-3 ! »',
      en: 'Tic the cat moves on a grid. Every square has a name with two numbers, like 2-3. Your child can play at home on floor tiles: “go to square 2-3!”',
    },
  },

  // ── s3 : Tic rentre à la maison ───────────────────────────────────────────
  'ch6-s3': {
    concept: 'sequence',
    also: ['debug', 'abstraction'],
    duration: 25,
    essential: {
      fr: 'Tic veut rentrer chez lui : la porte est en haut de la grille. Les enfants reprennent la télécommande, puis construisent un programme entier, le testent et le réparent.',
      en: 'Tic wants to go home: the door is at the top of the grid. The children pick up the remote again, then build a whole program, test it and fix it.',
    },
    setup: [
      { fr: 'Testez 🔊 : les bips des pas rythment la marche de la classe.', en: 'Test 🔊: the step beeps set the rhythm for the class’s walk.' },
      { fr: 'Ouvrez « Tic atteint la porte » : Tic en 3-5, porte en 3-1, deux murs en 2-3 et 4-3.', en: 'Open “Tic reaches the door”: Tic at 3-5, door at 3-1, two walls at 2-3 and 4-3.' },
      { fr: 'Le quadrillage au sol reste en place ; posez une image de porte sur la case 4-1.', en: 'Keep the floor grid in place; put a door picture on square 4-1.' },
      { fr: 'Option : si vous avez ScratchJr sur tablette, préparez un décor « maison » pour la fin.', en: 'Optional: if you have ScratchJr on a tablet, prepare a “house” background for the end.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 3, what: { fr: 'Histoire : « Tic est perdu, la porte 🚪 est là-haut. » On relit les cases de départ et d’arrivée.', en: 'Story: “Tic is lost, the door 🚪 is up there.” Re-read the start and end squares.' }, act: 'tot' },
      { min: 6, what: { fr: 'Tic rentre en télécommande : de 1-4 à 4-1, une flèche à la fois, la classe marche au sol.', en: 'Tic goes home by remote: from 1-4 to 4-1, one arrow at a time, the class walks on the floor.' }, act: 'tot' },
      { min: 8, what: { fr: 'Tic atteint la porte : on range les flèches, on lit, Go. Si 😟, on retire la flèche fautive.', en: 'Tic reaches the door: arrange the arrows, read, Go. If 😟, remove the wrong arrow.' }, act: 'a' },
      { min: 3, what: { fr: 'Défi : « Moins de flèches ! » Quatre ⬆️ suffisent. On compare avec les étoiles.', en: 'Challenge: “Fewer arrows!” Four ⬆️ are enough. Compare with the stars.' }, act: 'a' },
      { min: 2, what: { fr: 'Clôture : « Tic est rentré parce que les flèches étaient dans l’ordre. » « Robot, va dormir ! »', en: 'Closing: “Tic got home because the arrows were in order.” “Robot, go to sleep!”' } },
    ],
    roles: {
      fr: 'Le pilote 🎮 pose les flèches. Le copilote 🗣️ lit la bande avant Go. La classe mime Tic au sol : un enfant marche, les autres comptent les pas. Le vérificateur 👀 crie « mur ! » si le chemin passe par une case grise.',
      en: 'The pilot 🎮 places the arrows. The co-pilot 🗣️ reads the strip before Go. The class mimes Tic on the floor: one child walks, the others count the steps. The checker 👀 shouts “wall!” if the path crosses a grey square.',
    },
    say: [
      { fr: 'Tic veut rentrer. La porte est en 3-1, tout en haut.', en: 'Tic wants to go home. The door is at 3-1, right at the top.' },
      { fr: 'D’abord on range les flèches, ensuite on appuie sur Go.', en: 'First we arrange the arrows, then we press Go.' },
      { fr: 'Tic fait 😟 ? Il a bousculé un mur. On cherche la flèche qui se trompe.', en: 'Tic shows 😟? He bumped a wall. We look for the arrow that is wrong.' },
      { fr: 'Touche la flèche fautive : elle s’en va. Pas besoin de tout effacer.', en: 'Tap the wrong arrow: it goes away. No need to clear everything.' },
      { fr: 'Stop ! On arrête Tic, on garde les flèches, on réfléchit.', en: 'Stop! We stop Tic, keep the arrows, and think.' },
    ],
    ask: [
      { fr: 'Où est Tic ? Où est la porte ? Dis les deux nombres.', en: 'Where is Tic? Where is the door? Say the two numbers.' },
      { fr: 'Que va faire Tic avec ces flèches ? Montre avec ta main.', en: 'What will Tic do with these arrows? Show with your hand.' },
      { fr: 'Pourquoi Tic fait 😟 ? Quelle flèche le pousse dans le mur ?', en: 'Why does Tic show 😟? Which arrow pushes him into the wall?' },
      { fr: 'On peut arriver avec moins de flèches ? Combien ?', en: 'Can we get there with fewer arrows? How many?' },
    ],
    pitfalls: [
      { trap: { fr: 'Les flèches sont posées dans le désordre : Tic part à gauche, puis en haut, puis revient.', en: 'The arrows are placed out of order: Tic goes left, then up, then comes back.' },
        fix: { fr: 'Avant Go, un enfant suit la bande avec le doigt sur le quadrillage au sol.', en: 'Before Go, a child follows the strip with a finger on the floor grid.' } },
      { trap: { fr: 'Après un échec, le pilote appuie sur Recommencer et perd tout.', en: 'After a failure, the pilot presses Reset and loses everything.' },
        fix: { fr: 'Dites « on répare, on n’efface pas » : on touche seulement la flèche fautive.', en: 'Say “we fix, we do not erase”: tap only the wrong arrow.' } },
      { trap: { fr: 'Dix flèches posées, la bande refuse la suivante.', en: 'Ten arrows placed, the strip refuses the next one.' },
        fix: { fr: '« Plus de place ! » : c’est le signe qu’il y a un chemin plus court. Cherchez-le ensemble.', en: '“No more room!”: that is the sign of a shorter path. Look for it together.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 Télécommande : une flèche, un pas. L’adulte dit « monte, encore, encore » jusqu’à la porte.', en: '🌱 Remote control: one arrow, one step. The adult says “up, again, again” to the door.' },
      beg: { fr: '🌟 Programme de 2 à 3 flèches sur le début du chemin, lire la bande avant Go, nommer la case d’arrivée.', en: '🌟 A 2 to 3 arrow program for the start of the path, read the strip before Go, name the end square.' },
      pro: { fr: '🏆 Programme complet jusqu’à la porte, prédire l’arrivée, puis trouver la solution à 4 flèches.', en: '🏆 Full program to the door, predict the arrival, then find the 4-arrow solution.' },
    },
    observe: {
      tot: { fr: 'Je vois qu’il appuie sur ⬆️ et dit « monte ».', en: 'I see that they press ⬆️ and say “up”.' },
      beg: { fr: 'Je vois qu’il lit sa bande avec le doigt avant d’appuyer sur Go.', en: 'I see that they read the strip with a finger before pressing Go.' },
      pro: { fr: 'Je vois qu’il retire une seule flèche après le 😟 et relance.', en: 'I see that they remove a single arrow after the 😟 and run again.' },
      warn: { fr: 'Il pose et efface sans regarder Tic : on repasse en télécommande une minute.', en: 'They place and erase without watching Tic: go back to remote control for a minute.' },
    },
    unplugged: {
      id: 'ch8-s1:b',
      bridge: { fr: 'Le parcours codé au sol : les cartes flèches alignées, c’est la bande violette. Quand le trésor est raté, on corrige une carte, comme on retire une flèche.', en: 'The coded path on the floor: the lined-up arrow cards are the purple strip. When the treasure is missed, fix one card, as you remove one arrow.' },
    },
    noSound: {
      fr: 'Sans son, le 😟 sur la case et le message « Encore ! » montrent l’échec. Le « Bravo ! » se voit avec les étoiles sous la grille.',
      en: 'Without sound, the 😟 on the square and the “Try again!” message show the failure. The “Well done!” is visible with the stars under the grid.',
    },
    vocab: [
      { word: { fr: 'Programme = toutes les flèches, dans l’ordre', en: 'Program = all the arrows, in order' }, gesture: { fr: 'On aligne des briques invisibles de gauche à droite', en: 'Line up invisible bricks from left to right' } },
      { word: { fr: 'Bug = la flèche qui se trompe', en: 'Bug = the arrow that is wrong' }, gesture: { fr: 'On met la loupe devant l’œil', en: 'Make a magnifying glass in front of the eye' } },
      { word: { fr: 'Stop = Tic s’arrête, on garde tout', en: 'Stop = Tic stops, we keep everything' }, gesture: { fr: 'La main levée, paume en avant', en: 'Hand up, palm forward' } },
    ],
    tips: {
      tot: { fr: 'Le chemin fait six pas : trois ➡️ puis trois ⬆️, ou l’inverse. Laissez l’enfant choisir.', en: 'The path is six steps: three ➡️ then three ⬆️, or the reverse. Let the child choose.' },
      a: { fr: 'Les murs sont de chaque côté du couloir du milieu : quatre ⬆️ tout droit, c’est la solution parfaite.', en: 'The walls flank the middle corridor: four ⬆️ straight up is the perfect solution.' },
    },
    closing: {
      fr: 'Aujourd’hui, Tic est rentré chez lui. Quand il s’est trompé, on a réparé une flèche, pas tout le programme.',
      en: 'Today Tic went home. When he got it wrong, we fixed one arrow, not the whole program.',
    },
    parents: {
      fr: 'Tic devait rentrer chez lui sans toucher les murs. Votre enfant a appris à réparer une erreur au lieu de tout recommencer. À la maison : « Guide-moi jusqu’à la porte, une consigne à la fois. »',
      en: 'Tic had to get home without touching the walls. Your child learned to fix a mistake instead of starting over. At home: “Guide me to the door, one instruction at a time.”',
    },
  },

  // ── s4 : Ajouter un personnage ────────────────────────────────────────────
  'ch6-s4': {
    concept: 'sequence',
    also: ['tool', 'cause'],
    duration: 25,
    essential: {
      fr: 'Un nouveau personnage arrive : Tac la souris. Les enfants la font bouger, puis découvrent le bloc vert « dire » qui fait apparaître une bulle « Bonjour ! ». Un bloc peut faire parler, pas seulement bouger.',
      en: 'A new sprite arrives: Tac the mouse. The children move her, then discover the green “say” block that makes a “Hello!” bubble appear. A block can make her talk, not only move.',
    },
    setup: [
      { fr: 'Testez 🔊 : la bulle « Bonjour ! » est lue à voix haute ; réglez le volume avant les enfants.', en: 'Test 🔊: the “Hello!” bubble is read aloud; set the volume before the children arrive.' },
      { fr: 'Ouvrez « Tac parle dans le parc » : la palette a un sixième bloc, le 💬 vert.', en: 'Open “Tac talks in the park”: the palette has a sixth block, the green 💬.' },
      { fr: 'Ajoutez la carte-bloc 💬 verte en carton à côté des cinq autres.', en: 'Add the green cardboard 💬 block card next to the other five.' },
      { fr: 'Le site ne permet pas d’ajouter ou de supprimer un personnage : Tac remplace Tic. Sur tablette avec ScratchJr, c’est possible en bonus.', en: 'The site cannot add or delete a sprite: Tac replaces Tic. On a tablet with ScratchJr, it is a possible bonus.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 4, what: { fr: 'Fais danser Tac : on présente la souris, trois tout-petits la font sauter et tourner.', en: 'Make Tac dance: introduce the mouse, three little ones make her jump and spin.' }, act: 'tot' },
      { min: 7, what: { fr: 'Tac se déplace : ➡️ ➡️ ⬆️. La classe prédit, mime, puis drapeau. Même règles que Tic.', en: 'Tac moves: ➡️ ➡️ ⬆️. The class predicts, mimes, then flag. Same rules as Tic.' }, act: 'a' },
      { min: 6, what: { fr: 'Le bloc 💬 : on l’ajoute en dernier. Tac s’arrête et dit « Bonjour ! ». La classe répond.', en: 'The 💬 block: add it last. Tac stops and says “Hello!”. The class answers.' }, act: 'a' },
      { min: 3, what: { fr: 'Défi : ➡️ 💬 ➡️ 💬. « Combien de fois Tac va parler ? » Option : tablette ScratchJr avec deux enfants.', en: 'Challenge: ➡️ 💬 ➡️ 💬. “How many times will Tac talk?” Option: ScratchJr tablet with two children.' }, act: 'a' },
      { min: 2, what: { fr: 'Clôture : « Un bloc peut faire marcher ou parler. » « Robot, va dormir ! »', en: 'Closing: “A block can make her walk or talk.” “Robot, go to sleep!”' } },
    ],
    roles: {
      fr: 'Le pilote 🎮 pose les blocs. Le copilote 🗣️ dit chaque bloc avant. La classe est Tac : elle marche aux bips, et dit « Bonjour ! » quand la bulle apparaît. Le vérificateur 👀 compte les « Bonjour ».',
      en: 'The pilot 🎮 places the blocks. The co-pilot 🗣️ says each block first. The class is Tac: walking at the beeps, and saying “Hello!” when the bubble appears. The checker 👀 counts the “Hellos”.',
    },
    say: [
      { fr: 'Voici Tac la souris. Elle obéit aux mêmes blocs que Tic.', en: 'This is Tac the mouse. She obeys the same blocks as Tic.' },
      { fr: 'Le bloc vert 💬, c’est « dire ». Tac va parler.', en: 'The green 💬 block is “say”. Tac is going to talk.' },
      { fr: 'Regarde la bulle : Tac dit « Bonjour ! ». Réponds-lui !', en: 'Look at the bubble: Tac says “Hello!”. Answer her!' },
      { fr: 'Un bloc vert, une bulle. Deux blocs verts, deux bulles.', en: 'One green block, one bubble. Two green blocks, two bubbles.' },
      { fr: 'Tu es Tac : tu marches, tu t’arrêtes, tu dis bonjour.', en: 'You are Tac: you walk, you stop, you say hello.' },
    ],
    ask: [
      { fr: 'Que va faire Tac ? D’abord, ensuite, et puis ?', en: 'What will Tac do? First, then, and then?' },
      { fr: 'Où faut-il mettre le bloc vert pour qu’elle parle à la fin ?', en: 'Where should the green block go so she talks at the end?' },
      { fr: 'Combien de fois Tac va dire bonjour ? Compte les blocs verts.', en: 'How many times will Tac say hello? Count the green blocks.' },
      { fr: 'Est-ce que Tac bouge quand elle parle ?', en: 'Does Tac move when she talks?' },
    ],
    pitfalls: [
      { trap: { fr: 'L’enfant attend que Tac marche pendant qu’elle parle.', en: 'The child expects Tac to walk while she talks.' },
        fix: { fr: 'Montrez : le bloc « dire » est un bloc comme les autres, Tac fait une chose à la fois.', en: 'Show: the “say” block is a block like the others, Tac does one thing at a time.' } },
      { trap: { fr: 'Le pilote met 💬 en premier : Tac parle puis part, la classe rate la bulle.', en: 'The pilot puts 💬 first: Tac talks then leaves, the class misses the bubble.' },
        fix: { fr: 'Très bien aussi ! Demandez « et si on veut qu’elle parle en arrivant ? » et déplacez le bloc.', en: 'That is fine too! Ask “what if we want her to talk on arrival?” and move the block.' } },
      { trap: { fr: 'Les enfants demandent Tic ET Tac ensemble sur la scène.', en: 'The children ask for Tic AND Tac together on the stage.' },
        fix: { fr: 'Pas sur le site. Dites que sur la tablette ScratchJr on peut, et jouez-le avec deux enfants au sol.', en: 'Not on the site. Say it is possible on the ScratchJr tablet, and act it out with two children on the floor.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 Fais danser Tac : un bouton, un mouvement, « Youpi ! ». L’adulte nomme Tac et le geste.', en: '🌱 Make Tac dance: one button, one move, “Yay!”. The adult names Tac and the move.' },
      beg: { fr: '🌟 Deux blocs de marche puis un 💬. Dire chaque bloc avant, puis répondre à la bulle.', en: '🌟 Two walking blocks then a 💬. Say each block first, then answer the bubble.' },
      pro: { fr: '🏆 Programme de 5 à 6 blocs avec deux 💬 placés exprès. Prédire combien de bulles avant Go.', en: '🏆 A 5 to 6 block program with two 💬 placed on purpose. Predict how many bubbles before Go.' },
    },
    observe: {
      tot: { fr: 'Je vois qu’il touche Sauter et regarde Tac bondir.', en: 'I see that they tap Jump and watch Tac bounce.' },
      beg: { fr: 'Je vois qu’il choisit le bloc vert quand il veut que Tac parle.', en: 'I see that they pick the green block when they want Tac to talk.' },
      pro: { fr: 'Je vois qu’il compte les blocs verts et annonce le nombre de bulles.', en: 'I see that they count the green blocks and announce the number of bubbles.' },
      warn: { fr: 'Il empile les blocs sans les nommer : on revient à trois blocs, dits à voix haute.', en: 'They pile up blocks without naming them: go back to three blocks, said aloud.' },
    },
    unplugged: {
      id: 'ch8-s4:b',
      bridge: { fr: 'Passer le message des robots : une suite de trois gestes qui voyage dans la file. Marcher, s’arrêter, dire bonjour : c’est le programme de Tac, sans écran.', en: 'Pass the robots’ message: a sequence of three gestures travelling down the line. Walk, stop, say hello: that is Tac’s program, without a screen.' },
    },
    noSound: {
      fr: 'Sans son, la bulle « Bonjour ! » s’affiche quand même au-dessus de Tac. Montrez-la du doigt et faites lire la classe à voix haute.',
      en: 'Without sound, the “Hello!” bubble still shows above Tac. Point at it and have the class read it aloud.',
    },
    vocab: [
      { word: { fr: 'Personnage = celui qui obéit aux blocs', en: 'Sprite = the one who obeys the blocks' }, gesture: { fr: 'On se montre soi-même, puis on fait la souris', en: 'Point at yourself, then act like a mouse' } },
      { word: { fr: 'Dire = le bloc vert, la bulle', en: 'Say = the green block, the bubble' }, gesture: { fr: 'Une main s’ouvre devant la bouche', en: 'A hand opens in front of the mouth' } },
      { word: { fr: 'Bulle = ce que dit Tac', en: 'Bubble = what Tac says' }, gesture: { fr: 'On dessine un rond au-dessus de sa tête', en: 'Draw a circle above your head' } },
    ],
    tips: {
      tot: { fr: 'Le bouton Danser fait tortiller Tac : dites « elle danse » et faites danser la classe avec elle.', en: 'The Dance button makes Tac wiggle: say “she dances” and have the class dance with her.' },
      a: { fr: 'La bulle reste à peine une seconde : prévenez « regarde bien » juste avant le bloc vert.', en: 'The bubble lasts barely a second: warn “watch closely” right before the green block.' },
    },
    closing: {
      fr: 'Aujourd’hui, Tac a marché et a parlé. Un bloc bleu, elle bouge ; un bloc vert, elle dit bonjour.',
      en: 'Today Tac walked and talked. A blue block, she moves; a green block, she says hello.',
    },
    parents: {
      fr: 'Un nouveau personnage, Tac la souris, a rejoint Tic. Votre enfant a découvert le bloc « dire » qui fait parler Tac. Jouez au robot : « Marche, arrête-toi, dis bonjour ! »',
      en: 'A new sprite, Tac the mouse, joined Tic. Your child discovered the “say” block that makes Tac talk. Play robot: “Walk, stop, say hello!”',
    },
  },

  // ── s5 : Le ballon qui saute ──────────────────────────────────────────────
  'ch6-s5': {
    concept: 'loop',
    also: ['sequence', 'pattern'],
    duration: 25,
    essential: {
      fr: 'Le ballon découvre le bloc violet « sauter ». Trois blocs « sauter » à la suite font trois sauts : les enfants comptent, puis nomment cette répétition « répéter ×3 ». C’est leur première boucle.',
      en: 'The ball discovers the purple “jump” block. Three “jump” blocks in a row make three jumps: the children count, then name this repetition “repeat ×3”. It is their first loop.',
    },
    setup: [
      { fr: 'Testez 🔊 : un bip par bloc, la classe compte dessus pour sauter en rythme.', en: 'Test 🔊: one beep per block, the class relies on it to jump in rhythm.' },
      { fr: 'Ouvrez « Le ballon saute 3 fois » : la palette a ➡️ ⬅️ ⬆️ ⬇️ 🦘, sans bloc « dire ».', en: 'Open “The ball jumps 3 times”: the palette has ➡️ ⬅️ ⬆️ ⬇️ 🦘, no “say” block.' },
      { fr: 'Préparez la carte 🔁 avec le chiffre 3 et trois cartes-blocs 🦘 violettes.', en: 'Prepare the 🔁 card with the number 3 and three purple 🦘 block cards.' },
      { fr: 'Faites le chef d’orchestre (ch8-s5:d) juste avant, sur le tapis.', en: 'Do the conductor (ch8-s5:d) right before, on the mat.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! » et les règles du tableau.', en: 'Ritual: “Robot, wake up!” and the board rules.' } },
      { min: 4, what: { fr: 'Avec le corps : « saute 3 fois ». On compte 1, 2, 3. Puis on lève la carte 🔁 3 : pareil !', en: 'With the body: “jump 3 times”. Count 1, 2, 3. Then raise the 🔁 3 card: same thing!' } },
      { min: 6, what: { fr: 'Le ballon saute : un seul bloc 🦘, drapeau. Puis ➡️ 🦘 ➡️ : on prédit, on mime, Go.', en: 'The ball jumps: a single 🦘 block, flag. Then ➡️ 🦘 ➡️: predict, mime, Go.' }, act: 'a' },
      { min: 7, what: { fr: 'Le ballon saute 3 fois : trois 🦘 à la suite. On compte les sauts. On pose la carte 🔁 3 sous l’écran.', en: 'The ball jumps 3 times: three 🦘 in a row. Count the jumps. Put the 🔁 3 card under the screen.' }, act: 'b' },
      { min: 3, what: { fr: 'Défi : ➡️ ➡️ puis trois 🦘. « Combien de sauts ? Combien de pas ? » Prédire avant Go.', en: 'Challenge: ➡️ ➡️ then three 🦘. “How many jumps? How many steps?” Predict before Go.' }, act: 'b' },
      { min: 2, what: { fr: 'Clôture : « Trois blocs sauter, c’est répéter trois fois. » « Robot, va dormir ! »', en: 'Closing: “Three jump blocks means repeat three times.” “Robot, go to sleep!”' } },
    ],
    roles: {
      fr: 'Le pilote 🎮 pose les blocs. Le copilote 🗣️ dit « sauter » avant chaque bloc violet. La classe est le ballon : elle saute à chaque bip et compte fort. Le vérificateur 👀 lève la carte 🔁 3 si le ballon a sauté trois fois.',
      en: 'The pilot 🎮 places the blocks. The co-pilot 🗣️ says “jump” before each purple block. The class is the ball: jumping at each beep and counting aloud. The checker 👀 raises the 🔁 3 card if the ball jumped three times.',
    },
    say: [
      { fr: 'Le bloc violet 🦘, c’est « sauter ». Le ballon monte et redescend.', en: 'The purple 🦘 block is “jump”. The ball goes up and comes back down.' },
      { fr: 'Un bloc sauter, un saut. Trois blocs sauter, trois sauts.', en: 'One jump block, one jump. Three jump blocks, three jumps.' },
      { fr: 'Trois fois pareil, on dit : répéter trois fois !', en: 'Three times the same, we say: repeat three times!' },
      { fr: 'Tu es le ballon : à chaque bip, tu sautes et tu comptes.', en: 'You are the ball: at each beep, you jump and count.' },
      { fr: 'On lit la bande, on prédit, et seulement après : drapeau.', en: 'We read the strip, we predict, and only then: flag.' },
    ],
    ask: [
      { fr: 'Combien de fois le ballon va sauter ? Compte les blocs violets.', en: 'How many times will the ball jump? Count the purple blocks.' },
      { fr: 'C’est plus court de dire « saute, saute, saute » ou « répète trois fois » ?', en: 'Is it shorter to say “jump, jump, jump” or “repeat three times”?' },
      { fr: 'Et si on veut 5 sauts, combien de blocs ?', en: 'And if we want 5 jumps, how many blocks?' },
      { fr: 'Le ballon a-t-il avancé en sautant ? Pourquoi ?', en: 'Did the ball move forward while jumping? Why?' },
    ],
    pitfalls: [
      { trap: { fr: 'Les enfants comptent les bips au lieu des sauts et se trompent quand il y a des ➡️.', en: 'The children count the beeps instead of the jumps and get confused when there are ➡️.' },
        fix: { fr: 'Comptez seulement les blocs violets sur la bande, avec le doigt, avant Go.', en: 'Count only the purple blocks on the strip, with a finger, before Go.' } },
      { trap: { fr: 'Le pilote met 🦘 huit fois : la bande est pleine et rouge.', en: 'The pilot puts 🦘 eight times: the strip is full and red.' },
        fix: { fr: 'Parfait pour la boucle : « huit fois pareil… on pourrait dire répéter ×8 ! » Puis on retire.', en: 'Perfect for the loop: “eight times the same… we could say repeat ×8!” Then remove some.' } },
      { trap: { fr: 'On dit « répéter » sans dire combien de fois.', en: 'They say “repeat” without saying how many times.' },
        fix: { fr: 'Le mot va toujours avec le nombre : levez la carte 🔁 3 et faites dire « trois ».', en: 'The word always goes with the number: raise the 🔁 3 card and have them say “three”.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 Un seul bloc 🦘 et le drapeau : le ballon saute, la classe saute. Pas de comptage.', en: '🌱 A single 🦘 block and the flag: the ball jumps, the class jumps. No counting.' },
      beg: { fr: '🌟 Deux ou trois 🦘, dire « sauter » avant chaque bloc, compter les sauts avec les doigts.', en: '🌟 Two or three 🦘, say “jump” before each block, count the jumps on fingers.' },
      pro: { fr: '🏆 Trois 🦘 et deux ➡️, prédire sauts et pas, dire « 3 blocs sauter = répéter ×3 ».', en: '🏆 Three 🦘 and two ➡️, predict jumps and steps, say “3 jump blocks = repeat ×3”.' },
    },
    observe: {
      tot: { fr: 'Je vois qu’il saute quand le ballon saute.', en: 'I see that they jump when the ball jumps.' },
      beg: { fr: 'Je vois qu’il compte 1, 2, 3 en suivant les blocs violets.', en: 'I see that they count 1, 2, 3 following the purple blocks.' },
      pro: { fr: 'Je vois qu’il dit « répéter trois fois » en montrant les trois blocs.', en: 'I see that they say “repeat three times” while pointing at the three blocks.' },
      warn: { fr: 'Il dit un nombre au hasard sans regarder la bande : on refait le chef d’orchestre au tapis.', en: 'They say a random number without looking at the strip: redo the conductor on the mat.' },
    },
    unplugged: {
      id: 'ch8-s5:d',
      bridge: { fr: 'Le chef d’orchestre donne le mot « répéter ×3 » avec le corps. Faites-le juste avant : la carte 🔁 3 passe du tapis au tableau, sous les trois blocs violets.', en: 'The conductor gives the words “repeat ×3” with the body. Do it right before: the 🔁 3 card moves from the mat to the board, under the three purple blocks.' },
    },
    noSound: {
      fr: 'Sans son, on compte les sauts en regardant le ballon monter et redescendre. Le pilote tape dans les mains à chaque saut.',
      en: 'Without sound, count the jumps by watching the ball go up and down. The pilot claps at each jump.',
    },
    vocab: [
      { word: { fr: 'Sauter = le bloc violet, le ballon bondit', en: 'Jump = the purple block, the ball bounces' }, gesture: { fr: 'On fait un petit saut sur place', en: 'Do a little jump on the spot' } },
      { word: { fr: 'Répéter = encore, encore, encore', en: 'Repeat = again, again, again' }, gesture: { fr: 'On tourne l’index en rond', en: 'Twirl the index finger in a circle' } },
      { word: { fr: 'Trois fois = on compte 1, 2, 3', en: 'Three times = we count 1, 2, 3' }, gesture: { fr: 'On lève trois doigts, un par un', en: 'Raise three fingers, one at a time' } },
      { word: { fr: 'Bande pleine = 8 blocs, stop', en: 'Full strip = 8 blocks, stop' }, gesture: { fr: 'Les deux mains font « assez »', en: 'Both hands say “enough”' } },
    ],
    tips: {
      a: { fr: 'Le ballon retombe tout seul : faites remarquer « il monte, il redescend, il n’a pas bougé ».', en: 'The ball comes back down on its own: point out “it goes up, comes down, it did not move”.' },
      b: { fr: 'Posez la carte 🔁 3 en carton sous les trois blocs violets : l’image de la boucle reste au tableau.', en: 'Put the cardboard 🔁 3 card under the three purple blocks: the loop picture stays on the board.' },
    },
    closing: {
      fr: 'Aujourd’hui, le ballon a sauté trois fois avec trois blocs pareils. On a trouvé un mot plus court : répéter ×3.',
      en: 'Today the ball jumped three times with three identical blocks. We found a shorter way to say it: repeat ×3.',
    },
    parents: {
      fr: 'Le ballon a sauté trois fois grâce à trois blocs « sauter ». Votre enfant a découvert le mot « répéter » : trois fois pareil, on le dit une seule fois. Jouez : « Répète 3 fois : tape, saute ! »',
      en: 'The ball jumped three times thanks to three “jump” blocks. Your child discovered the word “repeat”: three times the same, said only once. Play: “Repeat 3 times: clap, jump!”',
    },
  },
}
