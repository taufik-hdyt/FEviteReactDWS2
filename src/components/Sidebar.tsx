import React from "react";
import {
  Avatar,
  Box,
  Center,
  Checkbox,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import { AiOutlineFilter, AiFillTag } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { LuArrowRightCircle,LuArrowDownCircle } from "react-icons/lu";

interface IState {
  openCategory: boolean;
  openTag: boolean;
  selectedValue: string[]
}
export default class Sidebar extends React.Component<object, IState> {
  state = {
    openTag: false,
    openCategory: false,
    selectedValue: []
  };
  OpenCategory(e: boolean) {
    this.setState({
      openCategory: e,
    });
  }
  OpenTag(e: boolean) {
    this.setState({
      openTag: e,
    });
  }

  onSelect(select: string) {
    this.setState((prevState) => ({
      selectedValue: prevState.selectedValue.includes(select)
        ? prevState.selectedValue.filter((t: string) => t !== select)
        : [...prevState.selectedValue, select],
    }));
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Selected Filter: ${this.state.selectedValue}`);
  }

  render() {
    const { openTag, openCategory } = this.state;
    return (
      <GridItem
        p={8}
        display={{ base: "none", lg: "block" }}
        shadow="md"
        pos="relative"
        h='100vh'
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
          <InputRightAddon
            onClick={(e)=> this.handleSubmit(e)}
            children={<FcSearch size={24} />}
            cursor='pointer'
          />
        </InputGroup>

        {/* Category */}
        <Box
          rounded="lg"
          bg="linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%)"
        >
          <HStack
            cursor="pointer"
            align="center"
            justify="space-between"
            mt={10}
            px="6"
            py={1}
            rounded="lg"
            color="white"
            onClick={() => this.OpenCategory(!openCategory)}
          >
            <HStack>
              <BiSolidCategoryAlt size={20} />
              <Text fontSize="xl" fontWeight="semibold">
                Category
              </Text>
            </HStack>
            {
              openCategory ?
                 <LuArrowDownCircle size={20} /> : <LuArrowRightCircle size={20} />
            }
          </HStack>
          {openCategory && (
            <Stack pl={8} py={2} spacing={1} color="white" fontWeight="bold">
              <Checkbox
                onChange={() => {
                  this.onSelect("Chocolate");
                }}
                value="Chocolate"
              >
                Chocolate
              </Checkbox>
              <Checkbox
                onChange={() => {
                  this.onSelect("Cake");
                }}
                value="Cake"
              >
                Cake
              </Checkbox>
              <Checkbox
                onChange={() => {
                  this.onSelect("Bread");
                }}
                value="Bread"
              >
                Bread
              </Checkbox>
            </Stack>
          )}
        </Box>

        {/* tag */}
        <Box
          rounded="lg"
          bg="linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%)"
        >
          <HStack
            cursor="pointer"
            align="center"
            justify="space-between"
            mt={2}
            px="6"
            py={1}
            transition="ease-in-out"
            rounded="lg"
            color="white"
            onClick={() => this.OpenTag(!openTag)}
          >
            <HStack>
              <AiFillTag size={20} />
              <Text fontSize="xl" fontWeight="semibold">
                Tag
              </Text>
            </HStack>
            {
              openTag ?
                 <LuArrowDownCircle size={20} /> : <LuArrowRightCircle size={20} />
            }
          </HStack>

          {openTag && (
            <Stack pl={8} py={2} spacing={1} color="white" fontWeight="bold">
              <Checkbox
                onChange={() => {
                  this.onSelect("NEW");
                }}
                value="NEW"
              >
                NEW
              </Checkbox>
              <Checkbox   onChange={() => {
                  this.onSelect('FAVORITE');
                }} value="NEW">FAVORITE</Checkbox>
              <Checkbox   onChange={() => {
                  this.onSelect('FEATURED');
                }} value="NEW">FEATURED</Checkbox>
            </Stack>
          )}
        </Box>

        <Box
          cursor="pointer"
          pos="fixed"
          bottom={8}
          w="40px"
          h="40px"
          rounded="full"
        >
          <Avatar bg="teal.500" />
          {/* <Image rounded="full" src="src/assets/profil.jpg" /> */}
        </Box>
      </GridItem>
    );
  }
}
