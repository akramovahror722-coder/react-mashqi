import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import {
  Boxes,
  Check,
  Clock,
  Gauge,
  Layers,
  Monitor,
  Plus,
  RotateCcw,
  Trash2,
  Zap,
} from 'lucide-react'
import { useLang } from '../lib/lang'
import { localize } from '../lib/locale'
import { copy } from '../lib/copy'
import type { Localized } from '../lib/types'

type Tab = 'state' | 'props' | 'effects' | 'composition'

const tabs: { id: Tab; icon: typeof Gauge; label: Localized }[] = [
  { id: 'state', icon: Gauge, label: copy.tabState },
  { id: 'props', icon: Boxes, label: copy.tabProps },
  { id: 'effects', icon: Zap, label: copy.tabEffects },
  { id: 'composition', icon: Layers, label: copy.tabComposition },
]

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-700/40 bg-slate-900">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-[10px] font-bold tracking-wider text-slate-400 uppercase">
          {title}
        </span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-rose-400/70" />
          <span className="size-2 rounded-full bg-amber-400/70" />
          <span className="size-2 rounded-full bg-emerald-400/70" />
        </span>
      </div>
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-slate-100">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold tracking-wide text-slate-500 uppercase dark:text-slate-400">
        {label}
      </span>
      {children}
    </label>
  )
}

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-cyan-400 dark:border-white/10 dark:bg-[#0d1117] dark:text-slate-200'

function StateLab() {
  const { lang } = useLang()
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const [open, setOpen] = useState(false)

  const code = `const [count, setCount] = useState(${count})

<button onClick={() => setCount(count + ${step})}>
  {count}
</button>`

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
      <div className="space-y-4">
        <div className="grid min-h-[240px] place-items-center rounded-xl border border-dashed border-cyan-300/70 bg-cyan-500/5 p-6 dark:border-cyan-400/25">
          <div className="w-full max-w-xs text-center">
            <p className="font-mono text-6xl font-extrabold text-slate-800 tabular-nums dark:text-white">
              {count}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setCount((value) => value - step)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-slate-500 dark:border-white/10 dark:text-slate-300"
              >
                −
              </button>
              <button
                type="button"
                onClick={() => setCount((value) => value + step)}
                className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-bold text-white shadow-md"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => {
                  setCount(0)
                  setStep(1)
                }}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-500 dark:border-white/10 dark:text-slate-300"
              >
                <RotateCcw className="size-3.5" />
                {localize(copy.reset, lang)}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="mt-5 text-xs font-bold text-cyan-600 underline-offset-4 hover:underline dark:text-cyan-300"
            >
              {localize(copy.toggle, lang)} · {open ? 'true' : 'false'}
            </button>
            {open && (
              <p className="mt-2 rounded-lg bg-cyan-500/10 px-3 py-2 text-xs text-cyan-700 dark:text-cyan-200">
                {localize(copy.panelText, lang)}
              </p>
            )}
          </div>
        </div>

        <CodeBlock title={localize(copy.code, lang)} code={code} />
      </div>

      <div className="space-y-4 rounded-xl border border-slate-200/70 p-4 dark:border-white/10">
        <Field label={`${localize(copy.step, lang)} · ${step}`}>
          <input
            type="range"
            min={1}
            max={10}
            value={step}
            onChange={(event) => setStep(Number(event.target.value))}
            className="w-full accent-cyan-500"
          />
        </Field>
        <Field label={localize(copy.counter, lang)}>
          <input
            type="number"
            value={count}
            onChange={(event) => setCount(Number(event.target.value))}
            className={inputClass}
          />
        </Field>
        <div className="rounded-lg bg-slate-500/8 p-3 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
          <code className="font-mono text-cyan-600 dark:text-cyan-300">useState</code>{' '}
          {localize({
            uz: 'har o‘zgarishda komponentni qayta chizadi.',
            en: 're-renders the component on every change.',
            ru: 'перерисовывает компонент при каждом изменении.',
          }, lang)}
        </div>
      </div>
    </div>
  )
}

interface ProfileProps {
  name: string
  role: string
  level: number
  accent: string
}

