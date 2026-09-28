// Reads the YAML data files in src/data/ at build time.
import { load as parseYaml } from 'js-yaml';
import teamRaw from '../data/team.yml?raw';
import newsRaw from '../data/news.yml?raw';

export type Member = {
  name: string;
  role?: string;
  affiliation?: string;
  bio?: string;
  photo?: string;
  alt?: string;
  link?: string;
};

export type NewsItem = { date: string; text: string; link?: string };

export const team = parseYaml(teamRaw) as { current: Member[]; past?: Member[] };
export const news = (parseYaml(newsRaw) as NewsItem[]).map((n) => ({
  ...n,
  // YAML parses bare dates as Date objects; keep a plain YYYY-MM-DD string.
  date: n.date instanceof Date ? n.date.toISOString().slice(0, 10) : String(n.date),
}));

export const fmtDate = (d: Date | string, opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }) =>
  new Date(d).toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });
