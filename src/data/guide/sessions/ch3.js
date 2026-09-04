// Guide du professeur — chapitre 3 : J'utilise le clavier
// Modèle de données : voir ../README.md. Notions : ../concepts.js.
// Les jeux décrits ici sont ceux de src/games/KeyboardGame.jsx (clavier QWERTY
// à l'écran + vrai clavier ; letter-fall, word-fall, count), src/games/DogGrid.jsx
// (héros différent à chaque séance) et src/games/TinyGame.jsx (piano des animaux).

export const CHAPTER = {
  thread: {
    fr: 'Au clavier, chaque touche est un dessin qui veut dire quelque chose : une lettre, un chiffre. On apprend à trouver la bonne touche avant qu’elle tombe, puis à taper un mot entier, lettre après lettre. Et à chaque séance, un nouvel animal a besoin de nos flèches pour trouver son chemin.',
    en: 'On the keyboard, every key is a picture that means something: a letter, a number. We learn to find the right key before it falls, then to type a whole word, letter after letter. And each session, a new animal needs our arrows to find its way.',
  },
  concepts: ['abstraction', 'tool', 'sequence', 'pattern'],
  domains: [
    { fr: 'Mobiliser le langage, l’écrit : reconnaître les lettres capitales de son prénom et de mots simples.', en: 'Language and early writing: recognise capital letters from one’s name and simple words.' },
    { fr: 'Premiers outils pour structurer sa pensée : dénombrer une collection jusqu’à 9 et lire le chiffre.', en: 'First tools for structured thinking: count a set up to 9 and read the numeral.' },
    { fr: 'Explorer le monde : utiliser un objet technique (le clavier) et se repérer sur un quadrillage.', en: 'Exploring the world: use a technical object (the keyboard) and find one’s way on a grid.' },
  ],
  rhythm: {
    fr: 'Cinq séances de 25 minutes, une par semaine, en période 2 ou 3. Cœur du chapitre : s1, s2 et s3. Bonus : s4 (les murs) et s5 (le pingouin). Si le temps manque, coupez après s3 et gardez s5 pour les petits.',
    en: 'Five 25-minute sessions, one a week, in term 2 or 3. Core of the chapter: s1, s2 and s3. Bonus: s4 (the walls) and s5 (the penguin). Short on time? Stop after s3 and keep s5 for the youngest.',
  },
  materials: [
    { fr: 'Un vrai clavier sans fil relié à l’ordinateur du TBI (à tester une fois avant s1).', en: 'A real wireless keyboard connected to the board computer (test it once before s1).' },
    { fr: '26 cartes-lettres capitales, grand format, pour le clavier géant au sol.', en: '26 large capital-letter cards for the giant floor keyboard.' },
    { fr: 'Cartes-nombres de 1 à 9 et une boîte d’objets à compter (bouchons, cubes).', en: 'Number cards 1 to 9 and a box of objects to count (caps, cubes).' },
    { fr: 'Quatre flèches en carton (⬆️ ⬇️ ⬅️ ➡️) et un quadrillage au sol en ruban adhésif, préparés une fois.', en: 'Four cardboard arrows (⬆️ ⬇️ ⬅️ ➡️) and a taped grid on the floor, prepared once.' },
  ],
  ritual: {
    open: { fr: '« Robot, réveille-toi ! » : les enfants s’assoient droits, bras pliés, « bip bip ». Puis on réécoute une règle du tableau, au choix.', en: '“Robot, wake up!”: children sit up straight, arms bent, “beep beep”. Then we listen again to one board rule.' },
    close: { fr: '« Robot, va dormir ! » : tête baissée, yeux fermés, le bip s’éteint. La maîtresse dit ce qu’on a réussi aujourd’hui.', en: '“Robot, go to sleep!”: heads down, eyes closed, the beep fades. The teacher says what we managed today.' },
  },
  unplugged: [
    { id: 'ch8-s3:c', when: { fr: 'Avant s1 puis avant s2 : le clavier géant au sol, pour trouver une lettre avec les pieds.', en: 'Before s1 and again before s2: the giant floor keyboard, finding a letter with your feet.' } },
    { id: 'ch8-s2:a', when: { fr: 'Avant s3 : trier des objets, puis compter chaque bac.', en: 'Before s3: sort objects, then count each bin.' } },
    { id: 'ch8-s4:a', when: { fr: 'Après s3 ou s4 : ranger les nombres dans l’ordre avec des cartes.', en: 'After s3 or s4: order the numbers with cards.' } },
    { id: 'ch8-s1:b', when: { fr: 'Pendant s4 et s5 : le parcours codé au sol avant la grille à l’écran.', en: 'During s4 and s5: the coded floor path before the on-screen grid.' } },
  ],
  pitfalls: [
    { trap: { fr: 'Les enfants cherchent la lettre « dans l’ordre de l’alphabet » et ne la trouvent pas.', en: 'Children look for the letter “in alphabet order” and cannot find it.' },
      fix: { fr: 'Dites-le clairement : sur un clavier, les lettres ne sont pas rangées comme dans la chanson. On regarde la touche verte.', en: 'Say it plainly: on a keyboard, letters are not in song order. We look at the green key.' } },
    { trap: { fr: 'Le vrai clavier ne répond pas au TBI.', en: 'The real keyboard does not respond on the board.' },
      fix: { fr: 'Cliquez une fois dans la page du jeu avant de taper. Sinon, jouez sur le clavier de l’écran.', en: 'Click once inside the game page before typing. Otherwise, play on the on-screen keyboard.' } },
    { trap: { fr: 'Les grilles se ressemblent : les enfants devinent au lieu de lire le chemin.', en: 'The grids look alike: children guess instead of reading the path.' },
      fix: { fr: 'Chaque séance, faites d’abord dire où est le héros, où est le but, où sont les murs.', en: 'Each session, first have them say where the hero is, where the goal is, where the walls are.' } },
  ],
  observables: [
    { fr: 'Nomme au moins 5 lettres capitales et les montre sur le clavier.', en: 'Names at least 5 capital letters and finds them on the keyboard.' },
    { fr: 'Appuie sur une touche avec un seul doigt, une seule fois.', en: 'Presses a key with one finger, once.' },
    { fr: 'Tape un mot de 3 ou 4 lettres en suivant la touche verte.', en: 'Types a 3- or 4-letter word by following the green key.' },
    { fr: 'Compte une collection jusqu’à 5 (MS) ou 9 (GS) et tape le bon chiffre.', en: 'Counts a set up to 5 (age 4) or 9 (age 5) and types the right numeral.' },
    { fr: 'Range 4 flèches et plus pour amener le héros au but sans toucher un mur.', en: 'Lines up 4 or more arrows to bring the hero to the goal without hitting a wall.' },
    { fr: 'Dit « d’abord, ensuite, et puis » en montrant les flèches de son programme.', en: 'Says “first, then, and then” while pointing at the arrows of the program.' },
  ],
  celebration: {
    fr: 'Grand tournoi des lettres : la classe épelle son animal préféré du chapitre, un pilote tape sur le vrai clavier. Puis on rejoue la grille de l’ours en essayant les trois étoiles. On termine par le piano des animaux, tout le monde chante.',
    en: 'Big letter tournament: the class spells its favourite animal of the chapter, a pilot types it on the real keyboard. Then we replay the bear grid, going for three stars. We finish with the animal piano, everyone singing.',
  },
  parents: {
    fr: 'Ce chapitre, nous avons appris à utiliser le clavier : trouver une lettre, taper un mot, taper un nombre après avoir compté. Nous avons aussi guidé un chat, un lapin, un singe, un ours et un pingouin avec des flèches. À la maison, cherchez ensemble la première lettre du prénom sur un clavier ou un téléphone.',
    en: 'This chapter, we learned to use the keyboard: find a letter, type a word, type a number after counting. We also guided a cat, a rabbit, a monkey, a bear and a penguin with arrows. At home, look together for the first letter of your child’s name on a keyboard or a phone.',
  },
}

