import { ChakraTheme, extendTheme } from '@chakra-ui/react'
import { global, fonts, textStyles } from './styles'
import colors from './color'
import Button from './components/button'
import Card from './components/card'
import Link from './components/link';

const config = {
  useSystemColorMode: true
}

const ThemeOverrides: Partial<ChakraTheme> = {
  styles: {
    global
  },
  colors,
  fonts,
  textStyles,
  components: {
    Button,
    Card,
    Link,
  }
}

export default extendTheme({ ...ThemeOverrides, config })
