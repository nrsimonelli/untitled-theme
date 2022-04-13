import React, { useState } from 'react';
import { Box } from './components/Box';
import { Flex, PaletteRow } from './components/Flex';
import PaletteCard from './components/PaletteCard';
import { ThemeToggle } from './components/ThemeToggle';
import {
  CATEGORIES,
  PALETTE,
  ColorOptions,
  PaletteProps,
} from './constants';
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  html: {
    fontFamily: '$untitled',
  },
  body: {
    margin: 0,
    padding: 0,
    bg: '$gray2',
    color: '$hiContrast',
    cursor: 'default',
    userSelect: 'none',
  },
});

interface InitialState {
  done: ColorOptions;
  info: ColorOptions;
  success: ColorOptions;
  danger: ColorOptions;
  attention: ColorOptions;
  severe: ColorOptions;
  base: ColorOptions;
  other: ColorOptions;
}

const App = () => {
  globalStyles();
  const [state, setState] = useState<InitialState>({
    done: 'purple',
    info: 'blue',
    success: 'green',
    danger: 'red',
    attention: 'yellow',
    severe: 'brown',
    base: 'slate',
    other: 'pink',
  });

  const isRowSelected = (color: PaletteProps) => {
    if (color.name === state[color.tag]) {
      return true;
    } else {
      return false;
    }
  };

  const findColorIndex = (color: ColorOptions) => {
    return PALETTE.findIndex((obj) => obj.name === color);
  };

  const handleRowClick = (color: PaletteProps) => {
    setState((i) => ({
      ...i,
      [color.tag]: color.name,
    }));
  };

  return (
    <Flex direction={'row'} align={'start'} wrap={'wrap'}>
      <Flex
        direction={'row'}
        justify={'between'}
        align={'center'}
        css={{ width: '$vw', bg: '$gray4', px: '$3' }}
      >
        <Box
          css={{
            width: '$full',
            fontSize: '$5',
            fontWeight: '$1',
            py: '$3',
          }}
        >
          Untitled Theme
        </Box>
        <ThemeToggle></ThemeToggle>
      </Flex>

      <Flex
        direction={'column'}
        align={{ '@initial': 'center' }}
        css={{
          p: '$3',
          order: '2',
          flex: '1 0 auto',
          '@bp5': { order: '1' },
        }}
      >
        <Box
          css={{
            width: '$full',
            textAlign: 'center',
            fontSize: '$6',
            fontWeight: '$2',
            py: '$3',
          }}
        >
          Palette
        </Box>
        {PALETTE.map((color) => (
          <PaletteRow
            key={color.name}
            direction={'row'}
            wrap={'wrap'}
            isSelected={isRowSelected(color)}
            onClick={() => handleRowClick(color)}
            css={{ mt: '$3' }}
          >
            <PaletteCard
              variant={color.name}
              type={1}
              gray={color.grayScale}
              title={color.tag}
            />
            <PaletteCard
              variant={color.name}
              type={2}
              gray={color.grayScale}
              title={color.tag}
            />
            <PaletteCard
              variant={color.name}
              type={3}
              gray={color.grayScale}
              title={color.tag}
            />
            <PaletteCard
              variant={color.name}
              type={4}
              gray={color.grayScale}
              title={color.tag}
            />
          </PaletteRow>
        ))}
      </Flex>
      <Flex
        direction={'column'}
        align={{ '@initial': 'center', '@bp5': 'start' }}
        css={{
          p: '$3',
          order: '1',
          flex: '1 0 auto',
          '@bp5': {
            order: '2',
          },
        }}
      >
        <Box
          css={{
            width: '$full',
            textAlign: 'center',
            fontSize: '$6',
            fontWeight: '$2',
            py: '$3',
            '@bp5': {
              width: '594px',
            },
          }}
        >
          Theme Display
        </Box>
        {CATEGORIES.map((category) => (
          <Flex
            key={category}
            direction={'row'}
            align={'center'}
            // justify={'start'}
            wrap={'wrap'}
            css={{ mt: '$3' }}
          >
            <Box
              css={{
                fontSize: '$4',
                fontWeight: '$1',
                mr: '$3',
                width: '$8',
                textTransform: 'capitalize',
              }}
            >
              {category}
            </Box>
            <Flex>
              <PaletteCard
                variant={state[category]}
                type={1}
                gray={
                  PALETTE[findColorIndex(state[category])].grayScale
                }
                title={state[category]}
              />
              <PaletteCard
                variant={state[category]}
                type={3}
                gray={
                  PALETTE[findColorIndex(state[category])].grayScale
                }
                title={state[category]}
              />
              <PaletteCard
                variant={state[category]}
                type={4}
                gray={
                  PALETTE[findColorIndex(state[category])].grayScale
                }
                title={state[category]}
              />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default App;
