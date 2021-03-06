import { styled } from '../stitches.config';

export const Flex = styled('div', {
  // local resets here
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    wrap: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
  },
});

export const PaletteRow = styled(Flex, {
  borderRadius: '$2',
  outlineOffset: '8px',
  $$box: '$bg2',
  '&:hover': {
    outline: '1px solid $purple8',
  },
  variants: {
    isSelected: {
      true: {
        boxShadow:
          '$colors$bg2 0px 0px 0px 7px, $colors$purple8 0px 0px 1px 8px',
        outline: '1px solid $purple8',
      },
    },
  },
});
