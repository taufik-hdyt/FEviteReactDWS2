import React from "react";
import {
  Center,
  Checkbox,
  GridItem,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
} from "@chakra-ui/react";

export default class Sidebar extends React.Component {

  render() {
    return (
      <GridItem p={8} display={{base: 'none', md:'block'}}>
        <HStack borderBottom="2px solid black" pb={4}>
          <Center bg="black" rounded="full" w="30px" h="30px">
            p
          </Center>
          <Heading as="h2" fontSize="2xl">
            Filter
          </Heading>
        </HStack>

        <InputGroup size="md" mt={4}>
          <Input borderColor="black" borderRight="none" placeholder="Search" />
          <InputRightAddon
            bg="linear-gradient(to right,gray, white)"
            children="Cari"
          />
        </InputGroup>

        <HStack
          cursor="pointer"
          align="center"
          justify="space-between"
          mt={10}
          pl="6"
        >
          <Text fontSize="xl" fontWeight="semibold">
            Categories
          </Text>
        </HStack>

        <VStack align="start" pl={8} mt={2}>
          <Checkbox size="lg" colorScheme="green">
            contoh
          </Checkbox>
        </VStack>

        <HStack
          cursor="pointer"
          align="center"
          justify="space-between"
          mt={10}
          pl="6"
        >
          <Text fontSize="xl" fontWeight="semibold">
            Tag
          </Text>
        </HStack>

        <VStack align="start" pl={8} mt={2}>
          <HStack>
            <Checkbox size="lg" />

            <Text px={2} rounded="lg" color="white">
              contoh
            </Text>
          </HStack>
        </VStack>
      </GridItem>
    );
  }
}