function ProfileCard({ name, role, level, accent }: ProfileProps) {
  const initials =
    name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('') || 'RM'

  return (
    <div className="w-full max-w-xs rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center gap-3">
        <span
          className="grid size-12 place-items-center rounded-xl text-sm font-extrabold text-white shadow-md"
          style={{ background: `linear-gradient(135deg, ${accent}, #6366f1)` }}
        >
          {initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-slate-800 dark:text-white">{name || '—'}</p>
          <p className="truncate text-xs text-slate-500 dark:text-slate-400">{role || '—'}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400 uppercase">
          <span>level</span>
          <span className="font-mono">{level}%</span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${level}%`, backgroundColor: accent }}
          />
        </div>
      </div>
    </div>
  )
}

const accents = ['#06b6d4', '#3b82f6', '#6366f1', '#10b981', '#f43f5e']

function PropsLab() {
  const { lang } = useLang()
  const [name, setName] = useState('Akramov Axror')
  const [role, setRole] = useState('Frontend dasturchi')
  const [level, setLevel] = useState(78)
  const [accent, setAccent] = useState(accents[0])

  const code = `<ProfileCard
  name="${name}"
  role="${role}"
  level={${level}}
/>`

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
      <div className="space-y-4">
        <div className="grid min-h-[240px] place-items-center rounded-xl border border-dashed border-blue-300/70 bg-blue-500/5 p-6 dark:border-blue-400/25">
          <ProfileCard name={name} role={role} level={level} accent={accent} />
        </div>
        <CodeBlock title={localize(copy.code, lang)} code={code} />
      </div>

      <div className="space-y-4 rounded-xl border border-slate-200/70 p-4 dark:border-white/10">
        <Field label={localize(copy.name, lang)}>
          <input value={name} onChange={(event) => setName(event.target.value)} className={inputClass} />
        </Field>
        <Field label={localize(copy.role, lang)}>
          <input value={role} onChange={(event) => setRole(event.target.value)} className={inputClass} />
        </Field>
        <Field label={`${localize(copy.level, lang)} · ${level}%`}>
          <input
            type="range"
            min={0}
            max={100}
            value={level}
            onChange={(event) => setLevel(Number(event.target.value))}
            className="w-full accent-blue-500"
          />
        </Field>
        <Field label={localize(copy.accent, lang)}>
          <div className="flex gap-2">
            {accents.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setAccent(item)}
                aria-label={item}
                className={`size-7 rounded-full ring-2 ring-offset-2 transition-transform hover:scale-110 dark:ring-offset-[#0d1117] ${
                  accent === item ? 'ring-slate-900 dark:ring-white' : 'ring-transparent'
                }`}
                style={{ backgroundColor: item }}
              />
            ))}
          </div>
        </Field>
        <div className="rounded-lg bg-slate-500/8 p-3 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
          <code className="font-mono text-blue-600 dark:text-blue-300">props</code>{' '}
          {localize({
            uz: 'faqat o‘qiladi — komponent ularni o‘zgartirmaydi.',
            en: 'are read-only — the component never mutates them.',
            ru: 'только для чтения — компонент их не изменяет.',
          }, lang)}
        </div>
      </div>
    </div>
  )
}

function EffectsLab() {
  const { lang } = useLang()
  const [now, setNow] = useState(() => new Date())
  const [clicks, setClicks] = useState(0)
  const [width, setWidth] = useState(() => window.innerWidth)

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    document.title = `${clicks} · React Mashqi`
    return () => {
      document.title = 'React Mashqi'
    }
  }, [clicks])

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const code = `useEffect(() => {
  const id = setInterval(() => setNow(new Date()), 1000)
  return () => clearInterval(id)
}, [])`

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
      <div className="space-y-4">
        <div className="grid gap-3 rounded-xl border border-dashed border-sky-300/70 bg-sky-500/5 p-4 sm:grid-cols-2 dark:border-sky-400/25">
          <div className="rounded-xl border border-slate-200/70 bg-white p-4 dark:border-white/10 dark:bg-white/5">
            <p className="flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-slate-400 uppercase">
              <Clock className="size-3.5 text-sky-500" />
              {localize(copy.clock, lang)}
            </p>
            <p className="mt-2 font-mono text-2xl font-extrabold text-slate-800 tabular-nums dark:text-white">
              {now.toLocaleTimeString()}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200/70 bg-white p-4 dark:border-white/10 dark:bg-white/5">
            <p className="text-[11px] font-bold tracking-wide text-slate-400 uppercase">
              {localize(copy.clicks, lang)}
            </p>
            <div className="mt-2 flex items-center gap-3">
              <p className="font-mono text-2xl font-extrabold text-sky-600 tabular-nums dark:text-sky-300">
                {clicks}
              </p>
              <button
                type="button"
                onClick={() => setClicks((value) => value + 1)}
                className="rounded-lg bg-sky-500 px-3 py-1.5 text-xs font-bold text-white"
              >
                +1
              </button>
            </div>
            <p className="mt-2 text-[10px] leading-relaxed text-slate-400">
              {localize(copy.titleNote, lang)}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200/70 bg-white p-4 sm:col-span-2 dark:border-white/10 dark:bg-white/5">
            <p className="flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-slate-400 uppercase">
              <Monitor className="size-3.5 text-sky-500" />
              {localize(copy.windowWidth, lang)}
            </p>
            <div className="mt-2 flex items-center gap-3">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all"
                  style={{ width: `${Math.min(100, (width / 1920) * 100)}%` }}
                />
              </div>
              <span className="shrink-0 font-mono text-xs font-bold text-slate-600 dark:text-slate-300">
                {width}px
              </span>
            </div>
          </div>
        </div>

        <CodeBlock title={localize(copy.code, lang)} code={code} />
      </div>

      <div className="space-y-3 rounded-xl border border-slate-200/70 p-4 dark:border-white/10">
        <p className="text-xs font-bold text-slate-700 dark:text-slate-200">useEffect</p>
        <ul className="space-y-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
          <li className="flex gap-2">
            <Check className="mt-0.5 size-3 shrink-0 text-emerald-500" />
            {localize({ uz: 'Interval har sekundda soatni yangilaydi', en: 'An interval updates the clock every second', ru: 'Интервал обновляет часы каждую секунду' }, lang)}
          </li>
          <li className="flex gap-2">
            <Check className="mt-0.5 size-3 shrink-0 text-emerald-500" />
            {localize({ uz: 'Sahifa sarlavhasi bosishlar soniga bog‘langan', en: 'The page title is tied to the click count', ru: 'Заголовок страницы связан с числом нажатий' }, lang)}
          </li>
          <li className="flex gap-2">
            <Check className="mt-0.5 size-3 shrink-0 text-emerald-500" />
            {localize({ uz: 'Cleanup funksiyasi listenerlarni olib tashlaydi', en: 'The cleanup function removes listeners', ru: 'Функция очистки убирает слушатели' }, lang)}
          </li>
        </ul>
      </div>
    </div>
  )
}

type Filter = 'all' | 'active' | 'done'

interface Todo {
  id: string
  text: string
  done: boolean
}

const seedTodos: Todo[] = [
  { id: 't1', text: 'Komponentlarni ajratish', done: true },
  { id: 't2', text: 'Props bilan ishlash', done: true },
  { id: 't3', text: 'useEffect mashqi', done: false },
]

function TodoItem({
  todo,
  onToggle,
  onRemove,
}: {
  todo: Todo
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}) {
  return (
    <li className="flex items-center gap-2 rounded-lg border border-slate-200/70 px-3 py-2 text-xs dark:border-white/10">
      <button
        type="button"
        onClick={() => onToggle(todo.id)}
        aria-label="toggle"
        className={`grid size-4 shrink-0 place-items-center rounded border transition-colors ${
          todo.done
            ? 'border-cyan-500 bg-cyan-500 text-white'
            : 'border-slate-300 dark:border-white/20'
        }`}
      >
        {todo.done && <Check className="size-3" />}
      </button>
      <span
        className={`min-w-0 flex-1 truncate ${
          todo.done ? 'text-slate-400 line-through' : 'text-slate-700 dark:text-slate-200'
        }`}
      >
        {todo.text}
      </span>
      <button
        type="button"
        onClick={() => onRemove(todo.id)}
        aria-label="remove"
        className="shrink-0 text-slate-400 transition-colors hover:text-rose-500"
      >
        <Trash2 className="size-3.5" />
      </button>
    </li>
  )
}

function CompositionLab() {
  const { lang } = useLang()
  const [todos, setTodos] = useState<Todo[]>(seedTodos)
  const [draft, setDraft] = useState('')
  const [filter, setFilter] = useState<Filter>('all')

  const visible = useMemo(() => {
    if (filter === 'active') return todos.filter((todo) => !todo.done)
    if (filter === 'done') return todos.filter((todo) => todo.done)
    return todos
  }, [todos, filter])

  const remaining = todos.filter((todo) => !todo.done).length

  const add = () => {
    const text = draft.trim()
    if (!text) return
    setTodos((current) => [...current, { id: `${Date.now()}`, text, done: false }])
    setDraft('')
  }

  const toggle = (id: string) =>
    setTodos((current) =>
      current.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    )

  const remove = (id: string) =>
    setTodos((current) => current.filter((todo) => todo.id !== id))

  const code = `{todos
  .filter((todo) => ${
    filter === 'all' ? 'true' : filter === 'active' ? '!todo.done' : 'todo.done'
  })
  .map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ))}`

  const filters: { id: Filter; label: Localized }[] = [
    { id: 'all', label: copy.filterAll },
    { id: 'active', label: copy.filterActive },
    { id: 'done', label: copy.filterDone },
  ]

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
      <div className="space-y-4">
        <div className="rounded-xl border border-dashed border-cyan-300/70 bg-cyan-500/5 p-4 dark:border-cyan-400/25">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-slate-800 dark:text-white">
              {localize(copy.todos, lang)}
            </p>
            <span className="font-mono text-[11px] text-slate-400">
              {remaining} {localize(copy.remaining, lang)}
            </span>
          </div>

          <div className="mt-3 flex gap-2">
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') add()
              }}
              placeholder={localize(copy.todoPlaceholder, lang)}
              className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-cyan-400 dark:border-white/10 dark:bg-[#0d1117] dark:text-slate-100"
            />
            <button
              type="button"
              onClick={add}
              className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 text-xs font-bold text-white shadow-md"
            >
              <Plus className="size-3.5" />
              {localize(copy.addTodo, lang)}
            </button>
          </div>

          <div className="mt-3 flex gap-1.5">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-colors ${
                  filter === item.id
                    ? 'bg-cyan-500 text-white'
                    : 'text-slate-500 hover:bg-slate-500/10 dark:text-slate-400'
                }`}
              >
                {localize(item.label, lang)}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="mt-3 rounded-lg bg-slate-500/8 px-3 py-4 text-center text-xs text-slate-400">
              {localize(copy.emptyTodos, lang)}
            </p>
          ) : (
            <ul className="mt-3 space-y-1.5">
              {visible.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={toggle} onRemove={remove} />
              ))}
            </ul>
          )}

          {todos.some((todo) => todo.done) && (
            <button
              type="button"
              onClick={() => setTodos((current) => current.filter((todo) => !todo.done))}
              className="mt-3 text-[11px] font-semibold text-slate-400 transition-colors hover:text-rose-500"
            >
              {localize(copy.clearDone, lang)}
            </button>
          )}
        </div>

        <CodeBlock title={localize(copy.code, lang)} code={code} />
      </div>

      <div className="rounded-xl border border-slate-200/70 p-4 dark:border-white/10">
        <p className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200">
          <Boxes className="size-4 text-cyan-500" />
          {localize(copy.liveDemo, lang)}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          {localize(copy.featureListText, lang)}
        </p>
        <ul className="mt-4 space-y-2 text-[11px] text-slate-500 dark:text-slate-400">
          <li className="flex gap-2">
            <span className="text-cyan-500">•</span>
            <code className="font-mono">map</code> —{' '}
            {localize({ uz: 'ro‘yxatni chizish', en: 'rendering the list', ru: 'отрисовка списка' }, lang)}
          </li>
          <li className="flex gap-2">
            <span className="text-cyan-500">•</span>
            <code className="font-mono">filter</code> —{' '}
            {localize({ uz: 'filtr va qoldiqlar', en: 'filter and remaining count', ru: 'фильтр и остаток' }, lang)}
          </li>
          <li className="flex gap-2">
            <span className="text-cyan-500">•</span>
            <code className="font-mono">TodoItem</code> —{' '}
            {localize({ uz: 'props bilan komponent', en: 'a component with props', ru: 'компонент с props' }, lang)}
          </li>
        </ul>
      </div>
    </div>
  )
}

export function ReactLab() {
  const { lang } = useLang()
  const [tab, setTab] = useState<Tab>('state')

  return (
    <div className="card-surface overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-slate-200/70 px-4 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
        <div className="flex flex-wrap gap-1.5 rounded-xl bg-slate-500/8 p-1">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                tab === item.id
                  ? 'bg-white text-cyan-600 shadow-sm dark:bg-white/10 dark:text-cyan-300'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <item.icon className="size-3.5" />
              {localize(item.label, lang)}
            </button>
          ))}
        </div>
        <p className="text-[11px] font-semibold text-slate-400">{localize(copy.labTitle, lang)}</p>
      </div>

      <div className="p-4 sm:p-6">
        {tab === 'state' && <StateLab />}
        {tab === 'props' && <PropsLab />}
        {tab === 'effects' && <EffectsLab />}
        {tab === 'composition' && <CompositionLab />}
      </div>
    </div>
  )
}
