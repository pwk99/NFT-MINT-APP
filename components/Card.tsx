import { Box, Image, Text, useStyleConfig, VStack } from "@chakra-ui/react"
import { FC } from "react";

interface CardProps {
  title: string,
  detail: string,
  imageUrl?: string
}
const Card: FC<CardProps> = ({ detail, title, imageUrl }) => {
  const styles = useStyleConfig('Card');

  return (
    <Box __css={styles} width={'fit-content'}>
      <Image
        src={imageUrl ?? '/hero.png'}
        borderBottomRadius={'24px'}
        boxSize={'300px'}
        objectFit={'cover'}
        alt={'image'}
        boxShadow={'0 2px 2px rgba(0,0,0,0.25)'}
      />
      <VStack align={'start'} m={'14px 0 20px 18px'}>
        <Text textStyle={"card-title"}>{title}</Text>
        <Text textStyle={"card-detail"}>{detail}</Text>
      </VStack>
    </Box>
  )
}

export default Card