import { Avatar, Box, HStack, useDisclosure } from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";
import DrawerComponent from "./Drawer";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={{ base: "block", md: "none" }}>
      <HStack
        px={6}
        py={2}
        bg="linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%)"
        justify="space-between"
      >
        <Avatar size="sm" bg="teal.100" />

        <Box cursor="pointer" onClick={onOpen}>
          <FaHamburger color="white" size={24} />
        </Box>
      </HStack>

      <DrawerComponent isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
