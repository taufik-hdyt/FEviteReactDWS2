import { Avatar, Box, HStack } from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";
import DrawerComponent from "./Drawer";
import React from "react";


export default class Header extends React.Component{
  state={
    isOpenDrawer: false
  }
  openDrawer(e:boolean){
    this.setState({
      isOpenDrawer: e
    })
  }
  render(){
    const {isOpenDrawer} = this.state
    return(
      <Box display={{ base: "block", lg: "none" }}>
      <HStack
        px={6}
        py={2}
        bg="linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%)"
        justify="space-between"
      >
        <Box cursor="pointer" onClick={()=> this.openDrawer(true)}>
          <FaHamburger color="white" size={24} />
        </Box>

        <Avatar size="sm" bg="teal.100" />

      </HStack>

      <DrawerComponent isOpen={isOpenDrawer} onClose={()=> this.openDrawer(false)} />
    </Box>
    )
  }
}
