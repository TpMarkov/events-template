// Enhanced data with real Unsplash images and beautiful event visuals

export const events = [
  {
    id: 1,
    name: "Tech Summit Sofia 2024",
    shortName: "TSS24",
    description:
      "Най-голямата технологична конференция в България, събираща водещи експерти от цял свят. Три дни на интензивни лекции, workshop-ове и networking.",
    date: "2024-10-15",
    location: "София, НДК",
    category: "conference",
    categoryLabel: "Конференция",
    participants: 2500,
    rating: 4.8,
    votes: 1250,
    logo: "tss",
    organizer: "Tech Events Bulgaria",
    organizerLogo: "tech-events",
    website: "https://techsummit.bg",
    price: "150 лв",
    color: "from-blue-500 to-blue-700",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    imageAlt: "Technology conference with modern stage lighting",
  },
  {
    id: 2,
    name: "DevOps Days Sofia",
    shortName: "DODS24",
    description:
      "Специализирана конференция за DevOps, Cloud и Infrastructure автоматизация. Идеално място за споделяне на най-добри практики.",
    date: "2024-09-20",
    location: "София, Inter Expo Center",
    category: "conference",
    categoryLabel: "Конференция",
    participants: 800,
    rating: 4.6,
    votes: 480,
    logo: "dods",
    organizer: "DevOps Bulgaria",
    organizerLogo: "devops-bg",
    website: "https://devopsdays.bg",
    price: "100 лв",
    color: "from-emerald-500 to-teal-700",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    imageAlt: "DevOps team collaboration meeting",
  },
  {
    id: 3,
    name: "React Sofia Meetup",
    shortName: "RSM24",
    description:
      "Месечна среща на React общността в София. Споделяне на опит, нови функционалности и най-добри практики в React разработката.",
    date: "2024-08-25",
    location: "София, Betahaus",
    category: "meetup",
    categoryLabel: "Meetup",
    participants: 150,
    rating: 4.5,
    votes: 320,
    logo: "rsm",
    organizer: "React Sofia",
    organizerLogo: "react-sofia",
    website: "https://meetup.com/react-sofia",
    price: "Безплатно",
    color: "from-cyan-500 to-cyan-700",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    imageAlt: "Developer working on React code",
  },
  {
    id: 4,
    name: "AI & ML Conference",
    shortName: "AIML24",
    description:
      "Конференция за изкуствен интелект и машинно обучение. Две дни на дълбоко техническо съдържание и практически demo-та.",
    date: "2024-11-10",
    location: "Пловдив, Конгресен център",
    category: "conference",
    categoryLabel: "Конференция",
    participants: 1200,
    rating: 4.7,
    votes: 890,
    logo: "aiml",
    organizer: "AI Bulgaria",
    organizerLogo: "ai-bg",
    website: "https://aiml.bg",
    price: "200 лв",
    color: "from-violet-500 to-purple-700",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    imageAlt: "AI and machine learning visualization",
  },
  {
    id: 5,
    name: "Python Sofia Meetup",
    shortName: "PSM24",
    description:
      "Среща на Python разработчиците в София. Обсъждане на най-новите тенденции в Python света и практически уъркшопи.",
    date: "2024-09-05",
    location: "София, Work & Share",
    category: "meetup",
    categoryLabel: "Meetup",
    participants: 100,
    rating: 4.4,
    votes: 180,
    logo: "psm",
    organizer: "Python Sofia",
    organizerLogo: "python-sofia",
    website: "https://meetup.com/python-sofia",
    price: "Безплатно",
    color: "from-amber-500 to-yellow-600",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80",
    imageAlt: "Python programming code on screen",
  },
  {
    id: 6,
    name: "Cybersecurity Summit",
    shortName: "CYSSEC24",
    description:
      "Конференция за киберсигурност с фокус върху защита на данни, ethical hacking и най-новите заплахи в киберпространството.",
    date: "2024-12-01",
    location: "Варна, Двореца на културата и спорта",
    category: "conference",
    categoryLabel: "Конференция",
    participants: 600,
    rating: 4.9,
    votes: 156,
    logo: "cyss",
    organizer: "Security BG",
    organizerLogo: "security-bg",
    website: "https://cybersummit.bg",
    price: "180 лв",
    color: "from-rose-500 to-red-700",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    imageAlt: "Cybersecurity and digital protection concept",
  },
  {
    id: 7,
    name: "Frontend Sofia Conference",
    shortName: "FSC24",
    description:
      "Конференция за frontend разработка, covering JavaScript, CSS, accessibility и най-новите уеб технологии.",
    date: "2024-10-05",
    location: "София, Capital Fort",
    category: "conference",
    categoryLabel: "Конференция",
    participants: 900,
    rating: 4.6,
    votes: 450,
    logo: "fsc",
    organizer: "Frontend BG",
    organizerLogo: "frontend-bg",
    website: "https://frontend.bg",
    price: "120 лв",
    color: "from-orange-500 to-orange-600",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    imageAlt: "Modern web development workspace",
  },
  {
    id: 8,
    name: "Blockchain Tech Meetup",
    shortName: "BTM24",
    description:
      "Среща на blockchain ентусиастите в София. Дискусии за DeFi, NFTs, smart contracts и бъдещето на Web3.",
    date: "2024-09-15",
    location: "София, Platforma",
    category: "meetup",
    categoryLabel: "Meetup",
    participants: 80,
    rating: 4.3,
    votes: 95,
    logo: "btm",
    organizer: "Blockchain Bulgaria",
    organizerLogo: "blockchain-bg",
    website: "https://meetup.com/blockchain-sofia",
    price: "Безплатно",
    color: "from-indigo-500 to-indigo-700",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    imageAlt: "Blockchain technology concept",
  },
];

