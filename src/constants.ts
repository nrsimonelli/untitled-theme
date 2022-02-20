export const SCREENS = {
  1: '640px',
  2: '768px',
  3: '1024px',
  4: '1280px',
  5: '1440px',
} as const;

export const THEMES = {
  DARK: 'dark-theme',
  DEFAULT: 'default-theme',
} as const;

export const CATEGORIES = [
  'info',
  'success',
  'danger',
  'attention',
  'severe',
  'done',
  'base',
] as const;

export type ColorOptions =
  | 'blue'
  | 'sky'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'grass'
  | 'mint'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'brown'
  | 'tomato'
  | 'red'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'indigo'
  | 'gray'
  | 'mauve'
  | 'slate'
  | 'sage'
  | 'olive'
  | 'sand';

interface PaletteProps {
  name:
    | 'blue'
    | 'sky'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'grass'
    | 'mint'
    | 'lime'
    | 'yellow'
    | 'amber'
    | 'orange'
    | 'brown'
    | 'tomato'
    | 'red'
    | 'crimson'
    | 'pink'
    | 'plum'
    | 'purple'
    | 'violet'
    | 'indigo'
    | 'gray'
    | 'mauve'
    | 'slate'
    | 'sage'
    | 'olive'
    | 'sand';
  emphasis: 'white' | 'black';
  grayScale: 'gray' | 'mauve' | 'slate' | 'sand' | 'olive' | 'sage';
  tag: string;
}

export const PALETTE: PaletteProps[] = [
  {
    name: 'blue',
    emphasis: 'white',
    grayScale: 'slate',
    tag: 'info',
  },
  {
    name: 'sky',
    emphasis: 'black',
    grayScale: 'slate',
    tag: 'info',
  },
  {
    name: 'cyan',
    emphasis: 'white',
    grayScale: 'slate',
    tag: 'info',
  },
  {
    name: 'teal',
    emphasis: 'white',
    grayScale: 'sage',
    tag: 'success',
  },
  {
    name: 'green',
    emphasis: 'white',
    grayScale: 'sage',
    tag: 'success',
  },
  {
    name: 'grass',
    emphasis: 'white',
    grayScale: 'olive',
    tag: 'success',
  },
  {
    name: 'mint',
    emphasis: 'black',
    grayScale: 'sage',
    tag: 'success',
  },
  {
    name: 'yellow',
    emphasis: 'black',
    grayScale: 'sand',
    tag: 'attention',
  },
  {
    name: 'amber',
    emphasis: 'black',
    grayScale: 'sand',
    tag: 'attention',
  },
  {
    name: 'red',
    emphasis: 'white',
    grayScale: 'mauve',
    tag: 'danger',
  },
  {
    name: 'tomato',
    emphasis: 'white',
    grayScale: 'mauve',
    tag: 'danger',
  },
  {
    name: 'crimson',
    emphasis: 'white',
    grayScale: 'mauve',
    tag: 'danger',
  },
  {
    name: 'orange',
    emphasis: 'white',
    grayScale: 'sand',
    tag: 'severe',
  },
  {
    name: 'brown',
    emphasis: 'white',
    grayScale: 'sand',
    tag: 'severe',
  },
  {
    name: 'purple',
    emphasis: 'white',
    grayScale: 'mauve',
    tag: 'done',
  },
  {
    name: 'plum',
    emphasis: 'white',
    grayScale: 'mauve',
    tag: 'done',
  },
  {
    name: 'violet',
    emphasis: 'white',
    grayScale: 'mauve',
    tag: 'done',
  },
  {
    name: 'pink',
    emphasis: 'white',
    grayScale: 'mauve',
    tag: 'other',
  },
  {
    name: 'indigo',
    emphasis: 'white',
    grayScale: 'slate',
    tag: 'other',
  },
  {
    name: 'lime',
    emphasis: 'black',
    grayScale: 'olive',
    tag: 'other',
  },
  {
    name: 'gray',
    emphasis: 'white',
    grayScale: 'gray',
    tag: 'base',
  },
  {
    name: 'mauve',
    emphasis: 'white',
    grayScale: 'mauve',
    tag: 'base',
  },
  {
    name: 'slate',
    emphasis: 'white',
    grayScale: 'slate',
    tag: 'base',
  },
  {
    name: 'sage',
    emphasis: 'white',
    grayScale: 'sage',
    tag: 'base',
  },
  {
    name: 'olive',
    emphasis: 'white',
    grayScale: 'olive',
    tag: 'base',
  },
  {
    name: 'sand',
    emphasis: 'white',
    grayScale: 'sand',
    tag: 'base',
  },
];
