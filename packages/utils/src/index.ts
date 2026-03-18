export const normalizeBaseUrl = (value: string) => value.replace(/\/+$/, '');

export const isDefined = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined;