export const ratings = [
  {
    id: 1,
    rank: 1,
    name: "Tech Summit Sofia",
    shortName: "TSS",
    category: "Конференция",
    rating: 4.8,
    eventsCount: 5,
    totalVotes: 1250,
    logo: "tss",
    color: "from-blue-500 to-blue-700",
    trend: "up",
  },
  {
    id: 2,
    rank: 2,
    name: "DevOps Days Sofia",
    shortName: "DODS",
    category: "Конференция",
    rating: 4.6,
    eventsCount: 3,
    totalVotes: 480,
    logo: "dods",
    color: "from-emerald-500 to-teal-700",
    trend: "stable",
  },
  {
    id: 3,
    rank: 3,
    name: "AI & ML Conference",
    shortName: "AIML",
    category: "Конференция",
    rating: 4.7,
    eventsCount: 2,
    totalVotes: 890,
    logo: "aiml",
    color: "from-violet-500 to-purple-700",
    trend: "up",
  },
  {
    id: 4,
    rank: 4,
    name: "React Sofia Meetup",
    shortName: "RSM",
    category: "Meetup",
    rating: 4.5,
    eventsCount: 12,
    totalVotes: 320,
    logo: "rsm",
    color: "from-cyan-500 to-cyan-700",
    trend: "stable",
  },
  {
    id: 5,
    rank: 5,
    name: "Cybersecurity Summit",
    shortName: "CYSSEC",
    category: "Конференция",
    rating: 4.9,
    eventsCount: 1,
    totalVotes: 156,
    logo: "cyss",
    color: "from-rose-500 to-red-700",
    trend: "up",
  },
  {
    id: 6,
    rank: 6,
    name: "Frontend Sofia",
    shortName: "FSC",
    category: "Конференция",
    rating: 4.6,
    eventsCount: 4,
    totalVotes: 450,
    logo: "fsc",
    color: "from-orange-500 to-orange-600",
    trend: "down",
  },
];

