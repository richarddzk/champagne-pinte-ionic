export interface i18nWrapper {
  activeLocale: any;
  t: (...args: any[]) => string;
  locale: (l: any, dict: any) => void;
}
