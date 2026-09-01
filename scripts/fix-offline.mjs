// Rend dist/index.html ouvrable par double-clic (protocole file://).
// Vite émet <script type="module" crossorigin> : les deux sont bloqués par la
// politique CORS en file://, ce qui donne une page blanche. Le bundle étant
// autonome, `defer` suffit.
import { readFileSync, writeFileSync, existsSync } from 'node:fs'

const file = 'dist/index.html'
if (!existsSync(file)) {
  console.error('fix-offline: dist/index.html introuvable — lancez le build avant.')
  process.exit(1)
}

let html = readFileSync(file, 'utf8')
const before = html
html = html
  .replace(/\s+crossorigin(?=[\s>])/g, '')
  .replace(/type="module"/g, 'defer')

writeFileSync(file, html)
console.log(before === html ? 'fix-offline: rien à changer.' : 'fix-offline: dist/index.html ouvrable en file:// ✔')