export const news = [
  {
    id: 1,
    title:
      "Tech Summit Sofia 2024 ще бъде най-голямото технологично събитие в историята на България",
    date: "2024-07-15",
    author: "Иван Петров",
    excerpt:
      "Очаква се над 2500 участника на най-голямата технологична конференция в България...",
    content:
      "Tech Summit Sofia 2024 ще се проведе на 15 октомври в Националния дворец на културата. Тази година събитието ще обедини най-добрите IT експерти от България и региона. Програмата включва над 30 лекции, workshop-ове и networking сесии.\n\nОрганизаторите са подготвили специални гости от световно известни технологични компании, които ще споделят своя опит и най-добри практики.",
    category: "Събития",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    readTime: "5 мин",
  },
  {
    id: 2,
    title:
      "Рейтинговата система на IT събитията вече е активна - вашият глас има значение",
    date: "2024-06-20",
    author: "Мария Иванова",
    excerpt:
      "От днес можете да оценявате и коментирате IT събития, които сте посетили...",
    content:
      "Радваме се да обявим пускането на нашата нова рейтингова система. Всеки участник в IT събития вече може да остави своята оценка и отзив, което ще помогне на общността да избере най-добрите събития.",
    category: "Новини",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    readTime: "3 мин",
  },
  {
    id: 3,
    title: "DevOps Days Sofia 2024 - пълната програма вече е тук",
    date: "2024-08-01",
    author: "Георги Димитров",
    excerpt:
      "Организаторите оповестиха пълната програма на конференцията с над 25 лекции...",
    content:
      "DevOps Days Sofia 2024 ще се проведе на 20 септември с участието на водещи експерти от цял свят. Програмата включва теми за Cloud Native, Kubernetes, CI/CD и много други.",
    category: "Събития",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    readTime: "4 мин",
  },
  {
    id: 4,
    title: "AI & ML Conference 2024 ще се проведе в Пловдив",
    date: "2024-08-15",
    author: "Александър Стоянов",
    excerpt:
      "Конференция за изкуствен интелект ще събере експерти от цялата страна...",
    content:
      "AI & ML Conference 2024 ще се проведе на 10 ноември в Пловдив. Това е първото издание на конференцията, която цели да стане водещо събитие за AI и ML в региона.",
    category: "Събития",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    readTime: "6 мин",
  },
];

export const categories = [
  {
    id: 1,
    name: "conference",
    label: "Конференция",
    count: 15,
    icon: "mic2",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "meetup",
    label: "Meetup",
    count: 25,
    icon: "users",
    color: "bg-emerald-500",
  },
  {
    id: 3,
    name: "workshop",
    label: "Workshop",
    count: 12,
    icon: "hammer",
    color: "bg-amber-500",
  },
  {
    id: 4,
    name: "hackathon",
    label: "Хакатон",
    count: 8,
    icon: "code2",
    color: "bg-violet-500",
  },
  {
    id: 5,
    name: "seminar",
    label: "Семинар",
    count: 10,
    icon: "graduation-cap",
    color: "bg-rose-500",
  },
];

export const contactInfo = {
  email: "info@it-rating.example",
  phone: "+359 88 123 4567",
  address: "ул. Примерна 1, София 1000, България",
  workingHours: "Понеделник - Петък: 09:00 - 18:00",
};

export const navLinks = [
  { href: "/", label: "Начало", icon: "home" },
  { href: "/events", label: "Събития", icon: "calendar" },
  { href: "/ratings", label: "Рейтинги", icon: "star" },
  { href: "/news", label: "Новини", icon: "newspaper" },
  { href: "/about", label: "За нас", icon: "info" },
];

