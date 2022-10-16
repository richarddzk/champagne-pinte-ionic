export interface i18nWrapper {

  t: (...args: any[]) => string;
  locale: (l: any, dict: any) => void;
}
