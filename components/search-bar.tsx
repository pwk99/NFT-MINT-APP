import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, useMultiStyleConfig, useStyleConfig } from "@chakra-ui/react";

const SearchBar = (props) => {
  const focusedStyles = { bg: 'grey.700' }

  return <InputGroup >
    <InputLeftElement children={<Search2Icon />} />
    <Input
      variant={'filled'}
      fontWeight={'bold'}
      fontSize={'sm'}
      letterSpacing={'wider'}
      boxShadow={'inset 0px 0px 2px #000'}
      border={'none'}
      bg={'foreground'}
      _hover={focusedStyles}
      _focus={focusedStyles}
      placeholder="Search NFT by #id"
      textTransform={'uppercase'} />
  </InputGroup>
};

export default SearchBar;