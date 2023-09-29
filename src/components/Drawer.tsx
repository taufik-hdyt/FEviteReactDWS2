import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { BiSolidCategoryAlt } from "react-icons/bi";
import { LuArrowLeftCircle } from "react-icons/lu";
import { AiFillTag } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import ItemCategory from "./ItemCategory";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
export default class DrawerComponent extends React.Component<IProps> {
  state = {
    openTag: false,
    openCategory: false,
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
  render() {
    const { isOpen, onClose } = this.props;
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent p={4}>
          <DrawerCloseButton />
          <InputGroup
            size="md"
            mt={12}
            shadow="0 5px 20px -14px rgba(0, 0, 0, 0.25)"
          >
            <Input borderRight="none" placeholder="Search" />
            <InputRightAddon
              // onClick={(e)=> this.handleSubmit(e)}
              children={<FcSearch size={24} />}
              cursor="pointer"
            />
          </InputGroup>

          {/* ================ Category ==================== */}
          <Box
            mt={4}
            rounded="lg"
            bg="linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%)"
          >
            <HStack
              cursor="pointer"
              align="center"
              justify="space-between"
              px="6"
              py={1}
              rounded="lg"
              color="white"
            >
              <HStack>
                <LuArrowLeftCircle size={20} />
                <Text fontSize="xl" fontWeight="semibold">
                  Category
                </Text>
              </HStack>
              <BiSolidCategoryAlt size={20} />
            </HStack>
              <ItemCategory />
          </Box>

          {/*=========================== Tag===================== */}
          <Box rounded='lg' mt={2} bg="linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%)">
            <HStack
              cursor="pointer"
              align="center"
              justify="space-between"
              px="6"
              py={1}
              rounded="lg"
              color="white"
            >
              <HStack>
                <LuArrowLeftCircle size={20} />
                <Text fontSize="xl" fontWeight="semibold">
                  Tag
                </Text>
              </HStack>
              <AiFillTag size={20} />
            </HStack>
            <ItemCategory />
          </Box>
        </DrawerContent>
      </Drawer>
    );
  }
}
