import { Box, Button, Container, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Card from "../components/Card";
import SearchBar from "../components/search-bar";

const Index = (props: unknown) => (
  <Container>
    <Head>
      <title>NFT Mint App</title>
      <meta property="og:title" content={'NFT Verifier'} />
    </Head>
    <Box as={'main'} textAlign={'center'}>
      <SimpleGrid spacing={'4'} >
        <Text as={"h1"} >H1 Title</Text>
        <Text as={"h2"} >H2 Title</Text>
        <Text textStyle={"fg"}>This is a NORMAL text</Text>
        <Text as={"p"} textStyle={"fg"}>This is a foreground text</Text>
        <Text as={"p"} textStyle={"bg"}>This is a background/inactive text</Text>
        <HStack justify={'space-around'}>
          <Button >Normal btn</Button>
          <Button variant={'outline'}>Outline btn</Button>
        </HStack>
        <HStack justify={'space-around'} align={'center'}>
          <Link href="#">Normal link</Link>
          <Link href="#" variant={'menu-item'}>Menu link</Link>
        </HStack>
        <VStack justify={'center'} spacing={'4'}>
          <SearchBar />
          <Card imageUrl={"/vibes.jpeg"} title="Cyberpunk" detail="Born in 2099" />
        </VStack>
      </SimpleGrid>
    </Box>
  </Container >
)

export default Index