import '@fontsource/source-sans-pro'
import { ChakraProvider } from "@chakra-ui/provider";
import { AppProps } from "next/app";
import Theme from "../lib/theme";

export const Main = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider theme={Theme}>
    <Component {...pageProps} key={router.route} />
  </ChakraProvider>
)

export default Main
