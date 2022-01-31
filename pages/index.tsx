import { Box, Container, Text } from "@chakra-ui/react";
import Head from "next/head";

const Index = (props: unknown) => (
  <Container>
    <Head>
      <title>NFT Verifier</title>
      <meta property="og:title" content={'NFT Verifier'} />
    </Head>
    <Box as={'body'} >
      <Text as={'h1'} letterSpacing={4}>
        Hellow Wrold
      </Text>
    </Box>
  </Container >
)

export default Index