export const SESSIONS = {
  // ── s1 : Les lettres qui tombent ──────────────────────────────────────────
  'ch3-s1': {
    concept: 'abstraction',
    also: ['tool', 'sequence'],
    duration: 25,
    essential: {
      fr: 'Les enfants découvrent que chaque touche du clavier porte un dessin : une lettre. Ils trouvent la touche verte et l’appuient avant que la lettre touche le sol.',
      en: 'Children discover that every keyboard key carries a picture: a letter. They find the green key and press it before the letter hits the ground.',
    },
    setup: [
      { fr: 'Testez 🔊 : la voix doit dire « Bravo ! » quand on gagne.', en: 'Test 🔊: the voice must say “Well done!” when we win.' },
      { fr: 'Branchez le vrai clavier sans fil, cliquez dans la page du jeu, tapez une lettre pour vérifier.', en: 'Connect the real wireless keyboard, click inside the game page, type a letter to check.' },
      { fr: 'Ouvrez « Lettres simples » : regardez où la lettre verte apparaît sur le clavier de l’écran.', en: 'Open “Simple letters”: see where the green letter appears on the on-screen keyboard.' },
      { fr: 'Posez le clavier sur une petite table devant le TBI, à hauteur d’enfant.', en: 'Put the keyboard on a small table in front of the board, at child height.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », une règle du tableau. Montrez le vrai clavier : « ça, c’est le clavier ».', en: 'Ritual: “Robot, wake up!”, one board rule. Show the real keyboard: “this is the keyboard”.' } },
      { min: 4, what: { fr: 'Piano des animaux : trois pilotes PS touchent une touche colorée, la classe fait le cri de l’animal.', en: 'Animal piano: three age-3 pilots tap a coloured key, the class makes the animal’s sound.' }, act: 'tot' },
      { min: 3, what: { fr: 'Découverte : la lettre tombe, la même lettre devient verte en bas. Un enfant vient la montrer du doigt, sans appuyer.', en: 'Discovery: the letter falls, the same letter turns green below. A child points at it, without pressing.' }, act: 'a' },
      { min: 8, what: { fr: 'Lettres simples : 6 lettres = un pilote. Le copilote nomme la lettre, la classe la montre avec les bras.', en: 'Simple letters: 6 letters = one pilot. The co-pilot names the letter, the class shows it with their arms.' }, act: 'a' },
      { min: 5, what: { fr: 'Le chat et le poisson : la classe dit le chemin, le pilote range les flèches, Go !', en: 'The cat and the fish: the class says the path, the pilot lines up the arrows, Go!' }, act: 'b' },
      { min: 2, what: { fr: 'Clôture : « Robot, va dormir ! ». On redit les lettres trouvées aujourd’hui.', en: 'Closing: “Robot, go to sleep!”. We say again the letters found today.' } },
    ],
    roles: {
      fr: 'Le pilote 🎮 tape, un doigt. Le copilote 🗣️ dit le nom de la lettre avant. La classe la dessine en grand avec les bras. Le vérificateur 👀 lève le pouce si le pilote a appuyé une seule fois.',
      en: 'The pilot 🎮 types with one finger. The co-pilot 🗣️ says the letter’s name first. The class draws it big with their arms. The checker 👀 gives a thumbs-up if the pilot pressed only once.',
    },
    say: [
      { fr: 'Regarde : la lettre tombe, et la même lettre devient verte en bas.', en: 'Look: the letter falls, and the same letter turns green below.' },
      { fr: 'Un seul doigt, une seule fois. Comme une sonnette.', en: 'One finger, one press. Like a doorbell.' },
      { fr: 'Dis son nom d’abord, tape ensuite.', en: 'Say its name first, type after.' },
      { fr: 'Elle est tombée ? Ce n’est pas grave, une autre arrive.', en: 'Did it fall? No problem, another one is coming.' },
      { fr: 'Le chat veut le poisson : d’abord on monte, ensuite on va à droite.', en: 'The cat wants the fish: first we go up, then we go right.' },
    ],
    ask: [
      { fr: 'Où est la lettre verte ? Montre-la avec ton doigt.', en: 'Where is the green letter? Point at it with your finger.' },
      { fr: 'Cette lettre, elle est dans ton prénom ?', en: 'Is this letter in your name?' },
      { fr: 'Que se passe-t-il si on appuie sur une autre touche ?', en: 'What happens if we press another key?' },
      { fr: 'Le chat est en bas, le poisson en haut : il faut monter ou descendre ?', en: 'The cat is at the bottom, the fish at the top: go up or down?' },
    ],
    pitfalls: [
      { trap: { fr: 'La lettre tombe trop vite, l’enfant n’a pas le temps.', en: 'The letter falls too fast, the child has no time.' },
        fix: { fr: 'Jouez sur le clavier de l’écran : la touche verte guide le doigt. Le copilote annonce la lettre dès qu’elle apparaît.', en: 'Play on the on-screen keyboard: the green key guides the finger. The co-pilot calls the letter as soon as it appears.' } },
      { trap: { fr: 'L’enfant appuie avec tout le poing ou reste appuyé.', en: 'The child presses with the whole fist or holds the key down.' },
        fix: { fr: 'Faites le geste de la sonnette dans l’air, puis sur la table, puis sur la touche.', en: 'Mime the doorbell gesture in the air, then on the table, then on the key.' } },
      { trap: { fr: 'L’enfant cherche la lettre « dans l’ordre » : A, B, C…', en: 'The child looks for the letter “in order”: A, B, C…' },
        fix: { fr: 'Dites que le clavier est rangé autrement. On cherche la couleur verte, pas l’ordre de la chanson.', en: 'Say the keyboard is arranged differently. We look for the green colour, not the song order.' } },
      { trap: { fr: 'Le vrai clavier ne fait rien.', en: 'The real keyboard does nothing.' },
        fix: { fr: 'Cliquez d’abord dans la page du jeu. Sinon, continuez avec le clavier de l’écran.', en: 'Click inside the game page first. Otherwise, carry on with the on-screen keyboard.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 Piano des animaux seulement : une touche, un animal, son nom. Vous nommez l’animal avec l’enfant.', en: '🌱 Animal piano only: one key, one animal, its name. You name the animal with the child.' },
      beg: { fr: '🌟 Lettres simples sur le clavier de l’écran : trouver la touche verte, dire la lettre, appuyer.', en: '🌟 Simple letters on the on-screen keyboard: find the green key, say the letter, press.' },
      pro: { fr: '🏆 Lettres simples sur le vrai clavier, sans regarder la touche verte. Puis la grille du chat : 6 flèches, dire le chemin avant Go.', en: '🏆 Simple letters on the real keyboard, without looking at the green key. Then the cat grid: 6 arrows, say the path before Go.' },
    },
    observe: {
      tot: { fr: 'Je vois qu’il touche une touche et regarde l’animal apparaître.', en: 'I see the child tap a key and watch the animal appear.' },
      beg: { fr: 'Je vois qu’il trouve la touche verte et appuie une seule fois.', en: 'I see the child find the green key and press once.' },
      pro: { fr: 'Je vois qu’il nomme la lettre avant de la taper sur le vrai clavier.', en: 'I see the child name the letter before typing it on the real keyboard.' },
      warn: { fr: 'Il tape partout au hasard : on arrête, on montre la lettre à deux, on reprend.', en: 'The child hits keys at random: stop, point at the letter together, start again.' },
    },
    unplugged: {
      id: 'ch8-s3:c',
      bridge: {
        fr: 'Jouez au clavier géant au sol avant la séance : sauter sur la lettre, c’est déjà « taper » la lettre. À l’écran, le doigt remplace les pieds.',
        en: 'Play the giant floor keyboard before the session: jumping on the letter is already “typing” it. On screen, the finger replaces the feet.',
      },
    },
    noSound: {
      fr: 'Vous dites vous-même la lettre qui tombe et le nom de l’animal du piano. Le « Bravo » se lit avec la coupe 🏆 à l’écran.',
      en: 'You say the falling letter and the piano animal’s name yourself. The “Well done” is read from the 🏆 on screen.',
    },
    vocab: [
      { word: { fr: 'La touche', en: 'The key' }, gesture: { fr: 'On appuie l’index sur le genou, une fois.', en: 'Press the index finger on the knee, once.' } },
      { word: { fr: 'La lettre', en: 'The letter' }, gesture: { fr: 'On dessine la lettre en grand avec le bras.', en: 'Draw the letter big with the arm.' } },
      { word: { fr: 'Le clavier', en: 'The keyboard' }, gesture: { fr: 'On pianote sur les cuisses avec les dix doigts.', en: 'Tap on the thighs with all ten fingers.' } },
    ],
    tips: {
      tot: { fr: 'Le piano n’écoute que l’écran : les touches colorées, pas le vrai clavier.', en: 'The piano listens to the screen only: the coloured keys, not the real keyboard.' },
      a: { fr: 'La lettre met environ 8 secondes à tomber : le copilote la nomme dès le haut.', en: 'The letter takes about 8 seconds to fall: the co-pilot names it right from the top.' },
      b: { fr: 'Trois flèches ⬆️ puis trois ➡️ : un chemin en L, facile à dire tout haut.', en: 'Three ⬆️ then three ➡️ arrows: an L path, easy to say out loud.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a trouvé les lettres sur le clavier et on a tapé avec un seul doigt.',
      en: 'Today, we found the letters on the keyboard and typed with one finger.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a tapé des lettres sur un clavier avant qu’elles tombent. Il a appris à appuyer une seule fois, avec un doigt. À la maison, cherchez la première lettre de son prénom sur un clavier ou un téléphone.',
      en: 'Today, your child typed letters on a keyboard before they fell. They learned to press once, with one finger. At home, look for the first letter of their name on a keyboard or a phone.',
    },
  },

  // ── s2 : Les mots qui tombent ─────────────────────────────────────────────
  'ch3-s2': {
    concept: 'abstraction',
    also: ['sequence', 'tool'],
    duration: 25,
    essential: {
      fr: 'Un mot, c’est des lettres dans l’ordre. Les enfants tapent les lettres d’un mot, l’une après l’autre, en suivant la touche verte.',
      en: 'A word is letters in order. Children type the letters of a word, one after another, following the green key.',
    },
    setup: [
      { fr: 'Testez 🔊 et le vrai clavier : cliquez dans la page, tapez une lettre.', en: 'Test 🔊 and the real keyboard: click inside the page, type a letter.' },
      { fr: 'Choisissez la langue : les mots sont en français (CHAT, LUNE…) ou en anglais (CAT, SUN…).', en: 'Choose the language: the words are in French (CHAT, LUNE…) or in English (CAT, SUN…).' },
      { fr: 'Écrivez CHAT en capitales au tableau, une couleur par lettre.', en: 'Write CAT in capitals on the board, one colour per letter.' },
      { fr: 'Gardez les cartes-lettres du clavier géant à portée de main.', en: 'Keep the giant-keyboard letter cards within reach.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », la règle « je chuchote ».', en: 'Ritual: “Robot, wake up!”, the rule “I whisper”.' } },
      { min: 3, what: { fr: 'Au tableau : CHAT. On épelle avec le doigt, lettre après lettre. « Un mot, c’est des lettres dans l’ordre. »', en: 'On the board: CAT. We spell with a finger, letter after letter. “A word is letters in order.”' } },
      { min: 3, what: { fr: 'Découverte : le mot tombe. La lettre à taper est violette, les lettres faites deviennent vertes.', en: 'Discovery: the word falls. The letter to type is purple, the letters done turn green.' }, act: 'a' },
      { min: 9, what: { fr: 'Mots qui tombent : 3 mots = un pilote. La classe épelle tout haut, le pilote suit la touche verte.', en: 'Falling words: 3 words = one pilot. The class spells out loud, the pilot follows the green key.' }, act: 'a' },
      { min: 5, what: { fr: 'Le lapin et la carotte : 7 flèches. Le copilote dit « d’abord… ensuite… », le pilote range, Go !', en: 'The rabbit and the carrot: 7 arrows. The co-pilot says “first… then…”, the pilot lines them up, Go!' }, act: 'b' },
      { min: 2, what: { fr: 'Clôture : « Robot, va dormir ! ». On épelle une dernière fois le mot préféré.', en: 'Closing: “Robot, go to sleep!”. We spell the favourite word one last time.' } },
    ],
    roles: {
      fr: 'Le pilote 🎮 tape lettre après lettre. Le copilote 🗣️ épelle une lettre d’avance. La classe montre chaque lettre sur les cartes au sol. Le vérificateur 👀 compte les lettres vertes.',
      en: 'The pilot 🎮 types letter after letter. The co-pilot 🗣️ spells one letter ahead. The class points at each letter on the floor cards. The checker 👀 counts the green letters.',
    },
    say: [
      { fr: 'Un mot, c’est des lettres dans l’ordre, comme une file.', en: 'A word is letters in order, like a line.' },
      { fr: 'Regarde la lettre violette : c’est elle qu’on tape maintenant.', en: 'Look at the purple letter: that is the one we type now.' },
      { fr: 'Elle est verte ? Bravo, on passe à la suivante.', en: 'Is it green? Well done, on to the next one.' },
      { fr: 'Le mot est tombé, un nouveau mot arrive. On respire.', en: 'The word fell, a new word is coming. Take a breath.' },
      { fr: 'Le lapin monte trois fois, puis va quatre fois à droite.', en: 'The rabbit goes up three times, then right four times.' },
    ],
    ask: [
      { fr: 'Combien de lettres dans ce mot ? On compte avec les doigts.', en: 'How many letters in this word? Let’s count on our fingers.' },
      { fr: 'Quelle est la première lettre ? Et après ?', en: 'What is the first letter? And after?' },
      { fr: 'Si on tape la dernière lettre en premier, ça marche ?', en: 'If we type the last letter first, does it work?' },
      { fr: 'Le lapin a besoin de combien de flèches ? Plus ou moins que le chat ?', en: 'How many arrows does the rabbit need? More or fewer than the cat?' },
    ],
    pitfalls: [
      { trap: { fr: 'Les mots longs (SOLEIL, MAISON) tombent avant la fin.', en: 'Long words (FLOWER, HOUSE) fall before the end.' },
        fix: { fr: 'Ce n’est pas une faute : un nouveau mot arrive. Le copilote épelle une lettre d’avance pour gagner du temps.', en: 'It is not a mistake: a new word comes. The co-pilot spells one letter ahead to save time.' } },
      { trap: { fr: 'L’enfant tape la bonne lettre, mais pas celle du moment.', en: 'The child types a right letter, but not the current one.' },
        fix: { fr: 'Montrez la lettre violette dans le mot et la touche verte en bas : elles sont pareilles.', en: 'Point at the purple letter in the word and the green key below: they are the same.' } },
      { trap: { fr: 'Les enfants connaissent la lettre en minuscule et ne la reconnaissent pas en capitale.', en: 'Children know the lowercase letter and do not recognise the capital.' },
        fix: { fr: 'Le clavier écrit en capitales, comme les prénoms sur les porte-manteaux. Montrez les deux formes au tableau.', en: 'The keyboard writes in capitals, like names on the coat pegs. Show both forms on the board.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 Reprenez le piano des animaux de s1, ou un mot de 3 lettres : l’adulte dit la lettre, l’enfant touche la touche verte.', en: '🌱 Replay the animal piano from s1, or one 3-letter word: the adult says the letter, the child taps the green key.' },
      beg: { fr: '🌟 Un mot court, sur le clavier de l’écran, la touche verte comme guide. La classe épelle avec lui.', en: '🌟 One short word, on the on-screen keyboard, the green key as a guide. The class spells along.' },
      pro: { fr: '🏆 Trois mots sur le vrai clavier ; le copilote épelle sans regarder l’écran. Puis la grille du lapin en 7 flèches.', en: '🏆 Three words on the real keyboard; the co-pilot spells without looking at the screen. Then the rabbit grid in 7 arrows.' },
    },
    observe: {
      tot: { fr: 'Je vois qu’il appuie sur la touche verte quand on la lui montre.', en: 'I see the child press the green key when it is pointed out.' },
      beg: { fr: 'Je vois qu’il attend que la lettre soit verte avant de chercher la suivante.', en: 'I see the child wait for the letter to turn green before looking for the next one.' },
      pro: { fr: 'Je vois qu’il épelle le mot entier puis tape sans hésiter.', en: 'I see the child spell the whole word then type without hesitating.' },
      warn: { fr: 'Il tape plusieurs touches d’un coup : on revient à une lettre seule, sur l’écran.', en: 'The child hits several keys at once: go back to a single letter, on screen.' },
    },
    unplugged: {
      id: 'ch8-s3:c',
      bridge: {
        fr: 'Sur le clavier géant, épelez C-H-A-T avec les pieds avant d’ouvrir le jeu. Le même mot tombera peut-être à l’écran !',
        en: 'On the giant keyboard, spell C-A-T with your feet before opening the game. The same word may fall on screen!',
      },
    },
    noSound: {
      fr: 'Vous épelez le mot à voix haute avec la classe. La victoire se voit : la coupe 🏆 et « Bravo ! » écrits à l’écran.',
      en: 'You spell the word aloud with the class. Winning is visible: the 🏆 and “Well done!” written on screen.',
    },
    vocab: [
      { word: { fr: 'Le mot', en: 'The word' }, gesture: { fr: 'On aligne les deux mains, paume contre paume, puis on les écarte.', en: 'Line up both hands, palm to palm, then spread them apart.' } },
      { word: { fr: 'Épeler', en: 'To spell' }, gesture: { fr: 'On tape un doigt sur l’autre paume à chaque lettre.', en: 'Tap one finger on the other palm for each letter.' } },
      { word: { fr: 'Dans l’ordre', en: 'In order' }, gesture: { fr: 'On avance la main par à-coups, un pas à la fois.', en: 'Move the hand forward in little jumps, one step at a time.' } },
    ],
    tips: {
      a: { fr: 'Le mot entier doit être tapé en 8 secondes : commencez par laisser tomber CHAT ou LUNE, les plus courts.', en: 'The whole word must be typed in 8 seconds: start by playing CAT or SUN, the shortest ones.' },
      b: { fr: 'La grille est plus large : 3 ⬆️ et 4 ➡️. Comptez les cases avec le doigt avant de poser les flèches.', en: 'The grid is wider: 3 ⬆️ and 4 ➡️. Count the squares with a finger before placing the arrows.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a tapé des mots entiers, une lettre après l’autre, dans l’ordre.',
      en: 'Today, we typed whole words, one letter after another, in order.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a tapé des mots entiers au clavier, en suivant la lettre verte. Il sait qu’un mot, c’est des lettres dans l’ordre. À la maison, épelez son prénom ensemble, lettre par lettre.',
      en: 'Today, your child typed whole words on the keyboard, following the green letter. They know a word is letters in order. At home, spell their name together, letter by letter.',
    },
  },

  // ── s3 : Compter les nombres ──────────────────────────────────────────────
  'ch3-s3': {
    concept: 'pattern',
    also: ['abstraction', 'tool'],
    duration: 25,
    essential: {
      fr: 'Les enfants comptent des ronds à l’écran, puis tapent le chiffre sur le pavé. Un chiffre, c’est un dessin qui dit « combien ».',
      en: 'Children count circles on screen, then type the numeral on the number pad. A numeral is a picture that says “how many”.',
    },
    setup: [
      { fr: 'Testez 🔊 et le vrai clavier : tapez un chiffre de la rangée du haut.', en: 'Test 🔊 and the real keyboard: type a digit from the top row.' },
      { fr: 'Ouvrez « Compte les ronds » : les ronds vont de 2 à 8, le pavé va de 1 à 9.', en: 'Open “Count the circles”: the circles go from 2 to 8, the pad from 1 to 9.' },
      { fr: 'Posez au tableau les cartes-nombres de 1 à 9 dans l’ordre.', en: 'Put the number cards 1 to 9 on the board, in order.' },
      { fr: 'Préparez une boîte de bouchons pour compter « en vrai » d’abord.', en: 'Prepare a box of caps to count “for real” first.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », la règle « j’attends mon tour ».', en: 'Ritual: “Robot, wake up!”, the rule “I wait for my turn”.' } },
      { min: 4, what: { fr: 'Compter en vrai : 5 bouchons dans la main, on compte en touchant chacun. On montre la carte 5.', en: 'Real counting: 5 caps in the hand, count by touching each one. Show the card 5.' } },
      { min: 3, what: { fr: 'Découverte : les ronds à l’écran. On compte ensemble, le doigt sur chaque rond, puis on cherche le chiffre.', en: 'Discovery: the circles on screen. Count together, a finger on each circle, then look for the numeral.' }, act: 'a' },
      { min: 8, what: { fr: 'Compte les ronds : 4 bonnes réponses = un pilote. Le copilote compte, la classe montre le nombre avec les doigts.', en: 'Count the circles: 4 right answers = one pilot. The co-pilot counts, the class shows the number with fingers.' }, act: 'a' },
      { min: 5, what: { fr: 'Le singe et la banane : un mur au milieu ! On monte tout en haut d’abord, puis à droite.', en: 'The monkey and the banana: a wall in the middle! Go all the way up first, then right.' }, act: 'b' },
      { min: 2, what: { fr: 'Clôture : « Robot, va dormir ! ». On compte les pilotes du jour.', en: 'Closing: “Robot, go to sleep!”. We count today’s pilots.' } },
    ],
    roles: {
      fr: 'Le copilote 🗣️ compte tout haut en montrant chaque rond. Le pilote 🎮 tape le chiffre. La classe montre le nombre avec ses doigts. Le vérificateur 👀 compare les doigts et le chiffre tapé.',
      en: 'The co-pilot 🗣️ counts aloud while pointing at each circle. The pilot 🎮 types the numeral. The class shows the number with fingers. The checker 👀 compares fingers and the typed numeral.',
    },
    say: [
      { fr: 'On touche chaque rond une fois, et on dit un nombre à chaque fois.', en: 'We touch each circle once, and say one number each time.' },
      { fr: 'Le dernier nombre qu’on dit, c’est combien il y en a.', en: 'The last number we say is how many there are.' },
      { fr: 'Le chiffre, c’est le dessin du nombre. Cherche-le sur le pavé.', en: 'The numeral is the number’s picture. Find it on the pad.' },
      { fr: '« Compte encore ! » : on recompte tranquillement, plus lentement.', en: '“Count again!”: we count once more, calmly, more slowly.' },
      { fr: 'Le mur bloque le singe. On monte d’abord tout en haut.', en: 'The wall blocks the monkey. We go all the way up first.' },
    ],
    ask: [
      { fr: 'Combien de ronds ? Comment tu as fait pour être sûr ?', en: 'How many circles? How did you make sure?' },
      { fr: 'Ce chiffre, il ressemble à quoi ? Un serpent ? Un cygne ?', en: 'What does this numeral look like? A snake? A swan?' },
      { fr: 'Il y en a plus ou moins que tout à l’heure ?', en: 'Are there more or fewer than before?' },
      { fr: 'Le singe peut-il passer par le mur ? Alors par où ?', en: 'Can the monkey go through the wall? Then which way?' },
    ],
    pitfalls: [
      { trap: { fr: 'L’enfant compte vite et saute un rond, ou en touche deux fois un.', en: 'The child counts fast and skips a circle, or touches one twice.' },
        fix: { fr: 'Comptez à deux, en chœur, le doigt bien posé sur chaque rond. Plus lentement à chaque fois.', en: 'Count together, in chorus, the finger firmly on each circle. Slower each time.' } },
      { trap: { fr: 'L’enfant sait compter mais ne reconnaît pas le chiffre sur le pavé.', en: 'The child can count but does not recognise the numeral on the pad.' },
        fix: { fr: 'La classe montre le nombre avec les doigts, puis on cherche la carte-nombre au tableau, puis le pavé.', en: 'The class shows the number with fingers, then we find the number card on the board, then the pad.' } },
      { trap: { fr: 'Sur le vrai clavier, l’enfant cherche le chiffre parmi les lettres.', en: 'On the real keyboard, the child looks for the digit among the letters.' },
        fix: { fr: 'Montrez la rangée du haut : « les chiffres habitent tous en haut ».', en: 'Show the top row: “all the digits live at the top”.' } },
      { trap: { fr: 'Le singe fait l’escalier (monte, droite, monte, droite) et tape dans le mur.', en: 'The monkey goes stairs-style (up, right, up, right) and hits the wall.' },
        fix: { fr: 'Rejouez le chemin avec le doigt sur la grille : tout en haut, puis tout à droite.', en: 'Replay the path with a finger on the grid: all the way up, then all the way right.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 Compter 2 ou 3 bouchons dans la main, puis appuyer sur le chiffre que vous montrez du doigt.', en: '🌱 Count 2 or 3 caps in the hand, then press the numeral you point at.' },
      beg: { fr: '🌟 Compter jusqu’à 5 : le copilote compte avec le doigt, le pilote tape. Reprenez le dé de ch1-s7 si besoin.', en: '🌟 Count up to 5: the co-pilot counts with a finger, the pilot types. Replay the dice from ch1-s7 if needed.' },
      pro: { fr: '🏆 Compter jusqu’à 9 en silence, taper sur le vrai clavier. Puis la grille du singe avec le mur : 8 flèches.', en: '🏆 Count up to 9 silently, type on the real keyboard. Then the monkey grid with the wall: 8 arrows.' },
    },
    observe: {
      tot: { fr: 'Je vois qu’il touche les objets un par un en disant des nombres.', en: 'I see the child touch the objects one by one while saying numbers.' },
      beg: { fr: 'Je vois qu’il compte jusqu’à 5 et retrouve le chiffre sur le pavé.', en: 'I see the child count up to 5 and find the numeral on the pad.' },
      pro: { fr: 'Je vois qu’il compte jusqu’à 8 sans se tromper et tape du premier coup.', en: 'I see the child count up to 8 without error and type right first time.' },
      warn: { fr: 'Il tape un chiffre au hasard sans compter : on revient aux bouchons dans la main.', en: 'The child types a random digit without counting: go back to the caps in the hand.' },
    },
    unplugged: {
      id: 'ch8-s2:a',
      bridge: {
        fr: 'Triez d’abord les bouchons par couleur, puis comptez chaque bac. Le bac des rouges devient les ronds de l’écran.',
        en: 'First sort the caps by colour, then count each bin. The red bin becomes the circles on screen.',
      },
    },
    noSound: {
      fr: 'Vous comptez avec l’enfant à voix haute. Sans voix, la réponse fausse se voit : « Compte encore ! » écrit en rouge.',
      en: 'You count aloud with the child. Without voice, a wrong answer is visible: “Count again!” written in red.',
    },
    vocab: [
      { word: { fr: 'Compter', en: 'To count' }, gesture: { fr: 'On tape l’index sur les doigts de l’autre main, un par un.', en: 'Tap the index finger on the other hand’s fingers, one by one.' } },
      { word: { fr: 'Le chiffre', en: 'The numeral' }, gesture: { fr: 'On dessine un carré dans l’air : un dessin qui dit combien.', en: 'Draw a square in the air: a picture that says how many.' } },
      { word: { fr: 'Le pavé', en: 'The number pad' }, gesture: { fr: 'On montre neuf petits carrés avec les deux mains.', en: 'Show nine little squares with both hands.' } },
    ],
    tips: {
      a: { fr: 'Le nombre change toujours après une bonne réponse : l’enfant voit tout de suite que ça a marché.', en: 'The number always changes after a right answer: the child sees straight away that it worked.' },
      b: { fr: 'Le mur est pile au milieu : le chemin en L (4 ⬆️ puis 4 ➡️) passe, l’escalier bloque.', en: 'The wall is right in the middle: the L path (4 ⬆️ then 4 ➡️) works, the staircase gets blocked.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a compté des ronds et tapé le chiffre qui dit combien.',
      en: 'Today, we counted circles and typed the numeral that says how many.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a compté des ronds à l’écran et tapé le bon chiffre au clavier. Il a aussi guidé un singe autour d’un mur. À la maison, comptez ensemble les fourchettes en mettant la table.',
      en: 'Today, your child counted circles on screen and typed the right numeral on the keyboard. They also guided a monkey around a wall. At home, count the forks together while setting the table.',
    },
  },

  // ── s4 : Compter et trouver le chemin ─────────────────────────────────────
  'ch3-s4': {
    concept: 'sequence',
    also: ['pattern', 'tool'],
    duration: 25,
    essential: {
      fr: 'Les enfants comptent des pommes, puis guident l’ours entre deux murs jusqu’au miel. Ils disent le chemin avant d’appuyer sur Go.',
      en: 'Children count apples, then guide the bear between two walls to the honey. They say the path before pressing Go.',
    },
    setup: [
      { fr: 'Testez 🔊 et le vrai clavier : un chiffre, une lettre.', en: 'Test 🔊 and the real keyboard: one digit, one letter.' },
      { fr: 'Ouvrez « L’ours et le miel » : l’ours est en bas au milieu, le miel en haut, deux murs 🧱 sur les côtés.', en: 'Open “The bear and the honey”: the bear is at the bottom middle, the honey at the top, two 🧱 walls on the sides.' },
      { fr: 'Tracez la même grille au sol avec du ruban : 5 cases sur 5, deux murs en carton.', en: 'Tape the same grid on the floor: 5 by 5, two cardboard walls.' },
      { fr: 'Apportez un panier de pommes (ou des images) pour compter en vrai.', en: 'Bring a basket of apples (or pictures) to count for real.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », la règle « j’écoute la consigne ».', en: 'Ritual: “Robot, wake up!”, the rule “I listen to the instruction”.' } },
      { min: 6, what: { fr: 'Compte les pommes : 4 bonnes réponses = un pilote. La classe montre le nombre avec les doigts.', en: 'Count the apples: 4 right answers = one pilot. The class shows the number with fingers.' }, act: 'a' },
      { min: 3, what: { fr: 'Lire la grille : où est l’ours ? le miel ? les murs ? Un enfant montre le chemin avec le doigt.', en: 'Read the grid: where is the bear? the honey? the walls? A child traces the path with a finger.' }, act: 'b' },
      { min: 4, what: { fr: 'Parcours codé au sol : un enfant-ours, un enfant-miel, la classe crie « monte ! » quatre fois.', en: 'Coded floor path: a bear child, a honey child, the class shouts “up!” four times.' } },
      { min: 7, what: { fr: 'L’ours et le miel à l’écran : le copilote dit « monte, monte, monte, monte », le pilote range, Go !', en: 'The bear and the honey on screen: the co-pilot says “up, up, up, up”, the pilot lines up, Go!' }, act: 'b' },
      { min: 2, what: { fr: 'Clôture : « Robot, va dormir ! ». On compte les étoiles gagnées.', en: 'Closing: “Robot, go to sleep!”. We count the stars we won.' } },
    ],
    roles: {
      fr: 'Le copilote 🗣️ dit chaque flèche avant que le pilote 🎮 la pose. La classe fait le geste ⬆️ avec le bras à chaque flèche. Le vérificateur 👀 compte les flèches posées et annonce « 4 ! ».',
      en: 'The co-pilot 🗣️ says each arrow before the pilot 🎮 places it. The class makes the ⬆️ gesture with an arm for each arrow. The checker 👀 counts the placed arrows and calls “4!”.',
    },
    say: [
      { fr: 'Combien de pommes ? On touche chaque pomme une fois.', en: 'How many apples? We touch each apple once.' },
      { fr: 'Les murs, c’est interdit. L’ours passe entre les deux.', en: 'The walls are off limits. The bear goes between them.' },
      { fr: 'Dis les flèches avant de les poser : monte, monte, monte, monte.', en: 'Say the arrows before placing them: up, up, up, up.' },
      { fr: 'Une flèche en trop ? Touche-la dans la file, elle s’enlève.', en: 'One arrow too many? Tap it in the line, it disappears.' },
      { fr: 'Trois étoiles : on a trouvé le chemin le plus court.', en: 'Three stars: we found the shortest path.' },
    ],
    ask: [
      { fr: 'L’ours doit monter combien de fois ? Compte les cases.', en: 'How many times must the bear go up? Count the squares.' },
      { fr: 'Que se passe-t-il si on pose une flèche ⬅️ au milieu ?', en: 'What happens if we place a ⬅️ arrow in the middle?' },
      { fr: 'Pourquoi le visage de l’ours est triste ? Quelle flèche s’est trompée ?', en: 'Why is the bear’s face sad? Which arrow went wrong?' },
      { fr: 'On a gagné avec 6 flèches. On peut faire avec moins ?', en: 'We won with 6 arrows. Can we do it with fewer?' },
    ],
    pitfalls: [
      { trap: { fr: 'L’enfant pose des flèches dans tous les sens pour « voir ce que ça fait ».', en: 'The child places arrows every which way to “see what happens”.' },
        fix: { fr: 'Règle du jour : on dit la flèche avant de la poser. Le copilote est le seul à parler.', en: 'Rule of the day: we say the arrow before placing it. Only the co-pilot speaks.' } },
      { trap: { fr: 'L’ours touche un mur : l’enfant appuie encore sur Go sans rien changer.', en: 'The bear hits a wall: the child presses Go again without changing anything.' },
        fix: { fr: 'Rejouez le programme avec le doigt sur la grille, flèche par flèche, jusqu’au mur. Enlevez cette flèche.', en: 'Replay the program with a finger on the grid, arrow by arrow, up to the wall. Remove that arrow.' } },
      { trap: { fr: 'Les enfants comptent les pommes en chœur mais trop vite, et se trompent.', en: 'Children count the apples in chorus but too fast, and get it wrong.' },
        fix: { fr: 'Le copilote seul compte, le doigt sur chaque pomme. La classe montre le résultat avec les doigts.', en: 'Only the co-pilot counts, a finger on each apple. The class shows the result with fingers.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 Compter 2 ou 3 pommes puis appuyer sur le chiffre montré. Sur la grille, l’adulte pose 3 flèches, l’enfant pose la dernière et appuie sur Go.', en: '🌱 Count 2 or 3 apples then press the numeral shown. On the grid, the adult places 3 arrows, the child places the last one and presses Go.' },
      beg: { fr: '🌟 Compter jusqu’à 5 sur l’écran. Sur la grille, dire « monte » quatre fois en posant les flèches, puis Go.', en: '🌟 Count up to 5 on screen. On the grid, say “up” four times while placing the arrows, then Go.' },
      pro: { fr: '🏆 Compter jusqu’à 9 sur le vrai clavier. Sur la grille, prédire le résultat avant Go et viser les trois étoiles avec 4 flèches.', en: '🏆 Count up to 9 on the real keyboard. On the grid, predict the result before Go and aim for three stars with 4 arrows.' },
    },
    observe: {
      tot: { fr: 'Je vois qu’il pose une flèche et regarde l’ours bouger après Go.', en: 'I see the child place an arrow and watch the bear move after Go.' },
      beg: { fr: 'Je vois qu’il dit « monte » avant chaque flèche et s’arrête à quatre.', en: 'I see the child say “up” before each arrow and stop at four.' },
      pro: { fr: 'Je vois qu’il annonce « l’ours va arriver » avant Go, et enlève une flèche en trop.', en: 'I see the child announce “the bear will get there” before Go, and remove a spare arrow.' },
      warn: { fr: 'Il appuie sur Go sans regarder la grille : on retourne au parcours au sol.', en: 'The child presses Go without looking at the grid: go back to the floor path.' },
    },
    unplugged: {
      id: 'ch8-s1:b',
      bridge: {
        fr: 'Le parcours codé au sol reproduit la grille de l’ours : deux murs en carton, un enfant-ours qui n’avance que sur « monte ». Puis on refait la même chose à l’écran.',
        en: 'The coded floor path copies the bear grid: two cardboard walls, a bear child who only moves on “up”. Then we do the same on screen.',
      },
    },
    noSound: {
      fr: 'Vous dites « Bravo » ou « Essaie encore » à la place de la voix. Le visage 😟 de l’ours et le message rouge suffisent pour voir l’erreur.',
      en: 'You say “Well done” or “Try again” instead of the voice. The bear’s 😟 face and the red message are enough to see the mistake.',
    },
    vocab: [
      { word: { fr: 'Le mur', en: 'The wall' }, gesture: { fr: 'On met les deux mains à plat devant soi, on ne passe pas.', en: 'Put both hands flat in front of you, no way through.' } },
      { word: { fr: 'Le programme', en: 'The program' }, gesture: { fr: 'On avance la main par à-coups, un pas à la fois.', en: 'Move the hand forward in little jumps, one step at a time.' } },
      { word: { fr: 'Prédire', en: 'To predict' }, gesture: { fr: 'On met la main en visière et on regarde loin.', en: 'Shade the eyes with a hand and look far ahead.' } },
    ],
    tips: {
      a: { fr: 'Les pommes 🍎 remplacent les ronds : même jeu, de 2 à 8 pommes, 4 réussites pour gagner.', en: 'Apples 🍎 replace the circles: same game, 2 to 8 apples, 4 wins to finish.' },
      b: { fr: 'Le couloir est tout droit : 4 ⬆️ suffisent, c’est la grille la plus courte du chapitre. Idéale pour les trois étoiles.', en: 'The corridor is straight: 4 ⬆️ are enough, the shortest grid of the chapter. Perfect for three stars.' },
    },
    closing: {
      fr: 'Aujourd’hui, on a compté des pommes et on a dit le chemin de l’ours avant d’appuyer sur Go.',
      en: 'Today, we counted apples and said the bear’s path before pressing Go.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a compté des pommes et tapé le chiffre. Il a aussi guidé un ours entre deux murs, en disant le chemin avant de le lancer. À la maison, demandez-lui : « Pour aller à ta chambre, d’abord quoi ? Ensuite ? ».',
      en: 'Today, your child counted apples and typed the numeral. They also guided a bear between two walls, saying the path before running it. At home, ask them: “To get to your room, first what? Then?”.',
    },
  },

  // ── s5 : Le chemin du pingouin ────────────────────────────────────────────
  'ch3-s5': {
    concept: 'sequence',
    also: ['cause', 'debug'],
    duration: 25,
    essential: {
      fr: 'Les petits font faire un pas au pingouin en touchant une flèche. Les grands rangent neuf flèches pour l’amener au drapeau en évitant deux murs.',
      en: 'The youngest make the penguin take one step by tapping an arrow. The older ones line up nine arrows to reach the flag, avoiding two walls.',
    },
    setup: [
      { fr: 'Testez 🔊 : le « Bravo ! » du pingouin doit s’entendre.', en: 'Test 🔊: the penguin’s “Well done!” must be heard.' },
      { fr: 'Ouvrez « Un pas vers le drapeau » : trois cases, le pingouin à gauche, le drapeau juste à côté.', en: 'Open “One step to the flag”: three squares, the penguin on the left, the flag right next to it.' },
      { fr: 'Ouvrez « Le pingouin et le drapeau » : grande grille de 6 sur 5, deux murs en diagonale.', en: 'Open “Penguin to the flag”: big 6 by 5 grid, two walls on the diagonal.' },
      { fr: 'Préparez les quatre flèches en carton et la grille au sol.', en: 'Prepare the four cardboard arrows and the floor grid.' },
    ],
    timeline: [
      { min: 3, what: { fr: 'Rituel : « Robot, réveille-toi ! », la règle « je lève la main ».', en: 'Ritual: “Robot, wake up!”, the rule “I raise my hand”.' } },
      { min: 4, what: { fr: 'Un pas vers le drapeau : chaque petit touche ➡️, le pingouin arrive, « Bravo ! ». Recommencer, au suivant.', en: 'One step to the flag: each young child taps ➡️, the penguin arrives, “Well done!”. Reset, next child.' }, act: 'tot' },
      { min: 3, what: { fr: 'Lire la grande grille : le pingouin en bas à gauche, le drapeau en haut à droite, deux murs. Le doigt trace le chemin.', en: 'Read the big grid: penguin bottom left, flag top right, two walls. A finger traces the path.' }, act: 'a' },
      { min: 8, what: { fr: 'Le pingouin et le drapeau : la classe dit « monte » quatre fois, « droite » cinq fois. Le pilote range, Go !', en: 'Penguin to the flag: the class says “up” four times, “right” five times. The pilot lines up, Go!' }, act: 'a' },
      { min: 4, what: { fr: 'Réparer : si le pingouin est triste, on cherche la flèche fautive, on la touche pour l’enlever, on relance.', en: 'Fixing: if the penguin is sad, we find the wrong arrow, tap it to remove it, run again.' }, act: 'a' },
      { min: 3, what: { fr: 'Clôture du chapitre : « Robot, va dormir ! ». On redit les cinq animaux qu’on a guidés.', en: 'Chapter closing: “Robot, go to sleep!”. We name the five animals we guided.' } },
    ],
    roles: {
      fr: 'Pour le petit pas : un pilote 🎮 PS, la classe crie « un pas ! ». Pour la grande grille : le copilote 🗣️ dicte, le pilote 🎮 pose, la classe compte les flèches avec les doigts, le vérificateur 👀 cherche le bug.',
      en: 'For the little step: an age-3 pilot 🎮, the class shouts “one step!”. For the big grid: the co-pilot 🗣️ dictates, the pilot 🎮 places, the class counts the arrows on fingers, the checker 👀 hunts the bug.',
    },
    say: [
      { fr: 'Touche la flèche ➡️ : le pingouin fait un pas tout de suite.', en: 'Tap the ➡️ arrow: the penguin takes one step right away.' },
      { fr: 'Ici, le pingouin attend. Il bouge seulement quand on appuie sur Go.', en: 'Here, the penguin waits. It only moves when we press Go.' },
      { fr: 'Le drapeau est loin : on monte, on monte, on monte, on monte, puis à droite.', en: 'The flag is far: up, up, up, up, then right.' },
      { fr: 'Le pingouin est triste ? On cherche le bug, on répare.', en: 'Is the penguin sad? We look for the bug, we fix it.' },
      { fr: 'Neuf flèches et trois étoiles : quel chemin !', en: 'Nine arrows and three stars: what a path!' },
    ],
    ask: [
      { fr: 'Le pingouin a bougé quand ? Avant ou après ton doigt ?', en: 'When did the penguin move? Before or after your finger?' },
      { fr: 'Combien de cases pour monter ? Et pour aller à droite ?', en: 'How many squares to go up? And to go right?' },
      { fr: 'Si on met les ➡️ avant les ⬆️, ça marche aussi ?', en: 'If we put the ➡️ before the ⬆️, does it work too?' },
      { fr: 'Où le pingouin s’est-il arrêté ? Quelle flèche a fait ça ?', en: 'Where did the penguin stop? Which arrow did that?' },
    ],
    pitfalls: [
      { trap: { fr: 'Le petit appuie plusieurs fois ➡️ après le drapeau et rien ne bouge.', en: 'The young child keeps tapping ➡️ after the flag and nothing moves.' },
        fix: { fr: 'C’est gagné : les flèches s’éteignent. Montrez le bouton jaune « Recommencer » pour le suivant.', en: 'It is won: the arrows go dim. Show the yellow “Reset” button for the next child.' } },
      { trap: { fr: 'Sur la grande grille, l’enfant s’arrête à 10 flèches : « Plus de place ! ».', en: 'On the big grid, the child stops at 10 arrows: “No more room!”.' },
        fix: { fr: 'Le programme est plein. Enlevez les flèches inutiles en les touchant : il en faut neuf, pas plus.', en: 'The program is full. Remove useless arrows by tapping them: nine are needed, no more.' } },
      { trap: { fr: 'Le pingouin part vers un mur, la classe crie, le pilote panique.', en: 'The penguin heads for a wall, the class shouts, the pilot panics.' },
        fix: { fr: 'Appuyez sur Stop, respirez. Le programme reste : on cherche ensemble la flèche à changer.', en: 'Press Stop, breathe. The program stays: we look together for the arrow to change.' } },
      { trap: { fr: 'Les enfants confondent gauche et droite en dictant.', en: 'Children mix up left and right when dictating.' },
        fix: { fr: 'On dicte face à l’écran, en montrant le bras. Le drapeau est du côté de la fenêtre, par exemple.', en: 'Dictate facing the screen, pointing with the arm. The flag is on the window side, for example.' } },
    ],
    differentiation: {
      tot: { fr: '🌱 Un pas vers le drapeau : une flèche, le pingouin bouge, « Bravo ». Vous dites « un pas » à chaque fois.', en: '🌱 One step to the flag: one arrow, the penguin moves, “Well done”. You say “one step” each time.' },
      beg: { fr: '🌟 La grande grille en deux morceaux : vous posez les quatre ⬆️, l’enfant pose les cinq ➡️ en comptant, puis Go.', en: '🌟 The big grid in two parts: you place the four ⬆️, the child places the five ➡️ while counting, then Go.' },
      pro: { fr: '🏆 Les neuf flèches seul, en disant le chemin avant. Puis un autre ordre (droite d’abord) : ça marche aussi ?', en: '🏆 All nine arrows alone, saying the path first. Then another order (right first): does it work too?' },
    },
    observe: {
      tot: { fr: 'Je vois qu’il touche ➡️ et regarde le pingouin arriver au drapeau.', en: 'I see the child tap ➡️ and watch the penguin reach the flag.' },
      beg: { fr: 'Je vois qu’il compte les cases avec le doigt avant de poser les flèches.', en: 'I see the child count the squares with a finger before placing the arrows.' },
      pro: { fr: 'Je vois qu’il retrouve la flèche fautive et la remplace sans tout effacer.', en: 'I see the child find the wrong arrow and replace it without erasing everything.' },
      warn: { fr: 'Il appuie sur Recommencer à chaque échec : on l’aide à lire le programme flèche par flèche.', en: 'The child presses Reset after every failure: help them read the program arrow by arrow.' },
    },
    unplugged: {
      id: 'ch8-s1:a',
      bridge: {
        fr: 'Le robot et le maître : un enfant-pingouin obéit à la lettre aux ordres « monte », « droite ». Il se cogne aux murs en carton si l’ordre est faux. Ensuite, l’écran fait pareil.',
        en: 'The robot and the master: a penguin child obeys the orders “up”, “right” to the letter. They bump into cardboard walls if the order is wrong. Then the screen does the same.',
      },
    },
    noSound: {
      fr: 'Vous dites « Bravo ! » quand le pingouin touche le drapeau. L’échec se voit : visage 😟 et « Essaie encore ! » en rouge.',
      en: 'You say “Well done!” when the penguin reaches the flag. Failure is visible: 😟 face and “Try again!” in red.',
    },
    vocab: [
      { word: { fr: 'Un pas', en: 'One step' }, gesture: { fr: 'On tape dans la main, puis on montre l’écran.', en: 'Tap your palm, then point at the screen.' } },
      { word: { fr: 'Go !', en: 'Go!' }, gesture: { fr: 'On lance le bras vers l’avant, comme un départ de course.', en: 'Throw the arm forward, like a race start.' } },
      { word: { fr: 'Le bug', en: 'The bug' }, gesture: { fr: 'On met la loupe (rond avec les doigts) devant l’œil.', en: 'Make a magnifying glass with the fingers in front of the eye.' } },
      { word: { fr: 'Le drapeau', en: 'The flag' }, gesture: { fr: 'On lève un bras bien droit et on agite la main.', en: 'Raise one arm straight up and wave the hand.' } },
    ],
    tips: {
      tot: { fr: 'En mode direct, une seule flèche suffit ; après le « Bravo », touchez le bouton jaune « Recommencer » pour le suivant.', en: 'In direct mode, a single arrow is enough; after the “Well done”, tap the yellow “Reset” button for the next child.' },
      a: { fr: 'Neuf flèches (4 ⬆️ + 5 ➡️, dans les deux ordres) donnent trois étoiles ; les murs ne gênent que l’escalier.', en: 'Nine arrows (4 ⬆️ + 5 ➡️, in either order) give three stars; the walls only block the staircase.' },
    },
    closing: {
      fr: 'Aujourd’hui, le pingouin a fait un pas pour les petits et neuf pas pour les grands. On a trouvé le bug et on a réparé.',
      en: 'Today, the penguin took one step for the youngest and nine steps for the oldest. We found the bug and fixed it.',
    },
    parents: {
      fr: 'Aujourd’hui, votre enfant a guidé un pingouin jusqu’à un drapeau : un pas pour les petits, neuf flèches pour les grands. Quand ça ratait, il cherchait la flèche fautive et réparait. C’est la fin du chapitre « clavier » : bravo à lui !',
      en: 'Today, your child guided a penguin to a flag: one step for the youngest, nine arrows for the oldest. When it failed, they looked for the wrong arrow and fixed it. This ends the “keyboard” chapter: well done!',
    },
  },
}
