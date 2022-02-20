import { Card } from './Card';
import { Flex } from './Flex';

interface PropTypes {
  type: 1 | 2 | 3 | 4;
  variant:
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
  title: string;
  gray: 'gray' | 'mauve' | 'slate' | 'sand' | 'olive' | 'sage';
}

const PaletteCard = ({ type, variant, gray, title }: PropTypes) => {
  return (
    <Flex
      direction={'column'}
      css={{
        square: '150px',
        borderRadius: '$3',
        bg: `$${gray}2`,
        boxShadow: '$1',
        [`& + ${Flex}`]: {
          ml: '$3',
        },
      }}
    >
      <Card variant={variant} type={type}>
        Aa
      </Card>

      <Flex css={{ p: '$2', color: `$${variant}12` }}>{title}</Flex>
    </Flex>
  );
};

export default PaletteCard;
