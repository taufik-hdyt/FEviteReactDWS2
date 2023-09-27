import React from "react";
import {
  Avatar,
  Box,
  Center,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { AiOutlineFilter, AiFillTag } from "react-icons/ai";
import { LuArrowRightCircle } from "react-icons/lu";

export default class Sidebar extends React.Component {
  render() {
    return (
      <GridItem
        p={8}
        display={{ base: "none", md: "block" }}
        shadow="md"
        h="100vh"
        pos="relative"
      >
        <HStack borderBottom="2px solid black" pb={4}>
          <Center bg="black" rounded="full" w="30px" h="30px">
            <AiOutlineFilter color="white" size={20} />
          </Center>
          <Text fontSize="xl" fontWeight="bold">
            Filter
          </Text>
        </HStack>

        <InputGroup
          size="md"
          mt={4}
          shadow="0 5px 20px -14px rgba(0, 0, 0, 0.25)"
        >
          <Input borderRight="none" placeholder="Search" />
          <InputRightAddon children={<FcSearch size={24} />} />
        </InputGroup>
        <Box>
          <HStack
            cursor="pointer"
            align="center"
            justify="space-between"
            mt={10}
            px="6"
            py={1}
            bg="linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%)"
            rounded="lg"
            color="white"
          >
            <HStack>
              <BiSolidCategoryAlt size={20} />
              <Text fontSize="xl" fontWeight="semibold">
                Category
              </Text>
            </HStack>
            <LuArrowRightCircle size={20} />
          </HStack>
        </Box>
        <Box>
          <HStack
            cursor="pointer"
            align="center"
            justify="space-between"
            mt={2}
            px="6"
            py={1}
            bg="linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%)"
            rounded="lg"
            color="white"
          >
            <HStack>
              <AiFillTag size={20} />
              <Text fontSize="xl" fontWeight="semibold">
                Tag
              </Text>
            </HStack>
            <LuArrowRightCircle size={20} />
          </HStack>
        </Box>


          <Box
            cursor="pointer"
            pos="fixed"
            bottom={8}
            w="40px"
            h="40px"
            rounded="full"
          >
              <Avatar bg='teal.500' />
            {/* <Image rounded="full" src="src/assets/profil.jpg" /> */}
          </Box>

      </GridItem>
    );
  }
}
