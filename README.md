# Linfopourtous · Maternelle (KG, 3–5 ans)

Site **compagnon de classe** interactif pour aider le prof à donner le cours de
numérique en maternelle. Bilingue **FR / EN**, pensé pour des **non-lecteurs** :
gros boutons, emojis, consignes lues à voix haute (🔊), sons d'encouragement.

D'après les manuels 2023 (7 chapitres) : *Je connais mon ordinateur, Dessins
animés, J'utilise le clavier, Je dessine avec Paint, Je code avec un algorithme,
ScratchJr, Robotique avec mTiny* — avec un robot **mTiny** simulé (commandes
relatives, cartes du set, boucles).

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

**https://ebechalani.github.io/carmelites/**

Le premier déploiement active Pages tout seul. Si Pages reste désactivé,
l'activer une fois dans **Settings → Pages → Source : GitHub Actions**.

## Ce qui est jouable

- 🐶 **Algorithme** (chien / pingouin / Tic) — ranger des flèches, le héros avance.
  *C'est la brique réutilisable pour mTiny.*
- 🖱️ **Souris** — canard, briques, attrape-poisson, relier les points, clic
  gauche/droit, penalty (double-clic).
- ⌨️ **Clavier** — bébé clavier, lettres/mots qui tombent, dé, compter.

🚧 À venir : atelier **Paint**, **puzzles/miroir**, activités **ScratchJr**, **mTiny**.

## Structure du code

- `src/data/curriculum.js` — tout le programme (chapitres → séances → activités).
  Chaque activité a un `type` qui choisit le composant interactif.
- `src/games/` — les mini-jeux (`DogGrid`, `MouseGame`, `KeyboardGame`).
- `src/i18n.jsx` — bascule de langue FR/EN.
- `src/sound.js` — bips Web Audio + voix (SpeechSynthesis).
