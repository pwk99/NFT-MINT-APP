import { ComponentStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const ButtonStyles: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'md',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 2
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    }
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'primary.500',
      color: 'primary.300',
      _hover: {
        color: '#ffffff',
        borderColor: 'primary.400',
        bg: 'primary.400',
      },
      _active: {
        color: '#c9c9c9',
        borderColor: 'primary.600',
        bg: 'primary.600',
      },
      _focus: {
        boxShadow: 'none'
      }
    },
    filled: {
      bg: 'primary.500',
      color: 'white',
      _hover: {
        bg: 'primary.400'
      },
      _active: {
        color: '#c9c9c9',
        bg: 'primary.600',
      },
      _focus: {
        boxShadow: 'none'
      }
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'filled',
  },
}

export default ButtonStyles