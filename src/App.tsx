import { Atom, Boxes, Gauge, Layers, Zap } from 'lucide-react'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { ReactLab } from './components/ReactLab'
import { useLang } from './lib/lang'
import { localize } from './lib/locale'
import { chips, copy, features, stats } from './lib/copy'

const featureIcons = [Gauge, Boxes, Zap, Layers]

export function App() {
  const { lang } = useLang()

  return (
    <div id="top" className="min-h-screen">
      <SiteHeader
        brand="React Mashqi"
        tagline={copy.kicker}
        accent="from-cyan-500 to-blue-500"
        icon={<Atom className="size-5" />}
      />

      <main>
        <section className="relative overflow-hidden pt-16 pb-14 sm:pt-20 sm:pb-16">
          <div
            className="pointer-events-none absolute -top-32 right-1/4 size-[28rem] rounded-full bg-cyan-500/15 blur-3xl dark:bg-cyan-500/10"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" aria-hidden="true" />
          <div className="container-page relative">
            <div className="max-w-3xl page-enter">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-cyan-600 uppercase dark:border-cyan-400/20 dark:text-cyan-300">
                <span className="size-1.5 rounded-full bg-cyan-500" />
                {localize(copy.kicker, lang)}
              </span>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">
                {localize(copy.title, lang)}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
                {localize(copy.subtitle, lang)}
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {chips.map((item) => (
                  <span
                    key={item.en}
                    className="chip bg-white/70 text-slate-600 ring-slate-200 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10"
                  >
                    <Atom className="size-3 text-cyan-500" />
                    {localize(item, lang)}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
                {stats.map((item) => (
                  <div key={item.label.en} className="card-surface px-4 py-3">
                    <p className="font-mono text-2xl font-extrabold text-cyan-600 dark:text-cyan-300">
                      {item.value}
                    </p>
                    <p className="mt-0.5 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      {localize(item.label, lang)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-page">
            <div className="mb-5">
              <h2 className="text-2xl font-extrabold tracking-tight">
                {localize(copy.labTitle, lang)}
              </h2>
              <p className="mt-1 max-w-xl text-sm text-slate-500 dark:text-slate-400">
                {localize(copy.labText, lang)}
              </p>
            </div>
            <ReactLab />
          </div>
        </section>

        <section className="section-alt py-16 sm:py-20">
          <div className="container-page">
            <h2 className="text-2xl font-extrabold tracking-tight">
              {localize(copy.featuresTitle, lang)}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = featureIcons[index] ?? Gauge
                return (
                  <div key={feature.title.en} className="card-surface card-hover p-6">
                    <span
                      className={`grid size-11 place-items-center rounded-xl bg-gradient-to-br ${feature.tone} text-white shadow-md`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-bold">{localize(feature.title, lang)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {localize(feature.text, lang)}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        brand="React Mashqi"
        note={{
          uz: 'React komponentlari, props, state va hookslarni mashq qilish uchun interaktiv loyiha.',
          en: 'An interactive project for practising React components, props, state and hooks.',
          ru: 'Интерактивный проект для практики компонентов, props, состояния и хуков React.',
        }}
        tech={['React', 'Vite', 'JavaScript', 'Hooks', 'Components', 'CSS']}
        repoUrl="https://github.com/akramovahror722-coder/react-mashqi"
        accentText="text-cyan-600 dark:text-cyan-300"
      />
    </div>
  )
}
