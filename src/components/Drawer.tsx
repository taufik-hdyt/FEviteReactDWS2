import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { BiSolidCategoryAlt } from "react-icons/bi";
import { LuArrowLeftCircle } from "react-icons/lu";
import { AiFillTag } from "react-icons/ai";


interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
export default class DrawerComponent extends React.Component<IProps>{
  render(){
    const {isOpen,onClose} = this.props
    return (
      <Drawer  isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent p={4}>
        <DrawerCloseButton />
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
              <LuArrowLeftCircle size={20} />
              <Text fontSize="xl" fontWeight="semibold">
                Category
              </Text>
            </HStack>
            <BiSolidCategoryAlt size={20} />
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
              <LuArrowLeftCircle size={20} />
              <Text fontSize="xl" fontWeight="semibold">
                Tag
              </Text>
            </HStack>
            <AiFillTag size={20} />
          </HStack>
        </Box>
      </DrawerContent>
    </Drawer>
    )
  }
}



