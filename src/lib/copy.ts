import type { Localized } from './types'

export const copy = {
  kicker: { uz: 'React amaliyoti', en: 'React practice', ru: 'Практика React' },
  title: { uz: 'React Mashqi', en: 'React Mashqi', ru: 'React Mashqi' },
  subtitle: {
    uz: 'Komponentlar, props, state va hookslarni jonli misollarda o‘rganing. Har bir demo — bitta React tushunchasi.',
    en: 'Learn components, props, state and hooks through live examples. Each demo is a single React concept.',
    ru: 'Изучайте компоненты, props, состояние и хуки на живых примерах. Каждая демо — одна концепция React.',
  },
  labTitle: { uz: 'Jonli laboratoriya', en: 'Live lab', ru: 'Живая лаборатория' },
  labText: {
    uz: 'Bo‘limni tanlang, parametrlarni o‘zgartiring va React qanday qayta chizishini kuzating.',
    en: 'Pick a section, change the parameters and watch React re-render.',
    ru: 'Выберите раздел, меняйте параметры и наблюдайте, как React перерисовывает интерфейс.',
  },
  tabState: { uz: 'State', en: 'State', ru: 'State' },
  tabProps: { uz: 'Props', en: 'Props', ru: 'Props' },
  tabEffects: { uz: 'Effects', en: 'Effects', ru: 'Effects' },
  tabComposition: { uz: 'Kompozitsiya', en: 'Composition', ru: 'Композиция' },
  counter: { uz: 'Hisoblagich', en: 'Counter', ru: 'Счётчик' },
  step: { uz: 'Qadam', en: 'Step', ru: 'Шаг' },
  reset: { uz: 'Tiklash', en: 'Reset', ru: 'Сброс' },
  toggle: { uz: 'Panelni ko‘rsatish', en: 'Show panel', ru: 'Показать панель' },
  panelText: {
    uz: 'Bu panel `useState(false)` bilan boshqariladi.',
    en: 'This panel is controlled by `useState(false)`.',
    ru: 'Эта панель управляется через `useState(false)`.',
  },
  name: { uz: 'Ism', en: 'Name', ru: 'Имя' },
  role: { uz: 'Kasb', en: 'Role', ru: 'Роль' },
  level: { uz: 'Daraja', en: 'Level', ru: 'Уровень' },
  accent: { uz: 'Rang', en: 'Colour', ru: 'Цвет' },
  preview: { uz: 'Komponent natijasi', en: 'Component output', ru: 'Результат компонента' },
  clock: { uz: 'Jonli soat', en: 'Live clock', ru: 'Живые часы' },
  clicks: { uz: 'Bosishlar', en: 'Clicks', ru: 'Нажатия' },
  titleNote: {
    uz: 'Har bosishda sahifa sarlavhasi yangilanadi (useEffect).',
    en: 'Each click updates the page title (useEffect).',
    ru: 'Каждое нажатие обновляет заголовок страницы (useEffect).',
  },
  windowWidth: { uz: 'Oyna kengligi', en: 'Window width', ru: 'Ширина окна' },
  todos: { uz: 'Vazifalar', en: 'Tasks', ru: 'Задачи' },
  addTodo: { uz: 'Qo‘shish', en: 'Add', ru: 'Добавить' },
  todoPlaceholder: { uz: 'Yangi vazifa…', en: 'New task…', ru: 'Новая задача…' },
  filterAll: { uz: 'Hammasi', en: 'All', ru: 'Все' },
  filterActive: { uz: 'Faol', en: 'Active', ru: 'Активные' },
  filterDone: { uz: 'Bajarilgan', en: 'Done', ru: 'Выполненные' },
  emptyTodos: { uz: 'Vazifalar yo‘q. Birinchisini qo‘shing.', en: 'No tasks. Add the first one.', ru: 'Задач нет. Добавьте первую.' },
  clearDone: { uz: 'Bajarilganlarni tozalash', en: 'Clear done', ru: 'Убрать выполненные' },
  remaining: { uz: 'qoldi', en: 'left', ru: 'осталось' },
  code: { uz: 'Kod', en: 'Code', ru: 'Код' },
  liveDemo: { uz: 'Jonli demo', en: 'Live demo', ru: 'Живое демо' },
  featuresTitle: { uz: 'Nimalar mashq qilingan', en: 'What was practised', ru: 'Что отработано' },
  featureStateTitle: { uz: 'State va hodisalar', en: 'State and events', ru: 'Состояние и события' },
  featureStateText: {
    uz: 'useState bilan hisoblagich, qadam va panelni boshqarish.',
    en: 'Managing a counter, step and panel with useState.',
    ru: 'Управление счётчиком, шагом и панелью через useState.',
  },
  featurePropsTitle: { uz: 'Props orqali uzatish', en: 'Passing props', ru: 'Передача props' },
  featurePropsText: {
    uz: 'Bitta komponent turli props bilan qanday o‘zgarishini ko‘rish.',
    en: 'Seeing how one component changes with different props.',
    ru: 'Как один компонент меняется с разными props.',
  },
  featureEffectsTitle: { uz: 'useEffect', en: 'useEffect', ru: 'useEffect' },
  featureEffectsText: {
    uz: 'Interval, sahifa sarlavhasi va oyna o‘lchamini kuzatish.',
    en: 'Intervals, page title and window size tracking.',
    ru: 'Интервалы, заголовок страницы и отслеживание размера окна.',
  },
  featureListTitle: { uz: 'Ro‘yxat va filtrlar', en: 'Lists and filters', ru: 'Списки и фильтры' },
  featureListText: {
    uz: 'map, filter va komponentlar kompozitsiyasi bilan vazifalar ro‘yxati.',
    en: 'A task list with map, filter and component composition.',
    ru: 'Список задач с map, filter и композицией компонентов.',
  },
} satisfies Record<string, Localized>

export const features = [
  { title: copy.featureStateTitle, text: copy.featureStateText, tone: 'from-cyan-500 to-blue-400' },
  { title: copy.featurePropsTitle, text: copy.featurePropsText, tone: 'from-blue-500 to-indigo-400' },
  { title: copy.featureEffectsTitle, text: copy.featureEffectsText, tone: 'from-sky-500 to-cyan-400' },
  { title: copy.featureListTitle, text: copy.featureListText, tone: 'from-cyan-600 to-sky-400' },
]

export const stats = [
  { value: '4', label: { uz: 'Demo', en: 'Demos', ru: 'Демо' } as Localized },
  { value: '2024', label: { uz: 'Boshlangan', en: 'Started', ru: 'Начало' } as Localized },
  { value: '100%', label: { uz: 'Brauzerda', en: 'In browser', ru: 'В браузере' } as Localized },
]

export const chips: Localized[] = [
  { uz: 'useState', en: 'useState', ru: 'useState' },
  { uz: 'Props', en: 'Props', ru: 'Props' },
  { uz: 'useEffect', en: 'useEffect', ru: 'useEffect' },
  { uz: 'Komponentlar', en: 'Components', ru: 'Компоненты' },
]
