export const colors = {
  white: 'var(--white)',
  'extra-light': 'var(--extra-light)',
  'light-gray': 'var(--light-gray)',
  gray: 'var(--gray)',
  'dark-gray': 'var(--dark-gray)',
  black: 'var(--black)',
  success: 'var(--success)',
  error: 'var(--error)',
} as const;

export type Color = keyof typeof colors;
