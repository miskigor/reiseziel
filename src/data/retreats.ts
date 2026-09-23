export interface RetreatTerm {
  id: string;
  path: string;
  dates: {
    hr: string;
    en: string;
    de: string;
  };
  /** Short label for cards / overview */
  label: {
    hr: string;
    en: string;
    de: string;
  };
}

export const retreatTerms: RetreatTerm[] = [
  {
    id: '2026-09',
    path: '/retreat',
    dates: {
      hr: '19. – 26.09.2026.',
      en: '19 – 26 Sep 2026',
      de: '19. – 26.09.2026',
    },
    label: {
      hr: 'Rujan 2026',
      en: 'September 2026',
      de: 'September 2026',
    },
  },
  {
    id: '2027-06',
    path: '/retreat/2027-06',
    dates: {
      hr: '19.06. – 26.06.2027.',
      en: '19 – 26 Jun 2027',
      de: '19.06. – 26.06.2027',
    },
    label: {
      hr: 'Lipanj 2027',
      en: 'June 2027',
      de: 'Juni 2027',
    },
  },
  {
    id: '2027-09',
    path: '/retreat/2027-09',
    dates: {
      hr: '18.09. – 25.09.2027.',
      en: '18 – 25 Sep 2027',
      de: '18.09. – 25.09.2027',
    },
    label: {
      hr: 'Rujan 2027',
      en: 'September 2027',
      de: 'September 2027',
    },
  },
];

export function getRetreatByPath(pathname: string): RetreatTerm | null {
  const path = pathname.replace(/\/$/, '') || '/';
  if (path === '/retreat' || path === '/retreat/2026-09') {
    return retreatTerms[0];
  }
  return retreatTerms.find((term) => term.path === path) ?? null;
}

export function isRetreatPath(pathname: string): boolean {
  return getRetreatByPath(pathname) !== null || pathname.replace(/\/$/, '') === '/retreat';
}
