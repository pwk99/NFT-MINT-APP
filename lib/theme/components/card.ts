import { ComponentStyleConfig } from "@chakra-ui/react";

const Card: ComponentStyleConfig = {
  baseStyle: {
    display: 'flex',
    bg: 'foreground',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    borderRadius: '12px',
    boxShadow: '-0.5px 2px 4px #000',
    overflow: 'hidden'
  },
};

export default Card