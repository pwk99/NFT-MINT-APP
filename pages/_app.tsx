import { ChakraProvider } from "@chakra-ui/provider";
import { ThemeProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

export const Main = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider >
    <Component {...pageProps} key={router.route} />
  </ChakraProvider>
)

export default Main
