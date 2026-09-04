# Guide du professeur — modèle de données

Tout le guide est **bilingue** : chaque texte est un objet `{ fr: '…', en: '…' }`
(la fonction `t()` de `src/i18n.jsx` choisit la langue ; si `en` manque, `fr` est
affiché). Les notions viennent de `concepts.js` (clés : `tool`, `cause`,
`sequence`, `decomposition`, `pattern`, `loop`, `condition`, `debug`,
`abstraction`, `orientation`).

## `sessions/chN.js` — une fiche par séance

```js
export const SESSIONS = {
  'ch5-s0': {
    concept: 'sequence',          // clé de concepts.js (notion dominante)
    also: ['cause'],              // notions secondaires (0 à 2)
    duration: 25,                 // minutes, séance complète (rituel → clôture)
    essential: { fr: '…', en: '…' },   // 2 phrases : ce que les enfants vont vivre et apprendre
    setup: [ { fr: '…', en: '…' } ],   // avant l'arrivée des enfants (3 à 5 puces ; commencer par « tester 🔊 » si la voix sert)
    timeline: [                        // déroulé minuté, 5 à 7 étapes ; `act` = id d'activité de la séance à ouvrir (optionnel)
      { min: 3,  what: { fr: '…', en: '…' } },
      { min: 5,  what: { fr: '…', en: '…' }, act: 'tot' },
    ],
    roles: { fr: '…', en: '…' },       // comment les 24 autres participent (pilote / copilote / ordinateurs / vérificateur…)
    say: [ { fr: '…', en: '…' } ],     // 3 à 5 phrases à dire mot pour mot aux enfants (courtes, tutoiement)
    ask: [ { fr: '…', en: '…' } ],     // 3 à 5 questions à poser (ouvertes, 1 idée chacune)
    pitfalls: [ { trap: { fr: '…', en: '…' }, fix: { fr: '…', en: '…' } } ],  // 2 à 4 pièges fréquents + parade
    differentiation: {                 // même activité, trois consignes
      tot: { fr: '…', en: '…' },       // 3 ans (PS) : un geste, cause → effet, l'adulte verbalise
      beg: { fr: '…', en: '…' },       // 4 ans (MS) : 2-3 ordres, dire avant de toucher
      pro: { fr: '…', en: '…' },       // 5 ans (GS) : 4 ordres et plus, prédire avant Go, moins de flèches
    },
    observe: {                         // observables « je vois que… » (1 phrase chacun)
      tot: { fr: '…', en: '…' }, beg: { fr: '…', en: '…' }, pro: { fr: '…', en: '…' },
      warn: { fr: '…', en: '…' },      // signe qu'il faut ralentir / reprendre
    },
    unplugged: { id: 'ch8-s1:a', bridge: { fr: '…', en: '…' } },  // fiche débranchée liée (clé session:activité) + comment faire le pont
    noSound: { fr: '…', en: '…' },     // plan B si la voix / le son manquent
    vocab: [ { word: { fr: '…', en: '…' }, gesture: { fr: '…', en: '…' } } ],  // 2 à 4 mots + geste
    tips: { tot: { fr: '…', en: '…' }, a: { fr: '…', en: '…' } },  // une astuce par activité (clé = id d'activité), 1 phrase
    closing: { fr: '…', en: '…' },     // phrase-bilan de clôture (« aujourd'hui on a… »)
    parents: { fr: '…', en: '…' },     // mot pour le cahier de liaison (2-3 phrases)
  },
}
```

Règles de rédaction : phrases courtes (≤ 20 mots), verbes d'action, tutoiement
avec les enfants, vouvoiement de la maîtresse dans `setup`/`pitfalls`.
Aucun jargon sans son « mot de l'enfant ». Ne jamais inventer une activité ou
un bouton qui n'existe pas : lire `curriculum.js` et le jeu concerné.

## `chapters.js` — une fiche par chapitre

```js
export const CHAPTERS_GUIDE = {
  ch5: {
    thread: { fr: '…', en: '…' },              // fil rouge en 3 phrases, avec les mots des enfants
    concepts: ['sequence', 'loop', 'debug'],   // notion dominante en premier
    domains: [ { fr: '…', en: '…' } ],         // 2-3 domaines du programme de maternelle + attendu précis
    rhythm: { fr: '…', en: '…' },              // nombre de séances, période conseillée, séances « cœur » vs « bonus », où couper
    materials: [ { fr: '…', en: '…' } ],       // liste unique du chapitre + préparation « une fois »
    ritual: { open: { fr: '…', en: '…' }, close: { fr: '…', en: '…' } },
    unplugged: [ { id: 'ch8-s1:a', when: { fr: '…', en: '…' } } ],   // fiches ch8 à intercaler (avant / pendant / après)
    pitfalls: [ { trap: { fr: '…', en: '…' }, fix: { fr: '…', en: '…' } } ],
    observables: [ { fr: '…', en: '…' } ],     // 4 à 6 observables de fin de chapitre
    celebration: { fr: '…', en: '…' },         // quoi faire pendant la fête de fin de chapitre (bilan collectif)
    parents: { fr: '…', en: '…' },             // mot aux parents de fin de chapitre
  },
}
```

## `global.js` — le guide général

```js
export const GLOBAL_GUIDE = [
  { id: 'why', emoji: '🎯', title: { fr: '…', en: '…' },
    blocks: [
      { type: 'p', text: { fr: '…', en: '…' } },
      { type: 'ul', items: [ { fr: '…', en: '…' } ] },
      { type: 'ol', items: [ { fr: '…', en: '…' } ] },
      { type: 'table', head: [ { fr: '…', en: '…' } ], rows: [ [ { fr: '…', en: '…' }, { fr: '…', en: '…' } ] ] },
      { type: 'tip', text: { fr: '…', en: '…' } },      // encadré « à retenir »
    ] },
]
```