// Featured speakers data
export const speakers = [
  {
    id: 1,
    name: "Проф. д-р Петър Кънев",
    role: "AI Research Lead",
    company: "Google DeepMind",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: 2,
    name: "Мария Георгиева",
    role: "Senior DevOps Engineer",
    company: "Microsoft",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    id: 3,
    name: "Александър Димитров",
    role: "CTO",
    company: "TechStart Bulgaria",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: 4,
    name: "Елена Стоянова",
    role: "Security Architect",
    company: "Cisco",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

// API Configuration
export const apiConfig = {
  // Using Eventbrite mock endpoint for demo purposes
  eventbriteBaseUrl: "https://www.eventbriteapi.com/v3",
  // In production, you would use a real API key
  useMockData: true,
};

// Mock API data for external events
export const externalEvents = [
  {
    id: "ext1",
    name: "Global Tech Conference 2024",
    date: "2024-09-25",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    source: "Eventbrite",
    url: "#",
  },
  {
    id: "ext2",
    name: "AI World Summit",
    date: "2024-10-12",
    location: "San Francisco, USA",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    source: "Meetup",
    url: "#",
  },
  {
    id: "ext3",
    name: "React Summit Amsterdam",
    date: "2024-11-08",
    location: "Amsterdam, Netherlands",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    source: "Eventbrite",
    url: "#",
  },
];

// SVG Logo Components

export const logos = {
  tss: {
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="20" fill="url(#tss-gradient)"/>
      <text x="100" y="110" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">TS</text>
      <text x="100" y="140" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle">SUMMIT</text>
      <defs>
        <linearGradient id="tss-gradient" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stop-color="#3B82F6"/>
          <stop offset="100%" stop-color="#1D4ED8"/>
        </linearGradient>
      </defs>
    </svg>`,
    color: "#3B82F6",
  },
  dods: {
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="20" fill="url(#dods-gradient)"/>
      <text x="100" y="100" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">DD</text>
      <text x="100" y="130" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle">DEVOPS</text>
      <defs>
        <linearGradient id="dods-gradient" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stop-color="#22C55E"/>
          <stop offset="100%" stop-color="#16A34A"/>
        </linearGradient>
      </defs>
    </svg>`,
    color: "#22C55E",
  },
  rsm: {
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="20" fill="url(#rsm-gradient)"/>
      <text x="100" y="100" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">RS</text>
      <text x="100" y="130" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle">REACT</text>
      <defs>
        <linearGradient id="rsm-gradient" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stop-color="#06B6D4"/>
          <stop offset="100%" stop-color="#0891B2"/>
        </linearGradient>
      </defs>
    </svg>`,
    color: "#06B6D4",
  },
  aiml: {
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="20" fill="url(#aiml-gradient)"/>
      <text x="100" y="100" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">AI</text>
      <text x="100" y="130" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle">ML</text>
      <defs>
        <linearGradient id="aiml-gradient" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stop-color="#A855F7"/>
          <stop offset="100%" stop-color="#7C3AED"/>
        </linearGradient>
      </defs>
    </svg>`,
    color: "#A855F7",
  },
  psm: {
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="20" fill="url(#psm-gradient)"/>
      <text x="100" y="100" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">PY</text>
      <text x="100" y="130" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle">PYTHON</text>
      <defs>
        <linearGradient id="psm-gradient" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stop-color="#EAB308"/>
          <stop offset="100%" stop-color="#CA8A04"/>
        </linearGradient>
      </defs>
    </svg>`,
    color: "#EAB308",
  },
  cyss: {
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="20" fill="url(#cyss-gradient)"/>
      <text x="100" y="100" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">CS</text>
      <text x="100" y="130" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle">SECURITY</text>
      <defs>
        <linearGradient id="cyss-gradient" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stop-color="#EF4444"/>
          <stop offset="100%" stop-color="#DC2626"/>
        </linearGradient>
      </defs>
    </svg>`,
    color: "#EF4444",
  },
  "tech-events": {
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="20" fill="#3B82F6"/>
      <path d="M100 40 L160 80 L100 120 L40 80 Z" fill="white" opacity="0.9"/>
      <circle cx="100" cy="85" r="20" fill="#3B82F6"/>
      <text x="100" y="90" font-family="Arial" font-size="12" fill="white" text-anchor="middle">TE</text>
    </svg>`,
    color: "#3B82F6",
  },
  "devops-bg": {
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="20" fill="#22C55E"/>
      <circle cx="100" cy="70" r="25" fill="white" opacity="0.9"/>
      <circle cx="70" cy="130" r="25" fill="white" opacity="0.7"/>
      <circle cx="130" cy="130" r="25" fill="white" opacity="0.7"/>
    </svg>`,
    color: "#22C55E",
  },
  "react-sofia": {
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="20" fill="#06B6D4"/>
      <circle cx="100" cy="100" r="50" stroke="white" stroke-width="8" fill="none"/>
      <circle cx="100" cy="100" r="25" fill="white"/>
    </svg>`,
    color: "#06B6D4",
  },
  "ai-bg": {
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="20" fill="#A855F7"/>
      <path d="M60 100 L90 100 L100 70 L110 100 L140 100" stroke="white" stroke-width="8" fill="none"/>
      <circle cx="100" cy="130" r="15" fill="white"/>
    </svg>`,
    color: "#A855F7",
  },
  "python-sofia": {
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="20" fill="#EAB308"/>
      <text x="100" y="110" font-family="Arial" font-size="60" fill="white" text-anchor="middle">Py</text>
    </svg>`,
    color: "#EAB308",
  },
  "security-bg": {
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="20" fill="#EF4444"/>
      <path d="M100 40 L100 100 M70 70 L100 100 L130 70" stroke="white" stroke-width="8" fill="none"/>
      <rect x="60" y="100" width="80" height="60" stroke="white" stroke-width="4" fill="none"/>
    </svg>`,
    color: "#EF4444",
  },
};

// Category Icons (for lucide-react usage)
export const categoryIcons = {
  conference: "mic2",
  meetup: "users",
  workshop: "hammer",
  hackathon: "code2",
  seminar: "graduation-cap",
};
