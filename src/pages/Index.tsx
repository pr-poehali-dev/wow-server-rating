import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/a70b46ee-e9f9-4655-88e7-3e21a80d8b17.jpg";
const LOGO_IMG = "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/5c8bf240-9541-48e8-bdfc-61fcf6ca48c3.jpg";

const SERVERS = [
  {
    id: 1, name: "Lordaeron Reborn", expansion: "Wrath of the Lich King", rates: "x5", type: "PvE",
    online: 4821, rating: 4.8, votes: 1243,
    desc: "Близкий к оригиналу геймплей с качественным контентом и стабильным онлайном.",
    banner: "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/e40efe79-5c5d-4205-a675-64a72d2d4479.jpg",
    site: "lordaeron-reborn.ru",
    fullDesc: "Lordaeron Reborn — один из старейших и наиболее стабильных WotLK серверов. Команда из 20+ разработчиков и ГМов обеспечивает качественный игровой процесс максимально близкий к официальному контенту. Все рейды ICC, ToC, RS полностью скриптованы. Активная PvE-гильдия-среда, регулярные патчи и ивенты.",
    screenshots: [
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/e40efe79-5c5d-4205-a675-64a72d2d4479.jpg",
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/a70b46ee-e9f9-4655-88e7-3e21a80d8b17.jpg",
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/5c8bf240-9541-48e8-bdfc-61fcf6ca48c3.jpg",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: ["Рейты x5", "PvE фокус", "Все рейды WotLK", "Активная поддержка", "Без P2W"],
  },
  {
    id: 2, name: "Azeroth Legacy", expansion: "The Burning Crusade", rates: "x2", type: "PvP",
    online: 2394, rating: 4.6, votes: 987,
    desc: "Ностальгическое путешествие по Запределью с активным PvP-комьюнити.",
    banner: "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/d213467b-c2d7-4054-988a-393b60213242.jpg",
    site: "azeroth-legacy.ru",
    fullDesc: "Azeroth Legacy воссоздаёт атмосферу TBC максимально близко к оригиналу с рейтами x2. Активная арена 2v2 и 3v3, живой Запределье, полный прогресс рейдов от Karazhan до Sunwell. Сервер существует с 2019 года и накопил верное комьюнити.",
    screenshots: [
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/d213467b-c2d7-4054-988a-393b60213242.jpg",
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/b89835b3-8342-43e6-8b78-4dcad49176e6.jpg",
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/a70b46ee-e9f9-4655-88e7-3e21a80d8b17.jpg",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: ["Рейты x2", "PvP арена", "Все рейды TBC", "Рейтинговые сезоны", "Балансный донат"],
  },
  {
    id: 3, name: "Shadowmoon", expansion: "Shadowlands", rates: "x10", type: "PvP",
    online: 6102, rating: 4.5, votes: 2156,
    desc: "Быстрая прокачка и хардкорный PvP в актуальном контенте.",
    banner: "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/5c7242ab-a698-48bb-b379-078ae529fd30.jpg",
    site: "shadowmoon-wow.ru",
    fullDesc: "Shadowmoon — лидер по онлайну среди Shadowlands серверов. x10 рейты позволяют добраться до эндгейма за несколько дней. Активный PvP с рейтинговой системой, частые турниры с призами, развитое комьюнити в Discord.",
    screenshots: [
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/5c7242ab-a698-48bb-b379-078ae529fd30.jpg",
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/a70b46ee-e9f9-4655-88e7-3e21a80d8b17.jpg",
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/5c8bf240-9541-48e8-bdfc-61fcf6ca48c3.jpg",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: ["Рейты x10", "Хардкор PvP", "Турниры с призами", "Крупное комьюнити", "Частые обновления"],
  },
  {
    id: 4, name: "Frostmourne", expansion: "Classic", rates: "x1", type: "PvE",
    online: 3217, rating: 4.7, votes: 1891,
    desc: "Ванильный WoW в чистом виде — для тех, кто помнит настоящий Азерот.",
    banner: "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/7cf83fa1-70dd-4b8a-9568-3073e0e2091f.jpg",
    site: "frostmourne-classic.ru",
    fullDesc: "Frostmourne Classic — идеальная реализация ванильного WoW 1.12.1. Никакого доната, только честная игра и ностальгия. Все 40-местные рейды скриптованы: MC, BWL, AQ40, Naxx. Прогрессия фаз как в оригинале. Для настоящих ценителей классики.",
    screenshots: [
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/7cf83fa1-70dd-4b8a-9568-3073e0e2091f.jpg",
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/a70b46ee-e9f9-4655-88e7-3e21a80d8b17.jpg",
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/e40efe79-5c5d-4205-a675-64a72d2d4479.jpg",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: ["Рейты x1", "Без доната", "Ванильные рейды", "Прогрессия фаз", "Чистый геймплей"],
  },
  {
    id: 5, name: "Emerald Dream", expansion: "Cataclysm", rates: "x7", type: "PvE",
    online: 1589, rating: 4.3, votes: 672,
    desc: "Свежий взгляд на катаклизм с кастомным контентом и активными рейдами.",
    banner: "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/d8cc39b1-ae4a-456b-adf5-213a32a668f8.jpg",
    site: "emerald-dream-wow.ru",
    fullDesc: "Emerald Dream предлагает Cataclysm с уникальным кастомным контентом поверх оригинальной базы. Рейты x7, активные рейды Dragon Soul и Firelands. Уникальная система репутаций и кастомные квестовые цепочки от команды разработчиков.",
    screenshots: [
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/d8cc39b1-ae4a-456b-adf5-213a32a668f8.jpg",
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/a70b46ee-e9f9-4655-88e7-3e21a80d8b17.jpg",
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/5c7242ab-a698-48bb-b379-078ae529fd30.jpg",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: ["Рейты x7", "Кастомный контент", "Рейды Cataclysm", "Уникальные квесты", "Активные ГМы"],
  },
  {
    id: 6, name: "Dark Portal", expansion: "The Burning Crusade", rates: "x3", type: "PvP",
    online: 2871, rating: 4.4, votes: 1104,
    desc: "Сервер с богатой историей и преданным комьюнити любителей BC.",
    banner: "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/b89835b3-8342-43e6-8b78-4dcad49176e6.jpg",
    site: "dark-portal-wow.ru",
    fullDesc: "Dark Portal — один из первых TBC серверов с русскоязычным комьюнити. x3 рейты, сбалансированный донат, живая арена и регулярные PvP-ивенты. Все рейды от Karazhan до Black Temple полностью реализованы. Сильная гильдия-сцена.",
    screenshots: [
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/b89835b3-8342-43e6-8b78-4dcad49176e6.jpg",
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/d213467b-c2d7-4054-988a-393b60213242.jpg",
      "https://cdn.poehali.dev/projects/9644d04b-7abf-4c44-9349-f01e10069539/files/a70b46ee-e9f9-4655-88e7-3e21a80d8b17.jpg",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: ["Рейты x3", "PvP арена", "Все рейды TBC", "Русское комьюнити", "Ивенты каждую неделю"],
  },
];

const REVIEWS = [
  { id: 1, server: "Lordaeron Reborn", user: "Arthas_fan88", rating: 5, date: "01.05.2026", text: "Играю уже полгода — ни разу не пожалел. Стабильный онлайн, отзывчивые ГМы, контент накатывают по расписанию. Лучший WotLK сервер из всех что пробовал." },
  { id: 2, server: "Frostmourne", user: "VanillaLover", rating: 5, date: "29.04.2026", text: "Настоящий ваниль! Никаких донат-преимуществ, качественная эмуляция, живые игроки. Отдельный респект команде за поддержку классической атмосферы." },
  { id: 3, server: "Shadowmoon", user: "PvPmaster2024", rating: 4, date: "28.04.2026", text: "Хороший сервер для быстрого старта. x10 рейты позволяют за неделю выйти в эндгейм. Арена активная, но донат иногда чуть мешает балансу." },
  { id: 4, server: "Azeroth Legacy", user: "BurningCrusader", rating: 5, date: "27.04.2026", text: "TBC — лучший аддон в истории WoW, и здесь его реализация близка к идеальной. Запределье живёт!" },
  { id: 5, server: "Dark Portal", user: "NightElf_Druid", rating: 4, date: "25.04.2026", text: "Уютный сервер с дружным комьюнити. Есть небольшие баги, но ГМы быстро реагируют на репорты. Рекомендую." },
];

const NEWS = [
  { id: 1, date: "03.05.2026", tag: "Обновление", title: "Wrath of the Lich King 3.3.5b — фикс Испытания Крестоносца", text: "Исправлен ряд критических ошибок в рейде ICC. Обновлены дроп-таблицы Lich King нормал." },
  { id: 2, date: "01.05.2026", tag: "Новость", title: "The Burning Crusade: сезон 4 PvP начался", text: "На серверах Burning Crusade стартовал 4-й PvP сезон. Новые сеты, рейтинговая арена и обновлённые награды." },
  { id: 3, date: "28.04.2026", tag: "Патч", title: "Classic WoW: Пустоши Силитуса — полная реализация", text: "Контент Силитуса теперь полностью реализован: квесты, ивенты и хаки из оригинального 1.12.1." },
  { id: 4, date: "25.04.2026", tag: "Ивент", title: "День Детей — праздничный ивент на всех серверах", text: "С 25 апреля по 10 мая на всех серверах активны праздничные квесты с уникальными наградами." },
];

const VACANCIES = [
  { id: 1, server: "Lordaeron Reborn", role: "Game Master", type: "Удалённо", time: "2 ч/день", desc: "Ищем опытного ГМ для работы с тикетами игроков. Нужен опыт игры в WoW и знание WotLK контента.", skills: ["WoW WotLK", "Поддержка игроков", "Русский язык"] },
  { id: 2, server: "Shadowmoon", role: "Разработчик C++", type: "Удалённо", time: "Проектная", desc: "Требуется разработчик для исправления скриптов боссов и реализации нового контента на основе TrinityCore.", skills: ["C++", "TrinityCore", "SQL"] },
  { id: 3, server: "Frostmourne", role: "Community Manager", type: "Удалённо", time: "4 ч/день", desc: "Управление дискорд-сервером, модерация чата, организация ивентов для комьюнити.", skills: ["Discord", "Модерация", "Организация ивентов"] },
  { id: 4, server: "Azeroth Legacy", role: "Тестировщик", type: "Удалённо", time: "Гибкий", desc: "Ищем тестировщиков контента TBC для проверки квестов, рейдов и PvP-механик.", skills: ["WoW TBC", "Тестирование", "Репорты багов"] },
];

type Section = "home" | "servers" | "reviews" | "news" | "vacancies" | "contacts";
type Server = typeof SERVERS[0];

// ——— Страница обзора сервера ———
function ServerReview({ server, onBack }: { server: Server; onBack: () => void }) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Back */}
      <button onClick={onBack} className="flex items-center gap-2 text-neon-cyan font-mono text-sm mb-6 hover:gap-3 transition-all">
        <Icon name="ArrowLeft" size={16} /> Назад к рейтингу
      </button>

      {/* Hero banner */}
      <div className="relative rounded overflow-hidden mb-6 h-64 md:h-80">
        <img src={server.banner} alt={server.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,7,17,0.95) 0%, rgba(7,7,17,0.3) 60%, transparent 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="cyber-badge badge-expansion">{server.expansion}</span>
            <span className="cyber-badge badge-rates">{server.rates}</span>
            <span className={`cyber-badge ${server.type === "PvP" ? "badge-pvp" : "badge-pve"}`}>{server.type}</span>
          </div>
          <h1 className="font-oswald text-4xl md:text-5xl text-white uppercase">{server.name}</h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: описание + скриншоты + видео */}
        <div className="lg:col-span-2 space-y-6">
          {/* Описание */}
          <div className="cyber-card p-6">
            <h2 className="section-title text-xl text-white mb-4">О сервере</h2>
            <p className="text-gray-300 leading-relaxed">{server.fullDesc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {server.features.map(f => (
                <span key={f} className="cyber-badge badge-pve">{f}</span>
              ))}
            </div>
          </div>

          {/* Скриншоты */}
          <div className="cyber-card p-6">
            <h2 className="section-title text-xl text-white mb-4">Скриншоты</h2>
            <div className="relative rounded overflow-hidden mb-3 h-52 md:h-64">
              <img src={server.screenshots[activeScreenshot]} alt="screenshot" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border border-neon-cyan/10 rounded" />
            </div>
            <div className="flex gap-2">
              {server.screenshots.map((s, i) => (
                <button key={i} onClick={() => setActiveScreenshot(i)}
                  className={`flex-1 h-16 rounded overflow-hidden border-2 transition-all ${i === activeScreenshot ? "border-neon-cyan" : "border-dark-border hover:border-neon-cyan/40"}`}>
                  <img src={s} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Видео */}
          <div className="cyber-card p-6">
            <h2 className="section-title text-xl text-white mb-4">Видео</h2>
            <div className="relative rounded overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={server.video}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Видео ${server.name}`}
              />
            </div>
          </div>
        </div>

        {/* Right: статистика + переход */}
        <div className="space-y-4">
          <div className="cyber-card p-5">
            <div className="text-center mb-4">
              <div className="font-oswald text-5xl neon-text-cyan mb-1">{server.rating.toFixed(1)}</div>
              <div className="text-xl star-filled mb-1">
                {"★".repeat(Math.floor(server.rating))}<span className="star-empty">{"☆".repeat(5 - Math.floor(server.rating))}</span>
              </div>
              <div className="text-xs text-gray-500 font-mono">{server.votes} голосов</div>
            </div>
            <div className="cyber-progress mb-1"><div className="cyber-progress-fill" style={{ width: `${(server.rating / 5) * 100}%` }} /></div>
          </div>

          <div className="cyber-card p-5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Онлайн</span>
              <div className="flex items-center gap-2">
                <div className="online-dot" />
                <span className="text-neon-green font-mono text-sm">{server.online.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Аддон</span>
              <span className="text-white text-sm font-mono">{server.expansion}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Рейты</span>
              <span className="neon-text-purple font-mono font-bold">{server.rates}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Тип</span>
              <span className={`cyber-badge ${server.type === "PvP" ? "badge-pvp" : "badge-pve"}`}>{server.type}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Сайт</span>
              <span className="text-neon-cyan font-mono text-xs">{server.site}</span>
            </div>
          </div>

          <button className="neon-btn-solid w-full py-3 rounded text-sm flex items-center justify-center gap-2">
            <Icon name="ExternalLink" size={15} />
            Перейти на сервер
          </button>

          <button className="neon-btn neon-btn-purple w-full py-3 rounded text-sm flex items-center justify-center gap-2">
            <Icon name="Star" size={15} />
            Оставить отзыв
          </button>

          {/* Баннер */}
          <div className="rounded overflow-hidden border border-dark-border">
            <img src={server.banner} alt="banner" className="w-full object-cover h-28" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ——— Карточка сервера ———
function ServerCard({ server, rank, onReview }: { server: Server; rank?: number; onReview: (s: Server) => void }) {
  return (
    <div className="cyber-card overflow-hidden group cursor-pointer">
      {/* Баннер-превью */}
      <div className="relative h-36 overflow-hidden">
        <img src={server.banner} alt={server.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,26,1) 0%, rgba(13,13,26,0.4) 60%, transparent 100%)" }} />
        {rank && (
          <div className={`absolute top-3 left-3 font-mono text-xl font-bold ${rank === 1 ? "rank-1" : rank === 2 ? "rank-2" : rank === 3 ? "rank-3" : "text-gray-400"}`}>
            #{rank}
          </div>
        )}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 rounded px-2 py-0.5">
          <div className="online-dot" style={{ width: 6, height: 6 }} />
          <span className="text-neon-green font-mono text-xs">{server.online.toLocaleString()}</span>
        </div>
      </div>

      {/* Контент */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-oswald text-lg text-white group-hover:text-neon-cyan transition-colors uppercase tracking-wide">{server.name}</h3>
            <div className="flex gap-1.5 mt-1 flex-wrap">
              <span className="cyber-badge badge-expansion">{server.expansion}</span>
              <span className="cyber-badge badge-rates">{server.rates}</span>
              <span className={`cyber-badge ${server.type === "PvP" ? "badge-pvp" : "badge-pve"}`}>{server.type}</span>
            </div>
          </div>
          <div className="text-right ml-2 shrink-0">
            <div className="neon-text-cyan font-mono text-lg leading-none">{server.rating.toFixed(1)}</div>
            <div className="text-xs star-filled">{"★".repeat(Math.floor(server.rating))}<span className="star-empty">{"☆".repeat(5 - Math.floor(server.rating))}</span></div>
            <div className="text-xs text-gray-500">{server.votes} гол.</div>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2">{server.desc}</p>

        <div className="flex gap-2">
          <button className="neon-btn-solid flex-1 py-1.5 text-xs rounded">Перейти</button>
          <button
            onClick={(e) => { e.stopPropagation(); onReview(server); }}
            className="neon-btn neon-btn-purple px-3 py-1.5 text-xs rounded flex items-center gap-1">
            <Icon name="BookOpen" size={12} />
            Обзор
          </button>
        </div>
      </div>
    </div>
  );
}

// ——— Главный компонент ———
export default function Index() {
  const [section, setSection] = useState<Section>("home");
  const [filter, setFilter] = useState({ expansion: "all", type: "all", sort: "rating" });
  const [mobileMenu, setMobileMenu] = useState(false);
  const [reviewServer, setReviewServer] = useState<Server | null>(null);

  const navItems: { id: Section; label: string }[] = [
    { id: "home", label: "Главная" },
    { id: "servers", label: "Рейтинг" },
    { id: "reviews", label: "Отзывы" },
    { id: "news", label: "Новости" },
    { id: "vacancies", label: "Вакансии" },
    { id: "contacts", label: "Контакты" },
  ];

  const filteredServers = SERVERS
    .filter(s => filter.expansion === "all" || s.expansion === filter.expansion)
    .filter(s => filter.type === "all" || s.type === filter.type)
    .sort((a, b) => filter.sort === "rating" ? b.rating - a.rating : b.online - a.online);

  const openReview = (server: Server) => {
    setReviewServer(server);
    setSection("servers");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "var(--dark-bg)" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-dark-border" style={{ background: "rgba(7,7,17,0.95)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setSection("home"); setReviewServer(null); }}>
            <div className="w-9 h-9 rounded overflow-hidden border border-neon-cyan/30">
              <img src={LOGO_IMG} alt="logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-oswald text-xl tracking-widest uppercase neon-text-cyan">WOW-TOPS<span className="text-white">.SU</span></span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <button key={item.id} onClick={() => { setSection(item.id); setReviewServer(null); }}
                className={`nav-link text-sm ${section === item.id ? "active" : ""}`}>
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button className="neon-btn px-4 py-2 text-xs rounded">Добавить сервер</button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
            <Icon name={mobileMenu ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden border-t border-dark-border" style={{ background: "rgba(7,7,17,0.98)" }}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => { setSection(item.id); setReviewServer(null); setMobileMenu(false); }}
                className={`block w-full text-left px-6 py-3 font-oswald uppercase tracking-wide text-sm ${section === item.id ? "text-neon-cyan" : "text-gray-400"}`}>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <div className="pt-16">

        {/* ===== HOME ===== */}
        {section === "home" && (
          <>
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
              <div className="absolute inset-0">
                <img src={HERO_IMG} alt="hero" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,7,17,0.9) 0%, rgba(7,7,17,0.6) 50%, rgba(7,7,17,0.9) 100%)" }} />
                <div className="absolute inset-0 grid-overlay" />
              </div>
              <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                <div className="max-w-3xl animate-fade-in-up">
                  <div className="font-mono text-neon-cyan text-xs tracking-[0.3em] mb-4 uppercase">// Рейтинг серверов World of Warcraft</div>
                  <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
                    <span className="text-white">Найди свой</span><br />
                    <span className="neon-text-cyan">идеальный</span><br />
                    <span className="text-white">сервер WoW</span>
                  </h1>
                  <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                    Честный рейтинг приватных серверов на основе отзывов реальных игроков. Фильтры по аддону, рейтам и режиму.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button onClick={() => setSection("servers")} className="neon-btn-solid px-8 py-3 rounded text-sm">Смотреть рейтинг</button>
                    <button onClick={() => setSection("reviews")} className="neon-btn px-8 py-3 rounded text-sm">Читать отзывы</button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-t border-dark-border" style={{ background: "rgba(13,13,26,0.8)", backdropFilter: "blur(10px)" }}>
                <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Серверов в рейтинге", value: "128" },
                    { label: "Активных игроков", value: "47K+" },
                    { label: "Отзывов", value: "8,400+" },
                    { label: "Обновление", value: "24/7" },
                  ].map(stat => (
                    <div key={stat.label} className="text-center">
                      <div className="font-oswald text-2xl neon-text-cyan">{stat.value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="section-title text-3xl text-white">Топ серверов</h2>
                <button onClick={() => setSection("servers")} className="text-neon-cyan text-sm font-mono hover:underline flex items-center gap-1">
                  Все серверы <Icon name="ChevronRight" size={16} />
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVERS.slice(0, 3).map((s, i) => <ServerCard key={s.id} server={s} rank={i + 1} onReview={openReview} />)}
              </div>
            </section>

            <section className="border-t border-dark-border">
              <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="section-title text-3xl text-white">Последние новости</h2>
                  <button onClick={() => setSection("news")} className="text-neon-cyan text-sm font-mono hover:underline flex items-center gap-1">
                    Все новости <Icon name="ChevronRight" size={16} />
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {NEWS.slice(0, 2).map(n => (
                    <div key={n.id} className="cyber-card p-5 cursor-pointer group">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="cyber-badge badge-expansion">{n.tag}</span>
                        <span className="text-xs text-gray-500 font-mono">{n.date}</span>
                      </div>
                      <h3 className="font-oswald text-lg text-white group-hover:text-neon-cyan transition-colors uppercase mb-2">{n.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{n.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ===== ПОЧЕМУ МЫ ===== */}
            <section className="border-t border-dark-border">
              <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-14">
                  <div className="font-mono text-neon-cyan text-xs tracking-[0.3em] mb-3 uppercase">// Наши принципы</div>
                  <h2 className="font-oswald text-4xl md:text-5xl text-white uppercase mb-4">Почему именно мы?</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto text-lg">Мы не продаём места в топе. Каждый сервер в рейтинге заслужил своё место честно.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      icon: "Vote",
                      color: "cyan",
                      title: "Рейтинг от игроков",
                      desc: "Позиция сервера определяется исключительно голосами реальных игроков. Никаких платных мест и накрученных рейтингов.",
                    },
                    {
                      icon: "ShieldCheck",
                      color: "green",
                      title: "Честная модерация",
                      desc: "Каждый сервер проверяется вручную перед добавлением. Фейки, мошенники и серверы с агрессивным P2W отклоняются.",
                    },
                    {
                      icon: "Trash2",
                      color: "red",
                      title: "Неактивные удаляются",
                      desc: "Серверы с нулевым онлайном или недоступным сайтом автоматически убираются из рейтинга. Только живые проекты.",
                    },
                    {
                      icon: "RefreshCw",
                      color: "purple",
                      title: "Обновление в реальном времени",
                      desc: "Онлайн, рейтинг и статус серверов обновляются круглосуточно. Вы всегда видите актуальную картину.",
                    },
                    {
                      icon: "MessageCircle",
                      color: "cyan",
                      title: "Реальные отзывы",
                      desc: "Отзывы проходят проверку на дубли и спам. Мы удаляем заказные комментарии и накрутки от владельцев серверов.",
                    },
                    {
                      icon: "Eye",
                      color: "gold",
                      title: "Полная прозрачность",
                      desc: "Мы публикуем критерии оценки, правила модерации и методологию расчёта рейтинга. Никаких скрытых алгоритмов.",
                    },
                  ].map((item) => {
                    const borderColor = item.color === "cyan" ? "rgba(0,229,255,0.25)" : item.color === "green" ? "rgba(0,255,136,0.25)" : item.color === "red" ? "rgba(255,80,80,0.25)" : item.color === "purple" ? "rgba(191,64,255,0.25)" : "rgba(255,215,0,0.25)";
                    const iconColor = item.color === "cyan" ? "#00e5ff" : item.color === "green" ? "#00ff88" : item.color === "red" ? "#ff5050" : item.color === "purple" ? "#bf40ff" : "#ffd700";
                    const glowColor = item.color === "cyan" ? "rgba(0,229,255,0.15)" : item.color === "green" ? "rgba(0,255,136,0.15)" : item.color === "red" ? "rgba(255,80,80,0.15)" : item.color === "purple" ? "rgba(191,64,255,0.15)" : "rgba(255,215,0,0.15)";
                    return (
                      <div key={item.title} className="cyber-card p-6 group hover:scale-[1.02] transition-transform duration-300" style={{ borderColor }}>
                        <div className="w-12 h-12 rounded mb-4 flex items-center justify-center" style={{ background: glowColor, border: `1px solid ${borderColor}`, boxShadow: `0 0 20px ${glowColor}` }}>
                          <Icon name={item.icon as "Eye"} size={22} style={{ color: iconColor }} />
                        </div>
                        <h3 className="font-oswald text-lg uppercase mb-2" style={{ color: iconColor }}>{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Нижняя плашка */}
                <div className="mt-10 cyber-card p-6 flex flex-col md:flex-row items-center gap-6 neon-border-cyan">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.4)" }}>
                    <Icon name="Trophy" size={26} style={{ color: "#00e5ff" }} />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-oswald text-xl text-white uppercase mb-1">Проверено сообществом с 2019 года</h3>
                    <p className="text-gray-400 text-sm">Более 8 000 отзывов, 47 000 активных игроков и 128 серверов — WOW-TOPS.SU это крупнейший независимый рейтинг WoW серверов на русском языке.</p>
                  </div>
                  <div className="flex gap-6 shrink-0 text-center">
                    <div><div className="font-oswald text-2xl neon-text-cyan">99%</div><div className="text-xs text-gray-500">честных отзывов</div></div>
                    <div><div className="font-oswald text-2xl neon-text-cyan">24/7</div><div className="text-xs text-gray-500">мониторинг</div></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-t border-dark-border">
              <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                <h2 className="font-oswald text-4xl text-white uppercase mb-4">Управляешь сервером?</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">Добавь свой сервер в рейтинг и получи новых игроков уже сегодня.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button className="neon-btn-solid px-8 py-3 rounded text-sm">Добавить сервер</button>
                  <button onClick={() => setSection("vacancies")} className="neon-btn neon-btn-purple px-8 py-3 rounded text-sm">Разместить вакансию</button>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ===== SERVERS / REVIEW ===== */}
        {section === "servers" && (
          reviewServer ? (
            <ServerReview server={reviewServer} onBack={() => setReviewServer(null)} />
          ) : (
            <div className="max-w-7xl mx-auto px-4 py-12">
              <h1 className="section-title text-4xl text-white mb-8">Рейтинг серверов</h1>
              <div className="cyber-card p-4 mb-6 flex flex-wrap gap-3 items-center">
                <Icon name="Filter" size={16} className="text-neon-cyan" />
                <select className="cyber-input rounded px-3 py-2 text-sm" value={filter.expansion} onChange={e => setFilter(f => ({ ...f, expansion: e.target.value }))}>
                  <option value="all">Все аддоны</option>
                  <option value="Classic">Classic</option>
                  <option value="The Burning Crusade">The Burning Crusade</option>
                  <option value="Wrath of the Lich King">Wrath of the Lich King</option>
                  <option value="Cataclysm">Cataclysm</option>
                  <option value="Shadowlands">Shadowlands</option>
                </select>
                <select className="cyber-input rounded px-3 py-2 text-sm" value={filter.type} onChange={e => setFilter(f => ({ ...f, type: e.target.value }))}>
                  <option value="all">PvE + PvP</option>
                  <option value="PvE">PvE</option>
                  <option value="PvP">PvP</option>
                </select>
                <select className="cyber-input rounded px-3 py-2 text-sm" value={filter.sort} onChange={e => setFilter(f => ({ ...f, sort: e.target.value }))}>
                  <option value="rating">По рейтингу</option>
                  <option value="online">По онлайну</option>
                </select>
                <div className="ml-auto text-xs text-gray-500 font-mono">Найдено: {filteredServers.length} серверов</div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredServers.map((s, i) => <ServerCard key={s.id} server={s} rank={i + 1} onReview={openReview} />)}
              </div>
            </div>
          )
        )}

        {/* ===== REVIEWS ===== */}
        {section === "reviews" && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="section-title text-4xl text-white mb-8">Отзывы игроков</h1>
            <div className="grid md:grid-cols-2 gap-4">
              {REVIEWS.map(r => (
                <div key={r.id} className="cyber-card p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded border border-neon-purple/30 flex items-center justify-center text-neon-purple text-sm font-oswald" style={{ background: "var(--dark-card)" }}>
                        {r.user[0].toUpperCase()}
                      </div>
                      <div>
                        <div className="font-mono text-sm text-white">{r.user}</div>
                        <div className="text-xs text-gray-500">{r.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm"><span className="star-filled">{"★".repeat(r.rating)}</span><span className="star-empty">{"☆".repeat(5 - r.rating)}</span></div>
                      <span className="cyber-badge badge-expansion mt-1 inline-block">{r.server}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
            <div className="cyber-card p-6 mt-8">
              <h2 className="font-oswald text-2xl text-white uppercase mb-4">Написать отзыв</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input placeholder="Ваш никнейм" className="cyber-input rounded px-4 py-3 w-full text-sm" />
                <select className="cyber-input rounded px-4 py-3 w-full text-sm">
                  <option value="">Выберите сервер</option>
                  {SERVERS.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                </select>
              </div>
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Оценка:</div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(n => <button key={n} className="text-2xl text-gray-600 hover:text-neon-gold transition-colors">★</button>)}
                </div>
              </div>
              <textarea placeholder="Поделитесь опытом игры на сервере..." rows={4} className="cyber-input rounded px-4 py-3 w-full text-sm mb-4 resize-none" />
              <button className="neon-btn-solid px-6 py-2.5 rounded text-sm">Отправить отзыв</button>
            </div>
          </div>
        )}

        {/* ===== NEWS ===== */}
        {section === "news" && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="section-title text-4xl text-white mb-8">Новости и патчи</h1>
            <div className="grid gap-4">
              {NEWS.map(n => (
                <div key={n.id} className="cyber-card p-6 cursor-pointer group">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`cyber-badge ${n.tag === "Патч" ? "badge-pvp" : n.tag === "Ивент" ? "badge-pve" : "badge-expansion"}`}>{n.tag}</span>
                    <span className="text-xs text-gray-500 font-mono">{n.date}</span>
                  </div>
                  <h3 className="font-oswald text-xl text-white group-hover:text-neon-cyan transition-colors uppercase mb-2">{n.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{n.text}</p>
                  <button className="mt-4 text-neon-cyan text-sm font-mono flex items-center gap-1 hover:gap-2 transition-all">
                    Читать далее <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== VACANCIES ===== */}
        {section === "vacancies" && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
              <h1 className="section-title text-4xl text-white">Вакансии</h1>
              <button className="neon-btn neon-btn-purple px-6 py-2.5 rounded text-sm">
                <Icon name="Plus" size={14} className="inline mr-2" />Разместить вакансию
              </button>
            </div>
            <div className="grid gap-4">
              {VACANCIES.map(v => (
                <div key={v.id} className="cyber-card p-6">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                    <div>
                      <h3 className="font-oswald text-xl text-white uppercase">{v.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="cyber-badge badge-expansion">{v.server}</span>
                        <span className="text-xs text-gray-500 font-mono">{v.type} · {v.time}</span>
                      </div>
                    </div>
                    <button className="neon-btn px-5 py-2 rounded text-sm">Откликнуться</button>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{v.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {v.skills.map(skill => <span key={skill} className="cyber-badge badge-rates">{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="cyber-card p-6 mt-8">
              <h2 className="font-oswald text-2xl text-white uppercase mb-4">Разместить вакансию</h2>
              <p className="text-gray-400 text-sm mb-6">Заполните форму — ваша вакансия появится в списке после модерации.</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input placeholder="Название сервера" className="cyber-input rounded px-4 py-3 text-sm w-full" />
                <input placeholder="Роль / должность" className="cyber-input rounded px-4 py-3 text-sm w-full" />
                <input placeholder="Ваш контакт (Discord / email)" className="cyber-input rounded px-4 py-3 text-sm w-full" />
                <input placeholder="Занятость (напр. 2 ч/день)" className="cyber-input rounded px-4 py-3 text-sm w-full" />
              </div>
              <textarea placeholder="Описание вакансии и требования..." rows={4} className="cyber-input rounded px-4 py-3 w-full text-sm mb-4 resize-none" />
              <button className="neon-btn-solid px-6 py-2.5 rounded text-sm">Отправить на модерацию</button>
            </div>
          </div>
        )}

        {/* ===== CONTACTS ===== */}
        {section === "contacts" && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="section-title text-4xl text-white mb-8">Контакты</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-oswald text-xl text-white uppercase mb-4">Связаться с нами</h2>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: "Mail", label: "Email", value: "admin@wow-tops.su" },
                    { icon: "MessageSquare", label: "Discord", value: "WOW-TOPS#0001" },
                    { icon: "Send", label: "Telegram", value: "@wowtops_su" },
                  ].map(c => (
                    <div key={c.label} className="cyber-card p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded border border-neon-cyan/30 flex items-center justify-center text-neon-cyan">
                        <Icon name={c.icon as "Mail"} size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">{c.label}</div>
                        <div className="text-white font-mono text-sm">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cyber-card p-4 neon-border-cyan">
                  <h3 className="font-oswald text-lg text-neon-cyan uppercase mb-2">Реклама</h3>
                  <p className="text-gray-400 text-sm">Хотите разместить баннер или попасть в топ выдачи? Напишите нам по вопросам сотрудничества.</p>
                </div>
              </div>
              <div className="cyber-card p-6">
                <h2 className="font-oswald text-xl text-white uppercase mb-4">Форма обратной связи</h2>
                <div className="space-y-4">
                  <input placeholder="Ваше имя" className="cyber-input rounded px-4 py-3 text-sm w-full" />
                  <input placeholder="Email для ответа" className="cyber-input rounded px-4 py-3 text-sm w-full" />
                  <select className="cyber-input rounded px-4 py-3 text-sm w-full">
                    <option value="">Тема обращения</option>
                    <option>Добавить сервер</option>
                    <option>Сообщить о нарушении</option>
                    <option>Сотрудничество</option>
                    <option>Другое</option>
                  </select>
                  <textarea placeholder="Ваше сообщение..." rows={5} className="cyber-input rounded px-4 py-3 w-full text-sm resize-none" />
                  <button className="neon-btn-solid px-6 py-3 rounded text-sm w-full">Отправить сообщение</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <footer className="border-t border-dark-border mt-16">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="font-oswald text-lg tracking-widest neon-text-cyan">WOW-TOPS<span className="text-white">.SU</span></span>
              <div className="flex gap-6 flex-wrap justify-center">
                {navItems.map(item => (
                  <button key={item.id} onClick={() => { setSection(item.id); setReviewServer(null); }}
                    className="text-gray-500 hover:text-neon-cyan text-xs font-mono uppercase tracking-wider transition-colors">
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="text-gray-600 text-xs font-mono">© 2026 WOW-TOPS.SU</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}