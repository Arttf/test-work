export const appPaths = {
  home: '/',
  task: (id: number) => `/tasks/${id}`,
} as const;
