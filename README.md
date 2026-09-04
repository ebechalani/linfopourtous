# Numérique et Robotique · Carmélites · Maternelle (KG, 3–5 ans)

Site **compagnon de classe** interactif pour aider le prof à donner le cours de
numérique en maternelle aux Carmélites. Bilingue **FR / EN**, pensé pour des
**non-lecteurs** : gros boutons, emojis, consignes lues à voix haute (🔊), sons
d'encouragement.

Créé par **Eddy Bachaalany**.

8 chapitres, 44 séances, 123 activités : *Je connais mon ordinateur, Dessins
animés, J'utilise le clavier, Je dessine avec Paint, Je code avec un algorithme,
ScratchJr, Robotique avec mTiny, Activités débranchées* — avec un robot
**mTiny** simulé (commandes relatives, cartes du set, boucles) et un **guide du
professeur** complet pour chaque séance.

## Lancer le site

```bash
npm install      # une seule fois
npm run dev      # ouvre http://localhost:5173/
```

## Version pour la classe (sans serveur)

```bash
npm run build    # génère le dossier dist/
```

Le dossier `dist/` utilise des chemins relatifs : il s'ouvre par double-clic et
peut être hébergé gratuitement.

## En ligne (GitHub Pages)

À chaque `git push` sur `main`, le workflow `.github/workflows/deploy.yml`
construit et publie le site automatiquement. URL en classe :

**https://ebechalani.github.io/linfopourtous/**

Le premier déploiement active Pages tout seul. Si Pages reste désactivé,
l'activer une fois dans **Settings → Pages → Source : GitHub Actions**.

## En ligne (Vercel, projet « carmelites »)

Le dépôt est prêt pour Vercel (`vercel.json` : Vite, `npm run build`, dossier
`dist`). Une seule fois, depuis le tableau de bord Vercel :

1. **Add New… → Project → Import** le dépôt GitHub `ebechalani/linfopourtous`.
2. **Project Name** : `carmelites` (l'URL sera `https://carmelites.vercel.app`).
3. Laisser les réglages détectés (Framework : Vite, Build : `npm run build`,
   Output : `dist`) et cliquer **Deploy**.

Ensuite chaque `git push` sur `main` redéploie automatiquement, comme pour
GitHub Pages. Les deux adresses restent valables.

## Ce qui est jouable

Tout le programme est jouable au tableau tactile (doigt) comme à la souris :

- 🖱️ **Souris** — canard, briques (balayage au doigt), attrape-poisson, relier
  les points, clic gauche/droit (appui long), penalty (double-clic / double-tap).
- ⌨️ **Clavier** — bébé clavier, lettres/mots qui tombent (mots FR ou EN), dé,
  compter. Clavier QWERTY à l'écran + clavier physique.
- 🎨 **Paint** — pinceau, ligne, carré, cercle, pot de peinture, gomme,
  **Annuler**, tailles, modèle à reproduire.
- 🐶 **Algorithme** (chien, chat, lapin, singe, ours, pingouin, Tic) — mode
  direct, empreintes guidées, programme + Go, boucle « répéter », étoiles.
- 🧩 **Puzzles** — suite à compléter, ombres, miroir, du plus petit au plus grand.
- 🐱 **ScratchJr** — blocs déplacer / sauter / dire, drapeau vert.
- 🐼 **mTiny** — robot orienté (avancer / reculer / tourner), 3 modes (un
  toucher, télécommande, programme), boucle, 6 tapis.
- 🐛 **Débogage** — des programmes déjà écrits « avec un bug » à trouver et
  réparer (chien et robot).
- 🤸 **Débranché** — 21 fiches prof imprimables (sans écran), reliées à leur
  activité écran par un bouton « ▶ Ouvrir à l'écran ».

## En classe

- **3 niveaux** par activité : 🌱 Novice (3 ans, un seul toucher), 🌟 Débutant,
  🏆 Avancé — filtre en haut de chaque chapitre.
- **⛶ Plein écran** dans l'en-tête pour la projection ; **🔇** coupe-son ;
  **🇫🇷/🇬🇧** bascule de langue.
- **🔊** lit chaque consigne à voix haute (il faut une voix française installée
  sur le PC : Paramètres Windows › Heure et langue › Voix › Ajouter des voix).
- **Suivant ▶** dans chaque fenêtre d'activité pour enchaîner la séance.
- La progression (✓) est mémorisée dans le navigateur, chapitre par chapitre.

## Le guide du professeur (mode prof 👩‍🏫)

Le bouton **👩‍🏫** de l'en-tête allume le *mode prof*. Éteint (par défaut), la
vue projetée aux enfants est strictement identique — rien n'apparaît. Allumé :

- **👩‍🏫 Coin du prof** (bouton de chaque séance) → un tiroir latéral avec la
  **fiche de séance** : notion travaillée, durée, installation, **déroulé
  minuté** (chaque étape ouvre l'activité d'un toucher), rôles des 25 enfants,
  phrases à dire, questions à poser, pièges et parades, **différenciation
  3 / 4 / 5 ans**, observables, pont vers le **débranché**, plan B sans son,
  lexique, astuce par activité, clôture et mot aux parents. Imprimable.
- **📘 Guide du chapitre** : fil rouge, domaines du programme, rythme,
  matériel, rituels, fiches débranchées à intercaler, bilan de fin de chapitre.
- **📖 Guide du prof** (page complète) : progression annuelle sur 5 périodes,
  les 10 notions de pensée informatique (mot du prof ↔ mot de l'enfant ↔ geste),
  rituel d'une séance, gestion de 25 enfants avec un seul écran, installation,
  évaluation, table branché ↔ débranché, lexique bilingue, dépannage, mot aux
  parents — et les **cartes flèches à imprimer** (mêmes glyphes et couleurs
  qu'à l'écran).
- **💡** dans une fenêtre d'activité : l'astuce du prof, cachée par défaut.

Tout le guide est bilingue et vit dans `src/data/guide/` (données pures) :
`concepts.js` (les 10 notions), `sessions/chN.js` (une fiche par séance),
`global.js` (le guide général). Le format est documenté dans
`src/data/guide/README.md`.

## Structure du code

- `src/data/curriculum.js` — tout le programme (chapitres → séances → activités).
  Chaque activité a un `type` qui choisit le composant interactif (liste en tête
  du fichier).
- `src/data/levels.js` — les 3 niveaux et la règle qui range chaque activité.
- `src/data/guide/` — le guide du professeur (voir plus haut).
- `src/teacher.jsx` — le mode prof (mémorisé dans le navigateur).
- `src/games/` — les mini-jeux (`DogGrid`, `MTinyRobot`, `MouseGame`,
  `KeyboardGame`, `PaintStudio`, `PuzzleGame`, `ScratchBlocks`, `TinyGame`,
  `ArrowPick`).
- `src/components/` — modale d'activité, fiches prof, fête de fin de chapitre…
- `src/i18n.jsx` — bascule de langue FR/EN et textes d'interface.
- `src/sound.js` — bips Web Audio + voix (SpeechSynthesis).
