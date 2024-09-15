export const addIfExist = <T>(items: (T | '' | null)[]) =>
  items.filter(Boolean) as T[]
