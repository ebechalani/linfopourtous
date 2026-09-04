// Les notions de pensée informatique travaillées en maternelle, nommées une
// fois pour toutes. Chaque séance du guide (guide/sessions/*.js) en cite une.
//   prof    = le mot de l'adulte
//   child   = le mot de l'enfant (ce qu'on dit en classe)
//   gesture = le geste-image à mimer avec les enfants
export const CONCEPTS = {
  tool: { emoji: '🖱️', color: '#6d28d9',
    prof: { fr: 'Outil numérique', en: 'Digital tool' },
    child: { fr: 'Je commande la machine', en: 'I control the machine' },
    gesture: { fr: 'On tend l’index, un seul doigt', en: 'Point one finger' } },
  cause: { emoji: '👆', color: '#db2777',
    prof: { fr: 'Cause → effet', en: 'Cause → effect' },
    child: { fr: 'Je touche, ça bouge', en: 'I tap, it moves' },
    gesture: { fr: 'On tape dans la main, puis on montre l’écran', en: 'Tap your palm, then point at the screen' } },
  sequence: { emoji: '➡️', color: '#16a34a',
    prof: { fr: 'Séquence (l’ordre des ordres)', en: 'Sequence (the order of orders)' },
    child: { fr: 'D’abord… ensuite… et puis…', en: 'First… then… and then…' },
    gesture: { fr: 'On avance la main par à-coups, un pas à la fois', en: 'Move your hand forward in little jumps' } },
  decomposition: { emoji: '🧩', color: '#ea580c',
    prof: { fr: 'Décomposition (par étapes)', en: 'Decomposition (step by step)' },
    child: { fr: 'On coupe en petits morceaux', en: 'We cut it into small pieces' },
    gesture: { fr: 'On « coupe » avec la main, une fois, deux fois', en: 'Chop with your hand, once, twice' } },
  pattern: { emoji: '🔴🔵', color: '#0891b2',
    prof: { fr: 'Motif / régularité', en: 'Pattern / regularity' },
    child: { fr: 'Ça revient toujours pareil', en: 'It always comes back the same' },
    gesture: { fr: 'On tape genoux, mains, genoux, mains', en: 'Knees, hands, knees, hands' } },
  loop: { emoji: '🔁', color: '#d97706',
    prof: { fr: 'Boucle (répétition)', en: 'Loop (repetition)' },
    child: { fr: 'Encore, encore, encore !', en: 'Again, again, again!' },
    gesture: { fr: 'On tourne l’index en rond', en: 'Twirl your index finger in a circle' } },
  condition: { emoji: '🚦', color: '#65a30d',
    prof: { fr: 'Condition (si… alors…)', en: 'Condition (if… then…)' },
    child: { fr: 'Seulement si…', en: 'Only if…' },
    gesture: { fr: 'Main levée = on bouge, main baissée = statue', en: 'Hand up = move, hand down = statue' } },
  debug: { emoji: '🐛', color: '#dc2626',
    prof: { fr: 'Débogage (trouver et réparer l’erreur)', en: 'Debugging (find and fix the mistake)' },
    child: { fr: 'On cherche le bug et on répare', en: 'We find the bug and fix it' },
    gesture: { fr: 'On met la loupe (rond avec les doigts) devant l’œil', en: 'Make a magnifying glass with your fingers' } },
  abstraction: { emoji: '🗺️', color: '#2563eb',
    prof: { fr: 'Abstraction / représentation', en: 'Abstraction / representation' },
    child: { fr: 'Un dessin qui veut dire quelque chose', en: 'A picture that means something' },
    gesture: { fr: 'On dessine un carré dans l’air', en: 'Draw a square in the air' } },
  orientation: { emoji: '↰', color: '#0284c7',
    prof: { fr: 'Orientation relative (tourner / avancer)', en: 'Relative orientation (turn / go forward)' },
    child: { fr: 'Le robot regarde devant lui', en: 'The robot looks in front of itself' },
    gesture: { fr: 'On pivote sur place d’un quart de tour', en: 'Turn a quarter turn on the spot' } },
}

export const CONCEPT_KEYS = Object.keys(CONCEPTS)
