import { useLang } from '../i18n.jsx'

// Fiche d'activité « débranchée » (sans écran) : un guide pour le prof.
// Champs attendus sur l'activité : objective, materials[], steps[], duration, link.
export default function UnpluggedCard({ activity }) {
  const { t } = useLang()
  const a = activity

  const Section = ({ icon, title, children }) => (
    <div className="rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-200">
      <div className="mb-1 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-stone-500">
        <span>{icon}</span> {title}
      </div>
      {children}
    </div>
  )

  return (
    <div className="printable flex flex-col gap-4 py-1">
      {/* Titre visible seulement à l'impression (l'en-tête de la modale est masqué) */}
      <h2 className="hidden text-2xl font-extrabold text-stone-800 print:block">
        {a.emoji} {t(a.title)}
      </h2>

      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-lime-100 px-3 py-1 text-sm font-bold text-lime-700">
          🚫📱 {t({ fr: 'Sans écran', en: 'Screen-free' })}
        </span>
        {a.duration && (
          <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-bold text-violet-700">
            ⏱️ {a.duration} min
          </span>
        )}
        <div className="flex-1" />
        <button
          onClick={() => window.print()}
          className="no-print rounded-full bg-stone-700 px-4 py-2 text-sm font-bold text-white shadow transition hover:bg-stone-800 active:scale-95"
        >
          🖨️ {t({ fr: 'Imprimer', en: 'Print' })}
        </button>
      </div>

      {a.objective && (
        <Section icon="🎯" title={t({ fr: 'Objectif', en: 'Goal' })}>
          <p className="text-stone-700">{t(a.objective)}</p>
        </Section>
      )}

      {a.materials?.length > 0 && (
        <Section icon="🧰" title={t({ fr: 'Matériel', en: 'Materials' })}>
          <ul className="flex flex-wrap gap-2">
            {a.materials.map((m, i) => (
              <li key={i} className="rounded-full bg-white px-3 py-1 text-sm text-stone-700 ring-1 ring-stone-200">{t(m)}</li>
            ))}
          </ul>
        </Section>
      )}

      {a.steps?.length > 0 && (
        <Section icon="👣" title={t({ fr: 'Déroulé', en: 'Steps' })}>
          <ol className="flex flex-col gap-2">
            {a.steps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-500 text-sm font-bold text-white">{i + 1}</span>
                <span className="text-stone-700">{t(s)}</span>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {a.link && (
        <div className="rounded-2xl bg-sky-50 p-3 text-sm text-sky-700 ring-1 ring-sky-200">
          🔗 {t({ fr: 'À relier avec l’écran : ', en: 'Connect with the screen: ' })}<span className="font-bold">{t(a.link)}</span>
        </div>
      )}
    </div>
  )
}
