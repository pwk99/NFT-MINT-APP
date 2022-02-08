import { ComponentStyleConfig, transition } from "@chakra-ui/react";

const Link: ComponentStyleConfig = {
  baseStyle: props => ({
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    _focus: {
      boxShadow: '0 0 0 3px rgba(145, 0, 230,0.5)',
    }
  }),
  variants: {
    base: {
      bg: 'grey.700',
      fontSize: 'md',
      color: 'grey.300',
      borderRadius: 'md',
      px: 1.5,
      _hover: {
        textDecoration: 'none',
        bg: 'none',
        color: 'primary.300',
        transition: '0.2s linear'
      },
      _active: {
        bg: 'grey.700'
      }
    },
    'menu-item': {
      display: 'inline-block',
      position: 'relative',
      fontSize: 'xl',
      color: 'grey.100',
      fontWeight: 'bold',
      _after: {
        content: "''",
        position: 'absolute',
        width: '100%',
        transform: 'scaleX(0)',
        height: '2px',
        bottom: 0,
        right: 0,
        bg: 'primary.300',
        transformOrigin: 'bottom right',
        transition: 'transform 0.25s ease-out'
      },
      _hover: {
        color: 'primary.300',
        textDecoration: 'none',
        _after: {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom right'
        }
      },
      _active: {
        color: 'primary.500'
      }
    }
  },
  defaultProps: {
    variant: 'base'
  }
}

export default Link;