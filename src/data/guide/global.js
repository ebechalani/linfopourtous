// Guide du professeur — partie générale (une page imprimable).
// Format : sections { id, emoji, title, blocks[] } ; blocs p / ul / ol / table / tip,
// tout bilingue { fr, en }. Les notions viennent de concepts.js, les séances de
// curriculum.js (ids cités tels quels, ex. ch5-s0), les niveaux de levels.js.
export const GLOBAL_GUIDE = [
  // ───────────────────────────────────────────────────────────────────────────
  { id: 'why', emoji: '🎯', title: { fr: 'Pourquoi ce cours', en: 'Why this course' },
    blocks: [
      { type: 'p', text: {
        fr: 'Ce cours repose sur trois piliers. Le numérique : je commande la machine (souris, clavier, Paint). La robotique : un robot obéit à des cartes, il ne devine rien. La pensée algorithmique : d’abord… ensuite… et puis…, on cherche le bug et on répare. À 3 ans, tout cela se vit avec le corps avant l’écran.',
        en: 'This course rests on three pillars. Digital skills: I control the machine (mouse, keyboard, Paint). Robotics: a robot obeys cards, it guesses nothing. Algorithmic thinking: first… then… and then…, we find the bug and fix it. At age 3, all of this is lived with the body before the screen.' } },
      { type: 'ol', items: [
        { fr: 'Corps : on joue la notion sans écran, avec des cartes et le quadrillage au sol (chapitre 8).', en: 'Body: we act out the idea without a screen, with cards and the floor grid (chapter 8).' },
        { fr: 'Écran : on retrouve la même notion au TBI, avec le chien, les puzzles ou le panda.', en: 'Screen: we meet the same idea on the whiteboard, with the dog, the puzzles or the panda.' },
        { fr: 'Robot : on rejoue la même suite de cartes avec le vrai mTiny (ch7-s1 à ch7-s3).', en: 'Robot: we replay the same sequence of cards with the real mTiny (ch7-s1 to ch7-s3).' },
      ] },
      { type: 'table',
        head: [ { fr: '🌱 Fin de PS (3 ans)', en: '🌱 End of nursery (age 3)' }, { fr: '🌟 Fin de MS (4 ans)', en: '🌟 End of middle year (age 4)' }, { fr: '🏆 Fin de GS (5 ans)', en: '🏆 End of reception (age 5)' } ],
        rows: [
          [ { fr: 'Il touche l’écran avec un seul doigt et attend son tour.', en: 'Touches the screen with one finger and waits for a turn.' },
            { fr: 'Il déplace la souris et clique sur ce qu’il vise.', en: 'Moves the mouse and clicks what they aim at.' },
            { fr: 'Il utilise clic gauche, clic droit et double-clic à bon escient.', en: 'Uses left click, right click and double click on purpose.' } ],
          [ { fr: 'Il nomme l’écran, la souris et le clavier.', en: 'Names the screen, the mouse and the keyboard.' },
            { fr: 'Il trouve une lettre ou un chiffre sur le clavier.', en: 'Finds a letter or a number on the keyboard.' },
            { fr: 'Il tape un mot court et compte jusqu’à 10 au clavier.', en: 'Types a short word and counts to 10 on the keyboard.' } ],
          [ { fr: 'Il comprend : je touche, ça bouge.', en: 'Understands: I tap, it moves.' },
            { fr: 'Il donne 2 ou 3 ordres dans l’ordre pour guider le chien.', en: 'Gives 2 or 3 orders in the right order to guide the dog.' },
            { fr: 'Il range 4 flèches et plus, puis prédit où le chien arrive avant Go.', en: 'Lines up 4 or more arrows, then predicts where the dog lands before Go.' } ],
          [ { fr: 'Il continue une suite rouge, bleu, rouge, bleu.', en: 'Continues a red, blue, red, blue pattern.' },
            { fr: 'Il dessine une maison en suivant une recette en 4 étapes.', en: 'Draws a house following a 4-step recipe.' },
            { fr: 'Il dit « on répète ×3 » au lieu de dire six gestes.', en: 'Says “repeat ×3” instead of naming six moves.' } ],
          [ { fr: 'Il fait un pas quand on montre la carte ↑.', en: 'Takes one step when the ↑ card is shown.' },
            { fr: 'Il sait que « tourner » ne fait pas avancer le robot.', en: 'Knows that “turn” does not move the robot forward.' },
            { fr: 'Il trouve la carte qui se trompe et répare le programme.', en: 'Finds the wrong card and fixes the program.' } ],
        ] },
    ] },

  // ───────────────────────────────────────────────────────────────────────────
  { id: 'concepts', emoji: '🧠', title: { fr: 'Les 10 notions', en: 'The 10 big ideas' },
    blocks: [
      { type: 'p', text: {
        fr: 'Chaque séance travaille une notion dominante. Dites toujours le mot du prof, puis le mot de l’enfant, puis faites le geste. Le geste revient à chaque séance : c’est lui que les enfants retiennent.',
        en: 'Every session works on one main idea. Always say the teacher’s word, then the child’s word, then do the gesture. The gesture comes back every session: it is what the children remember.' } },
      { type: 'table',
        head: [ { fr: 'Notion', en: 'Idea' }, { fr: 'Mot de l’enfant', en: 'Child’s words' }, { fr: 'Geste', en: 'Gesture' }, { fr: 'Où on la rencontre', en: 'Where we meet it' }, { fr: 'Dès', en: 'From' } ],
        rows: [
          [ { fr: '🖱️ Outil numérique', en: '🖱️ Digital tool' }, { fr: 'Je commande la machine', en: 'I control the machine' }, { fr: 'On tend l’index, un seul doigt', en: 'Point one finger' }, { fr: 'ch1-s1, ch1-s2, ch1-s6, ch3-s1, ch4-s1', en: 'ch1-s1, ch1-s2, ch1-s6, ch3-s1, ch4-s1' }, { fr: '3 ans', en: 'Age 3' } ],
          [ { fr: '👆 Cause → effet', en: '👆 Cause → effect' }, { fr: 'Je touche, ça bouge', en: 'I tap, it moves' }, { fr: 'On tape dans la main, puis on montre l’écran', en: 'Tap your palm, then point at the screen' }, { fr: 'ch1-s1, ch1-s3, ch5-s0, ch7-s1', en: 'ch1-s1, ch1-s3, ch5-s0, ch7-s1' }, { fr: '3 ans', en: 'Age 3' } ],
          [ { fr: '➡️ Séquence (l’ordre des ordres)', en: '➡️ Sequence (the order of orders)' }, { fr: 'D’abord… ensuite… et puis…', en: 'First… then… and then…' }, { fr: 'On avance la main par à-coups, un pas à la fois', en: 'Move your hand forward in little jumps' }, { fr: 'ch2-s4, ch4-s2, ch5-s0, ch5-s1, ch8-s1', en: 'ch2-s4, ch4-s2, ch5-s0, ch5-s1, ch8-s1' }, { fr: '3 ans (corps), 4 ans (écran)', en: 'Age 3 (body), 4 (screen)' } ],
          [ { fr: '🧩 Décomposition (par étapes)', en: '🧩 Decomposition (step by step)' }, { fr: 'On coupe en petits morceaux', en: 'We cut it into small pieces' }, { fr: 'On « coupe » avec la main, une fois, deux fois', en: 'Chop with your hand, once, twice' }, { fr: 'ch2-s4, ch4-s7, ch5-s1, ch8-s5', en: 'ch2-s4, ch4-s7, ch5-s1, ch8-s5' }, { fr: '4 ans', en: 'Age 4' } ],
          [ { fr: '🔴🔵 Motif / régularité', en: '🔴🔵 Pattern / regularity' }, { fr: 'Ça revient toujours pareil', en: 'It always comes back the same' }, { fr: 'On tape genoux, mains, genoux, mains', en: 'Knees, hands, knees, hands' }, { fr: 'ch5-s2, ch8-s2', en: 'ch5-s2, ch8-s2' }, { fr: '3 ans', en: 'Age 3' } ],
          [ { fr: '🔁 Boucle (répétition)', en: '🔁 Loop (repetition)' }, { fr: 'Encore, encore, encore !', en: 'Again, again, again!' }, { fr: 'On tourne l’index en rond', en: 'Twirl your index finger in a circle' }, { fr: 'ch5-s1, ch6-s5, ch7-s3, ch8-s1, ch8-s5', en: 'ch5-s1, ch6-s5, ch7-s3, ch8-s1, ch8-s5' }, { fr: '4 ans (corps), 5 ans (écran)', en: 'Age 4 (body), 5 (screen)' } ],
          [ { fr: '🚦 Condition (si… alors…)', en: '🚦 Condition (if… then…)' }, { fr: 'Seulement si…', en: 'Only if…' }, { fr: 'Main levée = on bouge, main baissée = statue', en: 'Hand up = move, hand down = statue' }, { fr: 'ch1-s4, ch8-s3, ch8-s5', en: 'ch1-s4, ch8-s3, ch8-s5' }, { fr: '3 ans', en: 'Age 3' } ],
          [ { fr: '🐛 Débogage (trouver et réparer l’erreur)', en: '🐛 Debugging (find and fix the mistake)' }, { fr: 'On cherche le bug et on répare', en: 'We find the bug and fix it' }, { fr: 'On met la loupe (rond avec les doigts) devant l’œil', en: 'Make a magnifying glass with your fingers' }, { fr: 'ch5-s5, ch8-s1, ch8-s5', en: 'ch5-s5, ch8-s1, ch8-s5' }, { fr: '4 ans', en: 'Age 4' } ],
          [ { fr: '🗺️ Abstraction / représentation', en: '🗺️ Abstraction / representation' }, { fr: 'Un dessin qui veut dire quelque chose', en: 'A picture that means something' }, { fr: 'On dessine un carré dans l’air', en: 'Draw a square in the air' }, { fr: 'ch5-s3, ch5-s4, ch6-s2, ch8-s3', en: 'ch5-s3, ch5-s4, ch6-s2, ch8-s3' }, { fr: '5 ans', en: 'Age 5' } ],
          [ { fr: '↰ Orientation relative (tourner / avancer)', en: '↰ Relative orientation (turn / go forward)' }, { fr: 'Le robot regarde devant lui', en: 'The robot looks in front of itself' }, { fr: 'On pivote sur place d’un quart de tour', en: 'Turn a quarter turn on the spot' }, { fr: 'ch7-s1, ch7-s2, ch7-s3, ch8-s1', en: 'ch7-s1, ch7-s2, ch7-s3, ch8-s1' }, { fr: '4 ans', en: 'Age 4' } ],
        ] },
      { type: 'tip', text: {
        fr: 'À retenir : une notion par séance, jamais deux nouvelles à la fois. Si le geste ne vient pas seul après trois séances, la notion n’est pas encore là. Revenez au corps.',
        en: 'Remember: one idea per session, never two new ones at once. If the gesture does not come by itself after three sessions, the idea is not there yet. Go back to the body.' } },
    ] },

  // ───────────────────────────────────────────────────────────────────────────
  { id: 'year', emoji: '📅', title: { fr: 'Progression annuelle', en: 'Year plan' },
    blocks: [
      { type: 'p', text: {
        fr: 'Le programme compte 8 chapitres, 44 séances et 123 activités. Une séance par semaine suffit : 30 semaines de classe, quelques séances en réserve. Le chapitre 8 (débranché) ne se fait pas d’un bloc : ses fiches s’intercalent toute l’année.',
        en: 'The programme has 8 chapters, 44 sessions and 123 activities. One session a week is enough: 30 school weeks, with a few sessions in reserve. Chapter 8 (unplugged) is not done in one go: its sheets are slotted in all year long.' } },
      { type: 'table',
        head: [ { fr: 'Période', en: 'Term' }, { fr: 'Chapitres', en: 'Chapters' }, { fr: 'Notion dominante', en: 'Main idea' }, { fr: 'Fiches ch8 à intercaler', en: 'Ch8 sheets to slot in' }, { fr: 'Niveau', en: 'Level' } ],
        rows: [
          [ { fr: 'Sept.–oct.', en: 'Sept–Oct' }, { fr: 'ch1 (ch1-s1 → ch1-s7) : l’ordinateur, la souris', en: 'ch1 (ch1-s1 → ch1-s7): the computer, the mouse' }, { fr: '🖱️ Outil · 👆 Cause → effet', en: '🖱️ Tool · 👆 Cause → effect' }, { fr: 'ch8-s5:b (rituel du robot, dès la 1ʳᵉ séance), ch8-s3:a, ch1-s4:w', en: 'ch8-s5:b (robot ritual, from session 1), ch8-s3:a, ch1-s4:w' }, { fr: '🌱 pour tous, puis 🌟', en: '🌱 for all, then 🌟' } ],
          [ { fr: 'Nov.–déc.', en: 'Nov–Dec' }, { fr: 'ch2 (dessins animés) et ch3 (clavier)', en: 'ch2 (cartoons) and ch3 (keyboard)' }, { fr: '➡️ Séquence (recettes de dessin) · 🖱️ Clavier', en: '➡️ Sequence (drawing recipes) · 🖱️ Keyboard' }, { fr: 'ch8-s3:c, ch8-s2:a, ch8-s4:a', en: 'ch8-s3:c, ch8-s2:a, ch8-s4:a' }, { fr: '🌱 🌟, 🏆 pour les GS', en: '🌱 🌟, 🏆 for age 5' } ],
          [ { fr: 'Jan.–fév.', en: 'Jan–Feb' }, { fr: 'ch4 (Paint) puis ch5-s0 et ch5-s1', en: 'ch4 (Paint) then ch5-s0 and ch5-s1' }, { fr: '🧩 Décomposition · ➡️ Séquence + Go', en: '🧩 Decomposition · ➡️ Sequence + Go' }, { fr: 'ch8-s4:c, ch8-s1:a, ch8-s1:b', en: 'ch8-s4:c, ch8-s1:a, ch8-s1:b' }, { fr: '🌱 🌟 🏆', en: '🌱 🌟 🏆' } ],
          [ { fr: 'Mars–avr.', en: 'Mar–Apr' }, { fr: 'ch5-s2 → ch5-s5 puis ch6 (ScratchJr)', en: 'ch5-s2 → ch5-s5 then ch6 (ScratchJr)' }, { fr: '🔴🔵 Motif · 🔁 Boucle · 🐛 Bug · 🗺️ Cases', en: '🔴🔵 Pattern · 🔁 Loop · 🐛 Bug · 🗺️ Squares' }, { fr: 'ch8-s2:b, ch8-s2:c, ch8-s5:d, ch8-s5:a, ch8-s3:b', en: 'ch8-s2:b, ch8-s2:c, ch8-s5:d, ch8-s5:a, ch8-s3:b' }, { fr: '🌟 🏆, 🌱 en ouverture', en: '🌟 🏆, 🌱 as warm-up' } ],
          [ { fr: 'Mai–juin', en: 'May–June' }, { fr: 'ch7 (mTiny) et fête de fin d’année', en: 'ch7 (mTiny) and end-of-year party' }, { fr: '↰ Orientation · 🔁 Boucle', en: '↰ Orientation · 🔁 Loop' }, { fr: 'ch8-s1:tot, ch7-s1:h, ch8-s1:c, ch8-s4:b', en: 'ch8-s1:tot, ch7-s1:h, ch8-s1:c, ch8-s4:b' }, { fr: '🌱 🌟 🏆', en: '🌱 🌟 🏆' } ],
        ] },
      { type: 'ul', items: [
        { fr: 'Parcours PS (3 ans) : uniquement les activités 🌱. Une séance = une activité 🌱 + une fiche débranchée. On ne visite pas ch6.', en: 'Nursery path (age 3): 🌱 activities only. One session = one 🌱 activity + one unplugged sheet. Skip ch6.' },
        { fr: 'Parcours MS (4 ans) : 🌱 en ouverture, puis 🌟. Le chien en mode direct et les empreintes 🐾, pas encore la boucle.', en: 'Middle-year path (age 4): 🌱 as warm-up, then 🌟. The dog in direct mode and the footprints 🐾, not yet the loop.' },
        { fr: 'Parcours GS (5 ans) : tout, dans l’ordre des chapitres. Le 🌱 sert d’échauffement de 2 minutes, le 🏆 est le cœur.', en: 'Reception path (age 5): everything, in chapter order. 🌱 is a 2-minute warm-up, 🏆 is the heart.' },
      ] },
      { type: 'p', text: {
        fr: 'Ordre alternatif : une séance écran, une séance débranchée. Semaine A au TBI (ex. ch5-s0), semaine B au sol avec la fiche liée (ch8-s1:a). Cette alternance convient bien aux PS et aux classes agitées.',
        en: 'Alternative order: one screen session, one unplugged session. Week A at the whiteboard (e.g. ch5-s0), week B on the floor with the linked sheet (ch8-s1:a). This rhythm suits the youngest and lively classes well.' } },
    ] },

  // ───────────────────────────────────────────────────────────────────────────
  { id: 'session', emoji: '⏱️', title: { fr: 'Le rituel d’une séance (25–35 min)', en: 'The session ritual (25–35 min)' },
    blocks: [
      { type: 'ol', items: [
        { fr: '3 min · Rassemblement sur le tapis. « Robot, réveille-toi ! » (ch8-s5:b), puis les 5 règles du tableau (ch1-s1:rules) au 🔊.', en: '3 min · Gather on the mat. “Robot, wake up!” (ch8-s5:b), then the 5 board rules (ch1-s1:rules) with 🔊.' },
        { fr: '2 min · Mot du jour et geste. Vous dites le mot du prof, les enfants disent le mot de l’enfant et font le geste.', en: '2 min · Word of the day and gesture. You say the teacher’s word, children say their word and do the gesture.' },
        { fr: '5–8 min · Démonstration au TBI avec un pilote et un copilote. Vous lancez le 🔊, le copilote dit, le pilote touche.', en: '5–8 min · Demo on the whiteboard with a pilot and a co-pilot. You press 🔊, the co-pilot says, the pilot touches.' },
        { fr: '10–12 min · Tours de passage (liste affichée) ou ateliers tournants. Le bouton Suivant ▶ enchaîne les activités.', en: '10–12 min · Turns from the list, or rotating stations. The Next ▶ button moves on to the following activity.' },
        { fr: '5 min · Débranché ou trace : la fiche ch8 liée, ou un dessin de ce qu’on a fait.', en: '5 min · Unplugged or keepsake: the linked ch8 sheet, or a drawing of what we did.' },
        { fr: '2 min · Bilan : « aujourd’hui on a… ». Puis « Robot, va dormir ! » et on quitte le tapis.', en: '2 min · Wrap-up: “today we…”. Then “Robot, go to sleep!” and we leave the mat.' },
      ] },
      { type: 'p', text: {
        fr: 'Signaux pour couper : trois enfants regardent ailleurs, quelqu’un pleure, ou le pilote tape au hasard. Passez tout de suite au débranché. Une séance courte et réussie vaut mieux qu’une séance longue et subie.',
        en: 'Signals to stop: three children look away, someone cries, or the pilot taps at random. Move straight to the unplugged part. A short successful session beats a long endured one.' } },
      { type: 'tip', text: {
        fr: 'Ne terminez jamais un chapitre en une fois. Une activité par séance suffit pour les PS, deux pour les MS, trois au plus pour les GS. La progression ✓ retient où vous en êtes.',
        en: 'Never finish a chapter in one go. One activity per session is enough at age 3, two at age 4, three at most at age 5. The ✓ progress keeps your place.' } },
    ] },

  // ───────────────────────────────────────────────────────────────────────────
  { id: 'roles', emoji: '👥', title: { fr: 'Gérer 25 enfants avec un seul écran', en: 'Managing 25 children with one screen' },
    blocks: [
      { type: 'table',
        head: [ { fr: 'Rôle', en: 'Role' }, { fr: 'Ce qu’il fait', en: 'What they do' }, { fr: 'Ce qu’il dit', en: 'What they say' } ],
        rows: [
          [ { fr: '🎮 Pilote', en: '🎮 Pilot' }, { fr: 'Debout au tableau, un seul doigt. Il touche seulement ce que le copilote a dit.', en: 'Standing at the board, one finger. Touches only what the co-pilot said.' }, { fr: '« Je touche la flèche ➡️. »', en: '“I tap the ➡️ arrow.”' } ],
          [ { fr: '🗣️ Copilote', en: '🗣️ Co-pilot' }, { fr: 'À côté du pilote, sans toucher. Il écoute la consigne et la redit.', en: 'Next to the pilot, no touching. Listens to the instruction and says it again.' }, { fr: '« Il faut monter, puis aller à droite. »', en: '“We must go up, then right.”' } ],
          [ { fr: '🤖 Ordinateurs', en: '🤖 Computers' }, { fr: 'Assis sur le tapis, ils font le geste de la notion à chaque ordre.', en: 'Sitting on the mat, they do the idea’s gesture at every order.' }, { fr: '« Bip ! » à chaque pas du chien.', en: '“Beep!” at every step of the dog.' } ],
          [ { fr: '👀 Vérificateur', en: '👀 Checker' }, { fr: 'Un enfant regarde si la règle « un seul doigt » est respectée et si le chien arrive.', en: 'One child checks the “one finger” rule and whether the dog arrives.' }, { fr: '« Bravo ! » ou « Bug ! On répare. »', en: '“Well done!” or “Bug! Let’s fix it.”' } ],
        ] },
      { type: 'ul', items: [
        { fr: 'Rotation toutes les 2 actions : le copilote devient pilote, un ordinateur devient copilote. Personne ne garde l’écran plus de 2 minutes.', en: 'Rotate every 2 actions: the co-pilot becomes pilot, a computer becomes co-pilot. Nobody keeps the screen more than 2 minutes.' },
        { fr: 'Liste de passage affichée avec les photos ou les prénoms : chacun voit quand vient son tour, personne ne réclame.', en: 'Display the turn list with photos or first names: everyone can see when their turn comes, nobody nags.' },
        { fr: 'Ateliers tournants (10 min chacun) : TBI avec vous · débranché avec l’ATSEM (fiche ch8 liée) · dessin de la séance à la table.', en: 'Rotating stations (10 min each): whiteboard with you · unplugged with the assistant (linked ch8 sheet) · session drawing at the table.' },
        { fr: 'L’enfant qui refuse : il reste ordinateur, il fait le geste. Il passera pilote un autre jour, sans commentaire.', en: 'The child who refuses: stays a computer and does the gesture. They will pilot another day, no comment.' },
        { fr: 'L’enfant qui pleure : un adulte l’assoit près de lui, hors de la zone du pilote. Le tableau continue sans lui.', en: 'The child who cries: an adult sits them close by, outside the pilot zone. The board carries on without them.' },
        { fr: 'Celui qui tape au hasard : ⏹ Stop, puis « dis-le d’abord au copilote ». Il retouche seulement après avoir dit.', en: 'The one who taps at random: ⏹ Stop, then “say it to the co-pilot first”. They touch again only after saying it.' },
      ] },
      { type: 'tip', text: {
        fr: 'Le copilote est le rôle le plus important : il oblige à parler avant de toucher. C’est là que se construit la pensée.',
        en: 'The co-pilot is the most important role: it forces speaking before touching. That is where thinking is built.' } },
    ] },

  // ───────────────────────────────────────────────────────────────────────────
  { id: 'setup', emoji: '🖥️', title: { fr: 'Installation et matériel', en: 'Set-up and materials' },
    blocks: [
      { type: 'ul', items: [
        { fr: 'Ouvrez le site, cliquez ⛶ plein écran dans l’en-tête. Les gros boutons prennent tout le tableau.', en: 'Open the site, click ⛶ full screen in the header. The big buttons fill the whole board.' },
        { fr: 'Testez 🔊 sur une consigne avant l’arrivée des enfants. Sans voix, un bandeau orange vous prévient.', en: 'Test 🔊 on one instruction before the children arrive. Without a voice, an orange banner warns you.' },
        { fr: 'Voix française à installer une fois : Paramètres Windows › Heure et langue › Voix › Ajouter des voix › Français, puis rouvrir le site.', en: 'Install the voice once: Windows Settings › Time & language › Speech › Add voices › French (or English), then reopen the site.' },
        { fr: 'Une souris sans fil sur une petite table : les jeux de souris (ch1) se jouent mieux ainsi qu’au doigt.', en: 'A wireless mouse on a small table: the mouse games (ch1) play better this way than by finger.' },
        { fr: 'Tapis en demi-cercle face au tableau, à 2 mètres. Une zone du pilote marquée au sol (cerceau ou scotch) devant l’écran.', en: 'Mat in a half-circle facing the board, 2 metres away. A pilot zone marked on the floor (hoop or tape) in front of the screen.' },
        { fr: 'Vérifiez la langue 🇫🇷/🇬🇧 et le filtre de niveau du chapitre avant de commencer.', en: 'Check the 🇫🇷/🇬🇧 language and the chapter’s level filter before starting.' },
      ] },
      { type: 'table',
        head: [ { fr: 'À fabriquer une fois', en: 'Make once' }, { fr: 'Détail', en: 'Details' }, { fr: 'Sert pour', en: 'Used in' } ],
        rows: [
          [ { fr: 'Cartes flèches A5 ⬆️ ⬇️ ⬅️ ➡️', en: 'A5 arrow cards ⬆️ ⬇️ ⬅️ ➡️' }, { fr: 'Mêmes glyphes que le jeu du chien, 4 de chaque, plastifiées.', en: 'Same glyphs as the dog game, 4 of each, laminated.' }, { fr: 'ch8-s1:a, ch8-s1:b, ch5-s5:d', en: 'ch8-s1:a, ch8-s1:b, ch5-s5:d' } ],
          [ { fr: 'Cartes mTiny ↑ ↓ ↰ ↱', en: 'mTiny cards ↑ ↓ ↰ ↱' }, { fr: 'Bord coloré comme à l’écran : ↑ vert #10b981, ↓ turquoise #14b8a6, ↰ indigo #6366f1, ↱ violet #8b5cf6.', en: 'Coloured border as on screen: ↑ green #10b981, ↓ teal #14b8a6, ↰ indigo #6366f1, ↱ purple #8b5cf6.' }, { fr: 'ch7-s1:h, ch8-s1:tot', en: 'ch7-s1:h, ch8-s1:tot' } ],
          [ { fr: 'Quadrillage 4×4 au sol', en: '4×4 floor grid' }, { fr: 'Cases de 40 cm au scotch de couleur, ou un tapis quadrillé.', en: '40 cm squares in coloured tape, or a gridded mat.' }, { fr: 'ch8-s1, ch5-s5:d, ch7-s1:h', en: 'ch8-s1, ch5-s5:d, ch7-s1:h' } ],
          [ { fr: 'Cartes-lettres QWERTY', en: 'QWERTY letter cards' }, { fr: '26 lettres en capitales, format A5, à poser au sol.', en: '26 capital letters, A5 size, to lay on the floor.' }, { fr: 'ch8-s3:c', en: 'ch8-s3:c' } ],
          [ { fr: 'Cartes-nombres 1 à 5', en: 'Number cards 1 to 5' }, { fr: 'Chiffre et constellation du dé sur chaque carte.', en: 'Digit and dice dots on each card.' }, { fr: 'ch8-s4:a', en: 'ch8-s4:a' } ],
          [ { fr: 'Gommettes', en: 'Stickers' }, { fr: 'Rouges pour la main droite ; vertes pour la progression sur la liste de passage.', en: 'Red for the right hand; green for progress on the turn list.' }, { fr: 'ch1-s4:w', en: 'ch1-s4:w' } ],
          [ { fr: 'Feuilles quadrillées grosses cases', en: 'Big-square grid sheets' }, { fr: 'Cases de 3 cm, 6×6 au plus.', en: '3 cm squares, 6×6 at most.' }, { fr: 'ch8-s3:b, ch5-s3', en: 'ch8-s3:b, ch5-s3' } ],
        ] },
      { type: 'p', text: {
        fr: 'Kit mTiny (ch7) : chargez le robot la veille, déroulez le tapis sur une table basse, gardez le crayon-contrôleur dans votre main. Faites d’abord la version écran (le panda), puis la même suite avec le vrai robot.',
        en: 'mTiny kit (ch7): charge the robot the day before, unroll the map on a low table, keep the tap pencil in your hand. Do the screen version first (the panda), then the same sequence with the real robot.' } },
    ] },

  // ───────────────────────────────────────────────────────────────────────────
  { id: 'levels', emoji: '🌱🌟🏆', title: { fr: 'Différencier 3 / 4 / 5 ans', en: 'Differentiating ages 3 / 4 / 5' },
    blocks: [
      { type: 'table',
        head: [ { fr: 'Niveau', en: 'Level' }, { fr: 'La consigne', en: 'The instruction' }, { fr: 'L’aide', en: 'The help' }, { fr: 'La réussite', en: 'Success' } ],
        rows: [
          [ { fr: '🌱 Novice (PS, 3 ans)', en: '🌱 Novice (age 3)' }, { fr: 'Un geste, un effet. « Touche l’animal. »', en: 'One gesture, one effect. “Tap the animal.”' }, { fr: 'L’adulte verbalise tout : « tu as touché, il a bougé ». Jamais d’échec possible.', en: 'The adult says everything: “you tapped, it moved”. No failure is possible.' }, { fr: 'L’enfant ose toucher et regarde l’effet.', en: 'The child dares to touch and watches the effect.' } ],
          [ { fr: '🌟 Débutant (MS, 4 ans)', en: '🌟 Beginner (age 4)' }, { fr: '2 ou 3 ordres. « Dis-le avant de toucher. »', en: '2 or 3 orders. “Say it before you touch.”' }, { fr: 'Le mode direct, les empreintes 🐾, le copilote qui redit.', en: 'Direct mode, the footprints 🐾, the co-pilot who repeats.' }, { fr: 'L’enfant annonce sa flèche puis la pose.', en: 'The child announces the arrow, then places it.' } ],
          [ { fr: '🏆 Avancé (GS, 5 ans)', en: '🏆 Advanced (age 5)' }, { fr: '4 ordres et plus. « Où va-t-il arriver ? Prédis avant Go. »', en: '4 orders and more. “Where will it land? Predict before Go.”' }, { fr: 'Le défi étoiles (moins de flèches), la boucle ×2 ×3, les cases 4-1, le bug à réparer.', en: 'The star challenge (fewer arrows), the ×2 ×3 loop, squares like 4-1, the bug to fix.' }, { fr: 'L’enfant prédit, vérifie, répare seul.', en: 'The child predicts, checks and fixes alone.' } ],
        ] },
      { type: 'tip', text: {
        fr: 'Règle d’or : même activité, trois consignes. Vous ne changez pas de jeu, vous changez ce que vous demandez. Le chien reste le chien ; à 3 ans on le touche, à 5 ans on le programme.',
        en: 'Golden rule: same activity, three instructions. You do not change the game, you change what you ask. The dog stays the dog; at 3 we tap it, at 5 we program it.' } },
      { type: 'p', text: {
        fr: 'Le filtre de niveau, en haut de chaque chapitre, n’affiche que les activités 🌱, 🌟 ou 🏆. En classe multi-âge, gardez 🌈 Tous et lisez le badge de niveau sur chaque carte.',
        en: 'The level filter, at the top of each chapter, shows only 🌱, 🌟 or 🏆 activities. In a mixed-age class, keep 🌈 All and read the level badge on each card.' } },
    ] },

  // ───────────────────────────────────────────────────────────────────────────
  { id: 'gestures', emoji: '🤝', title: { fr: 'Gestes professionnels au TBI', en: 'Professional moves at the whiteboard' },
    blocks: [
      { type: 'ul', items: [
        { fr: 'La parole avant le geste : l’enfant dit ce qu’il va toucher, puis il touche. Sinon, on attend.', en: 'Words before the move: the child says what they will touch, then touches. Otherwise, we wait.' },
        { fr: 'Un doigt, toujours. Une main à plat déclenche plusieurs boutons et le chien part n’importe où.', en: 'One finger, always. A flat hand triggers several buttons and the dog goes anywhere.' },
        { fr: 'L’erreur s’appelle « bug » et se répare. Jamais de sanction, jamais de « non ». On dit : « bug ! qu’est-ce qu’on change ? »', en: 'A mistake is called a “bug” and gets fixed. Never a punishment, never a “no”. We say: “bug! what do we change?”' },
        { fr: '⏹ Stop est votre bouton : pendant que le chien ou le panda avance, il arrête tout et garde le programme.', en: '⏹ Stop is your button: while the dog or the panda is moving, it halts everything and keeps the program.' },
        { fr: 'On ferme une activité par la croix seulement, jamais en touchant partout. Le ✓ de progression est déjà posé.', en: 'Close an activity with the cross only, never by tapping around. The ✓ progress is already saved.' },
        { fr: 'Ne lisez pas à la place de l’enfant : appuyez sur 🔊 et laissez la machine dire la consigne, deux fois si besoin.', en: 'Do not read instead of the child: press 🔊 and let the machine say the instruction, twice if needed.' },
        { fr: 'Chuchotez la réponse au copilote, pas au pilote. Le copilote la transmet : c’est lui qui apprend à dire.', en: 'Whisper the answer to the co-pilot, not the pilot. The co-pilot passes it on: they are learning to say it.' },
      ] },
      { type: 'tip', text: {
        fr: 'Votre place : à côté du tableau, jamais devant. Vos mains restent dans le dos pendant que le pilote joue.',
        en: 'Your place: beside the board, never in front. Keep your hands behind your back while the pilot plays.' } },
    ] },

  // ───────────────────────────────────────────────────────────────────────────
  { id: 'assess', emoji: '👀', title: { fr: 'Évaluer sans évaluer', en: 'Assessing without testing' },
    blocks: [
      { type: 'p', text: {
        fr: 'Pas de fiche notée : vous observez et vous cochez trois états. En découverte : l’enfant regarde et imite. En cours : il fait avec l’aide du copilote ou de l’adulte. Acquis : il fait seul et il l’explique avec ses mots.',
        en: 'No graded sheet: you observe and tick three states. Discovering: the child watches and imitates. Developing: does it with help from the co-pilot or an adult. Secure: does it alone and explains it in their own words.' } },
      { type: 'table',
        head: [ { fr: 'Notion', en: 'Idea' }, { fr: '🌱 3 ans, je vois que…', en: '🌱 Age 3, I see that…' }, { fr: '🌟 4 ans, je vois que…', en: '🌟 Age 4, I see that…' }, { fr: '🏆 5 ans, je vois que…', en: '🏆 Age 5, I see that…' } ],
        rows: [
          [ { fr: '🖱️ Outil', en: '🖱️ Tool' }, { fr: 'il touche avec un doigt', en: 'taps with one finger' }, { fr: 'il vise et clique où il veut', en: 'aims and clicks where intended' }, { fr: 'il choisit clic droit ou double-clic seul', en: 'chooses right click or double click alone' } ],
          [ { fr: '👆 Cause → effet', en: '👆 Cause → effect' }, { fr: 'il rit quand ça bouge, il recommence', en: 'laughs when it moves, does it again' }, { fr: 'il dit « c’est moi qui l’ai fait bouger »', en: 'says “I made it move”' }, { fr: 'il prédit l’effet avant de toucher', en: 'predicts the effect before touching' } ],
          [ { fr: '➡️ Séquence', en: '➡️ Sequence' }, { fr: 'il remet 3 images du matin dans l’ordre', en: 'orders 3 morning pictures' }, { fr: 'il pose 2 ou 3 flèches qui mènent au but', en: 'places 2 or 3 arrows that reach the goal' }, { fr: 'il range 4 flèches et plus, sans empreintes', en: 'lines up 4 or more arrows, no footprints' } ],
          [ { fr: '🧩 Décomposition', en: '🧩 Decomposition' }, { fr: 'il nomme une étape de la recette', en: 'names one step of the recipe' }, { fr: 'il suit la recette de la maison en 4 étapes', en: 'follows the 4-step house recipe' }, { fr: 'il invente une recette pour le sandwich', en: 'invents a recipe for the sandwich' } ],
          [ { fr: '🔴🔵 Motif', en: '🔴🔵 Pattern' }, { fr: 'il continue rouge, bleu, rouge…', en: 'continues red, blue, red…' }, { fr: 'il continue rouge, rouge, bleu…', en: 'continues red, red, blue…' }, { fr: 'il trouve le manquant dans une suite à 3', en: 'finds the missing one in a 3-item pattern' } ],
          [ { fr: '🔁 Boucle', en: '🔁 Loop' }, { fr: 'il refait le motif de gestes avec le groupe', en: 'repeats the gesture pattern with the group' }, { fr: 'il compte les répétitions du chef d’orchestre', en: 'counts the conductor’s repeats' }, { fr: 'il choisit ×3 au lieu de poser six flèches', en: 'picks ×3 instead of placing six arrows' } ],
          [ { fr: '🚦 Condition', en: '🚦 Condition' }, { fr: 'il s’arrête quand on cache la carte', en: 'stops when the card is hidden' }, { fr: 'il ne bouge pas sans « Jacques a dit »', en: 'does not move without “Simon says”' }, { fr: 'il invente une règle « si… alors… »', en: 'invents an “if… then…” rule' } ],
          [ { fr: '🐛 Débogage', en: '🐛 Debugging' }, { fr: 'il dit « bug ! » quand le chien rate', en: 'says “bug!” when the dog misses' }, { fr: 'il montre la flèche qui se trompe', en: 'points at the wrong arrow' }, { fr: 'il enlève une seule flèche et réessaie', en: 'removes a single arrow and tries again' } ],
          [ { fr: '🗺️ Abstraction', en: '🗺️ Abstraction' }, { fr: 'il place l’objet sur son ombre', en: 'places the object on its shadow' }, { fr: 'il colorie le miroir 3×3', en: 'colours the 3×3 mirror' }, { fr: 'il nomme une case avec ses deux nombres', en: 'names a square with its two numbers' } ],
          [ { fr: '↰ Orientation', en: '↰ Orientation' }, { fr: 'il fait un pas à la carte ↑', en: 'steps forward on the ↑ card' }, { fr: 'il pivote sans changer de case', en: 'turns without changing square' }, { fr: 'il programme tourne + avance jusqu’au cadeau', en: 'programs turn + forward to the gift' } ],
        ] },
      { type: 'ul', items: [
        { fr: 'Se repérer dans l’espace : haut, bas, gauche, droite, la case 4-1 (ch6-s2, ch8-s3:b).', en: 'Spatial awareness: up, down, left, right, square 4-1 (ch6-s2, ch8-s3:b).' },
        { fr: 'Suites et régularités : continuer et compléter un motif (ch5-s2, ch8-s2:b).', en: 'Patterns and regularities: continue and complete a pattern (ch5-s2, ch8-s2:b).' },
        { fr: 'Ordre chronologique : d’abord, ensuite, puis, enfin (ch8-s4:c, ch5-s1:a).', en: 'Chronological order: first, then, next, finally (ch8-s4:c, ch5-s1:a).' },
        { fr: 'Langage d’action : dire ce qu’on va faire avant de le faire, avec des verbes précis (rôle du copilote).', en: 'Action language: saying what you will do before doing it, with precise verbs (the co-pilot’s role).' },
        { fr: 'Premiers outils numériques : souris, clavier, écran tactile, en respectant des règles (ch1, ch3).', en: 'First digital tools: mouse, keyboard, touch screen, following rules (ch1, ch3).' },
      ] },
    ] },

  // ───────────────────────────────────────────────────────────────────────────
  { id: 'bridge', emoji: '🔁', title: { fr: 'Branché ↔ débranché', en: 'Plugged ↔ unplugged' },
    blocks: [
      { type: 'table',
        head: [ { fr: 'Jeu à l’écran', en: 'Screen game' }, { fr: 'La fiche qui le prépare', en: 'The sheet that prepares it' }, { fr: 'La fiche qui le prolonge', en: 'The sheet that extends it' } ],
        rows: [
          [ { fr: '🖱️ Souris : canard, poisson (ch1-s1:b, ch1-s3:a)', en: '🖱️ Mouse: duck, fish (ch1-s1:b, ch1-s3:a)' }, { fr: 'ch8-s3:a Jacques a dit (suivre une consigne)', en: 'ch8-s3:a Simon says (follow an instruction)' }, { fr: 'ch1-s4:w Main gauche, main droite', en: 'ch1-s4:w Left hand, right hand' } ],
          [ { fr: '⌨️ Clavier : lettres, compter (ch3-s1:a, ch3-s3:a)', en: '⌨️ Keyboard: letters, counting (ch3-s1:a, ch3-s3:a)' }, { fr: 'ch8-s3:c Le clavier géant au sol', en: 'ch8-s3:c The giant floor keyboard' }, { fr: 'ch8-s2:a Trier, ch8-s4:a Ranger les nombres', en: 'ch8-s2:a Sorting, ch8-s4:a Order the numbers' } ],
          [ { fr: '🎨 Paint en étapes (ch2-s4, ch4-s2, ch4-s7)', en: '🎨 Paint in steps (ch2-s4, ch4-s2, ch4-s7)' }, { fr: 'ch8-s4:c L’algorithme du matin', en: 'ch8-s4:c The morning algorithm' }, { fr: 'ch8-s5:c La file indienne programmée', en: 'ch8-s5:c The programmed line-up' } ],
          [ { fr: '🐶 Chien mode direct (ch1-s1:c, ch5-s0:b)', en: '🐶 Dog, direct mode (ch1-s1:c, ch5-s0:b)' }, { fr: 'ch8-s1:tot Le robot suit UN ordre', en: 'ch8-s1:tot The robot follows ONE order' }, { fr: 'ch8-s1:a Le robot et le maître', en: 'ch8-s1:a The robot and the master' } ],
          [ { fr: '🐶 Chien programme + Go (ch5-s0:c, ch5-s1:b)', en: '🐶 Dog, program + Go (ch5-s0:c, ch5-s1:b)' }, { fr: 'ch8-s1:b Le parcours codé', en: 'ch8-s1:b The coded path' }, { fr: 'ch8-s4:b Passe le message des robots', en: 'ch8-s4:b Pass the robots’ message' } ],
          [ { fr: '🔁 Boucle ×2 ×3 (ch5-s1:b2, ch5-s1:c, ch6-s5:b, ch7-s3:b)', en: '🔁 Loop ×2 ×3 (ch5-s1:b2, ch5-s1:c, ch6-s5:b, ch7-s3:b)' }, { fr: 'ch8-s5:d Le chef d’orchestre', en: 'ch8-s5:d The conductor' }, { fr: 'ch8-s1:c La danse qui se répète', en: 'ch8-s1:c The repeating dance' } ],
          [ { fr: '🧩 Puzzles suite, ombres, miroir (ch5-s2, ch5-s3)', en: '🧩 Puzzles: pattern, shadows, mirror (ch5-s2, ch5-s3)' }, { fr: 'ch8-s2:b Continue la suite', en: 'ch8-s2:b Continue the pattern' }, { fr: 'ch8-s2:c Le jeu du miroir', en: 'ch8-s2:c The mirror game' } ],
          [ { fr: '🐱 ScratchJr et les cases (ch6-s1:a, ch6-s2:m)', en: '🐱 ScratchJr and the squares (ch6-s1:a, ch6-s2:m)' }, { fr: 'ch8-s3:b Le pixel-art codé', en: 'ch8-s3:b Coded pixel art' }, { fr: 'ch8-s4:b Passe le message des robots', en: 'ch8-s4:b Pass the robots’ message' } ],
          [ { fr: '🐼 mTiny : tourner, avancer (ch7-s1:c, ch7-s2:b, ch7-s3:a)', en: '🐼 mTiny: turn, forward (ch7-s1:c, ch7-s2:b, ch7-s3:a)' }, { fr: 'ch7-s1:h Le robot humain mTiny', en: 'ch7-s1:h The human mTiny robot' }, { fr: 'ch8-s1:a avec les cartes ↑ ↓ ↰ ↱', en: 'ch8-s1:a with the ↑ ↓ ↰ ↱ cards' } ],
          [ { fr: '🐛 Le bug (ch5-s5:a, ch5-s5:b, ch5-s5:c)', en: '🐛 The bug (ch5-s5:a, ch5-s5:b, ch5-s5:c)' }, { fr: 'ch5-s5:d Bug ! La maîtresse-robot se trompe', en: 'ch5-s5:d Bug! The teacher-robot gets it wrong' }, { fr: 'ch8-s5:a Le sandwich du robot', en: 'ch8-s5:a The robot sandwich' } ],
        ] },
      { type: 'tip', text: {
        fr: 'La règle : le corps d’abord. Si vous n’avez le temps que d’une fiche, faites celle qui prépare. L’écran vient confirmer ce que les jambes ont compris.',
        en: 'The rule: body first. If you only have time for one sheet, do the one that prepares. The screen then confirms what the legs have understood.' } },
    ] },

  // ───────────────────────────────────────────────────────────────────────────
  { id: 'lexicon', emoji: '📖', title: { fr: 'Lexique enfant ↔ prof', en: 'Child ↔ teacher lexicon' },
    blocks: [
      { type: 'table',
        head: [ { fr: 'Mot FR', en: 'French word' }, { fr: 'Mot EN', en: 'English word' }, { fr: 'Mot de l’enfant', en: 'Child’s words' }, { fr: 'Geste', en: 'Gesture' } ],
        rows: [
          [ { fr: 'ordinateur', en: 'ordinateur' }, { fr: 'computer', en: 'computer' }, { fr: 'la machine qui fait tout marcher', en: 'the machine that runs everything' }, { fr: 'on tape doucement sur une boîte imaginaire', en: 'pat an imaginary box gently' } ],
          [ { fr: 'écran', en: 'écran' }, { fr: 'screen', en: 'screen' }, { fr: 'là où je regarde les images', en: 'where I look at the pictures' }, { fr: 'on dessine un grand rectangle devant soi', en: 'draw a big rectangle in front of you' } ],
          [ { fr: 'clavier', en: 'clavier' }, { fr: 'keyboard', en: 'keyboard' }, { fr: 'les touches avec les lettres', en: 'the keys with the letters' }, { fr: 'on pianote sur ses genoux', en: 'tap fingers on your knees' } ],
          [ { fr: 'touche', en: 'touche' }, { fr: 'key', en: 'key' }, { fr: 'un petit bouton, une lettre', en: 'a small button, one letter' }, { fr: 'on appuie une fois avec l’index', en: 'press once with the index finger' } ],
          [ { fr: 'souris', en: 'souris' }, { fr: 'mouse', en: 'mouse' }, { fr: 'la petite bête qui fait bouger la flèche', en: 'the little animal that moves the arrow' }, { fr: 'la main glisse à plat sur la table', en: 'slide a flat hand on the table' } ],
          [ { fr: 'clic', en: 'clic' }, { fr: 'click', en: 'click' }, { fr: 'un petit « tac » avec le doigt', en: 'a little “tap” with the finger' }, { fr: 'l’index descend une fois', en: 'the index finger goes down once' } ],
          [ { fr: 'double-clic', en: 'double-clic' }, { fr: 'double click', en: 'double click' }, { fr: 'tac-tac, vite', en: 'tap-tap, fast' }, { fr: 'l’index descend deux fois, vite', en: 'the index finger goes down twice, fast' } ],
          [ { fr: 'flèche', en: 'flèche' }, { fr: 'arrow', en: 'arrow' }, { fr: 'ça montre où aller', en: 'it shows where to go' }, { fr: 'le bras tendu montre une direction', en: 'a straight arm points a direction' } ],
          [ { fr: 'ordre', en: 'ordre' }, { fr: 'order / command', en: 'order / command' }, { fr: 'une chose que je dis au robot', en: 'one thing I tell the robot' }, { fr: 'on lève un doigt : un ordre', en: 'raise one finger: one order' } ],
          [ { fr: 'programme', en: 'programme' }, { fr: 'program', en: 'program' }, { fr: 'tous les ordres dans l’ordre', en: 'all the orders in order' }, { fr: 'on aligne les mains l’une après l’autre', en: 'line up your hands one after the other' } ],
        ] },
      { type: 'table',
        head: [ { fr: 'Mot FR', en: 'French word' }, { fr: 'Mot EN', en: 'English word' }, { fr: 'Mot de l’enfant', en: 'Child’s words' }, { fr: 'Geste', en: 'Gesture' } ],
        rows: [
          [ { fr: 'Go', en: 'Go' }, { fr: 'Go', en: 'Go' }, { fr: 'c’est parti, le robot lit tout', en: 'off we go, the robot reads everything' }, { fr: 'on tape sur un gros bouton imaginaire', en: 'hit a big imaginary button' } ],
          [ { fr: 'bug', en: 'bug' }, { fr: 'bug', en: 'bug' }, { fr: 'une erreur qu’on répare', en: 'a mistake we fix' }, { fr: 'la loupe devant l’œil', en: 'the magnifying glass at the eye' } ],
          [ { fr: 'boucle / répéter', en: 'boucle / répéter' }, { fr: 'loop / repeat', en: 'loop / repeat' }, { fr: 'encore, encore, encore !', en: 'again, again, again!' }, { fr: 'on tourne l’index en rond', en: 'twirl your index finger in a circle' } ],
          [ { fr: 'tourner', en: 'tourner' }, { fr: 'turn', en: 'turn' }, { fr: 'je change de côté sans avancer', en: 'I change side without moving' }, { fr: 'on pivote sur place d’un quart de tour', en: 'turn a quarter turn on the spot' } ],
          [ { fr: 'avancer', en: 'avancer' }, { fr: 'go forward', en: 'go forward' }, { fr: 'un pas devant moi', en: 'one step in front of me' }, { fr: 'un pas en avant', en: 'one step forward' } ],
          [ { fr: 'reculer', en: 'reculer' }, { fr: 'go backward', en: 'go backward' }, { fr: 'un pas en arrière, sans me retourner', en: 'one step back, without turning round' }, { fr: 'un pas en arrière', en: 'one step back' } ],
          [ { fr: 'robot', en: 'robot' }, { fr: 'robot', en: 'robot' }, { fr: 'il fait ce que disent les cartes', en: 'it does what the cards say' }, { fr: 'bras pliés, « bip bip »', en: 'arms bent, “beep beep”' } ],
          [ { fr: 'capteur', en: 'capteur' }, { fr: 'sensor', en: 'sensor' }, { fr: 'les yeux du robot', en: 'the robot’s eyes' }, { fr: 'deux doigts en jumelles', en: 'two fingers as binoculars' } ],
          [ { fr: 'case / coordonnées', en: 'case / coordonnées' }, { fr: 'square / coordinates', en: 'square / coordinates' }, { fr: 'le nom de la case : 4-1', en: 'the square’s name: 4-1' }, { fr: 'on dessine un carré dans l’air', en: 'draw a square in the air' } ],
          [ { fr: 'pixel', en: 'pixel' }, { fr: 'pixel', en: 'pixel' }, { fr: 'un tout petit carré de couleur', en: 'a tiny coloured square' }, { fr: 'pouce et index font un petit carré', en: 'thumb and index make a tiny square' } ],
        ] },
      { type: 'p', text: {
        fr: 'En classe bilingue, dites le mot dans les deux langues à la suite, toujours avec le même geste. Le geste est le pont entre les deux mots.',
        en: 'In a bilingual class, say the word in both languages one after the other, always with the same gesture. The gesture is the bridge between the two words.' } },
    ] },

  // ───────────────────────────────────────────────────────────────────────────
  { id: 'faq', emoji: '🆘', title: { fr: 'Que faire si…', en: 'What to do if…' },
    blocks: [
      { type: 'table',
        head: [ { fr: 'Situation', en: 'Situation' }, { fr: 'Que faire', en: 'What to do' } ],
        rows: [
          [ { fr: 'Pas de voix au 🔊', en: 'No voice from 🔊' }, { fr: 'Aucune voix installée : Paramètres Windows › Heure et langue › Voix › Ajouter des voix › Français, puis rouvrir le site. En attendant, le copilote lit la consigne avec vous.', en: 'No voice installed: Windows Settings › Time & language › Speech › Add voices, then reopen the site. Meanwhile, the co-pilot says the instruction with you.' } ],
          [ { fr: 'Pas de son du tout', en: 'No sound at all' }, { fr: 'Vérifiez que 🔇 n’est pas activé dans l’en-tête, puis le volume du TBI. Les ordinateurs font « bip » à la place.', en: 'Check that 🔇 is not on in the header, then the whiteboard volume. The computers go “beep” instead.' } ],
          [ { fr: 'TBI en panne', en: 'Whiteboard down' }, { fr: 'Chaque séance a sa version débranchée (fiche ch8 liée). Sortez les cartes flèches et le quadrillage : la séance a lieu.', en: 'Every session has an unplugged version (linked ch8 sheet). Bring out the arrow cards and the grid: the session goes ahead.' } ],
          [ { fr: 'Le clic droit ne marche pas au doigt', en: 'Right click does not work by finger' }, { fr: 'Sur le TBI, le clic droit est un appui long : on garde le doigt posé une seconde.', en: 'On the whiteboard, right click is a long press: keep your finger down for one second.' } ],
          [ { fr: 'Le double-clic rate', en: 'Double click fails' }, { fr: 'Au doigt, c’est un double-tap : tac-tac vite, au même endroit. Sinon, prenez la souris sans fil.', en: 'By finger, it is a double tap: tap-tap fast, in the same spot. Otherwise, use the wireless mouse.' } ],
          [ { fr: 'Tout le monde crie', en: 'Everyone shouts' }, { fr: '⏹ Stop, mains sur les genoux, on relit la règle 🤫 « je chuchote ». Seul le copilote parle.', en: '⏹ Stop, hands on knees, re-read the 🤫 “I whisper” rule. Only the co-pilot speaks.' } ],
          [ { fr: 'Un enfant gagne trop vite', en: 'A child wins too fast' }, { fr: 'Défi étoiles : « refais-le avec moins de flèches ». Ou changez de héros : chat, lapin, singe, ours, pingouin.', en: 'Star challenge: “do it again with fewer arrows”. Or change the hero: cat, rabbit, monkey, bear, penguin.' } ],
          [ { fr: 'La langue a basculé', en: 'The language switched' }, { fr: 'Quelqu’un a touché 🇫🇷/🇬🇧 dans l’en-tête. Touchez-le à nouveau. Le choix reste mémorisé.', en: 'Someone touched 🇫🇷/🇬🇧 in the header. Touch it again. The choice is remembered.' } ],
          [ { fr: 'Remettre la progression à zéro', en: 'Reset the progress' }, { fr: 'Dans le chapitre, sous le compteur (ex. 3/12), touchez « ↺ remettre ce chapitre à zéro » et confirmez.', en: 'In the chapter, under the counter (e.g. 3/12), touch “↺ reset this chapter” and confirm.' } ],
          [ { fr: 'Les ✓ ont disparu sur un autre ordinateur', en: 'The ✓ vanished on another computer' }, { fr: 'La progression est locale au navigateur du TBI. Gardez le même ordinateur et le même navigateur toute l’année.', en: 'Progress is local to the whiteboard’s browser. Keep the same computer and the same browser all year.' } ],
          [ { fr: 'Pas d’internet ce jour-là', en: 'No internet that day' }, { fr: 'Le site marche hors ligne : le dossier dist/ s’ouvre par double-clic, depuis une clé USB si besoin.', en: 'The site works offline: the dist/ folder opens with a double click, from a USB stick if needed.' } ],
        ] },
      { type: 'tip', text: {
        fr: 'Le plan B tient en une phrase : cartes flèches, quadrillage, un enfant-robot. Gardez-les dans une boîte à côté du tableau.',
        en: 'Plan B fits in one sentence: arrow cards, a grid, one child-robot. Keep them in a box next to the board.' } },
    ] },

  // ───────────────────────────────────────────────────────────────────────────
  { id: 'home', emoji: '🏡', title: { fr: 'Hygiène numérique et mot aux parents', en: 'Screen habits and a word to parents' },
    blocks: [
      { type: 'ul', items: [
        { fr: 'Temps d’écran court : 12 minutes au plus devant le tableau, puis on bouge. Le reste de la séance se fait avec le corps.', en: 'Short screen time: 12 minutes at most in front of the board, then we move. The rest of the session is done with the body.' },
        { fr: 'Aucune photo d’enfant en ligne. La liste de passage reste dans la classe ; les dessins vont dans le cahier.', en: 'No photo of a child online. The turn list stays in the classroom; drawings go in the notebook.' },
        { fr: 'L’écran ne récompense ni ne punit. Il n’est jamais donné « pour se calmer », ni retiré « pour gronder ».', en: 'The screen is neither a reward nor a punishment. It is never given “to calm down”, nor taken away “to scold”.' },
        { fr: 'Ce que l’enfant fait à l’écran, il peut le refaire au sol. Si ce n’est pas le cas, on ralentit.', en: 'What the child does on screen, they can redo on the floor. If not, we slow down.' },
      ] },
      { type: 'ol', items: [
        { fr: 'Le robot et le maître (ch8-s1:a) : un parent est le robot, l’enfant donne un ordre à la fois pour l’amener au canapé.', en: 'The robot and the master (ch8-s1:a): a parent is the robot, the child gives one order at a time to reach the sofa.' },
        { fr: 'L’algorithme du matin (ch8-s4:c) : quatre images à remettre dans l’ordre, réveil, habits, petit-déjeuner, dents.', en: 'The morning algorithm (ch8-s4:c): four pictures to put in order, wake up, clothes, breakfast, teeth.' },
        { fr: 'Jacques a dit (ch8-s3:a) : on ne bouge que si la condition est dite. Cinq minutes avant le bain.', en: 'Simon says (ch8-s3:a): move only if the condition is spoken. Five minutes before bath time.' },
      ] },
      { type: 'p', text: {
        fr: 'Modèle de mot de rentrée (½ page). Chers parents, cette année votre enfant découvre le numérique et la robotique. Il apprendra à commander une machine avec un seul doigt, à donner des ordres dans le bon ordre, à trouver un « bug » et à le réparer. Nous utilisons un tableau tactile 12 minutes au plus par séance ; le reste se fait avec le corps, des cartes et un petit robot.',
        en: 'Back-to-school note template (½ page). Dear parents, this year your child is discovering digital skills and robotics. They will learn to control a machine with one finger, to give orders in the right order, to find a “bug” and to fix it. We use a touch board for 12 minutes at most per session; the rest is done with the body, cards and a small robot.' } },
      { type: 'p', text: {
        fr: 'Aucune photo de votre enfant n’est mise en ligne. À la maison, jouez avec lui au robot et au maître, à l’algorithme du matin ou à Jacques a dit : cinq minutes suffisent. Les mots à connaître : ordre, programme, bug, robot. Merci de votre confiance. La maîtresse.',
        en: 'No photo of your child is put online. At home, play the robot and the master, the morning algorithm or Simon says with them: five minutes are enough. Words to know: order, program, bug, robot. Thank you for your trust. The teacher.' } },
    ] },
]
