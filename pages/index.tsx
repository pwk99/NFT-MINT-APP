import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";
import Card from "../components/Card";

const Index = (props: unknown) => (
  <Container>
    <Head>
      <title>NFT Mint App</title>
      <meta property="og:title" content={'NFT Verifier'} />
    </Head>
    <Box as={'main'} textAlign={'center'}>
      <SimpleGrid spacingY={'4'} >
        <Text as={"h1"} >H1 Title</Text>
        <Text as={"h2"} >H2 Title</Text>
        <Text textStyle={"fg"}>This is a NORMAL text</Text>
        <Text as={"p"} textStyle={"fg"}>This is a foreground text</Text>
        <Text as={"p"} textStyle={"bg"}>This is a background/inactive text</Text>
        <Flex justify={'space-around'}>
          <Button >Normal btn</Button>
          <Button variant={'outline'}>Outline btn</Button>
        </Flex>
        <Flex justify={'space-around'} align={'center'}>
          <Link href="#">Normal link</Link>
          <Link href="#" variant={'menu-item'}>Menu link</Link>
        </Flex>
        <Flex justify={'center'}>
          <Card imageUrl={"/vibes.jpeg"} title="Cyberpunk" detail="Born in 2099" />
        </Flex>
      </SimpleGrid>
    </Box>
  </Container >
)

export default Index