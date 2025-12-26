export interface Nav {
  home: string;
  about: string;
  mechanism: string;
  tracks: string;
  bootcamp: string;
  specs: string;
  criteria: string;
  register: string;
}

export interface Hero {
  edition: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  secondary: string;
}

export interface Overview {
  title: string;
  subtitle: string;
  content1: string;
  content2: string;
}

export interface MechanismCard {
  title: string;
  icon: 'Zap' | 'Share2';
  desc: string;
}

export interface Mechanism {
  title: string;
  subtitle: string;
  desc: string;
  cards: MechanismCard[];
}

export interface Track {
  id: string;
  name: string;
  tag: string;
  goal: string;
  desc: string;
  icon: 'Database' | 'Cpu' | 'Shield';
  prize: string;
}

export interface Tracks {
  title: string;
  subtitle: string;
  list: Track[];
}

export interface AgendaItem {
  time: string;
  title: string;
  speaker: string;
  desc: string;
}

export interface AgendaSession {
  label: string;
  title: string;
  items: AgendaItem[];
}

export interface Bootcamp {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  sessions: AgendaSession[];
}

export interface Tech {
  title: string;
  subtitle: string;
  api_title: string;
  submission_title: string;
  api_desc: string;
  sub_desc: string;
}

export interface CriteriaItem {
  label: string;
  weight: string;
  desc: string;
}

export interface Criteria {
  title: string;
  subtitle: string;
  items: CriteriaItem[];
}

export interface Footer {
  rights: string;
  code: string;
}

export interface Translation {
  nav: Nav;
  hero: Hero;
  overview: Overview;
  mechanism: Mechanism;
  tracks: Tracks;
  bootcamp: Bootcamp;
  tech: Tech;
  criteria: Criteria;
  footer: Footer;
}

export interface ContentData {
  zh: Translation;
  en: Translation;
}

export type Lang = 'zh' | 'en';